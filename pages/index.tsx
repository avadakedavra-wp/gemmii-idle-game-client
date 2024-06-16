import type { NextPage } from 'next';
import { useEffect, useMemo } from 'react';
import Layout from './_compoents/layouts';
import Dashboard from './_compoents/dashboard';
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router';
// web3 components
import { 
  ConnectWallet,
  useAccounts,
  useContract,
  useAddress
} from '@thirdweb-dev/react';

const Home: NextPage = () => {
  const address = useAddress();
  const router = useRouter()

  useEffect(() => {
    if (address) {
      router.push('/gemmi-project')
    }
  }, [address]);

  return (
    <Layout>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center h-screen text-white text-center p-4">
          <h3 className={`text-center text-4xl pb-4`}>
            Welcome to{" "}
            <span className={`${styles.gradientText3} text-center text`}>
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-bold text-center"
              >
                GEMMII.
              </a>
            </span>
          </h3>
          <ConnectWallet />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
