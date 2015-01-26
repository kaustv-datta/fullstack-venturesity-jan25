var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
    name: String,
    age: Number,
    mobile: Number,
    email: String,
    registrationDate: Date,
    doctor: String
});
var Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;