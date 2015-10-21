import axios from 'axios';


export default{
    function getKurssit(){
    return axios.get('/apikurssit/kurssit').then ((response) => {
        return response.data;
    //console.log (response.data);

    });

    }
};
