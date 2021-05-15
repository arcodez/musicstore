import initDB from "../../../helpers/initDB";
import Music from "../../../models/Music";
initDB();

export default async (req, res) => {
  const { query } = req;
  const { id } = query;
  const music = await Music.findById(id);
    res.json(id)
  /* Aqui Viene el codigo de la bd */
/*   try {
  
    if (!music) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
};
 */