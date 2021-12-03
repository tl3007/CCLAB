console.log("Loaded!");

//song
let song;
let mic;

function preload(){
  song = loadSound("assets/song.mp3");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");

//song
  mic = new p5.AudioIn();
}

function mousePressed(){
  if (song.isPlaying() == false){
    song.play();
  } else {
    song.pause();
  }
}

function draw() {

//chandelier credits to: @XiangyueZhang
      background(159,129,112);
      let freq = frameCount * 0.01;
      let amp1 = 80;
      let amp2 = 200;
      let sinValue1 = sin(freq) * amp1;
      let cosValue1 = cos(freq) * amp1;
      let sinValue2 = sin(freq) * amp2;
      let cosValue2 = cos(freq) * amp2;

      //dark khaki
      let x = width / 2;
      let y = 400 + sinValue1;
      fill(189,183,107);
      rect(x+450, y-50, 100, 100);
      stroke(255);
      strokeWeight(1.5);
      line(x+500, y-50, x+500, 0);
      noStroke();

      //white (left)
      let xx = 230 + sinValue2 ;
      let yy = 230 + cosValue1;
      fill(255);
      rect(xx+170, yy + 8, 60, 60);
      stroke(255);
      strokeWeight(1.5);
      line(xx+200, yy+8, xx+200, 0);
      noStroke();

      //white (right)
      let x8 = 150;
      let y8 = 150 + cosValue1;
      fill(255);
      noStroke();
      rect(x8+1200, y8, 40, 40);
      stroke(255);
      strokeWeight(1.5);
      line(x8+1220, y8, x8+1220, 0);
      noStroke();

      //wheat (yellow)
      let x9 = 340;
      let y9 = 150 + cosValue1;
      fill(245,222,179, 255);
      noStroke();
      ellipse(x9+50, y9, 30, 30);
      stroke(255);
      strokeWeight(1.5);
      line(x9+50, y9 - 15, x9+50, 0);
      noStroke();

      //antique brass (orange)
      let x10 = 60;
      let y10 = 60 + sinValue1;
      fill(205,149,117);
      noStroke();
      rect(x10+5, y10+101, 50, 50);
      stroke(255);
      strokeWeight(1.5);
      line(x10+30, y10 +100, x10+30, 0);
      noStroke();

      //sand (frog green)
      let x7 = 300 + cosValue2;
      let y7 = 300 + sinValue1;
      fill(194,178,128, 255);
      ellipse(x7+50, y7-30, 80, 80);
      stroke(255);
      strokeWeight(1.5);
      line(x7+50, y7 - 70, x7+50, 0);

      //turquoise green
      let x5 = 450;
      let y5 = 100 + cosValue1;
      fill(160,214,180);
      noStroke();
      rect(x5+125, y5-25, 50, 50);
      stroke(255);
      strokeWeight(1.5);
      line(x5+150, y5 - 25, x5+150, 0);
      noStroke();

      //rosy brown
      let x6 = 200 + cosValue2;
      let y6 = 400 + sinValue1;
      fill(188,143,143,255);
      stroke(255);
      line(x6-70, y6 - 2, x6-70, 0);
      noStroke();
      ellipse(x6-70, y6+98, 200, 200);
}
