import React from 'react';
import { Link } from 'react-router';
import Counterizer from './counterizer';
import HelloWorld from './helloworld';
import api from '../api';




const HelloWorldApp = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            name: 'Pekkis',
            names: []
        };
    },
componentDidMount: function(){
    getTussit().then((data) => {
        this.setState ({
            names: data
        });
    });
},
render: function() {
        const names = this.state.names;

        return (
            <div>
                <h1>Lusso</h1>

                 {names.map((name, i) =>
                    <HelloWorld key={i} name={name}/>
                )}

                <Counterizer
                    count={this.state.count}
                    onIncrementCounter={this.incrementCounter}/>
            {this.props.children}
            </div>

        );
    },

    incrementCounter: function () {
        this.setState({
            count: this.state.count + 1
        });
    }
  //  const temperatureData = JSON.parse(document.getElementById("temp").innerHTML);
   // return React.render(<WeatherApi temperatureData={temperatureData} />, document.body);

});

export default HelloWorldApp;
