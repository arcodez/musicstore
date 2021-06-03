import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import { server } from "../config/index";

const useHandleMusic = (formValue) => {
  const router = useRouter();
  const [ventana, setVentana] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState(formValue);

  useEffect(() => {
    setVentana(window.location.href);
  }, []);

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateMusic();
        if (router.pathname === "/musica/new") {
          createMusic();
        }
        //alert("Sucess");
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createMusic = async () => {
    try {
      await fetch(`${server}/api/musica/`, {
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

  const updateMusic = async () => {
    try {
      await fetch(`${server}/api/musica/${router.query.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/menu/products");
    } catch (error) {
      console.log(error);
    }
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
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

  const deleteMusic = async (musicID) => {
    const musicId = router.query.id || musicID;
    try {
      await fetch(`${server}/api/musica/${musicId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push(ventana);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    form,
    deleteMusic,
    createMusic,
    handleSubmit,
    handleChange,
    updateMusic,
    isSubmitting,
  };
};

export default useHandleMusic;
