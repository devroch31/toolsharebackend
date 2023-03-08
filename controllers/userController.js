const express = require('express');
const router = express.Router();
const { user, tool, tooltype, toolType } = require('../models');
const bcrypt = require('bcrypt');

router.get("/login",(req,res) => {
    res.render("login")
})

router.get("/signup",(req,res) => {
    res.render("signup")
})

router.get("/logout", (req,res) => {
    req.session.destroy();
    res.render("homepage")
})

// Get one user
router.get("/:id", (req,res)=>{
    User.findByPk(req.params.id)
    .then(userData=>{
        res.json(userData)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
})

// Create user route
router.post("/", (req,res)=>{
    user.create({
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    })
    .then(userData=>{
        req.session.userId = userData.id;
        req.session.username = userData.username;
        res.json(userData)
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
})

// Login user route
router.post("/login", (req,res)=>{
    user.findOne({
        where:{
            username:req.body.username
        }
    })
    .then(userData=>{
        if(!userData){
            res.status(401).json({msg:"Incorrect user information."})
        } else {
            if(bcrypt.compareSync(req.body.password,userData.password)){
                req.session.userId = userData.id;
                req.session.username = userData.username;
                return res.json(userData)
            } else {
                res.status(401).json({msg:"Incorrect user information."})
            }
        }
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
})

// Show user tools route
    TODO: //add path, 
router.get("",(req,res)=>{
    if(!req.session.userId){
        return res.render("home")
    };
    tool.findAll({include:[toolType]},{
        where: {ownerId:req.session.userId}
    }).then(toolData=>{
        const data = toolData.map(tool=>tool.toJSON());
        res.render("mytools", {
        userdate:data,
        session:req.session})
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Erro.",err})
    })
})

// Show user arrangements
    TODO:

// Delete tool from user collection route
    TODO: // add path
router.delete("",(req,res)=>{
    tool.destroy({
        where:{
            id:req.params.id
        }
    }).then(toolData=>{
        res.json(toolData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error.",err})
    })
})


module.exports = router;