import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Class() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function Musicas() {
    setLoading(true);
    if (loading) {
      return <p>Loading..</p>;
    } else {
      router.push("/musica");
    }
  }

  return (
    <>
      <section className="class section" id="class">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center mb-5">
              <h6>Get A Perfect Song</h6>
              <h2>My Songs</h2>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
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
            <div className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12">
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
            <div className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12">
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
            <button
              onClick={() => Musicas()}
              className="btn custom-btn bg-color text-center mt-4"
              style={{ width: "90% !important", margin: "auto" }}
              data-toggle="modal"
            >
              Mas Canciones
            </button>
          </center>
        </div>
      </section>
    </>
  );
}
