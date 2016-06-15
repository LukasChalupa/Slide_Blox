var blocks = [];
var width = 4;
var height = 4;

$(document).ready(function(){
    for(i=0; i<height; i++) {
    	blocks[i] = [];
		for(j=0; j<width; j++) {
			blocks[i][j] = $("#"+(i*height+j));
			$(blocks[i][j]).css({"left":100/width*j+"%",
                                 "top":100/height*i+"%"});
            $(blocks[i][j]).find("span").css({"left":-100*j + "%", "top":-100*i + "%"});
        }
	}
    blocks[3][3] = 0;


    $(".block").click(function() {
        var xPos;
        var yPos;

    	outer:
        for(i=0; i<height; i++) {
    		for(j=0; j<width; j++) {
                if(blocks[i][j] == 0) {
                    xPos = j;
                    yPos = i;
                    break outer;
    			}
    		}
    	}
        var $blockId = $(this).attr("id");
        if(xPos>0 && $blockId == blocks[yPos][xPos-1].attr("id")) { // move right
            $(this).css("left", 100/width*xPos + "%");
            blocks[yPos][xPos] = $(this);
            blocks[yPos][xPos-1] = 0;
        } else if(xPos<3 && $blockId == blocks[yPos][xPos+1].attr("id")) { // move left
            $(this).css("left", 100/width*xPos + "%");
            blocks[yPos][xPos] = $(this);
            blocks[yPos][xPos+1] = 0;
        } else if(yPos>0 && $blockId == blocks[yPos-1][xPos].attr("id")) { // move up
            $(this).css("top", 100/height*yPos + "%");
            blocks[yPos][xPos] = $(this);
            blocks[yPos-1][xPos] = 0;
        } else if(yPos<3 && $blockId == blocks[yPos+1][xPos].attr("id")) { // move down
            $(this).css("top", 100/height*yPos + "%");
            blocks[yPos][xPos] = $(this);
            blocks[yPos+1][xPos] = 0;
        }
    });

    $('#shuffle').click(function(){
        shuffle();
    });

    function shuffle() {
        for(i=0; i<height; i++) {
            for(j=0; j<height; j++) {
                var x = Math.floor((Math.random() * width));
                var y = Math.floor((Math.random() * height));

                var tmp = blocks[i][j];
                blocks[i][j] = blocks[y][x];
                $(blocks[i][j]).css({"top" : i*(100/height) + "%", "left" : j*(100/width) + "%"});

                blocks[y][x] = tmp;
                $(blocks[y][x]).css({"top" : y*(100/height) + "%", "left" : x*(100/width)  + "%"});
            }
        }

    }
 });