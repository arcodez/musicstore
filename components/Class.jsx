import React from "react";

export default function Class() {
  return (
    <>
      {/* CLASS */}
      <section className="class section" id="class">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center mb-5">
              <h6 data-aos="fade-up">Get A Perfect Song</h6>
              <h2 data-aos="fade-up" data-aos-delay={200}>
                My Songs
              </h2>
            </div>
            <div
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="class-thumb">
                <img
                  src="images/class/yoga-class.jpg"
                  className="img-fluid"
                  alt="Class"
                />
                <div className="class-info">
                  <h3 className="mb-1">Alone Single</h3>
                  <span className="class-price">$10</span>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <span>
                    <strong>Produced by</strong> - Alejandro Portillo
                  </span>
                </div>
              </div>
            </div>
            <div
              className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay={500}
            >
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
            <div
              className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              <div className="class-thumb">
                <img
                  src="images/class/cardio-class.jpg"
                  className="img-fluid"
                  alt="Class"
                />
                <div className="class-info">
                  <h3 className="mb-1">Crazy Time</h3>
                  <span className="class-price">$16</span>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                  <span>
                    <strong>Produced by</strong> - Alejandro Portillo
                  </span>
                </div>
              </div>
            </div>
          </div>
          <center>
            <a
              href="/musica"
              className="btn custom-btn bg-color text-center mt-4"
              style={{ width: "90% !important", margin: "auto" }}
              data-aos="fade-up"
              data-aos-delay={300}
              data-toggle="modal"
            >
              Mas Canciones
            </a>
          </center>
        </div>
      </section>
    </>
  );
}
