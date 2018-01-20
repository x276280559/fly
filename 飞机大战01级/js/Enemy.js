
//创建敌机  共用样式
function Enemy(){
	//定义个变量,用于储存每次创出来的个数
	this.Sum = "e" +Bg.KeepEnemy.sum++;
	//创出的就是当前的飞机
	Bg.KeepEnemy[this.sum] =this;
	//console.log(this.Sum)             输出值：//e0
	//console.log(this)                        //bigEnemy {Sum: "e0"}
	//console.log("e" +Bg.KeepZiDan[this.sum]) //e[object Object]
	//console.log([this.Sum])
	
	//属性
	this.Hp =1;        //血量
	this.speed = 100;  //速度
	
	this.elem = $("<div></div>");       //加双引号是字符串，传值不了。。。注意
	this.elem.addClass("Enemy1");
	this.elem.appendTo("#box");
	//设置初始值
	var le = Math.random()*$("body").width();

	this.elem.css({
		left:le,
		top:-500
	})
}
//方法
Enemy.prototype.Enmove = function(){
	//console.log(this)
	var th =this
	var to = $("body").height();  //屏幕高度
	//运动地方位置
	var sd =10000/this.speed;
	
	//console.log(this.speed)
	this.elem.animate({"top":to},sd,"linear",function(){
		th.elem.remove();  //到底部清除自己
		delete Bg.KeepEnemy[this.Sum]  ////到底部清除存储中的自己
	})
	
	
}
