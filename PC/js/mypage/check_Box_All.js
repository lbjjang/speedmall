/* 2004.4.2 dhkim
	��𼱰� �������� ���� ���� ����� ..
	��𼱰� �������� üũ�ڽ��� ������... ������ check �ƴϸ� no check ..
*/


//-- ���õ� üũ�ڽ��� �ִ°��� �˻��Ѵ�.
// -- 1. frm - �� ���� , 2.chk_frm - üũ�ڽ������..
function check_Box_All(chk_frm,flag1,flag2) {
    var chk_cnt = chk_frm.length;
	bBool = true;

	// -- ù��° ���� true/false �� ���� �Ҹ����� ���Ѵ�.
	if ( chk_frm[0].checked == true ){bBool = false;
	}else{	bBool = true; }

	// -- ��ȯ�ϸ� �����Ѵ�.
	// -- üũ�ڽ��� Ȱ��ȭ �Ǿ��ִ°͸� ó���Ѵ�.
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


/** dhkim üũ�ڽ� ����üũ getElementsByName ���� **/
function check_Box_All2(chk_frm,flag1,flag2) {
	var goodsSize = document.getElementsByName(chk_frm).length;
	bBool = true;

	// -- ù��° ���� true/false �� ���� �Ҹ����� ���Ѵ�.
	// if(document.getElementsByName(chk_frm)[0].checked){
	if(flag1.checked){
		bBool = true;
	}else{
		bBool = false; }


	// -- ��ȯ�ϸ� �����Ѵ�.
	// -- üũ�ڽ��� Ȱ��ȭ �Ǿ��ִ°͸� ó���Ѵ�.
	for (i=0; i<goodsSize; i++ ){
		if(document.getElementsByName(chk_frm)[0].disabled==false){
		document.getElementsByName(chk_frm)[i].checked=bBool;
		}
	} // End For
} // End Function


/** dhkim üũ�ڽ� ����üũ getElementsByName ���� **/
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