let x = 0;
let red = 0;

function change() {
      //x+=10;
      red += 10;

      let b = document.getElementById('box')
      console.log(b);
      b.innerHTML = "WOW!"
      //b.style.width = "200px";
      //b.style.height = "50px";
      b.style.left = x + "px";
      b.style.backgroundColor = "rgb( "+ red +",255,0)";
}

function addDiv(){
  // create a HTM element
  let elt = document.createElement("div");
  // update styles?
  elt.style.backgroundColor = "cyan";
  elt.style.width = "50px";
  elt.style.height = "40px";
  elt.style.margin = "20px";
  // attatch to the document!
  //let body = document.body;
  //body.appendChild(elt);
  // document.body.appendChild(elt);)

  let box = document.getElementById('box');
  box.appendChild(elt);

  //let box = document.getElementById('box');
}
