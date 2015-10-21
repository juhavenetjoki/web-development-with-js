import React from 'react';
import { Link } from 'react-router'


const Counterizer = React.createClass({
    render: function() {
        return (
            <div className="tussi">
                {this.props.count}

                <button
                    onClick={this.props.onIncrementCounter}>
                    MOAR!
                </button>
            <div className="megacounter">
                {this.props.count}
            </div>

            </div>


        );
    }
});

export default Counterizer;


