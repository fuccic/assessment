// =============
// Requirements for NODE application to operate
// =============
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Data = require('./test_feed.json');

app.listen(3000);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// console.log(Data.content[0].content.bodyHtml);
var formattedJson = Data.content
// console.log(Things);


// ==============
// Hosting the json file so a GET request can be made
// ==============
app.get('/infos', function(req, res){
	var holdArray = [];
	for (var i = 0; i < formattedJson.length; i++) {
		holdArray.push(formattedJson[i].content.bodyHtml)
		// console.log(holdArray.length)
	};
	// var bodyHtmlInformation = Data.content[0].content.bodyHtml;
	
	res.send(holdArray);
	// console.log(res);
});
