// 20040602 오호식 p_disp_flag추가 : 00=> 일자를 2자리로 설정.
function set_days_per_month(yy_value, mm_value, dd_select_type, p_disp_flag){
	var date = new Date(yy_value, mm_value, 0); // 해당월의 마지막날.
	var selected_value = dd_select_type.selectedIndex+1;
	if (selected_value > date.getDate()) selected_value = date.getDate();
	
	var b_zero="";
	if(p_disp_flag == "00") b_zero="0";

	for(var i = 0; i < dd_select_type.length; i++){
		dd_select_type.options[i] = null;
	}

	var b_day = "";
	for(var i = 1; i < (date.getDate()+1); i++){
		if(i < 10) b_day = b_zero+i; else b_day = ""+i;
        var option1 = new Option(b_day, b_day);
        dd_select_type.options[i-1] = option1;
        if(selected_value == i) dd_select_type.options[i-1].selected = true;
    }  	
}

// 오호식 : 날짜변경에 따른 처리 필요시
function set_days_per_month_proc(p_flag, yy_value, mm_value, dd_select_type, p_flag2){
	var now = new Date();
	if(yy_value == "") yy_value = now.getFullYear();
	var date = new Date(yy_value, mm_value, 0); // 해당월의 마지막날.
	var selected_value = dd_select_type.selectedIndex+1;
	if (selected_value > date.getDate()) selected_value = date.getDate();

	for(var i = 0; i < dd_select_type.length; i++){
		dd_select_type.options[i] = null;
	}   

	var b_day = "";
	for(var i = 1; i < (date.getDate()+1); i++){
		if(i < 10) b_day = "0"+i; else b_day = ""+i;
		var option1 = new Option(b_day, b_day);
		dd_select_type.options[i-1] = option1;
		if(selected_value == i) dd_select_type.options[i-1].selected = true;
	}   

	if(p_flag == "PRE_PROC") {
		var fm = c_pre_proc_set_mainFrm.document.form1;
		var b_obj_mm = c_pre_proc_set_mainFrm.document.form1.mm1;
		var b_obj_dd = c_pre_proc_set_mainFrm.document.form1.dd1;
		var b_cnt = fm.mm1.length-1;
		var i=0, j=0;
		for(i=0; i<b_cnt; i++) {
			for(j=0; j<12; j++) {
				if(b_obj_mm[i].options[j].value == mm_value) {
					b_obj_mm[i].options[j].selected = true;
					// 20040602OH 일자 설정
					selected_value = b_obj_dd[i].value;
					for(var k = 0; k < b_obj_dd[i].length; k++){
						b_obj_dd[i].options[k] = null;
					}
					for(var k = 1; k < (date.getDate()+1); k++){
						if(k < 10) b_day = "0"+k; else b_day = ""+k;
						var option1 = new Option(b_day, b_day);
						b_obj_dd[i].options[k-1] = option1;
						if(selected_value == k) b_obj_dd[i].options[k-1].selected = true;
					}   
				}
			}
		}
	}
}

// 오호식 : 년도나 일이 바뀔경우 처리
function f_set_yy_dd_proc(p_flag, p_yy_dd, p_val) {
	var fm = c_pre_proc_set_mainFrm.document.form1;
	var b_obj, b_cnt = fm.yy1.length-1, b_item_cnt=0;
	var i=0, j=0;
	if(p_yy_dd == "dd") { b_obj = fm.dd1; } else { b_obj = fm.yy1; }

	for(i=0; i<b_cnt; i++) {
		b_item_cnt = b_obj[i].length;
		for(j=0; j<b_item_cnt; j++) {
			if(b_obj[i].options[j].value == p_val) {
				b_obj[i].options[j].selected = true;
			}
		}
	}
}
