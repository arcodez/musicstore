import React from "react";

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section
        className="hero d-flex flex-column justify-content-center align-items-center"
        id="home"
      >
        <div className="bg-overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto col-12">
              <div className="hero-text mt-5 text-center">
                <h6>new way to build a healthy lifestyle!</h6>
                <h1 className="text-white">
                  The Best on Music Production Products
                </h1>
                <a href="#feature" className="btn custom-btn mt-3">
                  Get Music
                </a>
                <a href="#about" className="btn custom-btn bordered mt-3">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature" id="feature">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
              <h2 className="mb-3 text-white">New to the a single?</h2>
              <h6 className="mb-4 text-white">
                Your membership is up to 2 months FREE ($62.50 per month)
              </h6>
              <p>
                Porti Music Store is commercial website. by{" "}
                <a rel="nofollow" href="#" target="_parent">
                  Abel and Jose
                </a>{" "}
                for your Explore the Library Songs
              </p>
              <a
                href="#"
                className="btn custom-btn bg-color mt-3"
                data-toggle="modal"
                data-target="#membershipForm"
              >
                Become a member today
              </a>
            </div>
            <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
              <div className="about-working-hours">
                <div>
                  <h2 className="mb-4 text-white">Working hours</h2>
                  <strong className="d-block">Sunday : Closed</strong>
                  <strong className="mt-3 d-block">Monday - Friday</strong>
                  <p>7:00 AM - 10:00 PM</p>
                  <strong className="mt-3 d-block">Saturday</strong>
                  <p>6:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
