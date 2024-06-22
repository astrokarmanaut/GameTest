// Initialize Planck.js
const { Vec2, World, Body, Box, FixtureDef } = planck;

// Create a new world with gravity
const world = new World({
    gravity: Vec2(0, -10) // Adjust gravity as needed
});

// Create a canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Convert between world coordinates and canvas coordinates
const toCanvasCoords = (pos) => ({ x: pos.x, y: canvas.height - pos.y });
const toWorldCoords = (pos) => Vec2(pos.x, canvas.height - pos.y);

// Create ground and walls
const ground = world.createBody();
ground.createFixture(Box(canvas.width, 10), { friction: 0.5 });
const leftWall = world.createBody();
leftWall.createFixture(Box(10, canvas.height), { friction: 0.5 });
const rightWall = world.createBody();
rightWall.createFixture(Box(10, canvas.height), { friction: 0.5, position: Vec2(canvas.width, 0) });

// Create triangles
const createTriangle = (position, size) => {
    const body = world.createBody({ position: toWorldCoords(position) });
    const vertices = [
        toWorldCoords({ x: -size / 2, y: 0 }),
        toWorldCoords({ x: size / 2, y: 0 }),
        toWorldCoords({ x: 0, y: size })
    ];
    const fixtureDef = FixtureDef({
        shape: { type: 'polygon', vertices },
        density: 1.0,
        restitution: 0.5, // Bouncy triangles
        friction: 0.3
    });
    body.createFixture(fixtureDef);
    return body;
};

const triangles = [
    createTriangle({ x: 200, y: 400 }, 50),
    createTriangle({ x: 400, y: 500 }, 60),
    createTriangle({ x: 600, y: 300 }, 40),
    createTriangle({ x: 700, y: 200 }, 30)
];

// Simulation loop
const timeStep = 1 / 60;
let lastTime = 0;

function animate(time) {
    requestAnimationFrame(animate);
    const deltaTime = (time - lastTime) / 1000;
    world.step(Math.min(deltaTime, 0.1));
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw ground and walls
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, canvas.height - 10, canvas.width, 10);
    ctx.fillRect(0, 0, 10, canvas.height);
    ctx.fillRect(canvas.width - 10, 0, 10, canvas.height);

    // Draw triangles
    ctx.fillStyle = 'blue';
    triangles.forEach(triangle => {
        const position = toCanvasCoords(triangle.getPosition());
        const angle = triangle.getAngle();
        ctx.save();
        ctx.translate(position.x, position.y);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(-25, 0);
        ctx.lineTo(25, 0);
        ctx.lineTo(0, 50);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    });

    lastTime = time;
}

animate(0); // Start animation
