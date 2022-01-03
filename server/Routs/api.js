const Transactions = require("../models/Transactions")
const express = require('express')
// const API = require('../Tools/apiClass')
const router = express.Router()

router.get('/transactions/:id', function (req, res) {
    Transactions.findById({ _id: req.params.id }, function (err, transactions) {
        res.send(transactions)
    })
})

router.get('/transactions', function (req, res) {
    Transactions.find({}, function (err, transactions) {
        res.send(transactions)
    })
})


router.get('/brackdown', function (req, res) {
    Transactions.find({}, function (err, transactions) {
        let brackdown = {}
        for (let t of transactions) {
            if (brackdown[t.category]) {
                brackdown[t.category] = brackdown[t.category] + t.amount
            } else {
                brackdown[t.category] = t.amount
            }
        }
        res.send(brackdown)
    })
})

router.post('/transactions', async function (req, res) {
    let transactins = new Transactions({
        amount: req.body.amount,
        category: req.body.category,
        vendor: req.body.vendor,
    })
    await transactins.save()
    Transactions.find({}, function (err, transactions) {
        res.send(transactions)
    })
})

router.delete('/transactions', async function (req, res) {
    await Transactions.deleteOne({ _id: req.body.id });
    Transactions.find({}, function (err, transactions) {
        res.send(transactions)
    })
})

module.exports = router




