import React from "react";
import Layout from "../../components/Layout/Layout";
import useCreateMusic from "../../hooks/useCreateMusic";

function New() {
  const { handleSubmit, handleChange, isSubmitting } = useCreateMusic();

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
                  placeholder="Album"
                  label="album"
                  name="album"
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
