import useHandleMusic from "../../../hooks/useHandleMusic";
import fetch from "isomorphic-unfetch";
import { useState } from "react";
import Layout from "../../../components/Layout/Layout";
import Input from "../../../components/Input";

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
                  <Input name="name" value={form.name} change={handleChange} />
                  <Input
                    name="autor"
                    value={form.autor}
                    change={handleChange}
                  />
                  <Input
                    name="price"
                    value={form.price}
                    change={handleChange}
                  />
                  <Input
                    name="album"
                    value={form.album}
                    change={handleChange}
                  />
                  <Input
                    name="audioUrl"
                    value={form.audioUrl}
                    change={handleChange}
                  />
                  <Input
                    name="audioUrlCompleto"
                    value={form.audioUrlCompleto}
                    change={handleChange}
                  />
                  <Input
                    name="imageUrl"
                    value={form.imageUrl}
                    change={handleChange}
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
