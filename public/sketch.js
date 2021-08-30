let bg;

// Color Vars
let r1, g1, b1;
let r2, g2, b2;

function preload() {
    bg = loadImage('assets/Maz.png');
}

function setup() {
    createCanvas(880, 880);
    background(bg);

    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);

    r1 = random(255);
    g1 = random(255);
    b1 = random(255);

    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
}

function newDrawing(data) {
    // Draw a line
    noStroke();
    fill(r2, g2, b2);
    ellipse(data.x, data.y, 7, 7);
}

function mouseDragged() {
    console.log(mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY,
    }

    socket.emit('mouse', data);

    // Draw a line
    noStroke();
    fill(r1, g1, b1);
    ellipse(mouseX, mouseY, 7, 7);
}