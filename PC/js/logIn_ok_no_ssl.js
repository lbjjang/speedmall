// ��ٱ��Ϲٷΰ���
function onCart(chkid){
	/**
	* 2008-04-23 dhkim  �α������� �ʰ� ��밡��
	*/
	//this.location.href="https://www.speedmall.co.kr/small/cart/shoppinglist.jsp";
	this.location.href="/small/cart/shoppinglist.jsp";

	/*
	if(onLogIn(chkid)){
		this.location.href="/small/cart/shoppinglist.jsp";
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");	
	}
	*/
}

function onPerson(chkid){
	//v_go_url = "https://www.speedmall.co.kr/small/mypage/mypage_cinfo_modify.jsp";
	v_go_url = "/small/mypage/mypage_cinfo_modify.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");	
		//this.location.href="https://www.speedmall.co.kr/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
		showLoginPopup(v_go_url);
	}
}

function onpasswd(chkid){
	//v_go_url = "https://www.speedmall.co.kr/small/mypage/mypage_cinfo_modify.jsp";
	v_go_url = "/small/mypage/mypage_cinfo_modify.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		//this.location.href="https://www.speedmall.co.kr/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
		showLoginPopup(v_go_url);
	}
}

function onOut(chkid){
	//v_go_url = "https://www.speedmall.co.kr/small/mypage/member_out.jsp";
	v_go_url = "/small/mypage/member_out.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		//this.location.href="https://www.speedmall.co.kr/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
		showLoginPopup(v_go_url);
	}
}

function onSearch(chkid){
	//v_go_url = "https://www.speedmall.co.kr/small/login/idpw_search.jsp";
	v_go_url = "/small/login/idpw_search.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		//this.location.href="https://www.speedmall.co.kr/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
		showLoginPopup(v_go_url);
	}
}


// �ֹ���ȸ�ٷΰ���
function onJumunInquiry(chkid,num){
	v_go_url = "/small/mypage/mypage_order.jsp";
	if(onLogIn(chkid)){
		//alert("�۾���");
		if(num==null || num=="" || num==1){
			//this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_order.jsp";
			this.location.href="/small/mypage/mypage_order.jsp";
		}else if(num==2){
			//this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_endorder.jsp";
			this.location.href="/small/mypage/mypage_endorder.jsp";
		}else if(num==3){
			//this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_returnorder.jsp";
			this.location.href="/small/mypage/mypage_returnorder.jsp";
		}else if(num==4){
			//this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_returnendorder.jsp";
			this.location.href="/small/mypage/mypage_returnendorder.jsp";
		}else if(num==5){
			//this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_ordercancel.jsp";
			this.location.href="/small/mypage/mypage_ordercancel.jsp";
		}else if(num==6){
			showLoginPopup(v_go_url);
		}
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		//this.location.href="https://www.speedmall.co.kr/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
		showLoginPopup(v_go_url);
	}
}

function onInfo(chkid){
	//v_go_url = "https://www.speedmall.co.kr/small/mypage/mypage_cinfo_modify.jsp";
	v_go_url = "/small/mypage/mypage_cinfo_modify.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		//this.location.href="https://www.speedmall.co.kr/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
		showLoginPopup(v_go_url);
	}
}


function onPage(chkid){

	v_go_url = "/small/mypage/mypage_home.jsp";

	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		//this.location.href="https://www.speedmall.co.kr/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
		showLoginPopup(v_go_url);
	}
}


// �α��ο����Ǵ�
function onLogIn(chkid){
	if(chkid){
		return true;
	}else{
		return false;
	}
}