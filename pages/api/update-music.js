export default function (req, res) {
    if (req.method === "PUT") {
      let response = {};
      response = req.body;
      res.json(response)
      //res.send("Los datos han sido Actualizados")
      console.log(response, "Los datos han sido Actualizados");
      //res.redirect("/");
    } else {
      console.log("Los datos no han sido tomados");
    }
  }
  