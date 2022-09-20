import "./App.css";

import CalculatorPage from "./pages/calculator/CalculatorPage";
import LoginPage from "./pages/login/LoginPage";
import { useState } from "react";

const App = () => {
  const [userId, setUserId] = useState("");

  return (
    <div className="App">{!!userId ? <CalculatorPage /> : <LoginPage setUserId={setUserId} />}</div>
  );
};

export default App;
