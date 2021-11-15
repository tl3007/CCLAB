console.log("Loaded!");

let circleR = 255;
let circleG = 255;
let circleB = 255;
let circleA = 10;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");

  r = 80;
  g = 41;
  b = 22;
  a = random(60);
}

function draw() {
  fill(circleR, circleG, circleB, circleA);
  //generative pattern
  noStroke();
  fill(r, g, b, a);
  rect(random(width), random(height), 200, 200);

//chandelier credits to: @Xiangyue Zhang
      background (80, 41, 22, 20);
      let freq = frameCount * 0.01;
      let amp1 = 80;
      let amp2 = 200;
      let sinValue1 = sin(freq) * amp1;
      let cosValue1 = cos(freq) * amp1;
      let sinValue2 = sin(freq) * amp2;
      let cosValue2 = cos(freq) * amp2;

      //white
      let x = width / 2;
      let y = 210 + sinValue1;
      fill(255, 255, 255, 255);
      rect(x+170, y+8, 60, 60);
      stroke(255);
      strokeWeight(1.5);
      line(x+200, y+8, x+200, 0);
      noStroke();

      //wine
      let xx =230 + sinValue2 ;
      let yy = width / 2 + cosValue2;
      fill(153, 51, 51, 255);
      rect(xx-28, yy + 8, 60, 60);
      stroke(255);
      strokeWeight(1.5);
      line(xx, yy+8, xx, 0);
      noStroke();

      //light brown
      let x8 = 150;
      let y8 = 150 + cosValue1;
      fill(255, 128, 0, 255);
      noStroke();
      rect(x8-20, y8, 40, 40);
      stroke(255);
      strokeWeight(1.5);
      line(x8, y8, x8, 0);
      noStroke();

      //pink
      let x9 = 340;
      let y9 = 150 + cosValue1;
      fill(255, 128, 128, 255);
      noStroke();
      ellipse(x9, y9, 30, 30);
      stroke(255);
      strokeWeight(1.5);
      line(x9, y9 - 15, x9, 0);
      noStroke();

      //skin
      let x10 = 60;
      let y10 = 60 + sinValue1;
      fill(255, 221, 204, 255);
      noStroke();
      ellipse(x10, y10, 50, 50);
      stroke(255);
      strokeWeight(1.5);
      line(x10, y10 - 25, x10, 0);
      noStroke();

      //purple+pink
      let x7 = 400 + cosValue2;
      let y7 = 400 + sinValue1;
      fill(153, 51, 102, 255);
      ellipse(x7, y7, 35, 35);
      stroke(255);
      strokeWeight(1.5);
      line(x7, y7 - 17.5, x7, 0);

      //medium-pink
      let x5 = 450;
      let y5 = 100 + cosValue1;
      fill(210, 121, 166, 255);
      noStroke();
      rect(x5+325, y5-25, 50, 50);
      stroke(255);
      strokeWeight(1.5);
      line(x5+350, y5 - 25, x5+350, 0);
      noStroke();

      //red
      let x6 = 200 + cosValue2;
      let y6 = 400 + sinValue1;
      fill(255, 77, 77, 255);
      stroke(255);
      line(x6, y6 - 20, x6, 0);
      noStroke();
      ellipse(x6, y6, 40, 40);

      //salmon
      let x4 = 160 + cosValue1;
      let y4 = 160 + sinValue1;
      fill(255, 153, 102, 255);
      stroke(255);
      line(x4, y4, x4, 0);
      noStroke();
      rect(x4-25, y4, 50, 50);

      //light pink
      let x2 = width / 2 + cosValue2;
      let y2 = height / 2 + 0;
      fill(255, 200, 245, 255);
      stroke(255);
      line(x2, y2 - 15, x2, 0);
      noStroke();
      ellipse(x2, y2, 30, 30);

      //brown-orange
      let x3 = width / 2 + sinValue2;
      let y3 = height / 2 + cosValue1;
      fill(204, 68, 0, 255);
      stroke(255);
      line(x3, y3 - 20, x3, 0);
      noStroke();
      ellipse(x3, y3, 40, 40);
}

function showPicture() {
  let sourceOfPicture = "img/fight.gif";
  let img = document.getElementById('bigpic')
  img.src = sourceOfPicture.replace('800x600', '800x600');
  img.style.display = "block";
}

function drawCircle() {
  fill(circleR, circleG, circleB);
  circle(random(width), random(height), random(10, 150));
}
