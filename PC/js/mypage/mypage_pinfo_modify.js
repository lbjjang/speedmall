 /*
 /* 2007.12.04 - ValidCheck2���� 
 /* ( addr3 --> send_addr3)�� ���� - jklee
 /* 2007.12.06 fm->form1���� ����..
  * 2010.07.19 ���ӵ� ���� / ������ ���ڷ��� �н����� ���� �Ұ� sskim
  * 
  */ 


// �����ؾߵ�
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
		alert("��й�ȣ�� 6�� �̻� �Է��ϼž� �մϴ�.");
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
		alert("��й�ȣ�� ��й�ȣ(Ȯ��)�� �ٸ��ϴ�.");
		upPwdFrm.new_pwd2.focus();
		return;
	}
/*
	if (upPwdFrm.cust_id.value==upPwdFrm.new_pwd.value ){
		alert("���̵�� ��й�ȣ�� �����Ͻø� �ȵ˴ϴ�.");
		upPwdFrm.new_pwd.value = "";
		upPwdFrm.new_pwd2.value = "";
		upPwdFrm.new_pwd.focus();
   		return;
	}
*/
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
      //  alert("���ӵ� ���ڿ�(123 �Ǵ� 321, abc, cba ��)��\n3�� �̻� ��� �� �� �����ϴ�.");
	  //20130225 ���ϳ��� ���� ���Ӽ� ���� �Ͻ� ����
        alert("���ӵ� ���ڿ�(12 �Ǵ� 21, ab, ba ��)��\n2�� �̻� ��� �� �� �����ϴ�.");
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
		upPwdFrm.action = "/small/mypage/mypage_pinfo_modify_persist.jsp";
		//upPwdFrm.target = "tmpFrame";
		upPwdFrm.submit();
	}
	

}

// �ּ�ã��
function addr_sear(){
	var acc = document.fm;
	var win2 = window.open("/speedmall/pop_post.jsp?flag=1",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}	


// ��й�ȣ�� ���� �մϴ�.
function Save2(){
  if(ValidCheck2()==false){
    return;
  }
  if(!confirm("����������� ���� �Ͻðڽ��ϱ�?")){
	  return;
  }
  ascii_trans(document.form1.elements["checkpasswd"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs

  form1.myUpFlag.value = "2";
  form1.action="/small/mypage/mypage_pinfo_modify_persist.jsp";
  //form1.target="tmpFrame";
  form1.submit();
}



function Save4(){

  if(f_businessClick()==false){ // ��������
		alert("������ �����Ͽ� �ֽñ� �ٶ��ϴ�. \n\n��Ÿ�� ��� ��Ÿ������ �ۼ��� �ֽñ� �ٶ��ϴ�.");
		return;
  }else if(f_intercategory()==false){ // ����ī�װ�����
		alert("���� ī�װ��� �����Ͽ� �ֽñ� �ٶ��ϴ�. ");
		return;
  }
  
  var obj = document.form1;
  
  if (obj.checkpasswd.value == ""){
		alert("���������� ���ؼ� ��й�ȣ�� �Է��ϼ���.");
		obj.checkpasswd.focus();
		return
	}
  
  if(!confirm("����/����ī�װ��� �����Ͻðڽ��ϱ�?")){
	  return;
  }  

   ascii_trans(document.form1.elements["checkpasswd"]);//�н����� �ƽ�Ű�� ���� 20100622 kimjs
  
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
		* ������ư�� ����ŭ ��ȯ
		*/
		for(i=0; i<frm.business.length; i++){
				// üũ������ üũ
				if(frm.business[i].checked==true){
					iCnt=1;
					frm.in_business_gubun.value=frm.business[i].gubun;
					frm.in_business_txt.value=frm.business[i].value;

					// ��Ÿ�ϰ�� ��Ÿ�� �� �Է�
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

	//���� ī�װ� 
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
		alert("�ּҸ� �Է��ϼ���.");
		obj.send_addr3.focus();
		//obj.etc_sno.focus();
		return false;
 	} 

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

	if (obj.checkpasswd.value == ""){
		alert("���������� ���ؼ� ��й�ȣ�� �Է��ϼ���.");
		obj.checkpasswd.focus();
		return false;
	}
	
	return true;
}





















