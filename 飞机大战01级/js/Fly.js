

//创建自己的飞机
var Bg ={
	//属性
	bgimg:$("#box"),
	//方法：
	start:function(){  //移动背景盒子
		//定义个变量自己
		var self = this;
		//console.log(self)
		//用定位移动背景盒子
		this.bgimg.animate({"background-position-y":"-230%"},5000,"linear",function(){      //linear
			self.bgimg.css({"background-position-y":"0%"})
			self.start()
		})  //回调反复走
	}
}
//飞机移动鼠标操作：方法
var Fly ={
	self:$("#self"),
	
	MoveSelf:function(){
		//console.log(this)
		Fly.self.mousedown(function(e){  //鼠标按下
			var zji =this;
			//console.log(zji)
			var left=e.offsetX;
			var top=e.offsetY;
			$(document).mousemove(function(e){//鼠标移动
			
				//console.log(this)
				var l =e.clientX-left;
				var t =e.clientY-top;
//					console.log(l)
//					console.log(t)
				var lmax = $("body").width();
				var lzji =$(zji).width();
				var s=lmax-lzji;
				if (l<=0) {
					l=0
				};
				
				if(l>s){
					l=s
//					console.log(1)
				};
				
				if (t<=0) {
					t=0
				};
				//console.log(lmax)
				//console.log(lzji)
				//console.log($(zji).width())
				
				
				$(zji).css({
					left:l,
					top:t
				});
			});
			$(document).mouseup(function(e){//鼠标抬起，停止动作
				//console.log(1)
				$(document).off("mousemove mouseup")
			})
		})
	}
	
}

