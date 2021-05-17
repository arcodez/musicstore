import mongoose, { models } from "mongoose";

const MusicSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    autor: {
        type:String,
        required:true
    },
    duration: {
        type: Number,
        required:true
    },
    album: {
        type: String,
        required:true
    }
    
})

module.exports = mongoose.models.Music || mongoose.model('Music', MusicSchema)