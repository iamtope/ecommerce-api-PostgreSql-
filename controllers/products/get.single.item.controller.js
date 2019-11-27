function getSingleItem(req,res){
    db.any('select * FROM products')
    .then(function(data){
      res.status(200)
      .json({
        status: 'sucecss',
        data: data,
        message: 'successfully retrieved item'
      });
    })
    .catch(function(err){
      console.log('error occurred' + err)
      res.status(500)
      .json({
        status: 'failure',
        message: 'unable to retrieve all items'
      })
    })
  }
  
module.exports = getSingleItem;