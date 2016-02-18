var React = require('react');
var Title = require('./title');
var Turn = require('./turn');
var Board = require('./board');
var Score = require('./score');
var TicTacToeController = require('.././controllers/tictactoe');
var Restart = require('./restart');
var constants = require('.././constants');

var Application = React.createClass({
    getInitialState: function () {
        return {
            boardSize: constants.MATRIX_SIZE
        };
    },

    getController: function() {
       if(!this._controller)  {
           this._controller = new TicTacToeController(this.state.boardSize);
       }
        return this._controller;
    },
    updateUi: function() {
        this.forceUpdate();
    },
    render: function () {
        return (
            <div className="container">
                <div className="row col-md-12">
                    <Title/>
                    <Turn turn={this.getController().getCurrentTurn()} endText={this.getController().getModel().getEndMessage()} />
                    <Board updateUi={this.updateUi} controller={this.getController} />
                    <Score xscore={this.getController().getXScore()} oscore={ this.getController().getOScore()} tiescore={this.getController().getTieScore()} />
                    <Restart controller={this.getController} updateUi={this.updateUi}  isFinished={this.getController().getModel().getEndMessage()} />
                </div>
            </div>
        );
    }
});

module.exports = Application;