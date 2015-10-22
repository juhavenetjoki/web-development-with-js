import React from 'react';
import { Link } from 'react-router';
import WeatherApi from '../WeatherApi';

const WeatherPage = React.createClass({
    render: function(){

        const { name } = this.props.params;
        return(

            <h1>
            Weather: London{name}
            </h1>

        );
    },
    componentDidMount: function(){
    getWeather().then((data) => {
        this.setState ({
            weather: data
        });
    });
},

})

export default WeatherPage;
