 

//第二步 创建玩家  飞机
function Fly (){
	this.ele =$("<div></div>");    //	添加节点，创建飞机
	this.ele.addClass("Fly");
	this.ele.appendTo("#box");
	this.FlyMove()
}
//构建方法一：
Fly.prototype.FlyMove = function(){
	//鼠标按下事件
	var  self = this;
	this.ele.mousedown(function(e){
		//获取鼠标按下的点坐标
		var l = e.offsetX;
		var t = e.offsetY;
		//console.log(l)
		//console.log(t)
		//固定点击位置,移动事件
		$(document).mousemove(function(e){    //这一点犯了几次错了。注意！
	//		console.log("haha")
			var L = e.clientX-l;   //获取计算后的值
			var T = e.clientY-t;
			//console.log(L)
			//console.log(T)
			self.FlyMove2(L,T)
		})
		//点击完了，清除事件效果
		$(document).mouseup(function(){
			self.FlyMove3()
		})
	})
}
//构建方法二：

Fly.prototype.FlyMove2 = function(L,T){
	//判断，避免移动出屏幕外
	var pmax =$("body").width();
	var fmax =$(".Fly").width();
	var jsuan =pmax-fmax;     //出错地方多，注意
	//      console.log(jsuan)
	if(L<0){//  判断左边
		L=0;
	}
	if(L>jsuan){   //判断右边
		L=jsuan;
	}
	
	if(T<0){     //判断上边
		T=0;
	}
	//获取值，替换改变定位的值
	this.ele.css({
		left:L,
		top:T
	})
}
//构建方法三：
Fly.prototype.FlyMove3 = function(){
	$(document).off("mousemove mouseup")
}


//飞机开火方法： 循环，不停的创造子弹
Fly.prototype.kaihuo = function(){
	//console.log(this)
	var selfs =this
	setInterval(function(){
		
		//console.log(this)   // windown 				//定出飞机的位置，0.2秒创建子弹，并且传值，给子弹
		var a = selfs.ele.position().left + selfs.ele.width()/2-2;
		//console.log(a)
		var b = selfs.ele.position().top-18;
		//console.log(b)
		new ZiDan(a,b)
	},500)
	
}