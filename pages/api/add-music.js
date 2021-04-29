export default function (req, res) {
  if (req.method === "POST") {
    let response = {};
    response = req.body;
    console.log("Los datos han sido añadidos")
    //console.log(response);
    //res.json(response);
    //res.redirect("/");
  } else {
    console.log("Los datos no han sido tomados");
  }
}
