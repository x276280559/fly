
//创建子弹      移动    循环多个

function ZiDan(z,y){
	//子弹属性
	this.elet =$("<div></div>");
	this.elet.addClass("ZiDan");
	this.elet.appendTo("#box");
	//设置初始值
	this.elet.css({
		left:z,
		top:y
	})
	this.ZiDanmove()
}
//方法 移动--到顶部再清除子弹
ZiDan.prototype.ZiDanmove = function(){
	//console.log(this)
	var st =this;
	this.elet.animate({"top":0+"px"},1000,function(){
		
		st.elet.remove();   //清除自己
	})
}
