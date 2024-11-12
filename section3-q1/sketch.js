// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let size=50;//通常時の円の大きさ
let count=0;
let cycle=100;//周期
let increment=1;//変化量

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255);//背景の色
  count = (count + increment) % cycle;
  if(keyIsPressed){
    increment=2;
  }else{
    increment=1;
  }
  if(count<cycle/2){
    size=count+50;
  }else{
    size=(cycle-count)+50;
  }
  ellipse(width / 2, height / 2, size);//円の中心と通常時の大きさ
}
