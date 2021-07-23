//HttpRequest 객체 생성
function getXMLHttpRequest(){
	if(window.XMLHttpRequest){//IE 이외의 XMLHttpRequest 객체 구하기(파이어폭그, 오페라등)
		return new XMLHttpRequest();
	} else if(window.ActiveXObject){//IE에서 XMLHttpRequest 객체 구하기
		try{
			return new ActiveXObject("Msxml2.XMLHTTP");//Microsoft.XMLHTTP 보다 최신버전이기 때문에 먼저 객체생성을 시도한다.
		}catch(ex){
			try{
				return new ActiveXObject("Microsoft.XMLHTTP");
			}catch(ex1){
				return null;
			}
		}
	} else {
		return null;
	}
}// End Function


//일반적인 페이지 콜 GET 방식
function call_normal_ajax_get(ElementById,url){
	 var xmlHttp=getXMLHttpRequest(); // XMLHttpRequest 값 생성

	if (xmlHttp==null)
	  {
	  alert ("Your browser does not support AJAX!");
	  return;
	  }

		xmlHttp.onreadystatechange=function(){stateChanged(xmlHttp,ElementById)}; // 콜백함수를 여러곳에서 사용하도록 한다.
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
}// End Function

/**
*  화면에 뿌리기
*/
function stateChanged(xmlHttp,ElementById)
{
	if (xmlHttp.readyState==4){ // 서버에서 작업이 완료
	  if (xmlHttp.status==200){ //요청성공
		  //403 접근 거부  //404 페이지 없음 //500 서버 오류
			document.getElementById(ElementById).innerHTML=xmlHttp.responseText;
		}
	}
}// End function


//일반적인 페이지 콜[ajaxFormAction(삽입객체,URL)]
	function call_ajax(ElementById,url,call_f){

		var HttpRequest = getXMLHttpRequest();

		if(url){
			HttpRequest.open("POST", url, true);

			HttpRequest.onreadystatechange = function() {

				if(typeof(HttpRequest) =="object"){
					if(HttpRequest.readyState == 4 && HttpRequest.status == 200){
							var respTxt = HttpRequest.responseText;
							ajaxParseAction(respTxt,ElementById,call_f);
	//						document.getElementById(ElementById).innerHTML = respTxt;

							HttpRequest = null; // <-- 이곳에 추가
							respTxt = null;
					}
				}

			}
			HttpRequest.send(null);

		}


	}

//폼객체 용 페이지 호출[ajaxFormAction(폼객체, 삽입객체)]

	// AJAX POST SEND
	var ajaxFormProcessing = false;
	var ajaxProcessing = false;
	var ajaxXmlHttp = null;
	var ajaxForm = null;
	var ajaxElementById = null;


	function ajaxFormAction(form,ElementById,call_f) {

		if (ajaxFormProcessing) {
			alert("현재 처리중입니다.");
			return;
		}

		ajaxForm = form;
//		ajaxElementById = ElementById;
		ajaxFormProcessing = true;
	//	alert("확인")

		var inputObjs = form.getElementsByTagName("input");
		var param = "";
		for(var i=0;i<inputObjs.length;i++) {
			var inputObj = inputObjs[i];

			if (inputObj.name && inputObj.value) {
				if (inputObj.type == "text" || inputObj.type == "hidden" || inputObj.type == "password") {
					param += inputObj.name + "=" + encodeURIComponent(inputObj.value) + "&";
				}
				else if (inputObj.type == "radio" || inputObj.type == "checkbox") {
					if (inputObj.checked)
						param += inputObj.name + "=" + encodeURIComponent(inputObj.value) + "&";
				}
			}
		}

		var selectObjs = form.getElementsByTagName("select");

		for(var i=0;i<selectObjs.length;i++) {
			var selectObj = selectObjs[i];

			if (selectObj.name && selectObj.value) {
				param += selectObj.name + "=" + encodeURIComponent(selectObj.value) + "&";
			}
		}

		var textAreaObjs = form.getElementsByTagName("textarea");
		for(var i=0;i<textAreaObjs.length;i++) {
			if (textAreaObjs[i].name && textAreaObjs[i].value) {
				param += textAreaObjs[i].name + "=" + encodeURIComponent(textAreaObjs[i].value) + "&";
			}
		}

		param += "1=1";

		ajaxAction(param,ElementById,call_f);

		return false;

	}

	function ajaxAction(param,ElementById,call_f) {
		if (ajaxProcessing) {
			alert("현재 처리중입니다.");
			return;
		}


		ajaxProcessing = true;
		ajaxXmlHttp = getXMLHttpRequest();
		ajaxXmlHttp.onreadystatechange = function() {
			if (ajaxXmlHttp.readyState == 4) {
				if(ajaxXmlHttp.status == 200) {
					var respTxt = ajaxXmlHttp.responseText;

					ajaxProcessing = false;
					ajaxFormProcessing = false;

					ajaxParseAction(respTxt,ElementById,call_f);

				} else {
				}

			}
		}

		ajaxXmlHttp.open("POST",ajaxForm.action,true);
		ajaxXmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
		ajaxXmlHttp.setRequestHeader("Content-length", param.length);
		ajaxXmlHttp.setRequestHeader("Connection", "close");
		ajaxXmlHttp.send(param);






	}


	function ajaxParseAction(xmlObj,ElementById,call_f) {
	// 넘어온 xmlObj 로 결과 처리 해 주면 된다.
	//				alert(respTxt);
	//				div_List.insertAdjacentHTML = respTxt;
	//				div_List.innerHTML=respTxt;
	//				alert(document.getElementById(ajaxElementById));

						document.getElementById(ElementById).innerHTML =xmlObj;
//					alert(document.getElementById(ajaxElementById).innerHTML);
//						alert("로딩완료");

					if(call_f !=null && call_f != ""){

//							document.getElementById(ajaxElementById).innerText =xmlObj;
							(new Function(call_f))();


//							ajaxCallF=null;
					}

					xmlObj=null;
	}



//일반적인 페이지 콜[ajaxFormAction(삽입객체,URL)]
	function call_ajax_combo(ElementById,url,call_f){

		var HttpRequest = getXMLHttpRequest();

		if(url){
			HttpRequest.open("POST", url, true);

			HttpRequest.onreadystatechange = function() {

				if(typeof(HttpRequest) =="object"){
					if(HttpRequest.readyState == 4 && HttpRequest.status == 200){
						var respTxt = HttpRequest.responseXML;	
						ajaxParseComboAction(respTxt,ElementById,call_f);

						HttpRequest = null; // <-- 이곳에 추가
					}
				}

			}
			HttpRequest.send(null);

		}


	}


	function ajaxParseComboAction(xmlObj,ElementById,call_f) {

			if(ElementById){
					if(ElementById == "FOR_TABBAR"){
						f_Call_Parsing_TabData(xmlObj);
					}else{
						//서버처리 중 exception 발생
						if (xmlObj.getElementsByTagName("error").length > 0) {
							return;
						}

						//기존의 option들 지우기
						
						while ($(ElementById).length > 0) {
							$(ElementById).options[0] = null;
						}

						//공백 option 추가
						$(ElementById).options[0] = new Option("-- 전체 --", "");

						var value = "", text = "";
						var received_cnt = 0;
						
						//수신받은 레코드 수 얻기
						if (typeof("code") == "string")
							received_cnt = xmlObj.getElementsByTagName("code").length;

						//조회 결과를 option으로 추가
						for (var i = 0; i < received_cnt; i++) {
							value = "";
							text = "";
							
							//value가 string인  경우의 처리 (xDoc의 단일 elements가  value 임)
							if (typeof("code") == "string") {
								var tagObject = xmlObj.getElementsByTagName("code")[i].firstChild;
								if (tagObject != null) {
									if (tagObject.nodeValue != null)
										value = tagObject.nodeValue;
								}
							} 
							
							
							//value가 string인  경우의 처리 (xDoc의 단일 elements가  value 임)
							if (typeof("code_nm") == "string") {
								var tagObject = xmlObj.getElementsByTagName("code_nm")[i].firstChild;
								if (tagObject != null) {
									if (tagObject.nodeValue != null)
										text = tagObject.nodeValue;
								}
							}
							
							$(ElementById).options[$(ElementById).options.length] = new Option(text, value); 
						}
					

						if(call_f !=null && call_f != ""){
							(new Function(call_f))();
						}
					}
			}
	}
