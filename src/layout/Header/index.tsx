import React from "react";
import Filter from "../Filter";
import Button from "../../components/Button";
import useCustomerStore from "../../store/useCustomerStore";

import { StyledHeaderWrapper, StyledHeaderTitle } from "./index.styles";
function Header() {
  const { setShowModal } = useCustomerStore();

  const filterOptions = [
    {
      value: "test",
      label: "Test",
    },
  ];

  const handleClick = () => {
    setShowModal(true);
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
