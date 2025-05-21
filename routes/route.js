const express = require('express')
const router = express.Router()

const auth = function (req, res, next){
    console.log ("Authentication");

    req.user = {userId:1, role:"Intern"};

    if (req.user){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Not a vaild user.",
        })
    }
}

const isIntern = function (req, res, next){
    console.log("Intern Middleware");

    if(req.user.role ==="Intern"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access denied, this route is only for Interns"
        })
    }
}

const isAdmin = function (req, res, next){
    console.log("Admin Middleware");

    if(req.user.role ==="Admin"){
        next();
    }
    else{
        res.json({
            success:false,
            message:"Access denied, this route is only for Admin"
        })
    }
}

router.get("/intern", auth, isIntern, (req,res)=> {
    console.log ("I am Intern");
    res.send ("Intern specific page");
})

router.get("/admin", auth, isAdmin, (req,res)=> {
    console.log ("I am Admin");
    res.send ("Admin specific page");
})


module.exports = router
