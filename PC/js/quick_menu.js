	self.onError=null;
	currentX = currentY = 0; 
	whichIt = null; 
	lastScrollX = 0; 
	lastScrollY = -100;
	NS = (document.layers) ? 1 : 0;
	IE = (document.all) ? 1: 0;
	
	//var limitY; --- 2008.03.04 �ӽ��۾�

	var tmp1= tmp2= tmp3 =0;
	tmp1 = document.body.clientHeight;
	

// �ٷΰ���
function onQuick(chkid,flag){

	if(flag=="concern"){
		v_go_url="/small/cart/concern_list.jsp";
	}else if(flag=="order"){
		v_go_url="/small/mypage/mypage_order.jsp";
	}

	if(onLogIn(chkid)){
		this.location.href=v_go_url;
	}else{
		alert("�ش� ����� �α����� �Ͻ��� ����Ͻ� �� �ֽ��ϴ�.");	
		this.location.href="/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 �α����� �̵������� ����
	}

}

	function moveBox() {
 		tmp2 = document.body.clientHeight;
 		
 		if(tmp1 != tmp2){
  			tmp3 =  tmp2 - tmp1; 
  			tmp1 = tmp2;
  			
  			if(tmp3 < 0){
  				//
  			}
 		}
 		
 		if(IE){ 
  			diffY = document.body.scrollTop-100; //��ũ���� ���̻� �������� �ʰ� �ϱ� ���ؼ� ����  
  			diffX = 0;
  		}
  		
 		if(NS){ 
  			diffY = self.pageYOffset;
  			diffX = self.pageXOffset; 
  		}

		//if(diffY > limitY) diffY=limitY; -- 2008.03.04 �ӽ��۾�

 		if(diffY != lastScrollY){
  			percent = .1 * (diffY - lastScrollY);
  
	  		if(percent > 0) 
	   			percent = Math.ceil(percent);
	  		else 
	   			percent = Math.floor(percent);
	  
	  		if(IE){
	   			document.all.scrollmenu.style.pixelTop += percent;
	   			//alert(document.all.scrollmenu.style.pixelTop);
	   			//alert(lastScrollY);
	   		}
	  		
	  		if(NS) 
	   			document.scrollmenu.top += percent; 
	  
  			lastScrollY = lastScrollY + percent;
 		}

		if(diffX != lastScrollX){
	  		percent = .1 * (diffX - lastScrollX);
	 
	  		if(percent > 0) 
	   			percent = Math.ceil(percent);
	  		else 
	   			percent = Math.floor(percent);
	  
	  		if(IE) document.all.scrollmenu.style.pixelLeft += percent;
	  	
	  		if(NS) document.scrollmenu.top += percent;
	  	
	  		lastScrollY = lastScrollY + percent;
	 	} 
	}

	/**
	* ��ũ���� �̺�Ʈ�� �޴°�
	*/
	if(NS || IE) action = window.setInterval("moveBox()",1);
	
	//window.onload = function() { -- 2008.03.04 �ӽ��۾�
    //limitY = document.body.scrollHeight - parseInt(document.all.scrollmenu.style.height) - parseInt(document.all.scrollmenu.style.top);
//}

