import React, { useState } from "react";
import Select, { GroupBase, OptionsOrGroups } from "react-select";

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
  console.log(options);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleFilterChange = (selected: OptionType | null) => {
    setSelectedOption(selected ? selected.value : null);
    if (onFilterChange) {
      onFilterChange(selected);
    }
  };

  return (
    <div>
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: "black",
            borderRadius: "50px",
            padding: "5px 10px",
            width: "min(300px)",
          }),
        }}
        options={options}
        isMulti
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
