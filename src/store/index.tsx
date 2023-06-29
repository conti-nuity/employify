import { create } from "zustand";

export const useEmployeeListStore = create((set) => ({
  // State
  employeeList: {},
  //   Actions
  setEmployeeList: (info: any) => set(() => ({ employeeList: info })),
}));

export const useEmployeetStore = create((set) => ({
  // State
  employee: {},
  //   Actions
  setEmployee: (info: any) => set(() => ({ employee: info })),
}));
