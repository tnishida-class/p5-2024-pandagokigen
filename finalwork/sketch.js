// 最終課題を制作しよう
let balls=[];
let stars=[];
let size=50;
let count=0;
let cycle=100;
let increment=0.1;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(5, 39, 94);
  noStroke();  
  for(let i = 0; i < stars.length; i++){
    let s = stars[i];
    star(s.x, s.y, s.size);
    s.x += s.vx;
    s.y += s.vy; 
  }
  if(mouseIsPressed){
   fill(255,249,79);
   star(mouseX, mouseY, 20);
   ellipse(100,100,100);
   fill(255,255,255);
   ellipse(width/2, height, width+100, 100);
   fill(255,249,79);
  }
  else{
    background(79,164,255);
    for(let i = 0; i < balls.length; i++){
      let b = balls[i];
      ellipse(b.x, b.y, b.size);
      fill(255,255,255);
      b.x += b.vx;
      b.y += b.vy;
    } 
    const b ={ x: width/2, y: -100, size:10, vx:random(-15,15), vy:1 };
    balls.push(b);
    stroke(255);
    fill(255,224,110);
    
    ellipse(width/2, height/4, size);
    count = (count + increment) % cycle;
    if(count<cycle/2){
      size=count+50;
    }else{
      size=(cycle-count)+50;
    }
    
  noStroke();
  fill(24,143,16);
  ellipse(width/2, height, width+100, 100);  
  }
}


function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 10){
    const s = { x: mouseX, y: mouseY, size:10, vx: dx, vy: dy };
    stars.push(s);
  }
}


function star(cx, cy, r){
  beginShape();
  for (let i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
