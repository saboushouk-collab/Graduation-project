const mongoose = require("mongoose")

const SaleSchema = new mongoose.Schema({

product:String,
price:Number,
date:{type:Date,default:Date.now}

})

module.exports = mongoose.model("Sale",SaleSchema)

