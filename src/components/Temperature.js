import React from 'react';
import ReactDOM from 'react-dom';

const Temperature = React.createClass({
    getInitialState: function() {
        return {
        temp: '',
        name: ''
        };
    },

    render: function() {
        return (
            <div>
                <h1 class="">
                    <span class="temp">{ this.state.temp }</span>
                    <span class="name">{ this.state.name }</span>
                </h1>

            </div>
        );
    }
});
