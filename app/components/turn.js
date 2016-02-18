var React = require('react');

var Turn = React.createClass({
    render: function () {
        if(this.props.endText !== "") {
            return <p>Game over, {this.props.endText}</p>;
        }
        return <p>Your turn, {this.props.turn}</p>;
    }
});

module.exports = Turn;