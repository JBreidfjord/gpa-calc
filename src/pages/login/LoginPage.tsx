import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { FirebaseApp } from "firebase/app";
import { useMemo } from "react";

interface LoginPageProps {
  firebaseApp: FirebaseApp;
  setUserId: (userId: string) => void;
}

const LoginPage = ({ firebaseApp, setUserId }: LoginPageProps) => {
  const provider = new GoogleAuthProvider();

  const auth = useMemo(() => getAuth(firebaseApp), [firebaseApp, getAuth]);

  const signIn = async () => {
    const response = await signInWithPopup(auth, provider);
    setUserId(response.user.uid);
  };

  return (
    <div>
      <h2>GPA Calculator</h2>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
};

export default LoginPage;
