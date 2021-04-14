import React from "react";
import Class from "../components/Class";
import Layout from "../components/Layout/Layout";

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    return {
      props: { musicas: data },
    };
  } catch (error) {
    console.log(error);
  }
};

function canciones({ musicas }) {
  return (
    <Layout>
      <div className="container my-5  py-5">
        <section className="class section" id="class">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-5">
                <h6 data-aos="fade-up">Get A Perfect Song</h6>
                <h2 data-aos="fade-up" data-aos-delay={200}>
                  My Songs
                </h2>
              </div>
              {/* Llamar a las canciones desde la base de datos */}
              {/* Hay que remplazar los datos del map por props */}
              {musicas.map((musica) => (
                <div
                  className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <h1>{musica.name}</h1>
                  <div className="class-thumb">
                    <img
                      src="images/class/crossfit-class.jpg"
                      className="img-fluid"
                      alt="Class"
                    />
                    <div className="class-info">
                      <h3 className="mb-1">Pinche Bad Bunny</h3>
                      <span className="class-price">$15</span>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </p>
                      <span>
                        <strong>Produced by</strong> - Alejandro Portillo
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Class />
      </div>
    </Layout>
  );
}

export default canciones;
