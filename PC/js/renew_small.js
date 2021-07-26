$(function(){
	$('body').addClass('renew_2021');

	$('#header .all_menu').on('click', function(e){
		e.preventDefault();
		if ($(this).hasClass('on')){
			$(this).removeClass('on');
			$('.menu_group').hide();
		} else{
			$(this).addClass('on');
			$('.menu_group').show();
		}	
	});
	$('.dropdown-menu.twocols').append('<li class="all_meun_close"><a href="#"><span class="blind">¸Þ´º ´Ý±â</span></a></li>');

	$('.navbar-nav > li, .dropdown-menu > li').on('mouseenter', function(){
		$(this).addClass('on');
	});

	$('.navbar-nav > li, .dropdown-menu > li').on('mouseleave', function(){
		$(this).removeClass('on');
	});

	$('#header .all_meun_close').on('click', function(e){
		e.preventDefault();
		$('.menu_group').hide();
		$('#header .all_menu').removeClass('on');
	});

	$('.category_menu > ul > li:not(.not_over)').on('mouseenter', function(){
		$('.header_nav').css('height','350px');
		$('.nav_cate').show();
	});

	$('.header_nav').on('mouseleave', function(){
		$('.header_nav').css('height','auto');
		$('.nav_cate').hide();
	});

	var mainbanner = new Swiper('.main_banner.swiper-container', {
		autoplay:true,
		loop:true,
		speed: 700,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		on: {
			slideChangeTransitionStart:function(){
				//var activeBg = $('.main_banner .swiper-slide-active').attr('data-tag');
				var activeIdx = $('.main_banner .swiper-slide-active').attr('data-swiper-slide-index');
				var realIdx = parseInt(activeIdx);
				
				//$('.main_banner').css('background-color', '#' + activeBg );

				$('.swiper_nav ul li').removeClass('on');
				$('.swiper_nav ul li').eq(realIdx).addClass('on');

				$('.swiper_nav ul li a').on('click',function(e){
					e.preventDefault();

					var idx = $(this).parent().index();
					$('.swiper_nav ul li').removeClass('on');
					$(this).parent().addClass('on');
					mainbanner.slideToLoop( idx , 1000, false);
				});
			},
			
		}
	});

});