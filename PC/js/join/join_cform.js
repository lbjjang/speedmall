
// �����ؾߵ�
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

  /*if(f_joinClick()==false){ // ���԰��
		alert("���԰�θ� �����Ͽ� �ֽñ� �ٶ��ϴ�. \n\n��Ÿ �� ������ ��� ��Ÿ���� �� ������ �ۼ��� �ֽñ� �ٶ��ϴ�.");
  }else if(f_businessClick()==false){ // ��������
		alert("������ �����Ͽ� �ֽñ� �ٶ��ϴ�. \n\n��Ÿ�� ��� ��Ÿ������ �ۼ��� �ֽñ� �ٶ��ϴ�.");
  }else if(f_intercategory()==false){ // ����ī�װ�����
		alert("���� ī�װ��� �����Ͽ� �ֽñ� �ٶ��ϴ�. ");
  }else{
*/
	
	ascii_trans(document.fm.elements["passwd"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs
	ascii_trans(document.fm.elements["passwd2"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs
	 

	  fm.action="/small/join/business_member_join_process.jsp";
	  fm.submit();
 // }
}


// ID �ߺ�üũ
function Id_chk(){
	var acc = document.fm;
	var alias = acc.alias_id.value;
	var chkVls = /^[a-z\d]{6,16}$/i;
	
	if ( alias==""){
		alert("ID�� �Է��� �ּ���.");
		acc.alias_id.focus();
		return;
	}
	
	//alert(chkVls.test(alias));
	
	if(!chkVls.test(alias)){ 
   		alert("ID�׸��� ������ �ùٸ��� �ʽ��ϴ�."); 
   		acc.alias_id.focus();
		return;
  	}
	var win = window.open("./pop_id.jsp?alias_id="+alias,'id_checkFrm2','width =400 height=300 top=150 left=150','scrollbar=no');
	win.focus();
} 


// ����尡�Խ�û�� �ʵ�Ȯ��
function JValidCheck(){  
	var obj = document.fm;
	
	var join_proc;
	
	if( obj.alias_id.value.length < 6 ){
		alert("��ûID�� 6�� �̻� �Է��ϼž� �մϴ�.");
		obj.alias_id.focus();
		return false;
  	}
  
	if( special_word(obj.alias_id.value)==false ){
		alert("���̵�� Ư������ ���� ����/ ���ڷ� 6�ڸ� �̻� �Է��Ͽ� �ֽʽÿ�.");
		obj.alias_id.focus();
		return false;
	}
	
	if( obj.valid_id.value.length == 0 || (obj.valid_id.value != obj.alias_id.value) ){
		alert("ID �ߺ� Ȯ���� ��ġ�ž� �մϴ�.");
		obj.alias_id.focus();
		return false;
  	}
 
	if(obj.passwd.value.length < 8 ){ 
		alert("���No.�� 8�� �̻� �Է��ϼž� �մϴ�.");
		obj.passwd.value = "";
//		obj.passwd2.value = "";
		obj.passwd.focus();
		return false;
 
 	} 
  
	if( english_su(obj.passwd.value)==false ){
		alert("��й�ȣ�� Ư������ ���� ���ڿ� ������ �������� 6�ڸ� �̻� �Է��Ͽ� �ֽʽÿ�.");
		obj.passwd.value = "";
//		obj.passwd2.value = "";
		obj.passwd.focus();
		return false;
	}
 
  	if (obj.passwd.value != obj.passwd2.value ){
		alert("���No.�� ���No.(Ȯ��)�� �ٸ��ϴ�.");
//		obj.passwd.value = "";
		obj.passwd2.value = "";
		obj.passwd2.focus();
   		return false;
	}


	//shpark 2011-06-23 ���Ӽ� , ���� ���� �ΰ� Ȯ�� 

		var passwd_check = obj.passwd.value;
		var i;

		for(i=0; i<passwd_check.length;i++){
		
		//���� 3�� üũ 
		 var before = passwd_check.substring(i,i-1);
		 var now = passwd_check.substring(i,i+1);
		 var after = passwd_check.substring(i+1,i+2);
		
		if( before == "" || now =="" || after == "" ){
		}else{
			if(before == now && now == after && after == before){
			alert("���ӵ� ������ ���� 3�� �Է� �Ǿ����ϴ�.");
			obj.passwd.value = "";
			obj.passwd2.value = "";
			obj.passwd.focus();
			return false;
			}
		}

		//���ӵ� 3���� �Է� 

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
			alert("���ӵ� ���ڿ�(123 �Ǵ� 321, abc, cba ��)��\n 3�� �̻� ��� �� �� �����ϴ�.");
			obj.passwd.value = "";
			obj.passwd2.value = "";
			obj.passwd.focus();
			return false;
			}

			if(r_suncha1 == r_suncha2 && r_suncha2 == r_suncha3 && r_suncha1 == r_suncha3){
			alert("���ӵ� ���ڿ�(123 �Ǵ� 321, abc, cba ��)��\n 3�� �̻� ��� �� �� �����ϴ�.");
			obj.passwd.value = "";
			obj.passwd2.value = "";
			obj.passwd.focus();
			return false;
			}
		}
		}


 
	if (obj.alias_id.value==obj.passwd.value ){
		alert("���̵�� ��й�ȣ�� �����Ͻø� �ȵ˴ϴ�.");
		obj.passwd.value = "";
		obj.passwd2.value = "";
		obj.passwd.focus();
   		return false;
	}
/*
	if(obj.ceo_nm.value.length == 0 ){
		alert("��ǥ�ڸ��� �Է��ϼž� �մϴ�.");
		obj.ceo_nm.focus();
		return false;
 	} 
 	if ( obj.busi_ty.value.length == 0 ){
		alert("���¸� �Է��ϼž� �մϴ�.");
		obj.busi_ty.focus();
		return false;
	}
	
	if ( obj.kn.value.length == 0 ){
		alert("������ �Է��ϼž� �մϴ�.");
		obj.kn.focus();
		return false;
	}
 	
 	if((obj.addr3.value == false) || obj.etc_sno.value == false){
		alert("�ּҸ� �Է��ϼž� �մϴ�.");
		obj.etc_sno.focus();
		return false;
 	} 
 	*/

	if ( obj.cop_nm.value.length == 0 ){
		alert("������� �Է��ϼž� �մϴ�. ");
		obj.cop_nm.focus();
		return false;
	}


	if ( obj.busi_ty.value.length == 0 ){
		alert("���¸� �Է��ϼž� �մϴ�.");
		obj.busi_ty.focus();
		return false;
	}
	
	if ( obj.kn.value.length == 0 ){
		alert("������ �Է��ϼž� �մϴ�.");
		obj.kn.focus();
		return false;
	}
 	

	obj.obun_ymd.value=RemoveHypen(obj.obun_ymd.value);
	obj.obun_ymd.value=obj.obun_ymd.value.replace(/(^\s*)|(\s*$)/g,"");

	if (obj.obun_ymd.value.length != 8) {
		alert("â��������� 8�ڸ��� �ƴϰų�, �������� ���ԵǾ����ϴ�.");
		obj.obun_ymd.focus();
		return false;
	}

	var ymds= obj.obun_ymd.value;
	var years= ymds.substring(0,4);
	var months= ymds.substring(4,6);
	var days= ymds.substring(6,8);

	if(years < 1900 || years >2999){
		
		alert("â������� ��¥������ ���� �ʽ��ϴ�.");
		obj.obun_ymd.focus();
		return false;
	}

	if(months < 1 || months > 12){
		
		alert("â������� ��¥������ ���� �ʽ��ϴ�.");
		obj.obun_ymd.focus();
		return false;
	}

	if(days < 1 || days > 31){
		
		alert("â������� ��¥������ ���� �ʽ��ϴ�.");
		obj.obun_ymd.focus();
		return false;
	}


	
	if (obj.buy_size.value == '000') {
		alert("���űԸ� ������ �ּ���");
		obj.buy_size.focus();
		return false;
	}

	if (obj.empl_num.value.length == 0) {
		alert("�������� �Է��� �ּ���");
		obj.empl_num.focus();
		return false;
	}

 	if(obj.cust_nm.value.length == 0 ){
		alert("����� ������ �Է��ϼž� �մϴ�.");
		obj.cust_nm.focus();
		return false;
 	}

 	if(obj.duty_nm.value.length == 0 ){
		alert("������ �Է��ϼž� �մϴ�.");
		obj.duty_nm.focus();
		return false;
 	}
 	
 	if(obj.cust_ogn_nm.value.length == 0 ){
		alert("�μ��� �Է��ϼž� �մϴ�.");
		obj.cust_ogn_nm.focus();
		return false;
 	} 	 
  
  	/*
	if( obj.tel_num1.value.length == 0 ){
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
	
	if ( obj.fax_num1.value.length == 0 ){
		alert("�ѽ���ȣ ù��°�� �Է��ϼž� �մϴ�.");
		obj.fax_num1.focus();
		return false;
	}	
 
	if ( obj.fax_num2.value.length < 3 ){
		alert("�ѽ���ȣ �ι�°�� 3�ڸ��̻� �Է��ϼž� �մϴ�.");
		obj.fax_num2.focus();
		return false;
	}	
 
	if ( obj.fax_num3.value.length < 4 ){
		alert("�ѽ���ȣ ����°�� 4�ڸ� �̻�  �Է��ϼž� �մϴ�.");
		obj.fax_num3.focus();
		return false;
	}	
	*/
	
	if ( obj.mcom_num1.value.length == 0 ){
		alert("�޴�����ȣ ù��°�� �Է��ϼž� �մϴ�.");
		obj.mcom_num1.focus();
		return false;
	}	
 
	if ( obj.mcom_num2.value.length < 3 ){
		alert("�޴�����ȣ �ι�°�� 3�ڸ��̻� �Է��ϼž� �մϴ�.");
		obj.mcom_num2.focus();
		return false;
	}	
 
	if ( obj.mcom_num3.value.length < 4 ){
		alert("�޴�����ȣ ����°�� 4�ڸ� �̻�  �Է��ϼž� �մϴ�.");
		obj.mcom_num3.focus();
		return false;
	}		
	
	if (obj.email4.value == ""){
		alert("E-Mail �ּҸ� �Է��ϼ���.");
		obj.email4.focus();
		return false;
	}
	
	if (obj.email5.value == ""){
		alert("E-Mail �ּҸ� �Է��ϼ���.");
		obj.email5.focus();
		return false;
	}

//	if( obj.valid_id.value.length == 0 || (obj.valid_id.value != obj.alias_id.value) ){
//		alert("ID �ߺ� Ȯ���� ��ġ�ž� �մϴ�.");
//		obj.alias_id.focus();
//		return false;
//  	}
//  	
//  	if(obj.passwd.value.length < 6 ){
//		alert("���No.�� 6�� �̻� �Է��ϼž� �մϴ�.");
//		obj.passwd.value = "";
//		obj.passwd2.value = "";
//		obj.passwd.focus();
//		return false;
// 	} 

  /* 
	if( english_su(obj.passwd.value)==false ){
		alert("��й�ȣ�� Ư������ ���� ���ڿ� ������ �������� 6�ڸ� �̻� �Է��Ͽ� �ֽʽÿ�.");
		obj.passwd.value = "";
		obj.passwd2.value = "";
		obj.passwd.focus();
		return false;
	}
 */

//  	if (obj.passwd.value != obj.passwd2.value ){
//		alert("���No.�� ���No.(Ȯ��)�� �ٸ��ϴ�.");
//		obj.passwd.value = "";
//		obj.passwd2.value = "";
//		obj.passwd.focus();
//   		return false;
//	}

	//shpark 2011-06-23 ���Ӽ� , ���� ���� �ΰ� Ȯ�� 

//		var passwd_check = obj.passwd.value;
//		var i;
//
//		for(i=0; i<passwd_check.length;i++){
//		
//		//���� 3�� üũ 
//		 var before = passwd_check.substring(i,i-1);
//		 var now = passwd_check.substring(i,i+1);
//		 var after = passwd_check.substring(i+1,i+2);
//		
//		if( before == "" || now =="" || after == "" ){
//		}else{
//			if(before == now && now == after && after == before){
//			alert("���ӵ� ������ ���� 3�� �Է� �Ǿ����ϴ�.");
//			obj.passwd.value = "";
//			obj.passwd2.value = "";
//			obj.passwd.focus();
//			return false;
//			}
//		}

//		//���ӵ� 3���� �Է� 
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
//			alert("���ӵ� ���ڿ�(123 �Ǵ� 321, abc, cba ��)��\n 3�� �̻� ��� �� �� �����ϴ�.");
//			obj.passwd.value = "";
//			obj.passwd2.value = "";
//			obj.passwd.focus();
//			return false;
//			}
//
//			if(r_suncha1 == r_suncha2 && r_suncha2 == r_suncha3 && r_suncha1 == r_suncha3){
//			alert("���ӵ� ���ڿ�(123 �Ǵ� 321, abc, cba ��)��\n 3�� �̻� ��� �� �� �����ϴ�.");
//			obj.passwd.value = "";
//			obj.passwd2.value = "";
//			obj.passwd.focus();
//			return false;
//			}
//		}
//		}
 
//	if (obj.alias_id.value==obj.passwd.value ){
//		alert("���̵�� ��й�ȣ�� �����Ͻø� �ȵ˴ϴ�.");
//		obj.passwd.value = "";
//		obj.passwd2.value = "";
//		obj.passwd.focus();
//   		return false;
//	}
  	
  	//if((obj.send_addr3.value == false) || obj.send_etc_sno.value == false){
  	if((obj.send_addr3.value == false)){
		alert("����� �ּҸ� �Է��ϼž� �մϴ�.");
		obj.send_addr3.focus();
		//return false;
 	} 


	// - �ֹι�ȣ ��ĭ����
	if(obj.juno1.value==""){
		alert("�ֹε�Ϲ�ȣ�� �ݵ�� �����ϼž� �մϴ�.");
		obj.juno1.focus();
		return false;
	}

	if(obj.juno2.value==""){
		alert("�ֹε�Ϲ�ȣ�� �ݵ�� �����ϼž� �մϴ�.");
		obj.juno2.focus();
		return false;
	}

	if(obj.ipin_key.value == "" && obj.mcom_key.value == "" ){

		// 3- �ֹε�Ϲ�ȣ ���Ἲ����
		if (! chk_jumin_number(obj.juno1.value, obj.juno2.value))
		{
				alert("�ֹε�Ϲ�ȣ�� �̻��� �ֽ��ϴ�.");
				obj.juno1.value="";
				obj.juno2.value="";
				obj.juno1.focus();
			return false;
		}
	}

    /**************************************************
     *��й�ȣ ���Ӽ� �˻� sskim 20100719 *************
     **************************************************/
   /*
	var SamePass_0 = 0; //���Ϲ��� ī��Ʈ
    var SamePass_1 = 0; //���Ӽ�(+) ī���
    var SamePass_2 = 0; //���Ӽ�(-) ī���
    
    var chr_pass_0;
    var chr_pass_1;

    var chr_pass_2;

    
    for(var i=0; i < obj.passwd.value.length; i++)
    {
        chr_pass_0 = obj.passwd.value.charAt(i);
        chr_pass_1 = obj.passwd.value.charAt(i+1);
        
        //���Ϲ��� ī��Ʈ
        if(chr_pass_0 == chr_pass_1)
        {
            SamePass_0 = SamePass_0 + 1
        }
        
       
        chr_pass_2 = obj.passwd.value.charAt(i+2);
        //���Ӽ�(+) ī���

        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1)
        {
            SamePass_1 = SamePass_1 + 1
        }
        
        //���Ӽ�(-) ī���
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1)
        {
            SamePass_2 = SamePass_2 + 1
        }
    }
    if(SamePass_0 > 2)
    {
        alert("���Ϲ��ڸ� 3�� �̻� ����� �� �����ϴ�.");
        return false;
    }
   
    if(SamePass_1 > 1 || SamePass_2 > 1 )
    {
        alert("���ӵ� ���ڿ�(123 �Ǵ� 321, abc, cba ��)��\n 3�� �̻� ��� �� �� �����ϴ�.");
        return false;
    }
*/
    /**************************************************
     *��й�ȣ ���Ӽ� �˻� �� sskim 20100719 *************
     **************************************************/
	
	
	return true;
}


function JValidCheck1(){  
	var obj = document.fm;
	
	if (obj.cust_nm1.value=="") {
		alert("���ݰ�꼭 �̸��� �Է��ϼ���");
		obj.cust_nm1.focus();
		return false;
	}
	
	if (obj.cust_ogn_nm1.value=="") {
		alert("���ݰ�꼭 �μ��� �Է��ϼ���");
		obj.cust_ogn_nm1.focus();
		return false;
	}
	
	if ( obj.mcom_num2_1.value.length < 3 ){
		alert("���ݰ�꼭 �޴�����ȣ �ι�°�� 3�ڸ��̻� �Է��ϼž� �մϴ�.");
		obj.mcom_num2_1.focus();
		return false;
	}	
 
	if ( obj.mcom_num3_1.value.length < 4 ){
		alert("���ݰ�꼭 �޴�����ȣ ����°�� 4�ڸ� �̻�  �Է��ϼž� �մϴ�.");
		obj.mcom_num3_1.focus();
		return false;
	}		
	
	if (obj.email4_1.value=="") {
		alert("���ݰ�꼭 E-mail�� �Է��ϼ���");
		obj.email4_1.focus();
		return false;
	}
	
	if (obj.email5_1.value=="") {
		alert("���ݰ�꼭 E-mail�� �Է��ϼ���");
		obj.email5_1.focus();
		return false;
	}

	/*if(obj.alias_id.value==obj.rec_alias_id_.value){
		alert("���̵�� ��õ�� ���̵� �����մϴ�. ��õ�� ���̵� �����Ͻñ� �ٶ��ϴ�.");
		obj.rec_alias_id_.focus();
		return false;
	}	 */
	
	return true;
}


// ����ڵ�Ϲ�ȣ �ߺ� üũ�� �մϴ�.
function f_busi_double_check(){
  if(ValidCheck02()==false){
  	return;
  }

  fm.action="/speedmall/join/join_company_busi_chk_persist.jsp";
  fm.target="tmpFrame";
  fm.submit();
}
   

//�Է¿����� �����մϴ�.
function ValidCheck02(){
	var obj = document.fm;
	if(obj.busi_man_num1.value.length < 3){
    alert("ù��° ����ڵ�Ϲ�ȣ�� �������� �ʾҽ��ϴ�. 3�ڸ����� �Է� �ϼž� �մϴ�.");
	  obj.busi_man_num1.focus();
    return false; 
  }
	if(obj.busi_man_num2.value.length < 2){
    alert("�ι�° ����ڵ�Ϲ�ȣ�� �������� �ʾҽ��ϴ�. 2�ڸ����� �Է� �ϼž� �մϴ�.");
	  obj.busi_man_num2.focus();
    return false; 
  }
	if(obj.busi_man_num3.value.length < 3){
    alert("����° ����ڵ�Ϲ�ȣ�� �������� �ʾҽ��ϴ�. 5�ڸ����� �Է� �ϼž� �մϴ�.");
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

// �ּ�ã��

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


// �ּ�ã��
function addr_sears(){
	var acc = document.fm;
	var win2 = window.open("/small/pop/pop_post2.jsp?flag=2",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	

// ����� �ּ�
function same_address(){
	fm.same_addr.checked = false;
	if(fm.addr1.value == false || fm.etc_sno.value == false){
		fm.addr1.focus();
		alert("�ּҸ� �Է����ּ���!");
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

// ����� �ּ�
function same_address2(){
	fm.same_addrs.checked = false;
	if(fm.addr1.value == false){
		fm.addr1.focus();
		alert("�ּҸ� �Է����ּ���!");
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
		alert("����ڸ��� �Է��ϼ���.");
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
	
	// - �ֹι�ȣ ��ĭ����
	if(frm.juno1.value==""){
		alert("�ֹε�Ϲ�ȣ�� �ݵ�� �����ϼž� �մϴ�.");
		frm.juno1.focus();
		return;
	}

	if(frm.juno2.value==""){
		alert("�ֹε�Ϲ�ȣ�� �ݵ�� �����ϼž� �մϴ�.");
		frm.juno2.focus();
		return;
	}

	if(obj.ipin_key.value == "" ){
	// �ֹε�Ϲ�ȣ ���Ἲ����
	if (! chk_jumin_number(frm.juno1.value, frm.juno2.value))
	{
			alert("�ֹε�Ϲ�ȣ�� �̻��� �ֽ��ϴ�.");
			frm.juno1.value="";
			frm.juno2.value="";
			frm.juno1.focus();
		return;
	}
	}
	
	 fm.action="/small/join/jumin_numbercheck.jsp";
	fm.submit();
}

//���� ���� ���� �ϸ� �ٷ� �Է� 

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

//ȸ������(����, ȸ��) ��ü ���� üũ 
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






