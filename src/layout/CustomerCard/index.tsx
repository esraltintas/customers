import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal";
import Dropdown from "../../components/Dropdown";
import useCustomerStore from "../../store/useCustomerStore";
import {
  StyledCustomerCardWrapper,
  StyledCustomerInfoWrapper,
  StyledTitle,
  StyledName,
  StyledIcons,
} from "./index.styles";

interface CustomerCardProps {
  company: string;
  industry: string;
  isActive: boolean;
  about: string;
  projects: string[];
}

type Project = {
  id: string;
  name: string;
  contact: string | null;
  start_date: string;
  end_date: string | null;
};

type Customer = {
  company: string;
  industry: string;
  isActive: boolean;
  about: string;
  projects: Project[];
};

const CustomerCard: React.FC<CustomerCardProps> = ({
  company,
  industry,
  isActive,
  about,
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState("");

  const [selectedCustomer, setSelectedCustomer] = useState<Customer>({
    company: "ABC Corp",
    industry: "Tech",
    isActive: true,
    about: "Some information about the company",
    projects: [],
  });

  const { showModal, setShowModal } = useCustomerStore();

  const handleClick = () => {
    setShowModal(true);
  };

  const handleChangeProject = (project: { label: any }) => {
    console.log(project);
    const selectedValue = project ? project.label : null;
    setSelectedProject(selectedValue);
  };

  const transformedProjects = projects.map((project) => ({
    value: project?.id,
    label: project?.name,
  }));

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

      <StyledCustomerInfoWrapper>
        <Dropdown
          placeholder="Projects"
          options={transformedProjects}
          onChange={handleChangeProject}
        />
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

      <StyledIcons>
        <FontAwesomeIcon icon={faPenToSquare} size="2x" onClick={handleClick} />
        <FontAwesomeIcon icon={faTrash} size="2x" />
      </StyledIcons>
    </StyledCustomerCardWrapper>
  );
};

export default CustomerCard;
