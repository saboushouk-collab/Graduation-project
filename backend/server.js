const express = require("express")
 const mongoose = require("mongoose")

const cors = require("cors")


const authRoute = require("./routes/auth")
const inventoryRoute = require("./routes/inventory")
const salesRoute = require("./routes/sales")

const app = express()

app.use(cors())
app.use(express.json())



// ربط Routes
app.use("/api/auth", authRoute)
app.use("/api/inventory", inventoryRoute)
app.use("/api/sales", salesRoute)

// توصيل MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/karibu")
.then(()=> console.log("MongoDB connected"))
.catch(err => console.log(err))

 

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))


