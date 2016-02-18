var React = require('react');

//Creates the game board
var Board = React.createClass({
    getController: function() {
        return this.props.controller();
    },
    getBoardSize: function() {
        return this.getController().getBoardSize()
    },
    getBoard: function() {
        return this.getController().getModel().getBoard();
    },
    getRows: function() {
        var rows = [];

        for (var row = 0; row < this.getBoardSize(); row++) {
            var col = this.getCols(row);
            rows.push(<tr key={row + col}>{col}</tr>);
        }
        return rows;
    },
    handlePlayerClick: function(row, col) {
        if(this.getController().getModel().isFinished()) {
            return;
        }
        if(this.getBoard()[row][col] !== "") {
            return;
        }
        this.getController().makeMove(row,col);
        this.props.updateUi();
    },
    getCols: function(row) {
        var cols = [];
        var className = "col-md-"+this.getBoardSize();
        for(var col = 0; col < this.getBoardSize(); col++) {
            cols.push(<td key={row + col} className={className}  onClick={this.handlePlayerClick.bind(this, row, col)}>{this.getBoard()[row][col]}</td>);
        }
        return cols;
    },
    render: function () {
        var rows = this.getRows();
        return <table width="400" height="400" className="table table-bordered table-hover">
            <tbody>
            {rows}
            </tbody>
        </table>;
    }
});

module.exports = Board;