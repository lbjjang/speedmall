// 수정해야됨
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

// 비밀번호를 변경 합니다.
function Save(){
  if(JValidCheck()==false){
    return;
  }
}

function validCheck(){
	if(!document.getElementsByName("checkClause")[0].checked){
		alert("약관에 동의 해야 합니다!");
		return;
	}
	
		if(document.getElementById("person_name").value == false){
			alert("이름을 입력하세요!");
			document.getElementById("person_name").focus();
			return;
		}
		
		if(document.getElementById("jumin1").value.length != 6 ){
			alert("첫번째 주민번호를 입력하세요.");
			document.getElementById("jumin1").focus();
			return;
		}
		
		if(document.getElementById("jumin1").value.length == 6 && document.getElementById("jumin2").value.length != 7 ){
			alert("두번째 주민번호를 입력하세요.");
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