/**
* 2008-03-13 dhkim 
* �˻�������� �ٷ� �ֹ�,��ٱ���,���ɻ�ǰ �ִ� ���
*/

function goExecute(checkId, gourl, cd, num,min_cnt){
	if(checkId=="true"){
		goExecuteDo(gourl, cd, num,min_cnt);
	}else{
		if(gourl == "CART"){
			goExecuteDo(gourl, cd, num,min_cnt);
		//}else if(gourl == "BARO"){
			//alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		}else{
			//alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
			//this.location.href = "/small/login/login.jsp?COME_FLAG=NOT";
			/*var params = window.location.search.substring();
			var arrparams = params.split("&");
			
			var param0 = "";
			var param1 = "";
			
			if (arrparams.length>1){
				param0 = arrparams[0];
				param1 = arrparams[1];
			}
			
			if(param0!="undefined" && param1!="undefined"){
				showLoginPopup(document.location.href+param0,param1);
			} else {
				showLoginPopup(document.location.href, '');
			}*/
			$("#tpLoginFrame").attr("src", "/small/include/modal/common/login_frame.jsp?screen_flag=" + window.document.URL);
			$("#login_popup").modal();

			
		}
	}
}

function goExecute1(checkId, gourl, cd, num,min_cnt,count){

	
	var frm = document.form1;
	
	var cnt = document.getElementById(count).value;		
	
	//20130813 sjjang �����ѵ� �׽�Ʈ
	var prd_lim;
	if(document.getElementById("prd_lim"+count.substring(count.length-1))){
		prd_lim = document.getElementById("prd_lim"+count.substring(count.length-1)).value;
		if(prd_lim == 'N'){
			alert("ȸ������ ��ǰ�Դϴ�");	
			return;
		}else{
			if(parseInt(cnt,10) > parseInt(prd_lim,10)){
				alert("���Ű��� ������ �ʰ��ϼ̽��ϴ�.");	
				return;
			}
		}
	}
	//20130813 sjjang �����ѵ� �׽�Ʈ
	
	
	if(gourl == "ndetp" || gourl == "TD_ndetp"){
		alert("�ش� ǰ���� ÷�������� �ʿ��� ǰ���Դϴ�.");
		this.location.href = "/small/search/goods_no_having_child.jsp?str_prd_cd="+cd;
	}else{	
		if(checkId=="true"){
			goExecuteDo(gourl, cd, num,cnt);
		}else{
			if(gourl == "CART"){
				goExecuteDo(gourl, cd, num,cnt);
			//}else if(gourl == "BARO"){
				//alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
			}else{
				alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
				//this.location.href = "/small/login/login.jsp?COME_FLAG=NOT";
				var params = window.location.search.substring();
				var arrparams = params.split("&");
				var param0 = "";
				var param1 = "";
				if (arrparams.length>1){
					param0 = arrparams[0];
					param1 = arrparams[1];
				}
//				showLoginPopup("/small/cart/addproduct_baro_jumun.jsp", "&prd_cd=<%=pstrPrdCd%>&quantity=" + $('#quantity').val());
				
				showLoginPopup('/small/cart/addproduct_baro_jumun.jsp', '&prd_cd=' + cd + '&quantity=' + cnt );
			}
		}
	}
}


function goExecuteDo(gourl, cd, num,min_cnt){
	var $frm=$("form[name='form1']");

	if(gourl == "BARO"){
		$frm.prop("action","/small/cart/addproduct_baro_jumun.jsp");
	}else if(gourl == "CART"){
		if(confirm("�����Ͻ� ��ǰ�� ��ٱ��Ͽ� �����ϴ�. \n\n��� �����Ͻðڽ��ϱ�? \n\n��ٱ��� �̵��� '���' ��ư�� �����ñ� �ٶ��ϴ�.") == true)
		{
			$frm.prop("action","/small/cart/addproduct_cart_no.jsp");
		}else{
			$frm.prop("action","/small/cart/addproduct_cart_yes.jsp");
		}

	}else if(gourl == "ZZIM"){
		$frm.prop("action","/small/cart/addproduct_zzim.jsp");
	}else if(gourl == "TD_BARO") {
		$frm = $("form[name='frmToday']");
		$frm.prop("action","/small/cart/addproduct_baro_jumun.jsp");
	}else if(gourl == "TD_ZZIM") {
		$frm = $("form[name='frmToday']");
		$frm.prop("action","/small/cart/addproduct_zzim.jsp");
	}
	$frm.find("input[name='prd_cd']").val(cd); // ��ǰ�Է�
	$frm.find("input[name='quantity']").val(min_cnt);
	$frm.prop("target","tmpFrame");
	
	$frm.submit();
}


/**
* 2009-03-29 dhkim  form �� �޴°����� ��
*/
function goExecuteFrm(checkId, gourl, cd, num,min_cnt, chkFrm){
	
	if(checkId=="true"){
		goExecuteDoFrm(gourl, cd, num,min_cnt,chkFrm);
	}else{
		if(gourl == "CART"){
			goExecuteDoFrm(gourl, cd, num,min_cnt,chkFrm);
		//}else if(gourl == "BARO"){
			//alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		}else{
			alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
			//this.location.href = "/small/login/login.jsp?COME_FLAG=NOT";
			showLoginPopup();
		}
	}
}

function goExecuteDoFrm(gourl, cd, num,min_cnt,chkFrm){
	var frm=chkFrm; 	
	frm.quantity.value=min_cnt;
		if(gourl == "BARO"){
			frm.action = "/small/cart/addproduct_baro_jumun.jsp"
		}else if(gourl == "CART"){
			frm.action = "/small/cart/addproduct_cart.jsp"
//			alert("Ȯ��");
		}else if(gourl == "ZZIM"){
			frm.action  = "/small/cart/addproduct_zzim.jsp";
		}
		frm.prd_cd.value = cd; // ��ǰ�Է�
		frm.target = "tmpFrame";
		frm.submit();
}