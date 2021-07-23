  /*
   * 2007.12.04 - ValidCheck2에서 
   * ( addr3 --> send_addr3)로 변경 - jklee
   * 2010.07.19 연속된 문자 / 동일한 문자로의 패스워드 변경 불가 sskim
   */ 
  
// 수정해야됨
function gogogo(num){
	if(event.keyCode == '13'){ 
   		if(num == 1){
   			changePwd();
   		}
   		else{
   			Save();
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
		alert("비밀No.는 6자 이상 입력하셔야 합니다.");
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
		alert("비밀No.와 비밀No.(확인)가 다릅니다.");
		upPwdFrm.new_pwd2.focus();
		return;
	}

	if (upPwdFrm.alias_id.value==upPwdFrm.new_pwd.value ){
		alert("아이디와 비밀번호가 동일하시면 안됩니다.");
		upPwdFrm.new_pwd.value = "";
		upPwdFrm.new_pwd2.value = "";
		upPwdFrm.new_pwd.focus();
   		return;
	}
	
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
        alert("연속된 문자열(123 또는 321, abc, cba 등)을\n3자 이상 사용 할 수 없습니다.");
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
		upPwdFrm.action = "/small/mypage/mypage_cinfo_modify_persist.jsp";
		//upPwdFrm.target = "tmpFrame";
		upPwdFrm.submit();
	}
}

// 비밀번호를 변경 합니다.
function Save(){
  if(ValidCheck03()==false){
    return;
  }
    if(!confirm("기업정보를 수정 하시겠습니까?")){
		return;
	}
	ascii_trans(document.form1.elements["checkpasswd"]);//패스워드 아스키값 변경 20100622 kimjs


  form1.myUpFlag.value = "2";
  form1.action="/small/mypage/mypage_cinfo_modify_persist.jsp";
  //form1.target="tmpFrame";
  form1.submit();
}


function Save3(){

	if(ValidCheck4()==false){
    return;
  }


    if(!confirm("세금계산서 정보를 수정 하시겠습니까?")){
		return;
	}
	ascii_trans(document.form1.elements["checkpasswd"]);//패스워드 아스키값 변경 20100622 kimjs

  form1.myUpFlag.value = "3";
 

  form1.action="/small/mypage/mypage_cinfo_modify_persist.jsp";
  //form1.target="tmpFrame";
  form1.submit();

}


function ValidCheck4(){
	var obj = document.form1;

	if(obj.cust_nm1.value == "" ){
		alert("세금계산서 이름을 입력하세요.");
		obj.cust_nm1.focus();
		return false;
 	} 
 	
 	if(obj.email4.value == "" ){
		alert("세금계산서E-mail 주소를 입력하세요.");
		obj.email4.focus();
		return false;
 	} 
	if (obj.checkpasswd.value == ""){
		alert("정보수정을 위해서 비밀번호를 입력하세요.");
		obj.checkpasswd.focus();
		return false;
	}	
 	
	return true;

}



// 사업장가입신청서 필드확인
function ValidCheck2(){ 
	var obj = document.form1;
	//if(obj.cop_nm.value.length == 0 ){
	if(obj.this_bshop_nm.value.length == 0 ){
		alert("업체명을 입력하셔야 합니다.");
		obj.cop_nm.focus();
		return false;
 	} 
 	
 	if ( obj.busi_ty.value.length == 0 ){
		alert("업태를 입력하셔야 합니다.");
		obj.busi_ty.focus();
		return false;
	}
	
	if ( obj.kn.value.length == 0 ){
		alert("종목을 입력하셔야 합니다.");
		obj.kn.focus();
		return false;
	}
 	
 	//if((obj.send_addr3.value == false) || obj.etc_sno.value == false){
	if(obj.send_addr3.value == false ){
		alert("주소를 입력하셔야 합니다.");
		//obj.etc_sno.focus();
		obj.send_addr3.focus();
		return false;
 	} 
 	
 	if(obj.duty_nm.value.length == 0 ){
		alert("직위를 입력하셔야 합니다.");
		obj.duty_nm.focus();
		return false;
 	} 	 
 	/*
 	if(obj.cust_ogn_nm.value.length == 0 ){
		alert("부서를 입력하셔야 합니다.");
		obj.cust_ogn_nm.focus();
		return false;
 	} 	 
  */
  /* 2007.11.29 주석처리
  	if((obj.send_addr3.value == false) || obj.send_etc_sno.value == false){
		alert("배송지 주소를 입력하셔야 합니다.");
		obj.send_etc_sno.focus();
		return false;
 	} 
  */
	if( obj.tel_num1.value.length == 0 ){
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
	
	/*
	if ( obj.fax_num1.value.length == 0 ){
		alert("팩스번호 첫번째를 입력하셔야 합니다.");
		obj.fax_num1.focus();
		return false;
	}	
 
	if ( obj.fax_num2.value.length < 3 ){
		alert("팩스번호 두번째는 3자리이상 입력하셔야 합니다.");
		obj.fax_num2.focus();
		return false;
	}	
 
	if ( obj.fax_num3.value.length < 4 ){
		alert("팩스번호 세번째는 4자리 이상  입력하셔야 합니다.");
		obj.fax_num3.focus();
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
	
	if (obj.email3.value == ""){
		alert("E-Mail 주소를 입력하세요.");
		obj.email3.focus();
		return false;
	}
	
	return true;
}



// 사업자등록번호 중복 체크를 합니다.
function f_busi_double_check(){
  	if(ValidCheck02()==false){
  		return;
	}

  	form1.action="/speedmall/join/join_company_busi_chk_persist.jsp";
  	form1.target="tmpFrame";
  	form1.submit();
}
   

//입력오류를 검증합니다.
function ValidCheck02(){
	var obj = document.form1;
	if(obj.busi_man_num1.value.length < 3){
    alert("첫번째 사업자등록번호가 지정되지 않았습니다. 3자리까지 입력 하셔야 합니다.");
	  obj.busi_man_num1.focus();
    return false; 
  }
	if(obj.busi_man_num2.value.length < 2){
    alert("두번째 사업자등록번호가 지정되지 않았습니다. 2자리까지 입력 하셔야 합니다.");
	  obj.busi_man_num2.focus();
    return false; 
  }
	if(obj.busi_man_num3.value.length < 3){
    alert("세번째 사업자등록번호가 지정되지 않았습니다. 5자리까지 입력 하셔야 합니다.");
	  obj.busi_man_num3.focus();
    return false; 
  }
	
 		
	return true;
}


function ValidCheck03(){
	var obj = document.form1;
	
	if(obj.enpri_cnt.value > 1 ){
		
		alert(obj.this_bshop_nm.value+"의 다른사용자가 존재합니다. \n기업정보 수정은 고객센터(1644-5644)로 문의바랍니다.");
		return false;
 	}
	

  if(obj.this_bshop_nm.value.length == 0 ){
		alert("법인명을 입력하셔야 합니다.");
		obj.this_bshop_nm.focus();
		return false;
 	} 
 	
 	if ( obj.busi_ty.value.length == 0 ){
		alert("업태를 입력하셔야 합니다.");
		obj.busi_ty.focus();
		return false;
	}

	if ( obj.busip_mag_man.value.length == 0 ){
		alert("대표자명을 입력하셔야 합니다.");
		obj.busip_mag_man.focus();
		return false;
	}
	
	if ( obj.kn.value.length == 0 ){
		alert("종목을 입력하셔야 합니다.");
		obj.kn.focus();
		return false;
	}
 	
 	//if((obj.send_addr3.value == false) || obj.etc_sno.value == false){
	if(obj.send_addr3.value == false ){
		alert("주소를 입력하셔야 합니다.");
		//obj.etc_sno.focus();
		obj.send_addr3.focus();
		return false;
 	} 
	if(obj.regi_addr.value == false ){
		alert("사업장소재지를 입력하셔야 합니다.");
		//obj.etc_sno.focus();
		obj.regi_addr.focus();
		return false;
 	} 

	obj.obun_ymd.value=RemoveHypen(obj.obun_ymd.value);
	obj.obun_ymd.value=obj.obun_ymd.value.replace(/(^\s*)|(\s*$)/g,"");

	if (obj.obun_ymd.value.length != 8) {
		alert("창립기념일이 8자리가 아니거나, 하이픈이 포함되었습니다.");
		obj.obun_ymd.focus();
		return false;
	}



	if(obj.empl_num.value== 0 ){
		alert("직원수를 입력하셔야 합니다. ");
		//obj.etc_sno.focus();
		obj.empl_num.focus();
		return false;
 	} 

	if (obj.checkpasswd.value == ""){
		alert("정보수정을 위해서 비밀번호를 입력하세요.");
		obj.checkpasswd.focus();
		return false;
	}	
 	
 		
	return true;
}


function check_mail(val){
  if(val == "self"){
    document.form1.email3.style.display = '';
    document.form1.email3.focus();
  }else{
    document.form1.email3.style.display = 'none';
  }
}
function check_cust_mail(val){
  if(val == "self"){
    document.form1.cust_email3.style.display = '';
    document.form1.cust_email3.focus();
  }else{
    document.form1.cust_email3.style.display = 'none';
  }
}


function addr_sear(){
	var acc = document.form1;
	var win2 = window.open("/speedmall/pop_post.jsp?flag=1",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	



// 주소찾기
/*
function addr_sear(num){
	var acc = document.form1;
	var win2 = window.open("/speedmall/pop_post.jsp?flag="+num,'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	
*/

// 배송지 주소
function same_address(){
	form1.same_addr.checked = false;
	if(form1.addr1.value == false || form1.etc_sno.value == false){
		form1.addr1.focus();
		alert("주소를 입력해주세요!");
		return;
	}else{
		form1.send_addr1.value = form1.addr1.value;
		form1.send_addr2.value = form1.addr2.value;
		//form1.send_addr3.value = form1.addr3.value;
		form1.send_etc_sno.value = form1.etc_sno.value;
		form1.same_addr.checked = true;
	}
}


// 배송지 주소
function same_address2(){
	form1.same_addrs.checked = false;
	if(form1.send_addr1.value == false){
		form1.send_addr1.focus();
		alert("주소를 입력해주세요!");
		return;
	}else{
		form1.s_zip1.value = form1.send_addr1.value;
		form1.s_zip2.value = form1.send_addr2.value;
		form1.s_juso.value = form1.send_addr3.value;
		//alert("addr3--->"+fm.addr3.value);   
		form1.juso2.value = form1.juso2_c.value;
		form1.same_addrs.checked = true;
	}
}











