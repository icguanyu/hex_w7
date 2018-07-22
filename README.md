# 六角學院前端精神時光屋7/9（Canvas Game）
[Demo](https://icguanyu.github.io/hex_w7/)

## 目前為止成長最多的一週！
如果沒有六角學院這次的主題，我想我可能這輩子都不會去碰Canvas。

> 甚至買了吳哲宇大大的課程都是跳過Canvas的課XDD
> 說不定還發現了新興趣XD?

第一天看到題目還想說難道我就要斷在這一週了嘛！
雖然可以純切版低空飛過，但那又有甚麼意義呢？重點是挑戰自己而不是交差了事嘛，
這驗證了大大們說的工程師都是M的事實...(逃

## 簡單自我介紹一下好了！
大家可以叫我阿姆，淡江資傳畢業，非本科系，也非網頁相關職業
因為興趣利用工作之餘接觸前端大約一年時間，
去年七月接觸了Alex大大的jQ入門&進階後正式開啟前端之路；
然後也在今年七月辭掉現職，希望能一心一意成為一隻前端攻城獅！
> Alex可說是我的啟蒙恩師啊XDD

## 大概花多久完成？
其實應該不算完成啦，實際設計稿在這邊
[第七週設計稿](https://hackmd.io/N5yEjm2vSx6D41qAbJGDmw)。
還是少很多功能，例如生命、分裂、商店、道具等等...
Coding過程大概有一個禮拜，包含看影片現學現用，很多用到的語法自己其實也還不是很熟，只是大概了解功能而已。
> 詳細完成時間實在是不可考，連躺在床上睡覺腦子都還在想也要算進去嗎XD

## 所有參考的資料
1. 看完+實作範例[動畫互動網頁特效入門（JS/CANVAS）](https://hahow.in/courses/586fae97a8aae907000ce721/discussions) 45、46、47、48、50章
2. 完整練習一次[只使用 JavaScript 的 2D 打磚塊遊戲](https://developer.mozilla.org/zh-TW/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)
3. 看完[吳哲宇 x 六角學院 - 使用 Canvas 製作網頁遊戲](https://www.youtube.com/watch?v=sOHcx9jekzs)

## 最後，我不是大大
還不是大大RRRR承受不住，我只是比別人多花一點時間在上面而已，共勉之。
> 謎：因為你辭職了才有時間做啊！

## 簡單介紹幾個關鍵（怕自己忘記的筆記）
1. 畫圖的資料，不會動（背景、星星、電池、子彈、船、敵人等等）
> DrawStart.js、DrawPlay.js、DrawStart.js（分成三個純粹自己好分辨用）
2. 資料的更新，讓它動（包含時間、子彈射出、敵人出現等）
3. 資料畫出來，讓它顯示（包含、滑鼠位置、擊中判斷與消失）
> draw.js
4. 向量（計算方向、角度會用到）
> vector.js
5. 子彈與敵人的定義用ES6類別定義，如子彈：

        class Bullet{
          constructor(args){
            let def = {//定義一些屬性
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
          update(){//更新的數值(速度方向)
            this.x+=this.v.x
            this.y+=this.v.y
          }
          draw(){//最後再呼叫draw畫出來
            pgx.save()
              pgx.translate(this.x,this.y)
              pgx.beginPath()
              pgx.arc(-5,-5,this.r,0,pi2)
              pgx.strokeStyle="white"
              pgx.stroke()
            pgx.restore()
          }
        }

6. 很多敵人和子彈所以要存在陣列裡面

        var b = new Bullet({//創造子彈
          x: ww/2,
          y: wh-80,
          v: { 
            x: Math.cos(initangle.angle())*20,
            y: Math.sin(initangle.angle())*20,
          },
          r:60,
        })
        bullets.push(b)
7. 打擊的部分

        function hit() {
          for (i = 0; i < monsters.length; i++) {
            var mon = monsters[i];
            if (mon.status == 1) {
              bullets.forEach(function(b) {
                //判斷是否擊中
                if (b.x+b.r > mon.x-mon.r && b.x-b.r < mon.x + mon.r && b.y+b.r > mon.y-mon.r&&b.y-b.r<mon.y+mon.r) {
                  if(mon.life<=0){
                    mon.status=0 //擊中就改變敵人的狀態
                    score++
                    console.log(mon)
                  }else{
                    mon.life--
                    mon.opacity=mon.life/10;
                  }
                }
              })
            }
          }
        }
        monsters.forEach(function(m){
          if(m.status==1){//敵人還活著才畫出來
            m.draw()
          }
        })        

8. 定義now_states目前在第幾幕，該暫停繪製就暫停，省效能。
9. 判斷子彈超出畫面就刪除

        bullets.forEach(function(b){
          if(b.y<0){//子彈跑出去就不要再畫了(刪除跑出去的子彈)
            bullets.shift()//關鍵:從陣列第一筆(剛好是第一顆子彈)開始刪除
          }else{
            b.update()
          }
        })
## 最後的最後
替自己止血，Code很髒，如果哪裡看不懂或是有嚴重錯誤（觀念）歡迎大力鞭策唷！
