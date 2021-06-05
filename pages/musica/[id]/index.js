import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "../../../components/Layout/Layout";
import { server } from "../../../config/index";

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`${server}/api/musica/${id}`);
  const musica = await res.json();
  const { data } = musica;

  return { props: { musica: data } };
}

// No SSR Import
const PaypalNoSSR = dynamic(() => import("../../../components/PaypalButton"), {
  ssr: false,
});

const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);

function Music({ musica }) {
  const router = useRouter();

  const formFactura = {
    fecha: hoy.toUTCString(),
    productos: {
      name: musica.name,
      price: musica.price,
    },
  };

  const createFacture = async () => {
    try {
      await fetch(`${server}/api/factura/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFactura),
      });
      console.log(formFactura);
      router.push("/musica");
    } catch (error) {
      console.log(error);
    }
  };

  function handlePaySuccesfully() {
    createFacture();
  }

  return (
    <Layout>
      <center>
        <div className="container my-5 py-5 mx-auto">
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <audio className="mx-auto" controls src="/audio/1.mp3"></audio>
          </div>
          <br />
          <div style={{ width: "50%" }}>
            {/*  <PaypalNoSSR
              price={musica.price}
              handlePaySuccesfully={() => handlePaySuccesfully()}
            />
            */}
          </div>
          <button onClick={() => handlePaySuccesfully()}>Pagar</button>
          <br />
          <br />
          <Link href="/musica">
            <a className="btn btn-success">Mas Canciones</a>
          </Link>
        </div>
      </center>
    </Layout>
  );
}

export default Music;
