import Header from "../components/main/header";
import Footer from "../components/main/footer";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import store, { persistor } from "./../stores/store";
import { PersistGate } from "redux-persist/integration/react";

// import { ethers } from "ethers";
import Web3 from "web3";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function getLibrary(provider) {
  // const library = new ethers.providers.Web3Provider(provider);
  // library.pollingInterval = 8000; // frequency provider is polling
  // return library;
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <PersistGate loading={null} persistor={persistor}>
          <Head>
            <title>Metamarc</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Header />
          <ToastContainer />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Web3ReactProvider>
    </Provider>
  );
}

export default MyApp;
