import mongoose, { models } from "mongoose";

const musicsSchema = new mongoose.Schema({
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

export default mongoose.models.music || mongoose.model('music', musicsSchema)