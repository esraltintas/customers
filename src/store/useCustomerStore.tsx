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

type RemovedCustomer = {
  id: string;
  isActive: boolean;
  company: string;
  industry: string;
  projects: Project[];
  about: string;
  isDeleted: boolean;
};

type CustomerStore = {
  filteredCustomers: Customer[];
  newFilteredCustomers: (newCustomersArray: Customer[]) => void;

  filteredRemovedCustomers: RemovedCustomer[];
  newFilteredRemovedCustomers: (
    newRemovedCustomersArray: RemovedCustomer[]
  ) => void;

  selectedCustomer: Customer;
  setSelectedCustomer: (
    updateFunctionOrValue: ((prev: Customer) => Customer) | Customer
  ) => void;
  selectedOption: OptionType | null;
  setSelectedOption: (selectedOption: OptionType) => void;
  showModalCustomerCard: boolean;
  setShowModalCustomerCard: (showModalCustomerCard: boolean) => void;
  showModalCreate: boolean;
  setShowModalCreate: (showModalCreate: boolean) => void;
};

const useCustomerStore = create<CustomerStore>((set) => ({
  filteredCustomers: [],
  newFilteredCustomers: (newCustomersArray: Customer[]) =>
    set({ filteredCustomers: newCustomersArray }),
  filteredRemovedCustomers: [],
  newFilteredRemovedCustomers: (newRemovedCustomersArray: RemovedCustomer[]) =>
    set({ filteredRemovedCustomers: newRemovedCustomersArray }),
  selectedOption: null,
  setSelectedOption: (selectedOptionArr: OptionType) =>
    set({ selectedOption: selectedOptionArr }),

  showModalCustomerCard: false,
  setShowModalCustomerCard: (showModalCustomerCard: boolean) =>
    set({ showModalCustomerCard }),
  showModalCreate: false,
  setShowModalCreate: (showModalCreate: boolean) => set({ showModalCreate }),

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
