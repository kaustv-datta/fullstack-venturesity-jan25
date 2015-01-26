var mongoose = require('mongoose');

var doctorSchema = mongoose.Schema({
    name: String,
    specialization: String
});
var Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;