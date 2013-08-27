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
    whiteTeam: buildTeam('white'),
    backTeam: buildTeam('black')
};

function pieceConfiguration(color) {
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
}

function buildTeam(color) {
    var config = pieceConfiguration(color);
    var team = {
        color: color,
        score: 39,
        pieces: []
    };
    for (var i = 0; i < 8; i++) {
        team.pieces.push(new Piece('pawn', color, config.pawn[i]));
    }
    for (var i = 0; i < 2; i++) {
        team.pieces.push(new Piece('rook', color, config.rook[i]));
    }
    for (var i = 0; i < 2; i++) {
        team.pieces.push(new Piece('knight', color, config.knight[i]));
    }
    for (var i = 0; i < 2; i++) {
        team.pieces.push(new Piece('bishop', color, config.bishop[i]));
    }
    team.pieces.push(new Piece('queen', color, config.queen));
    team.pieces.push(new Piece('king', color, config.king));
    return team;
}

board.whiteTeam = buildTeam('white');
board.blackTeam = buildTeam('black');

function initBoard(team) {
    for (var i = 0; i < team.pieces.length; i++) {
        $("td#" + team.pieces[i].origin).append(team.pieces[i].$imgTag);
    };
};

initBoard(board.whiteTeam);
initBoard(board.blackTeam); 

$("td").click(function() {
    var $this = $(this);
    var currentPiece;

    console.log($this);

    if (board.whoseTurn === "white") {
        currentPiece = board.whiteTeam.pieces.filter(function(val) {
            return val.currentPos === $this.attr("id"); 
        });
        if (currentPiece[0] !== undefined) {
            currentPiece[0].selected = "Y";
        }
    } else {

    };

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
