console.log("Loaded!");

let sliderR, sliderG, sliderB;

function setup(){
  createCanvas(480, 500);
  background(100);
  sliderR = document.getElementById('slider-r');
  sliderG = document.getElementById('slider-g');
  sliderB = document.getElementById('slider-b');
}

function draw(){

  let r = sliderR.value;
  let g = sliderG.value;
  let b = sliderB.value;

  fill(r,g,b);
  rect(20,20,100,100);
  //background(r,g,b);
}

function drawCircle(){
  let dia = random(10,150);
  ellipse(random(width), random(height), dia);
}

/*
for (let i=0; i<100; i++){

let btn = document.createElement("button");

//btn.style.float = "left";
btn.style.width = "100px";
btn.style.height = "80px";
btn.style.width = "10px";
btn.style.margin ="10px";
//anonymous function
btn.addEventListener("click", function(){
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor =
  "rgb ("+ r +","+ g +","+ b +")""; //css
});
//btn.addEventListener("click", change);
document.body.appendChild(btn);
}


/*
function change(){
  //alert("HEY!");
  document.body.style.backgroundColor = "pink";
}
*/


/*
for (let i=0; i>0; i++) {
let elt = document.createElement("div");

 elt.style.backgroundColor = "yellow";
//elt.style.float = "left";
elt.style.width = "100px";
elt.style.height = "80px";
elt.style.width = "10px";
document.body.appendChild(elt;)}
*/
