import React from 'react';
import { Link } from 'react-router'


//megacounter
class Counter extends React.Component{
    render() {
        return (
            <div className="megacounter">
                {this.props.count}
            </div>
        );
    }
};

export default Counter;