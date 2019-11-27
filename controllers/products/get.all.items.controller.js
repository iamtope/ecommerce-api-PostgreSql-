function getAllItem(req,res){
    db.any('select * FROM products')
    .then(function(data){
      res.status(200)
      .json({
        status: 'sucecss',
        data: data,
        message: 'retrieved all items'
      });
    })
    .catch(function(err){
      console.log('error occurred' + err)
      res.status(500)
      .json({
        status: 'failure',
        message: 'unbale to retrieve all items'
      })
    })
  }
  
module.exports = getAllItem;