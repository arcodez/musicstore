import React from "react";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";

export const getStaticProps = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/musica`);
    const { data } = await res.json();
    console.log(`http://${process.env.BASE_URL}/api/musica`);
    return {
      props: { musicas: data },
    };
  } catch (error) {
    console.log(error);
  }
};

function canciones({ musicas }) {
  const [ventana, setVentana] = useState("");
  useEffect(() => {
    setVentana(window.location.hostname);
  }, []);
  return (
    <Layout>
      <div className="container my-5  py-5">
        <section className="class section" id="class">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-5">
                <h6>Get A Perfect Song</h6>
                <h2>My Songs</h2>
                <Link href={ventana}>
                  <a>Ir Al Inicio</a>
                </Link>
              </div>
              {/* Llamar a las canciones desde la base de datos */}
              {/* Hay que remplazar los datos del map por props */}
              {musicas.map((musica) => (
                <div
                  key={musica._id}
                  className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
                >
                  <Link href={`/musica/${musica._id}`}>
                    <a>
                      <h1>{musica.name}</h1>
                    </a>
                  </Link>
                  <div className="class-thumb">
                    <img
                      src="images/class/crossfit-class.jpg"
                      className="img-fluid"
                      alt="Class"
                    />
                    <div className="class-info">
                      <h3 className="mb-1">{musica.name}</h3>
                      <span className="class-price">$15</span>
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
