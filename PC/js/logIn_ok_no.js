// ��ٱ��Ϲٷΰ���
function onCart(chkid){
	/**
	* 2008-04-23 dhkim  �α������� �ʰ� ��밡��
	*/
	//this.location.href="https://www.speedmall.co.kr/small/cart/shoppinglist.jsp";
	//this.location.href="/small/cart/shoppinglist.jsp";

	/*
	if(onLogIn(chkid)){
		this.location.href="/small/cart/shoppinglist.jsp";
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");	
	}
	*/
}

function onPerson(chkid){
	v_go_url = "/small/mypage/mypage_cinfo_modify.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");	
		this.location.href="/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
	}
}

function onpasswd(chkid){
	v_go_url = "/small/mypage/mypage_cinfo_modify.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		this.location.href="/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
	}
}

function onOut(chkid){
	v_go_url = "/small/mypage/member_out.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		this.location.href="/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
	}
}

function onSearch(chkid){
	v_go_url = "/small/login/idpw_search.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		this.location.href="/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
	}
}

// �ֹ���ȸ�ٷΰ���
function onJumunInquiry(chkid,num){
	v_go_url = "https://www.speedmall.co.kr/small/mypage/mypage_order.jsp";
	if(onLogIn(chkid)){
		//alert("�۾���");
		if(num==null || num=="" || num==1){
			this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_order.jsp";
		}else if(num==2){
			this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_endorder.jsp";
		}else if(num==3){
			this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_returnorder.jsp";
		}else if(num==4){
			this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_returnendorder.jsp";
		}else if(num==5){
			this.location.href="https://www.speedmall.co.kr/small/mypage/mypage_ordercancel.jsp";
		}else if(num==6){
			this.location.href="https://www.speedmall.co.kr/small/login/login.jsp";
		}
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		this.location.href="https://www.speedmall.co.kr/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
	}
}

function onInfo(chkid){
	v_go_url = "/small/mypage/mypage_cinfo_modify.jsp";
	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		this.location.href="/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
	}
}


function onPage(chkid){

	v_go_url = "/small/mypage/mypage_home.jsp";

	if(onLogIn(chkid)){
		this.location.href= v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");
		this.location.href="/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
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