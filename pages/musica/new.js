import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

function New() {
  const [form, setForm] = useState({ name: "", autor: "", duration: 0, album: ""});
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
    console.log(errors);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};
    if (!form.name) {
      setForm("");
      err.title = "Title is required";
      alert(err.title);
    }
    if (!form.duration) {
      setForm("");
      err.description = "Duration is not defined";
      alert(err.description);
    }
    return err;
  };

  return (
    <center>
      <h1>Crear Nota</h1>
      <div>
        {isSubmitting ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              label="name"
              name="name"
              onChange={handleChange}
            />{" "}
            <input
              type="text"
              placeholder="Album"
              label="album"
              name="album"
              onChange={handleChange}
            />{" "}
            <input
              type="text"
              placeholder="Duration"
              label="duration"
              name="duration"
              onChange={handleChange}
            />{" "}
            <input
              type="text"
              placeholder="Autor"
              label="autor"
              name="autor"
              onChange={handleChange}
            />
            <br />
            
            <button type="submit">Create</button>
          </form>
        )}
      </div>
    </center>
  );
}

export default New;
