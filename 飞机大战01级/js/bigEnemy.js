
//创建大飞机
function bigEnemy(){
	Enemy.call(this);
	
	this.Hp =10;        //血量
	this.speed = 1;  //速度
	this.elem.removeClass().addClass("Enemy3")
	//console.log("大飞机的速度"+this.speed)
	
	// 死亡切换的所有图片，数组形式存储！
	this.dieImg = [		
		"url(img/plain3_die1.png)",
		"url(img/plain3_die2.png)",
		"url(img/plain3_die3.png)",
		"url(img/plain3_die4.png)",
		"url(img/plain3_die5.png)",
		"url(img/plain3_die6.png)"
	]
}
//方法  移动
bigEnemy.prototype = Enemy.prototype;
