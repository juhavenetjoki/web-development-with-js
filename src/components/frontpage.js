import React from 'react';
import { Link } from 'react-router';


const FrontPage = React.createClass({
    render: function(){

        const { name } = this.props.params;
        return(
            <div>
            <h1>
            Tervetuloa etusivulle {name}
            </h1>
            </div>
        );
    }

})

export default FrontPage;
