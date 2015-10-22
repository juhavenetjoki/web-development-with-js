//require vanhaa EcmaScript5
//require('./client.css');
//console.log('kvaak sanoo ankka!');

//import -> EcmaScript6
import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';


import { Router, Route, Link } from 'react-router';

import HelloWorld from './components/helloworld';
import HelloWorldApp from './components/helloworldapp';
import FrontPage from './components/frontpage';
import Counter from './components/counter';
import Greeter from './components/greeter';
import WeatherPage from './components/WeatherPage';

//Routteri
const routes = (
    <Router>
        <Route component={HelloWorldApp}>

            <Route path = "/" component={WeatherPage}></Route>


        </Route>

    </Router>
);

ReactDOM.render(
   routes,
    document.getElementById('app')
);


/*<Route path = "/hello/:name" component={Greeter}></Route>
            <Route path = "/weather" component={WeatherPage}></Route>*/

// vanhaa harjoitusta riviltä 121 <HelloWorldApp names={['Tussi', 'Lussi']}/>,
// ecma6 <a href={`/hello/${this.props.name}`}> Huom. `merkintä`
//{'/hello/' + this.props.name}>
