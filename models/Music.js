import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  autor: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: false,
  },
  album: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: false,
  },
  audioUrlCompleto: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.models.Music || mongoose.model("Music", MusicSchema);
