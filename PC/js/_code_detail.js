jQuery(document).ready(function($) {
    $("#option").click(function() {
    	$(this).toggleClass('open');
    	$(this).text(function(i, text){
          return text === "可记摧扁>" ? "可记凯扁<" : "可记摧扁>";
      })
    
	  $('#optiondlg').toggleClass('open');
        $('.tab-content').toggleClass('open');
	});
	$("#seloption").click(function() {
        	$(this).toggleClass('open');
        	$('.optionselect').toggleClass('open');
    	     $("#selectdlg").show();
	});
  $('#closebtn').click(function(){
    $("#selectdlg").hide();
  })
	
});