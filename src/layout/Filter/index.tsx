import React from "react";
import Select, { GroupBase, OptionsOrGroups } from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { StyledPlaceholder } from "./index.styles";

interface FilterProps {
  options?: OptionsOrGroups<OptionType, GroupBase<OptionType>> | undefined;
}

type OptionType = {
  value: string;
  label: string;
};

const Filter = ({ options }: FilterProps) => {
  console.log(options);
  /*   const [selectedOption, setSelectedOption] = useState<string>(null);
   */
  /*   const handleSortChange = (selected: React.SetStateAction<null>) => {
    setSelectedOption(selected);
    if (onSortChange) {
        onFilterChange(selected);
    }
  }; */

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
        placeholder={
          <StyledPlaceholder>
            <div>
              <FontAwesomeIcon icon={faArrowUp} />
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
            <div>Filter by</div>
          </StyledPlaceholder>
        }
        className="sort-dropdown"
        isSearchable={false}
        getOptionLabel={(option: OptionType) => option.label}
      />
    </div>
  );
};

export default Filter;
