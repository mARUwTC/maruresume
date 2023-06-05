import { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import Layout from "../components/Layout";
import { useShowCV } from "../functions/queryParam";

const MyApp = ({ Component, pageProps, router }) => {
  const showCV = useShowCV();
  const [showPopup, setShowPopup] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    if (!showCV) {
      const visited = localStorage.getItem('visited');
      if (!visited) {
        localStorage.setItem('visited', 'true');
        setShowPopup(true);
        setShowComponent(false);
      } else {
        setShowPopup(false);
        setShowComponent(true);
      }
    } else {
      setShowPopup(false);
      setShowComponent(true);
    }
  }, [showCV, router.asPath]);

  const handleButtonClick = () => {
    setShowPopup(false);
    setShowComponent(true);
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } }
  };

  const popupTransition = { type: 'tween', ease: 'easeInOut' };

  return (
    <Layout>
      {showPopup && (
        <motion.div
          className='popup'
          variants={popupVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={popupTransition}
        >
          <h2>Welcome to my profolio!</h2>
          <p>This is a guest page. Please contact me for more details about the full version of this website including CV.</p>
          <motion.button onClick={handleButtonClick} whileTap={{ scale: 0.8 }} >Explore less</motion.button>
        </motion.div>
      )}
      {showComponent &&
        <AnimatePresence mode='wait'>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      }
    </Layout>
  );
}

export default MyApp;
