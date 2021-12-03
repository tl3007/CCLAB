console.log("Loaded!");
let inc = 0.06;
let scl = 10;
let cols, rows;
let zoff = 0;
let fr;
let particles = [];
let flowfield;
let r = 255;
let b = 255;
let g = 255;

//song
let song;
let mic;

function preload(){
  song = loadSound("assets/coffee.mp3");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container2");
  background(159,129,112);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
      particles[i] = new Particle();
    }

  //song
  mic = new p5.AudioIn();
}

function draw() {
  let vol = map(mouseY, 0, height, 1.0, 0.0, true);
  song.setVolume(vol);

  //pattern control
  if (keyIsPressed) {
      if (key == "ArrowUp") {
        inc = 0.09;
        r = 210; //orange
        g =  125;
        b =  25;
      }
    }
    if (keyIsPressed) {
      if (key == "ArrowDown") {
        inc = 0.04;
        r = 111; //dark brown
        g = 78;
        b = 55;
      }
      if (keyCode == 32) { //spacebar
        background(159,129,112);
        inc = 0.06;
        r = 255;
        g = 255;
        b = 255;
  }
    }

  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 3;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}

function mouseDragged(){
  if (song.isPlaying()){

  } else{
    song.play();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 1.5;
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors) {
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    let force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    stroke(r,g,b, 10);
    strokeWeight(5);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }
}
