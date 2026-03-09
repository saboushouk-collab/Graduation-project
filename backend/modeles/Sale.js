const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  customer: String,
  product: String,
  quantity: Number,
  total: Number,
  date: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Sale", saleSchema);

