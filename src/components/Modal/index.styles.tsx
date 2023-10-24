import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.08);
  z-index: 1;
`;

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 1.875rem 6.25rem;
  border-radius: 0.5rem;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.625rem;
  margin-bottom: 0.625rem;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.625rem;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 3.125rem;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.625rem;
  margin-bottom: 1.25rem;
`;

export const StyledStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.625rem;
`;
