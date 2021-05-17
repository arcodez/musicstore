import initDB from "../../../helpers/initDB";
import Music from "../../../models/Music";

initDB();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const musics = await Music.find({});

        res.status(200).json({ success: true, data: musics });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const music = await Music.create(req.body);

        res.status(201).json({ succes: true, data: music });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
