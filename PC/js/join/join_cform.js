
// 수정해야됨
function gogogo(){
	if(event.keyCode == '13'){ 
   		Save();
    } 
}

function businessJoinSave(){
  if(JValidCheck()==false){
    return;
  }
  if(JValidCheck1() ==false){
  	return;
  }

  /*if(f_joinClick()==false){ // 가입경로
		alert("가입경로를 선택하여 주시기 바랍니다. \n\n기타 및 지인일 경우 기타사유 및 지인을 작성해 주시기 바랍니다.");
  }else if(f_businessClick()==false){ // 업종선택
		alert("업종을 선택하여 주시기 바랍니다. \n\n기타일 경우 기타사유를 작성해 주시기 바랍니다.");
  }else if(f_intercategory()==false){ // 관심카테고리선택
		alert("관심 카테고리를 선택하여 주시기 바랍니다. ");
  }else{
*/
	
	ascii_trans(document.fm.elements["passwd"]);//패스워드 아스키값 변경 20100622 kimjs
	ascii_trans(document.fm.elements["passwd2"]);//패스워드 아스키값 변경 20100622 kimjs
	 

	  fm.action="/small/join/business_member_join_process.jsp";
	  fm.submit();
 // }
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


// 사업장가입신청서 필드확인
function JValidCheck(){  
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
		alert("비밀No.는 8자 이상 입력하셔야 합니다.");
		obj.passwd.value = "";
//		obj.passwd2.value = "";
		obj.passwd.focus();
		return false;
 
 	} 
  
	if( english_su(obj.passwd.value)==false ){
		alert("비밀번호는 특수문자 없이 숫자와 문자의 조합으로 6자리 이상 입력하여 주십시오.");
		obj.passwd.value = "";
//		obj.passwd2.value = "";
		obj.passwd.focus();
		return false;
	}
 
  	if (obj.passwd.value != obj.passwd2.value ){
		alert("비밀No.와 비밀No.(확인)가 다릅니다.");
//		obj.passwd.value = "";
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
/*
	if(obj.ceo_nm.value.length == 0 ){
		alert("대표자명을 입력하셔야 합니다.");
		obj.ceo_nm.focus();
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
 	
 	if((obj.addr3.value == false) || obj.etc_sno.value == false){
		alert("주소를 입력하셔야 합니다.");
		obj.etc_sno.focus();
		return false;
 	} 
 	*/

	if ( obj.cop_nm.value.length == 0 ){
		alert("기업명을 입력하셔야 합니다. ");
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
 	

	obj.obun_ymd.value=RemoveHypen(obj.obun_ymd.value);
	obj.obun_ymd.value=obj.obun_ymd.value.replace(/(^\s*)|(\s*$)/g,"");

	if (obj.obun_ymd.value.length != 8) {
		alert("창립기념일이 8자리가 아니거나, 하이픈이 포함되었습니다.");
		obj.obun_ymd.focus();
		return false;
	}

	var ymds= obj.obun_ymd.value;
	var years= ymds.substring(0,4);
	var months= ymds.substring(4,6);
	var days= ymds.substring(6,8);

	if(years < 1900 || years >2999){
		
		alert("창립기념일 날짜형식이 맞지 않습니다.");
		obj.obun_ymd.focus();
		return false;
	}

	if(months < 1 || months > 12){
		
		alert("창립기념일 날짜형식이 맞지 않습니다.");
		obj.obun_ymd.focus();
		return false;
	}

	if(days < 1 || days > 31){
		
		alert("창립기념일 날짜형식이 맞지 않습니다.");
		obj.obun_ymd.focus();
		return false;
	}


	
	if (obj.buy_size.value == '000') {
		alert("구매규모를 선택해 주세요");
		obj.buy_size.focus();
		return false;
	}

	if (obj.empl_num.value.length == 0) {
		alert("직원수를 입력해 주세요");
		obj.empl_num.focus();
		return false;
	}

 	if(obj.cust_nm.value.length == 0 ){
		alert("담당자 성명을 입력하셔야 합니다.");
		obj.cust_nm.focus();
		return false;
 	}

 	if(obj.duty_nm.value.length == 0 ){
		alert("직위를 입력하셔야 합니다.");
		obj.duty_nm.focus();
		return false;
 	}
 	
 	if(obj.cust_ogn_nm.value.length == 0 ){
		alert("부서를 입력하셔야 합니다.");
		obj.cust_ogn_nm.focus();
		return false;
 	} 	 
  
  	/*
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
	
	if (obj.email4.value == ""){
		alert("E-Mail 주소를 입력하세요.");
		obj.email4.focus();
		return false;
	}
	
	if (obj.email5.value == ""){
		alert("E-Mail 주소를 입력하세요.");
		obj.email5.focus();
		return false;
	}

//	if( obj.valid_id.value.length == 0 || (obj.valid_id.value != obj.alias_id.value) ){
//		alert("ID 중복 확인을 거치셔야 합니다.");
//		obj.alias_id.focus();
//		return false;
//  	}
//  	
//  	if(obj.passwd.value.length < 6 ){
//		alert("비밀No.는 6자 이상 입력하셔야 합니다.");
//		obj.passwd.value = "";
//		obj.passwd2.value = "";
//		obj.passwd.focus();
//		return false;
// 	} 

  /* 
	if( english_su(obj.passwd.value)==false ){
		alert("비밀번호는 특수문자 없이 숫자와 문자의 조합으로 6자리 이상 입력하여 주십시오.");
		obj.passwd.value = "";
		obj.passwd2.value = "";
		obj.passwd.focus();
		return false;
	}
 */

//  	if (obj.passwd.value != obj.passwd2.value ){
//		alert("비밀No.와 비밀No.(확인)가 다릅니다.");
//		obj.passwd.value = "";
//		obj.passwd2.value = "";
//		obj.passwd.focus();
//   		return false;
//	}

	//shpark 2011-06-23 연속성 , 연속 숫자 두개 확인 

//		var passwd_check = obj.passwd.value;
//		var i;
//
//		for(i=0; i<passwd_check.length;i++){
//		
//		//동일 3번 체크 
//		 var before = passwd_check.substring(i,i-1);
//		 var now = passwd_check.substring(i,i+1);
//		 var after = passwd_check.substring(i+1,i+2);
//		
//		if( before == "" || now =="" || after == "" ){
//		}else{
//			if(before == now && now == after && after == before){
//			alert("연속된 동일한 숫자 3번 입력 되었습니다.");
//			obj.passwd.value = "";
//			obj.passwd2.value = "";
//			obj.passwd.focus();
//			return false;
//			}
//		}

//		//연속된 3숫자 입력 
//
//		chr_pass_0 = passwd_check.charAt(i);
//		chr_pass_1 = passwd_check.charAt(i+1);
//		chr_pass_2 = passwd_check.charAt(i+2);
//
//		if( chr_pass_0 == "" || chr_pass_2 =="" || chr_pass_2 == "" ){
//		}else{
//
//			suncha1 = chr_pass_0.charCodeAt(0);
//			suncha2 = chr_pass_1.charCodeAt(0)-1;
//			suncha3 = chr_pass_2.charCodeAt(0)-2;
//
//			r_suncha1 = chr_pass_0.charCodeAt(0)-2;
//			r_suncha2 = chr_pass_1.charCodeAt(0)-1;
//			r_suncha3 = chr_pass_2.charCodeAt(0);
//			
//			if(suncha1 == suncha2 && suncha2 == suncha3 && suncha1 == suncha3){
//			alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
//			obj.passwd.value = "";
//			obj.passwd2.value = "";
//			obj.passwd.focus();
//			return false;
//			}
//
//			if(r_suncha1 == r_suncha2 && r_suncha2 == r_suncha3 && r_suncha1 == r_suncha3){
//			alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
//			obj.passwd.value = "";
//			obj.passwd2.value = "";
//			obj.passwd.focus();
//			return false;
//			}
//		}
//		}
 
//	if (obj.alias_id.value==obj.passwd.value ){
//		alert("아이디와 비밀번호가 동일하시면 안됩니다.");
//		obj.passwd.value = "";
//		obj.passwd2.value = "";
//		obj.passwd.focus();
//   		return false;
//	}
  	
  	//if((obj.send_addr3.value == false) || obj.send_etc_sno.value == false){
  	if((obj.send_addr3.value == false)){
		alert("배송지 주소를 입력하셔야 합니다.");
		obj.send_addr3.focus();
		//return false;
 	} 


	// - 주민번호 빈칸여부
	if(obj.juno1.value==""){
		alert("주민등록번호를 반드시 기입하셔야 합니다.");
		obj.juno1.focus();
		return false;
	}

	if(obj.juno2.value==""){
		alert("주민등록번호를 반드시 기입하셔야 합니다.");
		obj.juno2.focus();
		return false;
	}

	if(obj.ipin_key.value == "" && obj.mcom_key.value == "" ){

		// 3- 주민등록번호 무결성여부
		if (! chk_jumin_number(obj.juno1.value, obj.juno2.value))
		{
				alert("주민등록번호에 이상이 있습니다.");
				obj.juno1.value="";
				obj.juno2.value="";
				obj.juno1.focus();
			return false;
		}
	}

    /**************************************************
     *비밀번호 연속성 검사 sskim 20100719 *************
     **************************************************/
   /*
	var SamePass_0 = 0; //동일문자 카운트
    var SamePass_1 = 0; //연속성(+) 카운드
    var SamePass_2 = 0; //연속성(-) 카운드
    
    var chr_pass_0;
    var chr_pass_1;

    var chr_pass_2;

    
    for(var i=0; i < obj.passwd.value.length; i++)
    {
        chr_pass_0 = obj.passwd.value.charAt(i);
        chr_pass_1 = obj.passwd.value.charAt(i+1);
        
        //동일문자 카운트
        if(chr_pass_0 == chr_pass_1)
        {
            SamePass_0 = SamePass_0 + 1
        }
        
       
        chr_pass_2 = obj.passwd.value.charAt(i+2);
        //연속성(+) 카운드

        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1)
        {
            SamePass_1 = SamePass_1 + 1
        }
        
        //연속성(-) 카운드
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1)
        {
            SamePass_2 = SamePass_2 + 1
        }
    }
    if(SamePass_0 > 2)
    {
        alert("동일문자를 3번 이상 사용할 수 없습니다.");
        return false;
    }
   
    if(SamePass_1 > 1 || SamePass_2 > 1 )
    {
        alert("연속된 문자열(123 또는 321, abc, cba 등)을\n 3자 이상 사용 할 수 없습니다.");
        return false;
    }
*/
    /**************************************************
     *비밀번호 연속성 검사 끝 sskim 20100719 *************
     **************************************************/
	
	
	return true;
}


function JValidCheck1(){  
	var obj = document.fm;
	
	if (obj.cust_nm1.value=="") {
		alert("세금계산서 이름을 입력하세요");
		obj.cust_nm1.focus();
		return false;
	}
	
	if (obj.cust_ogn_nm1.value=="") {
		alert("세금계산서 부서를 입력하세요");
		obj.cust_ogn_nm1.focus();
		return false;
	}
	
	if ( obj.mcom_num2_1.value.length < 3 ){
		alert("세금계산서 휴대폰번호 두번째는 3자리이상 입력하셔야 합니다.");
		obj.mcom_num2_1.focus();
		return false;
	}	
 
	if ( obj.mcom_num3_1.value.length < 4 ){
		alert("세금계산서 휴대폰번호 세번째는 4자리 이상  입력하셔야 합니다.");
		obj.mcom_num3_1.focus();
		return false;
	}		
	
	if (obj.email4_1.value=="") {
		alert("세금계산서 E-mail을 입력하세요");
		obj.email4_1.focus();
		return false;
	}
	
	if (obj.email5_1.value=="") {
		alert("세금계산서 E-mail을 입력하세요");
		obj.email5_1.focus();
		return false;
	}

	/*if(obj.alias_id.value==obj.rec_alias_id_.value){
		alert("아이디와 추천인 아이디가 동일합니다. 추천인 아이디를 수정하시기 바랍니다.");
		obj.rec_alias_id_.focus();
		return false;
	}	 */
	
	return true;
}


// 사업자등록번호 중복 체크를 합니다.
function f_busi_double_check(){
  if(ValidCheck02()==false){
  	return;
  }

  fm.action="/speedmall/join/join_company_busi_chk_persist.jsp";
  fm.target="tmpFrame";
  fm.submit();
}
   

//입력오류를 검증합니다.
function ValidCheck02(){
	var obj = document.fm;
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


function check_mail(val){
  if(val == "self"){
    document.fm.email4.style.display = '';
    document.fm.email4.focus();
  }else{
    document.fm.email4.style.display = 'none';
  }
}
function check_cust_mail(val){
  if(val == "self"){
    document.fm.cust_email4.style.display = '';
    document.fm.cust_email4.focus();
  }else{
    document.fm.cust_email4.style.display = 'none';
  }
}

// 주소찾기

function addr_sear(){
	var acc = document.fm;
	var win2 = window.open("/small/pop/pop_post2.jsp?flag=1",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	
function f_addr_ad_cmem(a) {
	var call_str = "/small/pop/addr.jsp?flag="+a+"&page=n_mem_in";
	var win = window.open(call_str,'pop_post','width =435 height=425,resizable=no,scrollbars=no');
		win.focus();
}


// 주소찾기
function addr_sears(){
	var acc = document.fm;
	var win2 = window.open("/small/pop/pop_post2.jsp?flag=2",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	

// 배송지 주소
function same_address(){
	fm.same_addr.checked = false;
	if(fm.addr1.value == false || fm.etc_sno.value == false){
		fm.addr1.focus();
		alert("주소를 입력해주세요!");
		return;
	}else{
		fm.send_addr1.value = fm.addr1.value;
		fm.send_addr2.value = fm.addr2.value;
		fm.send_addr3.value = fm.addr3.value;
		fm.send_etc_sno.value = fm.etc_sno.value;		   
		fm.juso2_c.value = fm.juso2.value;
		fm.same_addr.checked = true;
	}
}

// 배송지 주소
function same_address2(){
	fm.same_addrs.checked = false;
	if(fm.addr1.value == false){
		fm.addr1.focus();
		alert("주소를 입력해주세요!");
		return;
	}else{
		fm.send_addr1.value = fm.addr1.value;
		fm.send_addr2.value = fm.addr2.value;
		fm.send_addr3.value = fm.addr3.value;
		//alert("addr3--->"+fm.addr3.value);			
		fm.juso2_c.value = fm.juso2.value;
		fm.same_addrs.checked = true;
	}
}


function same_tax_info(){
	/*
	fm.same_tax.checked = false;
	if(fm.cust_nm.value == false){
		fm.cust_nm.focus();
		alert("담당자명을 입력하세요.");
		return;
	}else{
		fm.cust_nm1.value = fm.cust_nm.value;
		fm.mcom_num1_1.value = fm.mcom_num1.value;
		fm.mcom_num2_1.value = fm.mcom_num2.value;
		fm.mcom_num3_1.value = fm.mcom_num3.value;
		fm.email4_1.value = fm.email4.value;
		fm.email5_1.value = fm.email5.value;
		fm.cust_ogn_nm1.value = fm.cust_ogn_nm.value;
				
		fm.same_tax.checked = true;
	}
	*/

		fm.cust_nm1.value = fm.cust_nm.value;
		fm.mcom_num1_1.value = fm.mcom_num1.value;
		fm.mcom_num2_1.value = fm.mcom_num2.value;
		fm.mcom_num3_1.value = fm.mcom_num3.value;
		fm.email4_1.value = fm.email4.value;
		fm.email5_1.value = fm.email5.value;
		fm.cust_ogn_nm1.value = fm.cust_ogn_nm.value;
	
}


function ju_addr_sears() {
	var frm=document.fm;
	var call_str = "/small/pop/pop_post.jsp";
	var win = window.open(call_str,'pop_post','width =420 height=320 top=200 left=200,scrollbars=no');
					//'top=150,left=280,width=435,height=325,resizable=no,scrollbars=no');
		win.focus();
	}

function jumin_check(){
	var frm = document.fm;
	
	// - 주민번호 빈칸여부
	if(frm.juno1.value==""){
		alert("주민등록번호를 반드시 기입하셔야 합니다.");
		frm.juno1.focus();
		return;
	}

	if(frm.juno2.value==""){
		alert("주민등록번호를 반드시 기입하셔야 합니다.");
		frm.juno2.focus();
		return;
	}

	if(obj.ipin_key.value == "" ){
	// 주민등록번호 무결성여부
	if (! chk_jumin_number(frm.juno1.value, frm.juno2.value))
	{
			alert("주민등록번호에 이상이 있습니다.");
			frm.juno1.value="";
			frm.juno2.value="";
			frm.juno1.focus();
		return;
	}
	}
	
	 fm.action="/small/join/jumin_numbercheck.jsp";
	fm.submit();
}

//메일 관련 선택 하면 바로 입력 

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

function setEmail2(obj){
 var emailVal = obj.value;
 email5_1 = document.fm.email5_1
 	if(emailVal == "-1" ){
 	 email5_1.readOnly = false;
  	 email5_1.value = "";
  	 document.getElementById('email5_1').style.display='block'
 	}else if(emailVal == ""){ 	
	email5_1.readOnly = false;
  	email5_1.value = "";
 	document.getElementById('email5_1').style.display='none'
 	}else{
 	 email5_1.readOnly = true;
  		if(emailVal != "-1"){
  		 email5_1.value = emailVal;  		
		document.getElementById('email5_1').style.display='none'
					
  							}
 	}
}

//회원가입(개인, 회사) 전체 동의 체크 
function joinAllAgree(vComponentId) {
	
	if ($('#'+vComponentId).prop('checked')==true) {
		$('#agreement').prop('checked', true);
		$('#agreement1').prop('checked', true);
		$('#agreement3').prop('checked', true);
    }else{
	    $('#agreement').prop('checked', false);
	    $('#agreement1').prop('checked', false);
	    $('#agreement3').prop('checked', false);
    }

}






