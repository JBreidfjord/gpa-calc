import { useState } from "react";

interface CalculatorPageProps {}

const CalculatorPage = ({}: CalculatorPageProps) => {
  const [isEditable, setIsEditable] = useState(false);

  return <>Calc</>;
};

export default CalculatorPage;
