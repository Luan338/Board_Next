import { AppProps } from "../node_modules/next/app";
import Header from "../src/components/Header/index";
import { Provider as NextAuthProvider } from "../node_modules/next-auth/client";

import "../src/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
