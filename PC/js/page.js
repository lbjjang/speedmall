/*
  ȭ���� ������ �̵��� ����ϴ� ��ũ��Ʈ
*/

/*
* ��ü�������� �̵�
@param page : �������� ������ ����Ų��. ( 1,2,3... )
*/
function pageList(page){
	document.form1.currentPage.value=page;
	///R20120827-0006
	if((document.getElementById("flvi")!="")&&(document.getElementById("flvi")!="undefined")&&(document.getElementById("flvi")!=null)){
		document.form1.flag.value=document.getElementById("flvi").value;
	}
	document.form1.submit();
}

/*
 * ��ü�������� �̵�
@param page : �������� ������ ����Ų��. ( 1,2,3... )
 */
function pageList3(page){
	document.form1.currentPage.value=page;
	f_Call_List();
}



/*
// Div ��ġ�� �̵��Ѵ�.
@param divNm : div�̸� 
@param strUrl : �̵��� Url ��ü��� ( �Ķ���� ���� ) 
@param para1 : �ӽ÷� ���� ���� parameter
@param para2 : �ӽ÷� ���� ���� parameter2
*/

function pageList_Div(page,  divNm, strUrl, para1, para2){
	//alert("page:"+page+"/"+"divNm:"+divNm+"/"+"strUrl:"+strUrl+"/"+"para1:"+para1+"/"+"para2:"+para2+"/");
	//document.form1.currentPage.value=page; // �������� ��ġ
	document.getElementById(divNm).value=page; // �������� ��ġ
	var v_url=strUrl; // ������ Url �� �޴´�.
	if(v_url.indexOf("?")>=0){
		//�ڿ� ? �����
		v_url = v_url+"&currentPage="+page; // url�� ������ ��ġ�� �޴´�.
	}else{
		//�ڿ� ? �������
		v_url = v_url+"?currentPage="+page; // url�� ������ ��ġ�� �޴´�.
	}
	//alert("v_url::"+v_url);
	call_ajax(divNm,v_url,"");	 // ȭ�� ȣ��
	//alert("end");
}


function pageList2(obj_form, page){
	obj_form.currentPage.value=page;
	obj_form.submit();
}

function nextPage(obj_form, url){
	obj_form.action = url;
	obj_form.submit();
}

function nextPage02(obj_form, obj_text, value, url){
	obj_text.value = value;
	obj_form.action = url;
	obj_form.submit();
}

