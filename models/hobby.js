var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var hobbySchema = new Schema({
    name: String,
    details: String
});

module.exports = mongoose.model('Hobby', hobbySchema);