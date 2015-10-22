import axios from 'axios';


export default{
    getWeather: function (){
    return axios.get('/api/weather').then ((response) => {
        return response.data;
    //console.log (response.data);

    });

    }
};



/*const Weather = React.createClass({
  // get initial state
  getInitialState: function() {
    // json weather result
    return { weather : {
      main : {},
      name: null,
      weather : {},
      sys: {},
      other: {},
      preloader: 'show'
    }
  }
}
});*/

