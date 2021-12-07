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

let coffee;

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//RECIPE SLIDESHOW = REFERENCE TO @W3SCHOOLS
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//

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

  flowfield = new Array(cols * rows);
  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }

  //coffee bean
  coffee = new CoffeeBean(width / 2, height / 2);

  //song
  mic = new p5.AudioIn();
}

function draw() {
  let vol = map(mouseY, 0, height, 1.0, 0.0, true);
  song.setVolume(vol);

  //coffee cup handle
  fill(210, 125, 45);
  noStroke();
  rect(850, 330, 200, 50, 20);

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

  coffee.update();
  coffee.display();
}

//music interaction
function mouseDragged(){
  if (song.isPlaying()){

  } else{
    song.play();
  }
}

//REFERENCE TO @THE CODING TRAIN
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

//COFFEE BEAN
class CoffeeBean {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  update() {
    //rectMode(CENTER)
    //this.speed = sin(frameCount/ 20);
    //this.y+=this.speed*2
    //this.scale_width+=this.speed/60
  }

  display() {
    push();
    this.drawBody();
    pop();
  }

  drawBody() {
    push();
    ellipseMode(CENTER);
    translate(this.x, this.y);
    // :D = MADE POSSIBLE WITH THE HELP OF PROFESSOR MOON!
    rotate(frameCount * 0.01);

    fill(26, 9, 0);
    stroke(210, 125, 45);
    strokeWeight(10);
    ellipse(0,0, 400,400); //coffee cup
    noStroke();
    fill(74, 4, 4);
    ellipse(0, 0, 185, 250);
    ellipse( 50, 0, 185, 250); //body
    //noStroke();
    //fill(110, 38, 14);
    //arc( -40,  -50, -180, -180, 400, PI - HALF_PI, OPEN); //light brown detail
    fill(0);
    ellipse(-10, 0, 25, 25);
    ellipse(70, 0, 25, 25); // black eyes
    fill(255);
    ellipse(-14, -3, 8, 9);
    ellipse(68, -3, 8, 9); // white eyes
    fill(169, 92, 104);
    ellipse(-10, 20, 25, 15);
    ellipse(+ 70, 20, 25, 15); // cheeks
    fill(0);
    arc( 30, 25, 30, 35, 50, radians(180), PIE); //mouth
    fill(169, 92, 104);
    ellipse( 30, 38, 20, 9); // tongue
    //fill(0);
    //ellipse( -160, -10, 20, 15); //left hand
    //noFill();
    //stroke(0);
    //strokeWeight(2);
    //arc(-88, -5, 150, -90, PI / 2, (3 * PI) / 1, OPEN); //left arm
    //noStroke();
    //fill(210, 125, 45);
    //ellipse( 220, 80, 20, 15); //right hand
    //noFill();
    //stroke(0);
    //strokeWeight(2);
    //arc( 215,   30, 150, -90, PI / 2, (3 * PI) / 1, OPEN); //right arm
    pop();
  }
}
