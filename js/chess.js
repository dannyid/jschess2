
var square1,
    square2,
    piece1,
    piece2;

console.log(square1);

$("td").click(function() {
    var $this = $(this);

    function clear() {
        square1.removeAttr("style");
        square2.removeAttr("style");
        square1 = undefined; 
        square2 = undefined;
    };

    console.log($this)
    console.log(this)
    
    if (!square1 && !square2 && $this.children().length === 1) {
        square1 = $this;
        square1.css({"background-color": "rgb(255, 0, 0)"});
        piece1 = square1.children("img");  
        console.log(piece1);
    } else if (square1 && square2) {
        clear();
    } else if (square1 && !square2) {
        square2 = $this;
        if (square1.attr("id") === square2.attr("id")) {
            clear();
        } else {
//          square2.css({"background-color": "rgb(255, 0, 0)"});
            square2.children('img').remove();
            square2.prepend(piece1);
            clear();
        }
    };
});


















//$( "td" ).click(function(evt) {
//    var cell = $(evt.currentTarget);
//    console.log(evt);
//    console.log($(evt));
//    console.log(evt.target);
//    console.log(cell);
//    if (cell.css("background-color") !== "rgb(255, 0, 0)") {
//        cell.css({"background-color": "red"});
//    } else {
//        cell.css({"background-color": cell.hasClass("black") ? "grey" : "white" });
//    };
//});


//$( "img" ).click( function() {
//    var $this = $( this ),
//        $parent = $this.parent(),
//        firstId = $parent.attr( 'id' );
//    
//    console.log( firstId );
//    console.log($parent.css("background-color"));
//    $parent.css({"background-color": "rgb(255, 0, 0)"});
//   
//    $( "td" ).click( function() {
//        var $that = $( this ),
//            secondId = $that.attr( 'id' );
        
//        if ( firstId === secondId ) {
//            $parent.css({"background-color": $parent.hasClass("black") ? "grey" : "white" });
//        } else {
//            $parent.css({"background-color": "red"});
//        };
//    });
//});

//    if ($parent.css("background-color") !== "rgb(255, 0, 0)") {
//        $parent.css({"background-color": "red"});
//    } else {
//        $parent.css({"background-color": $parent.hasClass("black") ? "grey" : "white" });
//    };
//});
