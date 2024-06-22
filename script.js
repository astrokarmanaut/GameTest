// Create a Planck.js world
const { World, Vec2, BodyType } = planck;
const world = World(Vec2(0, 10));

// Set up the canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to create a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create an array to store the bodies (shapes)
const bodies = [];
const numBodies = 10;

// Create random bodies
for (let i = 0; i < numBodies; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const size = Math.random() * 20 + 10; // Random size between 10 and 30
    const color = getRandomColor();

    const body = world.createBody({
        type: BodyType.DYNAMIC,
        position: Vec2(x, y),
    });
    body.createFixture(planck.Box(size / 2, size / 2), { density: 1.0 });

    body.color = color;
    bodies.push(body);
}

// Animation loop
function animate() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update physics world
    world.step(1 / 60);

    // Draw bodies on canvas
    bodies.forEach(body => {
        const position = body.getPosition();
        ctx.fillStyle = body.color;
        ctx.beginPath();
        ctx.arc(position.x, position.y, 10, 0, 2 * Math.PI);
        ctx.fill();
    });

    // Request next animation frame
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
