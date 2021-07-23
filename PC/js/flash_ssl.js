function flashResize(id,wid,hei){
	var flashEl = 	document.getElementById(id);
	flashEl.style.height = hei + "px";
	flashEl.style.width = wid + "px";
}

function changeEmbed(arg1, arg2, arg3)
{
	document.write("<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'");
			//document.write(" codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0' ");
			document.write(" width='"+arg2+"' height='"+arg3+"'");
			document.write(" id='mainmenu' align='middle' >");

		document.write("<param name='movie' value='"+arg1+"'>");
		document.write("<param name='quality' value='high'>");
		document.write("<param name='wmode' value='transparent'>");
		document.write("<param name='allowScriptAccess' value='sameDomain'>");
		document.write("<param name='allowFullScreen' value='false'>");
		document.write("<param name='scale' value='noscale'>");

		document.write("<embed src='"+arg1+"' quality='high' ");
				document.write(" type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer'");
				document.write(" width='"+arg2+"' height='"+arg3+"' ");
				document.write("  name='mainmenu' align='middle' allowScriptAccess='sameDomain' allowFullScreen='false' > ");
			document.write("</embed>");
	document.write("</object>");
}
