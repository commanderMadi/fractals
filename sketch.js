// Sierpinski carpet

let startSize;

function setup() {
    createCanvas(900, 600);
    background(255);
    fill(0);
    noStroke();
    noSmooth();
    rectMode(CENTER);
    startSize = pow(3, 6);
}

function draw() {
    translate(width / 2, height / 2);
    squareGenerator(startSize);
    noLoop();
}

function squareGenerator(side) {
    side = side / 3;
    if (side >= 1) {
        fill(200 % side, 100 % side, 80 % side);
        rect(0, 0, side, side);
        // left center translation
        push();
        translate(-side, 0);
        squareGenerator(side);
        pop();
        //left top translation
        push();
        translate(-side, -side);
        squareGenerator(side);
        pop();
        // center top translation
        push();
        translate(0, -side);
        squareGenerator(side);
        pop();
        // right top translation
        push();
        translate(side, -side);
        squareGenerator(side);
        pop();
        // right center translation
        push();
        translate(side, 0);
        squareGenerator(side);
        pop();
        // right bottom translation
        push();
        translate(side, side);
        squareGenerator(side);
        pop();
        // center bottom translation
        push();
        translate(0, side);
        squareGenerator(side);
        pop();
        // left bottom translation
        push();
        translate(-side, side);
        squareGenerator(side);
        pop();
    }
}
