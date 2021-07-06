import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import Header from "./Header";
import Footer from "./Footer";
import client from "./ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = (props) => {
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <Head>
          <title>Guns & Thighs</title>
          <link rel="preload" type="font/woff2" as="font" crossOrigin="anonymous" href="/fonts/Knockout-34.woff2"></link>
          <link rel="preload" type="font/woff2" as="font" crossOrigin="anonymous" href="/fonts/SangBleuOGSerif-Light-WebXL.woff2"></link>
          <link rel="preload" type="font/woff2" as="font" crossOrigin="anonymous" href="/fonts/untitled-sans-web-regular.woff2"></link>
        </Head>
        <Header />
        <main id="pageWrapper" className="_3oCbh dark">
          {props.children}
          <Footer />
        </main>
      </ApolloProvider>
    </AppProvider>
  );
};

export default Layout;
