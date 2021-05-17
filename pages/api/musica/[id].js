import initDB from "../../../helpers/initDB";
import Music from "../../../models/Music";

initDB();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const music = await Music.findById(id);

        if (!music) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: music });
      } catch (error) {
        res.status(400).json({ sucess: false });
      }
      break;
    case "PUT":
      try {
        const music = await Music.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!music) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ sucess: true, data: music });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedMusic = await Music.deleteOne({ _id: id });

        if (!deletedMusic) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
