import { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import Layout from "../components/Layout";
import { useShowCV } from "../functions/queryParam";

const MyApp = ({ Component, pageProps, router }) => {
  const showCV = useShowCV();

  useEffect(() => {
    if (!showCV) {
      const searchParams = new URLSearchParams(router.asPath.split('?')[1]);
      const paramValue = searchParams.get('CV');

      if (!paramValue || paramValue === 'false') {
        const visited = localStorage.getItem('visited');
        if (!visited) {
          localStorage.setItem('visited', 'true');
          alert(
            'This is a guest page. Please contact me for more details about the full version of this website.'
          );
        }
      }
    }
  }, [showCV, router.asPath]);

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
