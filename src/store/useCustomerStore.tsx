import { create } from "zustand";

type CustomerStore = {
  filteredCustomers: string[];
  newFilteredCustomers: (newCustomersArray: string[]) => void;
};

const useCustomerStore = create<CustomerStore>((set) => ({
  filteredCustomers: [],
  newFilteredCustomers: (newCustomersArray: string[]) =>
    set({ filteredCustomers: newCustomersArray }),
}));

export default useCustomerStore;
