import React from 'react';
import { Link } from 'react-router'

const Greeter = React.createClass({
    render: function(){
        const {name} = this.props.params;
        return(
            <h1>
            Helloo {name}
            </h1>
        );
    }
})

export default Greeter;
