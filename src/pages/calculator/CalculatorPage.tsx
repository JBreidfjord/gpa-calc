import { useState } from "react";

interface CalculatorPageProps {
  semester: string;
}

const CalculatorPage = ({ semester }: CalculatorPageProps) => {
  const [isEditable, setIsEditable] = useState(false);

  // TODO: Fetch data for semester from database

  return <>Calc</>;
};

export default CalculatorPage;
