
function eScroll()
{
	/*********************************
	 * eScroll ( eNamoo scroll script )
	 * by mirrh
	 * 2006.07.16
	 ********************************/

	var thisObj = this;
	this.timeObj = null;

	/*** 설정변수 ***/
	this.mode = "top";				// 스크롤 방향 (top|left)
	this.width = "100%";			// 라인당 가로값 (pixel)
	this.height = 20;				// 라인당 높이값 (pixel)
	this.line = 1;					// 출력 라인수
	this.delay = 150;				// 스크롤후 딜레이 시간
	this.speed = 1;					// 스크롤 속도 (작을수록 빠름)
	this.id = 'obj_eScroll';		// 객체 id (클래스 다중 사용시 id 다르게 지정 요망)
	this.contents = new Array();	// 출력 내용 (배열로 내용 지정 요망)
	this.align = "left";			// 내용 aligne
	this.valign = "middle";			// 내용 valigne

	/*** 내장변수 ***/
	this.gap = 0;
	this.direction = 1;

	this.add = add;
	this.exec = exec;
	this.start = start;
	this.stop = stop;
	this.scroll = scroll;
	this.direct = direct;
	this.go = go;

	function add(str)
	{
		this.contents[this.contents.length] = str;
	}

	function exec()
	{
		this.basis = (this.mode == "left") ? this.width : this.height;
		var outWidth = this.width * ((this.mode == "left") ? this.line : 1);
		var outHeight = this.height * ((this.mode == "top") ? this.line : 1);

		var outline = "<div id=" + this.id + " style='overflow:hidden;width:" + outWidth + ";height:" + outHeight + "'><table></table></div>";
		document.write(outline);
		this.obj = document.getElementById(this.id);

		var tb = this.obj.appendChild(document.createElement("table"));
		var tbody = tb.appendChild(document.createElement("tbody"));
		tb.cellPadding = 0 ;
		tb.cellSpacing = 0 ;
		tb.onmouseover = function(){thisObj.stop()};
		tb.onmouseout = function(){thisObj.start()};

		if (this.mode=="left") var tr = tbody.appendChild(document.createElement("tr"));
		for (var k=0; k < this.contents.length; k++){
			if (this.mode=="top") var tr = tbody.appendChild(document.createElement("tr"));
			var td = tr.appendChild(document.createElement("td"));
			td.noWrap = true;
			td.style.width = this.width;
			td.style.height = this.height;
			td.style.textAlign = this.align;
			td.style.verticalAlign = this.valign;
			td.innerHTML = this.contents[k];
		}

		var len = (this.contents.length<this.line) ? this.contents.length : this.line;
		for (i=0;i<len;i++){
			if (this.mode=="top") var tr = tbody.appendChild(document.createElement("tr"));
			td = tr.appendChild(document.createElement("td"));
			td.noWrap = true;
			td.style.width = this.width;
			td.style.height = this.height;
			td.style.textAlign = this.align;
			td.style.verticalAlign = this.valign;
			td.innerHTML = this.contents[i];
		}

		this.obj.parent = this;
		this.tpoint = this.basis * this.contents.length;
		this.start();
	}

	function scroll()
	{
		var out = (this.mode=="left") ? this.obj.scrollLeft : this.obj.scrollTop;
		if (out%this.basis==0){
			this.gap++;
			if (this.gap>=this.delay) this.gap = 0;
		}
		if (!this.gap){
			var ret = (out==this.tpoint) ? this.direction : out + this.direction;
			if (ret<0) ret = this.tpoint + ret;
			if (this.mode=="left") this.obj.scrollLeft = ret;
			else this.obj.scrollTop = ret;
		}
	}

	function start()
	{
		this.timeObj = window.setInterval("(document.getElementById('" + this.id + "')).parent.scroll()",this.speed);
	}

	function stop()
	{
		clearTimeout(this.timeObj);
	}

	function direct(d)
	{
		this.direction = d;
	}

	function go()
	{
		this.stop();
		var out = (this.mode=="left") ? this.obj.scrollLeft : this.obj.scrollTop;
		var ret = (parseInt(out / this.basis) + this.direction) * this.basis;
		if (ret<0) ret = this.tpoint + ret;
		if (ret>this.tpoint) ret = this.basis;
		if (this.mode=="left") this.obj.scrollLeft = ret;
		else this.obj.scrollTop = ret;
	}

}
