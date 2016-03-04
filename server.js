var express = require('express');
var app = express();

app.set('/js',__dirname+'/clients/js/');

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
})


app.listen(3000,function()}{
	console.log('Server listening at port 3000');
})