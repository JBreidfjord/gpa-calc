import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../../firebase";

interface LoginPageProps {
  setUserId: (userId: string) => void;
}

const LoginPage = ({ setUserId }: LoginPageProps) => {
  const provider = new GoogleAuthProvider();

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
