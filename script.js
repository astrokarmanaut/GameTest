const { World, Vec2, BodyType } = planck;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const world = World({
    gravity: Vec2(0, 10)
});

const shapes = [];
const numShapes = 10;

for (let i = 0; i < numShapes; i++) {
    const size = Math.random() * 20 + 10; // Random size between 10 and 30
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2; // Start from the top half of the canvas
    const velocity = Vec2(Math.random() * 20 - 10, Math.random() * 20 - 10); // Random initial velocity

    const shape = world.createBody({
        type: BodyType.DYNAMIC,
        position: Vec2(x, y),
    });
    shape.createFixture(planck.Box(size / 2, size / 2), { density: 1.0 });

    shape.setLinearVelocity(velocity);
    shapes.push({ shape, size });
}

function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';

    shapes.forEach(({ shape, size }) => {
        const position = shape.getPosition();
        ctx.fillRect(position.x - size / 2, position.y - size / 2, size, size);
    });

    requestAnimationFrame(drawShapes);
}

function updatePhysics() {
    world.step(1 / 60);
    requestAnimationFrame(updatePhysics);
}

updatePhysics();
drawShapes();
