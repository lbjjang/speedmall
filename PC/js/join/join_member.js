// �����ؾߵ�
//function gogogo(){
	//if(event.keyCode == '13'){ 
   		//validCheck();
    //} 
//}

function gogogo(){
	if(event.keyCode == '13'){ 
   		Save();
    } 
}

// ��й�ȣ�� ���� �մϴ�.
function Save(){
  if(JValidCheck()==false){
    return;
  }
}

function validCheck(){
	if(!document.getElementsByName("checkClause")[0].checked){
		alert("����� ���� �ؾ� �մϴ�!");
		return;
	}
	
		if(document.getElementById("person_name").value == false){
			alert("�̸��� �Է��ϼ���!");
			document.getElementById("person_name").focus();
			return;
		}
		
		if(document.getElementById("jumin1").value.length != 6 ){
			alert("ù��° �ֹι�ȣ�� �Է��ϼ���.");
			document.getElementById("jumin1").focus();
			return;
		}
		
		if(document.getElementById("jumin1").value.length == 6 && document.getElementById("jumin2").value.length != 7 ){
			alert("�ι�° �ֹι�ȣ�� �Է��ϼ���.");
			document.getElementById("jumin2").focus();
			return;
		}
	
	
	
	/*
	checkUserForm.action = "./check_member.jsp";
	alert("Error");
	checkUserForm.target = "tmpFrame";
	checkUserForm.submit();
*/
	fm.action = "/small/join/join_pform.jsp";
//	fm.target = "tmpFrame";
	fm.submit();

}