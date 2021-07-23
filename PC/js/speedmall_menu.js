//////////		/////		/////
function able(i){
	incou+=i;
	if(incou.indexOf(i)>=0){
	if(i=="sw"){
		if(document.getElementById("ima").addEventListener){
			document.getElementById("ima").addEventListener("click",function(){sw();},false);
		}else if(document.getElementById("ima").attachEvent){
			document.getElementById("ima").attachEvent("onclick",function(){sw();});
		}
	}else{
		var aai = "aa"+i;
		if(document.getElementById(aai<%/*"aa"+i*/%>).addEventListener){
			document.getElementById(aai<%/*"aa"+i*/%>).addEventListener("mouseover",function(){onn(i);},false);
			document.getElementById(aai<%/*"aa"+i*/%>).addEventListener("mouseout",function(){off(i);},false);
		}else if(document.getElementById(aai<%/*"aa"+i*/%>).attachEvent){
			document.getElementById(aai<%/*"aa"+i*/%>).attachEvent("onmouseover",function(){onn(i);});
			document.getElementById(aai<%/*"aa"+i*/%>).attachEvent("onmouseout",function(){off(i);});
			}
		}
	}
}
//////////		/////		/////
	function ch(){
		ete="true";
		//alert("test");
	}
	$(window).load(function(){
		setTimeout(ch, 500);

	});
/////////////
function onn(y)//���댁�대�� �����댁＜�� 遺�遺�
{
if(tet=="true"){}else{//��泥대ぉ濡��� �������� 寃쎌�곕�� ������吏� ������.
var zzy = "zz"+y;	
var asy = "as"+y;
var aay = "aa"+y;
var iml = "iml"+y;
showBox1 = document.getElementById(zzy<%//"zz"+y%>);//留��곗�ㅺ� ��李⑦�� 怨녹�� y媛��� �쎄굅 �대�� ��移��� id媛��� �쎈����
  showBox1.style.display="";//�대�� ���댁�댁�� ������ 蹂댁�대��濡� �ㅼ��
	var ipo = 0;
<%	//showBox1.style.left = "117px";//�������� ���댁�댁�� 醫�痢≪��移�%>
	var ai=0;
<%	//��遺�硫��� ���� ��移�
	//1.硫��� ��泥댁�� 湲몄�대낫�� ��遺�硫��댁�� 湲몄�닿� 湲몃�ㅻ㈃ ��移��� 0%>
	if((document.getElementById("sa").offsetWidth - document.getElementById(asy<%/*"as"+y*/%>).offsetWidth)<0){
		ai=0;
<%	//2.��遺�硫��� ������移����� �⑥�� 湲몄�대낫�� ��遺�硫��댁�� 湲몄�닿� 湲몃�ㅻ㈃ �곗륫����%>
	}else if((960-(document.getElementById(aay<%/*"aa"+y*/%>).offsetLeft))<document.getElementById(asy<%/*"as"+y*/%>).offsetWidth){
		ai=document.getElementById("sa").offsetWidth - document.getElementById(asy<%/*"as"+y*/%>).offsetWidth-7;
<%	//3. 1怨�2�� �대�뱁��吏� ����寃쎌�� 硫��� 諛�濡� ������ ��移�%>
	}else{
		ai=document.getElementById(aay<%/*"aa"+y*/%>).offsetLeft;
	}
	showBox1.style.left = ai-1+"px";//�������� ���댁�댁�� 醫�痢≪��移�(-2)
	showBox1.style.top = document.getElementById("sa").offsetTop+35+"px"; //�������� ���댁�댁�� 硫��댁���� 媛�寃�
<%			//showBox1.style.top = "35px"; //�������� ���댁�댁�� 硫��댁���� 媛�寃�
			//document.getElementById("aa"+y).style.backgroundColor="white";//���댁�닿� ������寃쎌�� 硫��댁�� 蹂���
	/*document.getElementById("aa"+y).style.backgroundImage="url(/small/images/sp_menu/mall_top_manu.png)";//���댁�닿� ������寃쎌�� 硫��댁�� 蹂���
	document.getElementById("aa"+y).style.backgroundImage="url("+tel1[y+1]+")";//���댁�닿� ������寃쎌�� 硫��댁�� 蹂���
	document.getElementById("aa"+y).style.backgroundRepeat="no-repeat";//�대�몄� 諛�蹂� 諛⑹�*/%>
		document.getElementById(aay<%/*"aa"+y*/%>).style.color="black";
<%	//if(img_ini>0){}else{img_ini++;
	/*	for(var i=0;i<7;i++){
			if(i==y){*/%>
				document.getElementById(iml<%/*"iml"+y*/%>).style.display="";
	<%	/*	}else{
				document.getElementById("iml"+i).style.display="none";
			 	off(i);
			}
		}*/
	//}
	/*else{alert("test");
		document.getElementById("iml"+y).style.display="";
	}*/%>
		document.getElementById(iml<%/*"iml"+y*/%>).style.top=document.getElementById(aay<%/*"aa"+y*/%>).offsetTop+"px";
		document.getElementById(iml<%/*"iml"+y*/%>).style.left=document.getElementById(aay<%/*"aa"+y*/%>).offsetLeft+"px";
}//}
}
function off(z){//���댁�대�� �④린�� 遺�遺�
<%//if(ete=="false"){}else{
	//img_ini++;%>
	if("A"==z){
		for(var i=0;i<7;i++){var iml = "iml"+i; var zzi = "zz"+i;
			document.getElementById(iml<%/*"iml"+i*/%>).style.display="none";
			showBox1 = document.getElementById(zzi);//留��곗�ㅺ� �대����寃쎌�� �댁�� 留��곗�ㅺ� ��移��� 怨녹�� y媛��� �쎈����
			showBox1.style.display="none";	//�대�� ���댁�대�� �ㅼ�� �④�
		}
	}else{
	//	if(img_ini==3){
		var iml ="iml"+z;
		var zzz = "zz"+z;
		document.getElementById(iml<%/*"iml"+z*/%>).style.display="none";
		showBox1 = document.getElementById(zzz<%/*"zz"+z*/%>);//留��곗�ㅺ� �대����寃쎌�� �댁�� 留��곗�ㅺ� ��移��� 怨녹�� y媛��� �쎈����
		showBox1.style.display="none";	//�대�� ���댁�대�� �ㅼ�� �④�
	//	img_ini=0;
	//	}
	}//img_ini=0;
<%//document.getElementById("iml"+z).innerHTML="";
/*document.getElementById("aa"+z).style.backgroundImage="url("+tel2[z+1]+")";//��遺�瑜� 硫��댁�� ���� ������濡� 蹂듦�
document.getElementById("aa"+z).style.backgroundRepeat="no-repeat";//�대�몄� 諛�蹂� 諛⑹�*/
//document.getElementById("aa"+z).style.color="white";
//document.getElementById("aa"+z).style.width="100%";//��遺�瑜� 硫��댁�� ���� ������濡� 蹂듦�
%>
}//}
function sw(){//��泥대��대낫湲� 遺�遺�
	if(ete=="true"){
showBox2 = document.getElementById("sw");//��泥대��대�� �������� ���댁�� �몄�
	if(tet=="false"){//������吏� ���� 寃쎌��
		showBox2.style.display="";//���댁�댄����
		showBox2.style.top = document.getElementById("sa").offsetTop+36+"px"; //�������� ���댁�댁�� 硫��댁���� 媛�寃�
		showBox2.style.left="2px";
<%		//showBox2.style.top = "35px"; //�������� ���댁�댁�� 硫��댁���� 媛�寃�%>
		tet="true";//�ㅻⅨ ���댁�대��대�ㅼ�� ������吏�
<%		//document.getElementById("sww").style.background="black";//��泥대��� ��蹂�寃�%>
		document.getElementById("ima").src="/small/images/sp_menu/mall_top_manu_01_2.jpg";

	}else if(tet){
		showBox2.style.display="none";//��泥대��� ���댁�� �④린湲�
		tet="false";//�ㅻⅨ ���댁�대�ㅼ�� ��������
<%		//document.getElementById("sww").style.background="red";//��泥대��대�� �ㅼ�� �������쇰�%>
		document.getElementById("ima").src="/small/images/sp_menu/mall_top_manu_01.jpg";
	}
}else{}
}
function gol(y,z){//�대�� 移댄��怨�由щ� �대��(以�/��遺�瑜�援щ�,移댄��怨�由щ���)
	if(y==1){//以�遺�瑜�
		self.location.href = "/small/search/cate_list_step_01.jsp?select_cate_cd="+z;
	}else if(y==2){//��遺�瑜�
		self.location.href = "/small/search/cate_list_step_02.jsp?select_cate_cd="+z;
	}
}