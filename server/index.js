var http = require('http'),
    express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    Patient = require('./models/patients'),
    Doctor = require('./models/doctors'),
    bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/hospital');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {

    console.log('Successfully connected to database.');

    var app = express();

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
    app.use(bodyParser.json())

    // create application/json parser
//    var jsonParser = bodyParser.json()

    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(express.static(__dirname + '/public'));


    // Fetch all doctors
    app.get('/doctors', function (req, res) {
        console.log('/doctors');
        Doctor.find({}, function (err, doctors) {
            if (err) {
                console.log('Error');
            } else {
                res.jsonp(doctors);
            }
        });

    });

    // Fetch all patients
    app.get('/patients', function (req, res) {
        console.log('/patients');
        Patient.find({}, function (err, patients) {
            if (err) {
                console.log('Error');
            } else {
                res.jsonp(patients);
            }
        });

    });

    // Default - redirect to home page
    app.get('/', function (req, res) {

        res.sendFile(__dirname + '/public/client/gui/graphics/screens/home/html/index.html');

    });

    // POST /api/users gets JSON bodies
    app.post('/patient', function (req, res) {

        if (!req.body) return res.sendStatus(400);
        console.log(req.body);
        var patient = new Patient(req.body);

        patient.save();
        res.end();

    });

    app.use(function (req,res) {
        res.render('404', {url:req.url});
    });

    // Error handling
    http.createServer(app).listen(app.get('port'), function(){
        console.log('Express server listening on port ' + app.get('port'));
    });

});