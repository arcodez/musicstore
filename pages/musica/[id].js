import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Musica() {
  const [canciones, setCanciones] = useState([]);
  const router = useRouter();
  const { query } = router;
  const { id } = query;
  return (
    <>
      <h1>Esta es en la canción {id}</h1>
    </>
  );
}

export default Musica;
