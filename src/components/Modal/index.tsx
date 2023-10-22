import React, { useState } from "react";
import Button from "../Button";
import {
  StyledButtonWrapper,
  StyledModalOverlay,
  StyledModalContainer,
  StyledLabel,
  StyledInput,
  StyledTextarea,
} from "./index.styles";

interface ModalProps {
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
  show,
  customer,
  onClose,
  onSave,
}) => {
  const [updatedCustomer, setUpdatedCustomer] = useState<Customer>(customer);

  if (!show) return null;

  return (
    <StyledModalOverlay>
      <StyledModalContainer>
        <h2>Update Customer</h2>

        <StyledLabel>Company:</StyledLabel>
        <StyledInput
          value={updatedCustomer.company}
          onChange={(e) =>
            setUpdatedCustomer((prev) => ({ ...prev, company: e.target.value }))
          }
        />

        <StyledLabel>Industry:</StyledLabel>
        <StyledInput
          value={updatedCustomer.industry}
          onChange={(e) =>
            setUpdatedCustomer((prev) => ({
              ...prev,
              industry: e.target.value,
            }))
          }
        />

        <StyledLabel>About:</StyledLabel>
        <StyledTextarea
          value={updatedCustomer.about}
          onChange={(e) =>
            setUpdatedCustomer((prev) => ({ ...prev, about: e.target.value }))
          }
        />

        <StyledButtonWrapper>
          <Button
            text="Save"
            onClick={() => onSave(updatedCustomer)}
            color="dark"
          />
          <Button text="Close" onClick={onClose} color="dark" />
        </StyledButtonWrapper>
      </StyledModalContainer>
    </StyledModalOverlay>
  );
};

export default UpdateCustomerModal;
