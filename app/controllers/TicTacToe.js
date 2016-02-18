var TicTacToeModel = require('.././models/tictactoe');
var constants = require('.././constants');
var method = TicTacToeController.prototype;

function TicTacToeController(size) {
    this._size = size;
}

method.getModel = function() {
    if (!this._model) {
        this._model = new TicTacToeModel(this._size);
    }
    return this._model;
};

method.getBoardSize = function() {
    return this._size;
};

method.getCurrentTurn = function() {
    return this.getModel().getCurrentTurn();
};

method.getOScore = function() {
    return this.getModel().getOScore();
};

method.getXScore = function() {
    return this.getModel().getXScore();
};

method.getTieScore = function() {
    return this.getModel().getTieScore();
};

method.getBoard = function() {
  return this.getModel().getBoard();
};

method.updateCurrentTurn = function() {
    if (this.getCurrentTurn() === constants.X) {
        this.getModel().setCurrentTurn(constants.O);
    } else if (this.getCurrentTurn() === constants.O) {
        this.getModel().setCurrentTurn(constants.X);
    }
};

method._resetBoard = function() {
    var board = this.getModel().getBoard();
    for(var i = 0; i < this._size; i++) {
        for(var j=0; j<this._size; j++) {
            board[i][j] = "";
        }
    }
    this.getModel().setBoard(board);
};

method.restartGame = function() {
    this._resetBoard();
    this.getModel().setEndMessage("");
    this.getModel().setFinished(false);
    this.getModel().setCurrentTurn(this.getModel().getFirstToStart());
};

method.isGameFinished = function() {
    var winner = this._calculateWinner(this.getModel().getCurrentTurn(), this.getModel().getBoard());
    if(winner === constants.X) {
        this.getModel().setEndMessage(constants.X_WIN);
        this.getModel().incrementXScore();
        return true;
    } else if(winner === constants.O) {
        this.getModel().setEndMessage(constants.O_WIN);
        this.getModel().incrementOScore();
        return true;
    } else if(winner === constants.TIE) {
        this.getModel().setEndMessage(constants.TIE_GAME);
        this.getModel().incrementTieScore();
        return true;
    } else {
        this.getModel().setEndMessage("");
        return false;
    }
};

method.makeMove = function(row,col) {
    this.getModel().updateBoard(row, col);
    var finished = this.isGameFinished();
    this.getModel().setFinished(finished);
    if(!finished) {
        this.updateCurrentTurn()
    }
};

method._calculateWinner = function(player, board) {
    //Options: X, O, TIE, NULL
    //check horizontal and vertical lines
    for (var i = 0; i < this._size; i++) {
        var vwin = true;
        var hwin = true;
        for (var j = 0; j < this._size; j++) {
            if (board[i][j] !== player) {
                hwin = false;
            }
            if (board[j][i] !== player) {
                vwin = false;
            }
            if (!(hwin || vwin))
                break;
        }
        if (hwin || vwin) {
            return player;
        }
    }
    //check diagonals
    var d1 = true;
    var d2 = true;
    for (var n = 0; n < this._size; n++) {
        d1 = true;
        d2 = true;
        var row = this._size - 1 - n;
        if (board[n][n] !== player) {
            d1 = false;
        }
        if (board[row][n] !== player) {
            d2 = false;
        }
        if (!(d1 || d2)) {
            break;
        }
    }

    if (d1 || d2) {
        return player;
    }

    //check if any missing places
    var tie = true;
    for (var i = 0; i < this._size; i++) {
        for (var j = 0; j < this._size; j++) {
            if (board[i][j] === "") {
                tie = false;
                break;
            }
        }
    }
    if (tie) {
        return constants.TIE;
    } else {
        return null;
    }
};



module.exports = TicTacToeController;