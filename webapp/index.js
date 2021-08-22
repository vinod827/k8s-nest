'use-strict';

const request = require('request');
const bodyPraser = require('body-parser');
const express = require('express');

const app = express();

app.set('PORT', (process.env.PORT || 8080));
app.use(bodyPraser.urlencoded({extended: false}));
app.use(bodyPraser.json());


app.get('/', function(request, response){
    console.log('Welcome to Docker...');
    response.send('Welcome to Docker...');
})

app.listen(app.get('PORT'), function(){
    console.log('App is listening on port: ', app.get('PORT'));
});