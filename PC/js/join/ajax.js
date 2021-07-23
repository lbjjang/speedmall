//HttpRequest ��ü ����
function getXMLHttpRequest(){
	if(window.XMLHttpRequest){//IE �̿��� XMLHttpRequest ��ü ���ϱ�(���̾�����, ������)
		return new XMLHttpRequest();
	} else if(window.ActiveXObject){//IE���� XMLHttpRequest ��ü ���ϱ�
		try{
			return new ActiveXObject("Msxml2.XMLHTTP");//Microsoft.XMLHTTP ���� �ֽŹ����̱� ������ ���� ��ü������ �õ��Ѵ�.
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


//�Ϲ����� ������ �� GET ���
function call_normal_ajax_get(ElementById,url){
	 var xmlHttp=getXMLHttpRequest(); // XMLHttpRequest �� ����

	if (xmlHttp==null)
	  {
	  alert ("Your browser does not support AJAX!");
	  return;
	  }

		xmlHttp.onreadystatechange=function(){stateChanged(xmlHttp,ElementById)}; // �ݹ��Լ��� ���������� ����ϵ��� �Ѵ�.
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
}// End Function

/**
*  ȭ�鿡 �Ѹ���
*/
function stateChanged(xmlHttp,ElementById)
{
	if (xmlHttp.readyState==4){ // �������� �۾��� �Ϸ�
	  if (xmlHttp.status==200){ //��û����
		  //403 ���� �ź�  //404 ������ ���� //500 ���� ����
			document.getElementById(ElementById).innerHTML=xmlHttp.responseText;
		}
	}
}// End function


//�Ϲ����� ������ ��[ajaxFormAction(���԰�ü,URL)]
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

							HttpRequest = null; // <-- �̰��� �߰�
							respTxt = null;
					}
				}

			}
			HttpRequest.send(null);

		}


	}

//����ü �� ������ ȣ��[ajaxFormAction(����ü, ���԰�ü)]

	// AJAX POST SEND
	var ajaxFormProcessing = false;
	var ajaxProcessing = false;
	var ajaxXmlHttp = null;
	var ajaxForm = null;
	var ajaxElementById = null;


	function ajaxFormAction(form,ElementById,call_f) {

		if (ajaxFormProcessing) {
			alert("���� ó�����Դϴ�.");
			return;
		}

		ajaxForm = form;
//		ajaxElementById = ElementById;
		ajaxFormProcessing = true;
	//	alert("Ȯ��")

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
			alert("���� ó�����Դϴ�.");
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
	// �Ѿ�� xmlObj �� ��� ó�� �� �ָ� �ȴ�.
	//				alert(respTxt);
	//				div_List.insertAdjacentHTML = respTxt;
	//				div_List.innerHTML=respTxt;
	//				alert(document.getElementById(ajaxElementById));

						document.getElementById(ElementById).innerHTML =xmlObj;
//					alert(document.getElementById(ajaxElementById).innerHTML);
//						alert("�ε��Ϸ�");

					if(call_f !=null && call_f != ""){

//							document.getElementById(ajaxElementById).innerText =xmlObj;
							(new Function(call_f))();


//							ajaxCallF=null;
					}

					xmlObj=null;
	}



//�Ϲ����� ������ ��[ajaxFormAction(���԰�ü,URL)]
	function call_ajax_combo(ElementById,url,call_f){

		var HttpRequest = getXMLHttpRequest();

		if(url){
			HttpRequest.open("POST", url, true);

			HttpRequest.onreadystatechange = function() {

				if(typeof(HttpRequest) =="object"){
					if(HttpRequest.readyState == 4 && HttpRequest.status == 200){
						var respTxt = HttpRequest.responseXML;	
						ajaxParseComboAction(respTxt,ElementById,call_f);

						HttpRequest = null; // <-- �̰��� �߰�
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
						//����ó�� �� exception �߻�
						if (xmlObj.getElementsByTagName("error").length > 0) {
							return;
						}

						//������ option�� �����
						
						while ($(ElementById).length > 0) {
							$(ElementById).options[0] = null;
						}

						//���� option �߰�
						$(ElementById).options[0] = new Option("-- ��ü --", "");

						var value = "", text = "";
						var received_cnt = 0;
						
						//���Ź��� ���ڵ� �� ���
						if (typeof("code") == "string")
							received_cnt = xmlObj.getElementsByTagName("code").length;

						//��ȸ ����� option���� �߰�
						for (var i = 0; i < received_cnt; i++) {
							value = "";
							text = "";
							
							//value�� string��  ����� ó�� (xDoc�� ���� elements��  value ��)
							if (typeof("code") == "string") {
								var tagObject = xmlObj.getElementsByTagName("code")[i].firstChild;
								if (tagObject != null) {
									if (tagObject.nodeValue != null)
										value = tagObject.nodeValue;
								}
							} 
							
							
							//value�� string��  ����� ó�� (xDoc�� ���� elements��  value ��)
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
