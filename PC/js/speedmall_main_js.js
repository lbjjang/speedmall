
//신규 스피드몰 메인페이지 리뉴얼
        var main_bars_ini = [0,0,0];
        var timers = [window.setInterval("go_main_bar('main_bars')",3000),window.setInterval("go_main_bar('rec_brand_select')",3000),window.setInterval("go_main_bar('rec_prds')",4000)];
		function main_start(){
			var i=0;
			if(arguments[0]=="rec_brand_select"){
				i=1;
			}else if(arguments[0]=="rec_prds"){
				i=2;
			}
			clearInterval(timers[i]);
			timers[i] = window.setInterval("go_main_bar('"+arguments[0]+"')", 3000);
        }
		function main_stop(){
			
        }
        function go_main_bar(){
			var i=0;
			if(arguments[0]=="rec_brand_select"){
				i=1;
			}else if(arguments[0]=="rec_prds"){
				i=2;
			}
			if (document.getElementsByName(arguments[0]).length > 1) {
				var main_bar_ini=Number(main_bars_ini[i]);
				main_bar_ini++;
				if (main_bar_ini >= document.getElementsByName(arguments[0]).length) {
					main_bar_ini = 0;
				}
				main_bars_ini[i]=main_bar_ini;
				main_bar_move(arguments[0], main_bar_ini, 'a');
			}
        }
        function main_bar_move(){
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
		function pop_hot_prds(){
			if(document.readyState=="complete"){
					document.getElementsByName(arguments[0]+"_img")[0].style.display="none";
				var ctn_num = ((arguments[0]=="it_vel")?(11):(1));
				for(var k = 0;k<ctn_num;k++){
					var valuess=((arguments[0]=="it_vel")?((document.getElementsByName(arguments[0])[k].value).evalJSON()):((document.getElementById(arguments[0]).value).evalJSON()));
					var values_re = [valuess.st1,valuess.st2,valuess.st3,valuess.st4,valuess.st5,valuess.st6,valuess.st7];
					var cnts = ((arguments[0]=="it_vel")?(7):(8));
					for(var i=1;i<cnts;i++){
					  if(values_re[i-1]!=undefined){//수가 모자라는 경우 에러나는것 방지용
						var as = document.createElement("a");
						var imgs= document.createElement("img");
						var uls = document.createElement("ul");
						var lis = document.createElement("li");
						
						var liss = [];
						for(var a=1;a<10;a++){
							 liss[a-1] = document.createElement("li");
								liss[a-1].setAttribute("class","t"+a);
						}
						if(arguments[0]=="it_vel"){
							document.getElementById("it_vi"+k).appendChild(lis);
						}else{
							document.getElementById(arguments[0]+"_prds").appendChild(lis);
						}
						as.setAttribute("href",values_re[i-1].href);
						imgs.setAttribute("src",values_re[i-1].img);
						imgs.setAttribute("alt","");
						
						lis.appendChild(as);
						as.appendChild(uls);
						var make_link="";
						if(document.all){//구버전 IE에서 링크 클릭에 문제있는 경우
							if(arguments[0]=="it_vel"){
								as.setAttribute("id",arguments[0]+"_"+k+"_"+i+"a");
								uls.setAttribute("id",arguments[0]+"_"+k+"_"+i);
								make_link=arguments[0]+"_"+k+"_"+i;
							}else{
								as.setAttribute("id",arguments[0]+"_"+i+"a");
								uls.setAttribute("id",arguments[0]+"_"+i);
								make_link=arguments[0]+"_"+i;
							}
						}
						for(var b=1;b<10;b++){
							uls.appendChild(liss[b-1]);
							if(b==2){
								liss[b-1].appendChild(imgs);
							}else if(b==4){
								liss[b-1].innerHTML = values_re[i-1].nm;
							}else if(b==6){
								liss[b-1].innerHTML = values_re[i-1].spec;
							}else if(b==8){
								liss[b-1].innerHTML = values_re[i-1].cost;
							}
						}
						if(document.all){//구버전 IE에서 링크 클릭에 문제있는 경우
							gogogo(make_link);
						}
					  }//수가 모자라는 경우 에러나는것 방지용
					}		
				}
			}else{
				var te = arguments[0];
				setTimeout(function(){pop_hot_prds(te)},10);
			}
		}
		function gogogo(){//구버전 IE에서 링크 클릭에 문제있는 경우
			var te = arguments[0];
			document.getElementById(te).attachEvent("onclick",function(){location.href=document.getElementById(te+"a").href;});
		}
		function ajax_start(){
			if(document.readyState=="complete"){
				call_ajax("it_vel_pla","/small/ajax_page/speedmall_main_prds_365.jsp","pop_hot_prds('it_vel')");
				call_ajax("cur_viewed_prds_pla","/small/ajax_page/speedmall_main_prds_cur.jsp","pop_hot_prds('cur_viewed_prds')");
				call_ajax("hot_recom_pla","/small/ajax_page/speedmall_main_prds_ses.jsp","pop_hot_prds('hot_recom')");
			}else{
				setTimeout(function(){ajax_start();},5);
			}
		}
//신규 스피드몰 메인페이지 리뉴얼