// 2008-01-24 dhkim  ���������κ�
function changeChange(i, num,flag){
	var v_num =num; // �������뿡 ����� ����

	if(checkFormat(i, num)){
		
		if(flag=="DOWN"){ v_num= v_num*-1; } // �ٿ��ư�� ��� - ����� �Ѵ�.

		var upTemp = document.getElementsByName("update_number")[i].value * 1 + v_num;
		//if (upTemp=="0"){
		//	alert("�������� 0 �� ���� �� �����ϴ�..");
		if(upTemp < num){ 
			alert(" �ֹ������� �ּ��ֹ��������� Ŀ�� �մϴ�. ");
			return;
		}
		document.getElementsByName("update_number")[i].value = upTemp;
	}else{
		return;
	}
}

/*
function changeChange(i, num){
	if(checkFormat(i, num)){
		var upTemp = document.getElementsByName("update_number")[i].value * 1 + num;
		if (upTemp=="0"){
			alert("�������� 0 �� ���� �� �����ϴ�..");
			return;
		}
		document.getElementsByName("update_number")[i].value = upTemp;
	}else{
		return;
	}
}
*/

function checkFormat(i, num){
	if(num == 1)
		var pattern = /^[0-9]/;
	else
		var pattern = /^[1-9]/;

	var quantity = document.getElementsByName("update_number")[i].value;
	if(!pattern.test(quantity)){
   		alert("������ �����ּ���.");
   		document.getElementsByName("update_number")[i].focus();
		return false;
  	}else{
		return true;
	}
}


// ��������
function upCnt(i, num, cd,url, min_cnt){
	var frm = document.form1;
	var vCnt= document.getElementsByName("update_number")[i].value;

	/**
		�ּ��ֹ�����üũ
	*/
	if (vCnt=="0" || vCnt==""){
		alert("�������� 0 �� ��ĭ�� ���� �� �����ϴ�.");
   		document.getElementsByName("update_number")[i].focus();
		return;
	}

	if( vCnt<min_cnt || vCnt%min_cnt != 0){
			alert("�ֹ�������  �ּ��ֹ��������� ũ�ų� �ּ��ֹ������� ������� �մϴ�.");
	   		//document.getElementsByName("update_number")[i].focus();
			document.getElementsByName("update_number")[i].value = document.getElementsByName("update_number")[i].defaultValue;
			return;
	}

	if(checkFormat(i, num)){
		frm.oneListNum.value = cd;
		frm.oneCnt.value = document.getElementsByName("update_number")[i].value;
		frm.action = "./mod_product_cart_cnt.jsp?next_url="+url;
		frm.target = "tmpFrame";
		frm.submit();
	}else{
		return;
	}
} // End Function

//main > speed ���� > ��ٱ��� ��������
function upCnt_main(i, num, cd, url, min_cnt){
	
	var frm = document.form1;
	var vCnt= document.getElementsByName("update_number")[i].value;

	/**
		�ּ��ֹ�����üũ
	*/
	if (vCnt=="0" || vCnt==""){
		alert("�������� 0 �� ��ĭ�� ���� �� �����ϴ�.");
   		document.getElementsByName("update_number")[i].focus();
		return;
	}

	if( vCnt<min_cnt || vCnt%min_cnt != 0){
			alert("�ֹ�������  �ּ��ֹ��������� ũ�ų� �ּ��ֹ������� ������� �մϴ�.");
	   		//document.getElementsByName("update_number")[i].focus();
			document.getElementsByName("update_number")[i].value = document.getElementsByName("update_number")[i].defaultValue;
			return;
	}

	if(checkFormat(i, num)){
		frm.oneListNum.value = cd;
		frm.oneCnt.value = document.getElementsByName("update_number")[i].value;
		frm.action = "/small/cart/mod_product_cart_cnt_speed.jsp?next_url="+url;
		frm.target = "tmpFrame";
		frm.submit();
	}else{
		return;
	}
} // End Function


// ��������
/**
function upCnt(i, num, cd,url){
	var frm = document.form1;
	var vCnt= document.getElementsByName("update_number")[i].value;

	if (vCnt=="0" || vCnt==""){
		alert("�������� 0 �� ��ĭ�� ���� �� �����ϴ�.");
		return;
	}

	if(checkFormat(i, num)){
		frm.oneListNum.value = cd;
		frm.oneCnt.value = document.getElementsByName("update_number")[i].value;
		frm.action = "./mod_product_cart_cnt.jsp?next_url="+url;
		frm.target = "tmpFrame";
		frm.submit();
	}else{
		return;
	}
} // End Function
**/