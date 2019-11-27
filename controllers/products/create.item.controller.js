const db = require('../../utils/database');

function createItem(req, res){
    console.log("REQUEST: ", req.body);
    const {name, price, description, rating, quantity} = req.body;
    db.none(`insert into products(name, price, description, rating, quantity) values($1, $2, $3, $4, $5)`, [name, price, description, rating, quantity])
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one product into database'
          });
      })
      .catch(function (err) {
        console.error("An error occurred: " + err)
        res.status(500)
        .json({
          status: 'failure',
          message: 'unable to create item'
        })
      });
  }

  module.exports = createItem;