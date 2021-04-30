import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

const baseUrl = "http://localhost:3000/api/";

function crud() {
  var usuarios = [];
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  const peticionGet = async () => {
    await axios.get(baseUrl + "products").then((response) => {
      console.log("Peticion Get");
      console.log(response.data);
      setData(response.data);
      console.log(data)
    });
  };

  const getUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        const datos = response.data;
        usuarios = datos;
        //console.log("Usuarios");
        //console.log("Variable")
        //console.log(usuarios)
        //console.log(datos);
        setData(datos);
        //console.log("Estado")
        //console.log(data);
      });
    //console.log(usuarios)
    return usuarios;
  };
  const peticionPut = async () => {
    await axios.put(baseUrl + "update-music");
  };

  const peticionDelete = async () => {
    await axios.delete(baseUrl + "delete-music");
  };

  const peticionPost = async () => {
    await axios.post(baseUrl + "add-music");
  };

  function encontrarUsuario() {
    console.log("Usuarios")
    //console.log(usuarios);
  }
  useEffect(async () => {
    console.log("useEffect")
    await peticionGet()
    const usuarios = await getUsers();
    //console.log(usuarios)
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="Crud.css" />
      </Head>
      <center>
        <h2>
          {usuarios.map((usuario) => (
            <h1>{usuario.name}</h1>
          ))}
        </h2>
        <button onClick={() => peticionDelete()}>Eliminar</button>
        <button onClick={() => peticionGet()}>Encontrar</button>
        <button onClick={() => encontrarUsuario()}>Encontrar Consola</button>
        <button onClick={() => peticionPost()}>Crear</button>
        <button onClick={() => peticionPut()}>Actualizar</button>
      </center>
    </>
  );
}

export default crud;
