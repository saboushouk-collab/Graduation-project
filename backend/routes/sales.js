const router = require("express").Router()

router.get("/", async (req,res)=>{
    const sales = await Sale.find()
    res.json(sales)
})

router.post("/", async (req,res)=>{
    const newSale = new Sale(req.body)
    const savedSale = await newSale.save()
    res.json(newSale)
})

router.delete("/:id", async (req,res)=>{
    await Sale.findByIdAndDelete(req.params.id)
    res.json("Deleted")
})

module.exports = router
