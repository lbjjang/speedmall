function pageList(page){
	document.form2.currentPage.value=page;
	document.form2.submit();
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