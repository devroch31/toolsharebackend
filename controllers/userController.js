const express = require('express');
const router = express.Router();
const { user, tool, tooltype } = require('../models');
const bcrypt = require('bcrypt');

router.get("/login",(req,res) => {
    res.redner("login")
})

router.get("/signup",(req,res) => {
    res.render("signup")
})

router.get("/logout", (req,res) => {
    req.session.destroy();
    res.render("homepage")
})

// Create user route
    TODO:

// Login user route
    TODO:

// Show user tools route
    TODO:

// Show user arrangements
    TODO:

// Delete tool route
    TODO: