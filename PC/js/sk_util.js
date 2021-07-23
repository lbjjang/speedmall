/*
 * @(#)sknet_util.js       1.0    2006/03/10
 *
 * Copyright 2006-2006 MROKOREA, co. All Rights Reserved.
 *
 */
 //20061019 correct comma insert error parkth

/**
 * curr_date()													현재 일자를 가져오는 내부 function
 * RemoveSlashEdit(Object)                             			날짜 input 박스 선택시 RemoveSlash  예) YYYY/MM/DD -> YYYYMMDD
 * RemoveHypenEdit(Object)                             			날짜 input 박스 선택시 RemoveHypen  예) 123456-1234567 -> 1234561234567
 * isFieldBlank(Object)                                			필드가 블랭크인지를 체크하는 함수
 * isFieldNull(Object, String)                         			필드가 블랭크인지를 체크하는 함수
 * RemoveSlash(String)                                 			문자열의 Slash 를 제거하는 함수
 * RemoveHypen(String)                                 			문자열의 Hypen 을 제거하는 함수

 * trimstr(value)                                      			문자열의 앞뒤 space를 제거한다.
 * setIME(value)                                       			한영자동변환
 * checkKey(f)                                              	필수입력 체크 f : form 명

 * isNumeric(Object)                                   			필드가 숫자인지를 체크하는 함수
 * containsElement(keycd)                                   	delete키와 그밖에 backspace키를 거르기 위한 함수
 * token(Object)                                       			값의 타입을 체크 하는 함수
 * isDigit(num)                                        			값이 숫자 인지 체크하는 함수
 * ischkNumber(Object)                                   		필드가 숫자인지를 체크하는 함수
 * ischkFloatNumber(Object)                                 필드가 소수점 숫자인지를 체크하는 함수
 * isNumber(numValue)                                  			숫자 체크 루틴
 * isNumberDash(numValue)                                   숫자 체크 루틴
 * isNumberFloat(numValue)                                  소수점 숫자 체크 루틴

 * isPointNumber(Object)                               			소숫점체크 함수
 * check_float(Object)                                 			콤마를 제거한 후 숫자를 체크 함수      수치(000,000.00)
 * check_digit(Object)                                 			콤마를 제거한 후 숫자를 체크 함수      수치(000,000)
 * InsertComma(Object)                                 			숫자에 콤마를 넣는 함수
 * RemoveComma(Object)                                 			숫자에 콤마를 제거하는  함수
 * formatNumeric(Object)                               			숫자인지 체크하는 함수
 * formatNumericInteger(Object)                        			숫자인지 체크하는 함수. 소수점 이하는 입력을 하지 못함
 * deleteStr(Object.value, ch)                         			해당 문자를 없애는 함수
 * addComma(Object)                                    			콤마를 집어 넣는 함수
 * addComma_return (str) 										콤마를 추가하고 String값 return
 * check_digit_minus(Object)
 * InsertCommaMinus(Object)
 * tabOrder(Object, Object, Object)                    			정해진 숫자만큼 문자(영숫자)를 입력하면 자동으로 다음 필드로 포커스 이동

 * isSelectValue(Object)                               			선택된 콤보박스(select box)의 값을 리턴하는 함수
 * isSelectText(Object)                               			선택된 콤보박스(select box)의 텍스트값을 리턴하는 함수
 * isOptionValue(Object)                                    	선택된 라디오버튼의 값을 리턴하는 함수

 * isAllHangulStr(String)                              			모든문자들이 한글인지 체크하는 함수
 * isHangul(String)                                    			문자가 한글인지 체크하는 함수
 * strCharByte(String)

 * isAlphaNum(Char)                                    			문자가 알파벳이나 숫자인지 체크하는 함수
 * isAlphaNumStr(Object)                               			필드가 알파벳이나 숫자인지 체크하는 함수
 * isAlphaNumStrReturn(Object)                         			필드가 알파벳이나 숫자인지 체크하는 함수

 * tabindex_set(formName, objs) 								오브젝트의 tabindex를 '-1'로 만든다.

 * isZeroChk(Object, field_name)								필드에 '0'값 체크하는 함수

 * checkCompanyNumber(Object.value)                    			사업자 번호 체크 함수
 * checkCompanyNumberByObject(Object)                  			사업자 번호 체크 함수
 * isNo_tax(Object)                                    			사업자 번호 체크하는 함수

 * juminNochkit(Object)                                			주민등록번호 체크 함수
 * juminNochkitByValue(Object.value)                   			주민등록번호 체크 함수
 * juminNochkitOnlyAlert(Object)                       			주민등록번호 체크 함수

 * CheckFgnNo(Object.value)								        입력받은 외국인의 주민등록을 체크한다.

 * doubleTrunc(num, faction_digit)	                            소숫점 아래의 금액을 절사
 * doubleTruncStr(num, faction_digit)	                        소숫점 아래의 금액을 절사

 * f_addr_add(사용프로그램, 사용자 정의 인자, 사용자 정의 인자, 조회/추가 구분자) 우편번호 팝업/추가

 * processEnter()                                           	엔터키로 조회 처리를 행한다.
 * setHandleBtn(btn_name, flag)                             	버튼의 이름과 플래그를 주어서 해당버튼을 화면에 보이고 하고 안보이게 하는 메소드
 * checkTelNo(Object, num)                             			전화번호 체크

 * isDateValid(yy, mm, dd)                             			날짜가 유효한 날짜인지 체크하는 함수
 * isValid(Object)                                     			날짜가 유효한 날짜인지 체크하는 함수
 * isValidDate(Object)                                 			날짜 체크루틴
 * isValidDateMonth(Object)                            			년도와 월 체크루틴
 * isValidDateMonthDay(Object)                         			월과 일 체크루틴
 * isValidHour(Object)                                 			시간 체크
 * isValidMin(Object)                                  			분 체크
 * dateFormat(strDate, formatChar)                     			날짜를 포맷팅 하는 함수
 * dateFormatYYYYDD(strDate, formatChar)               			날짜를 포맷팅 하는 함수





 * special_word(a)                               특수문자체크
 * english_su(flag)                              영문,숫자의 혼합체크 = 회원가입시사용
 * english_chk(id                                영문체크
 * f_byte_length                                 문자열길이 체크 ( 영문 , 한글 구분하여 체크함  한글은*2 )

*/

/* 현재 일자를 가져오는 내부 function */
function curr_date() {
	d = new Date();

	month = d.getMonth();
	month = (month * 1) + 1;
	day = d.getDate();
	year = d.getYear();

	if (month < 10) month = "0"+month;
	if (day < 10) day = "0"+day;

	js_currdate = ""+year+month+day;
	return js_currdate;
}

/**
 * RemoveSlashEdit(Object) 날짜 input 박스 선택시 RemoveSlash
 *   예) YYYY-MM-DD -> YYYYMMDD
 * @param       obj
 * @return      Object.value
 * @see         RemoveSlash(Object.value)
 * @exam        onFocus="RemoveSlashEdit(this);
 * @histroy
 */
function RemoveSlashEdit( obj){
  if (!isFieldBlank(obj)) obj.value = RemoveSlash(obj.value);
    obj.select();
}

/**
 * RemoveHypenEdit(Object) 날짜 input 박스 선택시 RemoveHypen
 *   예) 123456-1234567 -> 1234561234567
 * @param       obj
 * @return      Object.value
 * @see         RemoveHypen(Object.value)
 * @exam        onFocus="RemoveHypenEdit(this);
 * @histroy
 */
function RemoveHypenEdit(obj){
	if (!isFieldBlank(obj)) obj.value = RemoveHypen(obj.value);
		obj.select();
}

/**
 * isFieldBlank(Object) 필드가 블랭크인지를 체크하는 함수
 * @param       theField               필드객체
 * @return      true, false
 * @histroy
 */
function isFieldBlank(theField)
{
  try{
    var str = theField.value;
    return (str == "" || str.charAt(0) == " ") ? true : false;
  } catch(e) {
    var str = theField.value;
    return (str == "" || str.charAt(0) == " ") ? true : false;
  }

}

/**
 * isFieldNull(Object, String) 필드가 블랭크인지를 체크하는 함수
 * 필드가 블랭크일시 파라미터로 넘어온 메세지를 alert 창으로 띄우고 해당 필드로 포커스가 간다.
 * 파라미터로 넘어온 메세지가 없을시는 메세지를 alert 창으로 띄우지 않는다.
 * @param       theField               필드객체
 * @param       theMessage             메세지
 * @see         isFieldBlank(Object)
 * @return      true, false
 * @histroy
 */
function isFieldNull(theField, theMessage)
{
	try{
		var keyCode =window.event.keyCode;
	  if (!containsElement(keyCode)){
    	if (isFieldBlank(theField)) {
      	if(theMessage != null) alert(theMessage);
        theField.select();
	      //theField.focus();
        return false;
      }else{
      	return true;
      }
		}
	} catch(e) {
  	if (isFieldBlank(theField)) {
    	if(theMessage != null) alert(theMessage);
	    //theField.focus();
      theField.select();
      return false;
    }else{
      return true;
    }
  }
}

/**
 * RemoveSlash(Object)문자열의 Slash 를 제거하는 함수
 * @param       theDate         입력문자열
 * @return      SlashString     Slash가 제거된 문자열
 * @histroy
 */
function RemoveSlash(theDate)
{
	var SlashString="";

	for( j=0; j<=theDate.length-1; j++){
      if( theDate.charAt(j) != "-" ){
	    SlashString = SlashString + theDate.charAt(j);
	  }
	}

	return SlashString;
}

/**
 * RemoveHypen(Object)문자열의 Hypen 을 제거하는 함수
 * @param       theDate         입력문자열
 * @return      RemoveHypen     리턴될 문자열
 * @histroy
 */
function RemoveHypen(theDate)
{
  var HypenString="";

  for( j=0; j<=theDate.length-1; j++){
    if( theDate.charAt(j) != "-" ){
      HypenString = HypenString + theDate.charAt(j);
		}
  }

  return HypenString;
}

/**
 * trimstr(value)
 * 문자열의 앞뒤 space를 제거한다.
 * @param        : value 문자열
 * @return       : 앞뒤의 space가 제거된 문자열
 * @histroy
 *   ex)  var txt = trimstr(value);
*/
function trimstr(value)
{
    value = value.replace(/^\s+/,  ""); // remove leading  white spaces
    value = value.replace(/\s+$/g, ""); // remove trailing while spaces
    return value;
}

/**
 * setIME(value)
 * 한영자동변환
 * @param   : K:한 E:영
 * @return  N/A
 * @histroy
 *   ex)  setIME(object,'K');
*/
function setIME(obj, lang)
{
  obj.style.imeMode = (lang == "E" ? "inactive":"active");
}

/**
 * 필수입력 체크
 * 필수입력으로 설정된 필드가 입력되지 않을 경우에 메시지를 보이고
 * 해당 필드로 포커스를 이동한다.
 * - f : FORM 명
*/
function checkKey(f) {
   var sError = "";
   for (var nLoop = 0; nLoop < f.elements.length; nLoop++) {
      if (null != f.elements[nLoop].getAttribute("key")) {
         if (isEmpty(f.elements[nLoop].value)) {
            sError = ""+f.elements[nLoop].key+"는(은) 필수입력 항목입니다.";
            alert(sError);
            f.elements[nLoop].focus();
            return false;
         }
      }
   }
   return true;
}

function isEmpty(str) {
	return (str == "" || str.charAt(0) == "") ? true : false;
}

/**
 * isNumeric(Object) 필드가 숫자인지를 체크하는 함수
 * @param       theField               필드
 * @return      true, false
 * @see         token(Object)
 * @histroy
 */
function isNumeric(theField)
{
	try{
		var keyCode =window.event.keyCode;
   	if (!containsElement(keyCode)){
  		var result = token(theField);
  		return (result == "invalid") ? false : true;
		}

	} catch(e) {
  	var result = token(theField);
    return (result == "invalid") ? false : true;
  }
}


 //delete키와 그밖에 backspace키를 거르기 위한 메소드
function containsElement(keycd)
{
//var arr = [0,8,9,13,16,17,18,37,38,39,40,46];
  var arr = [8,9,13,16,17,18,37,38,39,40,46];
	var found = false, index = 0;
	while(!found && index < arr.length)
	if(arr[index] == keycd)
	found = true;
	else
	index++;
	return found;
}

/**
 * token(Object) 값의 타입을 체크 하는 함수
 * @param       num            값
 * @return      ctype = "integer", "float", "invalid"
 * @histroy
 */
function token(theField)
{
  var Status = 0;
  var num=0;
  var i;
  var ctype = "";

  i = 0;
  while (i < theField.value.length) {
	  num = theField.value.charAt(i);
	  if (Status == 0) {
      if (isDigit(num)) {
	      Status = 1;
	      i++;
      } else {
        Status = 10;
        break;
      }
	  } else if (Status == 1) {
      if (isDigit(num)) {
        Status = 1;
        i++;
      } else if (num == ".") {
        Status = 2;
        i++;
      } else {
        Status = 10;
        break;
      }
	  } else if (Status == 2) {
      if (isDigit(num)) {
        i++;
      } else {
        Status = 10;
        break;
      }
	  }
  }

  if (Status == 1)        ctype = "integer";
  else if (Status == 2)   ctype = "float";
  else if (Status == 10)  ctype = "invalid";

  return ctype;
}

/**
 * isDigit(num) 값이 숫자 인지 체크하는 함수
 * @param       num            값
 * @return      true, false
 * @histroy
 */
function isDigit(num)
{

	try{
		var keyCode =window.event.keyCode;
	  if (!containsElement(keyCode)){
    	return (num >= "0" && num <= "9") ? true : false;
		}

	} catch(e) {
  	return (num >= "0" && num <= "9") ? true : false;
  }
}


/**
 * ischkNumber(Object) 필드가 숫자인지를 체크하는 함수
 * @param       theField               필드
 * @return      true, false
 * @see         isNumber
 * @histroy
 */
function ischkNumber( object )
{
	if(isNumber(object.value) == false ){
		alert("숫자를 입력하세요");
	  object.value = "";
	  object.select();
	}
}

/**
 * ischkFloatNumber(Object) 필드가 소수점 숫자인지를 체크하는 함수
 * @param       theField               필드
 * @return      true, false
 * @see         isNumber
 * @histroy
 */
function ischkFloatNumber( object )
{
	if(isNumberFloat(object.value) == false ){
		alert("숫자를 입력하세요");
	  object.value = "";
	  object.select();
	}
}

/**
 * isNumber(numValue) 숫자 체크 루틴
 * @param       numValue              숫자
 * @return      allValid
 * @histroy
 */
function isNumber(numValue)
{
	var checkOK = "0123456789";
	var checkStr = numValue;
	var allValid = true;
	var decPoints = 0;
	var allNum = "";

	/* 숫자인가? */
	for (i = 0;  i < checkStr.length;  i++)
	{
	  ch = checkStr.charAt(i);
	  for (j = 0;  j < checkOK.length;  j++)
	    if (ch == checkOK.charAt(j))
	      break;
	  if (j == checkOK.length)
	  {
	    allValid = false;
	    break;
	  }
	}
	return allValid;
}

/**
 * isNumberDash(numValue) 숫자 체크 루틴
 * @param       numValue              숫자
 * @return      allValid
 * @histroy
 */
function isNumberDash(numValue)
{
	var checkOK = "-0123456789";
	var checkStr = numValue;
	var allValid = true;
	var decPoints = 0;
	var allNum = "";

	/* 숫자인가? */
	for (i = 0;  i < checkStr.length;  i++)
	{
	  ch = checkStr.charAt(i);
	  for (j = 0;  j < checkOK.length;  j++)
	    if (ch == checkOK.charAt(j))
	      break;
	  if (j == checkOK.length)
	  {
	    allValid = false;
	    break;
	  }
	}
	return allValid;
}

/**
 * isNumberFloat(numValue) 소수점 숫자 체크 루틴
 * @param       numValue              숫자
 * @return      allValid
 * @histroy
 */
function isNumberFloat(numValue)
{
	var checkOK = ".0123456789";
	var checkStr = numValue;
	var allValid = true;
	var decPoints = 0;
	var allNum = "";

	/* 숫자인가? */
	for (i = 0;  i < checkStr.length;  i++)
	{
	  ch = checkStr.charAt(i);
	  for (j = 0;  j < checkOK.length;  j++)
	    if (ch == checkOK.charAt(j))
	      break;
	  if (j == checkOK.length)
	  {
	    allValid = false;
	    break;
	  }
	}
	return allValid;
}

/**
 * isPointNumber(Object) 소숫점체크 함수
 * @param       num           숫자
 * @return      true, false
 * @see         isNumber
 * @histroy
 */
function isPointNumber(num)
{
  var numValue = num.value
  var point = numValue.indexOf(".");

	if(isNumber(numValue.substring(point+1)) && isNumber(numValue.substring(0, point))) {
		if(numValue.length - 2 != point) {
    	alert("금액은 '100.0'과 같이 소숫점 1자리로 입력하여 주십시오");
      num.focus();
      return false;
		}
	} else {
  	alert("금액이 올바르지 않습니다..");
    num.focus();
    return false;
	}
	return true;
}

/**
 * check_float(Object) 콤마를 제거한 후 숫자를 체크 함수      수치(000,000.00)
 * @param       field         객체
 * @return      true, false
 * @see         RemoveComma(field)
 * @see         InsertComma(field)
 * @histroy
 */
function check_float(field)
{
	try{
		var keyCode =window.event.keyCode;
	  if (!containsElement(keyCode)){
			RemoveComma(field);
			if(isNumeric(field) == false){
				alert("숫자를 입력하여 주십시오");
			  field.value = "";
			  field.select();
			} else {
				InsertComma(field);
			  //addComma(field);
			}
		}

	} catch(e) {
		RemoveComma(field);
		if(isNumeric(field) == false){
			alert("숫자를 입력하여 주십시오");
		  field.value = "";
		  field.select();
		} else {
			InsertComma(field);
		  //  addComma(field);
		}
	}
}

/**
 * check_digit(Object) 콤마를 제거한 후 숫자를 체크 함수      수치(000,000)
 * @param       field         객체
 * @return      true, false
 * @see         RemoveComma(field)
 * @see         InsertComma(field)
 * @histroy
 */
function check_digit(field)
{
	try{
		var keyCode =window.event.keyCode;
	  if (!containsElement(keyCode)){
			RemoveComma(field);
		  if(isNumber(field.value) == false){
		  	alert("숫자를 입력하여 주십시오");
		    field.value = "";
//		  field.focus();
		    field.select();
			} else {
		  	InsertComma(field);
//		  addComma(field);
			}
		}

	} catch(e) {
		RemoveComma(field);
		if(isNumber(field.value) == false){
			alert("숫자를 입력하여 주십시오");
		  field.value = "";
		  field.focus();
		} else {
			InsertComma(field);
//		addComma(field);
		}
	}
}

/**
 * InsertComma(Object) 숫자에 콤마를 넣는 함수
 * @param       InputBox      객체
 * @see         RemoveComma(field)
 * @histroy
 */
function InsertComma( inputBox )
{
  var args = inputBox.value;

  if (args == "") return;

  try{
		var keyCode =window.event.keyCode;
   	if (!containsElement(keyCode)){
    	args = deleteStr(args,",");
      var  symbol = "";
      var idx = args.indexOf(".");
      var CommaString = "";
      if(idx > 0){
      	CommaString = args.substring(idx, args.length);
        args = args.substring(0, idx);
      }

      if(args ==""){
      	inputBox.value = args.concat(CommaString);
        //return args.concat(CommaString);
			}
      symbol = args.substring(0,1);

      if(symbol== "-") {//마이너스일때
      	var  va = "";
        if(args.length <= 4){
        	inputBox.value = args.concat(CommaString);
          //return args.concat(CommaString);
        }

        va = args.substring(1,args.length);
        var  value = "";
        var i = 1;
        var k = va.length;

				for(var j=va.length; j > 0; j--) {
        	if(i%3 == 0 && i != 1 && i !=k ) {
          	value = ","+va.charAt(j-1)+value;
          }else {
          	value = va.charAt(j-1)+value;
          }
          i++;
        }

        inputBox.value = (symbol.concat(value)).concat(CommaString);
        	//return (symbol.concat(value)).concat(CommaString);
      }
      //마이너스일때
      else {
				if(args.length <= 3){
        	inputBox.value =  args.concat(CommaString);
          //return args.concat(CommaString);;
        }
        var  val = args;
        var  value = "";
		//20061019 correct comma insert error parkth
		//var i = 1;
        var i = 1;
		//parkth
        var k = val.length ;
        for(var j=val.length; j > 0; j--) {
	       	if(i%3 == 0 && i != 1 && i !=k ) {
          	value = ","+val.charAt(j-1)+value;
          }else {
			value = val.charAt(j-1)+value;

          }

		//alert(i);
	   i++;
        }
        inputBox.value =  value.concat(CommaString);
//      inputBox.select();
        //return  value.concat(CommaString);
    	}
		}

	}catch(e) {
		args = deleteStr(args,",");
    var  symbol = "";
    var idx = args.indexOf(".");
    var CommaString = "";
    if(idx > 0){
    	CommaString = args.substring(idx, args.length);
      args = args.substring(0, idx);
    }

    if(args ==""){
    	inputBox.value = args.concat(CommaString);
      //return args.concat(CommaString);
    }
    symbol = args.substring(0,1);

    if(symbol== "-") {//마이너스일때
    	var  va = "";
      if(args.length <= 4){
      	inputBox.value = args.concat(CommaString);
        //return args.concat(CommaString);
      }

      va = args.substring(1,args.length);
      var  value = "";
      var i = 1;
      var k = va.length;

      for(var j=va.length; j > 0; j--) {
      	if(i%3 == 0 && i != 1 && i !=k ) {
        	value = ","+va.charAt(j-1)+value;
        }else {
        	value = va.charAt(j-1)+value;
        }
        i++;
      }

      inputBox.value = (symbol.concat(value)).concat(CommaString);
      //return (symbol.concat(value)).concat(CommaString);
    }
    //마이너스일때
    else {
			if(args.length <= 3){
      	inputBox.value =  args.concat(CommaString);
        //return args.concat(CommaString);;
      }
      var  val = args;
      var  value = "";
      var i = 1;
      var k = val.length;
      for(var j=val.length; j > 0; j--) {
      	if(i%3 == 0 && i != 1 && i !=k ) {
        	value = ","+val.charAt(j-1)+value;
        }else {
        	value = val.charAt(j-1)+value;
        }
        i++;
      }
      inputBox.value =  value.concat(CommaString);
//    inputBox.select();
      //return  value.concat(CommaString);
		}
	}
}

/**
 * RemoveComma(Object) 숫자에 콤마를 제거하는  함수
 * @param       Object      객체
 * @histroy
 */
function RemoveComma(InputBox)
{
	var CommaString="";

	for( j=0; j<=InputBox.value.length-1; j++)
		if( InputBox.value.charAt(j) != "," )
	  	CommaString = CommaString + InputBox.value.charAt(j);

		if(InputBox.value == "0") CommaString = "0";
			InputBox.value = CommaString;

	return CommaString;
}

/**
 * formatNumeric(Object) 숫자인지 체크하는 함수
 *   예) +123456 -> 123,456    -123,456 -> 123,456
 *        123456 -> 123,456    1234.56 -> 1,234.56
 * @param       field      객체
 * @see         addComma(obj)
 * @see         deleteStr(obj.value)
 * @see         token(obj)
 * @histroy     최동균 입력 객체를 객체에 저장하는 방법으로 수정
 */
function formatNumeric(field)
{
	try{
		var keyCode =window.event.keyCode;
	  if (!containsElement(keyCode)){
   		var obj = field;
   		obj.value = deleteStr(obj.value,"+");
   		obj.value = deleteStr(obj.value,"-");
   		obj.value = deleteStr(obj.value,",");

   		if(token(obj) == "invalid"){
   			alert("숫자를 입력하여 주십시오");
   			obj.value = "";
   			obj.select();
//   			   obj.focus();
			} else {
   			//addComma(obj);
		    InsertComma(field);
			}
		}

	} catch(e) {
  	var obj = field;
  	obj.value = deleteStr(obj.value,"+");
  	obj.value = deleteStr(obj.value,"-");
  	obj.value = deleteStr(obj.value,",");

  	if(token(obj) == "invalid"){
  		alert("숫자를 입력하여 주십시오");
  		obj.value = "";
  		obj.select();
//  	obj.focus();
		} else {
  		//   addComma(obj);
	    InsertComma(field);
		}
	}
}

/**
 * formatNumericInteger(Object) 숫자인지 체크하는 함수. 소수점 이하는 입력을 하지 못함
 *   예) +123456 -> 123,456    -123,456 -> 123,456
 *        123456 -> 123,456    1234.56 -> alert("숫자를 입력하여 주십시오")
 * @param       field      객체
 * @see         addComma(obj)
 * @see         deleteStr(obj.value)
 * @see         token(obj)
 * @histroy
 */
function formatNumericInteger(field) {

	try{
		var keyCode =window.event.keyCode;
	  if (!containsElement(keyCode)){
   		var obj = field;
   		obj.value = deleteStr(obj.value,"+");
   		obj.value = deleteStr(obj.value,"-");
   		obj.value = deleteStr(obj.value,",");

   		if(token(obj) == "invalid" || token(obj) == "float"){
   			alert("숫자를 입력하여 주십시오");
   			obj.value = "";
   			obj.select();
//   		obj.focus()
			} else {
//   		addComma(obj);
	      InsertComma(field);
			}
		}

	} catch(e) {
  	var obj = field;
   	obj.value = deleteStr(obj.value,"+");
   	obj.value = deleteStr(obj.value,"-");
   	obj.value = deleteStr(obj.value,",");

   	if(token(obj) == "invalid" || token(obj) == "float"){
   		alert("숫자를 입력하여 주십시오");
   		obj.value = "";
   		obj.select();
//   	obj.focus();
		} else {
//  	addComma(obj);
      InsertComma(field);
		}
	}
}

/**
 * deleteStr(Object.value, ch) 해당 문자를 없얘는 함수
 * 예) deleteStr("123,456", ",") -> 123456
 * @param       theDate         값
 * @param       ch              없앨 문자
 * @return      SlashString
 * @histroy
 */
function deleteStr(theDate, ch)
{
	var SlashString="";
  for( j=0; j<=theDate.length-1; j++)     {
  	if( theDate.charAt(j) != ch )   {
    	SlashString = SlashString + theDate.charAt(j);
    }
  }
  return SlashString;
}

/**
 * addComma(Object) 콤마를 집어 넣는 함수
 * @param       inputBox        객체
 * @see         addComma(field)
 * @histroy
 */
function addComma(inputBox){

	try{
 		var keyCode =window.event.keyCode;
   		if (!containsElement(keyCode)){
  			var args = inputBox.value;
  			if (args == "") return;

      	args = deleteStr(args,",");
        var  symbol = "";
        var idx = args.indexOf(".");
        var CommaString = "";
        if(idx > 0){
        	CommaString = args.substring(idx, args.length);
          args = args.substring(0, idx);
        }

        if(args ==""){
        	inputBox.value = args.concat(CommaString);
          //return args.concat(CommaString);
				}
        symbol = args.substring(0,1);

        if(symbol== "-") {//마이너스일때
        	var  va = "";
          if(args.length <= 4){
          	inputBox.value = args.concat(CommaString);
            //return args.concat(CommaString);
          }

          va = args.substring(1,args.length);
          var  value = "";
          var i = 1;
          var k = va.length;

          for(var j=va.length; j > 0; j--) {
          	if(i%3 == 0 && i != 1 && i !=k ) {
            	value = ","+va.charAt(j-1)+value;
            }else {
            	value = va.charAt(j-1)+value;
            }
            i++;
          }

          inputBox.value = (symbol.concat(value)).concat(CommaString);
          //return (symbol.concat(value)).concat(CommaString);
        }
        //마이너스일때
        else {

        if(args.length <= 3){
        	inputBox.value =  args.concat(CommaString);
          //return args.concat(CommaString);;
        }
        var  val = args;
        var  value = "";
        var i = 1;
        var k = val.length;
        for(var j=val.length; j > 0; j--) {
        	if(i%3 == 0 && i != 1 && i !=k ) {
          	value = ","+val.charAt(j-1)+value;
          }else {
          	value = val.charAt(j-1)+value;
          }
          i++;
        }
        inputBox.value =  value.concat(CommaString);
//      inputBox.select();
        //return  value.concat(CommaString);
    	}
		}
	}catch(e) {
  	var args = inputBox.value;
  	if (args == "") return;
    args = deleteStr(args,",");
    var  symbol = "";
    var idx = args.indexOf(".");
    var CommaString = "";
    if(idx > 0){
    	CommaString = args.substring(idx, args.length);
      args = args.substring(0, idx);
    }

    if(args ==""){
    	inputBox.value = args.concat(CommaString);
      //return args.concat(CommaString);
    }
    symbol = args.substring(0,1);

    if(symbol== "-") {//마이너스일때
    	var  va = "";
      if(args.length <= 4){
      	inputBox.value = args.concat(CommaString);
        //return args.concat(CommaString);
      }

      va = args.substring(1,args.length);
      var  value = "";
      var i = 1;
      var k = va.length;

      for(var j=va.length; j > 0; j--) {
      	if(i%3 == 0 && i != 1 && i !=k ) {
        	value = ","+va.charAt(j-1)+value;
        }else {
        	value = va.charAt(j-1)+value;
        }
        i++;
      }

      inputBox.value = (symbol.concat(value)).concat(CommaString);
      //return (symbol.concat(value)).concat(CommaString);
    }
    //마이너스일때
    else {

	    if(args.length <= 3){
	    	inputBox.value =  args.concat(CommaString);
	      //return args.concat(CommaString);;
	    }
	    var  val = args;
	    var  value = "";
	    var i = 1;
	    var k = val.length;
	    for(var j=val.length; j > 0; j--) {
	    	if(i%3 == 0 && i != 1 && i !=k ) {
	      	value = ","+val.charAt(j-1)+value;
	      }else {
	      	value = val.charAt(j-1)+value;
	      }
	      i++;
	    }
	    inputBox.value =  value.concat(CommaString);
	//  inputBox.select();
	    //return  value.concat(CommaString);
		}
  }
}

/**
 * check_digit_minus(Object)
 * @param       Object
 * @return      Object.value
 * @see         InsertCommaMinus(Object)
 * @histroy
 */
function check_digit_minus(field)
{
	try{
		var keyCode =window.event.keyCode;

		if (!containsElement(keyCode)){
			RemoveComma(field);
			if(isNumber(Math.abs(field.value)) == false){
				alert("숫자를 입력하여 주십시오");
				field.value = "";
		//	field.focus();
				field.select();
			} else {
				InsertCommaMinus(field);
				//addComma(field);
			}
		}

	}catch(e) {
		RemoveComma(field);
		if(isNumber(Math.abs(field.value)) == false){
			alert("숫자를 입력하여 주십시오");
			field.value = "";
			//    field.focus();
			field.select();
		} else {
			InsertCommaMinus(field);
			//addComma(field);
		}
	}
}

/**
 * InsertCommaMinus(Object)
 * @param       Object
 * @return      Object.value
 * @see         RemoveComma(Object)
 * @histroy
 */
function InsertCommaMinus(InputBox){
  var CommaString="";
  var i = 0;

  if(RemoveComma(InputBox) < 0) {
  	InputBox.value = Math.abs(RemoveComma(InputBox));
    var rem = InputBox.value;
    var targetString = InputBox.value;
    for( j=targetString.length-1; j>=0; j--, i++){
    	if( i%3 != 0 || i == 0 )        CommaString = targetString.charAt(j) + CommaString;
      if( i%3 == 0 && i != 0 ){
      	CommaString = "," + CommaString;
        CommaString = targetString.charAt(j) + CommaString;
      }
    }
    InputBox.value = "-" + CommaString;
	}else{
  	var rem = RemoveComma(InputBox);
    var targetString = RemoveComma(InputBox);
    for( j=targetString.length-1; j>=0; j--, i++){
    	if( i%3 != 0 || i == 0 )        CommaString = targetString.charAt(j) + CommaString;
      if( i%3 == 0 && i != 0 ){
      	CommaString = "," + CommaString;
        CommaString = targetString.charAt(j) + CommaString;
      }
    }
    InputBox.value = CommaString;
	}
}

/**
 * tabOrder(Object, Object, Object)
 * 정해진 숫자만큼 문자(영숫자)를 입력하면 자동으로 다음 필드로 포커스 이동
 * 입력 항목    - thisTab : 작업중인 필드 객체
 *              - nextTab: 다음 포커스 대상
 *              - thisTabSize: 작업중인 입력필드의 size 값
 * 관련이벤트   onKeyUp
 * @param       thisTab
 * @param       nextTab
 * @param       thisTabSize
 * @histroy
 */
function tabOrder(thisTab, nextTab, thisTabSize) {
  if (thisTab.value.length== thisTabSize) {
  	nextTab.focus() ;
	//nextTab.select();
  	return;
	}
}

/**
 * isSelectValue(Object) 선택된 콤보박스의 값을 리턴하는 함수
 * @param       theField        combo Object명
 * @return      myVal           combo의 선택된 값 리턴
 * @histroy
 */
function isSelectValue(theField)
{
	var myVal = "";
	myVal = theField[theField.selectedIndex].value;
	return myVal;
}

/**
 * isSelectText(Object) 선택된 콤보박스의 텍스트값을 리턴하는 함수
 * @param       theField        combo Object명
 * @return      myVal           combo의 선택된 텍스트값 리턴
 * @histroy
 */
function isSelectText(theField)
{
	var myVal = "";
	myVal = theField[theField.selectedIndex].text;
	return myVal;
}


/**
 * isOptionValue(Object) 선택된 라디오버튼의 값을 리턴하는 함수
 * @param       theField        Radio Object명
 * @return      myVal           Radio버튼의 선택된 값 리턴
 * @histroy
 */
function isOptionValue(theField)
{
	var myVal = "";
  	for (var i = 0; i < theField.length; i++) {
		if (theField[i].checked) {
    		myVal = theField[i].value;
    	}
  	}
  	return myVal;
}

/**
 * isAllHangulStr(Object) 모든문자들이 한글인지 체크하는 함수
 * @param       Object         입력객체
 * @return      true, false
 * @see         isHangul(ch)
 * @histroy
 */
function isAllHangulStr(theField) {
	try{
		var keyCode =window.event.keyCode;
	  if (!containsElement(keyCode)){
    	var i;
    	var ch;
    	var str = theField.value;
    	for (i=0;i<str.length;i++) {
    		ch = escape(str.charAt(i));
    		if (isHangul(ch) == false) {
    			return false;
    		}
    	}
    	return true;
		}

	} catch(e) {
  	var i;
    var ch;
    var str = theField.value;
    for (i=0;i<str.length;i++) {
    	ch = escape(str.charAt(i));
    	if (isHangul(ch) == false) {
    		return false;
    	}
    }
    return true;
	}
}

/**
 * isHangul(String) 문자가 한글인지 체크하는 함수
 * @param       chStr          한문자
 * @return      true, false
 * @see         strCharByte(chStr)
 * @histroy
 */
function isHangul(chStr) {
	try{
		var keyCode =window.event.keyCode;
	  if (!containsElement(keyCode)){
    	if (strCharByte(chStr))
      	return true;
      else
      	return false;
		}
	} catch(e) {
  	if (strCharByte(chStr))
    	return true;
    else
    	return false;
 	}
}

/**
 * strCharByte(String)
 * @param       chStr          한문자
 * @return      true, false
 * @see         strCharByte(chStr)
 * @histroy
 */
function strCharByte(chStr)
{
	if (chStr.substring(0, 2) == '%u')
  {
  	return (chStr.substring(2,4) == '00') ? false : true;
  }
  else if (chStr.substring(0,1) == '%')
  {
  	return (parseInt(chStr.substring(1,3), 16) > 127) ? true : false;
  }
  else
  	return false;
}

/**
 * isAlphaNum(Char) 문자가 알파벳이나 숫자인지 체크하는 함수
 * @param       chStr          한문자
 * @return      알파벳이나 숫자
 * @histroy
 */
function isAlphaNum(ch) {
	return ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9'));
}

/**
 * isAlphaNumStr(Object) 필드가 알파벳이나 숫자인지 체크하는 함수
 * @param       theField               객체
 * @return      true, false
 * @see         isAlphaNum(ch)
 * @histroy
 */
function isAlphaNumStr(theField) {
	var i;
	var ch;
	var str = theField.value;
	for (i=0;i<str.length;i++) {
		ch = str.charAt(i);
	  if (isAlphaNum(ch) == false) {
	  	return false;
	  }
	}
	return true;
}

/**
 * isAlphaNumStrReturn(Object) 필드가 알파벳이나 숫자인지 체크하는 함수
 * 알파벳이나 숫자이외의 문자가 입력되었을시
 *      alert 창으로 "알파벳이나 숫자이외의 문자가 입력되었습니다" 메시지를 띄운다
 * @param       theField               객체
 * @return      true, false
 * @see         isAlphaNum(ch)
 * @histroy
 */
function isAlphaNumStrReturn(theField) {
  var i;
  var ch;
  var str = theField.value;
  for (i=0;i<str.length;i++) {
		ch = str.charAt(i);
    if (isAlphaNum(ch) == false) {
    	//alert("한글이 입력되었습니다");
      alert("알파벳이나 숫자이외의 문자가 입력되었습니다");
      theField.value="";
	    //theField.focus();
  		theField.select();
      return false;
    }
	}
  return true;
}

/*=============================================
 * 오브젝트의 tabindex를 '-1'로 만든다.
 * @param       N/A
 * @return      N/A
 * @histroy
 * 사용예시
 *	var strchkField    = new Array("ctrl_nr","proc_type");
 *	tabindex_set("main_form", strchkField);
 *
 *=============================================*/
function tabindex_set(formName, objs)
{
	var chkform = document.forms[formName];
	var eleName = null;

	for(var i=0; i<objs.length; i++)
	{
	   document.forms(formName).item(objs[i]).tabIndex = '-1';
	}

	return true;
}

/**
 * isZeroChk(Object, 필드명) 필드가 0이 아닌 숫자를 체크
 * @param       theField, theFieNm
 * @return      true, false
 * @see         isNumber(obj)
 * @histroy
 */
function isZeroChk(theField, theFieNm)
{
	RemoveComma(theField);

	//if(isNumber(theField.value) == false){
	if(isNumberFloat(theField.value) == false){
		alert("숫자를 입력하여 주십시오");
		theField.value = "0";
		//theField.select();
		theField.focus();
		return false;
	} else {
		if(theField.value == "0"){
			alert(theFieNm+ "(은)는 0이 아닌 숫자를 입력하여 주십시오");
			theField.value = "0";
			//theField.select();
			theField.focus();
			return false;
		}
	}

	InsertComma(theField)

	return true;
}

/**
 * f_addr_add(사용프로그램, 사용자 정의 인자, 사용자 정의 인자, 조회/추가 구분자) 우편번호 팝업
 * @param       file,flag1,flag2,flag3
 * @return
 * @see
 * @histroy

function f_addr_add(file,flag1,flag2,flag3){
	var winl = (screen.width - 430) / 2;     //  430 : 뛰울 창의 폭
	var wint = (screen.height - 550) / 2;   //  550 : 뛰울 창의 높이

	if(flag3 == "EXIST"){
		var call_str = "/comm/address_search.jsp?file="+file+"&flag1="+flag1+"&flag2="+flag2;
		var win = window.open(call_str,"serch_addr",
						'top='+wint+',left='+winl+',width=455,height=315,resizable=no,scrollbars=no');
	}else{
		// 주소생성할때 flag2 에 Y / N 값으로 기타주소를 뿌려줄 타이틀을 변경한다... 주의해...
		var call_str = "/comm/address_search_add.jsp?file="+file+"&flag1="+flag1+"&flag2="+flag2;
		var win = window.open(call_str,'add_addr',
						'top='+wint+',left='+winl+',width=479,height=315,resizable=no,scrollbars=no');
	}
	win.focus();
}
 */
/**
 * isNo_tax(Object) 사업자 번호 체크루틴
 * ex) 123-45-67890
 * @param       theDate
 * @return      true, false
 * @see         RemoveHypen(theDate)
 * @see         isFieldBlank(theDate)
 * @histroy
 */
function isNo_tax(theDate)
{
    var checkStr = RemoveHypen(theDate.value);
        if (!isFieldBlank(theDate)) {
                var numStr = "-0123456789";

                for ( var j = 0 ; j < theDate.value.length ; j++ )
                {
                        if ( numStr.indexOf( theDate.value.charAt(j) ) == -1 ) {
                                alert("숫자만 [1112233333] 형태로 입력하세요.");
				        		theDate.select();
                                return false;
                        }
                }

                if (checkStr.length != 10) {
                        alert("[1112233333] 형태로 입력하세요.");
						theDate.select();
                        return false;
                } else{
                        theDate.value = checkStr.substring(0,3) + "-" + checkStr.substring(3,5) + "-" + checkStr.substring(5,10)
                        return true;
                }
        }
        return true;
}

/**
 * checkCompanyNumber(Object.value) 사업자 번호 체크 함수
 * @param       strCompanyNumber              숫자
 * @return      true, false
 * @histroy
 */
function checkCompanyNumber(strCompanyNumber) {
        var Sum = 0;
        var chrWeight = new Array(1,3,7,1,3,7,1,3);


        for(var i=0;i<8;i++) {
                Sum = Sum + eval(strCompanyNumber.charAt(i)) * eval(chrWeight[i]);
        }

        var Temp = eval(strCompanyNumber.charAt(8))*5;

        Sum= Sum + parseInt(Temp/10) + parseInt(Temp%10);

        Sum= parseInt(Sum%10);

        if(Sum != 0)
                Sum = 10 - Sum;

        if(Sum != strCompanyNumber.charAt(9))
                return false;

        return true;
}

/**
 * checkCompanyNumberByObject(Object) 사업자 번호 체크 함수.
 *   예) 1234567890 -> 입력오류시 메시지를 뿌리고 해당 객체로 리턴
 * @param       strCompanyNumber              숫자
 * @return      true, false
 * @histroy
 */
function checkCompanyNumberByObject(strCompanyNumber) {


	if (strCompanyNumber.value == "") return;

        var Sum = 0;
        var chrWeight = new Array(1,3,7,1,3,7,1,3);



        for(var i=0;i<8;i++) {
                Sum = Sum + eval(strCompanyNumber.value.charAt(i)) * eval(chrWeight[i]);
        }

        var Temp = eval(strCompanyNumber.value.charAt(8))*5;

        Sum= Sum + parseInt(Temp/10) + parseInt(Temp%10);

        Sum= parseInt(Sum%10);

        if(Sum != 0)
                Sum = 10 - Sum;

        if(Sum != strCompanyNumber.value.charAt(9)) {
                alert('사업자등록번호가 잘못입력되었습니다.');
                strCompanyNumber.focus();
                return false;
        }
        return true;
}


/**
 * juminNochkit(Object) 주민등록번호 체크 함수
 * @param       jumin1        숫자
 * @return      true, false
 * @histroy
 */
function juminNochkit(jumin)

{

   if (jumin.value == "") return (false);

   jumin.value = RemoveHypen(jumin.value);

   var jumin1 = jumin.value.substring(0,6)
   var jumin2 = jumin.value.substring(6,13)
   var chk =0
   var yy = jumin1.substring(0,2)
   var mm = jumin1.substring(2,4)
   var dd = jumin1.substring(4,6)
   var sex =jumin2.substring(0,1)

   if ((jumin1.length != 6 )||
         ( mm <1 || mm>12 ||dd<1) )
      {
         alert ("주민등록번호를 바로 입력하여 주십시오.");
         jumin.focus();
         return (false);
      }

   if ((sex != 1 && sex !=2 && sex !=3 && sex !=4 )|| (jumin2.length != 7 ))
      {
         alert ("주민등록번호를 바로 입력하여 주십시오.");
         jumin.focus();
         return (false);
      }

        for (var i = 0; i <=5 ; i++){
                chk = chk + ((i%8+2) * parseInt(jumin1.substring(i,i+1)))
        }

        for (var i = 6; i <=11 ; i++){
                chk = chk + ((i%8+2) * parseInt(jumin2.substring(i-6,i-5)))
        }


        chk = 11 - (chk %11)
        chk = chk % 10


        if (chk != jumin2.substring(6,7))
        {
                alert ("유효하지 않은 주민등록번호입니다.");
                jumin.focus();
                return (false);
        }

        return true;

}

/**
 * juminNochkitByValue(Value) 주민등록번호 체크 함수
 * @param       jumin1        숫자
 * @return      true, false
 * @histroy
 */
function juminNochkitByValue(jumin)

{

   if (jumin == "") return (false);

   jumin = RemoveHypen(jumin);

   var jumin1 = jumin.substring(0,6)
   var jumin2 = jumin.substring(6,13)
   var chk =0
   var yy = jumin1.substring(0,2)
   var mm = jumin1.substring(2,4)
   var dd = jumin1.substring(4,6)
   var sex =jumin2.substring(0,1)

   if ((jumin1.length != 6 )||
         ( mm <1 || mm>12 ||dd<1) )
      {
         alert ("주민등록번호를 바로 입력하여 주십시오.");
         return (false);
      }

   if ((sex != 1 && sex !=2  && sex !=3 && sex !=4 )|| (jumin2.length != 7 ))
      {
         alert ("주민등록번호를 바로 입력하여 주십시오.");
         return (false);
      }

        for (var i = 0; i <=5 ; i++){
                chk = chk + ((i%8+2) * parseInt(jumin1.substring(i,i+1)))
        }

        for (var i = 6; i <=11 ; i++){
                chk = chk + ((i%8+2) * parseInt(jumin2.substring(i-6,i-5)))
        }


        chk = 11 - (chk %11)
        chk = chk % 10


        if (chk != jumin2.substring(6,7))
        {
                alert ("유효하지 않은 주민등록번호입니다.");
                return (false);
        }

        return true;

}

/**
 * juminNochkitOnlyAlert(Object) 주민등록번호 체크 함수
 * @param       jumin1        숫자
 * @return      true, false
 * @histroy
 */
function juminNochkitOnlyAlert(jumin)

{

   if (jumin.value == "") return (false);

   jumin.value = RemoveHypen(jumin.value);

   var jumin1 = jumin.value.substring(0,6)
   var jumin2 = jumin.value.substring(6,13)
   var chk =0
   var yy = jumin1.substring(0,2)
   var mm = jumin1.substring(2,4)
   var dd = jumin1.substring(4,6)
   var sex =jumin2.substring(0,1)

   if ((jumin1.length != 6 )||
         ( mm <1 || mm>12 ||dd<1) )
      {
         alert ("주민등록번호를 바로 입력하여 주십시오.");
         return (false);
      }

   if ((sex != 1 && sex !=2  && sex !=3 && sex !=4 )|| (jumin2.length != 7 ))
      {
         alert ("주민등록번호를 바로 입력하여 주십시오.");
         return (false);
      }

        for (var i = 0; i <=5 ; i++){
                chk = chk + ((i%8+2) * parseInt(jumin1.substring(i,i+1)))
        }

        for (var i = 6; i <=11 ; i++){
                chk = chk + ((i%8+2) * parseInt(jumin2.substring(i-6,i-5)))
        }


        chk = 11 - (chk %11)
        chk = chk % 10


        if (chk != jumin2.substring(6,7))
        {
                alert ("유효하지 않은 주민등록번호입니다.");
                return (false);
        }

        return true;

}

/**
 * CheckFgnNo(obj.value) 주민등록번호 / 사업자등록번호 / 외국인등록번호 체크
 * @param       jumin1        숫자+하이픈(-)
 * @return      true, false
 * @histroy
 */

function CheckFgnNo(fgnno) {

	fgnno = RemoveHypen(fgnno);

	var sum=0;
	var odd=0;

	buf = new Array(13);

	for(i=0; i<13; i++) { buf[i]=parseInt(fgnno.charAt(i)); }
	odd = buf[7]*10 + buf[8];

	if(odd%2 != 0) { return false; }
	if( (buf[11]!=6) && (buf[11]!=7) && (buf[11]!=8) && (buf[11]!=9) ) {
		return false;
	}

	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];

	for(i=0, sum=0; i<12; i++) { sum += (buf[i] *= multipliers[i]); }
	sum = 11 - (sum%11);

	if(sum >= 10) { sum -= 10; }
	sum += 2;
	if(sum >= 10) { sum -= 10; }
	if(sum != buf[12]) { return false }

	return true;
}

/**
* Function :	소숫점 아래의 금액을 절사해서 리턴하는  Js Function
* Param    :	num  		원시 금액
* Param    :	faction_digit  	절사 자리수
* Return   :	절사된 금액
*
* ex) 소수 첫째자리 절사하는 예시
*	rslt = doubleTrunc(document.form2.cd_organization2.value,1);
*
*     소수 둘째 자리 절사하는 예시
*	rslt = doubleTrunc(document.form2.cd_organization2.value,2);
*/
function doubleTrunc(num, faction_digit){

	div = 1;
//	int rslt;

	if (num == 0) return Number(num);

	try{
	  num = Number(num);
	  num += 0.000000001;
	}catch(e) {}

	if (faction_digit == 0) {
		div = 1;
   		num = parseInt(num);
	}else if (faction_digit > 0) {
		for(cnt=0; cnt < faction_digit ;cnt ++) {
			div = Number(div*10);
		}
//    		rslt = parseInt(num*div);
   		rslt = parseInt(Number(num)*Number(div));

//    		num = parseFloat(rslt/div);
   		num = Number(rslt/div);

	}else if (faction_digit < 0) {

		for(cnt=faction_digit; cnt < 0 ;cnt ++) {
			div = div*10;
		}

		rslt = parseInt(num);
   		rslt = parseInt(Number(rslt)/Number(div));
   		num = rslt*div;
	}

	return num;
}

/**
* Function :	소숫점 아래의 금액을 절사해서 리턴하는  Js Function
* Param    :	num  		원시 금액
* Param    :	faction_digit  	절사 자리수
* Return   :	절사된 스트링 금액
*
* ex) 소수 첫째자리 절사하는 예시
*	rslt = doubleTruncStr(document.form2.cd_organization2.value,1);
*
*     소수 둘째 자리 절사하는 예시
*	rslt = doubleTruncStr(document.form2.cd_organization2.value,2);
*/
function doubleTruncStr(num, faction_digit){

	div = 1;
//	int rslt;

	if (num == 0) return Number(num);

	try{
	  num = Number(num);
	  num += 0.000000001;
	}catch(e) {}


	if (faction_digit == 0) {
		div = 1;
    		num = parseInt(num);
//    		num = Number(num);

	}else if (faction_digit > 0) {

		for(cnt=0; cnt < faction_digit ;cnt ++) {
//			div = parseFloat(div*10);
			div = Number(div*10);
		}


//    		rslt = parseInt(num*div);
    		rslt = parseInt(Number(num)*Number(div));

//    		num = parseFloat(rslt/div);
   		num = Number(rslt/div);


	}else if (faction_digit < 0) {

		for(cnt=faction_digit; cnt < 0 ;cnt ++) {
			div = div*10;
		}

		rslt = parseInt(num);



//    		rslt = Number(num)*Number(div);
//    		rslt = parseInt(Number(num)*Number(div));
//    		rslt = parseFloat(rslt/div);
//    		rslt = Number(rslt/div);

    		rslt = parseInt(Number(rslt)/Number(div));
    		num = rslt*div;

	}


	surchar = "0";
	if(surchar != "-"){
		var res;
		if(num.toString().indexOf(".") == -1 && faction_digit != 0)
			num += ".";
		while((res = num.toString().length-num.toString().indexOf(".")-1)<faction_digit){
			//alert(ret);
			num+=surchar;
		}

	}

	return num;
}


/**
* Function :	소숫점 아래의 금액을 반올림해서 리턴하는  Js Function
* Param    :	num  		원시 금액
* Param    :	faction_digit  	반올림 자리수
* Return   :	반올림된 금액
*
* ex) 소수 첫째자리 반올림하는 예시
*	rslt = doubleTrunc(document.form2.cd_organization2.value,1);
*
*     소수 둘째 자리 반올림하는 예시
*	rslt = doubleTrunc(document.form2.cd_organization2.value,2);
*/
function doubleRound (num, faction_digit) {
	var T = Number('1e'+faction_digit);
	var ret = Math.round(num*T)/T;
	surchar = "0";
	if(surchar != "-"){
		var res;
		if(ret.toString().indexOf(".") == -1 && faction_digit != 0)
			ret += ".";
		while((res = ret.toString().length-ret.toString().indexOf(".")-1)<faction_digit){
			//alert(ret);
			ret+=surchar;
		}

		//alert(ret.lastIndexOf("."))
	}

	ret = Number(ret);

	return ret;
}

/**
*  processEnter() 엔터키로 조회 처리를 행한다.
*  Param :     없음
*  Return   :  없음
*  ex) <input type="text" name="import_type"  maxlength="10" value=""  onKeyDown="processEnter" >
*/
function processEnter(str) {
	if(window.event.keyCode == 13) {
		//setTimeout("f_submit()", 500);
		setTimeout(str, 500);
	}
}

/**
*  setHandleBtn(btn_name,flag) 버튼의 이름과 플래그를 주어서 해당버튼을 화면에 보이고 하고 안보이게 하는 메소드
*  Param :     btn_name button의 이름
*              flag     화면에 보일지 감출지를 넣는 값 true/false
*  Return   :  없음
*/
function setHandleBtn(btn_name, flag) {

	var btn_object = eval("document."+btn_name);

	if(flag) {
		btn_object.width = 60;
		btn_object.disabled = false;
	} else {
		btn_object.width = 0;
		btn_object.disabled = true;
	}
}

/**
 * checkTelNo(Object, num) 전화번호 체크
 * telNo : 전화번호
 * num   : 1 - 지역번호(02 또는 016)
 *         2 - 국번(123)
 *         3 - 전화번호(4567)
 * @param       numValue              숫자
 * @return      true, false
 * @see         isNumber
 * @histroy
 */
function checkTelNo( telNo, num )
{

        if( isNumber(telNo.value) == false ){
                alert("전화번호가 올바르지 않습니다.");
                telNo.focus();
                return false;
        }

        if( num == 3 ){
                if( telNo.value.length != 4 ){
                        alert("전화번호 입력이 잘못되었습니다.");
                        telNo.focus();
                        return false;
                }
        }

        return true;

}
/*=====================================================================*/
// 운영
	var host = "http://edms.sknetworks.co.kr";

// 개발
//	var host = "http://206.219.14.175:7001";

	function openPopup(mypage, myname, w, h, scroll) {
		var winl = (screen.width - w) / 2;
		var wint = (screen.height - h) / 2;
		winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable'
		win = window.open(mypage, myname, winprops)
		if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
	}


	function fncOpenURLLinkDoc(){
		document.emdsform.action = host + "/InfURLIntSearchCondition.infurl";
		document.emdsform.target = "URL_LINK";

		openPopup("about:blank", "URL_LINK", 850, 600, "" );
		document.emdsform.submit();
	}

	function addURLDocLink1 (object_id,title,ver) {
		document.form1.pumwi_num.value = object_id;
		document.form1.pumwi_nm.value = title;
	}

	function fncPopDocumentOnlyView(str){
		if(str != "-----"){
			document.emdsform.action =  host + "/InfURLDocumentOnlyView.infurl";
			document.emdsform.target = "DocumentView";
			document.emdsform.r_object_id.value = str;
			openPopup("about:blank",'DocumentView','800','600','scrollbars=no');
			document.emdsform.submit();
		}else{
			alert("시행 품의 번호를 확인하세요!");
			return;
		}
	}

	function fncContentView(str){
		if(str != "-----"){
			document.emdsform.action =  host + "/InfURLContentViewCmd.infurl";
			document.emdsform.target = "DocumentView2";
			document.emdsform.r_object_id.value = str;
			openPopup("about:blank",'DocumentView2','800','600','');
			document.emdsform.submit();
		}else{
			alert("시행 품의 번호를 확인하세요!");
			return;
		}
	}

/*=====================================================================*/

	function f_user_info(str){
	    var winl = (screen.availwidth - 383) / 2;
        var wint = (screen.availheight - 230) / 2;

		var loc = "/comm/user_info.jsp?cust_id="+str;

		window.open(loc, "tuja_num_pop", 'top='+winl+',left='+wint+', width=383,height=230,resizable=no,scrollbars=no');
	}

/*=====================================================================*/

 /**
 * isDateValid(yy, mm, dd) 날짜가 유효한 날짜인지 체크하는 함수
 * @param       yy             년
 * @param       mm             월
 * @param       dd             일
 * @return      true, false
 */
	function isDateValid(yy, mm, dd){
		try{
			var keyCode =window.event.keyCode;
		    if (!containsElement(keyCode)){
	        	yyStr = yy[yy.selectedIndex].value;
	        	mmStr = mm[mm.selectedIndex].value;
	        	ddStr = dd[dd.selectedIndex].value;

	        	if (mmStr == 1){
	        		max_days = 31
	        	}else if (mmStr == 2) {
	        		if ((( yyStr % 4 == 0) && (yyStr % 100 != 0)) || (yyStr % 400 == 0))
	        			max_days = 29;
	        		else
	        			max_days = 28;
	        	}else if (mmStr == 3){
					max_days = 31;
	        	}else if (mmStr == 4){
					max_days = 30;
	        	}else if (mmStr == 5){
	        		max_days = 31;
	        	}else if (mmStr == 6){
	        		max_days = 30;
	        	}else if (mmStr == 7){
	        		max_days = 31;
	        	}else if (mmStr == 8){
	        		max_days = 31;
	        	}else if (mmStr == 9){
	        		max_days = 30;
	        	}else if (mmStr == 10){
	        		max_days = 31;
	        	}else if (mmStr == 11){
	        		max_days = 30;
	        	}else if (mmStr == 12){
	        		max_days = 31;
	        	}else {
	        		alert("입력한 월(1-12)이 틀립니다..");
	        		return false;
	        	}

	        	if (ddStr < 1 || ddStr > max_days) {
	        		alert(mmStr + "월에는 " + max_days + "일까지만 선택해야 합니다.");
	        		return false;
	        	} else {
	        		 return true;
	        	}
			}

		} catch(e) {
			yyStr = yy[yy.selectedIndex].value;
	        mmStr = mm[mm.selectedIndex].value;
	        ddStr = dd[dd.selectedIndex].value;

	        if (mmStr == 1)
	        	max_days = 31
	        else if (mmStr == 2) {
	        	if ((( yyStr % 4 == 0) && (yyStr % 100 != 0)) || (yyStr % 400 == 0))
	        		max_days = 29;
	        	else
	        		max_days = 28;
	        }
	        else if (mmStr == 3)
	        	max_days = 31;
	        else if (mmStr == 4)
	        	max_days = 30;
	        else if (mmStr == 5)
	        	max_days = 31;
	        else if (mmStr == 6)
	        	max_days = 30;
	        else if (mmStr == 7)
	        	max_days = 31;
	        else if (mmStr == 8)
	        	max_days = 31;
	        else if (mmStr == 9)
	        	max_days = 30;
	        else if (mmStr == 10)
	        	max_days = 31;
	        else if (mmStr == 11)
	        	max_days = 30;
	        else if (mmStr == 12)
	        	max_days = 31;
	        else {
	        	alert("입력한 월(1-12)이 틀립니다..");
	        	return false;
	        }

	        if (ddStr < 1 || ddStr > max_days) {
	        	alert(mmStr + "월에는 " + max_days + "일까지만 선택해야 합니다.");
	        	return false;
	        } else  return true;
		}
	}

/**
 * isValid(Object) 날짜가 유효한 날짜인지 체크하는 함수
 * 예) 20020328
 * @param       theDate        날짜 (예 20020328)
 * @return      true, false
 */
	function isValid(theDate){
		try{
			yy = parseInt(theDate.substring(0,4),10);
			mm = parseInt(theDate.substring(4,6),10);
			dd = parseInt(theDate.substring(6,8),10);

			if (mm == 1)
				max_days = 31
			else if (mm == 2) {
			if ((( yy % 4 == 0) && (yy % 100 != 0)) || (yy % 400 == 0))
				max_days = 29;
			else
			    max_days = 28;
			}
			else if (mm == 3)
			    max_days = 31;
			else if (mm == 4)
			    max_days = 30;
			else if (mm == 5)
			    max_days = 31;
			else if (mm == 6)
			    max_days = 30;
			else if (mm == 7)
			    max_days = 31;
			else if (mm == 8)
			    max_days = 31;
			else if (mm == 9)
			    max_days = 30;
			else if (mm == 10)
			    max_days = 31;
			else if (mm == 11)
			    max_days = 30;
			else if (mm == 12)
			    max_days = 31;
			else {
			    alert("입력한 월(1-12)이 틀립니다..");
			    return false;
			} if (dd < 1 || dd > max_days) {
			    alert(mm + "월에는 " + max_days + "일까지만 선택해야 합니다.");
			    return false;
			} else
			    return true;

		} catch(e) {
			yy = parseInt(theDate.substring(0,4),10);
			mm = parseInt(theDate.substring(4,6),10);
			dd = parseInt(theDate.substring(6,8),10);

			if (mm == 1)
		    	max_days = 31
			else if (mm == 2) {
				if ((( yy % 4 == 0) && (yy % 100 != 0)) || (yy % 400 == 0))
		        	max_days = 29;
		        else
		            max_days = 28;
			}
			else if (mm == 3)
		        max_days = 31;
			else if (mm == 4)
		        max_days = 30;
			else if (mm == 5)
		        max_days = 31;
			else if (mm == 6)
		        max_days = 30;
			else if (mm == 7)
		        max_days = 31;
			else if (mm == 8)
		        max_days = 31;
			else if (mm == 9)
		        max_days = 30;
			else if (mm == 10)
		        max_days = 31;
			else if (mm == 11)
		        max_days = 30;
			else if (mm == 12)
		        max_days = 31;
			else {
		    	alert("입력한 월(1-12)이 틀립니다..");
		        return false;
			}

			if (dd < 1 || dd > max_days) {
		    	alert(mm + "월에는 " + max_days + "일까지만 선택해야 합니다.");
		        return false;
			} else
		        return true;
      	}
	}

/**
 * isValidDate(Object) 날짜 체크루틴
 *   예) YYYYMMDD or YYYY/MM/DD
 *       <input type="text" name="Tb_CntrYyyymm" size="8" maxlength=10
 *              onBlur="javascript:isValidDate(form.Tb_CntrYyyymm);">
 * @param       theDate
 * @return      true, false
 * @see         RemoveSlash(theDate)
 * @see         isFieldBlank(theDate)
 */
	function isValidDate(theDate){
		try{
			if (!isFieldBlank(theDate)) {
				try{
        			var currdate = curr_date();

        			if (theDate.value.length <= 2) {
        				if (theDate.value.length == 1 ) {
        					theDate.value = currdate.substring(0,6)+"0"+theDate.value;
        				} else {
        					theDate.value = currdate.substring(0,6)+theDate.value;
        				}

        			} else if (theDate.value.length <= 4) {

        				if(theDate.value.length == 3) {
        					theDate.value = currdate.substring(0,4)+"0"+theDate.value;
        				} else {
        					theDate.value = currdate.substring(0,4)+theDate.value;
        				}

        			} else if (theDate.value.length <= 6) {
        				if(theDate.value.length == 5) {
        					theDate.value = currdate.substring(0,2)+"0"+theDate.value;
        				} else {
        					theDate.value = currdate.substring(0,2)+theDate.value;
        				}
        			}

        		} catch(e) {}

        		var checkStr = RemoveSlash(theDate.value);

				var numStr = "-0123456789";

    		    for ( var j = 0 ; j < theDate.value.length ; j++ ){
					if ( numStr.indexOf( theDate.value.charAt(j) ) == -1 ) {
    		        	alert("숫자만 [YYYYMMDD] 또는 [YYYY-MM-DD] 형태로 입력하세요.");
    		            theDate.value = "";
    		            theDate.focus();
//        		        	theDate.select();
    		            return false;
    		        }
    		    }

				if (checkStr.length != 8) {
    		     	alert("[YYYYMMDD] 또는 [YYYY-MM-DD] 형태로 입력하세요.");
    		        theDate.value = "";
//        		        theDate.focus();
 		        	theDate.select();
    		        return false;
				} else if (!isValid(checkStr)) {
					theDate.value = "";
    		        theDate.focus();
//    		        	theDate.select();
    		        return false;
				} else{
    		    	theDate.value = checkStr.substring(0,4) + "-" + checkStr.substring(4,6) + "-" + checkStr.substring(6,8)
    		        return true;
				}
    		}
    		return true;

		} catch(e) {

    		if (!isFieldBlank(theDate)) {
    			try{
    				var currdate = curr_date();

    				if (theDate.value.length <= 2) {
    					if (theDate.value.length == 1 ) {
    						theDate.value = currdate.substring(0,6)+"0"+theDate.value;
    					} else {
    						theDate.value = currdate.substring(0,6)+theDate.value;
    					}

					} else if (theDate.value.length <= 4) {
    					if(theDate.value.length == 3) {
    						theDate.value = currdate.substring(0,4)+"0"+theDate.value;
    					} else {
    						theDate.value = currdate.substring(0,4)+theDate.value;
    					}

    				} else if (theDate.value.length <= 6) {
    					if(theDate.value.length == 5) {
    						theDate.value = currdate.substring(0,2)+"0"+theDate.value;
    					} else {
    						theDate.value = currdate.substring(0,2)+theDate.value;
    					}
    				}
    			}catch(e) {}

    			var checkStr = RemoveSlash(theDate.value);

    	        var numStr = "-0123456789";

    	        for ( var j = 0 ; j < theDate.value.length ; j++ ){
					if ( numStr.indexOf( theDate.value.charAt(j) ) == -1 ) {
    	            	alert("숫자만 [YYYYMMDD] 또는 [YYYY-MM-DD] 형태로 입력하세요.");
    	                theDate.value = "";
    	                theDate.focus();
//    		        		theDate.select();
    	                return false;
					}
				}

    	        if (checkStr.length != 8) {
    	        	alert("[YYYYMMDD] 또는 [YYYY-MM-DD] 형태로 입력하세요.");
    	            theDate.value = "";
    	            theDate.focus();
//	        			theDate.select();
    	            return false;
    	        } else if (!isValid(checkStr)) {
    	            theDate.value = "";
    	            theDate.focus();
//	        			theDate.select();
    	            return false;
    	        } else{
    	        	theDate.value = checkStr.substring(0,4) + "-" + checkStr.substring(4,6) + "-" + checkStr.substring(6,8)
    	            return true;
    	        }
    		}
    		return true;
  		}
	}

/**
 * isValidDateYear(Object) 년도체크루틴
 * 예) YYYYMM or YYYY/MM
 *    <input type="text" name="Tb_CntrYyyymm" size="8" maxlength=7
 *      onBlur="javascript:isValidDateYear(form.Tb_CntrYyyymm);">
 * @param       theDate        날짜
 * @return      true, false
 * @see         RemoveSlash(theDate.value)
 */
	function isValidDateYear(theDate){
		var checkOK = "0123456789/";
      	var checkStr = RemoveSlash(theDate.value);
      	var allValid = 0;
      	var decPoints = 0;
      	var allNum = "";

      	if(theDate.value == "")   return;

      	/* 숫자인가? */
      	for (i = 0;  i < checkStr.length;  i++){
        	ch = checkStr.charAt(i);
        	for (j = 0;  j < checkOK.length;  j++)
				if (ch == checkOK.charAt(j))
            		break;
        		if (j == checkOK.length){
          			allValid = 1;
          			break;
        		}
        	if (ch != "/")
          		allNum += ch;
      	}

         if( checkStr.length != 4 ){
                allValid = 2;
          }

          switch( allValid ){
                case 1 :
                alert("숫자만 입력 하십시요.");
                break;
                case 2 :
                alert("[YYYY] 형태로 입력하십시요..");
                break;
          }

      if( allValid != 0 ){
        theDate.value = "";
	theDate.focus();
//	theDate.select();
        return (false);
      }

        return (true);
}

 /**
 * isValidDateMonth(Object) 년도와 월 체크루틴
 * 예) YYYYMM or YYYY/MM
 *    <input type="text" name="Tb_CntrYyyymm" size="8" maxlength=7
 *      onBlur="javascript:isValidDateMonth(form.Tb_CntrYyyymm);">
 * @param       theDate        날짜
 * @return      true, false
 * @see         RemoveSlash(theDate.value)
 */
function isValidDateMonth(theDate)
{

        if (isFieldBlank(theDate)) {
        	return;
        }

        try{
        var currdate = curr_date();

        if (theDate.value.length <= 2) {
        	if (theDate.value.length == 1 ) {
        		theDate.value = currdate.substring(0,4)+"0"+theDate.value;
        	} else {
        		theDate.value = currdate.substring(0,4)+theDate.value;
        	}

        } else if (theDate.value.length <= 4) {

        	if(theDate.value.length == 3) {
        		theDate.value = currdate.substring(0,2)+"0"+theDate.value;
        	} else {
        		theDate.value = currdate.substring(0,2)+theDate.value;
        	}

        }

	}catch(e) {}


      var checkOK = "0123456789-";
      var checkStr = RemoveSlash(theDate.value);
      var allValid = 0;
      var decPoints = 0;
      var allNum = "";

      if(theDate.value == "")   return;

      /* 숫자인가? */
      for (i = 0;  i < checkStr.length;  i++)
      {
        ch = checkStr.charAt(i);
        for (j = 0;  j < checkOK.length;  j++)
          if (ch == checkOK.charAt(j))
            break;
        if (j == checkOK.length)
        {
          allValid = 1;
          break;
        }
        if (ch != "-")
          allNum += ch;
      }

      if( checkStr.length != 6 ){
        allValid = 2;
          }

          if( ( checkStr.length == 6 ) && ((parseInt(checkStr.substring(4,6), 10) < 1) || (parseInt(checkStr.substring(4,6), 10) > 12)) ){
        allValid = 3;
      }

          switch( allValid ){
                case 1 :
                alert("숫자만 입력 하십시요.");
                break;
                case 2 :
                alert("[YYYYMM] 또는 [YYYY-MM] 형태로 입력하십시요..");
                break;
                case 3 :
                alert("월은 '01'에서 '12'까지만 입력하십시요.");
                break;
          }

      if( allValid != 0 ){
        theDate.value = "";
        theDate.focus();
//	theDate.select();
        return (false);
      }

        theDate.value = checkStr.substring(0,4) + "-" + checkStr.substring(4,6)

        return (true);
}

/**
 * isValidDateMonthDay(Object) 월과 일 체크루틴
 * 예) MMDD or MM/DD
 *     <input type="text" name="Tb_CntrYyyymm" size="8" maxlength=7
 *              onBlur="javascript:isValidDateMonth(form.Tb_CntrYyyymm);">
 * @param       theDate        날짜
 * @return      true, false
 * @see         RemoveSlash(theDate.value)
 */
function isValidDateMonthDay(theDate)
{
      var checkOK = "0123456789/";
      var checkStr = RemoveSlash(theDate.value);
      var allValid = 0;
      var decPoints = 0;
      var allNum = "";

      if(theDate.value == "")   return;

      /* 숫자인가? */
      for (i = 0;  i < checkStr.length;  i++)
      {
        ch = checkStr.charAt(i);
        for (j = 0;  j < checkOK.length;  j++)
          if (ch == checkOK.charAt(j))
            break;
        if (j == checkOK.length)
        {
          allValid = 1;
          break;
        }
        if (ch != "/")
          allNum += ch;
      }

      if( checkStr.length != 4 ){
        allValid = 2;
          }

          if( ( checkStr.length == 4 ) && ((parseInt(checkStr.substring(0,2), 10) < 1) || (parseInt(checkStr.substring(0,2), 10) > 12)) ){
        allValid = 3;
      }

          switch( allValid ){
                case 1 :
                alert("숫자만 입력 하십시요.");
                break;
                case 2 :
                alert("[MMDD] 또는 [MM/DD] 형태로 입력하십시요..");
                break;
                case 3 :
                alert("월은 '01'에서 '12'까지만 입력하십시요.");
                break;
          }

      if( allValid != 0 ){
        theDate.value = "";
        theDate.focus();
// 	theDate.select();
        return (false);
      }

        theDate.value = checkStr.substring(0,2) + "/" + checkStr.substring(2,4)

        return (true);
}

/**
 * isValidHour(Object) 시간 체크
 * @param       hour          시간
 * @return      true, false
 * @see         isNumber
 */
function isValidHour( hour )
{

      if(isNumber(hour.value) == false ){
         alert("시간이 올바르지 않습니다..");
         hour.focus();
         return false;
       }

      var sHourNo = parseInt(hour.value);
      if(sHourNo < 0 || sHourNo > 23){
         alert("00-23 사이의 시간을 입력하여 주십시오..");
         hour.focus();
         return false;
      }
}

 /**
 * isValidMin(Object) 분 체크
 * @param       min           분
 * @return      true, false
 * @see         isNumber
 */
function isValidMin( min )
{
      if(isNumber(min.value) == false ){
         alert("분이 올바르지 않습니다..");
         min.focus();
         return false;
       }

      var sMinNo = min.value;
      if(sMinNo < 0 || sMinNo > 59){
         alert("00-59 사이의 분을 입력하여 주십시오..");
         min.focus();
         return false;
      }
}

 /**
 * dateFormat(strDate, formatChar) 날짜를 포맷팅 하는 함수
 *   예)  20001010 ==>  to : 2000/01/01   "/": formatChar
 * @param       strDate        날짜
 * @return      formatChar      포맷팅할 문자
 * @see         isValid(strDate)
 */
function dateFormat(strDate, formatChar){
        var formatedDate = "";
        if( isValid(strDate)    ){

                formatedDate = strDate.substring(0,4) + formatChar + strDate.substring(4,6) + formatChar + strDate.substring(6,8);
        }
        return formatedDate;
}

/**
 * dateFormat(strDate, formatChar) 날짜를 포맷팅 하는 함수
 *   예)  20001 ==>  to : 2000/01   "/": formatChar
 * @param       strDate        날짜
 * @return      formatChar      포맷팅할 문자
 * @see         isValid(strDate)
 */
function dateFormatYYYYDD(strDate, formatChar){
        var formatedDate = "";
        if( isValid(strDate)    ){

                formatedDate = strDate.substring(0,4) + formatChar + strDate.substring(4,6);
        }
        return formatedDate;
}

/**
 * f_date_setting(form, str, str1) 날짜 조회조건 세팅
 * @param1      form1           폼 이름
 * @param2      str             조회조건
 * @param3      str1            세팅 될 값
 * @return      없슴
 */
	function f_date_setting(fm, str, str1){
		if("" != str){
			if("000" == str1){
				fm.term.selectedIndex = 0;
			}else if("001" == str1){
				fm.term.selectedIndex = 1;
			}else if("009" == str1){
				fm.term.selectedIndex = 2;
			}else if("002" == str1){
				fm.term.selectedIndex = 3;
			}else if("003" == str1){
				fm.term.selectedIndex = 4;
			}else if("004" == str1){
				fm.term.selectedIndex = 5;
			}else if("005" == str1){
				fm.term.selectedIndex = 6;
			}else if("006" == str1){
				fm.term.selectedIndex = 7;
			}else if("007" == str1){
				fm.term.selectedIndex = 8;
			}else if("" == str1){
				fm.term.selectedIndex = 9;
			}
		}
	}







// 특수문자체크
function special_word(a){
	var espword = "~`#@$%,.^&*'()|\+=;:\"<>!?/";
	for (i=0; i<a.length; i++) {
	if((espword.indexOf(a.charAt(i)))>-1){
		return false;
	}
    }
	return true;
}


// 영문,숫자의 혼합체크 = 회원가입시사용
function english_su(flag){
	if(!isNaN(flag)){ return false; }
	if(english_chk(flag)==true){return false; }
	if(special_word(flag)==false){return false; }

	return true;
}

// 영문체크
function english_chk(id) { //영문만
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	for (i=0; i< id.length; i++) {
		id_check = id.charAt(i);
		for ( j=0 ;j< str.length;j++) {
			if (id_check == str.charAt(j)){ break; }
			if (j+1 == str.length) {return;}
		}
	}
	return true;
}

// 오직 숫자만 입력 가능하게...
function onlyNumber(){
	if (((event.keyCode<48) || (event.keyCode>57))) {
		event.returnValue=false;
	}
}

/**
 * f_byte_length(str) 문자열길이 체크 ( 영문 , 한글 구분하여 체크함  한글은*2 )
 * @param2      str             문자열
 * @return      문자열의 길이
 */
  function f_byte_length(input) {
    var i, j=0;
    for(i=0;i<input.length;i++) {
        val=escape(input.charAt(i)).length;
        if(val==  6) j++;
        j++;
    }
    return j;
}

/** 콤마를 추가하는 함수..
** 20101214 dhkim
** param : String
** return : String
**/
function addComma_return (str)
{
 var input_str = str.toString();

 if (input_str == '') return false;
 input_str = parseInt(input_str.replace(/[^0-9]/g, '')).toString();
 if (isNaN(input_str)) { return false; }

 var sliceChar = ',';
 var step = 3;
 var step_increment = -1;
 var tmp  = '';
 var retval = '';
 var str_len = input_str.length;

 for (var i=str_len; i>=0; i--)
 {
  tmp = input_str.charAt(i);
  if (tmp == sliceChar) continue;
  if (step_increment%step == 0 && step_increment != 0) retval = tmp + sliceChar + retval;
  else retval = tmp + retval;
  step_increment++;
 }

 return retval;
}// End Function	 



/*산간지 block관련
sjjang 20140527
*/
function location_chackes(zip){
	var zip_vl = "N";
	var zip_ad_values;
	var zip_ad_values1 = ["355842","355845","355846","355847","355848","409830","409831","409832","409833","409835","409840","409841","409842","409850","409851","409852","409853","409855","409880","409881",
						"409882","409883","409890","409891","409892","409893","409910","409911","409912","409913","409919","417910","417911","417912","417913","417920","417921","417922","417923","417930",
						"417931","417932","417933","425350","513890","513891","513892","513893","527913","530145","530430","530440","530450","530800","530801","535145","535804","535805","535806","535813",
						"535823","535824","535830","535831","535832","535833","535834","535835","535836","535837","535838","535840","535841","535842","535843","535844","535845","535846","535847","535850",
						"535851","535852","535860","535861","535862","535863","535870","535871","535872","535873","535880","535881","535882","535883","535884","535885","535890","535891","535892","535893",
						"535894","535895","535896","535897","535898","535910","535911","535912","535913","535914","535915","535916","535917","535918","535919","535920","535921","535922","535923","535924",
						"535925","535926","535930","535931","535932","535933","535934","535935","535936","535940","535941","535942","535943","536928","536929","536935","537809","537814","537815","537816",
						"537817","537820","537821","537822","537823","537824","537825","537826","537830","537831","537832","537833","537834","537835","537836","537840","537841","537842","537843","537844",
						"537845","537846","537847","537848","537849","537850","537851","537852","537853","537900","537901","537902","537903","537904","537905","537906","537907","537909","537910","537911",
						"537912","537913","537914","537920","537921","537922","537925","539910","539911","539912","539913","539914","539915","539916","539917","539918","539919","548902","548909","548990",
						"548991","548992","548993","555300","556830","556831","556832","556834","556835","556836","556837","556838","556839","556840","556841","556842","556843","556844","556845","556846",
						"556847","556848","556849","556850","556851","556852","556853","556854","556855","556856","556857","573810","573811","573812","573813","573814","573815","573816","573817","573818",
						"573819","579910","579911","579912","579913","579914","579915","618400","618420","618430","618440","618450","650835","650910","650911","650912","650913","650914","650915","650916",
						"650920","650921","650922","650923","650924","650925","650926","650927","650930","650931","650932","650933","650934","650944","650945","650946","664250","664270","690003","690010",
						"690011","690012","690020","690021","690022","690029","690030","690031","690032","690040","690041","690042","690043","690050","690060","690061","690062","690070","690071","690072",
						"690073","690080","690081","690082","690090","690100","690110","690120","690121","690122","690130","690140","690150","690160","690161","690162","690163","690170","690180","690190",
						"690191","690192","690200","690210","690220","690230","690231","690232","690240","690241","690242","690600","690610","690700","690701","690702","690703","690704","690705","690706",
						"690707","690708","690709","690710","690711","690712","690713","690714","690715","690716","690717","690718","690719","690720","690721","690722","690723","690724","690725","690726",
						"690727","690728","690729","690730","690731","690732","690733","690734","690735","690736","690737","690738","690739","690740","690741","690742","690743","690744","690750","690751",
						"690755","690756","690760","690762","690764","690765","690766","690767","690769","690770","690771","690772","690773","690774","690775","690776","690777","690778","690779","690780",
						"690781","690782","690783","690784","690785","690786","690787","690788","690789","690790","690791","690792","690793","690794","690795","690796","690800","690801","690802","690803",
						"690804","690805","690806","690807","690808","690809","690810","690811","690812","690813","690814","690815","690816","690817","690818","690819","690820","690821","690822","690823",
						"690824","690825","690826","690827","690828","690829","690830","690831","690832","690833","690834","690835","690836","690837","690838","690839","690840","690841","690842","690843",
						"690844","690846","690847","690850","690851","690900","690901","690902","690903","690904","690905","690906","690907","690908","690909","690910","690911","690912","690913","690914",
						"690915","690916","690917","690918","690920","690921","690922","690923","690924","690925","690926","690927","690928","690929","690931","690932","690933","690934","690940","690941",
						"690942","690943","690944","690945","690946","690947","690948","690949","690950","690951","690952","690960","690961","690962","690963","690964","690965","690966","690967","690968",
						"690970","690971","690972","690973","690974","690975","690976","690977","690978","690979","690980","695705","695750","695751","695752","695753","695754","695789","695791","695792",
						"695793","695794","695795","695796","695800","695801","695802","695803","695804","695805","695810","695811","695812","695813","695814","695820","695830","695831","695832","695833",
						"695834","695835","695840","695841","695842","695843","695844","695845","695850","695851","695852","695855","695900","695901","695902","695903","695904","695905","695906","695907",
						"695908","695909","695910","695911","695912","695913","695914","695915","695916","695917","695918","695919","695920","695921","695922","695923","695924","695925","695926","695927",
						"695928","695929","695930","695931","695932","695933","695934","695940","695941","695942","695943","695944","695945","695946","695947","695948","695949","695950","695951","695952",
						"695960","695961","695962","695963","695964","695965","695966","695967","695968","695969","695970","695971","695972","695973","695974","695975","695976","695977","695978","695979",
						"695980","695981","695982","695983","697010","697011","697012","697013","697014","697020","697030","697040","697050","697060","697070","697080","697090","697100","697110","697120",
						"697130","697301","697310","697320","697330","697340","697350","697360","697370","697380","697390","697600","697700","697701","697702","697703","697704","697705","697706","697707",
						"697800","697801","697802","697803","697804","697805","697806","697807","697808","697809","697810","697811","697812","697813","697814","697815","697816","697817","697818","697819",
						"697820","697821","697822","697823","697824","697825","697826","697827","697828","697829","697830","697831","697832","697833","697834","697835","697836","697837","697838","697839",
						"697840","697841","697842","697843","697844","697845","697846","697847","697848","697849","697850","697851","697852","697853","697854","697855","697856","697857","697858","697859",
						"697860","697861","697862","697863","697864","697900","697901","697902","697903","697904","697910","697911","697912","697913","697914","697920","697921","697922","697923","697930",
						"697931","697932","697933","697934","697935","697940","697941","697942","697943","697944","697945","699701","699702","699800","699801","699802","699803","699804","699805","699810",
						"699811","699812","699813","699814","699820","699821","699822","699823","699830","699831","699832","699833","699834","699835","699900","699901","699902","699903","699904","699905",
						"699906","699907","699908","699910","699911","699912","699913","699914","699915","699916","699920","699921","699922","699923","699924","699925","699926","699930","699931","699932",
						"699933","699934","699935","699936","699937","699940","699941","699942","699943","699944","699945","699946","699947","699948","699949","742870","742871","742872","742873","742924",
						"799800","799801","799802","799803","799804","799805","799810","799811","799812","799813","799815","799820","799821","799822","799823"
						,"22386","22387","22388","23004","23005","23006","23007","23008","23009","23010","23100","23101","23102","23103","23104","23105","23106","23107","23108","23109"
						,"23110","23111","23112","23113","23114","23115","23116","23124","23125","23126","23127","23128","23129","23130","23131","23132","23133","23134","23135","23136"
						,"31700","31708","32133","33411","40200","40201","40202","40203","40204","40205","40206","40207","40208","40209","40210","40211","40212","40213","40214","40215"
						,"40216","40217","40218","40219","40220","40221","40222","40223","40224","40225","40226","40227","40228","40229","40230","40231","40232","40233","40234","40235"
						,"40236","40237","40238","40239","40240","46767","46768","46769","46770","46771","52570","52571","53031","53032","53033","53089","53090","53091","53092","53093"
						,"53094","53095","53096","53097","53098","53099","53100","53101","53102","53103","53104","54000","56347","56348","56349","57068","57069","58760","58761","58762"
						,"58800","58801","58802","58803","58804","58805","58806","58809","58810","58816","58817","58818","58826","58828","58829","58830","58831","58832","58833","58834"
						,"58835","58836","58837","58838","58839","58840","58841","58842","58843","58844","58845","58846","58847","58848","58849","58850","58851","58852","58853","58854"
						,"58855","58856","58857","58858","58859","58860","58861","58862","58863","58864","58865","58866","58953","58954","58955","58956","58957","58958","59137","59138"
						,"59139","59140","59141","59142","59143","59144","59145","59149","59150","59151","59152","59153","59154","59155","59156","59157","59158","59159","59160","59161"
						,"59162","59163","59164","59165","59166","59421","59531","59551","59563","59568","59650","59766","59781","59782","59783","59784","59785","59786","59787","59788"
						,"59789","59790","63000","63001","63365","63000","63001","63002","63003","63004","63005","63006","63007","63008","63009","63010","63011","63012","63013","63014"
						,"63015","63016","63017","63018","63019","63020","63021","63022","63023","63024","63025","63026","63027","63028","63029","63030","63031","63032","63033","63034"
						,"63035","63036","63037","63038","63039","63040","63041","63042","63043","63044","63045","63046","63047","63048","63049","63050","63051","63052","63053","63054"
						,"63055","63056","63057","63058","63059","63060","63061","63062","63063","63064","63065","63066","63067","63068","63069","63070","63071","63072","63073","63074"
						,"63075","63076","63077","63078","63079","63080","63081","63082","63083","63084","63085","63086","63087","63088","63089","63090","63091","63092","63093","63094"
						,"63095","63096","63097","63098","63099","63100","63101","63102","63103","63104","63105","63106","63107","63108","63109","63110","63111","63112","63113","63114"
						,"63115","63116","63117","63118","63119","63120","63121","63122","63123","63124","63125","63126","63127","63128","63129","63130","63131","63132","63133","63134"
						,"63135","63136","63137","63138","63139","63140","63141","63142","63143","63144","63145","63146","63147","63148","63149","63150","63151","63152","63153","63154"
						,"63155","63156","63157","63158","63159","63160","63161","63162","63163","63164","63165","63166","63167","63168","63169","63170","63171","63172","63173","63174"
						,"63175","63176","63177","63178","63179","63180","63181","63182","63183","63184","63185","63186","63187","63188","63189","63190","63191","63192","63193","63194"
						,"63195","63196","63197","63198","63199","63200","63201","63202","63203","63204","63205","63206","63207","63208","63209","63210","63211","63212","63213","63214"
						,"63215","63216","63217","63218","63219","63220","63221","63222","63223","63224","63225","63226","63227","63228","63229","63230","63231","63232","63233","63234"
						,"63235","63236","63237","63238","63239","63240","63241","63242","63243","63244","63245","63246","63247","63248","63249","63250","63251","63252","63253","63254"
						,"63255","63256","63257","63258","63259","63260","63261","63262","63263","63264","63265","63266","63267","63268","63269","63270","63271","63272","63273","63274"
						,"63275","63276","63277","63278","63279","63280","63281","63282","63283","63284","63285","63286","63287","63288","63289","63290","63291","63292","63293","63294"
						,"63295","63296","63297","63298","63299","63300","63301","63302","63303","63304","63305","63306","63307","63308","63309","63310","63311","63312","63313","63314"
						,"63315","63316","63317","63318","63319","63320","63321","63322","63323","63324","63325","63326","63327","63328","63329","63330","63331","63332","63333","63334"
						,"63335","63336","63337","63338","63339","63340","63341","63342","63343","63344","63345","63346","63347","63348","63349","63350","63351","63352","63353","63354"
						,"63355","63356","63357","63358","63359","63360","63361","63362","63363","63364","63365","63500","63501","63502","63503","63504","63505","63506","63507","63508"
						,"63509","63510","63511","63512","63513","63514","63515","63516","63517","63518","63519","63520","63521","63522","63523","63524","63525","63526","63527","63528"
						,"63529","63530","63531","63532","63533","63534","63535","63536","63537","63538","63539","63540","63541","63542","63543","63544","63545","63546","63547","63548"
						,"63549","63550","63551","63552","63553","63554","63555","63556","63557","63558","63559","63560","63561","63562","63563","63564","63565","63566","63567","63568"
						,"63569","63570","63571","63572","63573","63574","63575","63576","63577","63578","63579","63580","63581","63582","63583","63584","63585","63586","63587","63588"
						,"63589","63590","63591","63592","63593","63594","63595","63596","63597","63598","63599","63600","63601","63602","63603","63604","63605","63606","63607","63608"
						,"63609","63610","63611","63612","63613","63614","63615","63616","63617","63618","63619","63620","63621","63622","63623","63624","63625","63626","63627","63628"
						,"63629","63630","63631","63632","63633","63634","63635","63636","63637","63638","63639","63640","63641","63642","63643","63644"];
	var zip_ad_values2 = [,"355842","355845","355846","355847","355848","409830","409831","409832","409833","409835","409840","409841","409842","409850","409851","409852","409853","409855","409880","409881"
						,"409882","409883","409890","409891","409892","409893","409910","409911","409912","409913","409919","417910","417911","417912","417913","417920","417921","417922","417923","417930"
						,"417931","417932","417933","425350","513890","513891","513892","513893","527913","530145","530430","530440","530450","530800","530801","535145","535804","535805","535806","535813"
						,"535823","535824","535830","535831","535832","535833","535834","535835","535836","535837","535838","535840","535841","535842","535843","535844","535845","535846","535847","535850"
						,"535851","535852","535860","535861","535862","535863","535870","535871","535872","535873","535880","535881","535882","535883","535884","535885","535890","535891","535892","535893"
						,"535894","535895","535896","535897","535898","535910","535911","535912","535913","535914","535915","535916","535917","535918","535919","535920","535921","535922","535923","535924"
						,"535925","535926","535930","535931","535932","535933","535934","535935","535936","535940","535941","535942","535943","536928","536929","536935","537809","537814","537815","537816"
						,"537817","537820","537821","537822","537823","537824","537825","537826","537830","537831","537832","537833","537834","537835","537836","537840","537841","537842","537843","537844"
						,"537845","537846","537847","537848","537849","537850","537851","537852","537853","537900","537901","537902","537903","537904","537905","537906","537907","537909","537910","537911"
						,"537912","537913","537914","537920","537921","537922","537925","539910","539911","539912","539913","539914","539915","539916","539917","539918","539919","548902","548909","548990"
						,"548991","548992","548993","555300","556830","556831","556832","556834","556835","556836","556837","556838","556839","556840","556841","556842","556843","556844","556845","556846"
						,"556847","556848","556849","556850","556851","556852","556853","556854","556855","556856","556857","573810","573811","573812","573813","573814","573815","573816","573817","573818"
						,"573819","579910","579911","579912","579913","579914","579915","618400","618420","618430","618440","618450","650835","650910","650911","650912","650913","650914","650915","650916"
						,"650920","650921","650922","650923","650924","650925","650926","650927","650930","650931","650932","650933","650934","650944","650945","650946","664250","664270","690950","690951"
						,"690952","690980","695820","695850","695851","695852","695855","695950","695951","695952","695980","695983","742870","742871","742872","742873","742924","799800","799801","799802"
						,"799803","799804","799805","799810","799811","799812","799813","799815","799820","799821","799822","799823"
						,"22386","22387","22388","23004","23005","23006","23007","23008","23009","23010","23100","23101","23102","23103","23104","23105","23106","23107","23108","23109","23110"
						,"23111","23112","23113","23114","23115","23116","23124","23125","23126","23127","23128","23129","23130","23131","23132","23133","23134","23135","23136","31700","31708"
						,"32133","33411","40200","40201","40202","40203","40204","40205","40206","40207","40208","40209","40210","40211","40212","40213","40214","40215","40216","40217","40218"
						,"40219","40220","40221","40222","40223","40224","40225","40226","40227","40228","40229","40230","40231","40232","40233","40234","40235","40236","40237","40238","40239"
						,"40240","46767","46768","46769","46770","46771","52570","52571","53031","53032","53033","53089","53090","53091","53092","53093","53094","53095","53096","53097","53098"
						,"53099","53100","53101","53102","53103","53104","54000","56347","56348","56349","57068","57069","58760","58761","58762","58800","58801","58802","58803","58804","58805"
						,"58806","58809","58810","58816","58817","58818","58826","58828","58829","58830","58831","58832","58833","58834","58835","58836","58837","58838","58839","58840","58841"
						,"58842","58843","58844","58845","58846","58847","58848","58849","58850","58851","58852","58853","58854","58855","58856","58857","58858","58859","58860","58861","58862"
						,"58863","58864","58865","58866","58953","58954","58955","58956","58957","58958","59137","59138","59139","59140","59141","59142","59143","59144","59145","59149","59150"
						,"59151","59152","59153","59154","59155","59156","59157","59158","59159","59160","59161","59162","59163","59164","59165","59166","59421","59531","59551","59563","59568"
						,"59650","59766","59781","59782","59783","59784","59785","59786","59787","59788","59789","59790","63000","63001","63365"];
	if((document.getElementById("hidden_enpri_cd_chk")==null || document.getElementById("hidden_enpri_cd_chk")==undefined)){
		zip_ad_values = zip_ad_values1;
	}else{
		if(document.getElementById("hidden_enpri_cd_chk").value=="0072621"){
			zip_ad_values = zip_ad_values1;
		}else{
			zip_ad_values = zip_ad_values2;
		}
	}
	for(var i=0;i<zip_ad_values.length;i++){
		if(zip==zip_ad_values[i]){
			zip_vl = "Y";
		}
	}
	return zip_vl;
}

function comma(amt) {
	var str = String(amt);
	if (str.indexOf(".")>-1){
		str = str.substring(0, str.indexOf("."));
	}
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function salepercent(orgcost, cost) {
	orgcost = orgcost.replace(/,/, "") * 1;
	cost = cost.replace(/,/, "") * 1;
	var cha = orgcost - cost;
	return Math.round((cha / orgcost) * 100);
};