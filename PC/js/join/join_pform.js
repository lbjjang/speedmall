// 수정해야됨
function gogogo(){
	if(event.keyCode == '13'){ 
   		Save();
    } 
}

// ID 중복체크
function Id_chk(){
	var acc = document.fm;
	var alias = acc.alias_id.value;
	var chkVls = /^[a-z\d]{6,16}$/i;
	
	if ( alias==""){
		alert("ID를 입력해 주세요.");
		acc.alias_id.focus();
		return;
	}
	
	//alert(chkVls.test(alias));
	
	if(!chkVls.test(alias)){ 
   		alert("ID항목의 형식이 올바르지 않습니다."); 
   		acc.alias_id.focus();
		return;
  	}
	var win = window.open("./pop_id.jsp?alias_id="+alias,'id_checkFrm2','width =400 height=300 top=150 left=150','scrollbar=no');
	win.focus();
}  


// 주소찾기

function addr_sear(){
	var acc = document.fm;
	var win2 = window.open("/small/pop/pop_post2.jsp?flag=1",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	   
function f_addr_ad_pmem() {
	var call_str = "/small/pop/addr.jsp?flag=1&page=n_mem_in";
	var win = window.open(call_str,'pop_post','width =435 height=425,resizable=no,scrollbars=no');
		win.focus();
}


// 회원가입
function personalJoinSave(){
  if(ValidCheck()==false){
    return;
  }

	ascii_trans(document.fm.elements["passwd"]);//패스워드 아스키값 변경 20100622 kimjs
	ascii_trans(document.fm.elements["passwd2"]);//패스워드 아스키값 변경 20100622 kimjs

    fm.action="/small/join/personal_member_join_process.jsp";
    fm.submit();

}

// 회원가입
function Save1(){
	if(ValidCheck()==false){
		return;
	}

	ascii_trans(document.fm.elements["passwd"]);//패스워드 아스키값 변경 20100622 kimjs
	ascii_trans(document.fm.elements["passwd2"]);//패스워드 아스키값 변경 20100622 kimjs

	fm.action="/small/inf/daewooenc/join_pform_persist_v2.jsp";
	fm.submit();
  
}


/**
 * 가입경로 체크하는 스크립트
 */
 function f_joinClick(){
	var frm=document.fm;
	var gubun="";
	var gubun_value="";
	var iCnt=0;

	/**
	* 라디오버튼의 수만큼 순환
	*/
	for(i=0; i<frm.join_process.length; i++){
			// 체크된지점 체크
			if(frm.join_process[i].checked==true){
				iCnt=1;
				frm.in_path_gubun.value=frm.join_process[i].gubun;
				frm.in_gubun_txt.value=frm.join_process[i].value;

				// 기타일경우 기타의 값 입력
				if(frm.in_gubun_txt.value=="internet_etc"){
					frm.in_gubun_txt.value="1-"+frm.join_process0.value;
				}else if(frm.in_gubun_txt.value=="member_info"){
					frm.in_gubun_txt.value="3-"+frm.join_process1.value;
				}else if(frm.in_gubun_txt.value=="etc_etc"){
					frm.in_gubun_txt.value="4-"+frm.join_process2.value;
				}
				if(frm.in_gubun_txt.value == ""){
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


function f_businessClick(){
	var frm=document.fm;
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
	
	var frm=document.fm;
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
    document.fm.email4.style.display = '';
    document.fm.email4.focus();
  }else{
    document.fm.email4.style.display = 'none';
  }
}

//문자열과 숫자 특수문자 조합 패스워드 검사
function chkPassCombine(pw){
    var matchNum = 0;

    var arrReg = [
                  new RegExp("^.*[a-z]+.*$","g"),
                  new RegExp("^.*[A-Z]+.*$","g"),
                  new RegExp("^.*[0-9]+.*$","g"),
                  new RegExp("^.*[!@#\$%\^\&\*\(\)]+.*$","g")
    ];

    var allowReg = new RegExp("^[A-z0-9,!,@,#,\$,%,\^,\&,\*,\(,\)]{8,15}$");

    if(pw.match(arrReg[0]))
        ++matchNum;
    if(pw.match(arrReg[1]))
        ++matchNum;
    if(pw.match(arrReg[2]))
        ++matchNum;
    if(pw.match(arrReg[3]))
        ++matchNum;

    if(matchNum>=3 && pw.match(allowReg))
        return true;
    else
        return false;
}

function ValidCheck(){  
	var obj = document.fm;

	var join_proc;

	if( obj.alias_id.value.length < 6 ){
		alert("신청ID는 6자 이상 입력하셔야 합니다.");
		obj.alias_id.focus();
		return false;
  	}
  
	if( special_word(obj.alias_id.value)==false ){
		alert("아이디는 특수문자 없이 숫자/ 문자로 6자리 이상 입력하여 주십시오.");
		obj.alias_id.focus();
		return false;
	}
	
	if( obj.valid_id.value.length == 0 || (obj.valid_id.value != obj.alias_id.value) ){
		alert("ID 중복 확인을 거치셔야 합니다.");
		obj.alias_id.focus();
		return false;
  	}
 
	if(obj.passwd.value.length < 8 ){ 
		alert("비밀번호는 8자 이상 입력하셔야 합니다.");
		obj.passwd.value = "";
		obj.passwd2.value = "";
		obj.passwd.focus();
		return false;
 
 	}
	
	if( chkPassCombine(obj.passwd.value)==false ){
		alert("비밀번호는 8자리 이상의 영문 대,소문자,숫자,특수문자 중 3가지 이상 사용하셔야 합니다.");
		obj.passwd.value = "";
		obj.passwd2.value = "";
		obj.passwd.focus();
		return false;
	}
 
  	if (obj.passwd.value != obj.passwd2.value ){
  		alert("비밀번호와 비밀번호(확인)가 다릅니다.");
  		obj.passwd2.value = "";
		obj.passwd2.focus();
   		return false;
	}


	//shpark 2011-06-23 연속성 , 연속 숫자 두개 확인 

		var passwd_check = obj.passwd.value;
		var i;

		for(i=0; i<passwd_check.length;i++){
		
		//동일 3번 체크 
		 var before = passwd_check.substring(i,i-1);
		 var now = passwd_check.substring(i,i+1);
		 var after = passwd_check.substring(i+1,i+2);
		
		if( before == "" || now =="" || after == "" ){
		}else{
			if(before == now && now == after && after == before){
			alert("연속된 동일한 숫자 3번 입력 되었습니다.");
			obj.passwd.value = "";
			obj.passwd2.value = "";
			obj.passwd.focus();
			return false;
			}
		}

		//연속된 3숫자 입력 

		chr_pass_0 = passwd_check.charAt(i);
		chr_pass_1 = passwd_check.charAt(i+1);
		chr_pass_2 = passwd_check.charAt(i+2);

		if( chr_pass_0 == "" || chr_pass_2 =="" || chr_pass_2 == "" ){
		}else{

			suncha1 = chr_pass_0.charCodeAt(0);
			suncha2 = chr_pass_1.charCodeAt(0)-1;
			suncha3 = chr_pass_2.charCodeAt(0)-2;

			r_suncha1 = chr_pass_0.charCodeAt(0)-2;
			r_suncha2 = chr_pass_1.charCodeAt(0)-1;
			r_suncha3 = chr_pass_2.charCodeAt(0);
			
			if(suncha1 == suncha2 && suncha2 == suncha3 && suncha1 == suncha3){
			alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
			obj.passwd.value = "";
			obj.passwd2.value = "";
			obj.passwd.focus();
			return false;
			}

			if(r_suncha1 == r_suncha2 && r_suncha2 == r_suncha3 && r_suncha1 == r_suncha3){
			alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
			obj.passwd.value = "";
			obj.passwd2.value = "";
			obj.passwd.focus();
			return false;
			}
		}
		}


 
	if (obj.alias_id.value==obj.passwd.value ){
		alert("아이디와 비밀번호가 동일하시면 안됩니다.");
		obj.passwd.value = "";
		obj.passwd2.value = "";
		obj.passwd.focus();
   		return false;
	}
	
	if((obj.addr3.value == "") || obj.etc_sno.value == ""){
		alert("주소를 입력하세요.");
		obj.etc_sno.focus();
		return false;
 	} 
	/*
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
	*/

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
	
	/* 마케팅 수신동의 미체크시 알림창 띄움 */
	/*
	if(obj.sms_order.value==""){
		alert('SMS 마케팅 수신동의를 선택하여 주십시오');
		obj.sms_order.focus();
		return false;
	}
	*/
	/* 마케팅 수신동의 미체크시 알림창 띄움 */
  	
	if (obj.email4.value == ""){
		alert("E-Mail 주소를 입력하세요.");
		obj.email4.focus();
		return false;
	}
	
	if (obj.email5.value == "" ){
		alert("E-Mail 주소를 입력하세요.");
		obj.email5.focus();
		return false;
	}
	
	/* 마케팅 수신동의 미체크시 알림창 띄움 */
	/*
	if(obj.mail_order.value==""){
		alert('이메일 마케팅 수신동의를 선택하여 주십시오');
		obj.mail_order.focus();
		return false;
	}
	*/
	/* 마케팅 수신동의 미체크시 알림창 띄움 */
	
	return true;
}

function setEmail(obj){
 var emailVal = obj.value;
 email5 = document.fm.email5
 	if(emailVal == "-1"){
 	 email5.readOnly = false;
  	 email5.value = "";
 	}else{
 	 email5.readOnly = true;
  		if(emailVal != "-1"){
  		 email5.value = emailVal;
  							}
 	}
}


function setEmail1(obj){
 var emailVal = obj.value;
 email5 = document.fm.email5
 	if(emailVal == "-1" ){
 	 email5.readOnly = false;
  	 email5.value = "";
  	 document.getElementById('email5').style.display='block'
 	}else if(emailVal == ""){ 	
	email5.readOnly = false;
  	email5.value = "";
 	document.getElementById('email5').style.display='none'
 	}else{
 		email5.readOnly = true;
 		if(emailVal != "-1"){
 			email5.value = emailVal;  		
 			document.getElementById('email5').style.display='none'
		}
 	}
}

// 회원가입(개인, 회사) 전체 동의 체크 
function joinAllAgree(vComponentId) {
	
	if ($('#'+vComponentId).prop('checked')==true) {
		$('#agreement1').prop('checked', true);
		$('#agreement2').prop('checked', true);
		$('#agreement3').prop('checked', true);
    }else{
	    $('#agreement1').prop('checked', false);
	    $('#agreement2').prop('checked', false);
	    $('#agreement3').prop('checked', false);
    }

}
