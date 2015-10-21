import axios from 'axios';

export default{
    function getTussit(){
    return axios.get('/api/tussi').then ((response) => {
        return response.data;
    //console.log (response.data);

    });

    }
};
