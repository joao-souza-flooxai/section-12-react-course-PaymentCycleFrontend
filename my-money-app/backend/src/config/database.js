const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost:2828/mymoney');

mongoose.Error.messages.general.required = "The field '{PATH}' is mandatory.";
mongoose.Error.messages.Number.min = 
    "The value '{VALUE}' is less than the minimum limit of '{MIN}'.";
mongoose.Error.messages.Number.max = 
    "The value '{VALUE}' is greater than the maximum limit of '{MAX}'.";
mongoose.Error.messages.String.enum = 
    "'{VALUE}' is not a valid value for the '{PATH}' attribute.";