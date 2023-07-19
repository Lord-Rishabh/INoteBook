const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE-1 : Get loggedIn User Details using : GET "api/notes/fetchallnotes" : Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {

        /* Don't use findById here because id of the user is stored in 'user' in 
        databaseso if we try to access it using user id it will give us null as output.*/
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE-2 : LoggedIn users can add notes using : POST "api/notes/addnote" :  Login required
router.post('/addnote', fetchuser, [
    body('title', 'Title must be 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be 5 characters long').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;
        // If there are errors, return status 400 and error.
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savenote = await note.save();
        res.json(savenote);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Some Error Occured.");
    }
})


// ROUTE-3 : LoggedIn users can update note using : POST "api/notes/updatenote" :  Login required
router.put('/updatenote/:id', fetchuser, [
    body('title', 'Title must be 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be 5 characters long').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const {title,description,tag} = req.body;
        
        // If there are errors, return status 400 and error.
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }

        const newNote = {};
        if(title) {newNote.title = title};
        if(description) {newNote.description = description};
        if(tag) {newNote.tag = tag};

        // Find the note to be updated and update it 
        let note = await Note.findById(req.params.id);
        if(!note && note.user.toString() !== req.user.id) {
            return res.status(400).send("Please use correct Id");
        }

        note = await Note.findByIdAndUpdate(req.params.id , {$set : newNote} , {new:true})
        res.json(note);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Some Error Occured.");
    }
})

module.exports = router;