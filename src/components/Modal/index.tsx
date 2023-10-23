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
  onSave,
}) => {
  const { setShowModal, selectedCustomer, setSelectedCustomer } =
    useCustomerStore();

  const handleClose = () => {
    setShowModal(false);
  };

  const handleProjectsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const projects = e.target.value.split("\n");
    setSelectedCustomer((prev: any) => ({ ...prev, projects }));
  };

  if (!show) return null;

  console.log(selectedCustomer);

  return (
    <StyledModalOverlay>
      <StyledModalContainer>
        <h2>Update Customer</h2>

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

        <StyledLabel>Projects (one per line):</StyledLabel>
        <StyledTextarea
          value={selectedCustomer.projects.join("\n")}
          onChange={handleProjectsChange}
        />

        <StyledButtonWrapper>
          <Button
            text="Save"
            onClick={() => onSave(selectedCustomer)}
            color="dark"
          />
          <Button text="Close" onClick={handleClose} color="dark" />
        </StyledButtonWrapper>
      </StyledModalContainer>
    </StyledModalOverlay>
  );
};

export default UpdateCustomerModal;
