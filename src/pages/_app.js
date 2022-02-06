import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Metamarc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <ToastContainer />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
