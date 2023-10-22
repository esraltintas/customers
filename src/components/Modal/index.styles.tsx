import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.08);
`;

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 50px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
`;
