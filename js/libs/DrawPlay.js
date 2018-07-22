//背景格子
function grid() {
  pgx.save();
  pgx.beginPath();
  for (var i = 0; i < 24; i++) {
    let pos = (i * 1280) / 24;
    pgx.moveTo(pos, 0);
    pgx.lineTo(pos, 1280);
    pgx.moveTo(0, pos);
    pgx.lineTo(1280, pos);
  }
  pgx.strokeStyle = "rgba(204, 230, 235, 0.1)";
  pgx.stroke();
  pgx.restore();
}
//十字游標位置
function myMouse() {
  pgx.save();
  pgx.translate(mousePos.x, mousePos.y);
  pgx.beginPath();
  pgx.fillStyle = "#fff";
  pgx.fillText(mousePos, 10, -10);
  for (var i = 0; i < 4; i++) {
    pgx.moveTo(0, 0);
    pgx.lineTo(0, 40);
    pgx.rotate(pi / 2);
  }
  pgx.strokeStyle = "white";
  pgx.lineWidth = 2;
  pgx.stroke();
  pgx.restore();
}
//太空船
function ship() {
  //內圈
  pgx.save();
  pgx.beginPath();
  pgx.translate(ww / 2, wh - 80);
  pgx.rotate(initangle.angle());
  pgx.arc(0, 0, 40, 0, pi2);
  pgx.strokeStyle = "white";
  pgx.shadowBlur = 10;
  pgx.shadowColor = "white";
  pgx.lineWidth = 6;
  pgx.stroke();
  pgx.closePath();
  //賓士
  pgx.save();
  pgx.beginPath();
  for (var i = 0; i < 3; i++) {
    pgx.moveTo(0, 0);
    pgx.lineTo(40, 0);
    pgx.rotate((pi / 3) * 2);
  }
  pgx.strokeStyle = "white";
  pgx.lineWidth = 4;
  pgx.stroke();
  pgx.restore();
  //虛線圈圈
  pgx.save();
  pgx.rotate(time % 360);
  for (var i = 0; i < 64; i++) {
    pgx.beginPath();
    pgx.arc(0, 0, 55, 0, pi2 / 64);
    pgx.strokeStyle = "white";
    pgx.shadowBlur = 0;
    pgx.shadowColor = "white";
    pgx.lineWidth = 2;
    pgx.stroke();
    pgx.rotate(pi2 / 32);
  }
  pgx.restore();
  //外弧形
  pgx.save();
  //pgx.rotate(Math.cos((time/10)%360))
  pgx.beginPath();
  pgx.arc(0, 0, 70, (pi / 4) * 3, (pi / 4) * 5);
  pgx.strokeStyle = "white";
  pgx.shadowBlur = 0;
  pgx.shadowColor = "white";
  pgx.lineWidth = 5;
  pgx.stroke();
  pgx.restore();
  //發射口
  pgx.beginPath();
  pgx.moveTo(100 + (time % 10), 0);
  pgx.lineTo(100 + (time % 10), 5);
  pgx.lineTo(90, 10);
  pgx.lineTo(70, 10);
  pgx.lineTo(70, -10);
  pgx.lineTo(90, -10);
  pgx.lineTo(100 + (time % 10), -5);
  pgx.closePath();
  pgx.fillStyle = "white";
  pgx.fill();
  pgx.restore();
}
//子彈((參考吳哲宇老師教學))
class Bullet{
  constructor(args){
    // {x:3}
    let def = {
      x: ww/2,
      y: wh-80,
      v: {
        x: 0,
        y: 0
      },
      r:0,
    }
    Object.assign(def,args)
    Object.assign(this,def)
  } 
  update(){
    this.x+=this.v.x
    this.y+=this.v.y
    
  }
  draw(){
    pgx.save()
      pgx.translate(this.x,this.y)
      pgx.beginPath()
      pgx.arc(-5,-5,this.r,0,pi2)
      pgx.strokeStyle="white"
      pgx.stroke()
    pgx.restore()
  }
}
//電池(AI產出)
function battery() {
  //電池
  pgx.save();
  pgx.translate(ww / 2 - 220, wh / 2 - 80);
  pgx.save();
  pgx.beginPath();
  pgx.moveTo(611.4, 440.7);
  pgx.lineTo(577.8, 440.7);
  pgx.lineTo(577.8, 440-(0.57*score));//440-383=57
  pgx.lineTo(611.4, 440-(0.57*score));//440-383=57
  pgx.lineTo(611.4, 440.7);
  pgx.closePath();
  pgx.fillStyle = "rgb(244, 174, 94)";
  pgx.fill();
  pgx.beginPath();
  pgx.moveTo(611.4, 440.7);
  pgx.lineTo(577.8, 440.7);
  pgx.lineTo(577.8, 383.0);
  pgx.lineTo(611.4, 383.0);
  pgx.lineTo(611.4, 440.7);
  pgx.closePath();
  pgx.strokeStyle = "white";
  pgx.stroke();
  //閃電//
  pgx.beginPath();
  pgx.moveTo(597.0, 396.2);
  pgx.bezierCurveTo(596.9, 397.5, 585.7, 414.0, 585.7, 414.0);
  pgx.lineTo(596.6, 414.0);
  pgx.lineTo(594.8, 427.5);
  pgx.lineTo(605.4, 409.3);
  pgx.lineTo(593.0, 409.3);
  pgx.lineTo(597.0, 396.2);
  pgx.closePath();
  pgx.fillStyle = "rgb(255, 255, 255)";
  pgx.fill();
  // 正極//
  pgx.beginPath();
  pgx.moveTo(602.0, 383.0);
  pgx.lineTo(587.2, 383.0);
  pgx.lineTo(587.2, 378.3);
  pgx.lineTo(602.0, 378.3);
  pgx.lineTo(602.0, 383.0);
  pgx.closePath();
  pgx.fill();
  // 負極//
  pgx.beginPath();
  pgx.moveTo(611.4, 444.6);
  pgx.lineTo(577.8, 444.6);
  pgx.lineTo(577.8, 449.2);
  pgx.lineTo(611.4, 449.2);
  pgx.lineTo(611.4, 444.6);
  pgx.closePath();
  pgx.fillStyle = "rgb(244, 174, 94)";
  pgx.fill();
  pgx.restore();
  //資訊
  pgx.save();
  pgx.translate(ww / 2 - 10, wh / 2 + 20);
  pgx.moveTo(0, 0);
  pgx.font = "16px 'Noto Sans TC'";
  pgx.fillStyle = "white";
  pgx.fillText("看你能回收多少電量",0,0);
  pgx.fillText("已回收"+score+"%電量，加油！", 0, 20);
  pgx.restore();
  pgx.restore();
}
//血量與生命
function life() {
  pgx.save();
  pgx.translate(ww - 40, 40);
  pgx.beginPath();
  pgx.fillStyle = "#F5AF5F";
  pgx.fillRect(0, 0, -200, 10);
  pgx.closePath();

  pgx.beginPath();
  pgx.translate(0, 20);
  for (var i = 0; i < 3; i++) {
    pgx.translate(-30, 0);
    pgx.moveTo(15.8, 1.5);
    pgx.bezierCurveTo(13.8, -0.4, 10.6, -0.4, 8.6, 1.5);
    pgx.lineTo(8.6, 1.5);
    pgx.bezierCurveTo(6.7, -0.5, 3.5, -0.5, 1.5, 1.5);
    pgx.bezierCurveTo(-0.5, 3.5, -0.5, 6.7, 1.5, 8.6);
    pgx.lineTo(1.4, 8.7);
    pgx.lineTo(8.6, 15.8);
    pgx.lineTo(15.8, 8.7);
    pgx.lineTo(15.8, 8.6);
    pgx.bezierCurveTo(17.7, 6.7, 17.7, 3.5, 15.8, 1.5);
  }
  pgx.fillStyle = "rgb(231, 83, 123)";
  pgx.fill();

  pgx.restore();
}
//倒數
function countDown(){
  pgx.save()
  pgx.translate(ww/2,80)
  pgx.moveTo(0, 0);
  pgx.font = "48px 'Noto Sans TC'";
  pgx.fillStyle = "white";
  pgx.fillText("00:"+padLeft(countdown.toString(),2),-60,0);
  pgx.restore()
}
//數字補零
function padLeft(str,lenght){
  if(str.length >= lenght){
    return str;
  }
  else{
    return padLeft("0" +str,lenght);
  }
}
//怪獸
class monster {
  constructor(args) {
    // {x:3}
    let def = {
      x: 0,
      y: 0,
      v: {
        x: 0,
        y: 0
      },
      r:20,//怪物半徑
      //score: 1, //獎勵分數(未使用)
      life: 10, //生命
      status: 1, //1=存在,0=被擊毀(消失)
      opacity: 1,
      color: "yellow"
    };
    Object.assign(def, args);
    Object.assign(this, def);
  }
  update() {
    this.x += this.v.x;
    this.y += this.v.y;
  }
  draw() {
    pgx.save()
    pgx.beginPath()
    //pgx.rect(, 100, 100);
    pgx.arc(this.x, this.y,this.r,0,pi2)
    pgx.fillStyle = this.color;
    pgx.globalAlpha = this.opacity;
    pgx.fill();
    pgx.restore()
  }
}
//打擊
function hit() {
  for (i = 0; i < monsters.length; i++) {
    var mon = monsters[i];
    if (mon.status == 1) {
      bullets.forEach(function(b) {
        //判斷是否擊中
        if (b.x+b.r > mon.x-mon.r && b.x-b.r < mon.x + mon.r && b.y+b.r > mon.y-mon.r&&b.y-b.r<mon.y+mon.r) {
          if(mon.life<=0){
            mon.status=0
            score++
            console.log(mon)
          }else{
            mon.life--
            mon.opacity=mon.life/10;
          }
        }
      });
      //console.log(m.life)
    }
  }
}
