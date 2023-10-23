import React, { useState } from "react";
import Select, { GroupBase, OptionsOrGroups, StylesConfig } from "react-select";
import useCustomerStore from "../../store/useCustomerStore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { StyledPlaceholder } from "./index.styles";

interface FilterProps {
  options?: OptionsOrGroups<OptionType, GroupBase<OptionType>> | undefined;
  onFilterChange: (e: any) => void;
}

type OptionType = {
  value: string;
  label: string;
};

const Filter = ({ options, onFilterChange }: FilterProps) => {
  console.log("filter", options);
  const { setSelectedOption } = useCustomerStore();

  const handleFilterChange = (selected: OptionType) => {
    setSelectedOption(selected);
    if (onFilterChange) {
      onFilterChange(selected);
    }
  };

  const customStyles: StylesConfig<OptionType, false> = {
    control: (baseStyles) => ({
      ...baseStyles,
      borderColor: "black",
      borderRadius: "50px",
      padding: "5px 10px",
      width: "min(300px)",
      cursor: "pointer",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: 5,
      marginTop: 0,
      cursor: "pointer",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "200px",
      overflowY: "auto",
      cursor: "pointer",
      borderRadius: 5,
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "#808080",
      borderRadius: 5,

      backgroundColor: state.isFocused
        ? "lightgray"
        : state.isSelected
        ? "lightblue"
        : "white",
      "&:hover,&:active,&:focus": {
        background: "#95B6C5",
        color: "white",
      },
    }),
  };

  return (
    <div>
      <Select
        styles={customStyles}
        options={options}
        isMulti="true"
        placeholder={
          <StyledPlaceholder>
            <div>
              <FontAwesomeIcon icon={faArrowUp} />
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <div>Filter by Industry</div>
          </StyledPlaceholder>
        }
        className="sort-dropdown"
        isSearchable={false}
        onChange={handleFilterChange}
        getOptionLabel={(option: OptionType) => option.label}
      />
    </div>
  );
};

export default Filter;
