import React from "react";
import Head from "next/head";

export default function MenuBar() {
  return (
    <>
      <Head>
        <title>Porti Music Store</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="description" content="La Mejor Tienda de Canciones Que Hay"/>
        <meta name="keywords" />
        <meta name="author" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        {/* MAIN css */}
        <link rel="stylesheet" href="/css/tooplate-gymso-style.css" />
        {/*
      Tooplate 2119 Gymso Fitness
      https://www.tooplate.com/view/2119-gymso-fitness
      */}
      </Head>
      {/* MENU BAR */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Porti Music Store
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <a href="/#home" className="nav-link smoothScroll">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/#about" className="nav-link smoothScroll">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="/#class" className="nav-link smoothScroll">
                  Songs
                </a>
              </li>
              <li className="nav-item">
                <a href="/#schedule" className="nav-link smoothScroll">
                  Horarios
                </a>
              </li>
              <li className="nav-item">
                <a href="/#contact" className="nav-link smoothScroll">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="social-icon ml-lg-3">
              <li>
                <a href="#" className="fa fa-facebook" />
              </li>
              <li>
                <a href="#" className="fa fa-twitter" />
              </li>
              <li>
                <a href="#" className="fa fa-instagram" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
