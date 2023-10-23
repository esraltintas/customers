import styled from "@emotion/styled";

export const StyledCustomerCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 20% 10% 10% 30% 15% 15%;
  gap: 20px;
  padding: 1.5625rem 5rem;
  font-size: 0.625rem;
  font-weight: bold;
  background-color: #fff;
  margin: 1.25rem;
  max-height: 80px;
  max-width: 1200px;
  border-radius: 0.3125rem;
  border: 1px solid #adc4ce;
`;

export const StyledCustomerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  align-content: center;
`;

export const StyledTitle = styled.div`
  font-size: 0.625rem;
  padding-bottom: 1.25rem;
  max-height: 10px;
`;
export const StyledName = styled.div`
  font-size: 0.9375rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 350px;
  position: relative;

  &:hover::after {
    content: attr(data-title);
    position: absolute;
    top: 100%;
    left: 0;
    white-space: nowrap;
    background-color: #f9f9f9;
    padding: 5px;
    border: 1px solid #ccc;
    z-index: 1;
  }
`;

export const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;

  svg {
    padding-right: 20px;
  }
`;
