import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function MenuBar(props) {
  return (
    <>
      <Head>
        <title>{props.titulo || "Porti Music Store"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta
          name="description"
          content="La Mejor Tienda de Canciones Que Hay"
        />
        <meta name="keywords" />
        <meta name="author" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/abel.css" />
        {/* MAIN css */}
        <link rel="stylesheet" href="/css/tooplate-gymso-style.css" />
      </Head>
      {/* MENU BAR */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Porti Music Store</a>
          </Link>
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
                <Link href="/#home">
                  <a className="nav-link smoothScroll">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#about">
                  <a className="nav-link smoothScroll">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#class">
                  <a className="nav-link smoothScroll">Songs</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#schedule">
                  <a className="nav-link smoothScroll">Horarios</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#contact">
                  <a className="nav-link smoothScroll">Contact</a>
                </Link>
              </li>
            </ul>
            <ul className="social-icon ml-lg-3">
              <li>
                <Link href="#">
                  <a className="fa fa-facebook" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="fa fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="fa fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
