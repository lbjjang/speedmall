function replace_quot(para){
	
	for(; para.value.indexOf('"') > -1; ){
		para.value = para.value.replace('"', "¢©");
	}	

	for(; para.value.indexOf("'") > -1; ){	
		para.value = para.value.replace("'", "¢¥");
	}

}


function replace_quot2(para){
	
	for(; para.indexOf('"') > -1; ){
		para = para.replace('"', "¢©");
	}	

	for(; para.indexOf("'") > -1; ){	
		para= para.replace("'", "¢¥");
	}
	return para;
}