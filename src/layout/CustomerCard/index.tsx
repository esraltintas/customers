import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import useCustomerStore from "../../store/useCustomerStore";
import {
  StyledCustomerCardWrapper,
  StyledCustomerInfoWrapper,
  StyledTitle,
  StyledName,
} from "./index.styles";

interface CustomerCardProps {
  company: string;
  industry: string;
  isActive: boolean;
  about: string;
  projects: string[];
}

type Customer = {
  company: string;
  industry: string;
  isActive: boolean;
  about: string;
  projects: string[];
};

const CustomerCard: React.FC<CustomerCardProps> = ({
  company,
  industry,
  isActive,
  about,
  projects,
}) => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>({
    company: "ABC Corp",
    industry: "Tech",
    isActive: true,
    about: "Some information about the company",
    projects: [],
  });

  const { showModal, setShowModal } = useCustomerStore();

  return (
    <StyledCustomerCardWrapper>
      <StyledCustomerInfoWrapper>
        <StyledTitle>Customer</StyledTitle>
        <StyledName>{company}</StyledName>
      </StyledCustomerInfoWrapper>
      <StyledCustomerInfoWrapper>
        <StyledTitle>Industry</StyledTitle>
        <StyledName>{industry}</StyledName>
      </StyledCustomerInfoWrapper>
      <StyledCustomerInfoWrapper>
        <StyledTitle>Status</StyledTitle>
        <StyledName>{isActive ? "Active" : "Inactive"}</StyledName>
      </StyledCustomerInfoWrapper>
      <StyledCustomerInfoWrapper>
        <StyledTitle>About</StyledTitle>
        <StyledName data-title={about}>{about}</StyledName>
      </StyledCustomerInfoWrapper>
      {showModal && (
        <Modal
          show={showModal}
          customer={selectedCustomer}
          onClose={() => setShowModal(false)}
          onSave={(updatedCustomer) => {
            setSelectedCustomer(updatedCustomer);
            setShowModal(false);
          }}
        />
      )}

      <FontAwesomeIcon icon={faPenToSquare} />
      <FontAwesomeIcon icon={faTrash} />
    </StyledCustomerCardWrapper>
  );
};

export default CustomerCard;
