import axios from 'axios';


export default{
    getWeather: function (){
    return axios.get('/api/weather').then ((response) => {
        return response.data;
    //console.log (response.data);

        });

    }
};


