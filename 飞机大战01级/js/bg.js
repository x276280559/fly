
//游戏背景

var Bg ={
	
	KeepEnemy:{sum :0},  	//储存页面的敌机	
	KeepZiDan:{sum :0}, 
	
	
	
	//储存子弹
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
        //碰撞调用 遍历
        this.touchs()
		
	},
	creatEnemy:function(){
		setInterval(function(){
			if(Math.random()<0.2){
				new bigEnemy().Enmove()
				//console.log(1)
			}	
			
			if(Math.random()<0.6){
				new midEnemy().Enmove()
			}
			
			if(Math.random()<0.8){
				new smallEnemy().Enmove()
			}
		},2000)
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
		
	},
	
	touchs:function(){
		var self =this;
		setInterval(function(){    //定时检测是否碰撞
			
			var KeepEnemys =Bg.KeepEnemy;   //定义个变量，代替存储的子弹&敌飞机总数，方便遍历
			var KeepZiDans =Bg.KeepZiDan;
			//console.log(Bg.KeepEnemy)       //Object {sum: 6, undefined: smallEnemy}
											   //  undefined??
			//console.log(Bg.KeepZiDan)        //  有值
		
			//遍历，获取一个子弹和敌飞机
			for (var k in KeepEnemys) {
				
				if(k=="sum"){   //去掉本身自带的那个属性
					continue //跳过，                                           注意不能用return和break
				}
				var a = KeepEnemys[k]  //得到单一的一个战机
			
				//遍历，获取一个子弹和敌飞机
				for (var j in KeepZiDans) {
					
					if(j=="sum"){   //去掉本身自带的那个属性
						continue
					}
					var b = KeepZiDans[j]  //得到单一的一个子弹
					//console.log(b)                //  有值
				
				//调用封装的common碰撞函数，检测！！！
	//			console.log(a.elem)
	//			console.log(b.elem)    // 没有，underfind？
	//			
					if (isTouch(a.elem,b.elet)){
						
						a.Blood();  //掉血
						b.BloodZiDan();
					}
				}
			}
		},30)
	}
}