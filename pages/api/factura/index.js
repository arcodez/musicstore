import initDB from "../../../helpers/initDB";
import Factura from "../../../models/Factura";

initDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const facturas = await Factura.find({});

        res.status(200).json({ sucess: true, data: facturas });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    case "POST":
      try {
        const factura = await Factura.create(req.body);

        res.staus(201).json({ sucess: true, data: factura });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    default:
      res.status(400).json({ sucess: false });
      break;
  }
};
