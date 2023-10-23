import React from "react";
import Filter from "../Filter";
import Button from "../../components/Button";
import useCustomerStore from "../../store/useCustomerStore";

import { StyledHeaderWrapper, StyledHeaderTitle } from "./index.styles";
function Header() {
  const { setShowModalCreate } = useCustomerStore();

  const filterOptions = [
    {
      value: "insurance",
      label: "Insurance",
    },
    {
      value: "travel",
      label: "Travel",
    },
    {
      value: "tech",
      label: "Tech",
    },
    {
      value: "marketing",
      label: "Marketing",
    },
  ];

  const handleClick = () => {
    setShowModalCreate(true);
  };
  return (
    <StyledHeaderWrapper>
      <StyledHeaderTitle>Customers</StyledHeaderTitle>
      <Filter options={filterOptions} />
      <Button text="Create Customer" onClick={handleClick} />
    </StyledHeaderWrapper>
  );
}

export default Header;
