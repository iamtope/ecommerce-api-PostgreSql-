var promise = require('bluebird')

var options = {
    // Initialization Options
    promiseLib: promise
  };
  
  var pgp = require('pg-promise')(options);
  var connectionString = 'postgres://localhost:5432/ecommerce';
  var db = pgp(connectionString);


module.exports = db;