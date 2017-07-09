$(function(){
	//控制banner大图随窗口等比例缩放
	var clientWigth = $(window).width();
	$('.banner').css('height',clientWigth*0.55);
	$(window).resize(function(){
		var clientWigth = $(window).width();
		$('.banner').css('height',clientWigth*0.55);
	});
	//页面滚动导航透明度改变
	$(window).scroll(function(){
		if($('body').scrollTop()>80){
			$('.top').css({'backgroundColor':'rgba(255,255,255,1)'});
			$('.top .nav a').css({'color':'#000'})
		}else{
			$('.top').css({'backgroundColor':'rgba(255,255,255,0)'});
			$('.top .nav a').css({'color':'#fff'})
		}
	})
})