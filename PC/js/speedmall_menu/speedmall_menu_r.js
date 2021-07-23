var tet="false",ete="false";
var tel1 = new Array("/small/images/sp_menu/mall_top_manu_01_2.png","/small/images/sp_menu/mall_top_manu_02_2.png","/small/images/sp_menu/mall_top_manu_03_2.png","/small/images/sp_menu/mall_top_manu_04_2.png","/small/images/sp_menu/mall_top_manu_05_2.png","/small/images/sp_menu/mall_top_manu_06_2.png","/small/images/sp_menu/mall_top_manu_07_2.png","/small/images/sp_menu/mall_top_manu_08_2.png");
var tel2 = new Array("/small/images/sp_menu/mall_top_manu_01.jpg","/small/images/sp_menu/mall_top_manu_02.jpg","/small/images/sp_menu/mall_top_manu_03.jpg","/small/images/sp_menu/mall_top_manu_04.jpg","/small/images/sp_menu/mall_top_manu_05.jpg","/small/images/sp_menu/mall_top_manu_06.jpg","/small/images/sp_menu/mall_top_manu_07.jpg","/small/images/sp_menu/mall_top_manu_08.jpg");
var img_ini=1;
var incou="";//0;
//메뉴 id값
var aa = ["aa0","aa1","aa2","aa3","aa4","aa5","aa6"];
var bb = ["bb0","bb1","bb2","bb3","bb4","bb5","bb6"];
var cc = ["cc0","cc1","cc2","cc3","cc4","cc5","cc6"];
var as = ["as0","as1","as2","as3","as4","as5","as6"];
var zz = ["zz0","zz1","zz2","zz3","zz4","zz5","zz6"];
var iml = ["iml0","iml1","iml2","iml3","iml4","iml5","iml6"];
//메뉴 id값 


$j(document).ready(function(){
		$j('#swa').load('/small/flash/flash_xml/speedmall_menu_div_print.jsp #sw',function(){setTimeout("able('sw')", 300);});
		$j('#aa0').load('/small/flash/flash_xml/speedmall_menu_div_print.jsp #test0',function(){able('0');});
		$j('#aa1').load('/small/flash/flash_xml/speedmall_menu_div_print.jsp #test1',function(){able('1');});
		$j('#aa2').load('/small/flash/flash_xml/speedmall_menu_div_print.jsp #test2',function(){able('2');});
		$j('#aa3').load('/small/flash/flash_xml/speedmall_menu_div_print.jsp #test3',function(){able('3');});
		$j('#aa4').load('/small/flash/flash_xml/speedmall_menu_div_print.jsp #test4',function(){able('4');});
		$j('#aa5').load('/small/flash/flash_xml/speedmall_menu_div_print.jsp #test5',function(){able('5');});
		$j('#aa6').load('/small/flash/flash_xml/speedmall_menu_div_print.jsp #test6',function(){able('6');});
	});
//////////		/////		/////
function able(i){
	incou+=i;
	if(incou.indexOf(i)>=0){
	if(i=="sw"){
		if($("ima").addEventListener){
			$("ima").addEventListener("click",function(){sw();},false);
			$("ima").addEventListener("focus",function(){off('A');},false);
			$("fstm").addEventListener("blur",function(){sw();},false);
		}else if($("ima").attachEvent){
			$("ima").attachEvent("onclick",function(){sw();});
			$("ima").attachEvent("onfocus",function(){off('A');});
			$("fstm").attachEvent("onblur",function(){sw();});
		}
	}else{
		if($(aa[i]).addEventListener){
			$(bb[i]).addEventListener("mouseover",function(){onn(i);},false);
			$(bb[i]).addEventListener("mouseout",function(){off(i);},false);
			$(bb[i]).addEventListener("focus",function(){onn(i);},false);
				if($("lstm") != null){
					$("lstm").addEventListener("blur",function(){off('A');},false);
				}
		}else if($(aa[i]).attachEvent){
			$(bb[i]).attachEvent("onmouseover",function(){onn(i);});
			$(bb[i]).attachEvent("onmouseout",function(){off(i);});
			$(bb[i]).attachEvent("onfocus",function(){onn(i);});		
				if($("lstm") != null){
					$("lstm").attachEvent("onblur",function(){off('A');});
				}
			}
		}
	}
}
//////////		/////		/////
	function ch(){
		ete="true";
	}
	$j(window).load(function(){
		setTimeout(ch, 300);

	});
/////////////
function onn(y)//레이어를 표시해주는 부분
{
if(tet=="true"){}else{//전체목록을 표시하는 경우는 작동하지 않는다.

showBox1 = $(zz[y]);//마우스가 위차한 곳의 y값을 읽거 해당 위치의 id값을 읽는다
  showBox1.style.display="";//해당 레이어에 대하여 보이도록 설정
	var ipo = 0;
//표시되는 레이어의 좌측위치
	var ai=0;
	//하부메뉴 표시 위치
	//1.메뉴 전체의 길이보다 하부메뉴의 길이가 길다면 위치는 0
	if(($("sa").offsetWidth - $("as"+y).offsetWidth)<0){
		ai=0+document.getElementById("sa").offsetLeft;
	//2.하부메뉴 시작위치에서 남은 길이보다 하부메뉴의 길이가 길다면 우측정렬%>
	}else if((1100-($(cc[y]).offsetLeft))<$(as[y]).offsetWidth){
		ai=$("sa").offsetWidth - $(as[y]).offsetWidth-7+document.getElementById("sa").offsetLeft;
	//3. 1과2에 해당하지 않는경우 메뉴 바로 아래에 위치%>
	}else{
		//테스트 ai=document.getElementById(aa[y]).offsetLeft;
		ai=$(cc[y]).offsetLeft+document.getElementById("sa").offsetLeft;
	}
	showBox1.style.left = ai-1+"px";//표시되는 레이어의 좌측위치(-2)
	showBox1.style.top = $("sa").offsetTop+31+"px"; //표시되는 레이어의 메뉴와의 간격
		$(aa[y]).style.color="black";
		for(var i=0;i<7;i++){
			if(i==y){
			var imges = ["-126px -31px","-288px -31px","-436px -31px","-584px -31px","-678px -31px","-826px -31px","-940px -31px"];
			document.getElementById(bb[y]).style.backgroundPosition=imges[y];
		}else{
				if($(iml[i]) == null || $(iml[i]) == undefined){}else{
					$(iml[i]).style.display="none";
				 	off(i);
				}
			}
		}
		$(iml[y]).style.top=$(aa[y]).offsetTop+"px";
		$(iml[y]).style.left=$(aa[y]).offsetLeft+"px";
}//}
}
function off(z){//레이어를 숨기는 부분
	var imges = ["-126px 0px","-288px 0px","-436px 0px","-584px 0px","-678px 0px","-826px 0px","-940px 0px"];
	if("A"==z){
		for(var i=0;i<7;i++){
			$(iml[i]).style.display="none";
			showBox1 = $(zz[i]);//마우스가 이동한경우 이전 마우스가 위치한 곳의 y값을 읽는다
			showBox1.style.display="none";	//해당 레이어를 다시 숨김
			document.getElementById(bb[i]).style.backgroundPosition=imges[i];
		}
	}else{
		$(iml[z]).style.display="none";
		showBox1 = $(zz[z]);//마우스가 이동한경우 이전 마우스가 위치한 곳의 y값을 읽는다
		showBox1.style.display="none";	//해당 레이어를 다시 숨김
	document.getElementById(bb[z]).style.backgroundPosition=imges[z];
	}
}//}
function sw(){//전체메뉴보기 부분
	if(ete=="true"){
showBox2 = $("sw");//전체메뉴를 표시하는 레이어 호출
	if(tet=="false"){//작동되지 않은 경우
		showBox2.style.display="";//레이어표시
		//showBox2.style.top = $("sa").offsetTop+36+"px"; //표시되는 레이어의 메뉴와의 간격
		showBox2.style.left=document.getElementById("sa").offsetLeft+145+"px";
		tet="true";//다른 레이어메뉴들은 작동정지
		$("ima").style.backgroundPosition="0px -31px";//20140911
		off('A');
	}else if(tet){
		showBox2.style.display="none";//전체메뉴 레이어 숨기기
		tet="false";//다른 레이어들이 정상작동
		$("ima").style.backgroundPosition="0px 0px";//20140911
	}
}else{}
}
function gol(y,z){//해당 카테고리로 이동(중/소분류구분,카테고리번호)
	if(y==1){//중분류
		self.location.href = "/small/search/cate_list_step_01.jsp?select_cate_cd="+z;
	}else if(y==2){//소분류
		self.location.href = "/small/search/cate_list_step_02.jsp?select_cate_cd="+z;
	}
}
