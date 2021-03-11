import initDB from "../../helpers/initDB";
import User from "../../models/user";

initDB()

export default (req,res) => {
    User.find().then(users => {
        res.status(200).json(users)
    })
}