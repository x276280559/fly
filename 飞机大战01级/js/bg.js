
//游戏背景

var Bg ={
	//属性
	bgimg:$("#box"),
	
	// 开始方法：
	start:function(){  
		//移动背景盒子
		this.bgmove()
		//创建玩家飞机
		//console.log(this)
		this.Fly = new Fly()
		
		//飞机开火
  		this.Fly.kaihuo()
	},

	bgmove:function(){
		//定义个变量自己
		var self = this;
		//console.log(self)
		//用定位移动背景盒子
		this.bgimg.animate({"background-position-y":"-230%"},5000,"linear",function(){      //linear
			self.bgimg.css({"background-position-y":"0%"})
			//回调反复走
			self.bgmove()
		})  
		
	}
}