import React from "react";
import About from "../components/About";
import Class from "../components/Class";
import Contact from "../components/Contact";
import Horarios from "../components/Horarios";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Head from "next/head";
import Hero from "../components/Hero";

export default function index() {
  return (
    <>
      <Head>
        <title>Porti Music Store</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="description" content />
        <meta name="keywords" content />
        <meta name="author" content />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/aos.css" />
        {/* MAIN CSS */}
        <link rel="stylesheet" href="css/tooplate-gymso-style.css" />
        {/*
      Tooplate 2119 Gymso Fitness
      https://www.tooplate.com/view/2119-gymso-fitness
      */}
      </Head>
      <Hero />
      <MenuBar />
      <About />
      <Class />
      <Horarios />
      <Contact />
      <Footer />
      <Modal />
      {/* SCRIPTS */}

      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/aos.js"></script>
      <script src="js/smoothscroll.js"></script>
      <script src="js/custom.js"></script>
    </>
  );
}
