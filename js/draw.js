//定義需要用到的變數
var GameStart = document.getElementById("GameStart");
var GamePlay = document.getElementById("GamePlay");
var GameOver = document.getElementById("GameOver");
var sgx = GameStart.getContext("2d");
var pgx = GamePlay.getContext("2d");
var ogx = GameOver.getContext("2d");
ww = GameStart.width = GamePlay.width = GameOver.width = 1280;
wh = GameStart.height = GamePlay.height = GameOver.height = 800;

const pi = Math.PI;
const pi2 = Math.PI * 2;

var now_states = 0 //現在在第幾幕
var keydown //鍵盤是否按下
var mousedown = false //滑鼠是否按下
var pause = false //是否暫停
var mousePos = new Vector(0,0)
var initangle = new Vector

var fps = 60//setInterVal用的更新頻率
var time = 0;//全域的time
var b//子彈
var bullets= []//彈夾
var m//怪物
var monster_number = 300//怪物數
var monsters=[] //怪物
var score = 0 //分數
var countdown = 60 //遊戲倒數

//取得滑鼠位置,計算角度
GamePlay.addEventListener("mousemove", function(evt) {
  mousePos = new Vector(evt.offsetX, evt.offsetY);  
  var center = new Vector(ww/2,wh-80)
  initangle = mousePos.sub(center)
});

//倒數計時
function count(){
  if(countdown>0&&now_states==1&&!pause&&score<100){
    countdown --
  }
  if(countdown<=0||score>=100){//顯示第三幕
    now_states=3
    $('.state_0').hide()
    $('.state_1').hide()
    $('.state_2').show()
    ogx.clearRect(0, 0, ww, wh);
    end()
  }
}
setInterval(count,1000)

//更新數據
function update(){
  time++
  if(now_states==1&&countdown>0&&!pause&&score<=100){
    if (time%10==0){
      //console.log("add Bullet")
      var b = new Bullet({//創造子彈
        x: ww/2,
        y: wh-80,
        v: { 
          x: Math.cos(initangle.angle())*20,
          y: Math.sin(initangle.angle())*20,
        },
        r:60,
      })
      if(mousedown||keydown==87){
        bullets.push(b)
      }
    }
    bullets.forEach(function(b){
      if(b.y<0){//子彈跑出去就不要再畫了(刪除跑出去的子彈)
        bullets.shift()//從第一顆子彈開始移除
      }else{
        b.update()
      }
    })
    console.log(bullets.length)
    if (time%30==0){
      //console.log("怪物來囉")
      var m = new monster({
        x: Math.random()*ww*0.8  ,
        y: -200,
        v: { 
          x: -1+Math.random()*2,
          y: 1+Math.random()*5
        },
        r: Math.floor(Math.random()*20+10)
      })
      if(monsters.length<monster_number){
        monsters.push(m)
      }
    }
    monsters.forEach((m)=>m.update())
    //console.log(monsters.length)
  }
}
setInterval(update,1000/fps)

//畫出第一幕
function Start() {
  sgx.clearRect(0, 0, ww, wh);
  drawStart(); //入口繪製
  drawStar(); //星星繪製
  if(now_states==0){//處理效能,在第一幕才畫
    requestAnimationFrame(Start);
  }
}
requestAnimationFrame(Start);

//畫出第二幕
function Play() {
  pgx.clearRect(0, 0, ww, wh);
  countDown()
  grid();
  ship();
  myMouse()
  life()
  hit()
  battery()//小龜毛:把電池資訊放到hit後避免提早過關的瞬間電量卻還停在99%
  bullets.forEach(b=>b.draw())
  //monsters.forEach(m=>m.draw())
  monsters.forEach(function(m){
    if(m.status==1){//敵人還活著才畫出
      m.draw()
    }
  })
  if(countdown>0&&now_states==1&&!pause&&score<100){
    //還在倒數而且在第二幕而且沒有暫停而且分數還在100內((超過100就結束))
    requestAnimationFrame(Play);
  }
}

//一些事件
//document.addEventListener("click",clickHandler);
document.addEventListener("mousedown", MouseDownHandler);
document.addEventListener("mouseup", MouseUpHandler);
document.addEventListener("keydown",keydownHandler);
document.addEventListener("keyup",keyupHandler)
function clickHandler(){
  //沒用到
}
function MouseDownHandler(){
  mousedown=true
}
function MouseUpHandler(){
  mousedown=false
}
function keydownHandler(e){
  keydown = e.keyCode
  if(e.keyCode==80){
    pause=!pause
    //console.log(pause)
    requestAnimationFrame(Play);
  }else if(e.keyCode==83){
    alert('今日店休')
  }
}
function keyupHandler(e){
  keydown = null
}

//一些按鈕
$('.state').eq(now_states).show()
$('.start').on('click',function(){
  now_states=1
  $('.state_0').hide();
  $('.state_1').show()
  //console.log(now_states)
  requestAnimationFrame(Play);
})

