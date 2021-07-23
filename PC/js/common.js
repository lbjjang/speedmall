$(function(){
	// header category
	$(".btn_cate").click(function(){
		$(this).toggleClass("on");
		$(".nav_cate").toggleClass("on");
	});

	// detail option open close
	$(".btn_option").click(function(){
		$(this).find("p").toggleText("옵션닫기", "옵션열기");
		$(this).toggleClass("open");
		$(".detail_option").toggleClass("active");
	});

	// detail option list
	$(".btn_deop").on("click", function(){
		$(".option_pop").addClass("on");
		$(".opt_close").click(function(){
			$(".option_pop").removeClass("on");
		});
	});

	// detail option remove
	$(".btnopt.remove").click(function(){
		$(this).parent().parent().parent().hide();
	});

	// detail option list pick
//	$(".opt_list").click(function(){
//		$(this).toggleClass("active");
//	});

	// quick top
	$(".btn_top").click(function(){
		$("html, body").animate({
			scrollTop: 0
		}, 200);
		return false;
	});

	//Center
	$("button").on("click", function(){
		var $this = $(this) ;
		$this.next("div.center_map").toggle();
		$this.parent("div.center_map").toggle();
	})

	// gnb speed buy
	$(".modal-tabs.ty2 li").click(function(){
		$(".modal-tabs.ty2 li.active").removeClass("active");
		$(this).addClass("active");
	});
	
	// mypage notice
	$(".my_notice dt").click(function(){
		$(this).next().slideToggle("500").parent().siblings().children("dd").hide();
		$(this).addClass("active").parent().siblings().children("dt").removeClass("active");
	});
	
	// faq list
	$(".faq_list dt").click(function(){
		 $(this).next().slideToggle("500").parent().siblings().children("dd").hide();
		 $(this).addClass("active").parent().siblings().children("dt").removeClass("active");
	});
	
	// custom table list
	$(".custom_table .list").click(function(){
		$(this).toggleClass("on");
		$(this).next().toggleClass("on");
		$(this).next().next().toggleClass("on");
	});

	$(".add_to_favorite").on("click", function(){
		alert("CTRL+D를 눌러 즐겨찾기에 추가하여 주십시요");
	});
	
	// delivery guide popup
	$(".btn_delivery").click(function(){
		$(".delivery_pop").addClass("on");
		$(".btn_delivery_close").click(function(){
			$(".delivery_pop").removeClass("on");
		});
	});

	// option height
	var winh = $(window).height();
	$(".option_cho").css("height", (winh-215)+"px");
	
	// scoll control
	$(window).scroll(function(){
		var scroll = $(document).scrollTop();
		if (scroll > 1){
			$("#header").addClass("fix");
			$(".modal.center").addClass("ty2");
			$(".modal.right").addClass("ty2");
			$(".quick_left").addClass("fix");
			$(".quick_right").addClass("fix");
			$("#query").addClass("tbg");
			$(".header_nav .wide").css("margin-top","-200px");
		} else {
			$("#header").removeClass("fix");
			$(".modal.center").removeClass("ty2");
			$(".modal.right").removeClass("ty2");
			$(".quick_left").removeClass("fix");
			$(".quick_right").removeClass("fix");
			$("#query").removeClass("tbg");
			$(".header_nav .wide").css("margin-top","0");
		}
	});

	// keyword rolling
	$(".time_keyword")
		.mouseover(function(){
			$(this).addClass("on");
			$(".time_key_all").show();
			$(".time_key_list").hide();
		}).mouseout(function(){
			$(this).removeClass("on");
			$(".time_key_all").hide();
			$(".time_key_list").show();
		});
	
	//main_bgcolor
	$("#main_slide").on("slid.bs.carousel", function () {
		var $this = $(".mslide");
		var bgcolor = $(".mslide.active").attr("data-tag");
		if ($this.hasClass("active")) {
			$(".main_top").css("background-color", "#"+bgcolor);
		}
	});

	// detail_option setting
	$(".detail_option").PositionFix({ 	
		 'selector' : 'posFix',
	     'limitSelector': '.detail_wrap',
	     'bottomLimitSelector' : '#detail_goods_wrap'
	});
});

// toggleText
$.fn.extend({
	toggleText: function (a, b){
		var that = this;
			if (that.text() != a && that.text() != b){
				that.text(a);
			} else if (that.text() == a){
				that.text(b);
			} else if (that.text() == b){
				that.text(a);
			}
		return this;
	}
});

//option scroll
$.fn.PositionFix = function (options) { 
	var settings = $.extend({
        //'selector' : 'detail_option',
        //'limitSelector': '.detail_wrap',
        //'limitPlus': null,
        'fixClass': 'fix',
        'ctrlTop': 70,
        //'wrapHeightNeccessary' : false,
        'useBottomLimit' : true,
        'bottomLimitSelector' : '.footer'
    },options);
    return this.each(function(){
        var $this = $(this);
        $this.addClass(settings.selector);
        var offsetTop = $this.offset().top
        var nTop;
        var ctrlTop = settings.ctrlTop;
        var $limitObj = $(settings.limitSelector);
        if(settings.useBottomLimit === true ){
            var $bottomlimitObj = $(settings.bottomLimitSelector);
        };
        var minusTop = 0;
        $(window).scroll(function(e){
            var sTop = $(document).scrollTop();
            nTop = sTop;
            var limit = $limitObj.offset().top - settings.ctrlTop;
            var bottomlimit = $bottomlimitObj.offset().top;
            
            if($(window).height()  > bottomlimit - limit){
                $this.removeClass(settings.fixClass);
                minusTop = 0;
                if(ctrlTop !== 0){
                    $this.css('top','');
                }
            }
            else if(settings.useBottomLimit === true && sTop > (bottomlimit-$(window).height()) && bottomlimit - limit > $(window).height()){
                var minustop = bottomlimit - sTop + settings.ctrlTop-$(window).height();
                $this.css('top', minustop);
            }
            else if(sTop < limit && $this.hasClass('on') == false){
                $this.removeClass(settings.fixClass);
                minusTop = 0;
                if(ctrlTop !== 0){
                    $this.css('top','');
                }
            }
            else if (sTop >= limit){
                $this.addClass(settings.fixClass).css('top',settings.ctrlTop);
            } else{}
        });
    });
}

/* MDPick */
function md_picks(){
	var p_value = arguments[0];
	var p_rows = arguments[1];
	var xhr = new XMLHttpRequest();
	var ul = "/small/include/MDPick.jsp"+((p_rows == undefined)?(""):("?v_rows="+arguments[1]));
	xhr.open("GET",ul,true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200){
			if(document.getElementById(p_value)==undefined){
				md_picks("MDpick");
			}
			myObj = JSON.parse(this.responseText);
			var data = myObj.pick_view;
			var res = "";
			var inp = document.createElement("input");
			if(p_rows == undefined){
				inp.setAttribute("type","button");
				inp.setAttribute("class","mdp_data-arrows mdp_arow-left");
				inp.setAttribute("onClick","mdp_data_move(7,'<')");
				document.getElementById(p_value).appendChild(inp);
			}
			for(i in data){
				var divf = document.createElement("div");
				divf.setAttribute("name","mdp_data-idx");
				divf.setAttribute("class","mdp_data-cage"+(((p_rows == undefined)&&(i>6))?("-hide"):("")));
				divf.setAttribute("onClick","onDetail_main('"+data[i].prd_cd+"')");
				var img = document.createElement("img");
				img.setAttribute("class","mdp_data-img");
				img.setAttribute("src",data[i].prd_img);
				divf.appendChild(img);
				var divd = document.createElement("div");
				divd.setAttribute("class","mdp_data-info mdp_data-font");
				var spnm = document.createElement("span");
				spnm.setAttribute("class","mdp_data-nm");
				spnm.innerHTML=data[i].prd_nm;
				divd.appendChild(spnm);
				if(data[i].pri_normal!=data[i].pri_down){
					spnm = document.createElement("span");
					spnm.setAttribute("class","mdp_data-price-nor");
					spnm.innerHTML="할인";
					divd.appendChild(spnm);
				}
				spnm = document.createElement("span");
				spnm.setAttribute("class","mdp_data-price");
				spnm.innerHTML=data[i].pri_down;
				divd.appendChild(spnm);
				spnm = document.createElement("span");
				spnm.setAttribute("class","mdp_data-currency");
				spnm.innerHTML="원";
				divd.appendChild(spnm);
				divf.appendChild(divd);
				document.getElementById(p_value).appendChild(divf);
			}
			if(p_rows == undefined){
				inp = document.createElement("input");
				inp.setAttribute("type","button");
				inp.setAttribute("class","mdp_data-arrows mdp_arow-right");
				inp.setAttribute("onClick","mdp_data_move(7,'>')");
				document.getElementById(p_value).appendChild(inp);
				inp = document.createElement("input");
				inp.setAttribute("type","hidden");
				inp.setAttribute("id","mdp_start");
				inp.setAttribute("value","0");
				document.getElementById(p_value).appendChild(inp);
			}
		}
	}
}
function mdp_data_move(){
	var mdp_start = parseInt(document.getElementById("mdp_start").value);
	var a = 0,hide_count=0;
	var prds = document.getElementsByName("mdp_data-idx");
	for(i =0;i<prds.length;i++){
		if((prds[i].className == "mdp_data-cage-hide")&&(hide_count==0)){
			a = i;
			hide_count = 1;
		}
	}
	if((arguments[1] == "<") && ((mdp_start-1) >= 0) ){
		prds[(mdp_start-1)+arguments[0]].className="mdp_data-cage-hide";
		prds[mdp_start-1].className="mdp_data-cage";
		mdp_start=mdp_start-1;
	}
	if((arguments[1] == ">") && ((mdp_start+arguments[0]) < prds.length)){//(a <= prds.length)){
		prds[mdp_start+arguments[0]].className="mdp_data-cage";
		prds[mdp_start].className="mdp_data-cage-hide";
		mdp_start=mdp_start+1;
	}
	document.getElementById("mdp_start").value = mdp_start;
}