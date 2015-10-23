import React from 'react';
import { Link } from 'react-router';
import WeatherApi from '../WeatherApi';
import Temperature from './Temperature';

const WeatherPage = React.createClass({
    getInitialState: function() {
        return {
        weather:{},
        };
    },

    render: function(){

        const { name } = this.props.params;
        return(
            <div>
                <h1>Weather: London{name}</h1>
                <Temperature {...this.state} />
            </div>
        );
    },
    //<Temperature {...this.state} />
    //componentWillMount: function(){
    componentDidMount: function(){
    WeatherApi.getWeather().then((data) => {
        console.log(data);
        this.setState ({
            weather: data
        });
    });
},

})

export default WeatherPage;
