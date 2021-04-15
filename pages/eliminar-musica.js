function eliminarmusica() {
  return (
    <div>
      <center>
        <br />
        <h2>Eliminar Cancion</h2>
        <form action="/api/delete-music" method="DELETE">
          <label name="fname">Primer Nombre:</label>
          <input type="text" id="fname" name="fname" />
          <br />
          <br />
          <label name="lname">Segundo Nombre:</label>
          <input type="text" id="lname" name="lname" />
          <br />
          <br />
          <input type="submit" defaultValue="Submit" />
        </form>
      </center>
    </div>
  );
}

export default eliminarmusica;
