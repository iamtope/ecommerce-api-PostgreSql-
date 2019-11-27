const checkQuantity = function checkQuantity(req, res, next){
    if(req.body.quantity < 10)
    {
        return res.status(400)
        .json({
            status: 'failure',
            message: 'Quantity cannot be less than 10'
        })
    }
    next()
}

module.exports = checkQuantity