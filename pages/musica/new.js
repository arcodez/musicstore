import React from "react";
import Layout from "../../components/Layout/Layout";
import useHandleMusic from "../../hooks/useHandleMusic";

const formValue = {
  name: "",
  autor: "",
  price: "",
  album: "",
  audioUrl: "",
  audioUrlCompleto: "",
  imageUrl: "",
};

function New() {
  const { handleSubmit, handleChange, isSubmitting, createMusic } =
    useHandleMusic(formValue);

  return (
    <Layout>
      <div className="container my-3 py-5">
        <h1>Crear Canción</h1>
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
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Autor"
                  label="autor"
                  name="autor"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  label="price"
                  name="price"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Album"
                  label="album"
                  name="album"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Audio Url"
                  label="audio url"
                  name="audioUrl"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Audio Url Completo"
                  label="Audio Completo"
                  name="audioUrlCompleto"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Image Url"
                  label="Image Url"
                  name="imageUrl"
                  onChange={handleChange}
                />
              </div>
              <br />
              <center>
                <button type="submit" className="btn btn-danger">
                  Create
                </button>
              </center>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default New;
