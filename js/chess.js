var pieceValue = {
    pawn: 1,
    knight: 3,
    bishop: 3,
    rook: 5,
    queen: 9
}

var piecePrototype = {
    lastPos: "",
    currentPos: "",
    captured: "N",
    selected: "N", 
    move: function(square1, square2) {
    },
    capture: function(square1, square2) {
    },
}

function Piece (type, color, origin) {
    this.type = type,
    this.color = color,
    this.origin = origin,
    this.currentPos = origin,
    this.src = "./img/" + this.color[0] + "-" + this.type + ".svg",
    this.value = pieceValue[type],
    this.imgTag = '<img src="' + this.src + '">',
    this.$imgTag = $(this.imgTag)
};

Piece.prototype = piecePrototype;

var board = {
    whoseTurn: "white",
    pieces: []
};

function pieceConfig(color) {
    var cols = ['a','b','c','d','e','f','g','h'];
    var backRow = color === 'white' ? 1 : 8;
    return {
        pawn: cols.map(function(col){return '' + col + (color === 'white' ? 2 : 7)}),
        rook: ['a', 'h'].map(function(c){return c + backRow}),
        knight: ['b', 'g'].map(function(c){return c + backRow}),
        bishop: ['c', 'f'].map(function(c){return c + backRow}),
        queen: 'd' + backRow,
        king: 'e' + backRow
    }
};

function buildPieces(color) {
    var startingPos = pieceConfig(color);
    var pieces = [];
    
    for (var i = 0; i < 8; i++) {
        pieces.push(new Piece('pawn', color, startingPos.pawn[i]));
    }
    for (var i = 0; i < 2; i++) {
        pieces.push(new Piece('rook', color, startingPos.rook[i]));
        pieces.push(new Piece('knight', color, startingPos.knight[i]));
        pieces.push(new Piece('bishop', color, startingPos.bishop[i]));
    }
    pieces.push(new Piece('queen', color, startingPos.queen));
    pieces.push(new Piece('king', color, startingPos.king));
    return pieces;
};

board.pieces = buildPieces("white");
board.pieces = board.pieces.concat(buildPieces("black"));

function initBoard(pieces) {
    for (var i = 0; i < pieces.length; i++) {
        $("td#" + pieces[i].currentPos).append(pieces[i].$imgTag);
    };
};

initBoard(board.pieces);

$("td").click(function() {
    var $this = $(this);
    var currentPiece = board.pieces.filter(function(p) {return p.currentPos === $this.attr("id")});
    var selectedPiece = board.pieces.filter(function(p) {return p.selected === "Y"});
    
    function swapColor() {
        $this.css("background-color", $this.attr("style") ? "" : "rgb(255, 0, 0)");
    };

    console.log($this);

    if (selectedPiece.length === 0) {
        if (board.whoseTurn === currentPiece[0].color && currentPiece[0] !== undefined) {
            swapColor();
            currentPiece[0].selected = currentPiece[0].selected === "N" ? "Y" : "N";
        }
    } else if (selectedPiece[0] === currentPiece[0]) {
        swapColor();
        if (currentPiece[0] === undefined) {
            $this.append(selectedPiece[0].$imgTag);
        } else {}
      //  if (currentPiece[0].color !== board.whoseTurn) {
       // }
    } else if (x) [
    
    ];

    console.log(currentPiece[0])
});


//var square1,
//    square2,
//    piece1,
//    piece2;
//
//console.log(square1);
//
//$("td").click(function() {
//   var $this = $(this);
//
//    function clear() {
//        square1.removeAttr("style");
//        square2.removeAttr("style");
//        square1 = undefined; 
//        square2 = undefined;
//    };
//
//    console.log($this)
//    console.log(this)
//    
//    if (!square1 && !square2 && $this.children().length === 1) {
//        square1 = $this;
//        square1.css({"background-color": "rgb(255, 0, 0)"});
//        piece1 = square1.children("img");  
//    } else if (square1 && square2) {
//        clear();
//    } else if (square1 && !square2) {
//        square2 = $this;
//        if (square1.attr("id") === square2.attr("id")) {
//            clear();
//        } else {
////          square2.css({"background-color": "rgb(255, 0, 0)"});
//            square2.children('img').remove();
//            square2.prepend(piece1);
//            clear();
//        }
//    };
//});













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
