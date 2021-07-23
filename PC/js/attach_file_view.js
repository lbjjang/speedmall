/*
function attach_file_view(dest_num, dest_seq, enpri_cd, ref_ty) {
	var loc = "/fullsize/public/rfq/attach_file.jsp";
	loc += "?DEST_NUM="+dest_num;
	loc += "&DEST_SEQ="+dest_seq;
	loc += "&ENPRI_CD="+enpri_cd;
	loc += "&REF_TY="+ref_ty;
	window.open(loc,'attach_file',"width=530 height=350 scrollbars=yes");
}
*/

/**
* 네트웍스에서 사용하던 소스를 가져옮
*/
function attach_file_view(flag,dest_num, dest_seq, enpri_cd, ref_ty, flag2) {

	if(dest_num==""){ 
		alert("주문번호가 없습니다.\n"
		  +"먼저 주문번호를 생성하여 주세요.");
		return;
	}

	if(flag2 == null) flag2 = "";

	var loc = "/fullsize/comm/file_attach/c_req_pop_file.jsp";
	loc += "?flag="+flag;
	loc += "&DEST_NUM="+dest_num;
	loc += "&DEST_SEQ="+dest_seq;
	loc += "&ENPRI_CD="+enpri_cd;
	loc += "&REF_TY="+ref_ty;
	loc += "&flag2="+flag2;
	window.open(loc,'attach_file',"width=630,height=300,top=200,left=200, scrollbars=no");
}

//고객 전용
function attach_file_view_cust(flag,dest_num, dest_seq, enpri_cd, ref_ty, flag2) {

	if(dest_num==""){ 
		alert("주문번호가 없습니다.\n"
		  +"먼저 주문번호를 생성하여 주세요.");
		return;
	}

	if(flag2 == null) flag2 = "";

	var loc = "/fullsize/comm/file_attach/c_req_pop_file_cust.jsp";
	loc += "?flag="+flag;
	loc += "&DEST_NUM="+dest_num;
	loc += "&DEST_SEQ="+dest_seq;
	loc += "&ENPRI_CD="+enpri_cd;
	loc += "&REF_TY="+ref_ty;
	loc += "&flag2="+flag2;
	window.open(loc,'attach_file',"width=630,height=300,top=200,left=200, scrollbars=no");
}


//공급사 전용
function attach_file_view_supp(flag,dest_num, dest_seq, enpri_cd, ref_ty, flag2) {

	if(dest_num==""){ 
		alert("주문번호가 없습니다.\n"
		  +"먼저 주문번호를 생성하여 주세요.");
		return;
	}

	if(flag2 == null) flag2 = "";

	var loc = "/fullsize/comm/file_attach/c_req_pop_file_supp.jsp";
	loc += "?flag="+flag;
	loc += "&DEST_NUM="+dest_num;
	loc += "&DEST_SEQ="+dest_seq;
	loc += "&ENPRI_CD="+enpri_cd;
	loc += "&REF_TY="+ref_ty;
	loc += "&flag2="+flag2;
	window.open(loc,'attach_file',"width=630,height=300,top=200,left=200, scrollbars=no");
}



function attach_file_view_download(dest_num, dest_seq, ref_ty) {

	if(dest_num==""){ 
		alert("관리번호가 없습니다.\n"
				+"먼저 관리자에게 문의 하시기 바랍니다.");
		return;
	}

	var loc = "/fullsize/comm/file_attach/c_req_pop_file_download.jsp";
	loc += "?dest_num="+dest_num+"&dest_num="+dest_seq+"&ref_ty="+ref_ty;
	window.open(loc,'attach_file',"width=630,height=230,top=200,left=200, scrollbars=no");
}
