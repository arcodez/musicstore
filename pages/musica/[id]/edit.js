import useHandleMusic from "../../../hooks/useHandleMusic";
import fetch from "isomorphic-unfetch";
import { useState } from "react";

function EditMusic({ music }) {
  const [form, setForm] = useState({
    album: music.album,
    name: music.name,
    autor: music.autor,
  });

  const { updateMusic, handleSubmit, handleChange } = useHandleMusic();

  return (
    <center>
      <h1>Actulizar Musica</h1>
      <div>
        {isSubmitting ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              label="Title"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <br />
            <textarea
              name="autor"
              label="Description"
              placeholder="Description"
              value={form.autor}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Update</button>
          </form>
        )}
      </div>
    </center>
  );
}

EditMusic.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/musica/${id}`);
  const { data } = await res.json();
  return { music: data };
};

export default EditMusic;
