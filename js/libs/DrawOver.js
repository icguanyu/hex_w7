//AI輸出
function end() {
  var alpha = ogx.globalAlpha;
  ogx.save()
    ogx.translate(ww/2-200,wh/2-130)
    ogx.save();
    ogx.save();
    ogx.beginPath();
    ogx.moveTo(76.9, 111.8);
    ogx.lineTo(45.3, 80.2);
    ogx.lineTo(99.4, 26.2);
    ogx.lineTo(131.0, 57.8);
    ogx.lineTo(76.9, 111.8);
    ogx.closePath();
    ogx.fillStyle = "rgb(244, 174, 94)";
    ogx.fill();

    ogx.beginPath();
    ogx.moveTo(105.1, 56.6);
    ogx.bezierCurveTo(103.7, 57.8, 77.8, 62.7, 77.8, 62.7);
    ogx.lineTo(88.0, 72.9);
    ogx.lineTo(73.7, 83.8);
    ogx.lineTo(100.7, 76.7);
    ogx.lineTo(89.0, 65.1);
    ogx.lineTo(105.1, 56.6);
    ogx.closePath();
    ogx.fillStyle = "rgb(255, 255, 255)";
    ogx.fill();

    ogx.beginPath();
    ogx.moveTo(122.1, 48.9);
    ogx.lineTo(108.3, 35.1);
    ogx.lineTo(112.7, 30.6);
    ogx.lineTo(126.5, 44.5);
    ogx.lineTo(122.1, 48.9);
    ogx.closePath();
    ogx.fill();

    ogx.beginPath();
    ogx.moveTo(73.2, 115.5);
    ogx.lineTo(41.7, 83.9);
    ogx.lineTo(37.3, 88.2);
    ogx.lineTo(68.9, 119.8);
    ogx.lineTo(73.2, 115.5);
    ogx.closePath();
    ogx.fillStyle = "rgb(244, 174, 94)";
    ogx.fill();

    ogx.restore();
    ogx.globalAlpha = alpha * 0.7;
    ogx.beginPath();
    ogx.moveTo(410.5, 144.2);
    ogx.bezierCurveTo(410.5, 146.0, 409.0, 147.5, 407.2, 147.5);
    ogx.lineTo(3.8, 147.5);
    ogx.bezierCurveTo(2.0, 147.5, 0.5, 146.0, 0.5, 144.2);
    ogx.lineTo(0.5, 3.8);
    ogx.bezierCurveTo(0.5, 2.0, 2.0, 0.5, 3.8, 0.5);
    ogx.lineTo(407.2, 0.5);
    ogx.bezierCurveTo(409.0, 0.5, 410.5, 2.0, 410.5, 3.8);
    ogx.lineTo(410.5, 144.2);
    ogx.closePath();
    ogx.strokeStyle = "rgb(255, 255, 255)";
    ogx.stroke();
    ogx.restore();
    
    ogx.moveTo(0, 0);
    ogx.font = "24px 'Noto Sans TC'";
    ogx.fillStyle = "white";
    ogx.fillText("恭喜你！",155,60);
    ogx.fillText("回收了"+score+"%的電量！", 155, 90);
  ogx.restore();
}
