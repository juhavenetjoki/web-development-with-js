import React from 'react';
import ReactDOM from 'react-dom';
//import WeatherApi from '../WeatherApi';

//const Temperature = React.createClass({
const Temperature = React.createClass({
    getInitialState: function() {
        return {

        /*temp: '',
        name: '',*/
        weather:{},
        //temp:{}


        };
    },

    render: function() {
        //console.log(this.props);

        return (
            <div>

            <p>{this.props.weather.base}
            {this.props.weather.name}
            </p>
            </div>
        );
    }
});
//export default Temperature;
export default Temperature;

//<span class="name">{ this.state.name }</span>
