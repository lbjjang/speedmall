// 2002/40/11 �赵��.
// ��¥ ����Ʈ��ü�� �ɼ��� ����� �Լ�.
// ȣ���ϴ� �������� yy, mm, dd�� �ý����� ��¥�� ������ �־�� ��.

function make_select_option_of_date(date_type, edate){
	var to_date, from_date;
	var destination_form = document.form1;
	var yy, mm, dd;
	yy = destination_form.yy.value;
	mm = destination_form.mm.value -1;
	dd = destination_form.dd.value;

	//alert(yy +""+mm+""+dd+""+date_type);
	if (date_type=="001")  to_date = new Date(yy,mm,0);
	else if (date_type=="002")  to_date = new Date(yy,mm+1,0);
	else to_date = new Date(yy, mm, dd);

	if (date_type=="001")  from_date = new Date(yy,mm -1,1); 
	if (date_type=="002")  from_date = new Date(yy,mm,1); 

// ���� 1����
	if (date_type=="003") from_date = new Date(yy,mm,dd-6);
// ���� 1����
	if (date_type=="004") from_date = new Date(yy,mm -1,dd);
// ���� 3����
	if (date_type=="005") from_date = new Date(yy,mm -3,dd);
// ����6����
	if (date_type=="006") from_date = new Date(yy,mm -6,dd);
// ���� 1��
	if (date_type=="007") from_date = new Date(yy-1,mm,dd);
// ���� 1��
	if (date_type=="008") from_date = new Date(yy,mm,dd-1);
	if (date_type=="ACC"){
		from_date = new Date(yy,mm-1,26);
		to_date = new Date(yy,mm,25);
	}



	//alert(from_date.getYear()+"/"+from_date.getMonth()+"/"+from_date.getDate());
	if (date_type.length == 8) {from_date = new Date(date_type.substring(0, 4), date_type.substring(4, 6) -1, date_type.substring(6, 8));
	}
	if (typeof(edate) == "string" && edate.length == 8) {to_date = new Date(edate.substring(0, 4), edate.substring(4, 6) -1, edate.substring(6, 8));
	}

	var dd1E, dd2E;
	var df1E = new Date(from_date.getYear(), from_date.getMonth() +1, 0);	
	dd1E = df1E.getDate();
	var df2E = new Date(to_date.getYear(), to_date.getMonth() +1, 0);	
	dd2E = df2E.getDate();
	//alert(from_date.getYear()+"/"+from_date.getMonth()+"/"+from_date.getDate());
	for(var i = 0; i < destination_form.dd1.length -1; i++){
		destination_form.dd1.options[i] = null;
	}
	for(var i = 0; i < destination_form.dd2.length -1; i++){
		destination_form.dd2.options[i] = null;
	}

	var fYY=2007;
	var lYY=2015;
	for(var i = fYY; i < lYY; i++){
		var option1 = new Option(""+i, ""+i);
		destination_form.yy1.options[i-fYY] = option1;
		if(from_date.getFullYear() == i) destination_form.yy1.options[i-fYY].selected = true;
		option1 = new Option(""+i, ""+i);
		destination_form.yy2.options[i-fYY] = option1;
		if(to_date.getFullYear() == i) destination_form.yy2.options[i-fYY].selected = true;
	}
	for(var i = 1; i < 13; i++){
		var option1 = new Option(""+i, ""+i);
		destination_form.mm1.options[i-1] = option1;
		if((from_date.getMonth()+1) == i) {destination_form.mm1.options[i-1].selected = true;
		}
		option1 = new Option(""+i, ""+i);
		destination_form.mm2.options[i-1] = option1;
		if((to_date.getMonth()+1) == i) destination_form.mm2.options[i-1].selected = true;
	}
	for(var i = 1; i < (dd1E+1); i++){
		var option1 = new Option(""+i, ""+i);
		destination_form.dd1.options[i-1] = option1;
		if(from_date.getDate() == i) destination_form.dd1.options[i-1].selected = true;
	}
	for(var i = 1; i < (dd2E+1); i++){
		var option1 = new Option(""+i, ""+i);
		destination_form.dd2.options[i-1] = option1;
		if(to_date.getDate() == i) destination_form.dd2.options[i-1].selected = true;
	}	
}
