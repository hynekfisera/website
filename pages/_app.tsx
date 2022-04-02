import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default appWithTranslation(MyApp);
