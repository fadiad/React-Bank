const mongoose = require("mongoose")
const Schema = mongoose.Schema



const Transactions = new Schema({
    amount: Number,
    category: String,
    vendor: String,
})

const Transaction = mongoose.model('Transaction', Transactions)
module.exports = Transaction


