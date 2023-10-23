import { create } from "zustand";

type OptionType = {
  map(arg0: (industry: any) => any): string[];
  label: string;
  value: string;
};

type Project = {
  id: string;
  name: string;
  contact: string | null;
  start_date: string;
  end_date: string | null;
};

type Customer = {
  id: string;
  isActive: boolean;
  company: string;
  industry: string;
  projects: Project[];
  about: string;
};

type CustomerStore = {
  filteredCustomers: Customer[];
  newFilteredCustomers: (newCustomersArray: Customer[]) => void;

  selectedCustomer: Customer;
  setSelectedCustomer: (
    updateFunctionOrValue: ((prev: Customer) => Customer) | Customer
  ) => void;
  selectedOption: OptionType | null;
  setSelectedOption: (selectedOption: OptionType) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const useCustomerStore = create<CustomerStore>((set) => ({
  filteredCustomers: [],
  newFilteredCustomers: (newCustomersArray: Customer[]) =>
    set({ filteredCustomers: newCustomersArray }),
  selectedOption: null,
  setSelectedOption: (selectedOptionArr: OptionType) =>
    set({ selectedOption: selectedOptionArr }),

  showModal: false,
  setShowModal: (showModal: boolean) => set({ showModal }),

  selectedCustomer: {
    id: "",
    company: "",
    industry: "",
    isActive: true,
    about: "",
    projects: [],
  },
  setSelectedCustomer: (updateFunctionOrValue) => {
    if (typeof updateFunctionOrValue === "function") {
      set((state) => ({
        selectedCustomer: updateFunctionOrValue(state.selectedCustomer),
      }));
    } else {
      set({ selectedCustomer: updateFunctionOrValue });
    }
  },
}));

export default useCustomerStore;
