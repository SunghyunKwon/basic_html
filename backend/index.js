const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors())
// View engine setup
app.set('view engine', 'ejs');

// With middleware
// app.use('/', function (req, res, next) {
// 	res.render('User')
// 	next();
// });

app.get('/hello', function (req, res) {
	console.log("Render Working")
	return res.send({ "message": "Hello World!!" });
});

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
