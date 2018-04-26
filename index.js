$(function(){
		// 存储前一个显示的section
	    var pre=$('.section').eq(0); 

	    // 存前一个显示的section的索引值
	    var preIndex=0;  

	   	$('#menu li').hover(function(e){
	   		$('#menu li').attr('class','');
	   		$(this).attr('class','present');

	   		//获取当前section的索引
	   		var index=$(this).index();

	   		// 两种情况：从左向右滑出&从右向左滑出
	   		if(preIndex>index){
	   			moveRight(pre,index);
	   		}else if(preIndex<index){
	   			moveLeft(pre,index);
	   		}else if(preIndex==index){
	   			$('.section').eq(index).css('left',0);
	   		}
	   		
	   		pre=$('.section').eq(index);
	   		preIndex=index;
	   	},function(){
	   		
	   	})
	   	
		//手机屏幕左滑动
		$(".section").on("swipeleft",function(){
			var index=$(this).index()+1;
			if(index>=$('.section').length) index=0;
			
			moveLeft(pre,index);		
		   	$('#menu li').attr('class','');
		   	$('#menu li').eq(index).attr('class','present');

		   	pre=$('.section').eq(index);
		   	preIndex=index;
  		}); 

		////手机屏幕右滑动
 		$(".section").on("swiperight",function(){
			var index=$(this).index()-1;
			if(index<0) index=$('.section').length-1;
			
    		moveRight(pre,index);
		   	$('#menu li').attr('class','');
		   	$('#menu li').eq(index).attr('class','present');

		   	pre=$('.section').eq(index);
		   	preIndex=index;
  		}); 

  		// moveLeft
  		function moveLeft(pre,index){
  			pre.animate({left:'-100%'}).css('zIndex',0);
		   	$('.section').eq(index).css('left','100%').css('zIndex',1);
		   	$('.section').eq(index).animate({left:0});
  		}

  		//moveRight
  		function moveRight(pre,index){
  			pre.animate({left:'100%'}).css('zIndex',0);
	   		$('.section').eq(index).css('left','-100%').css('zIndex',1);
	   		$('.section').eq(index).animate({left:0});
  		}

})