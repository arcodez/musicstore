import useHandleMusic from "../../../hooks/useHandleMusic";
import fetch from "isomorphic-unfetch";
import { useState } from "react";
import Layout from "../../../components/Layout/Layout";

function EditMusic({ music }) {
  const formValue = {
    album: music.album,
    name: music.name,
    autor: music.autor,
  };

  const { form, handleSubmit, handleChange, isSubmitting } =
    useHandleMusic(formValue);

  return (
    <Layout>
      <div className="container my-3 py-5">
        <center>
          <h1>Actulizar Musica</h1>
          <div>
            {isSubmitting ? (
              <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form- group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    label="name"
                    name="name"
                    value={music.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Album"
                    label="album"
                    value={music.album}
                    name="album"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Autor"
                    label="autor"
                    name="autor"
                    value={music.autor}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <center>
                  <button type="submit" className="btn btn-danger">
                    Update{" "}
                  </button>
                </center>
              </form>
            )}
          </div>
        </center>
      </div>
    </Layout>
  );
}

EditMusic.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/musica/${id}`);
  const { data } = await res.json();
  return { music: data };
};

export default EditMusic;
