import mongoose, { models } from "mongoose";

const FacturaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hora: {
    type: Date.now,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  monto: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Note || mongoose.model("Note", FacturaSchema);
