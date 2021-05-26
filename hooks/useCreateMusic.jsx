import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

function useCreateMusic() {
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
        createMusic();
        console.log(form);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createMusic = async () => {
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
    console.log(form);
  };

  const validate = () => {
    let err = {};
    if (!form.name) {
      setForm("");
      err.title = "Title is required";
      alert(err.title);
    }
    return err;
  };
  return { form, handleChange, handleSubmit, isSubmitting };
}

export default useCreateMusic;
