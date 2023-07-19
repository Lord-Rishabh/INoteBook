const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotesSchema = new Schema ({

    // This is like foreign key in which we are using 'id' from User.js to refer user notes
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title : {
        type : String ,
        required : true
    },
    description : {
        type : String ,
        required : true 
    },
    tag : {
        type : String,
        default : "general" ,
    },
    date : {
        type : Date,
        default : Date.now
    }
});
const Note = mongoose.model('notes', NotesSchema)
module.exports = Note