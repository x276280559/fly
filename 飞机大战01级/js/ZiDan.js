
//创建子弹      移动    循环多个

function ZiDan(z,y){
	
	//定义个变量,用于储存每次创出来的个数
	this.Sum = "e" +Bg.KeepZiDan.sum++;
	//创出的就是当前的飞机
	Bg.KeepZiDan[this.sum] =this;
//	console.log(this.Sum)            // 输出值：//e0
//	console.log(this)                        //KeepZiDan {Sum: "e0"}
//	console.log("e" +Bg.KeepZiDan[this.sum]) //e[object Object]
	
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
	this.elet.animate({"top":0+"px"},2000,function(){
		
		st.elet.remove();   //清除自己
	})
}

ZiDan.prototype.BloodZiDan = function(){
	var self = this;
	var tu =[   //爆炸图
		"url(img/die1.png)",
		"url(img/die2.png)"
	];
	var i =0;
	self.elet.ZiDanmove()	 ;//碰到就停止运动
	var timer =setInterval(function(){
		self.elet.css({"background":self.tu[i++]})
		self.elet.css({  //爆炸图比子弹图大，所以要重新设置
			"width":40,
			"height":43
		})	
		//判断图片
		if(i>=tu.length){
			clearInterval(timer)	// 清除定时器
			self.elet.ZiDanmove();
		}
		
	},30)
	delete bg.KeepZiDan[this.sum];  //清除当前的存储子弹
}
