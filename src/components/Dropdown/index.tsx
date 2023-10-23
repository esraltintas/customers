import React from "react";
import Select, { StylesConfig } from "react-select";

type OptionType = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: OptionType[];
  placeholder?: string;
  showDropdownIndicator?: boolean;
  width?: string | number;
  borderRadius?: string;
  padding?: string;
  marginBottom?: string;
  [key: string]: any;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  showDropdownIndicator,
  onChange,
  ...rest
}) => {
  const internalHandleChange = (selectedOption: OptionType | null) => {
    if (onChange) {
      onChange(selectedOption);
    }
  };
  const customStyles: StylesConfig<OptionType, false> = {
    control: (base) => ({
      ...base,
      color: "white",
      borderRadius: rest.borderRadius ? rest.borderRadius : "8px",
      borderColor: "#F3F4F5",
      "&:hover": {
        borderColor: "#ADC4CE",
        boxShadow: "none",
      },
      fontSize: "14px",
      minHeight: "32px",
      cursor: "pointer",
      marginBottom: rest.marginBottom ? rest.marginBottom : "0px",
    }),
    container: (provided) => ({
      ...provided,
      color: "white",
    }),

    option: (base) => ({
      ...base,
      cursor: "pointer",
      color: "black",
      fontSize: "12px",
      "&:hover,&:active,&:focus": {
        background: "#ADC4CE",
        color: "white",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "black",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      display: "block",
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
        onChange={internalHandleChange}
        {...rest}
      />
    </div>
  );
};

export default Dropdown;
