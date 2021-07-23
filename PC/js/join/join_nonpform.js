//  비회원 주소찾기

function addr_sear(){
	var acc = document.form1;
	var win2 = window.open("/small/pop/pop_post5.jsp?flag=1",'addr_checkFrm','width =420 height=320 top=200 left=200,scrollbars=yes');
	win2.focus();
}

function pop_name_check(){
	var acc = document.form1;
	var win2 = window.open("/small/pop/pop_namecheck.html",'addr_checkFrm','width =400 height=250 top=200 left=200');
	win2.focus();
}

/*
function name_check(){
	var frm = document.form1;

	var inputCustnm = frm.custnm.value;
	var inputJuno1  = frm.juno1.value;
	var inputJuno2  = frm.juno2.value;

	frm.action="/small/join/join_pmember_namecheck.jsp";
	frm.submit();
}
*/																									  
function f_addr_ad_nomem() {
	var call_str = "/small/pop/addr.jsp?flag=1&page=no_mem_in";
	var win = window.open(call_str,'pop_post','width =435 height=425,resizable=no,scrollbars=no');
		win.focus();
}