import React, { Suspense, useEffect, useState } from "react";
import Modal from "../components/Modal";
import CustomerCard from "../layout/CustomerCard";
import useCustomerStore from "../store/useCustomerStore";
import {
  StyledCustomerWrapper,
  StyledRemovedCustomerWrapper,
  StyledRemovedCustomerTitle,
} from "./index.styles";

type Project = {
  id: string;
  name: string;
  contact: string | null;
  start_date: string;
  end_date: string | null;
};

type Customer = {
  id: string;
  isActive: boolean;
  company: string;
  industry: string;
  projects: Project[];
  about: string;
};

type RemovedCustomer = {
  id: string;
  isActive: boolean;
  company: string;
  industry: string;
  projects: Project[];
  about: string;
  isDeleted: boolean;
};

function Customers() {
  const {
    filteredCustomers,
    newFilteredCustomers,
    filteredRemovedCustomers,
    newFilteredRemovedCustomers,
    selectedOption,
  } = useCustomerStore();
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [removedCustomers, setRemovedCustomers] = useState<RemovedCustomer[]>(
    []
  );

  useEffect(() => {
    fetch("http://localhost:3001/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
        newFilteredCustomers(data);
      });

    fetch("http://localhost:3001/removedCustomers")
      .then((response) => response.json())
      .then((data) => {
        setRemovedCustomers(data);
        newFilteredRemovedCustomers(data);
      });
  }, []);

  useEffect(() => {
    if (selectedOption) {
      const industryValues: string[] = selectedOption.map(
        (industry) => industry.value
      );
      setSelectedIndustries(industryValues);
    }
  }, [selectedOption]);

  useEffect(() => {
    if (selectedIndustries.length > 0) {
      newFilteredCustomers(
        customers.filter((customer) =>
          selectedIndustries.includes(customer?.industry)
        )
      );
      newFilteredRemovedCustomers(
        removedCustomers.filter((customer) =>
          selectedIndustries.includes(customer?.industry)
        )
      );
    } else {
      newFilteredCustomers(customers);
      newFilteredRemovedCustomers(removedCustomers);
    }
  }, [selectedIndustries, customers]);

  return (
    <StyledCustomerWrapper>
      {filteredCustomers.map((item) => (
        <CustomerCard
          key={item.id}
          id={item.id}
          company={item?.company}
          industry={item?.industry}
          isActive={item?.isActive}
          about={item?.about}
          projects={item?.projects}
        />
      ))}

      {filteredRemovedCustomers.length > 0 && (
        <StyledRemovedCustomerWrapper>
          <StyledRemovedCustomerTitle>
            Removed Customers
          </StyledRemovedCustomerTitle>
          {filteredRemovedCustomers.map((item) => (
            <CustomerCard
              key={item.id}
              id={item.id}
              company={item?.company}
              industry={item?.industry}
              isActive={item?.isActive}
              about={item?.about}
              projects={item?.projects}
              isDeleted={item?.isDeleted}
            />
          ))}
        </StyledRemovedCustomerWrapper>
      )}

      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </StyledCustomerWrapper>
  );
}

export default Customers;
