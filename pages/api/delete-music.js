export default function (req, res) {
    if (req.method === "DELETE") {
      let response = {};
      response = req.body;
      //res.json(response)
      res.send("Los datos han sido borrados")
      //console.log(response, "Los datos han sido Borrados");
      //res.redirect("/");
    } else {
      console.log("Los datos no han sido tomados");
    }
  }
  