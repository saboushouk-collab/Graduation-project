const router = require("express").Router()


router.get("/", async (req,res)=>{
    const items = await Inventory.find()
    res.json(items)
})


router.post("/", async (req,res)=>{
    const newItem = new Inventory(req.body)
    const savedItem = await newItem.save()
    res.json(newItem)

})

router.delete("/:id", async (req,res)=>{
    await Inventory.findByIdAndDelete(req.params.id)
    res.json("Deleted")
})

module.exports = router
