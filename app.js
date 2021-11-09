
const express = require('express')

const app = express()

app.use( express.static(__dirname + '/public') )

// ROUTES 
app.get('/', (req, res, next) => {
	console.log('Hey in my landing route')
	res.sendFile(__dirname + '/views/home.html' )
})

app.get('/home', (req, res, next) => {
	res.sendFile(__dirname + '/views/home.html' )
})

app.get('/about', (req, res, next) => {
	res.sendFile(__dirname + '/views/about.html' )
})

app.get('/about', (req, res, next) => {
	res.sendFile(__dirname + '/views/gallery.html' )
})

app.get('/about', (req, res, next) => {
	res.sendFile(__dirname + '/views/works.html' )
})

app.listen(3000)


