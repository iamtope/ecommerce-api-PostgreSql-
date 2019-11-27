const stripe = require('stripe')('sk_test_tqq1N70BoO1kJsBLafULR6Ik009S63JnkD');
function charge (req, res){
    console.log(req.body)
const token = req.body.stripeToken; // Using Express
const charge = req.body.chargeAmount;
(async () => {
  const charger = await stripe.charges.create({
    amount: chargeAmount,
    currency: 'usd',
    description: 'Example charge',
    source: token,
    statement_descriptor: 'Custom descriptor',
  });
})
    console.log('Your Payment was successful, thank you for shopping with us')
    res.redirect('/api/items/paySuccess')
();
}

module.exports = charge;