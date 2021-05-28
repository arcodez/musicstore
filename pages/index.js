import React, { useEffect, useState } from "react";
import About from "../components/About";
import Class from "../components/Class";
import Contact from "../components/Contact";
import Horarios from "../components/Horarios";
import Layout from "../components/Layout/Layout";
import Modal from "../components/Modal";
import Hero from "../components/Hero";

export default function index() {
  console.log("Succesfully");
  return (
    <Layout>
      <Hero />
      <About />
      <Class />
      <Horarios />
      <Contact />
      <Modal />
    </Layout>
  );
}
