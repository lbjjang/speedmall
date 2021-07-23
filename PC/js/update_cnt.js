// 2008-01-24 dhkim  수량수정부분
function changeChange(i, num,flag){
	var v_num =num; // 수량적용에 사용할 변수

	if(checkFormat(i, num)){
		
		if(flag=="DOWN"){ v_num= v_num*-1; } // 다운버튼일 경우 - 계산을 한다.

		var upTemp = document.getElementsByName("update_number")[i].value * 1 + v_num;
		//if (upTemp=="0"){
		//	alert("수량에는 0 을 넣을 수 없습니다..");
		if(upTemp < num){ 
			alert(" 주문수량은 최소주문수량보다 커야 합니다. ");
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
			alert("수량에는 0 을 넣을 수 없습니다..");
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
   		alert("수량을 적어주세요.");
   		document.getElementsByName("update_number")[i].focus();
		return false;
  	}else{
		return true;
	}
}


// 수량변경
function upCnt(i, num, cd,url, min_cnt){
	var frm = document.form1;
	var vCnt= document.getElementsByName("update_number")[i].value;

	/**
		최소주문수량체크
	*/
	if (vCnt=="0" || vCnt==""){
		alert("수량에는 0 과 빈칸을 넣을 수 없습니다.");
   		document.getElementsByName("update_number")[i].focus();
		return;
	}

	if( vCnt<min_cnt || vCnt%min_cnt != 0){
			alert("주문수량은  최소주문수량보다 크거나 최소주문수량의 배수여야 합니다.");
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

//main > speed 구매 > 장바구니 수량변경
function upCnt_main(i, num, cd, url, min_cnt){
	
	var frm = document.form1;
	var vCnt= document.getElementsByName("update_number")[i].value;

	/**
		최소주문수량체크
	*/
	if (vCnt=="0" || vCnt==""){
		alert("수량에는 0 과 빈칸을 넣을 수 없습니다.");
   		document.getElementsByName("update_number")[i].focus();
		return;
	}

	if( vCnt<min_cnt || vCnt%min_cnt != 0){
			alert("주문수량은  최소주문수량보다 크거나 최소주문수량의 배수여야 합니다.");
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


// 수량변경
/**
function upCnt(i, num, cd,url){
	var frm = document.form1;
	var vCnt= document.getElementsByName("update_number")[i].value;

	if (vCnt=="0" || vCnt==""){
		alert("수량에는 0 과 빈칸을 넣을 수 없습니다.");
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