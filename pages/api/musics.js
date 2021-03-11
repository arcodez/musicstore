import initDB from "../../helpers/initDB";
import Music from "../../models/Music";

initDB()

export default (req, res) => {
    Music.find().then(musics =>{
        res.status(200).json(musics)
    })
}