const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Text must be added!"]
  },
  amount: {
    type: Number,
    required: [true, "Amount(+/-) must be added!"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Transaction", TransactionSchema);
