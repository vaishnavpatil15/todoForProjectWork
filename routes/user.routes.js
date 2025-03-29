const express = require("express");
const user = require("../models/user.model");
const userModel = require("../models/user.model");
const router = express.Router();
const bcrypt =require("bcrypt");


router.get("/",(req,res)=>{
    res.send("login page")
    // res.render("")
})

router.post("/register",async (req,res)=>{
    // console.log(req.body)
    try {
        let {name,email,password} = req.body;

        let user =await userModel.findOne({email:email});
        if(user){
            res.send("you already have account . pls login");
        }

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,async(err,hash)=>{
                if(err) res.send(err.message)
                
                let createdUser = await userModel.create({
                    name,
                    email,
                    password: hash
                })
                res.status(203).json(createdUser);
                
            })
        })
        

        
        
    } catch (error) {
        res.status(400).json( error.message)
    }

})


router



module.exports = router;