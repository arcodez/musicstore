import React, { useEffect, useState } from "react";
import About from "../components/About";
import Class from "../components/Class";
import Contact from "../components/Contact";
import Horarios from "../components/Horarios";
import Layout from "../components/Layout/Layout";
import Modal from "../components/Modal";
import Hero from "../components/Hero";

export default function index() {
  const [baseurl, setBaseUrl] = useState("");
  useEffect(() => {
    setBaseUrl(window.location.hostname);
  }, []);
  return (
    <Layout>
      <Hero />
      <About />
      <Class />
      {baseurl}
      <Horarios />
      <Contact />
      <Modal />
    </Layout>
  );
}
