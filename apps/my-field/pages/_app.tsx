import { AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";
import Header from "../components/header";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ttaerrim's field!</title>
      </Head>
      <main className="app">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
