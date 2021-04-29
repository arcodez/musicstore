import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";

const baseUrl = "http://localhost:3000/api/";

function crud() {
  const [data, setData] = useState([]);

const peticionGet = async()=> {
    await axios.get(baseUrl+"products")
    .then(response=>{
        console.log(response.data)
        return setData(response.data)
    })
}

const peticionPut = async()=>{
    await axios.put(baseUrl+"update-music")
}

const peticionDelete = async()=>{
    await axios.delete(baseUrl+"delete-music")
}

const peticionPost = async()=>{
    await axios.post(baseUrl+"add-music")
}
 /*  useEffect(() => {
    console.log(data);
  }, []); */

  return (
    <>
      <Head>
        <link rel="stylesheet" href="Crud.css" />
      </Head>
      <center>
        <button onClick={()=> peticionDelete()}>Eliminar</button>
        <button onClick={()=> peticionGet()}>Encontrar</button>
        <button onClick={()=> peticionPost()}>Crear</button>
        <button onClick={()=> peticionPut()}>Actualizar</button>
      </center>
    </>
  );
}

export default crud;
