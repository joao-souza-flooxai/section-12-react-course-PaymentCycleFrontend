const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbUrl = 'mongodb://localhost:2828/mymoney';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB conectado com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB: ", err);
  });

mongoose.Error.messages.general.required = "The field '{PATH}' is mandatory.";
mongoose.Error.messages.Number.min = 
    "The value '{VALUE}' is less than the minimum limit of '{MIN}'.";
mongoose.Error.messages.Number.max = 
    "The value '{VALUE}' is greater than the maximum limit of '{MAX}'.";
mongoose.Error.messages.String.enum = 
    "'{VALUE}' is not a valid value for the '{PATH}' attribute.";
