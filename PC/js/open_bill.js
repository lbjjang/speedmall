function open_bill(busi_man_num) {
	
	$(".lnb_nav dl").removeClass("active");
	$(".lnb_nav dd a").removeClass("active");
	
	$("#dl3").addClass("active");
	$("#dl3_dd1").addClass("active");
	
	track_page = "http://www.csbill.co.kr/scmBill_mrok.jsp?busi_N="+busi_man_num+"&scm_Name=mrokspeed";
	window.open(track_page,"open_bill","width=845,height=580,scrollbars=yes,resizable=no");
	return;
}

