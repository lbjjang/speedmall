/*
  화면의 페이지 이동시 사용하는 스크립트
*/

/*
* 전체페이지의 이동
@param page : 페이지의 순번을 가리킨다. ( 1,2,3... )
*/
function pageList(page){
	document.form1.currentPage.value=page;
	///R20120827-0006
	if((document.getElementById("flvi")!="")&&(document.getElementById("flvi")!="undefined")&&(document.getElementById("flvi")!=null)){
		document.form1.flag.value=document.getElementById("flvi").value;
	}
	document.form1.submit();
}

/*
 * 전체페이지의 이동
@param page : 페이지의 순번을 가리킨다. ( 1,2,3... )
 */
function pageList3(page){
	document.form1.currentPage.value=page;
	f_Call_List();
}



/*
// Div 위치만 이동한다.
@param divNm : div이름 
@param strUrl : 이동할 Url 전체경로 ( 파라메터 포함 ) 
@param para1 : 임시로 만든 여분 parameter
@param para2 : 임시로 만든 여분 parameter2
*/

function pageList_Div(page,  divNm, strUrl, para1, para2){
	//alert("page:"+page+"/"+"divNm:"+divNm+"/"+"strUrl:"+strUrl+"/"+"para1:"+para1+"/"+"para2:"+para2+"/");
	//document.form1.currentPage.value=page; // 페이지의 위치
	document.getElementById(divNm).value=page; // 페이지의 위치
	var v_url=strUrl; // 변수에 Url 을 받는다.
	if(v_url.indexOf("?")>=0){
		//뒤에 ? 존재시
		v_url = v_url+"&currentPage="+page; // url에 페이지 위치를 받는다.
	}else{
		//뒤에 ? 미존재시
		v_url = v_url+"?currentPage="+page; // url에 페이지 위치를 받는다.
	}
	//alert("v_url::"+v_url);
	call_ajax(divNm,v_url,"");	 // 화면 호출
	//alert("end");
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

