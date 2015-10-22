import React from 'react';
import ReactDOM from 'react-dom';

const Temperature = React.createClass({
    getInitialState: function() {
        return {
        temp: '',
        name: '',
        weather:{}
        };
    },

    render: function() {
        return (
            <div>
                <h1>
                    <span class="temp">{ this.state.weather }</span>
                    <span class="name">{ this.state.name }</span>
                </h1>

            </div>
        );
    }
});
export default Temperature;
