function changeChange(i, num,flag){
	var v_num =num; // �������뿡 ����� ����

	if(checkFormat(i, num)){

		if(flag=="DOWN"){ v_num= v_num*-1; } // �ٿ��ư�� ��� - ����� �Ѵ�.

		var upTemp = document.getElementsByName("quantity")[i].value * 1 + v_num;
		//if (upTemp=="0"){
		//	alert("�������� 0 �� ���� �� �����ϴ�..");
		if(upTemp < num){
			alert(" �ֹ������� �ּ��ֹ��������� Ŀ�� �մϴ�. ");
			return;
		}
		document.getElementsByName("quantity")[i].value = upTemp;
		// �ɼ� ������ ���� ����.
		jQuery(".tpOptionGoodsQty-"+i).val(upTemp);
	}else{
		return;
	}
}

function checkFormat(i, num){
	if(num == 1)
		var pattern = /^[0-9]/;
	else
		var pattern = /^[1-9]/;

	var quantity = document.getElementsByName("quantity")[i].value;
	if(!pattern.test(quantity)){
   		alert("������ �����ּ���.");
   		document.getElementsByName("quantity")[i].focus();
		return false;
  	}else{
		return true;
	}
}

// üũ�� ��� ������ ���� ��Ÿ����. �԰ݺ� �󼼳�����ȸ���� ���..
function chksum() {
	var upTemp = 0;
	var goodsSize = document.getElementsByName("goods_check").length;
    var sumValue = 0;
	var Total = 0;
    for (var i =0; i < goodsSize; i++) {
		if(document.getElementsByName("goods_check")[i].checked){
			upTemp = document.getElementsByName("quantity")[i].value;
			quantity = document.getElementsByName("Total")[i].value * upTemp;
            sumValue = sumValue + new Number(quantity);
        }
    }
	document.form1.total_cnt.value = addComma_go_click(sumValue);
}// End function


	function goMid (disp_class_cd, cate_nm, code) {
		var strServerName = "/mall/search/01_2deth_01.jsp";
		var jsp_name;

			jsp_name = strServerName;

		//location.href = "/mall/search/01_2deth_01.jsp";
	    location.href = jsp_name + "?disp_class_cd=" + disp_class_cd + "&" + "cate_nm="+cate_nm + "&" + "code="+code;
}

// chksum ��� ���� , ǰ��ó�� üũ�ڽ��� ���� ��� ������� ����
function chksum_real(idx) {
	var upTemp = 0;
	var goodsSize = document.getElementsByName("goods_check").length;
    var sumValue = 0;
	var Total = 0;
	var v_list_cnt=0;
	
	if(idx=="all"){
		for (var i =0; i < goodsSize; i++) {
			if(document.getElementsByName("goods_check")[i].checked){
				v_list_cnt = Number(document.getElementsByName("goods_check")[i].value);
				upTemp = document.getElementsByName("quantity")[v_list_cnt].value;
				quantity = document.getElementsByName("Total")[v_list_cnt].value * upTemp;
	            sumValue = sumValue + new Number(quantity);
	            // ��ǰ�� �ɼ� �����Լ�.
				selectOptoinGoods(i);
	        }
	    }
		//document.form1.total_cnt.value = addComma_go_click(sumValue);
		$("#total_cnt").html(addComma_go_click(sumValue)+" ��");
		
		// �ɼ��հ� �����Լ�.
		if (setOptionTotal) {
			setOptionTotal();
		}
	}else {
		for (var i =0; i < goodsSize; i++) {
			if(document.getElementsByName("goods_check")[i].checked){
				v_list_cnt = Number(document.getElementsByName("goods_check")[i].value);
				upTemp = document.getElementsByName("quantity")[v_list_cnt].value;
				quantity = document.getElementsByName("Total")[v_list_cnt].value * upTemp;
	            sumValue = sumValue + new Number(quantity);
	        }
	    }
		//document.form1.total_cnt.value = addComma_go_click(sumValue);
		$("#total_cnt").html(addComma_go_click(sumValue)+" ��");
		
		// ��ǰ�� �ɼ� �����Լ�.
		if (selectOptoinGoods) {
			if (idx || idx == 0){
				selectOptoinGoods(idx);
			}
		}
		// �ɼ��հ� �����Լ�.
		if (setOptionTotal) {
			setOptionTotal();
		}
	}
}// End function


	function goMid (disp_class_cd, cate_nm, code) {
		var strServerName = "/mall/search/01_2deth_01.jsp";
		var jsp_name;

			jsp_name = strServerName;

		//location.href = "/mall/search/01_2deth_01.jsp";
	    location.href = jsp_name + "?disp_class_cd=" + disp_class_cd + "&" + "cate_nm="+cate_nm + "&" + "code="+code;
}

/**
* �ߺз��̵�
*/
function go2Cate(cate_cd,cate_nm,code){
	var frm=document.form1;
	frm.target="_self";
	frm.disp_class_cd.value=cate_cd;
	frm.cate_nm.value=cate_nm;
	frm.code.value=code;
	frm.action="/mall/search/01_2deth_01.jsp";
	frm.submit();
}
/**
* �󼼺з��̵�
*/
function go3Cate(cate1,cate2,catenm1,catenm2,code){
	var frm=document.form1;
	frm.target="_self";
	frm.cate1.value=cate1;
	frm.cate2.value=cate2;
	frm.cata_nm1.value=catenm1;
	frm.cata_nm2.value=catenm2;
	frm.code_cd.value=code;
	frm.action = "/mall/search/3deth_result.jsp";
	frm.submit();
}



function getReSize()
{
	var objFrame = document.getElementById("ifm_result");
	var objBody = ifm_result.document.body;

	ifrmHeight = objBody.scrollHeight + (objBody.offsetHeight - objBody.clientHeight);
	objFrame.style.height = ifrmHeight;
}

/** �޸��� �߰��ϴ� �Լ�.. sk_util.js ������ ����ϴ� ��Ī���� �浹�� �߻������� ������� ����
	�Ʒ� ��� addComma_go_click �� ����Ұ��� �ǰ��Ѵ�.
**/
function addComma (str)
{
 var input_str = str.toString();

 if (input_str == '') return false;
 input_str = parseInt(input_str.replace(/[^0-9]/g, '')).toString();
 if (isNaN(input_str)) { return false; }

 var sliceChar = ',';
 var step = 3;
 var step_increment = -1;
 var tmp  = '';
 var retval = '';
 var str_len = input_str.length;

 for (var i=str_len; i>=0; i--)
 {
  tmp = input_str.charAt(i);
  if (tmp == sliceChar) continue;
  if (step_increment%step == 0 && step_increment != 0) retval = tmp + sliceChar + retval;
  else retval = tmp + retval;
  step_increment++;
 }

 return retval;
}// End function

/** �޸��� �߰��ϴ� �Լ�..
**/
function addComma_go_click (str)
{
 var input_str = str.toString();

 if (input_str == '') return false;
 input_str = parseInt(input_str.replace(/[^0-9]/g, '')).toString();
 if (isNaN(input_str)) { return false; }

 var sliceChar = ',';
 var step = 3;
 var step_increment = -1;
 var tmp  = '';
 var retval = '';
 var str_len = input_str.length;

 for (var i=str_len; i>=0; i--)
 {
  tmp = input_str.charAt(i);
  if (tmp == sliceChar) continue;
  if (step_increment%step == 0 && step_increment != 0) retval = tmp + sliceChar + retval;
  else retval = tmp + retval;
  step_increment++;
 }

 return retval;
}// End Function