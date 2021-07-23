
//신규 스피드몰 메인페이지 리뉴얼
        function main_stop(){

        }
        function main_bar_move_(){
				 var i=0;
				 if(arguments[0]=="rec_brand_select"){
				 	i=1;
				 }else if(arguments[0]=="rec_prds"){
					i=2;
				 }
				 var numb=0;
                 var main_bars = document.getElementsByName(arguments[0]);
				 if(arguments[0] == "main_bars") {
				 	main_bars[arguments[1]].style.backgroundPosition = "-141px " + ((arguments[1] * 41) * -1) + "px";
				 	document.getElementById(arguments[0]+"_view").style.backgroundPosition = "0px -" + (236 + (326 * arguments[1])) + "px";
					numb=arguments[1];
				 }else if(arguments[0] == "rec_brand_select") {
				 	if ((arguments[1] == "bf") || (arguments[1] == "ne")) {
						var main_bar_ini=Number(main_bars_ini[i]);
						if (arguments[1] == "bf") {
							main_bar_ini--;
							if (main_bar_ini < 0 ) {
								main_bar_ini = Number(document.getElementsByName(arguments[0]).length-1);
							}
						}else if (arguments[1] == "ne") {
							main_bar_ini++;
							if (main_bar_ini >= document.getElementsByName(arguments[0]).length) {
								main_bar_ini = 0;
							}
						}
						main_bars_ini[i]=Number(main_bar_ini);
					}
					numb=((arguments[1] == "bf") || (arguments[1] == "ne"))?(main_bars_ini[i]):(arguments[1]);
					main_bars[numb].style.backgroundPosition = "-225px -325px";
					document.getElementById(arguments[0] + "_view").style.backgroundPosition = "-793px -" + (238 + (210 * numb)) + "px";
				 }else if(arguments[0] == "rec_prds") {
				 	if ((arguments[1] == "bf") || (arguments[1] == "ne")) {
						var main_bar_ini=Number(main_bars_ini[i]);
						if (arguments[1] == "bf") {
							main_bar_ini--;
							if (main_bar_ini < 0 ) {
								main_bar_ini = Number(document.getElementsByName(arguments[0]).length-1);
							}
						}else if (arguments[1] == "ne") {
							main_bar_ini++;
							if (main_bar_ini >= document.getElementsByName(arguments[0]).length) {
								main_bar_ini = 0;
							}
						}
						main_bars_ini[i]=Number(main_bar_ini);
					}
					numb=main_bars_ini[i];
				 	document.getElementById(arguments[0]+"_view").style.backgroundPosition = "-1183px -"+(257+(260*numb))+"px";//498
				 	document.getElementById(arguments[0]+"_view").title=document.getElementById("rec_prds_value_title").value.split("][")[numb];
				 }
				 
                   for(var a=0;a<main_bars.length;a++){
                         if((parseInt(numb)!=a)){
				 			if (arguments[0] == "main_bars") {
								main_bars[a].style.backgroundPosition = "0 " + ((a * 41) * -1) + "px";
							}else if(arguments[0] == "rec_brand_select") {
								main_bars[a].style.backgroundPosition = "-215px -325px";
							}
                         }
                   }
                 if ((arguments[2] == "st")) {
						if ((arguments[0] == "rec_prds")||((arguments[0] == "rec_brand_select")&&(arguments[1] == "bf") || (arguments[1] == "ne"))) {}else {
							main_bars_ini[i] = arguments[1];
						}
					 	clearInterval(timers[i]);
				 }else if ((arguments[2] == "go")) {
						if (arguments[0] == "rec_prds") {}else {
							main_bars_ini[i] = arguments[1];
						}
						main_start(arguments[0]);
				 }
        }
		function main_bar_img_move(){	
			var i=0;
			if(arguments[0]=="rec_brand_select"){
				i=1;
			}else if(arguments[0]=="rec_prds"){
				i=2;
			}
        	if ((arguments[1] == "st")) {
					clearInterval(timers[i]);
			}else if ((arguments[1] == "go")) {
						main_start(arguments[0]);
			}
		}
		function go_event(){		
			var i=0;
			if(arguments[0]=="rec_brand_select"){
				i=1;
			}else if(arguments[0]=="rec_prds"){
				i=2;
			}
				var val=document.getElementById(arguments[0]+"_value").value.split("][");
				location.href=val[main_bars_ini[i]];
					clearInterval(timers[i]);	
		}
		function all_yer_fun(){
					var te=[0,-1,-74,-147,-220,-293,-366,-439,-512,-585,-658];
			for (var a = 0; a < 11/*document.getElementsByName("it").length*/; a++) {
				if (Number(arguments[0]) == a) {
					if (a != 0) {
						document.getElementById("it"+(arguments[0])).style.backgroundPosition = te[arguments[0]] + "px -380px";
					}
//					document.getElementsByName("it")[arguments[0]].style.display = "block";
					document.getElementById("it_vi"+arguments[0]).style.display = "block";
				}else{
					if (a != 0) {
						document.getElementById("it" + a).style.backgroundPosition = te[a] + "px -359px";
					}
//					document.getElementsByName("it")[a].style.display = "none";
					document.getElementById("it_vi"+a).style.display = "none";
				}
			}
		}//초기화
		function gogogo(){//구버전 IE에서 링크 클릭에 문제있는 경우
			var te = arguments[0];
			document.getElementById(te).attachEvent("onclick",function(){location.href=document.getElementById(te+"a").href;});
		}

                 ////////////////////////////////////////////////////////////신규작업
        var main_bars_ini = [0]; 
        var timers = [window.setInterval("go_main_bar('mtitle')",3000)];
        function main_start(){
			var i=0;
			clearInterval(timers[i]);
			timers[i] = window.setInterval("go_main_bar('mtitle')", 3000);
        }
        function go_main_bar(){
           if(mgg_counter==document.getElementsByName("mtitle").length){
             mgg_counter=1;
           }else{
             mgg_counter=mgg_counter+1;
           }
           mgg(mgg_counter);
			/*var i=0;
			if (document.getElementsByName(arguments[0]).length > 1) {
				var main_bar_ini=Number(main_bars_ini[i]);
				main_bar_ini++;
				if (main_bar_ini >= document.getElementsByName(arguments[0]).length) {
					main_bar_ini = 0;
				}
				main_bars_ini[i]=main_bar_ini;
				main_bar_move(arguments[0], main_bar_ini, 'a');
			}*/
        }
        function main_bar_move(){
          if(arguments[0]=="go"){
            main_start();
          }else if(arguments[0]=="st"){
            clearInterval(timers[0]);
          }
        }
		function pop_hot_prds(){//365Sale, Best 카테고리,가장많이본 상품 상품표시 생성부
			if(document.readyState=="complete"){
					//document.getElementsByName(arguments[0]+"_img")[0].style.display="none";
				var ctn_num = (((arguments[0]=="it_vel")||(arguments[0]=="ca_bes"))?(11):(1));
				for(var k = 0;k<ctn_num;k++){
				var make_link="";//구버전 IE에서 링크 클릭에 문제있는 경우
					//var valuess=(((arguments[0]=="it_vel")||(arguments[0]=="ca_bes")||(arguments[0]=="rel_prd"))?((document.getElementsByName(arguments[0])[k].value).evalJSON()):((document.getElementById(arguments[0]).value).evalJSON()));
					var valuess=(document.getElementById(arguments[0]+k).value).evalJSON();
					var values_re = [valuess.st1,valuess.st2,valuess.st3,valuess.st4,valuess.st5,valuess.st6,valuess.st7,valuess.st8,valuess.st9,valuess.st10,valuess.st11,valuess.st12];
					var cnts = (((arguments[0]=="it_vel")||(arguments[0]=="ca_bes")||(arguments[0]=="rel_prd"))?(7):(8));

                                        var w_div = document.createElement("div");
					w_div.setAttribute("name",arguments[0]+"_prds");//(k));
                                        if((k==0)){
					    w_div.setAttribute("class","main_plist_ctn");
						if((navigator.userAgent.search("MSIE 7.0")>0)||((navigator.userAgent.search("compatible")>0)&&(navigator.userAgent.search("Trident/5.0")>0||navigator.userAgent.search("Trident/4.0")>0))){
							w_div.setAttribute("id",arguments[0]+"_prds"+k);
						}
                                        }else{
					    w_div.setAttribute("class","main_plist_ctn_h");
						if((navigator.userAgent.search("MSIE 7.0")>0)||((navigator.userAgent.search("compatible")>0)&&(navigator.userAgent.search("Trident/5.0")>0||navigator.userAgent.search("Trident/4.0")>0))){
							w_div.setAttribute("id",arguments[0]+"_prds"+k);
						}
                                        }

                                        var num_cnt = 1;
                                        for(var ca_num=1;ca_num<(((arguments[0]=="ca_bes")||(arguments[0]=="rel_prd"))?(3):(2));ca_num++){
                                          if((arguments[0]=="ca_bes")&&(ca_num==2)){
                                            num_cnt=7;
                                            cnts=13;
                                          }
                                          if((arguments[0]=="rel_prd")&&(ca_num==1)){
                                            cnts=6;
                                          }else if((arguments[0]=="rel_prd")&&(ca_num==2)){
                                            num_cnt=6;
                                            cnts=12;
                                          }

                                        for(var i=num_cnt;i<cnts;i++){
					  if(values_re[i-1]!=undefined){//수가 모자라는 경우 에러나는것 방지용

                                                var a = document.createElement("a");
						a.setAttribute("href",values_re[i-1].href);
					        var div = document.createElement("div");//전체를 감싸는 div
					        div.setAttribute("class","mplistc_box");

                                                var liss = [];
                                                liss[0]=document.createElement("div");//이미지감싸는부분
                                                liss[0].setAttribute("class","mplistc_img125");
                                                liss[1]=document.createElement("img");//이미지지정
                                                liss[1].setAttribute("src",values_re[i-1].img);
												if(document.all){//구버전 IE에서 링크 클릭에 문제있는 경우
													if(arguments[0]=="it_vel"){
														a.setAttribute("id",arguments[0]+"_"+k+"_"+i+k+"a");
														liss[1].setAttribute("id",arguments[0]+"_"+k+"_"+i+k);
														make_link=arguments[0]+"_"+k+"_"+i+k;
													}else{
														a.setAttribute("id",arguments[0]+"_"+i+k+"a");
														liss[1].setAttribute("id",arguments[0]+"_"+i+k);
														make_link=arguments[0]+"_"+i+k;
													}
												}
                                                liss[0].appendChild(liss[1]);//이미지를 이미지감싸는부분에 넣기

                                                liss[2]=document.createElement("div");//속성부분감싸는부분
                                                liss[2].setAttribute("class","mplistc_spec");
                                                liss[3]=document.createElement("div");
                                                liss[3].setAttribute("class","mplistc_sptit");
                                                liss[3].innerHTML=values_re[i-1].nm;
                                                liss[2].appendChild(liss[3]);
                                                liss[4]=document.createElement("div");
                                                liss[4].setAttribute("class","mplistc_spsub");
                                                liss[4].innerHTML=values_re[i-1].spec;
                                                liss[2].appendChild(liss[4]);
                                                liss[5]=document.createElement("div");
                                                if(values_re[i-1].cost=="회원전용"){
                                                  liss[5].setAttribute("class","mplistc_spwon_w");
                                                }else{
                                                  liss[5].setAttribute("class","mplistc_spwon");
                                                }
                                                liss[5].innerHTML="원";
                                                liss[2].appendChild(liss[5]);
                                                liss[6]=document.createElement("div");
                                                liss[6].setAttribute("class","mplistc_spprice");
						if((navigator.userAgent.search("MSIE 7.0")>0)||((navigator.userAgent.search("compatible")>0)&&(navigator.userAgent.search("Trident/5.0")>0||navigator.userAgent.search("Trident/4.0")>0))){
                                                liss[6].innerHTML=values_re[i-1].orgcost;
						}else{
                                                liss[6].innerHTML=values_re[i-1].cost;
						}
                                                liss[2].appendChild(liss[6]);
                                                liss[7]=document.createElement("div");
                                                liss[7].setAttribute("class","mplistc_sporg");
						if((navigator.userAgent.search("MSIE 7.0")>0)||((navigator.userAgent.search("compatible")>0)&&(navigator.userAgent.search("Trident/5.0")>0||navigator.userAgent.search("Trident/4.0")>0))){
                                                liss[7].innerHTML=values_re[i-1].cost;
						}else{
                                                liss[7].innerHTML=values_re[i-1].orgcost;
						}
                                                liss[2].appendChild(liss[7]);

                                                div.appendChild(liss[0]);
                                                div.appendChild(liss[2]);

                                                a.appendChild(div);
                                                
                                                if((arguments[0]=="rel_prd")&&(ca_num==1)&&(i==1)){
                                                  //var a_box = document.createElement("div");
                                                  //a_box.setAttribute("href","/small/locator.jsp?em=e2015082407");
                                                  var box = document.createElement("div");
                                                  box.setAttribute("class","mplistc_box_rel images_3");
                                                  //a_box.appendChild(box);
                                                  w_div.appendChild(box);//w_div.appendChild(a_box);
                                                  var space = document.createElement("div");
                                                  space.setAttribute("class","mplistc_space");
                                                  w_div.appendChild(space);
                                                }

                                                w_div.appendChild(a);

                                                if((i!=(cnts-1))){
                                                  var space = document.createElement("div");
                                                  space.setAttribute("class","mplistc_space");
                                                  w_div.appendChild(space);
                                                }
					  }//수가 모자라는 경우 에러나는것 방지용

                                             document.getElementById(arguments[0]).appendChild(w_div);
						if(document.all){//구버전 IE에서 링크 클릭에 문제있는 경우
							gogogo(make_link);
						}
					}

                                        }
						if((navigator.userAgent.search("MSIE 7.0")>0 &&k>0)||((navigator.userAgent.search("compatible")>0)&&(navigator.userAgent.search("Trident/5.0")>0||navigator.userAgent.search("Trident/4.0")>0)&&k>0)){
							document.getElementById(arguments[0]+"_prds"+k).style.display="none";
						}

				}
				for(var i=(((arguments[0]=="it_vel")||(arguments[0]=="ca_bes"))?(11):(1));i>0;i--){
                                  //document.getElementById("it_vel_pla").removeChild(document.getElementsByName(arguments[0])[i-1]);
                                }
			}else{
				var te = arguments[0];
				setTimeout(function(){pop_hot_prds(te)},10);
			}
		}
		var mgg_counter=1;
	   function mgg(){//메인베너 이동 스크립트
                    mgg_counter = (arguments[0]);
		    document.getElementsByName("mbc")[0].style.backgroundPosition = "0px -" + (400 + ((375 * (arguments[0]-1)))) + "px";
			document.getElementsByName("mbc")[0].alt=document.getElementsByName("mbc")[arguments[0]].value.split("][")[0];
			document.getElementsByName("mbc")[0].href=document.getElementsByName("mbc")[arguments[0]].value.split("][")[1];
			for(var i=0;i<document.getElementsByName("mtitle").length;i++){
				if((arguments[0]-1)==i){
				   document.getElementsByName("mtitle")[i].style.backgroundPosition=(((document.getElementsByName("mtitle").length==3)?(203):((document.getElementsByName("mtitle").length==4)?(152):(122)))*i*-1)+"px -45px";
                }else{
				   document.getElementsByName("mtitle")[i].style.backgroundPosition=(((document.getElementsByName("mtitle").length==3)?(203):((document.getElementsByName("mtitle").length==4)?(152):(122)))*i*-1)+"px 0";
                }
                if(arguments[1]){
                  main_bar_move('st');
                }
            }
		}
	function go_ev(){//365Sale, Best 카테고리,가장많이본 상품 상품표시 부
	         //,0
           //if(arguments[0]=='it_vel'){
						if((navigator.userAgent.search("MSIE 7.0")>0)||((navigator.userAgent.search("compatible")>0)&&(navigator.userAgent.search("Trident/5.0")>0||navigator.userAgent.search("Trident/4.0")>0))){//IE7용작업
						for(var i=0;i<((arguments[0]=="it_vel")?(11):(11));i++){
			               if(i==arguments[1]){
			                 document.getElementById(arguments[0]+"_prds"+i).style.display="";
			                 document.getElementById(arguments[0]+"_prds"+i).firstChild.focus();
						   }else{
			                 document.getElementById(arguments[0]+"_prds"+i).style.display="none";
						   }
						}
						}else{//IE7용작업
             for(var i=0;i<document.getElementsByName(arguments[0]+"_prds").length;i++){
               if(i==arguments[1]){
                 document.getElementsByName(arguments[0]+"_prds")[i].className="main_plist_ctn";
                 document.getElementsByName(arguments[0]+"_prds")[i].firstChild.focus();
               }else{
                 document.getElementsByName(arguments[0]+"_prds")[i].className="main_plist_ctn_h";
               }
             }
						}//IE7용작업
           //}
        }

		function ajax_start(){
			if(document.readyState=="complete"){
                          //pop_hot_prds('it_vel');
                          //pop_hot_prds('ca_bes');
                          //pop_hot_prds('rel_prd');
				call_ajax("it_vel_pla","/small/ajax_page/speedmall_main_prds_365_r.jsp","pop_hot_prds('it_vel')");
				call_ajax("rel_prd_pla","/small/ajax_page/speedmall_main_prds_cur_r.jsp","pop_hot_prds('rel_prd')");
				call_ajax("ca_bes_pla","/small/ajax_page/speedmall_main_prds_bsc_r.jsp","pop_hot_prds('ca_bes')");
			}else{
				setTimeout(function(){ajax_start();},0);
			}
		}
//신규 스피드몰 메인페이지 리뉴얼