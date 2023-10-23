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
  customer,
  onSave,
  onClose,
}) => {
  const { selectedCustomer, setSelectedCustomer } = useCustomerStore();

  const handleProjectsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const projects = e.target.value.split("\n");
    setSelectedCustomer((prev: any) => ({ ...prev, projects }));
  };

  if (!show) return null;

  return (
    <StyledModalOverlay>
      <StyledModalContainer>
        <h2>{title}</h2>

        <StyledLabel>Company:</StyledLabel>
        <StyledInput
          value={customer.company}
          onChange={(e) =>
            setSelectedCustomer((prev: any) => ({
              ...prev,
              company: e.target.value,
            }))
          }
        />

        <StyledLabel>Industry:</StyledLabel>
        <StyledInput
          value={customer.industry}
          onChange={(e) =>
            setSelectedCustomer((prev: any) => ({
              ...prev,
              industry: e.target.value,
            }))
          }
        />

        <StyledLabel>About:</StyledLabel>
        <StyledTextarea
          value={customer.about}
          onChange={(e) =>
            setSelectedCustomer((prev: any) => ({
              ...prev,
              about: e.target.value,
            }))
          }
        />

        <StyledLabel>Active:</StyledLabel>
        <input
          type="checkbox"
          checked={customer.isActive}
          onChange={(e) =>
            setSelectedCustomer((prev: any) => ({
              ...prev,
              isActive: e.target.checked,
            }))
          }
        />

        <StyledLabel>Projects (one per line):</StyledLabel>
        <StyledTextarea
          value={customer.projects.join("\n")}
          onChange={handleProjectsChange}
        />

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
