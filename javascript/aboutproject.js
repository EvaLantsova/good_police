
// document.querySelector('.pepper_red').onclick = function() {
//   document.querySelector('.my-modal'),classList.toggle('is-hidden')
// }


let bg;
let y = 0;

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('https://raw.githubusercontent.com/EvaLantsova/img_p5/master/img/background_fruits.png');
  createCanvas(720, 480);
}

function draw() {
  background(bg);
  stroke(000);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
