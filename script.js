$(document).ready(function(){
	var blocks = [];
    for(i=0; i<4; i++) {
    	blocks[i] = [];
		for(j=0; j<4; j++) {
			blocks[i][j] = $("#"+(i*4+j));
			$(blocks[i][j]).css({"left":(25*j+0.5)+"%",
                                 "top":(25*i+0.5)+"%",
                                 "background": "url(src/honzik.jpeg) " + 25*j + "% " + 25*i + "%",
                                 "background-size":"500%"});
        }
	}
    blocks[3][3] = 0;


    $(".block").click(function() {
        var $xPos;
        var $yPos;

    	outer:
        for(i=0; i<4; i++) {
    		for(j=0; j<4; j++) {
                if(blocks[i][j] == 0) {
                    xPos = j;
                    yPos = i;
                    break outer;
    			}
    		}
    	}
        var $blockId = $(this).attr("id");
        if(xPos>0 && $blockId == blocks[yPos][xPos-1].attr("id")) { // move right
            $(this).css("left", 25*xPos+0.5 + "%");
            blocks[yPos][xPos] = $(this);
            blocks[yPos][xPos-1] = 0;
        } else if(xPos<3 && $blockId == blocks[yPos][xPos+1].attr("id")) { // move left
            $(this).css("left", 25*xPos+0.5 + "%");
            blocks[yPos][xPos] = $(this);
            blocks[yPos][xPos+1] = 0;
        } else if(yPos>0 && $blockId == blocks[yPos-1][xPos].attr("id")) { // move up
            $(this).css("top", 25*yPos+0.5 + "%");
            blocks[yPos][xPos] = $(this);
            blocks[yPos-1][xPos] = 0;
        } else if(yPos<3 && $blockId == blocks[yPos+1][xPos].attr("id")) { // move down
            $(this).css("top", 25*yPos+0.5 + "%");
            blocks[yPos][xPos] = $(this);
            blocks[yPos+1][xPos] = 0;
        }
    });
 });