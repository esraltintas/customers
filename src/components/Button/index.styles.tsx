import styled from "@emotion/styled";

interface StyledButtonProps {
  color: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0.625rem 0.625rem;
  background-color: ${(props) =>
    props.color === "default" ? "#FFF" : "#96B6C5"};
  color: ${(props) => (props.color === "default" ? "#808080" : "#fff")};
  font-weight: 600;
  border-radius: 0.3125rem;
  font-size: 0.9375rem;
  max-height: 2rem;
  border: none;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
