import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const PaypalNoSSR = dynamic(() => import("../../../components/PaypalButton"), {
  ssr: false,
});

function Music({ musica }) {
  const router = useRouter();

  const deletedMusic = async () => {
    const musicId = router.query.id;
    try {
      await fetch(`http://localhost:3000/api/musica/${musicId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/musica");
    } catch (error) {
      console.log(error);
    }
  };

  function handlePaySuccesfully() {
    router.push("/");
  }

  return (
    <Layout>
      <div className="container my-5 py-5 mx-auto">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
        <div className="card" style={{ width: "50%" }}>
          <img
            src="/images/hero-bg.jpg"
            width="300"
            className="card-img-top"
            alt="Card image cap"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{musica.name}</h5>
            <h5>Precio</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
          <audio className="mx-auto" controls src="/audio/1.mp3"></audio>
        </div>
        <br />
        <div style={{ width: "50%" }}>
          <PaypalNoSSR
            price={musica.price}
            handlePaySuccesfully={()=> handlePaySuccesfully()}
          />
        </div>
        <button
          className="btn btn-success"
          onClick={() => router.push("/musica")}
        >
          Ver Mas Canciones
        </button>
      </div>
    </Layout>
  );
}

Music.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/musica/${id}`);
  const { data } = await res.json();
  return { musica: data };
};
export default Music;
