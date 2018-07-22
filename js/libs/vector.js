//向量化

var Vector = function(x, y) {
  this.x = x;
  this.y = y;
};

//移動
Vector.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  return this;
};
//加法
Vector.prototype.add = function(v) {
  return new Vector(this.x + v.x, this.y + v.y);
};
//減法
Vector.prototype.sub = function(v) {
  return new Vector(this.x - v.x, this.y - v.y);
};
///乘法(縮放)
Vector.prototype.mul = function(s) {
  return new Vector(this.x * s, this.y * s);
};
///長度(開根號)
Vector.prototype.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
//顯示字串
Vector.prototype.toString = function(v) {
  return "(" + this.x + "," + this.y + ")";
};
//=================================//
//設定新的值
Vector.prototype.set = function(x, y) {
  this.x = x;
  this.y = y;
  return this;
};
//比較
Vector.prototype.equal = function(v) {
  return this.x == v.x && this.y == v.y;
};
//複製
Vector.prototype.clone = function() {
  return new Vector(this.x, this.y);
};
//角度
Vector.prototype.angle = function() {
  return Math.atan2(this.y, this.x);
};