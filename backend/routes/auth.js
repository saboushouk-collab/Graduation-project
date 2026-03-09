const router = require("express").Router()
const User = require("../modeles/User")

// تسجيل الدخول
router.post("/login", async (req,res) => {
    try{
        const username = req.body.username
        const password = req.body.password


        const user = await User.findOne({
           username: username,
           password: password
        })

        if(!user) {
             return res.status(400).json("Invalid username or password")
        }

        res.json("Success")
    

    } catch(err){
        console.log(err)
        res.status(500).json("Server error")
    }
})

module.exports = router

