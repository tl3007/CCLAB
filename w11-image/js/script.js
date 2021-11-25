
let img;
let lightImg;

function preload() {
  img = loadImage("asset/colorful.jpg");
  lightImg = loadImage("asset/sprite.png");
}

function setup() {
  createCanvas(500, 300);
  background(0);
}

function draw() {
  //background(0);

  // SPRITE
  push();
  // blendMode(ADD); // uncomment this line and see the effect
  tint(180, 100, 10, 50);
  imageMode(CENTER);
  image(lightImg, mouseX, mouseY, 50, 50);
  pop();

  // TINT
  //tint(255, 0, 0, 50);
  //image(img, 0, 0, width, height); // (img, x, y, (w), (h));
  //filter(INVERT);
  //filter(GRAY);
  //filter(BLUR, 6);

  // IMAGE
  /*
  push();
  translate(mouseX, mouseY);
  rotate(frameCount * 0.03);
  imageMode(CENTER);
  image(img, 0, 0, 300, 100); // (img, x, y, (w), (h));
  pop();
  */
}
