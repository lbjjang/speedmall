/*--------------------------------------------------------------------
	login check�Լ� �����Ѵ�.
	���� : 061128 ������ - �˾� ���ܽ� FAQ�� �̵�
--------------------------------------------------------------------*/



function goFocus(){
	document.form1.alias_id.focus();
}


//-- 2003/10/10 dong �߰�
function call_x_pw(){  // -- ��й�ȣ�� �߸��Ȱ��
	var win = window.open("/fullsize/public/login/cust/x_pw.html",'',"height=220,width=294,scrollbars=no,top=100,left=0");
	
}

function call_no_id(){ // -- ID �� �߸��Ȱ��
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

	// 0 . �ֹ���ȣ�Է�
	if(frm.jumun_num.value==""){
		alert("�ֹ���ȣ�� �����ϼž� �մϴ�.");
		frm.jumun_num.focus();
		return;
	}
	// 1- ��й�ȣ�Է�
	if(frm.non_passwd.value==""){
		alert("��й�ȣ�� �����ϼž� �մϴ�.");
		frm.non_passwd.focus();
		return;
	}

	ascii_trans(document.form1.elements["non_passwd"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs

	// frm.action="https://www.speedmall.co.kr/small/login/non_login_persist.jsp";
	frm.action="/small/login/non_login_persist_ssl.jsp";
	//frm.target="tmpFrame";
	frm.submit();

	//return true;
}
