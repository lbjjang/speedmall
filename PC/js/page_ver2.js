/*
  ȭ���� ������ �̵��� ����ϴ� ��ũ��Ʈ
*/

/*
* ��ü�������� �̵�
@param page : �������� ������ ����Ų��. ( 1,2,3... )
*/
function pageList(page){
	document.form1.action="https://www.speedmall.co.kr/small/search/search_result_ver2.jsp";
 	document.form1.target="";
	document.form1.currentPage.value=page;
	document.form1.submit();
}

/*
// Div ��ġ�� �̵��Ѵ�.
@param divNm : div�̸�
@param strUrl : �̵��� Url ��ü��� ( �Ķ���� ���� )
@param para1 : �ӽ÷� ���� ���� parameter
@param para2 : �ӽ÷� ���� ���� parameter2
*/

function pageList_Div(page,  divNm, strUrl, para1, para2){
	//document.form1.currentPage.value=page; // �������� ��ġ
	document.getElementById(divNm).value=page; // �������� ��ġ
	var v_url=strUrl; // ������ Url �� �޴´�.
	v_url = v_url+"&currentPage="+page; // url�� ������ ��ġ�� �޴´�.
	call_ajax(divNm,v_url,"");	 // ȭ�� ȣ��
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