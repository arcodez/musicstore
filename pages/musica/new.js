import React from "react";
import Input from "../../components/Input";
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
  const { handleSubmit, handleChange, isSubmitting } =
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
                <Input name="name" change={handleChange} />
                <Input name="autor" change={handleChange} />
                <Input name="price" change={handleChange} />
                <Input name="album" change={handleChange} />
                <Input name="audioUrl" change={handleChange} />
                <Input name="audioUrlCompleto" change={handleChange} />
                <Input name="imageUrl" change={handleChange} />
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
