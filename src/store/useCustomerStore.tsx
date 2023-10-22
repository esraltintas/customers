import { create } from "zustand";

type CustomerStore = {
  filteredCustomers: string[];
  newFilteredCustomers: (newCustomersArray: string[]) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const useCustomerStore = create<CustomerStore>((set) => ({
  filteredCustomers: [],
  newFilteredCustomers: (newCustomersArray: string[]) =>
    set({ filteredCustomers: newCustomersArray }),
  showModal: false,
  setShowModal: (showModal: boolean) => set({ showModal }),
}));

export default useCustomerStore;
