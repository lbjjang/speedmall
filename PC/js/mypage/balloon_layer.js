// 말풍선 도움말 


function show_balloon_layer(content,balloon_width,balloon_height,x_plus,y_plus){


		divObj = document.getElementById("balloon_layer");

		if(content=="") return;

		var event = event ? event : window.event;
		var x = parseInt(event.clientX);
		var y = parseInt(event.clientY) + document.documentElement.scrollTop;

		divObj.style.left = (x + x_plus) + "px";
		divObj.style.top = (y + y_plus) + "px";

		divObj.style.width = balloon_width + 6 + "px";
		divObj.style.height = balloon_height + 6 + "px";

		content='<table width="100%" height="100%" border="1" cellspacing="0" cellpadding="0"><tr><td>'
										+'<table width="100%" height="100%" bgcolor="#FFFFFF" border="0" cellspacing="0" cellpadding="0"><tr><td style="padding: 3px 3px 3px 3px">'+content+'</td></tr></table>'
										+'</td></tr></table>';


		divObj.innerHTML=content;
		divObj.style.display = '';


}

function hidden_balloon_layer() {
	divObj = document.getElementById("balloon_layer");
	divObj.innerHTML="";
	divObj.style.display = 'none';
}


	
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

//var balloon_layer = '<div id="balloon_layer" style="position:absolute; left:180px; top:10px; 	width:10px; height:15px; z-index:1; display=none;">'+'</div>';
var balloon_layer = '<div id="balloon_layer" style="position:absolute; z-index:1; display=none;">'+'</div>';



document.write(balloon_layer);


