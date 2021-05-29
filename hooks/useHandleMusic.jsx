import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

const useHandleMusic = ({ music }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

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

  const deleteMusic = async () => {
    const musicId = router.query.id;
    try {
      await fetch(`http://localhost:3000/api/musica/${musicId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/musica");
    } catch (error) {
      console.log(error);
    }
  };

  return { deleteMusic, handleSubmit, handleChange, form, updateMusic };
};

export default useHandleMusic;
