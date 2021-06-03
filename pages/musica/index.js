import React from "react";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { server } from "../../config/index";

export async function getServerSideProps(context) {
  try {
    const res = await fetch(`${server}/api/musica/`);
    const musicas = await res.json();
    const { data } = musicas;

    return { props: { musicas: data } };
  } catch (error) {
    console.log(error);
  }
}

function canciones({ musicas }) {
  return (
    <Layout>
      <div className="container my-2  py-2">
        <section className="class section" id="class">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-5">
                <h6>Get A Perfect Song</h6>
                <h2>My Songs</h2>
              </div>
              {musicas.map((musica) => (
                <div
                  key={musica._id}
                  className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
                >
                  <div className="class-thumb">
                    <img
                      src={musica.imgUrl}
                      className="img-fluid"
                      alt={`Img ${musica.name}`}
                    />
                    <div className="class-info">
                      <h3 className="mb-1">{musica.name}</h3>
                      <span className="class-price">{musica.price} $</span>
                      <p className="mt-3">{musica.album} </p>
                      <center>
                        <span>
                          <strong>Produced by</strong> - {musica.autor}
                        </span>
                        <br />
                        <Link href={`/musica/${musica._id}`}>
                          <a className="btn btn-success">Comprar</a>
                        </Link>
                      </center>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default canciones;
