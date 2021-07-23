/**
* 2008-03-13 dhkim 
* 검색결과에서 바로 주문,장바구니,관심상품 넣는 기능
*/

function goExecute(checkId, gourl, cd, num,min_cnt){
	if(checkId=="true"){
		goExecuteDo(gourl, cd, num,min_cnt);
	}else{
		if(gourl == "CART"){
			goExecuteDo(gourl, cd, num,min_cnt);
		//}else if(gourl == "BARO"){
			//alert("해당 기능은 로그인을 하신후 사용하실 수 있습니다.");
		}else{
			//alert("해당 기능은 로그인을 하신후 사용하실 수 있습니다.");
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
	
	//20130813 sjjang 구매한도 테스트
	var prd_lim;
	if(document.getElementById("prd_lim"+count.substring(count.length-1))){
		prd_lim = document.getElementById("prd_lim"+count.substring(count.length-1)).value;
		if(prd_lim == 'N'){
			alert("회원전용 상품입니다");	
			return;
		}else{
			if(parseInt(cnt,10) > parseInt(prd_lim,10)){
				alert("구매가능 수량을 초과하셨습니다.");	
				return;
			}
		}
	}
	//20130813 sjjang 구매한도 테스트
	
	
	if(gourl == "ndetp" || gourl == "TD_ndetp"){
		alert("해당 품목은 첨부파일이 필요한 품목입니다.");
		this.location.href = "/small/search/goods_no_having_child.jsp?str_prd_cd="+cd;
	}else{	
		if(checkId=="true"){
			goExecuteDo(gourl, cd, num,cnt);
		}else{
			if(gourl == "CART"){
				goExecuteDo(gourl, cd, num,cnt);
			//}else if(gourl == "BARO"){
				//alert("해당 기능은 로그인을 하신후 사용하실 수 있습니다.");
			}else{
				alert("해당 기능은 로그인을 하신후 사용하실 수 있습니다.");
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
		if(confirm("선택하신 상품이 장바구니에 담겼습니다. \n\n계속 쇼핑하시겠습니까? \n\n장바구니 이동은 '취소' 버튼을 누르시기 바랍니다.") == true)
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
	$frm.find("input[name='prd_cd']").val(cd); // 상품입력
	$frm.find("input[name='quantity']").val(min_cnt);
	$frm.prop("target","tmpFrame");
	
	$frm.submit();
}


/**
* 2009-03-29 dhkim  form 을 받는것으로 함
*/
function goExecuteFrm(checkId, gourl, cd, num,min_cnt, chkFrm){
	
	if(checkId=="true"){
		goExecuteDoFrm(gourl, cd, num,min_cnt,chkFrm);
	}else{
		if(gourl == "CART"){
			goExecuteDoFrm(gourl, cd, num,min_cnt,chkFrm);
		//}else if(gourl == "BARO"){
			//alert("해당 기능은 로그인을 하신후 사용하실 수 있습니다.");
		}else{
			alert("해당 기능은 로그인을 하신후 사용하실 수 있습니다.");
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
//			alert("확인");
		}else if(gourl == "ZZIM"){
			frm.action  = "/small/cart/addproduct_zzim.jsp";
		}
		frm.prd_cd.value = cd; // 상품입력
		frm.target = "tmpFrame";
		frm.submit();
}