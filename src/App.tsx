import "./App.css";

import { FirebaseApp } from "firebase/app";
import LoginPage from "./pages/login/LoginPage";
import { useState } from "react";

const App = ({ firebaseApp }: { firebaseApp: FirebaseApp }) => {
  const [userId, setUserId] = useState("");

  return (
    <div className="App">
      {!!userId ? <></> : <LoginPage firebaseApp={firebaseApp} setUserId={setUserId} />}
    </div>
  );
};

export default App;
