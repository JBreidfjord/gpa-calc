import AddButton from "../../components/AddButton";
import styled from "styled-components";
import { useState } from "react";

interface SemesterPageProps {
  setSelectedSemester: (semester: string) => void;
}

const SemesterPage = ({ setSelectedSemester }: SemesterPageProps) => {
  const [isAddingSemester, setIsAddingSemester] = useState(false);
  const [newSemester, setNewSemester] = useState("");

  // TODO: Fetch semesters from database

  const addSemester = () => {
    // TODO: Add semester to database

    setSelectedSemester(newSemester);
  };

  return (
    <>
      {/* TODO: Map over existing semesters */}
      {isAddingSemester ? (
        <>
          <Input
            type="text"
            value={newSemester}
            onChange={(e) => setNewSemester(e.target.value)}
            placeholder="Name"
          />
          <AddButton size={24} onClick={addSemester} />
        </>
      ) : (
        <AddButton onClick={() => setIsAddingSemester(true)} />
      )}
    </>
  );
};

const Input = styled.input`
  padding: 0.2rem;
`;

export default SemesterPage;
