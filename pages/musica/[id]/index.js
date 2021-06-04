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

function Music({ musica }) {
  const router = useRouter();

  function handlePaySuccesfully() {
    router.push("/");
  }

  return (
    <Layout>
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
            handlePaySuccesfully={() => handlePaySuccesfully()}
          />
        </div>
        <Link href="/musica">
          <a className="btn btn-success">Mas Canciones</a>
        </Link>
      </div>
    </Layout>
  );
}

export default Music;
