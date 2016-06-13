$(document).ready(function(){
	var blocks = [];
    for(i=0; i<4; i++) {
    	blocks[i] = [];
		for(j=0; j<4; j++) {
			blocks[i][j] = $("#"+(i*4+j));
			$(blocks[i][j]).css("left",25*j+"%");
			$(blocks[i][j]).css("top",25*i+"%");
		}
	}


    $(".block").click(function() {
    	var id = $(this).attr('id'); 	
    	$(this).click(function(){
    		$(this).fadeOut("slow");
    	});
    });
 });