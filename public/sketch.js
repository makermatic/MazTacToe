let bg;

function preload() {
    bg = loadImage('assets/Maz.png');
}

function setup() {
    createCanvas(880, 880);
    background(bg);

    socket = io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    // Draw a line
    noStroke();
    fill("#0088ff");
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
    fill("#db0f00");
    ellipse(mouseX, mouseY, 7, 7);
}