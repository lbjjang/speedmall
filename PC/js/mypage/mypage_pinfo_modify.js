 /*
 /* 2007.12.04 - ValidCheck2에서 
 /* ( addr3 --> send_addr3)로 변경 - jklee
 /* 2007.12.06 fm->form1으로 변경..
  * 2010.07.19 연속된 문자 / 동일한 문자로의 패스워드 변경 불가 sskim
  * 
  */ 


// 수정해야됨
function gogogo(num){
	if(event.keyCode == '13'){ 
   		if(num == 1){
   			changePwd();
   		}
   		else{
   			Save2();
   		}
    } 
}

function changePwd(){
	if(upPwdFrm.old_pwd.value == false){
		alert("기존 비밀번호를 입력하세요!");
		upPwdFrm.old_pwd.focus();
		return;
	}
	
	if(upPwdFrm.new_pwd.value == false){
		alert("새로운 비밀번호를 입력하세요!");
		upPwdFrm.new_pwd.focus();
		return;
	}
	
	if(upPwdFrm.new_pwd.value.length < 6 ){
		alert("비밀번호는 6자 이상 입력하셔야 합니다.");
		upPwdFrm.new_pwd.value = "";
		upPwdFrm.new_pwd2.value = "";
		upPwdFrm.new_pwd.focus();
		return;
 	} 

	if( english_su(upPwdFrm.new_pwd.value)==false ){
		alert("비밀번호는 특수문자 없이 숫자와 문자의 조합으로 6자리 이상 입력하여 주십시오.");
		upPwdFrm.new_pwd.value = "";
		upPwdFrm.new_pwd2.value = "";
		upPwdFrm.new_pwd.focus();
		return;
	}

	if(upPwdFrm.new_pwd.value != upPwdFrm.new_pwd2.value){
		alert("비밀번호와 비밀번호(확인)가 다릅니다.");
		upPwdFrm.new_pwd2.focus();
		return;
	}
/*
	if (upPwdFrm.cust_id.value==upPwdFrm.new_pwd.value ){
		alert("아이디와 비밀번호가 동일하시면 안됩니다.");
		upPwdFrm.new_pwd.value = "";
		upPwdFrm.new_pwd2.value = "";
		upPwdFrm.new_pwd.focus();
   		return;
	}
*/
	/****
	 * 비밀번호 연속성 검사 sskim 20100719
	 */
	
	var SamePass_0 = 0; //동일문자 카운트
    var SamePass_1 = 0; //연속성(+) 카운드
    var SamePass_2 = 0; //연속성(-) 카운드
    
    var chr_pass_0;
    var chr_pass_1;
    
    for(var i=0; i < upPwdFrm.new_pwd.value.length; i++)
    {
        chr_pass_0 = upPwdFrm.new_pwd.value.charAt(i);
        chr_pass_1 = upPwdFrm.new_pwd.value.charAt(i+1);
        
        //동일문자 카운트
        if(chr_pass_0 == chr_pass_1)
        {
            SamePass_0 = SamePass_0 + 1
        }
       
        //연속성(+) 카운드
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1)
        {
            SamePass_1 = SamePass_1 + 1
        }
        
        //연속성(-) 카운드
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1)
        {
            SamePass_2 = SamePass_2 + 1
        }
    }
    
    if(SamePass_0 > 1)
    {
        alert("동일문자를 3번 이상 사용할 수 없습니다.");
        return;
    }
   
    if(SamePass_1 > 1 || SamePass_2 > 1 )
    {
      //  alert("연속된 문자열(123 또는 321, abc, cba 등)을\n3자 이상 사용 할 수 없습니다.");
	  //20130225 이하나씨 관련 연속성 문제 일시 수정
        alert("연속된 문자열(12 또는 21, ab, ba 등)을\n2자 이상 사용 할 수 없습니다.");
        return;
    }
    
	/****
	 * 비밀번호 연속성 검사 sskim 20100719 끝
	 */
    
	if(confirm("비밀번호를 수정 하시겠습니까?")){

		ascii_trans(document.upPwdFrm.elements["old_pwd"]);//패스워드 아스키값 변경 20100622 kimjs
		ascii_trans(document.upPwdFrm.elements["new_pwd"]);//패스워드 아스키값 변경 20100622 kimjs
		ascii_trans(document.upPwdFrm.elements["new_pwd2"]);//패스워드 아스키값 변경 20100622 kimjs

		upPwdFrm.myUpFlag.value = "1";
		upPwdFrm.action = "/small/mypage/mypage_pinfo_modify_persist.jsp";
		//upPwdFrm.target = "tmpFrame";
		upPwdFrm.submit();
	}
	

}

// 주소찾기
function addr_sear(){
	var acc = document.fm;
	var win2 = window.open("/speedmall/pop_post.jsp?flag=1",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	


// 비밀번호를 변경 합니다.
function Save2(){
  if(ValidCheck2()==false){
    return;
  }
  if(!confirm("담당자정보를 수정 하시겠습니까?")){
	  return;
  }
  ascii_trans(document.form1.elements["checkpasswd"]);//패스워드 아스키값 변경 20100622 kimjs

  form1.myUpFlag.value = "2";
  form1.action="/small/mypage/mypage_pinfo_modify_persist.jsp";
  //form1.target="tmpFrame";
  form1.submit();
}



function Save4(){

  if(f_businessClick()==false){ // 업종선택
		alert("업종을 선택하여 주시기 바랍니다. \n\n기타일 경우 기타사유를 작성해 주시기 바랍니다.");
		return;
  }else if(f_intercategory()==false){ // 관심카테고리선택
		alert("관심 카테고리를 선택하여 주시기 바랍니다. ");
		return;
  }
  
  var obj = document.form1;
  
  if (obj.checkpasswd.value == ""){
		alert("정보수정을 위해서 비밀번호를 입력하세요.");
		obj.checkpasswd.focus();
		return
	}
  
  if(!confirm("업종/관심카테고리를 변경하시겠습니까?")){
	  return;
  }  

   ascii_trans(document.form1.elements["checkpasswd"]);//패스워드 아스키값 변경 20100622 kimjs
  
  form1.myUpFlag.value = "4";
  form1.action="/small/mypage/mypage_pinfo_modify_persist.jsp";
  //form1.target="tmpFrame";
  form1.submit();
  
}

	function f_businessClick(){
		var frm=document.form1;
		var gubun="";
		var gubun_value="";
		var iCnt=0;

		/**
		* 라디오버튼의 수만큼 순환
		*/
		for(i=0; i<frm.business.length; i++){
				// 체크된지점 체크
				if(frm.business[i].checked==true){
					iCnt=1;
					frm.in_business_gubun.value=frm.business[i].gubun;
					frm.in_business_txt.value=frm.business[i].value;

					// 기타일경우 기타의 값 입력
					if(frm.in_business_txt.value=="pro_etc"){
						frm.in_business_txt.value="1-"+frm.business0.value;
					}else if(frm.in_business_txt.value=="con_etc"){
						frm.in_business_txt.value="2-"+frm.business1.value;
					}else if(frm.in_business_txt.value=="serv_etc"){
						frm.in_business_txt.value="3-"+frm.business2.value;
					}else if(frm.in_business_txt.value=="another_etc"){
						frm.in_business_txt.value="4-"+frm.business3.value;
					}else if(frm.in_business_txt.value=="person_etc"){
						frm.in_business_txt.value="5-"+frm.business4.value;
					}					

					if(frm.in_business_txt.value == ""){
						iCnt=0;
					}
				}
		}// Enf for


		if(iCnt==0){
			return false;
		}else{
			return true;
		}
	}// End function

	//관심 카테고리 
	function f_intercategory(){
		
		var frm=document.form1;
		var iCnt=0;
		
		for(i=0;i<7;i++){
			
			if(frm.intercategory[i].checked==false)
			{
			iCnt++;
			}
		}	
		
		if(iCnt==7){
			return false;
		}else{
			return true;
		}		
			
	}// End function
	
	


function check_mail(val){
  if(val == "self"){
    document.fm.email3.style.display = '';
    document.fm.email3.focus();
  }else{
    document.fm.email3.style.display = 'none';
  }
}


function ValidCheck2(){  
	var obj = document.form1;

	//if((obj.send_addr3.value == "") || obj.etc_sno.value == ""){
	if(obj.send_addr3.value == ""){
		alert("주소를 입력하세요.");
		obj.send_addr3.focus();
		//obj.etc_sno.focus();
		return false;
 	} 

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

	if ( obj.mcom_num1.value.length == 0 ){
		alert("휴대폰번호 첫번째를 입력하셔야 합니다.");
		obj.mcom_num1.focus();
		return false;
	}	
 
	if ( obj.mcom_num2.value.length < 3 ){
		alert("휴대폰번호 두번째는 3자리이상 입력하셔야 합니다.");
		obj.mcom_num2.focus();
		return false;
	}	
 
	if ( obj.mcom_num3.value.length < 4 ){
		alert("휴대폰번호 세번째는 4자리 이상  입력하셔야 합니다.");
		obj.mcom_num3.focus();
		return false;
	}	
	
	if (obj.email3.value == ""){
		alert("E-Mail 주소를 입력하세요.");
		obj.email3.focus();
		return false;
	}

	if (obj.checkpasswd.value == ""){
		alert("정보수정을 위해서 비밀번호를 입력하세요.");
		obj.checkpasswd.focus();
		return false;
	}
	
	return true;
}





















