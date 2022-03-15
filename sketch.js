var bgImage

function preload(){
bgImage=loadImage("assets/Monkey_Lane.webp")
}

function setup() {
  createCanvas(windowWidth,windowHeight);


}

function draw() {
  background(bgImage);

  
  
  drawSprites();

  }