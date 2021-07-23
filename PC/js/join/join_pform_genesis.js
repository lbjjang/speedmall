// 수정해야됨
function gogogo(){
	if(event.keyCode == '13'){ 
   		Save();
    } 
}


// 주소찾기

function addr_sear(){
	var acc = document.fm;
	var win2 = window.open("/small/pop/pop_post2_genesis.jsp?flag=1",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	


// 회원가입
function Save(){
  if(ValidCheck()==false){
    return;
  }

	  fm.action="/small/join/join_cform_persist_genesis.jsp";
	//  fm.target="tmpFrame";
	  fm.submit();
}



function check_mail(val){
  if(val == "self"){
    document.fm.email3.style.display = '';
    document.fm.email3.focus();
  }else{
    document.fm.email3.style.display = 'none';
  }
}


function ValidCheck(){  
	var obj = document.fm;

	var join_proc;


	if ( obj.tel_num1.value.length == 0 ){
		alert("전화번호 첫번째를 입력하셔야 합니다.");
		obj.tel_num1.focus();
		return false;
	}	
 
	if ( obj.tel_num2.value.length < 3 ){
		alert("전화번호 두번째는 3자리이상 입력하셔야 합니다.");
		obj.tel_num2.focus();
		return false;
	}	
 
	if ( obj.tel_num3.value.length < 4 ){
		alert("전화번호 세번째는 4자리 이상  입력하셔야 합니다.");
		obj.tel_num3.focus();
		return false;
	}	

  
	if((obj.addr3.value == "") || obj.etc_sno.value == ""){
		alert("주소를 입력하세요.");
		obj.etc_sno.focus();
		return false;
 	} 
  	
	if (obj.email3.value == ""){
		alert("E-Mail 주소를 입력하세요.");
		obj.email3.focus();
		return false;
	}

	return true;
}





















