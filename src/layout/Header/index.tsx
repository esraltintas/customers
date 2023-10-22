import React from "react";
import Filter from "../Filter";
import Button from "../../components/Button";

import { StyledHeaderWrapper, StyledHeaderTitle } from "./index.styles";
function Header() {
  const filterOptions = [
    {
      value: "test",
      label: "Test",
    },
  ];
  return (
    <StyledHeaderWrapper>
      <StyledHeaderTitle>Customers</StyledHeaderTitle>
      <Filter options={filterOptions} />
      <Button text="Create Customer" />
    </StyledHeaderWrapper>
  );
}

export default Header;
