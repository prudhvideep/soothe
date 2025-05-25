import { create } from "zustand";
import createSelectors from "./createSelectors";
import User, { PatientTabState } from "@/types/types";

interface UserState {
  currentUser: User | null;
  patientTab: PatientTabState;
  chapterTab: string;
  setCurrentUser: (user: User | null) => void;
  setChapterTab: (state: string) => void;
  setPatientTab: (state: PatientTabState) => void;
}

const useUserStoreBase = create<UserState>((set) => ({
  currentUser: null,
  patientTab: "Home",
  chapterTab: "New Volunteers",
  setPatientTab: (state: PatientTabState) => set({ patientTab: state }),
  setCurrentUser: (user: User | null) => set({ currentUser: user }),
  setChapterTab: (state: string) => set({ chapterTab: state }),
}));

const useUserStore = createSelectors(useUserStoreBase);

export default useUserStore;
