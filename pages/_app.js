import "../styles/globals.css";
import Head from "next/head";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {
          // <script src="https://www.paypal.com/sdk/js?client-id=AWKytFGu4kNLPRMxebIkzgS7cZKW5rxfZ6AwwLldnmQR5p1vIGWMB5RJs76VESbVp3rduTNESnQzmOrg"></script>
        }
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
