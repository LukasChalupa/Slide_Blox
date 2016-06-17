var blocks = [];
var width = 4;
var height = 4;

var x0, y0; // states the x,y position of an empty block

$(document).ready(function(){
    var id = 0;
    for(i=0; i<height; i++) {
    	blocks[i] = [];
		for(j=0; j<width; j++) {

            // append block to html
            if(id!=width*height-1) {
                $(".box").append('<div class="block" id="' + id + '"><span></span><h2>' + ++id + '</h2></div>');
            }

            // set its position
			blocks[i][j] = $("#"+(i*height+j));
			$(blocks[i][j]).css({"left":100/width*j+"%",
                                 "top":100/height*i+"%"});
            $(blocks[i][j]).find("span").css({"left":-100*j + "%", "top":-100*i + "%"});
        }
	}
    blocks[height-1][width-1] = 0;
    shuffle();


    /* move the blocks by clicking on adjacent to emty one */
    $(".block").click(function() {
        getEmptyBlockPosition();
        var $blockId = $(this).attr("id");
        if(x0>0 && $blockId == blocks[y0][x0-1].attr("id")) { // move right
            moveRight();
        } else if(x0<width-1 && $blockId == blocks[y0][x0+1].attr("id")) { // move left
            moveLeft();
        } else if(y0>0 && $blockId == blocks[y0-1][x0].attr("id")) { // move down
            moveDown();
        } else if(y0<height-1 && $blockId == blocks[y0+1][x0].attr("id")) { // move up
            moveUp();
        }
    });

    /* move block with the arrow keys */
    $(document).keydown(function(e) {
        getEmptyBlockPosition();
        switch(e.which) {
            case 37: // left arrow key
                moveLeft();
                break;
            case 38: // up arrow key
                e.preventDefault();
                moveUp();
                break;
            case 39: // right arrow key
                moveRight();
                break;
            case 40: // down arrow key
                e.preventDefault();
                moveDown();
                break;
        }
    })

    function moveRight() {
        if(x0>0) {
            blocks[y0][x0-1].css("left", 100/width*x0 + "%");
            blocks[y0][x0] = blocks[y0][x0-1];
            blocks[y0][x0-1] = 0;
        }
    }
    function moveLeft() {
        if(x0<width-1) {
            blocks[y0][x0+1].css("left", 100/width*x0 + "%");
            blocks[y0][x0] = blocks[y0][x0+1];
            blocks[y0][x0+1] = 0;
        }
    }
    function moveUp() {
        if(y0<height-1) {
            blocks[y0+1][x0].css("top", 100/height*y0 + "%");
            blocks[y0][x0] = blocks[y0+1][x0];
            blocks[y0+1][x0] = 0;
        }
    }
    function moveDown() {
        if(y0>0) {
            blocks[y0-1][x0].css("top", 100/height*y0 + "%");
            blocks[y0][x0] = blocks[y0-1][x0];
            blocks[y0-1][x0] = 0;
        }
    }


    /* save position of the empty block to variables x0,y0 */
    function getEmptyBlockPosition() {
        for(i=0; i<height; i++) {
            for(j=0; j<width; j++) {
                if(blocks[i][j] == 0) {
                    x0 = j;
                    y0 = i;
                    return;
                }
            }
        }
    }

    $("#submit").click(function(){
        
        alert("don't click this yet!");
    });

    /* Randomly shuffle all blocks */
    $('#shuffle').click(function(){
        shuffle();
    });
    function shuffle() {
        for(i=0; i<height; i++) {
            for(j=0; j<width; j++) {
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