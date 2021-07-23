function resize_iframe(frm,minus_size){
		alert(document.body.clientHeight);
		alert(minus_size);
		alert(document.body.clientHeight-minus_size);
        frm.height = document.body.clientHeight-minus_size;  
}

function resize_iframe2(frm,height_size){
        frm.height = height_size
}

function resize_div(div, minus_size){
        div.style.height = document.body.clientHeight-minus_size;  
}

/* 2009-07-20 신입 이주영 사고친부분 
function resize_div3(div, minus_Hsize, minus_Wsize){
        div.style.height = document.body.clientHeight-minus_Hsize;  
		div.style.width = document.body.clientWidth-minus_Wsize; 
}
*/
function resize_div4(div, minus_Hsize, minus_Wsize){
		div.style.height = document.body.clientHeight-minus_Hsize;  
		div.style.width = document.body.clientWidth-minus_Wsize;  
}

function resize_iframe14(frm, minus_Hsize, minus_Wsize){
        frm.height = document.body.clientHeight-minus_Hsize; 

		var wid =  parseInt(document.body.clientWidth-minus_Wsize);
		if(wid>=1237)
				frm.width = 1237;
		else
				frm.width = document.body.clientWidth-minus_Wsize;	

}