function changeChange(i, num,flag){
	var v_num =num; // 수량적용에 사용할 변수

	if(checkFormat(i, num)){

		if(flag=="DOWN"){ v_num= v_num*-1; } // 다운버튼일 경우 - 계산을 한다.

		var upTemp = document.getElementsByName("quantity")[i].value * 1 + v_num;
		//if (upTemp=="0"){
		//	alert("수량에는 0 을 넣을 수 없습니다..");
		if(upTemp < num){
			alert(" 주문수량은 최소주문수량보다 커야 합니다. ");
			return;
		}
		document.getElementsByName("quantity")[i].value = upTemp;
		// 옵션 수량도 같이 수정.
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
   		alert("수량을 적어주세요.");
   		document.getElementsByName("quantity")[i].focus();
		return false;
  	}else{
		return true;
	}
}

// 체크한 모든 가격의 합을 나타낸다. 규격별 상세내역조회에서 사용..
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

// chksum 펑션 오류 , 품절처럼 체크박스가 없는 경우 계산하지 못함
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
	            // 상품상세 옵션 연계함수.
				selectOptoinGoods(i);
	        }
	    }
		//document.form1.total_cnt.value = addComma_go_click(sumValue);
		$("#total_cnt").html(addComma_go_click(sumValue)+" 원");
		
		// 옵션합계 연계함수.
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
		$("#total_cnt").html(addComma_go_click(sumValue)+" 원");
		
		// 상품상세 옵션 연계함수.
		if (selectOptoinGoods) {
			if (idx || idx == 0){
				selectOptoinGoods(idx);
			}
		}
		// 옵션합계 연계함수.
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
* 중분류이동
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
* 상세분류이동
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

/** 콤마를 추가하는 함수.. sk_util.js 에서도 사용하는 명칭으로 충돌이 발생함으로 사용하지 말고
	아래 펑션 addComma_go_click 를 사용할것을 권고한다.
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

/** 콤마를 추가하는 함수..
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