var React = require('react');

//Updates the score of the game
var Score = React.createClass({
    render: function () {
        return <p><b>Score:</b> X:{this.props.xscore}, O:{this.props.oscore}, Ties: {this.props.tiescore}</p>
    }
});

module.exports = Score;