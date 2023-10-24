import React, { useState } from "react";
import Button from "../Button";
import useCustomerStore from "../../store/useCustomerStore";
import {
  StyledButtonWrapper,
  StyledModalOverlay,
  StyledModalContainer,
  StyledLabel,
  StyledInput,
  StyledTextarea,
  StyledStatusWrapper,
} from "./index.styles";

interface ModalProps {
  title: string;
  show: boolean;
  customer: Customer;
  onClose: () => void;
  onSave: (updatedCustomer: Customer) => void;
}

type Customer = {
  company: string;
  industry: string;
  isActive: boolean;
  about: string;
  projects: string[];
};

const UpdateCustomerModal: React.FC<ModalProps> = ({
  title,
  show,
  onSave,
  onClose,
}) => {
  const { selectedCustomer, setSelectedCustomer } = useCustomerStore();

  if (!show) return null;

  return (
    <StyledModalOverlay>
      <StyledModalContainer>
        <h2>{title}</h2>

        <StyledLabel>Company:</StyledLabel>
        <StyledInput
          value={selectedCustomer.company}
          onChange={(e) =>
            setSelectedCustomer((prev: any) => ({
              ...prev,
              company: e.target.value,
            }))
          }
        />

        <StyledLabel>Industry:</StyledLabel>
        <StyledInput
          value={selectedCustomer.industry}
          onChange={(e) =>
            setSelectedCustomer((prev: any) => ({
              ...prev,
              industry: e.target.value,
            }))
          }
        />

        <StyledLabel>About:</StyledLabel>
        <StyledTextarea
          value={selectedCustomer.about}
          onChange={(e) =>
            setSelectedCustomer((prev: any) => ({
              ...prev,
              about: e.target.value,
            }))
          }
        />

        <StyledStatusWrapper>
          <StyledLabel>Active:</StyledLabel>
          <input
            type="checkbox"
            checked={selectedCustomer.isActive}
            onChange={(e) =>
              setSelectedCustomer((prev: any) => ({
                ...prev,
                isActive: e.target.checked,
              }))
            }
          />
        </StyledStatusWrapper>

        <StyledButtonWrapper>
          <Button
            text="Save"
            onClick={() => onSave(selectedCustomer)}
            color="dark"
          />
          <Button text="Close" onClick={onClose} color="dark" />
        </StyledButtonWrapper>
      </StyledModalContainer>
    </StyledModalOverlay>
  );
};

export default UpdateCustomerModal;
