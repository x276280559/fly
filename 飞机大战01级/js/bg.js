
//游戏背景

var Bg ={
	
	KeepEnemy:{sum :0},  	//储存页面的敌机	
	KeepZiDan:{sum :0},    //储存子弹
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
  		this.creatEnemy()
        
		
	},
	creatEnemy:function(){
		setInterval(function(){
			if(Math.random()<0.2){
				new bigEnemy().Enmove()
			}	
			
			if(Math.random()<0.6){
				new midEnemy().Enmove()
			}
			
			if(Math.random()<0.8){
				new smallEnemy().Enmove()
			}
		},1000)
	},

	bgmove:function(){
		//定义个变量自己
		var self = this;
		//console.log(self)
		//用定位移动背景盒子
		this.bgimg.animate({"background-position-y":"-230%"},10000,"linear",function(){      //linear
			self.bgimg.css({"background-position-y":"0%"})
			//回调反复走
			self.bgmove()
		})  
		
	}
}