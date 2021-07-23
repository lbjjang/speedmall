/* 2004.4.2 dhkim
	어디선가 누구에게 무슨 일이 생기면 ..
	어디선가 누군가가 체크박스를 누르면... 무조건 check 아니면 no check ..
*/


//-- 선택된 체크박스가 있는가를 검색한다.
// -- 1. frm - 폼 네임 , 2.chk_frm - 체크박스명까정..
function check_Box_All(chk_frm,flag1,flag2) {
    var chk_cnt = chk_frm.length;
	bBool = true;

	// -- 첫번째 값이 true/false 에 따라 불린값을 정한다.
	if ( chk_frm[0].checked == true ){bBool = false;
	}else{	bBool = true; }

	// -- 순환하며 실행한다.
	// -- 체크박스가 활성화 되어있는것만 처리한다.
	for (i=0; i<chk_cnt-1; i++ ){
		if(chk_frm[i].disabled==false){
		chk_frm[i].checked=bBool;
		}
	} // End For
	return bBool;
} // End Function

function check_Box_Exist(chk_frm,check_type) {
	var bBool = false;
	for(var i=0; i<chk_frm.length; i++) if (chk_frm[i].checked) { bBool=true; break; }
	return bBool;
	}


/** dhkim 체크박스 전부체크 getElementsByName 버젼 **/
function check_Box_All2(chk_frm,flag1,flag2) {
	var goodsSize = document.getElementsByName(chk_frm).length;
	bBool = true;

	// -- 첫번째 값이 true/false 에 따라 불린값을 정한다.
	// if(document.getElementsByName(chk_frm)[0].checked){
	if(flag1.checked){
		bBool = true;
	}else{
		bBool = false; }


	// -- 순환하며 실행한다.
	// -- 체크박스가 활성화 되어있는것만 처리한다.
	for (i=0; i<goodsSize; i++ ){
		if(document.getElementsByName(chk_frm)[0].disabled==false){
		document.getElementsByName(chk_frm)[i].checked=bBool;
		}
	} // End For
} // End Function


/** dhkim 체크박스 전부체크 getElementsByName 버젼 **/
function check_Box_Exist2(chk_name,check_type) {
	var bBool = false;
	var vSize = document.getElementsByName(chk_name).length;
	//alert(vSize);
	for(var i=0; i<vSize; i++){
		//alert(document.getElementsByName(chk_name)[i].checked);
		 if (document.getElementsByName(chk_name)[i].checked){
		  bBool=true;
		  break;
		 }// End IF
	}// End For
	return bBool;
	}// End Function