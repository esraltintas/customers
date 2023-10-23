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
  id: string;
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
  id,
  company,
  industry,
  isActive,
  about,
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState("");
  const { selectedCustomer, setSelectedCustomer, newFilteredCustomers } =
    useCustomerStore();

  const { showModalCustomerCard, setShowModalCustomerCard } =
    useCustomerStore();

  const handleEditClick = () => {
    setSelectedCustomer({
      id: id,
      company: company,
      industry: industry,
      isActive: isActive,
      about: about,
      projects: projects,
    });
    setShowModalCustomerCard(true);
  };

  const handleDeleteClick = () => {
    deleteCustomer(id);
  };

  const handleChangeProject = (project: { label: any }) => {
    const selectedValue = project ? project.label : null;
    setSelectedProject(selectedValue);
  };

  const transformedProjects = projects.map((project) => ({
    value: project?.id,
    label: project?.name,
  }));

  const fetchAllCustomers = () => {
    fetch("http://localhost:3001/customers")
      .then((response) => response.json())
      .then((data) => newFilteredCustomers(data))
      .catch((error) => console.error("Error fetching all customers:", error));
  };

  const deleteCustomer = (customerId: string) => {
    fetch(`http://localhost:3001/customers/${customerId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        fetchAllCustomers();
      })
      .catch((error) => console.error("Error:", error));
  };

  const updateCustomer = (updatedCustomer: Customer) => {
    fetch(`http://localhost:3001/customers/${updatedCustomer.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCustomer),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Updated Customer:", data);

        fetchAllCustomers();
      })
      .catch((error) => console.error("Error:", error));
  };

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
      {showModalCustomerCard && (
        <Modal
          title="Update Customer"
          show={showModalCustomerCard}
          customer={selectedCustomer}
          onClose={() => setShowModalCustomerCard(false)}
          onSave={(updatedCustomer) => {
            updateCustomer(updatedCustomer);
            setSelectedCustomer(updatedCustomer);
            setShowModalCustomerCard(false);
          }}
        />
      )}

      <StyledIcons>
        <FontAwesomeIcon
          icon={faPenToSquare}
          size="2x"
          onClick={handleEditClick}
        />
        <FontAwesomeIcon icon={faTrash} size="2x" onClick={handleDeleteClick} />
      </StyledIcons>
    </StyledCustomerCardWrapper>
  );
};

export default CustomerCard;
