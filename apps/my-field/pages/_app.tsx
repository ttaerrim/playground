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

const StyledApp = styled.div`
  font-family: ${zilla.style.fontFamily};
  width: 100%;
  height: 100%;
`;

const StyledContents = styled.div`
  height: calc(100dvh - 100px);

  > div {
    width: 100%;
    height: 100%;
  }
`;

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ttaerrim's field!</title>
      </Head>
      <StyledApp>
        <Header />
        <StyledContents>
          <Component {...pageProps} />
        </StyledContents>
      </StyledApp>
    </>
  );
}

export default CustomApp;
