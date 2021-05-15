import initDB from "../../../helpers/initDB";
import Music from "../../../models/Music";
initDB();

export default async (req, res) => {
  const { query } = req;
  const { id } = query;
  const music = await Music.findById(id);
  res.json(music);
};
