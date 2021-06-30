var optionBarPT;
var prdTabConPT;
var prdTabConPTHeight;
var prdTabConPTH;
var windowScrollT;
//input type number 최대값
function maxLengthCheck(object){
	if (object.value.length > object.maxLength){
		object.value = object.value.slice(0, object.maxLength);
	}    
}

function toast(msg, timer) {
	if (!timer) { timer = 2500; }
	var $elem = $("<div class='toastWrap'><span class='toast'>" + msg + "</span></div>");
	$("#toast").append($elem); //top = prepend, bottom = append
	$elem.slideToggle(100, function() {
		$('.timerWrap', this).first().outerWidth($elem.find('.toast').first().outerWidth() - 10);
		if (!isNaN(timer)) {
			setTimeout(function() {
				$elem.fadeOut(function() {
					$(this).remove();
				});
			}, timer);			
		}
	});
}


$(document).ready(function () {
	$('body').append('<div id="toast"></div>');
	//슬라이드 열고 닫기
	$('.slideCon .top a').click(function(e){
		e.preventDefault();
		if($('.layerBtPop.popFilter').length > 0){
			if ($(this).parent().parent().hasClass('on')){
				$(this).parent().parent().removeClass('on');
				$(this).parent().next().slideUp();
			} else{
				$(this).parent().parent().addClass('on');
				$(this).parent().next().slideDown();
			}
		} else{
			if ($(this).parent().parent().hasClass('on')){
				$(this).parent().parent().removeClass('on');
				$(this).parent().next().slideUp();
			} else{
				$('.slideCon .bottom').slideUp();
				$('.slideCon').removeClass('on');
				$(this).parent().parent().addClass('on');
				$(this).parent().next().slideDown();
			}
		}
	
	});
	
	//리셋버튼 모션
	$('.btn.reset a').click(function(){
		$(this).addClass('spin');		
		setTimeout(function(){
			$('.btn.reset a').removeClass('spin');		
		}, 1000);
	});

	//툴팁 모션
	$('.btn.tooltip a').click(function(){
		$(this).next('.tooltipBox').fadeIn();
	});

	$('.tooltipBox .tooltipClose').click(function(){
		$(this).parent().fadeOut();
	});

	//찜하기 버튼
	/*
	$('.btn.wish a').click(function(){
		if ($(this).parent().hasClass('on')){
			$(this).parent().removeClass('on');
		} else{
			$(this).parent().addClass('on');		
		}
	});
	*/

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

	//카테고리 - depth 펼치기
	$('.category .menu .depth .dropMenu').click(function(){
		if($(this).parent().parent().hasClass('view')){
			$(this).parent().parent().removeClass('view');
			$('.category .menu').removeClass('view');
			$('section.con').removeClass('view');
		} else{
			$('section.con').addClass('view');
			$('.category .menu').addClass('view');
			$(this).parent().parent().addClass('view');
		}
	});
	
	//카테고리 상품상세 - 상품정보 펼치기
	$('.category.view .prdInfo .prdInfoDetail .btnInfo a').click(function(){
		if($('.category.view .prdInfo .prdInfoDetail').hasClass('open')){
			$('.category.view .prdInfo .prdInfoDetail').removeClass('open');
		} else{
			$('.category.view .prdInfo .prdInfoDetail').addClass('open');
		}
	});

	//하단 팝업
	$('.btn.popBt').click(function(){
		if($(this).hasClass('on')){
			$('.btn.popBt').removeClass('on');				
			$('.dimmed').fadeOut();
			$('.layerBtPop').removeClass('on');
			$('body').removeClass('scLock');	
		} else{
			var popname = $(this).children().attr('data-pop-name');
			$('.layerBtPop' + '.' + popname).addClass('on');
			$(this).addClass('on');
			$('.dimmed').fadeIn();
			$('body').addClass('scLock');
		}
	});
	$('.layerBtPop .btn.popClose').click(function(){
		$('.dimmed').fadeOut();

		if($(this).parents('.layerBtPop.popCatalogAdd').length < 1){ // 임시 팝업 (찜하기에서 폴더에 상품이 있는지 없는지에 따라 on 클래스 추가 삭제되는부분)
			$('.btn.popBt').removeClass('on');				
		}
		$('.layerBtPop').removeClass('on');
		$('body').removeClass('scLock');
	});

	//가운데 팝업
	$('.btn.popCt').click(function(){
		/* 
			MY 카탈로그 팝업, 폴더관리에서 새폴더 눌렀을 때,
			팝업에 prevPop 클래스 추가 (만들기 버튼 눌렀을 때, 구분)
		*/
		if($('.layerBtPop.folderPop').hasClass('on')){ 
			$('.btn.popBt').removeClass('on');				
			$('.layerBtPop').removeClass('on');
			$('.layerBtPop.folderPop').addClass('prevPop');
		}
		var popname = $(this).children().attr('data-pop-name');
		$('.layerCtPop' + '.' + popname).fadeIn();
		$('.layerCtPop' + '.' + popname).css({
			"top": (($(window).height()-$(".layerCtPop").outerHeight())/2+$(window).scrollTop())+"px",
			"left": (($(window).width()-$(".layerCtPop").outerWidth())/2+$(window).scrollLeft())+"px"		 
		}); 

		$('.dimmed').fadeIn();
		$('body').addClass('scLock');
	});
	$('.layerCtPop .btn.popCtClose').click(function(){
		$('.dimmed').fadeOut();
		$('.layerCtPop').fadeOut();
		$('body').removeClass('scLock');
	});

	/* 
		새폴더 만들기에서 만들기 버튼 눌렀을때, 
		1. if  -> MY카탈로그 추가 팝업, 폴더관리에서 새폴더 눌렀을때, 혹
		2. else -> 페이지 내에 새폴더 눌렀을때,
	*/
	$('.layerCtPop.newFolderPop .btnAddFolder').click(function(){
		if($('.layerBtPop.folderPop').hasClass('prevPop')){
			$('.layerBtPop.folderPop').addClass('on');
			$('.layerBtPop.folderPop').removeClass('prevPop');
			$('.layerCtPop.newFolderPop').fadeOut();
		} else{
			$('.dimmed').fadeOut();
			$('.layerCtPop').fadeOut();
			$('body').removeClass('scLock');	
		}
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

	//카테고리 필터부분 위치
	if($('.optionBar').length > 0){
		optionBarPT = $('.optionBar').offset().top;
	}

	// 상품상세페이지 상품탭영역
	if($('.titleTab').length > 0){
		prdTabConPT = $('.titleTab').offset().top;
		prdTabConPTHeight = $('.titleTab').offset().top + $('.titleTab').innerHeight();
		prdTabConPTH = prdTabConPT - $('header').innerHeight();
	}

	// 상품상세페이지 상품 전체 옵션
	$('.category.view .prdInfo .prdAllopt .filterBox .filter2').click(function(){
		if ($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).parent().next().slideUp();
		} else{
			$(this).addClass('on');
			$(this).parent().next().slideDown();
		}
	});


	var categoryViewSlide1 = new Swiper('.category.view .prdTopSlide .slideBox .swiper-container', {
		observeParents:true,
		observeSlideChildren:true,
		observer:true,
		loop:true,
		speed: 700,
		pagination: {
			el: '.category.view .prdTopSlide .slideBox .swiper-pagination',
			type: 'fraction',

		},
	});

	var categoryViewSlide2 = new Swiper('.category.view .prdOther.related .slideBox .swiper-container', {
		observeParents:true,
		observeSlideChildren:true,
		observer:true,
		loop:true,
		slidesPerView: 2,
		spaceBetween: 16,
		speed: 700,
		pagination: {
			el: '.category.view .prdOther.related .slideBox .swiper-pagination',
			type: 'bullets',

		},
	});

	var categoryViewSlide3 = new Swiper('.category.view .prdOther.together .slideBox .swiper-container', {
		observeParents:true,
		observeSlideChildren:true,
		observer:true,
		loop:true,
		slidesPerView: 2,
		spaceBetween: 16,
		speed: 700,
		pagination: {
			el: '.category.view .prdOther.together .slideBox .swiper-pagination',
			type: 'bullets',

		},
	});


	var categoryViewSlide4 = new Swiper('.category.view .prdBottomBanner .slideBox .swiper-container', {
		observeParents:true,
		observeSlideChildren:true,
		observer:true,
		speed: 700,
		autoplay: {
			disableOnInteraction:false,
			delay: 2500,
		},		
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},		
		pagination: {
			el: '.category.view .prdBottomBanner .slideBox .swiper-pagination',
			type: 'fraction',

		},
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


$(document).scroll(function() {
	// 카테고리 필터 부분 fixed
	if($('.optionBar').length > 0){
		var windowScrollT = $(window).scrollTop();
		var optionBarP = $('.optionBar').offset().top;
		if(windowScrollT >= optionBarP){
			$('.optionBar').addClass('fixed');
		} 
		if(windowScrollT < optionBarPT){
			$('.optionBar').removeClass('fixed');
		}		
	}

	if($('.titleTab').length > 0){
		var windowScrollT = $(window).scrollTop();
		var prdTabConP = $('.titleTab').offset().top;
		var headerH = $('header').innerHeight();
		prdTabConP = prdTabConP - headerH;

		console.log("windowScrollT ::: " + windowScrollT);
		console.log("prdTabConPTHeight ::: " + prdTabConPT);
		if(windowScrollT >= prdTabConP){
			$('.prdTabCon').addClass('fixed');
//			$('header.prdViewPage').addClass('off');
		}
		if(windowScrollT > prdTabConPT){
			$('header.prdViewPage').addClass('off');
			$('.prdTabCon').addClass('transform');
		} else{
			$('.prdTabCon').removeClass('transform');
			$('header.prdViewPage').removeClass('off');

		}
		if(windowScrollT < prdTabConPTH){
			$('.prdTabCon').removeClass('fixed');
		}		

	}



});