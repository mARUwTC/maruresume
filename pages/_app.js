import { useEffect, useState } from 'react'
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import Layout from "../components/Layout";
import GuestAlert from '../components/guestAlert';
import { useShowCV } from "../functions/queryParam";

const MyApp = ({ Component, pageProps, router }) => {
  const showCV = useShowCV();

  // const [showModal, setShowModal] = useState(false);
  // useEffect(() => {
  //   const visited = localStorage.getItem('visited');
  //   if (!visited) {
  //     localStorage.setItem('visited', 'true');
  //     setShowModal(true);
  //   }
  // }, []);

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
      {/* <GuestAlert isOpen={showModal} onClose={() => setShowModal(false)} /> */}
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
