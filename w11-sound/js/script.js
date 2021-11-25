let sound;
let song;
let amp;
let mic;

function preload(){
  sound = loadSound("assets/beat.mp3");
  song = loadSound("assets/song.mp3");
}

function setup() {
  createCanvas(400, 500);
  background(220);

  //amp = new p5.Amplitude();
  mic = new p5.AudioIn();
}

function draw() {
  background(220);

  //let volume = amp.getLevel();
  let volume = mic.getLevel();
  let dia = map(volume, 0, 1, 10, 500);

  noStroke();
  fill(0, 150, 255);
  ellipse(width/2, height/2, dia, dia);

  /*
    let vol = map(mouseY, 0, height, 1.0, 0.0, true);
    //sound.setVolume(vol);
    let panning = map(mouseX, 0, width, -1.0, 1.0, true);
    sound.pan(panning);
    let rateValue = map(mouseY, 0, height, 0.5, 2.0, true);
    sound.rate(rateValue);
  */
}

function mousePressed(){
  if (song.isPlaying() == false){
    song.play();
  } else {
    song.pause();
  }
}

/*
function mouseDragged(){
  if (sound.isPlaying()){

  } else{
    sound.play();
  }
}
*/

/*
function mousePressed(){
  sound.play();
}
*/
