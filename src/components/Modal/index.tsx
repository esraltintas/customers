import React, { useState, useEffect, useRef } from "react";
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
  const [updatedCustomer, setUpdatedCustomer] = useState<Customer>(customer);
  const { setShowModal } = useCustomerStore();

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleProjectsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const projects = e.target.value.split("\n");
    setUpdatedCustomer((prev) => ({ ...prev, projects }));
  };

  if (!show) return null;

  return (
    <StyledModalOverlay>
      <StyledModalContainer ref={modalRef}>
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

        <StyledLabel>Active:</StyledLabel>
        <input
          type="checkbox"
          checked={updatedCustomer.isActive}
          onChange={(e) =>
            setUpdatedCustomer((prev) => ({
              ...prev,
              isActive: e.target.checked,
            }))
          }
        />

        <StyledLabel>Projects (one per line):</StyledLabel>
        <StyledTextarea
          value={updatedCustomer.projects.join("\n")}
          onChange={handleProjectsChange}
        />

        <StyledButtonWrapper>
          <Button
            text="Save"
            onClick={() => onSave(updatedCustomer)}
            color="dark"
          />
          <Button text="Close" onClick={handleClose} color="dark" />
        </StyledButtonWrapper>
      </StyledModalContainer>
    </StyledModalOverlay>
  );
};

export default UpdateCustomerModal;
