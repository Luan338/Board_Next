import { AppProps } from "../node_modules/next/app";
import Header from "../src/components/Header/index";

import "../src/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
