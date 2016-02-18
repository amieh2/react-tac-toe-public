var constants = require('.././constants');

var method = TicTacToeModel.prototype;

function TicTacToeModel(size) {
    this._size = size;
    this._firstToStart = constants.X;
    this._currentTurn = constants.X;
    this._xwins = 0;
    this._owins = 0;
    this._ties = 0;
    this._board = this._initializeBoard(size);
    this._finished = false;
    this._endmessage = "";
}

method._initializeBoard = function(size) {
    var x = new Array(size);
    for (var i = 0; i < size; i++) {
        x[i] = new Array(size);
    }
    for(var i = 0; i < size; i++) {
        for(var j=0; j<size;j++) {
            x[i][j] = "";
        }
    }
    return x;
};

method.getSize = function() {
    return this._size;
};

method.getCurrentTurn = function() {
    return this._currentTurn;
};

method.setCurrentTurn = function(player) {
    this._currentTurn = player;
};

method.getXScore = function() {
    return this._xwins
};

method.incrementXScore = function() {
  this._xwins++;
};

method.getOScore = function() {
    return this._owins;
};

method.incrementOScore = function() {
    this._owins++;
};

method.getTieScore = function() {
    return this._ties;
};

method.incrementTieScore = function() {
    this._ties++;
};

method.getBoard = function() {
    return this._board;
};

method.setBoard = function(board) {
    this._board = board;
};

method.updateBoard = function(row,col) {
  this._board[row][col] = this._currentTurn;
};

method.isFinished = function() {
    return this._finished;
};

method.setFinished = function(finished) {
  this._finished = finished;
};

method.setEndMessage = function(msg) {
    this._endmessage = msg;
};

method.getEndMessage = function() {
  return this._endmessage;
};

method.getFirstToStart = function() {
    if(this._firstToStart === constants.X) {
        this._firstToStart = constants.O;
    } else {
        this._firstToStart = constants.X;
    }
    return this._firstToStart;
};

method.setFirstToStart = function(firstToStart) {
    this._firstToStart = firstToStart
};

module.exports = TicTacToeModel;