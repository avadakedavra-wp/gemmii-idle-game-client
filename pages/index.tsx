import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import BackgroundAnimation from './_compoents/backgroundAnimation';


// web3 components
import {
  useAddress,
  useSDK,
  useWallet,
  ConnectWallet,
  lightTheme,
  useDisconnect
} from "@thirdweb-dev/react";

// components and styles
import Dashboard from './_compoents/dashboard';
import RegisterDialog from './_compoents/registerDialog';
import Layout from './_compoents/layouts';
import styles from "../styles/Home.module.css";
import Sound from 'react-sound'
const loginOptional: boolean = false;
let userId: string | undefined = undefined;

export type RegisterFormValues = {
  email: string;
  confirmEmail: string;
};

const Home: NextPage = () => {
  const wallet = useWallet();
  const address = useAddress();
  const sdk = useSDK();
  const router = useRouter();
  const disconnect = useDisconnect();

  const [register, setRegister] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [challengeKey, setChallengeKey] = useState<string | null>(null);
  const [challengeKeyVerified, setChallengeKeyVerified] = useState<boolean>(false);

  const checkUserId = useMemo(() => {
    if (userId !== undefined) {
      setChallengeKeyVerified(false)
      return true;
    }
    return false;
  }, [userId, challengeKeyVerified]);

  useEffect(() => {
    if (address !== undefined) {
      if (checkUserId) {
        router.push('/gemmi-project')
      } else {
        setRegister(true);
        setShowModal(true);
      }
    } else {
      router.push('/')
    }
  }, [checkUserId, register, address]);


  const getChallengeKey = useCallback(async (email: string) => {
    // call api to get challenge key 
    setChallengeKeyVerified(true);
    setChallengeKey('qw2fgjkwEFJWIFJIWJF');
  }, [challengeKey, challengeKeyVerified]);

  const verifyChallengeKey = useCallback(async (email: string, challengeKey: string) => {
    // call api to verify challenge key
    if (challengeKey === 'qw2fgjkwEFJWIFJIWJF') {
      console.log('Challenge key verified');
      userId = '123456';
      setChallengeKeyVerified(false);
      setShowModal(false);
    }
  }, [checkUserId, userId, challengeKeyVerified, challengeKey, showModal]);

  return (
    <Layout>
      <BackgroundAnimation />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center h-screen text-black text-center p-4">
          <Image style={{ padding: 2 }} src="/images/character-gif-1.gif" alt="logo" width={180} height={120} />
          <h3 className={`text-center text-4xl pb-4 p-2`}>
            Welcome to{" "}
            <span className={`${styles.gradientText3} text-center text`}>
              <a
                href="https://jibjib.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 font-bold text-center"
              >
                JIBTAP.
              </a>
            </span>
          </h3>
          <ConnectWallet
            theme={lightTheme({
              colors: {
                primaryButtonBg: "#c6a9a3",
                accentButtonText: "#fdfcfd",
                primaryButtonText: "#1a1523",
                secondaryIconColor: "#706f78",
              },
            })}
          />
          {register  && (
            <RegisterDialog
              showModal={showModal}
              setShowModal={setShowModal}
              onGetChallengeKey={getChallengeKey}
              onVerifyChallengeKey={verifyChallengeKey}
              challengeKey={challengeKey}
              setChallengeKey={setChallengeKey}
              challengeKeyVerified={challengeKeyVerified}
              setChallengeKeyVerified={setChallengeKeyVerified}
              onDisconnect={disconnect}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
