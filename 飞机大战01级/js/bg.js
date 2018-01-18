
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
  		//创建敌人
         var e1= new Enemy1("<div></div>")
		 var e2= new Enemy2("<div></div>")
		 var e3= new Enemy3("<div></div>")
		setInterval(function(){
			var mather ="";
			var M =Math.floor(Math.random()*4);
			//console.log(M)
			switch (M){
				case 1:
					e1
					break;
				case 2:
					e2
					break;
				case 3:
					e3
					break;
			}
			
		},10)
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