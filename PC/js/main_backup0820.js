var ReturnValue = false;

function eraseImage(num){
	if(num==1){
	document.getElementById(num == "1" ? "id" : "password").style.backgroundImage = "url(about:blank)";
	}
}

function eraseImage2(num){
	if(num==2){
		document.getElementById(num == "2" ? "password" : "id").style.backgroundImage = "url(about:blank)";
	}
}
// login 로그인
function login(){
  if(ValidCheck()==false){
		ReturnValue = false;
  	return;
  }

	set_view(document.form1.ID.value);

	ReturnValue = true;
  	form1.action="/speedmall/login/login_persist.jsp";
  	form1.target="tmpFrame";
  	form1.submit();
}
   

//form check
function ValidCheck(){
	var obj = document.form1;
	if(obj.ID.value.length == 0){
    alert("사용자 아이디가 지정되지 않았습니다.");
	  obj.ID.focus();
    return false; 
  }
	if(obj.password.value.length == 0){
    alert("비밀번호가 지정되지 않았습니다.");
	  obj.password.focus();
    return false; 
  }
	return true;
}




function call_x_pw(){  // -- the wrong password
var frm = document.form1;
	var win = window.open("../cust/x_pw.html",'',"height=220,width=294,scrollbars=no,top=100,left=0");
	location.href('index.jsp');
	frm.PassWord.focus();
	return;
}

function call_no_id(){ // -- the wrong ID
var frm = document.form1;
	var win = window.open("../cust/no_id.html",'',"height=220,width=294,scrollbars=no,top=100,left=0");
	location.href('index.jsp');
	frm.LoginId.focus();
	return;	
}  

function pop_lostId() {
//	var lost_id_win = window.open("pop_lostId0.jsp",'',"width=500,height=300,scrollbars=no,top=100,left=0");
	//location.href('pop_lostId0.jsp');
	location.href('/speedmall/login/idpw_search.jsp');
}


// user check
function modify_myinfo(comp_chk) {		
	if(comp_chk=="0") {																	// person 0
		location.href('modify_info/modify_myinfo.jsp');
	} else if(comp_chk=="1") {															// company 1
		location.href('modify_info/modify_cominfo.jsp');	

	}
}




function logout() {
	var obj = document.fm_login;

	qa = confirm("접속을 종료합니다.");
	if ( qa==true){
		/*
		fm_login.action="/speedmall/login/logout.jsp";
		//fm_login.target="tmpFrame"; 
		fm_login.submit();  
		*/
	    this.parent.location='/speedmall/login/logout.jsp';
	}
}

function set_view(id)
{
    if(document.form1.CookieId.checked == true){
        setCookie('SPEED_ID_COOKIE', id, 1000);
    }
    else {
        setCookie('SPEED_ID_COOKIE', 'NO', 1000);

    }
}

function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate()+expiredays);
    document.cookie= name+"="+escape(value)+"; path=/; expires=" + todayDate.toGMTString() + ";";
}


// 쿠키추가부분

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
		   document.form1.ID.focus();
		   document.form1.CookieId.checked=false;
       }else{
   		   document.form1.ID.value=Id;
		   document.form1.password.focus();
   		   document.form1.CookieId.checked=true;
	   }
}