const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("frontend"))

mongoose.connect("mongodb://127.0.0.1:27017/karibu")
.then(()=>console.log("MongoDB Connected"))

const inventoryRoutes = require("./routes/inventory")
const salesRoutes = require("./routes/sales")

app.use("/api/inventory",inventoryRoutes)
app.use("/api/sales",salesRoutes)

const PORT = 5001

app.listen(PORT,()=>{
console.log("Server running on port "+PORT)
})



