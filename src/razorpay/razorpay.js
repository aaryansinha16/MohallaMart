const Razorpay = require('razorpay')
const express = require('express')
const app = express.Router()
const shortid = require('shortid')


app.post('/', async(req, res) => {
    const razorpay = new Razorpay({
        key_id: 'rzp_test_hQsLO3wTpgFfia',
        key_secret: 'dJwImnrybXZJbxcrOMYejQuR',
    });
    var total = (req.body)
    // console.log(total, "REQ BODY")
    
    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)
    const payment_capture = 1;
    const amount = total.amount;
    const currency = "INR";

    const options = {
        amount: (amount * 100).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture,
    };
    
    try {
        const response = await razorpay.orders.create(options);
        res.status(200).send({
            id: response.id,
            currency: response.currency,
            amount: response.amount,
        });
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
})

module.exports = app