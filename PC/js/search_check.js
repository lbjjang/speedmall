var ReturnValue2 = false;	
function searchGoods(){

	if(frmSer.word1.value == false){
		alert("�˻�� �����ּ���!");
		frmSer.word1.focus();
		return;
	}else{
		frmSer.flag.value = 1;
		ReturnValue2 = true;

		/* 2007.12.10 �ּ�ó��..
		if(frmSer.word2.value != false){
			if(document.getElementsByName("chk_flag")[0].checked || document.getElementsByName("chk_flag")[1].checked){
				for(i = 0; i < 2; i++){
					if(document.getElementsByName("chk_flag")[i].checked){
						frmSer.flag.value = document.getElementsByName("chk_flag")[i].value;
						ReturnValue2 = true;
					}
				}
			}else{
				alert("�˻������� �������ּ���!");
				return;
			}
		}else{
			frmSer.flag.value = 1;
			ReturnValue2 = true;
		}
		*/
	}
	
	if(ReturnValue2){
		frmSer.action = "/speedmall/search/keyword_result.jsp";
		frmSer.submit();
	}
}


