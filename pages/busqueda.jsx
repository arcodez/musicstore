import { useEffect, useState } from "react";
import { User } from "../components/busqueda/User";

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://mocki.io/v1/1c2f5389-b42d-4afb-bdad-94c7a98ad722"
    );
    const data = await res.json();
    return { props: { users: data } };
  } catch (error) {
    console.log(error);
  }
}

function busqueda({ users }) {
  const [searchTerm, setSearchTerm] = useState("");
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <>
      <h1>Busqueda de Api</h1>
      <input
        autoFocus
        type="text"
        name="busqueda"
        placeholder="Buscar"
        onChange={handleChange}
      />
      {users
        .filter((user) => {
          if (searchTerm == "") {
            return user;
          } else if (
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return user;
          }
        })
        .map((user) => (
          <div key={user.id}>
            <User {...user} />
          </div>
        ))}
    </>
  );
}
export default busqueda;
