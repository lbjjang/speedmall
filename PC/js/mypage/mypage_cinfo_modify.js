  /*
   * 2007.12.04 - ValidCheck2���� 
   * ( addr3 --> send_addr3)�� ���� - jklee
   * 2010.07.19 ���ӵ� ���� / ������ ���ڷ��� �н����� ���� �Ұ� sskim
   */ 
  
// �����ؾߵ�
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
		alert("���� ��й�ȣ�� �Է��ϼ���!");
		upPwdFrm.old_pwd.focus();
		return;
	}
	
	if(upPwdFrm.new_pwd.value == false){
		alert("���ο� ��й�ȣ�� �Է��ϼ���!");
		upPwdFrm.new_pwd.focus();
		return;
	}
	
	if(upPwdFrm.new_pwd.value.length < 6 ){
		alert("���No.�� 6�� �̻� �Է��ϼž� �մϴ�.");
		upPwdFrm.new_pwd.value = "";
		upPwdFrm.new_pwd2.value = "";
		upPwdFrm.new_pwd.focus();
		return;
 	} 

	if( english_su(upPwdFrm.new_pwd.value)==false ){
		alert("��й�ȣ�� Ư������ ���� ���ڿ� ������ �������� 6�ڸ� �̻� �Է��Ͽ� �ֽʽÿ�.");
		upPwdFrm.new_pwd.value = "";
		upPwdFrm.new_pwd2.value = "";
		upPwdFrm.new_pwd.focus();
		return;
	}

	if(upPwdFrm.new_pwd.value != upPwdFrm.new_pwd2.value){
		alert("���No.�� ���No.(Ȯ��)�� �ٸ��ϴ�.");
		upPwdFrm.new_pwd2.focus();
		return;
	}

	if (upPwdFrm.alias_id.value==upPwdFrm.new_pwd.value ){
		alert("���̵�� ��й�ȣ�� �����Ͻø� �ȵ˴ϴ�.");
		upPwdFrm.new_pwd.value = "";
		upPwdFrm.new_pwd2.value = "";
		upPwdFrm.new_pwd.focus();
   		return;
	}
	
	/****
	 * ��й�ȣ ���Ӽ� �˻� sskim 20100719
	 */
	
	var SamePass_0 = 0; //���Ϲ��� ī��Ʈ
    var SamePass_1 = 0; //���Ӽ�(+) ī���
    var SamePass_2 = 0; //���Ӽ�(-) ī���
    
    var chr_pass_0;
    var chr_pass_1;
    
    for(var i=0; i < upPwdFrm.new_pwd.value.length; i++)
    {
        chr_pass_0 = upPwdFrm.new_pwd.value.charAt(i);
        chr_pass_1 = upPwdFrm.new_pwd.value.charAt(i+1);
        
        //���Ϲ��� ī��Ʈ
        if(chr_pass_0 == chr_pass_1)
        {
            SamePass_0 = SamePass_0 + 1
        }
       
        //���Ӽ�(+) ī���
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1)
        {
            SamePass_1 = SamePass_1 + 1
        }
        
        //���Ӽ�(-) ī���
        if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1)
        {
            SamePass_2 = SamePass_2 + 1
        }
    }
    
    if(SamePass_0 > 1)
    {
        alert("���Ϲ��ڸ� 3�� �̻� ����� �� �����ϴ�.");
        return;
    }
   
    if(SamePass_1 > 1 || SamePass_2 > 1 )
    {
        alert("���ӵ� ���ڿ�(123 �Ǵ� 321, abc, cba ��)��\n3�� �̻� ��� �� �� �����ϴ�.");
        return;
    }
    
	/****
	 * ��й�ȣ ���Ӽ� �˻� sskim 20100719 ��
	 */
    
	if(confirm("��й�ȣ�� ���� �Ͻðڽ��ϱ�?")){
		ascii_trans(document.upPwdFrm.elements["old_pwd"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs
		ascii_trans(document.upPwdFrm.elements["new_pwd"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs
		ascii_trans(document.upPwdFrm.elements["new_pwd2"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs
		
		upPwdFrm.myUpFlag.value = "1";
		upPwdFrm.action = "/small/mypage/mypage_cinfo_modify_persist.jsp";
		//upPwdFrm.target = "tmpFrame";
		upPwdFrm.submit();
	}
}

// ��й�ȣ�� ���� �մϴ�.
function Save(){
  if(ValidCheck03()==false){
    return;
  }
    if(!confirm("��������� ���� �Ͻðڽ��ϱ�?")){
		return;
	}
	ascii_trans(document.form1.elements["checkpasswd"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs


  form1.myUpFlag.value = "2";
  form1.action="/small/mypage/mypage_cinfo_modify_persist.jsp";
  //form1.target="tmpFrame";
  form1.submit();
}


function Save3(){

	if(ValidCheck4()==false){
    return;
  }


    if(!confirm("���ݰ�꼭 ������ ���� �Ͻðڽ��ϱ�?")){
		return;
	}
	ascii_trans(document.form1.elements["checkpasswd"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs

  form1.myUpFlag.value = "3";
 

  form1.action="/small/mypage/mypage_cinfo_modify_persist.jsp";
  //form1.target="tmpFrame";
  form1.submit();

}


function ValidCheck4(){
	var obj = document.form1;

	if(obj.cust_nm1.value == "" ){
		alert("���ݰ�꼭 �̸��� �Է��ϼ���.");
		obj.cust_nm1.focus();
		return false;
 	} 
 	
 	if(obj.email4.value == "" ){
		alert("���ݰ�꼭E-mail �ּҸ� �Է��ϼ���.");
		obj.email4.focus();
		return false;
 	} 
	if (obj.checkpasswd.value == ""){
		alert("���������� ���ؼ� ��й�ȣ�� �Է��ϼ���.");
		obj.checkpasswd.focus();
		return false;
	}	
 	
	return true;

}



// ����尡�Խ�û�� �ʵ�Ȯ��
function ValidCheck2(){ 
	var obj = document.form1;
	//if(obj.cop_nm.value.length == 0 ){
	if(obj.this_bshop_nm.value.length == 0 ){
		alert("��ü���� �Է��ϼž� �մϴ�.");
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
 	
 	//if((obj.send_addr3.value == false) || obj.etc_sno.value == false){
	if(obj.send_addr3.value == false ){
		alert("�ּҸ� �Է��ϼž� �մϴ�.");
		//obj.etc_sno.focus();
		obj.send_addr3.focus();
		return false;
 	} 
 	
 	if(obj.duty_nm.value.length == 0 ){
		alert("������ �Է��ϼž� �մϴ�.");
		obj.duty_nm.focus();
		return false;
 	} 	 
 	/*
 	if(obj.cust_ogn_nm.value.length == 0 ){
		alert("�μ��� �Է��ϼž� �մϴ�.");
		obj.cust_ogn_nm.focus();
		return false;
 	} 	 
  */
  /* 2007.11.29 �ּ�ó��
  	if((obj.send_addr3.value == false) || obj.send_etc_sno.value == false){
		alert("����� �ּҸ� �Է��ϼž� �մϴ�.");
		obj.send_etc_sno.focus();
		return false;
 	} 
  */
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
	
	/*
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
	
	if (obj.email3.value == ""){
		alert("E-Mail �ּҸ� �Է��ϼ���.");
		obj.email3.focus();
		return false;
	}
	
	return true;
}



// ����ڵ�Ϲ�ȣ �ߺ� üũ�� �մϴ�.
function f_busi_double_check(){
  	if(ValidCheck02()==false){
  		return;
	}

  	form1.action="/speedmall/join/join_company_busi_chk_persist.jsp";
  	form1.target="tmpFrame";
  	form1.submit();
}
   

//�Է¿����� �����մϴ�.
function ValidCheck02(){
	var obj = document.form1;
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


function ValidCheck03(){
	var obj = document.form1;
	
	if(obj.enpri_cnt.value > 1 ){
		
		alert(obj.this_bshop_nm.value+"�� �ٸ�����ڰ� �����մϴ�. \n������� ������ ��������(1644-5644)�� ���ǹٶ��ϴ�.");
		return false;
 	}
	

  if(obj.this_bshop_nm.value.length == 0 ){
		alert("���θ��� �Է��ϼž� �մϴ�.");
		obj.this_bshop_nm.focus();
		return false;
 	} 
 	
 	if ( obj.busi_ty.value.length == 0 ){
		alert("���¸� �Է��ϼž� �մϴ�.");
		obj.busi_ty.focus();
		return false;
	}

	if ( obj.busip_mag_man.value.length == 0 ){
		alert("��ǥ�ڸ��� �Է��ϼž� �մϴ�.");
		obj.busip_mag_man.focus();
		return false;
	}
	
	if ( obj.kn.value.length == 0 ){
		alert("������ �Է��ϼž� �մϴ�.");
		obj.kn.focus();
		return false;
	}
 	
 	//if((obj.send_addr3.value == false) || obj.etc_sno.value == false){
	if(obj.send_addr3.value == false ){
		alert("�ּҸ� �Է��ϼž� �մϴ�.");
		//obj.etc_sno.focus();
		obj.send_addr3.focus();
		return false;
 	} 
	if(obj.regi_addr.value == false ){
		alert("������������ �Է��ϼž� �մϴ�.");
		//obj.etc_sno.focus();
		obj.regi_addr.focus();
		return false;
 	} 

	obj.obun_ymd.value=RemoveHypen(obj.obun_ymd.value);
	obj.obun_ymd.value=obj.obun_ymd.value.replace(/(^\s*)|(\s*$)/g,"");

	if (obj.obun_ymd.value.length != 8) {
		alert("â��������� 8�ڸ��� �ƴϰų�, �������� ���ԵǾ����ϴ�.");
		obj.obun_ymd.focus();
		return false;
	}



	if(obj.empl_num.value== 0 ){
		alert("�������� �Է��ϼž� �մϴ�. ");
		//obj.etc_sno.focus();
		obj.empl_num.focus();
		return false;
 	} 

	if (obj.checkpasswd.value == ""){
		alert("���������� ���ؼ� ��й�ȣ�� �Է��ϼ���.");
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



// �ּ�ã��
/*
function addr_sear(num){
	var acc = document.form1;
	var win2 = window.open("/speedmall/pop_post.jsp?flag="+num,'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	
*/

// ����� �ּ�
function same_address(){
	form1.same_addr.checked = false;
	if(form1.addr1.value == false || form1.etc_sno.value == false){
		form1.addr1.focus();
		alert("�ּҸ� �Է����ּ���!");
		return;
	}else{
		form1.send_addr1.value = form1.addr1.value;
		form1.send_addr2.value = form1.addr2.value;
		//form1.send_addr3.value = form1.addr3.value;
		form1.send_etc_sno.value = form1.etc_sno.value;
		form1.same_addr.checked = true;
	}
}


// ����� �ּ�
function same_address2(){
	form1.same_addrs.checked = false;
	if(form1.send_addr1.value == false){
		form1.send_addr1.focus();
		alert("�ּҸ� �Է����ּ���!");
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










