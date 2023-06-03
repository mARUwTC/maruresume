import { AnimatePresence } from "framer-motion";

import "../styles/globals.css";
import Layout from "../components/Layout";

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://chriswong0621:LBhi9OnxW8uOTYJA@marucluster.gpjswik.mongodb.net/getIP?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const logIp = async (req) => {
  const ip = req.headers['x-real-ip'] || req.socket.remoteAddress;

  const data = {
      timestamp: new Date().toISOString(),
      ip: ip
  };

  try {
      await client.connect();
      const database = client.db('<database>');
      const collection = database.collection('ips');
      await collection.insertOne(data);
  } catch (err) {
      console.error(err);
  } finally {
      await client.close();
  }
};

const MyApp = ({ Component, pageProps, router }) =>{
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  await logIp(context.req);
  return { props: {} };
};

export default MyApp;
