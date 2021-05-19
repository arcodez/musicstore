import React from "react";
import { useRouter } from "next/router";

function Music({ musica }) {
  const router = useRouter();

  const deletedMusic = async () => {
    const musicId = router.query.id;
    try {
      await fetch(`http://localhost:3000/api/musica/${musicId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/musica");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>{musica.name}</h1>
      <h3>{musica.autor}</h3>
      <button onClick={deletedMusic}>Delete</button>
      <button onClick={() => router.push("/musica")}>Ver Mas Canciones</button>
    </div>
  );
}

Music.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/musica/${id}`);
  const { data } = await res.json();
  return { musica: data };
};
export default Music;
