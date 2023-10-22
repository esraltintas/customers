import React from "react";
import { StyledButton } from "./index.styles";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick = () => {},
  color = "default",
}) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
