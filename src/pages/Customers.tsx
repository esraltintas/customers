import React, { Suspense, useEffect, useState } from "react";
import { Container } from "../components/Grid";
import CustomerCard from "../layout/CustomerCard";
import useCustomerStore from "../store/useCustomerStore";

function FindYourFlight() {
  const { filteredCustomers, newFilteredCustomers } = useCustomerStore();

  useEffect(() => {
    fetch("http://localhost:3001/customers")
      .then((response) => response.json())
      .then((data) => {
        newFilteredCustomers(data);
      });
  }, []);
  console.log("customers", filteredCustomers);

  return (
    <Container>
      {filteredCustomers.map((item) => (
        <CustomerCard
          company={item?.company}
          industry={item?.industry}
          isActive={item?.isActive}
          about={item?.about}
          projects={item?.projects}
        />
      ))}

      <Suspense fallback={<div>Loading...</div>}></Suspense>
    </Container>
  );
}

export default FindYourFlight;
