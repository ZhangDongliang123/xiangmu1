$(function(){
	$(".show-img-ul1 li").eq(0).show();
	$(".show-b li").eq(0).show();
	$(".show-img-ul2 li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		$(".show-img-ul1 li").eq(index).fadeIn(300).siblings().fadeOut(300);
		$(".show-b li").eq(index).fadeIn(300).siblings().fadeOut(300);
		i = index;
	})
		var i = 0;
		// var j = $(".show-img-ul2 li").length;
		var s = setInterval(move,1500);

		function move(){
			i++;
			if(i==6){
				i=0;
			}
			$(".show-img-ul2 li").eq(i).addClass("active").siblings().removeClass("active");
			$(".show-img-ul1 li").eq(i).fadeIn(300).siblings().fadeOut(300);
			$(".show-b li").eq(i).fadeIn(300).siblings().fadeOut(300);
		};
	$(".show-img").hover(function(){
		clearInterval(s)
	},function(){
		s = setInterval(move,2000);
	});
	$(".search-box3 ul li p").eq(0).show();
	$(".search-box3 ul li").mouseover(function(){
	// var p = $(this).index();
		$(this).children("p").show();
		$(this).siblings().children("p").hide();
	}).mouseout(function(){
		$(".search-box ul li p").hide();
		$(".search-box ul li p").eq(0).show();

	})
	var b = $(".weixin2").css("display")
	$(".title-menu-1 li a").mouseover(function(){
		$(this).siblings("div").show();
		$(".weixin2").show();
	})
		$(".weixin2").mouseover(function(){
			$(".weixin2").show();
			$(".weixin1").show();
		}).mouseout(function(){
			$(".weixin2").hide();
			$(".weixin1").hide();
		})
});

