import "../styles/globals.css";
import Head from "next/head";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://www.paypal.com/sdk/js?client-id=AWKytFGu4kNLPRMxebIkzgS7cZKW5rxfZ6AwwLldnmQR5p1vIGWMB5RJs76VESbVp3rduTNESnQzmOrg"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  let globalData = "http://localhost:3000";

  appProps.pageProps = {
    globalData,
  };
  return { ...appProps };
};

export default MyApp;
