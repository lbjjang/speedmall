/*--------------------------------------------------------------------
	login check�Լ� �����Ѵ�.
	���� : 061128 ������ - �˾� ���ܽ� FAQ�� �̵�
--------------------------------------------------------------------*/
function new_login(){

	frm = document.form1;

	if(frm.alias_id.value=="") {
		alert("����� ���̵� �������� �ʾҽ��ϴ�.");
		frm.alias_id.focus();
		return;
	}
	
	if(frm.password.value=="") {
		alert("��й�ȣ�� �������� �ʾҽ��ϴ�.");
		frm.password.focus();
		return;
	}

	flag = "N" 

	// -- ID ���� ��Ű�κ�
	set_view(frm.alias_id.value);
	
	var b_loc = "/small/login/login_persist.jsp";
	frm.action=b_loc;
	frm.target="tmpFrame";
	frm.submit();

//	return true;
}



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


function set_view(id)
{
    if(document.form1.CookieId.checked == true){
        setCookie('SPEED_ID_COOKIE', id, 1000);
    }
    else {
        setCookie('SPEED_ID_COOKIE', 'NO', 1000);

    }

   // this.parent.opener.F_focus();
   // self.close();
   
}

function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate()+expiredays);
    document.cookie= name+"="+escape(value)+"; path=/; expires=" + todayDate.toGMTString() + ";";
}


// ��Ű�߰��κ�

function getCookie( name )
{
    var nameOfCookie = name + "=";
    var x = 0;
    while ( x <= document.cookie.length )
    {
        var y = (x+nameOfCookie.length);
        if ( document.cookie.substring( x, y ) == nameOfCookie )
        {
            if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
            endOfCookie = document.cookie.length;
            return unescape( document.cookie.substring( y, endOfCookie ) );
        }
        x = document.cookie.indexOf( " ", x ) + 1;
        if ( x == 0 )
        break;
    }
    return "";
}


function chkCookie() {
	   var Id=getCookie('SPEED_ID_COOKIE');
       if( Id == 'NO' || Id==null || Id=="" ) {
		   document.form1.alias_id.focus();
		   document.form1.CookieId.checked=false;
       }else{
   		   document.form1.alias_id.value=Id;
		   document.form1.password.focus();
   		   document.form1.CookieId.checked=true;
	   }
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

	frm.action="https://www.speedmall.co.kr/small/login/non_login_persist.jsp";
	frm.submit();

	//return true;
}