// Ư������üũ
function special_word(a){
	var espword = "~`#@$%,.^&*'()|\+=;:\"<>!?/";
	for (i=0; i<a.length; i++) {
	if((espword.indexOf(a.charAt(i)))>-1){
		return false;
	}
    }
	return true;
}


// ����,������ ȥ��üũ = ȸ�����Խû��
function english_su(flag){

if(!isNaN(flag)){ return false; }
if(english_chk(flag)==true){return false; }
if(special_word(flag)==false){return false; }

return true;
}

// ����üũ
function english_chk(id) { //������
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (i=0; i< id.length; i++) {
id_check = id.charAt(i);
for ( j=0 ;j< str.length;j++) {
if (id_check == str.charAt(j)){ break; }
if (j+1 == str.length) {
return;
}
}
}
return true;
}

