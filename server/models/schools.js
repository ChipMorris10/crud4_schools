var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var School = new Schema({
    name:String,
    numStudents:Number,
    coed:Boolean
});


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/schools');

module.exports = mongoose.model('schools', School);

