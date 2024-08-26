const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const stars = [];
const numStars = 200;
const maxStarSize = 3;
const maxStarSpeed = 1; // Increased speed value
const lines = [];
const connectionRange = 150;
const maxConnections = 10;
let mouseX = -1, mouseY = -1;
let isMouseMoving = false;

class Star {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.connections = []; // Track connections for each star
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'black';
        ctx.fill();
    }

    update() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

function createStars() {
    for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * maxStarSize + 1;
        const speed = Math.random() * maxStarSpeed + 0.5; // Adjusted minimum speed
        stars.push(new Star(x, y, size, speed));
    }
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
    }
    if (isMouseMoving) {
        drawLines();
    }
    connectStars(); // Call the function to connect stars
    requestAnimationFrame(animateStars);
}

function drawLines() {
    lines.length = 0;
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'black';
    const nearbyStars = [];
    for (let i = 0; i < stars.length; i++) {
        const dx = stars[i].x - mouseX;
        const dy = stars[i].y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < connectionRange) {
            nearbyStars.push({ star: stars[i], distance });
        }
    }
    nearbyStars.sort((a, b) => a.distance - b.distance);
    const connections = Math.min(nearbyStars.length, maxConnections);
    for (let i = 0; i < connections; i++) {
        const star = nearbyStars[i].star;
        lines.push({
            x1: mouseX,
            y1: mouseY,
            x2: star.x,
            y2: star.y,
        });
        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();
    }
}

function connectStars() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].connections = [];
        for (let j = i + 1; j < stars.length; j++) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < connectionRange / 2) {
                stars[i].connections.push(stars[j]);
                stars[j].connections.push(stars[i]);
            }
        }
    }

    ctx.lineWidth = 0.2;
    ctx.strokeStyle = 'lightblack';
    for (let i = 0; i < stars.length; i++) {
        for (let j = 0; j < stars[i].connections.length; j++) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[i].connections[j].x, stars[i].connections[j].y);
            ctx.stroke();
        }
    }
}

canvas.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    isMouseMoving = true;
    drawLines();
});

canvas.addEventListener('mouseleave', () => {
    isMouseMoving = false;
});

createStars();
animateStars();
