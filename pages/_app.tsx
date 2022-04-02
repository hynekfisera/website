import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Router from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // @ts-ignore
  const handleRouteChange = (url) => {
    // @ts-ignore
    window.gtag("config", "G-8WJJCW1HGJ", {
      page_path: url,
    });
    NProgress.done();
  };

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteChange);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteChange);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

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
