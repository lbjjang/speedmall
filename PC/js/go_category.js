

/**
* 2008-05-20 dhkim 중분류이동
*/
	function goMid (disp_class_cd, cate_nm, code) {
		var strServerName = "/small/search/01_2deth_01.jsp";
		var jsp_name;
		jsp_name = strServerName;
		//location.href = "/small/search/01_2deth_01.jsp";
	    location.href = jsp_name + "?disp_class_cd=" + disp_class_cd + "&" + "cate_nm="+cate_nm + "&" + "code="+code;
}  

/**
* 2008-05-20 dhkim 대분류
*/

function goMid2 (disp_class_cd2, cate_nm,  code) {
		var strServerName = "/small/search/01_02deth_01.jsp";
		var jsp_name;
		jsp_name = strServerName;
		//location.href = "/small/search/01_2deth_01.jsp";
		location.href = jsp_name + "?disp_class_cd2=" + disp_class_cd2 + "&" + "cate_nm="+cate_nm + "&" + "code="+code;
}  

/**
* 소분류이동
*/
function goCate(fm2, cate_hrank,s_cate_cd, cata_name, cate_name,code){
	fm2.cate1.value = cate_hrank;
	fm2.cate2.value = s_cate_cd;
	fm2.cata_nm1.value = cata_name;
	fm2.cata_nm2.value = cate_name;
	fm2.code_cd.value = code;
	fm2.action = "/small/search/3deth_result.jsp";
	//fm2.target = "_parent";
	fm2.submit();
}