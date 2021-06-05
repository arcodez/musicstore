import mongoose from "mongoose";

const FacturaSchema = new mongoose.Schema({
  fecha: {
    type: String,
    required: true,
  },
  productos: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    monto: {
      type: String,
      required: false,
    },
  },
});

module.exports =
  mongoose.models.Factura || mongoose.model("Factura", FacturaSchema);
