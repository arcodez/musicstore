import Footer from "./Footer";
import MenuBar from "./MenuBar";
import Head from "next/head";

function LayoutMenu({ children }, props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <MenuBar />
      {children}
      <Footer />
    </>
  );
}

export default LayoutMenu;
