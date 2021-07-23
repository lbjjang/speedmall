function SCartShow() {
	if (document.getElementById("toSCart")) {
		document.body.removeChild(document.getElementById("toSCart"));
	}
	var num = arguments[0];
	var frm = document.form1;
	var pattern = /^[1-9]/;
	var quantity = "";
	var cnt = "";
	var locat_ck = arguments[1];

	if ((locat_ck == undefined)) {
		quantity = document.getElementById("quantity").value;
		if (!pattern.test(quantity)) {
			alert("수량을 적어주세요.");
			document.getElementById("quantity").focus();
			return;
		} else {
			// 20130813 sjjang 구매한도 테스트
			if (document.getElementById("prd_lim")) {
				if (document.getElementById("prd_lim").value == "N") {
					alert("회원전용 상품입니다");
					return;
				} else if (Number(document.getElementById("prd_lim").value) < Number(quantity)) {
					alert("구매가능 수량을 초과하셨습니다.");
					return;
				} else {
					returnValue = true;
				}
			} else {
				returnValue = true;
			}
			// 20130813 sjjang 구매한도 테스트
		}
		/** 최소주문수량체크 */
		if (quantity < num || quantity % num != 0) {
			alert("주문수량은  최소주문수량보다 크거나 최소주문수량의 배수여야 합니다.");
			document.getElementById("quantity").value = document.getElementById("quantity").defaultValue;
			return;
		}
		if (document.getElementsByName("make_kn")[0] != undefined) {
			if ((document.getElementsByName("make_kn")[0].value != "001") && (document.all.divAttach[0].innerHTML != "")) {
				var vals1 = document.getElementsByName("make_kn")[0].value;
				var vals2 = document.all.divAttach[0].innerHTML;
				if (filechk(vals1, vals2) == false) {
					return;
				}
			}
		}
		if (document.getElementsByName("goods_check").length != 0) {
			if (!(onChkCheckBox() && onChkCheckBox())) {
				alert("상품을 선택하세요.");
				return;
			}
		}
	} else if ((locat_ck == "C3")) {
		cnt = document.getElementById(arguments[5]).value;
		var prd_lim;
		if (document.getElementById("prd_lim" + arguments[5].substring(arguments[5].length - 1))) {
			prd_lim = document.getElementById("prd_lim" + arguments[5].substring(arguments[5].length - 1)).value;
			if (prd_lim == 'N') {
				alert("회원전용 상품입니다");
				return;
			} else {
				if (parseInt(cnt, 10) > parseInt(prd_lim, 10)) {
					alert("구매가능 수량을 초과하셨습니다.");
					return;
				}
			}
		}
		frm.quantity.value = cnt;
		frm.prd_cd.value = arguments[3]; // 상품입력
	} else if ((locat_ck == "CT")) {
		cnt = document.getElementById(arguments[5]).value;
		frm = document.frmToday;
		var prd_lim;
		if (document.getElementById("prd_lim" + arguments[5].substring(arguments[5].length - 1))) {
			prd_lim = document.getElementById("prd_lim" + arguments[5].substring(arguments[5].length - 1)).value;
			if (prd_lim == 'N') {
				alert("회원전용 상품입니다");
				return;
			} else {
				if (parseInt(cnt, 10) > parseInt(prd_lim, 10)) {
					alert("구매가능 수량을 초과하셨습니다.");
					return;
				}
			}
		}
		frm.quantity.value = cnt;
		frm.prd_cd.value = arguments[3]; // 상품입력
	} else if ((locat_ck == "C")) {
		frm.quantity.value = num;
		frm.prd_cd.value = arguments[3]; // 상품입력
	} else if ((locat_ck == "CO")) {
		if (!(onChkCheckBox() && onChkCheckBox())) {
			alert("상품을 선택하세요.");
			return;
		}
	} else if (locat_ck == "W") {
		if (!onChkCheckBox()) {
			alert("상품을 선택하세요.");
			return;
		}
	}

	// var bgs = document.createElement("div");
	// bgs.setAttribute("id","for_toSCart");
	// document.body.appendChild(bgs);
	// document.getElementById("for_toSCart").style.height=document.body.offsetHeight+"px";
	var div = document.createElement("div");
	div.setAttribute("id", "toSCart");
	document.body.appendChild(div);
	if (window.pageXOffset != undefined) {// IE9이상
		document.getElementById("toSCart").style.top = ((50 - window.innerHeight) / 2 * -1 + window.pageYOffset) + "px";
		document.getElementById("toSCart").style.left = ((300 - window.innerWidth) / 2 * -1) + "px";
	} else {
		document.getElementById("toSCart").style.top = ((50 - document.documentElement.clientHeight) / 2 * -1 + document.documentElement.scrollTop) + "px";
		document.getElementById("toSCart").style.left = ((300 - document.documentElement.clientWidth) / 2 * -1) + "px";
	}

	var bus1 = document.createElement("input");
	bus1.setAttribute("type", "button");
	bus1.setAttribute("title", "계속 쇼핑하기");
	bus1.setAttribute("id", "stiShop");
	div.appendChild(bus1);
	if (locat_ck == undefined) {
		goCart('2', num, 'N');
	} else if (locat_ck == "C3" || locat_ck == "C" || locat_ck == "CT") {
		frm.target = "tmpFrame";
		frm.action = "/small/cart/addproduct_cart_no.jsp";
		frm.submit();
	} else if (locat_ck == "CO") {
		document.form1.target = "tmpFrame";
		document.form1.action = "/small/cart/addproduct_cart_multi_prdcd.jsp?h_flag=N";
		document.form1.submit();
	} else if (locat_ck == "W") {
		document.form1.target = "tmpFrame";
		document.form1.action = "/small/mypage/my_cart_tocart.jsp?h_flag=N";
		document.form1.submit();
	}
	document.getElementById("stiShop").onclick = function() {
		/*
		 * if(locat_ck==undefined){goCart('2',num,'N'); }else
		 * if(locat_ck=="C3"||locat_ck=="C"){ document.form1.target =
		 * "tmpFrame";document.form1.action =
		 * "/small/cart/addproduct_cart_no.jsp";document.form1.submit(); }else
		 * if(locat_ck=="CO"){ document.form1.target =
		 * "_self";document.form1.action =
		 * "/small/cart/addproduct_cart_multi_prdcd.jsp?h_flag=N";document.form1.submit();
		 * }else if(locat_ck=="W"){ document.form1.target =
		 * "tmpFrame";document.form1.action =
		 * "./my_cart_tocart.jsp?h_flag=N";document.form1.submit(); }
		 */
		// document.body.removeChild(document.getElementById("for_toSCart"));
		document.body.removeChild(document.getElementById("toSCart"));
	};
	var bus2 = document.createElement("input");
	bus2.setAttribute("type", "button");
	bus2.setAttribute("title", "장바구니로 이동");
	bus2.setAttribute("id", "gotCart");
	div.appendChild(bus2);
	document.getElementById("gotCart").onclick = function() {
		/*
		 * if(locat_ck==undefined){goCart('2',num,'Y'); }else
		 * if(locat_ck=="C3"||locat_ck=="C"){document.form1.target =
		 * "tmpFrame";document.form1.action =
		 * "/small/cart/addproduct_cart_yes.jsp";document.form1.submit(); }else
		 * if(locat_ck=="CO"){ document.form1.target =
		 * "_self";document.form1.action =
		 * "/small/cart/addproduct_cart_multi_prdcd.jsp?h_flag=Y";document.form1.submit();
		 * }else if(locat_ck=="W"){ document.form1.target =
		 * "tmpFrame";document.form1.action =
		 * "./my_cart_tocart.jsp?h_flag=Y";document.form1.submit(); }
		 */
		// document.body.removeChild(document.getElementById("for_toSCart"));
		parent.location.href = "/small/cart/shoppinglist.jsp";
		document.body.removeChild(document.getElementById("toSCart"));
	};

	if (window.pageXOffset != undefined) {// IE9이상
		document.body.onresize = function() {
			if (document.getElementById("toSCart") == undefined) {
			} else {
				document.getElementById("toSCart").style.top = ((50 - window.innerHeight) / 2 * -1 + window.pageYOffset) + "px";
				document.getElementById("toSCart").style.left = ((300 - window.innerWidth) / 2 * -1) + "px";
			}
		};
		window.onscroll = function() {
			if (document.getElementById("toSCart") == undefined) {
			} else {
				document.getElementById("toSCart").style.top = ((50 - window.innerHeight) / 2 * -1 + window.pageYOffset) + "px";
			}
		};
	} else {// IE9이하
		document.body.onresize = function() {
			if (document.getElementById("toSCart") == undefined) {
			} else {
				document.getElementById("toSCart").style.top = ((267 - document.documentElement.clientHeight) / 2 * -1 + document.documentElement.scrollTop)
						+ "px";
				document.getElementById("toSCart").style.left = ((300 - document.documentElement.clientWidth) / 2 * -1) + "px";
			}
		};
		document.documentElement.onscroll = function() {
			if (document.getElementById("toSCart") == undefined) {
			} else {
				document.getElementById("toSCart").style.top = ((267 - document.documentElement.clientHeight) / 2 * -1 + document.documentElement.scrollTop)
						+ "px";
			}
		};
	}

}