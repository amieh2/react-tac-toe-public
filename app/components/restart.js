var React = require('react');

//Resets the game state
var Title = React.createClass({
    render: function () {
        if(this.props.isFinished !== "") {
            return <button className="btn btn-primary" onClick={this.click}>Restart</button>
        }
        return null;
    },
    click: function() {
        this.props.controller().restartGame();
        this.props.updateUi();
    }
});

module.exports = Title;