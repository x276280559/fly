
//创建中型飞机
function midEnemy(){
	Enemy.call(this);
	this.Hp =4;        //血量
	this.speed = 3;  //速度
	
	this.elem.removeClass().addClass("Enemy2")
	
	// 死亡切换的所有图片，数组形式存储！
	this.dieImg = [		
		"url(img/plain2_die1.png)",
		"url(img/plain2_die2.png)",
		"url(img/plain2_die3.png)",
		"url(img/plain2_die4.png)"
	]
}
//方法  移动

midEnemy.prototype = Enemy.prototype;