import styled from "@emotion/styled";
import { Zilla_Slab } from "@next/font/google";
import { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header";
import "./styles.css";

const zilla = Zilla_Slab({
  weight: ["700"],
  style: ["italic"],
  display: "swap",
});

const StyledApp = styled.header`
  font-family: ${zilla.style.fontFamily};
`;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ttaerrim's field!</title>
      </Head>
      <StyledApp>
        <Header />
        <Component {...pageProps} />
      </StyledApp>
    </>
  );
}

export default CustomApp;
