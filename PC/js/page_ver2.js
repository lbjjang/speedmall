/*
  화면의 페이지 이동시 사용하는 스크립트
*/

/*
* 전체페이지의 이동
@param page : 페이지의 순번을 가리킨다. ( 1,2,3... )
*/
function pageList(page){
	document.form1.action="https://www.speedmall.co.kr/small/search/search_result_ver2.jsp";
 	document.form1.target="";
	document.form1.currentPage.value=page;
	document.form1.submit();
}

/*
// Div 위치만 이동한다.
@param divNm : div이름
@param strUrl : 이동할 Url 전체경로 ( 파라메터 포함 )
@param para1 : 임시로 만든 여분 parameter
@param para2 : 임시로 만든 여분 parameter2
*/

function pageList_Div(page,  divNm, strUrl, para1, para2){
	//document.form1.currentPage.value=page; // 페이지의 위치
	document.getElementById(divNm).value=page; // 페이지의 위치
	var v_url=strUrl; // 변수에 Url 을 받는다.
	v_url = v_url+"&currentPage="+page; // url에 페이지 위치를 받는다.
	call_ajax(divNm,v_url,"");	 // 화면 호출
}


function pageList2(obj_form, page){
	obj_form.currentPage.value=page;
	obj_form.submit();
}

function nextPage(obj_form, url){
	obj_form.action = url;
	obj_form.submit();
}

function nextPage02(obj_form, obj_text, value, url){
	obj_text.value = value;
	obj_form.action = url;
	obj_form.submit();
}