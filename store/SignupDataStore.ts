import { create } from "zustand";

interface UserDataState {
  firstName: string;
  lastName: string;
  email: string;
  userData: (firstName: string, lastName: string, email: string) => void;
}

export const useUserDataStore = create<UserDataState>()((set) => ({
  firstName: "",
  lastName: "",
  email: "",
  userData: (firstName, lastName, email) =>
    set((state) => ({
      firstName: (state.firstName = firstName),
      lastName: (state.lastName = lastName),
      email: (state.email = email),
    })),
}));
