jQuery(document).ready(function($) {
    $("#option").click(function() {
    	$(this).toggleClass('open');
    	$(this).text(function(i, text){
          return text === "�ɼǴݱ�>" ? "�ɼǿ���<" : "�ɼǴݱ�>";
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