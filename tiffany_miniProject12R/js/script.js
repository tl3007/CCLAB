let img;
let cnv;

function preload(){
  img = loadImage("assets/beans.jpg");
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  cnv.position((windowWidth - img.width) / 2, (windowHeight - img.height) / 2);

  image(img, 0, 0, width, height);
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d / 2);

  loadPixels();
  for (let i = 0; i < halfImage; i++){
    pixels[i + halfImage] = pixels[i];
  }

  updatePixels();
}

function draw() {
  background(255);
  loadPixels();
  for (let y = 0; y < height; y ++){
    for (let x = 0; x < width; x ++){
      let index = (x + y * width) * 4;
      pixels [index + 0] = 0;
      pixels [index + 1] = 30;
      pixels [index + 2] = 100;
      pixels [index + 3] = 255;
    }
  }
  for (let i = 0; i < 9999; i++) {
    let x = random(width);
    let y = random(height);
    let dia = random(30, 80);

    let clr = img.get(x, y);

    let r = red(clr)*1.0;
    let g = green(clr)*1.0;
    let b = blue(clr)*1.0;
    fill(r, g, b, 50);

    noStroke();
    circle(x, y, dia);
  }
}
