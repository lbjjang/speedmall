// �����ؾߵ�
function gogogo(){
	if(event.keyCode == '13'){ 
   		Save();
    } 
}


// �ּ�ã��

function addr_sear(){
	var acc = document.fm;
	var win2 = window.open("/small/pop/pop_post2_genesis.jsp?flag=1",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	


// ȸ������
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
		alert("��ȭ��ȣ ù��°�� �Է��ϼž� �մϴ�.");
		obj.tel_num1.focus();
		return false;
	}	
 
	if ( obj.tel_num2.value.length < 3 ){
		alert("��ȭ��ȣ �ι�°�� 3�ڸ��̻� �Է��ϼž� �մϴ�.");
		obj.tel_num2.focus();
		return false;
	}	
 
	if ( obj.tel_num3.value.length < 4 ){
		alert("��ȭ��ȣ ����°�� 4�ڸ� �̻�  �Է��ϼž� �մϴ�.");
		obj.tel_num3.focus();
		return false;
	}	

  
	if((obj.addr3.value == "") || obj.etc_sno.value == ""){
		alert("�ּҸ� �Է��ϼ���.");
		obj.etc_sno.focus();
		return false;
 	} 
  	
	if (obj.email3.value == ""){
		alert("E-Mail �ּҸ� �Է��ϼ���.");
		obj.email3.focus();
		return false;
	}

	return true;
}





















