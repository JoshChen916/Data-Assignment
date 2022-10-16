//use your mouse to choose your cards and see the sign!
let ring
let card;
let torii;
let x
let x1;
let x2;
let x3;
let e;
let tarot1=[];
let tarot2=[];
let tarot3=[];

function preload(){
  card = loadImage("card.png");
  sky= loadImage("sky.jpg");
  ring= loadSound("ring.wav")
}
function setup() {
  frameRate(6);
  createCanvas(800, 600);
  data=loadJSON("https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json");
  background(0); 
  // noLoop();
}
function printData(data,x){
  fill(217,184,215);
  textSize(18);
  text(tarot1[0], random(x1,x1+5), random(350,353)); 
  text(tarot2[0], random(x2,x2+5), random(350,353)); 
  text(tarot3[0], random(x3,x3+5), random(350,353)); 
  fill(255);
  textSize(12);
  let story1=String(tarot1[1]);
  let story2=String(tarot2[1]);
  let story3=String(tarot3[1]);
  text(story1, x1, 410,120, 420); 
  text(story2, x2, 410,120, 420); 
  text(story3, x3, 410, 120, 420); 
  // console.log (x3);
  
}

function mousePressed(){
  
  
  
  let card = random(data.tarot_interpretations);
 
  if (mouseX >0&&mouseX<300&&mouseY>0&&mouseY<400) {
    tarot1=[];
    tarot1.push(card.name,card.fortune_telling);
      x1 = 95;
    ring.play();
    }
  else if (mouseX >300&&mouseX<500&&mouseY>0&&mouseY<400) {
      
     tarot2=[];
     tarot2.push(card.name,card.fortune_telling);
    // printData(data,x);
    x2 = 345;
    ring.play();
    }
  else  if (mouseX >500&&mouseX<900&&mouseY>0&&mouseY<400) {
      
      tarot3=[];
      tarot3.push(card.name,card.fortune_telling);
    // printData(data,x);
    x3 = 585;
    ring.play();
}
   
}
function draw() {
  background(220);
  image(sky,0,0,800,600)
  image(card,random(0,10),random(50,60),300,350);
  image(card,random(250,260),random(50,60),300,350);
  image(card,random(500,510),random(50,60),300,350);
  //text("3000",200,200)
  printData(data,x);
  
}