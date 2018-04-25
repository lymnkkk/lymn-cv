$(function(){

		// 存储前一个显示的section
	    var pre=$('.section').eq(0); 

	    // 村吃前一个显示的section的索引值
	    var preIndex=0;  

	   	$('#menu li').click(function(){
	   		$('#menu li').attr('class','');
	   		$(this).attr('class','present');

	   		//获取当前section的索引
	   		var index=$(this).index();

	   		// 两种情况：从左向右滑出&从右向左滑出
	   		// $('.section').eq(index).css('display','block');
	   		if(preIndex>index){
	   			pre.animate({left:'100%'}).css('zIndex',0);
	   			$('.section').eq(index).css('left','-100%').css('zIndex',1);
	   			$('.section').eq(index).animate({left:0});
	   		}else if(preIndex<index){
	   			pre.animate({left:'-100%'}).css('zIndex',0);
		   		$('.section').eq(index).css('left','100%').css('zIndex',1);
		   		$('.section').eq(index).animate({left:0});
	   		}else if(preIndex==index){
	   			$('.section').eq(index).css('left',0);
	   		}
	   		
	   		pre=$('.section').eq(index);
	   		preIndex=index;
	   	})

})