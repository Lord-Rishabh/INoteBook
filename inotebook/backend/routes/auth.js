const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "rishabh@&lord66";

// ROUTE-1 : Create a user using : POST "api/auth/createuser" : No login required
router.post('/createuser', [
    body('name', 'Name must be 3 characters long').isLength({ min: 3 }),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be 5 characters long').isLength({ min: 5 }),
], async (req, res) => {

    let success = false;
    // If there are errors, return status 400 and error.
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({success, errors: error.array() });
    }

    // Check whether the user with this email already exist.
    // We can use try and catch to run command and if error occured it will show error.
    try {
        // we need to write await because it is a promise.
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success, error: "User with this email already exist." });
        }

        // It is used to create salt that is added with password to make it secure
        const salt = await bcrypt.genSalt(10);
        // This will create hash password, so that password is not directly stored in database
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass ,
        })

        const data = {
            user : {
                id : user.id,
            }
        }
        
        const authToken = jwt.sign(data,JWT_SECRET);
        success = true; 
        res.json({success,authToken});
    } 
    catch (err) {
        console.log(err);
        res.status(500).send("Some Error Occured.");
    }
})

// ROUTE-2 : Authenticate a user using : POST "api/auth/loginuser" : No login required
router.post('/loginuser', [
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password cannot be empty').exists(),
], async (req, res) => {

    let success = false;
    // If there are errors, return status 400 and error.
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }

    // Check whether the user with this email already exist.
    // We can use try and catch to run command and if error occured it will show error.
    try {

        const {email,password} = req.body;
        // we need to write await because it is a promise.
        let user = await User.findOne({ email })
        if (!user) {
            success = false;
            return res.status(400).json({ success,error: "Please enter correct login credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {
            success = false;
            return res.status(400).json({ success , error: "Please enter correct login credentials" });
        }
        const data = {
            user : {
                id : user.id,
            }
        }

        const authToken = jwt.sign(data,JWT_SECRET);
        success = true;
        res.json({success,authToken});
    } 
    catch (err) {
        console.log(err);
        res.status(500).send("Internal Error Occured.");
    }
})

// ROUTE-3 : Get loggedIn User Details using : POST "api/auth/getuser" : Login required
router.post('/getuser' , fetchuser, async (req,res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        console.log(req.user.id);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Error Occured.");
    }
})
module.exports = router;