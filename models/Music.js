import mongoose, { models } from "mongoose";

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
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  audioUrl: {
    type: String,
    required: true,
  },
  audioUrlCompleto: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Music || mongoose.model("Music", MusicSchema);
