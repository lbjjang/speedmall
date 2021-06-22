//input type number 최대값
function maxLengthCheck(object){
	if (object.value.length > object.maxLength){
		object.value = object.value.slice(0, object.maxLength);
	}    
}




$(document).ready(function () {
	//슬라이드 열고 닫기
	$('.slideCon .top a').click(function(e){
		e.preventDefault();
		if ($(this).parent().parent().hasClass('on')){
			$(this).parent().parent().removeClass('on');
			$(this).parent().next().slideUp();
		} else{
			$('.slideCon .bottom').slideUp();
			$('.slideCon').removeClass('on');
			$(this).parent().parent().addClass('on');
			$(this).parent().next().slideDown();
		}
	
	});
	
	//리셋버튼 모션
	$('.btn.reset a').click(function(){
		$(this).addClass('spin');		
		setTimeout(function(){
			$('.btn.reset a').removeClass('spin');		
		}, 1000);
	});

	//찜하기 버튼
	$('.btn.wish a').click(function(){
		if ($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
		} else{
			$(this).parent().addClass('on');		
		}
	});

	//리스트타입 버튼
	$('.btn.listTy a').click(function(){
		if ($(this).parent().hasClass('ty2')){
			$(this).parent().removeClass('ty2');
		} else{
			$(this).parent().addClass('ty2');		
		}
	});

	//검색버튼
	$('.btn.search.pop').click(function(){
		$('.layerPop.popSearch').addClass('on');
	});
	$('.layerPop.popSearch .btn.prev').click(function(){
		$('.layerPop.popSearch').removeClass('on');
	});


	//하단 팝업
	$('.btn.popBt').click(function(){
		var popname = $(this).children().attr('data-pop-name');
		$('.layerBtPop' + '.' + popname).addClass('on');
		$('.dimmed').fadeIn();
		$('body').addClass('scLock');
	});
	$('.layerBtPop .btn.popClose').click(function(){
		$('.dimmed').fadeOut();
		$('.layerBtPop').removeClass('on');
		$('body').removeClass('scLock');
	});


	//풀팝업
	$('.btn.popFull').click(function(){
		var popname = $(this).children().attr('data-pop-name');
		$('.layerFullPop' + '.' + popname).fadeIn();
		$('body').addClass('scLock');
	});
	$('.layerFullPop .btn.popClose').click(function(){
		$('.layerFullPop').fadeOut();
		$('body').removeClass('scLock');
	});





/*
	//레이어 하단 팝업
	$('.btn.filter').click(function(){
	
	});

	//swiper 킵
	var dawinServiceSwiperSc06pc = new Swiper('.dawinSc .sec06 .slideBox.pc .swiper-container', {
		observeParents:true,
		observeSlideChildren:true,
		slidesPerGroup:3,
		slidesPerView: 'auto',
		observer:true,
		loop:true,
		speed: 700,
		autoplay: {
			disableOnInteraction: false,
			delay: 2000,
		},
		navigation: {
			hideOnClick:true,
			nextEl: '.dawinSc .sec06 .slideBox.pc .swiper-button-next',
			prevEl: '.dawinSc .sec06 .slideBox.pc .swiper-button-prev',
		},
		pagination: {
			el: '.dawinSc .sec06 .slideBox.pc .swiper-pagination',
			type: 'bullets',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '번 슬라이드</span>';
			},	
		},
	});

	
	//프로그램 - 상단 버튼 클릭시 부드럽게 이동 -- 킵
	$('.program .visual a').click(function(e){
		e.preventDefault();
		var hdH = $('header .headerWrap').innerHeight();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - hdH}, 500);
	});

	//motion 클래스 영역에 도달하면 active 클래스를 추가해 모션 동작 -- 킵
	var $animation_elements = $('.motion');
	var $window = $(window);

	function check_if_in_view() {
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);
		var count = $(this),
		zero = {val:0};

		if ((element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)) {
				if (!$element.hasClass('active')){
					if ($element.hasClass('count')){
						gsap.to(zero, {
							val: count.data("number"),
							duration: 2,
							onUpdate: function() {
								var numType = zero.val.toFixed(0).toString();
								numType = AddComma(numType);
								count.text(numType);
								$element.addClass('active');
							}
						});
					} else{
						$element.addClass('active');					
					}
				}
			} else {
			}
		});
	}	

	function AddComma(num){ //숫자 카운팅 콤마 추가
		var regexp = /\B(?=(\d{3})+(?!\d))/g;
		return num.toString().replace(regexp, ',');
	}
		
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

*/
});
