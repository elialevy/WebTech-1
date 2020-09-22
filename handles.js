const express = require('express');// import the express lybrairies
const app = express.Router();//cree l'app express avec app
app.get('/', function(req, res) {//Cree la route 
	res.send('This lab will show how /hello work ! ');
});
app.get('/hello/:name', function(req, res) {
	//Our name replies with a short intro of ourselves
	var response = req.params['name'];
	if (response == 'AnneClaire') 
	{
		res.send( "Anne-Claire Laisney - 21 yrs old - ING4 S1Gr01" );
	}
	else if (response == 'Elia') 
	{
		res.send( "Elia Levy - 21 yrs old - ING4 S1Gr01" );
	}
	else
	{
		res.send('Hello you re name is ' + response);
	}
});
app.get('/hello', function(req, res) { 
	res.send("404 code : Name not found"); //display an error message
});
module.exports = app;