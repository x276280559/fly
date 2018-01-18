
//创建子弹
function ZiDan(){
	//子弹属性
	this.ele = $("<div></div>");
	this.ele.addClass("ZiDan");
	this.ele.appendTo("#self");
}
//子弹方法移动
ZiDan.prototype.Zimove = function(){
	//Fly.MoveSelf()
	var lzji = $("#self").width();    //获取飞机宽
	var tzji = $("#self").height();  //获取飞机高
	var c = -(e.clientY-tzji);          //获取屏幕高 -飞机高
	this.ele.css({
		left:(lzji/2),
		top:-10
	})
	
	this.ele.animate({top:c},500)
}
setInterval(function(){
	new ZiDan().Zimove()
	
},50)
