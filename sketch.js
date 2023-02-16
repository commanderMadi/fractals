// function setup() {
//     createCanvas(900, 600);
//     angleMode(DEGREES);
//     background(0);
// }

// function draw() {
//     noStroke();
//     translate(width / 2, height / 2);
//     let radius = frameCount / 10;
//     let theta = frameCount;
//     let x = cos(theta) * radius;
//     let y = sin(theta) * radius;
//     ellipse(x, y, 25, 25);
// }

// Oscillation

// function setup() {
//     createCanvas(900, 600);
//     background(0);
//     angleMode(DEGREES);
// }

// function draw() {
//     background(0);
//     fill(255);

//     translate(width / 2, height / 2);
//     let amp = width / 6;
//     let period = 0;
//     let phase = 0;
//     let freq = 1;
//     // let locX = sin((360 * frameCount) / period + phase) * amp;
//     let locX = sin(frameCount * freq + phase) * amp;

//     ellipse(locX, 0, 30, 30);
// }

// Additive Synthesis

// function setup() {
//     createCanvas(900, 600);
//     background(0);
//     angleMode(DEGREES);
// }

// function draw() {
//     background(0);
//     stroke(255);

//     translate(0, height / 2);

//     noFill();
//     beginShape();
//     for (let x = 0; x <= width; x++) {
//         // console.log(val);
//         let wave1 = (sin(x + frameCount) * height) / 4;
//         let wave2 = (sin(x * 10 + frameCount) * height) / 20;
//         let wave3 = noise(x / 10 + frameCount / 100) * 100;

//         vertex(x, wave1 + wave2 + wave3);
//     }
//     endShape();
// }

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
    mySquare(startSize);
    noLoop();
}

function mySquare(side) {
    side = side / 3;
    if (side >= 1) {
        fill(200 % side, 100 % side, 80 % side);
        rect(0, 0, side, side);
        // left center translation
        push();
        translate(-side, 0);
        mySquare(side);
        pop();
        //left top translation
        push();
        translate(-side, -side);
        mySquare(side);
        pop();
        // center top translation
        push();
        translate(0, -side);
        mySquare(side);
        pop();
        // right top translation
        push();
        translate(side, -side);
        mySquare(side);
        pop();
        // right center translation
        push();
        translate(side, 0);
        mySquare(side);
        pop();
        // right bottom translation
        push();
        translate(side, side);
        mySquare(side);
        pop();
        // center bottom translation
        push();
        translate(0, side);
        mySquare(side);
        pop();
        // left bottom translation
        push();
        translate(-side, side);
        mySquare(side);
        pop();
    }
}
