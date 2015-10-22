var port = 8888;

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var axios = require('axios');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/tussi', function(req, res, next) {

    res.send([
        'tussi',
        'tussi2',
        'tussi3',
        'tussi4',
    ]);

});

//Hakee dataa
app.get('/api/weather', function(req, res, next) {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=bd82977b86bf27fb59a04b61b657fb6f').then(function(response){
        res.send(response.data);
    });
});



app.post('/weather', function(req, res, next) {

    nimet.push([

    ]);

});

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../web/index.dev.html'));
});


app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});


