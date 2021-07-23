/*--------------------------------------------------------------------
	login check함수 정의한다.
	수정 : 061128 방은혁 - 팝업 차단시 FAQ로 이동
--------------------------------------------------------------------*/



function goFocus(){
	document.form1.alias_id.focus();
}


//-- 2003/10/10 dong 추가
function call_x_pw(){  // -- 비밀번호가 잘못된경우
	var win = window.open("/fullsize/public/login/cust/x_pw.html",'',"height=220,width=294,scrollbars=no,top=100,left=0");
	
}

function call_no_id(){ // -- ID 가 잘못된경우
	var win = window.open("/fullsize/public/login/cust/no_id.html",'',"height=220,width=294,scrollbars=no,top=100,left=0");
	
}


var launch='';
function menu(name) {
	submenu=eval(name+".style");
	if(launch!=submenu){
		if(launch!=''){
			launch.display='none';
		}
		submenu.display='block';
		launch=submenu;
	}else{
		submenu.display='none';
		launch='';
	}
}


function jumun_login(){
	var frm = document.form1;

	// 0 . 주문번호입력
	if(frm.jumun_num.value==""){
		alert("주문번호를 기입하셔야 합니다.");
		frm.jumun_num.focus();
		return;
	}
	// 1- 비밀번호입력
	if(frm.non_passwd.value==""){
		alert("비밀번호를 기입하셔야 합니다.");
		frm.non_passwd.focus();
		return;
	}

	ascii_trans(document.form1.elements["non_passwd"]);//패스워드 아스키값 변경 20100622 kimjs

	// frm.action="https://www.speedmall.co.kr/small/login/non_login_persist.jsp";
	frm.action="/small/login/non_login_persist_ssl.jsp";
	//frm.target="tmpFrame";
	frm.submit();

	//return true;
}
