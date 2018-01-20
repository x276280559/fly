
//创建大飞机
function bigEnemy(){
	Enemy.call(this);
	
	this.Hp =10;        //血量
	this.speed = 1;  //速度
	this.elem.removeClass().addClass("Enemy3")
	//console.log("大飞机的速度"+this.speed)
}
//方法  移动
bigEnemy.prototype = Enemy.prototype;
