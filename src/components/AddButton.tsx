import addIcon from "../assets/add.svg";
import styled from "styled-components";

interface AddButtonProps {
  onClick: () => void;
  size?: number;
}

const AddButton = ({ onClick, size }: AddButtonProps) => {
  return <Add src={addIcon} onClick={onClick} size={size ?? 48} />;
};

const Add = styled.img`
  cursor: pointer;
  filter: invert(0.8);
  border-radius: 100%;
  width: ${(props: { size: number }) => props.size}px;
`;

export default AddButton;
