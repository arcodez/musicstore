import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

function New() {
  const [form, setForm] = useState({
    name: "",
    autor: "",
    album: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote();
        console.log(form);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createNote = async () => {
    try {
      await fetch("http://localhost:3000/api/musica/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/musica");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form)
  };

  const validate = () => {
    let err = {};
    if (!form.name) {
      setForm("");
      err.title = "Title is required";
      alert(err.title);
    }
    if (!form.description) {
      setForm("");
      err.description = "Duration is not defined";
      alert(err.description);
    }
    return err;
  };

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
                  placeholder="Duration"
                  label="duration"
                  className="form-control"
                  name="duration"
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
