const express = require('express');
const router = express.Router();
const { user, tool, tooltype } = require('../models');

// Add a tool route
router.post("/",(req,res)=>{
    console.log(req.body)
    if(!req.session.userId){
        return res.status(403).json({msg:"Please login to add a tool to your inventory."})
     };
    tool.create(
        {
        toolname:req.body.toolname,
        description:req.body.description,
        toolTypeId:req.body.toolTypeId,
        ownerId:req.session.userId
    }
    
    ).then(toolData=>{
        console.log(toolData);
        res.json(toolData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error adding tool!",err})
    })
})

// Show available tools
router.get("/tool/:id", (req, res) => {
    book.findAll({
        include: [
            {
            model: user,
            as: "owner",
            },
            {
            model: user,
            as: "borrower",
            },
        ],
        where: { categoryId: req.params.id, borrowerId: null },
    }).then(toolData=> {
        console.log(toolData)
        const data = toolData.map(tool=>tool.toJSON());
        res.render("results", {
        userdate:data,
        session:req.session})
    })
});

// Show all tool for tool type when searching
    TODO:

// Show tools currently lent
    TODO: // add path, add res.render
router.get("", (req, res) => {
    if(!req.session.userId){
        return res.render("home")
        };
    book
        .findAll({
        where:{borrowerId:req.session.userId}
        })
        .then(toolData=> {
        console.log(toolData)
        const data = toolData.map(tool=>tool.toJSON());
        res.render("", {
        userdate:data,
        session:req.session})
        })
    });

// Return tool
    TODO: // add path, add res.render
router.put("", (req, res) => {
    book
      .update({borrowerId:null},
        {
        where:{borrowerId:req.session.userId}
      })
      .then(toolData=> {
        res.render("", {
        session:req.session})
      })
  });

module.exports = router;