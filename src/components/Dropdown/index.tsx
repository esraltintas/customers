import React from "react";
import Select from "react-select";

const Dropdown = ({
  options,
  placeholder,
  showDropdownIndicator,
  width,
  ...rest
}) => {
  const customStyles = {
    control: (base, state) => ({
      ...base,
      color: "white",
      borderRadius: rest.borderRadius ? rest.borderRadius : "8px",
      borderColor: "#F3F4F5",
      "&:hover": {
        borderColor: "#af1e65",
        boxShadow: "none",
      },
      fontSize: "14px",
      minHeight: "32px",
      padding: rest.padding ? rest.padding : "10px",
      cursor: "pointer",
      width,
      marginBottom: rest.marginBottom ? rest.marginBottom : "0px",
    }),
    container: (provided) => ({
      ...provided,
      color: "white",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 0,
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#000",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    }),
    option: (base) => ({
      ...base,
      cursor: "pointer",
      color: "black",
      background: "none",
      "&:hover,&:active,&:focus": {
        background: "#AF1E65",
        color: "white",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "black",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      display: showDropdownIndicator ? "block" : "none",
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: "none",
    }),
  };
  return (
    <div>
      <Select
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        aria-label="Select an option"
        {...rest}
      />
    </div>
  );
};

export default Dropdown;
