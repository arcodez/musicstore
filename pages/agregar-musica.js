function agregarmusica() {
  return (
    <div>
      <center>
        <br />
        <h2>Agregar Cancion</h2>
        <form action="/api/add-music" method="POST">
          <label htmlFor="fname">Primer Nombre:</label>
          <input type="text" id="fname" name="fname" />
          <br />
          <br />
          <label htmlFor="lname">Segundo Nombre:</label>
          <input type="text" id="lname" name="lname" />
          <br />
          <br />
          <input type="submit" defaultValue="Submit" />
        </form>
      </center>
    </div>
  );
}

export default agregarmusica;
