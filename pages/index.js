import Layout from "../components/Layout/Layout";
import Hero from "../components/Inicio/Hero";
import About from "../components/Inicio/About";
import Class from "../components/Inicio/Class";
import Horarios from "../components/Inicio/Horarios";
import Contact from "../components/Inicio/Contact";
import Modal from "../components/Inicio/Modal";

export default function index() {
  return (
    <Layout>
      <Hero />
      <About />
      <Class />
      <Horarios />
      <Contact />
      <Modal />
    </Layout>
  );
}
