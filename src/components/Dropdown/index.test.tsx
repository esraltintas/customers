import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./index";

test("Renders the Dropdown component", () => {
  const options = [
    { value: "Option1", label: "Option 1" },
    { value: "Option2", label: "Option 2" },
    { value: "Option3", label: "Option 3" },
  ];
  render(<Dropdown placeholder="Outbound flight" options={options} />);
  const dropdownComponent = screen.getByText("Outbound flight");
  expect(dropdownComponent).toBeInTheDocument();
});
