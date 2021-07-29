
function eScroll()
{
	/*********************************
	 * eScroll ( eNamoo scroll script )
	 * by mirrh
	 * 2006.07.16
	 ********************************/

	var thisObj = this;
	this.timeObj = null;

	/*** �������� ***/
	this.mode = "top";				// ��ũ�� ���� (top|left)
	this.width = "100%";			// ���δ� ���ΰ� (pixel)
	this.height = 20;				// ���δ� ���̰� (pixel)
	this.line = 1;					// ��� ���μ�
	this.delay = 100;				// ��ũ���� ������ �ð�
	this.speed = 1;					// ��ũ�� �ӵ� (�������� ����)
	this.id = 'obj_eScroll';		// ��ü id (Ŭ���� ���� ���� id �ٸ��� ���� ���)
	this.contents = new Array();	// ��� ���� (�迭�� ���� ���� ���)
	this.align = "left";			// ���� aligne
	this.valign = "middle";			// ���� valigne

	/*** ���庯�� ***/
	this.gap = 0;
	this.direction = 1;

	this.add = add;
	this.exec = exec;
	this.start = start;
	this.stop = stop;
	this.scroll = scroll;
	this.direct = direct;
	this.go = go;
	
	this.exec2 = exec2;

	function add(str)
	{
		this.contents[this.contents.length] = str;
	}

	function exec()
	{
		this.basis = (this.mode == "left") ? this.width : this.height;
		var outWidth = this.width * ((this.mode == "left") ? this.line : 1);
		var outHeight = this.height * ((this.mode == "top") ? this.line : 1);


		this.obj = document.getElementById(this.id)
		this.obj.style.overflow = "hidden";
		this.obj.style.width = outWidth;
		this.obj.style.height = outHeight;


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
	
	
	//20121121 �ű� ����ŷ price�� ���� ǥ��
	function exec2()
	{
		this.basis = (this.mode == "left") ? this.width : this.height;
		var outWidth = this.width * ((this.mode == "left") ? this.line : 1);
		var outHeight = this.height * ((this.mode == "top") ? this.line : 1);


		this.obj = document.getElementById(this.id)
		this.obj.style.overflow = "hidden";
		this.obj.style.width = outWidth;
		this.obj.style.height = outHeight;


		var tb = this.obj.appendChild(document.createElement("table"));
		var tbody = tb.appendChild(document.createElement("tbody"));
		tb.cellPadding = 0 ;
		tb.cellSpacing = 0 ;

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

		/*var len = (this.contents.length<this.line) ? this.contents.length : this.line;
		for (i=0;i<len;i++){
			if (this.mode=="top") var tr = tbody.appendChild(document.createElement("tr"));
			td = tr.appendChild(document.createElement("td"));
			td.noWrap = true;
			td.style.width = this.width;
			td.style.height = this.height;
			td.style.textAlign = this.align;
			td.style.verticalAlign = this.valign;
			td.innerHTML = this.contents[i];
		}*/

		this.obj.parent = this;
		this.tpoint = this.basis * this.contents.length;
		this.stop();
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
		this.start() 
	}

}


function eScroll1()
{
	/*********************************
	 * eScroll ( eNamoo scroll script )
	 * by mirrh
	 * 2006.07.16
	 ********************************/

	var thisObj = this;
	this.timeObj = null;

	/*** �������� ***/
	this.mode = "top";				// ��ũ�� ���� (top|left)
	this.width = "100%";			// ���δ� ���ΰ� (pixel)
	this.height = 20;				// ���δ� ���̰� (pixel)
	this.line = 1;					// ��� ���μ�
	this.delay = 100;				// ��ũ���� ������ �ð�
	this.speed = 50;					// ��ũ�� �ӵ� (�������� ����)
	this.id = 'obj_eScroll';		// ��ü id (Ŭ���� ���� ���� id �ٸ��� ���� ���)
	this.contents = new Array();	// ��� ���� (�迭�� ���� ���� ���)
	this.align = "left";			// ���� aligne
	this.valign = "middle";			// ���� valigne

	/*** ���庯�� ***/
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


		this.obj = document.getElementById(this.id)
		this.obj.style.overflow = "hidden";
		this.obj.style.width = outWidth;
		this.obj.style.height = outHeight;


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
		this.start() 
	}

}

//�α��ǰ ����
var main_list_01 = new eScroll;
main_list_01.id = "scrolling_main_list_01";
main_list_01.mode = "left";
main_list_01.line = 3;
main_list_01.width = 120;
main_list_01.height = 120;
main_list_01.align = "center";
main_list_01.valign = "top";
//�Ϸ�Ư�� ����
var main_list_02 = new eScroll;
main_list_02.id = "scrolling_main_list_02";
main_list_02.mode = "left";
main_list_02.line = 1;
main_list_02.width = 150;
main_list_02.height = 105;
main_list_02.align = "center"; 
main_list_02.valign = "top";
//�Ϸ�Ư�� ������ 
var main_list_03 = new eScroll1;
main_list_03.id = "scrolling_main_list_03";
main_list_03.mode = "top";
main_list_03.line = 3;
main_list_03.width = 180;
main_list_03.height = 100;
main_list_03.align = "center";
main_list_03.valign = "top";

//�α��ǰ ����
var main_list_04 = new eScroll;
main_list_04.id = "scrolling_main_list_04";
main_list_04.mode = "left";
main_list_04.line = 3;
main_list_04.width = 120;
main_list_04.height = 120;
main_list_04.align = "center";
main_list_04.valign = "top";

//ȸ������ �����̴�
var main_list_05 = new eScroll;
main_list_05.id = "scrolling_main_list_05";
main_list_05.mode = "left";
main_list_05.line = 6;
main_list_05.width = 120;
main_list_05.height = 120;
main_list_05.align = "center";
main_list_05.valign = "top";

//��ŷƯ�� ����
var main_list_06 = new eScroll;
main_list_06.id = "scrolling_main_list_06";
main_list_06.mode = "left";
main_list_06.line = 3;
main_list_06.width = 142;
main_list_06.height = 175;
main_list_06.align = "center"; 
main_list_06.valign = "top";