import CalculatorPage from "./pages/calculator/CalculatorPage";
import LoginPage from "./pages/login/LoginPage";
import SemesterPage from "./pages/semester/SemesterPage";
import styled from "styled-components";
import { useState } from "react";

const App = () => {
  const [userId, setUserId] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  if (!userId)
    return (
      <Container>
        <LoginPage setUserId={setUserId} />
      </Container>
    );

  return (
    <>
      <Logout onClick={() => setUserId("")}>Logout</Logout>
      <Container>
        {!!selectedSemester ? (
          <CalculatorPage semester={selectedSemester} />
        ) : (
          <SemesterPage setSelectedSemester={setSelectedSemester} />
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logout = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem 2rem 0 auto;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default App;
