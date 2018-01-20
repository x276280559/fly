
//创建大飞机
function smallEnemy(){
	Enemy.call(this);
	
	this.Hp =1;        //血量
	this.speed = 5;  //速度
	this.elem.removeClass().addClass("Enemy1")
	//console.log("大飞机的速度"+this.speed)
}
//方法  移动
smallEnemy.prototype = Enemy.prototype;
