$(function(){
	//弹出层
	var height=$('.popup_box').height();
		$('.popup_box').css("bottom",-height);
	/*点击投注*/
	$('.Betting').on('click',function(){		
		$('.meng').show();
		$(".popup_box").show();
		//  $(".popup_box").animate({"bottom": '0'}, 200);
		$('.popup_box').css('bottom',"0")		
	})
	
	//点击更多按钮
	$('.more').on('click',function(){
		$('.foot_bottom').toggle();
	})
	
	//点击弹出层确定按钮
	$('.sure').on('click',function(){
		$('.meng').hide();
		$('.popup_box').hide()
	})
	
	
	
	
	
	
	
	
	
	
	
})