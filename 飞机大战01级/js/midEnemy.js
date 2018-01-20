
//创建中型飞机
function midEnemy(){
	Enemy.call(this);
	this.Hp =4;        //血量
	this.speed = 3;  //速度
	
	this.elem.removeClass().addClass("Enemy2")
}
//方法  移动

midEnemy.prototype = Enemy.prototype;