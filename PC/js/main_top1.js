var Auto_Change_Interval;	// 반복 저장 변수	

var ev_01="event_20120401/bar-2.gif";
var ev_02="event_20120301/main_bar_06.gif";
var ev_03="event_20120301/main_bar_02.gif";
var ev_04="event_20120301/main_bar_03.gif";
var ev_05="event_20120301/main_bar_05.gif";
var ev_01_on="event_20120401/bar-1.gif";
var ev_02_on="event_20120301/main_bar_on_06.gif";
var ev_03_on="event_20120301/main_bar_on_02.gif";
var ev_04_on="event_20120301/main_bar_on_03.gif";
var ev_05_on="event_20120301/main_bar_on_05.gif";

function f_change_main(flag){

	if(Auto_Change_Interval==null){			
		Auto_Change_Interval= setInterval('main_Change()',8000);			
		}
	
		var roll_change1= document.getElementById('roll1').style.display;
		var roll_change2= document.getElementById('roll2').style.display;
		var roll_change3= document.getElementById('roll3').style.display;
		var roll_change4= document.getElementById('roll4').style.display;
		var roll_change5= document.getElementById('roll5').style.display;
		
		var check_div="";
		
		if(roll_change1=="block"){  
			check_div="roll1";	
		}else if(roll_change2=="block"){
			check_div="roll2";
		}else if(roll_change3=="block"){
			check_div="roll3";
		}else if(roll_change4=="block"){
			check_div="roll4";
		}else if(roll_change5=="block"){
			check_div="roll5";
		}
		
		
		call_ajax(check_div,"/small/main/main_top.jsp?flag="+flag);
	
	}
	
	function f_change_main_change(flag){

		if(flag==1){
		document.main1.src="/small/images/event/"+ev_01_on;
		document.main2.src="/small/images/event/"+ev_02;
		document.main3.src="/small/images/event/"+ev_03;
		document.main4.src="/small/images/event/"+ev_04;
		document.main5.src="/small/images/event/"+ev_05;
		}else if(flag==2){
		document.main1.src="/small/images/event/"+ev_01;
		document.main2.src="/small/images/event/"+ev_02_on;
		document.main3.src="/small/images/event/"+ev_03;
		document.main4.src="/small/images/event/"+ev_04;
		document.main5.src="/small/images/event/"+ev_05;
		}else if(flag==3){
		document.main1.src="/small/images/event/"+ev_01;
		document.main2.src="/small/images/event/"+ev_02;
		document.main3.src="/small/images/event/"+ev_03_on;
		document.main4.src="/small/images/event/"+ev_04;
		document.main5.src="/small/images/event/"+ev_05;
		}else if(flag==4){
		document.main1.src="/small/images/event/"+ev_01;
		document.main2.src="/small/images/event/"+ev_02;
		document.main3.src="/small/images/event/"+ev_03;
		document.main4.src="/small/images/event/"+ev_04_on;
		document.main5.src="/small/images/event/"+ev_05;
		}else if(flag==5){
		document.main1.src="/small/images/event/"+ev_01;
		document.main2.src="/small/images/event/"+ev_02;
		document.main3.src="/small/images/event/"+ev_03;
		document.main4.src="/small/images/event/"+ev_04;
		document.main5.src="/small/images/event/"+ev_05_on;
		}
	
		var roll_change1= document.getElementById('roll1').style.display;
		var roll_change2= document.getElementById('roll2').style.display;
		var roll_change3= document.getElementById('roll3').style.display;
		var roll_change4= document.getElementById('roll4').style.display;
		var roll_change5= document.getElementById('roll5').style.display;
		
		var check_div="";
		
		if(roll_change1=="block"){  
			check_div="roll1";	
		}else if(roll_change2=="block"){
			check_div="roll2";
		}else if(roll_change3=="block"){
			check_div="roll3";
		}else if(roll_change4=="block"){
			check_div="roll4";
		}else if(roll_change5=="block"){
			check_div="roll5";
		}
		
		call_ajax(check_div,"/small/main/main_top.jsp?flag="+flag);
	
	}
	
	function f_stop_main_change(flag)
	{

		if( Auto_Change_Interval!= null){
			window.clearInterval(Auto_Change_Interval);
			Auto_Change_Interval = null;				
		}

		if(flag==1){
			 document.main1.src="/small/images/event/"+ev_01;
			}else if(flag==2){
			 document.main2.src="/small/images/event/"+ev_02;
			}else if(flag==3){
			 document.main3.src="/small/images/event/"+ev_03;
			}else if(flag==4){
			 document.main4.src="/small/images/event/"+ev_04;
			}else if(flag==5){
			 document.main5.src="/small/images/event/"+ev_05;
		}
		
	} 
	
	
	
	function f_Start_Auto_Change(){
	
		if(Auto_Change_Interval==null){			
		Auto_Change_Interval= setInterval('main_Change()',8000);			
		}			
	}
	
	function main_Change(){			
				
		var roll_change1= document.getElementById('roll1').style.display;
		var roll_change2= document.getElementById('roll2').style.display;
		var roll_change3= document.getElementById('roll3').style.display;
		var roll_change4= document.getElementById('roll4').style.display;
		var roll_change5= document.getElementById('roll5').style.display;
		
		if(roll_change1=="block"){  			
			document.getElementById('roll1').style.display='none';
			document.getElementById('roll2').style.display='block';
			document.getElementById('roll3').style.display='none';
			document.getElementById('roll4').style.display='none';
			document.getElementById('roll5').style.display='none';
			document.main2.src="/small/images/event/"+ev_02_on;
			document.main1.src="/small/images/event/"+ev_01;
		}else if(roll_change2=="block"){
			document.getElementById('roll1').style.display='none';
			document.getElementById('roll2').style.display='none';
			document.getElementById('roll3').style.display='block';
			document.getElementById('roll4').style.display='none';
			document.getElementById('roll5').style.display='none'; 
			document.main3.src="/small/images/event/"+ev_03_on;
			document.main2.src="/small/images/event/"+ev_02;
		}else if(roll_change3=="block"){
			document.getElementById('roll1').style.display='none';
			document.getElementById('roll2').style.display='none';
			document.getElementById('roll3').style.display='none';
			document.getElementById('roll4').style.display='block';
			document.getElementById('roll5').style.display='none';
			document.main4.src="/small/images/event/"+ev_04_on;
			document.main3.src="/small/images/event/"+ev_03;
		}else if(roll_change4=="block"){
			document.getElementById('roll1').style.display='none';
			document.getElementById('roll2').style.display='none';
			document.getElementById('roll3').style.display='none';
			document.getElementById('roll4').style.display='none';
			document.getElementById('roll5').style.display='block';
			document.main5.src="/small/images/event/"+ev_05_on;
			document.main4.src="/small/images/event/"+ev_04;
		}else if(roll_change5=="block"){	
			document.getElementById('roll1').style.display='block';
			document.getElementById('roll2').style.display='none';
			document.getElementById('roll3').style.display='none';
			document.getElementById('roll4').style.display='none';
			document.getElementById('roll5').style.display='none'; 
			document.main1.src="/small/images/event/"+ev_01_on;
			document.main5.src="/small/images/event/"+ev_05;
		}	
	}

