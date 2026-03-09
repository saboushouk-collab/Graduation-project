const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  name: String,
  category:{type: String, require: true},
  quantity: {type:Number, require: true}
});

module.exports = mongoose.model("Inventory", inventorySchema);

