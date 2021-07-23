function tc2(iName, nVar, dName){
	for(var i=1; i<4; i++){
		document.getElementById(dName+i).style.display="none";
		document.getElementById(iName+i).className="off";
	}
	document.getElementById(dName+nVar).style.display="block";
	document.getElementById(iName+nVar).className="on";
}

function pic_roll() {
	
	this.name = "pic";	
	this.cur_idx = 1;	
	this.last_idx;		
	this.show_idx = 1;	
	this.show_sec = 5;	
	this.chk_cnt = 0;	
	this.stop = false;	
	
	
	this.auto_flow = function(){
		if(this.stop != true) {
			if(this.chk_cnt + 1 == this.show_sec) {
				this.chk_cnt = 1;
				this.next_pic();
			}
			else {
				this.chk_cnt++;
			}
		}
		window.setTimeout(this.name + ".auto_flow();", 1000);
	}

	
	this.pause  = function() {
		this.stop = true;
	}

	
	this.resume = function() {
		this.stop = false;
	}

	
	this.next_pic = function () {
		if(this.cur_idx == this.last_idx) {
			this.cur_idx = 1;
		}
		else {
			this.cur_idx++;
		}
		this.show_pic(this.cur_idx);
	}

	
	this.prev_pic = function () {
		if(this.cur_idx == 1) {
			this.cur_idx = this.last_idx;
		}
		else {
			this.cur_idx--;
		}
		this.show_pic(this.cur_idx);
	}

	this.show_pic = function (idx) {
		
		var show_id = this.name + this.show_idx;
		show_obj = document.getElementById(show_id);
		show_obj.style.display = "none";

		
		var div_id  = this.name + idx;
		this.show_idx = idx;
		new_obj = document.getElementById(div_id);
		new_obj.style.display = "";

		
		this.chk_cnt = 1;
	}
}