import useHandleMusic from "../../../hooks/useHandleMusic";
import fetch from "isomorphic-unfetch";
import { useState } from "react";
import Layout from "../../../components/Layout/Layout";

function EditMusic({ music }) {
  const formValue = {
    name: music.name,
    autor: music.autor,
    price: music.price,
    album: music.album,
    audioUrl: music.audioUrl,
    audioUrlCompleto: music.audioUrlCompleto,
    imageUrl: music.imageUrl,
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
                    name={form.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Autor"
                    label="autor"
                    name={form.autor}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    label="price"
                    name={form.price}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Album"
                    label="album"
                    name={form.album}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Audio Url"
                    label="audio url"
                    name={form.audioUrl}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Audio Url Completo"
                    label="Audio Completo"
                    name={form.audioUrlCompleto}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Image Url"
                    label="Image Url"
                    name={form.imageUrl}
                    onChange={handleChange}
                  />
                </div>
                <br />
                <center>
                  <button type="submit" className="btn btn-danger">
                    Update
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
