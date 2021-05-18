import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

function EditMusic({ music }) {
  const [form, setForm] = useState({
    duration: music.duration,
    album: music.album,
    name: music.name,
    autor: music.autor,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateMusic();
        console.log(form);
        //alert("Sucess");
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const updateMusic = async () => {
    try {
      await fetch(`http://localhost:3000/api/musica/${router.query.id}`, {
        method: "PUT",
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
      setForm({ autor: "" });
      err.name = "Name is required";
      alert(err.name);
    }
    if (!form.autor) {
      setForm({ name: "" });
      err.autor = "Autor is required";
      alert(err.autor);
    }
    return err;
  };

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
