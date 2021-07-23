	function report_excel(ss, file_nm,save_file_nm){
		
		if (save_file_nm==null) {
			save_file_nm="MRO_Excel";
		}

				location.href="/fullsize/public/prn_excel/make_excel_file.jsp?prog_nm="+file_nm+"&ss="+ss+"&save_file_nm="+save_file_nm
	}		
	
	function report_excel2(ss, file_nm,save_file_nm){

		if (save_file_nm==null) {
			save_file_nm="MRO_Excel";
		}
			location.href="/fullsize/public/prn_excel/make_excel_file_2.jsp?prog_nm="+file_nm+"&ss="+ss+"&save_file_nm="+save_file_nm
	}

	function new_report_excel(page_nm,save_file_nm){
		
		if (save_file_nm==null) {
			save_file_nm="MRO_Excel";
		}

		if(page_nm=="adm_result_0_down_002"){
			var fm = adm_result_0_downFrm.document.form1;
			if(fm.qry!=null){
				fm.action="/fullsize/public/prn_excel/ords_info_down_excel.jsp?save_file_nm="+save_file_nm;
				fm.submit();
			}
		}
		else if(page_nm=="orders_sil_0_downFrm2"){
			var fm = orders_sil_0_downFrm2.document.form1;
			if(fm.qry!=null){
				fm.action="/fullsize/public/prn_excel/ords_info_down_excel.jsp?save_file_nm="+save_file_nm;
				fm.submit();
			}
		}

	}		



	function new_report_excel_sell_sil(page_nm,save_file_nm){
		
		if (save_file_nm==null) {
			save_file_nm="MRO_Excel";
		}

		if(page_nm=="adm_result_0_down_002"){
			var fm = adm_result_0_downFrm.document.form1;
			if(fm.qry!=null){
				fm.action="/fullsize/public/prn_excel/sell_ords_info_down_excel.jsp?save_file_nm="+save_file_nm;
				fm.submit();
			}
		}
		else if(page_nm=="orders_sil_0_downFrm2"){
			var fm = orders_sil_0_downFrm2.document.form1;
			if(fm.qry!=null){
				fm.action="/fullsize/public/prn_excel/sell_ords_info_down_excel.jsp?save_file_nm="+save_file_nm;
				fm.submit();
			}
		}

	}		

	function new_report(page_nm){
		

		if(page_nm=="adm_result_0_down_002"){
			var fm = document.form1;

			window.open("",'printOrderList',"width=700,height=400,top=85,left=45,resizable=yes");
	
			var loc ="/fullsize/public/prn_excel/ords_info_down_report.jsp";
	
			fm.action = loc;
			fm.target = "printOrderList";
			fm.submit();

		}
		else if(page_nm=="orders_sil_0_downFrm2"){
			var fm = document.form1;

			window.open("",'printOrderList',"width=700,height=400,top=85,left=45,resizable=yes");
	
			var loc ="/fullsize/public/prn_excel/orders_sil_0_downFrm2_report.jsp";
	
			fm.action = loc;
			fm.target = "printOrderList";
			fm.submit();
		}

	}		
