import React from 'react';
import { Link } from 'react-router'

const HelloWorld = React.createClass({
    render: function() {
        return (
            <div>
            <Link to={`/hello/${this.props.name}`}>
            Hello loso {this.props.name}
            </Link>
            </div>
        );
    }
});

export default HelloWorld;
