	self.onError=null;
	currentX = currentY = 0; 
	whichIt = null; 
	lastScrollX = 0; 
	lastScrollY = -100;
	NS = (document.layers) ? 1 : 0;
	IE = (document.all) ? 1: 0;
	
	//var limitY; --- 2008.03.04 임시작업

	var tmp1= tmp2= tmp3 =0;
	tmp1 = document.body.clientHeight;
	

// 바로가기
function onQuick(chkid,flag){

	if(flag=="concern"){
		v_go_url="/small/cart/concern_list.jsp";
	}else if(flag=="order"){
		v_go_url="/small/mypage/mypage_order.jsp";
	}

	if(onLogIn(chkid)){
		this.location.href=v_go_url;
	}else{
		alert("해당 기능은 로그인을 하신후 사용하실 수 있습니다.");	
		this.location.href="/small/login/login.jsp?screen_flag="+v_go_url;		//ehBang 20080523 로그인후 이동페이지 저장
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
  			diffY = document.body.scrollTop-100; //스크롤이 더이상 내려가지 않게 하기 위해서 수정  
  			diffX = 0;
  		}
  		
 		if(NS){ 
  			diffY = self.pageYOffset;
  			diffX = self.pageXOffset; 
  		}

		//if(diffY > limitY) diffY=limitY; -- 2008.03.04 임시작업

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
	* 스크롤의 이벤트를 받는곳
	*/
	if(NS || IE) action = window.setInterval("moveBox()",1);
	
	//window.onload = function() { -- 2008.03.04 임시작업
    //limitY = document.body.scrollHeight - parseInt(document.all.scrollmenu.style.height) - parseInt(document.all.scrollmenu.style.top);
//}

