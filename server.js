'use strict';

const express = require('express'),
			bodyParser= require('body-parser'),
			MongoClient = require('mongodb').MongoClient,
			path = require('path'),
			exphbs  = require('express-handlebars'),
			helpers = require('./lib/helpers'),
			app = express(),

var db;

app.use(bodyParser.urlencoded({extended: true}))

// HANDLEBARS
var hbs = exphbs.create({
    defaultLayout: 'main',
    helpers      : helpers,

    // Uses multiple partials dirs, templates in "shared/templates/" are shared with the client-side of the app (see below).
    partialsDir: [
        'shared/templates/',
        'views/partials/'
    ]
});

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views')) 

app.use(express.static('public/'));


// DATABASE
MongoClient.connect('mongodb://admin:meowcat1234@ds129469.mlab.com:29469/tweets-wm', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})



// ROUTES
app.get('/', (req, res) => {
	
	var cursor = db.collection('quotes').find()
	db.collection('quotes').find().toArray(function(err, results) {
	  console.log(results)
	  // send HTML file populated with quotes here
	  res.render('home')
	})
});

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
	  if (err) return console.log(err)

	  console.log('saved to database')
	  res.redirect('/')
	 })
})

