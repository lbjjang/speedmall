function setfmt(val, size, ch){
	var strval = ""+val;
	for(var ii=0; strval.length < size; ii++){
		strval = ch + strval;		
	}
	return strval;
}

function gen(pwd, key){
	var pwdLen = 0;
	var pwdch = '';
	var keych = '';
	var pwdxor = '';	
	for(var ii=0, jj=0; ii<pwd.length; ii++){		
		pwdch = pwd.charCodeAt(ii);
		keych = key.charCodeAt(jj);
		pwdxor += setfmt(pwdch + keych, 5, "0");

		jj = (++jj < key.length ? jj : 0);
	}
	return pwdxor;
}


function ascii_trans(eleObj){
	var key = "mrokeycode";
	var pwd = eleObj;
	var pwdxor = gen(pwd.value, key);
	//var pwd_lower = pwdxor.toLowerCase(); // 패스워드 소문자로 변경 sskim 20101217
	pwd.value = pwdxor;
}

