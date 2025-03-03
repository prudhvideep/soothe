import { create } from "zustand";
import createSelectors from "./createSelectors";
import User from "@/types/types";

interface UserState {
  activeTab: string | null;
  onlineUsers: User[];
  currentUser: User;
  setActiveTab : (tab : string) => void;
  setOnlineUsers : (users : User[]) => void;
  setCurrentUser : (user : User) => void;
}

const useUserStoreBase = create<UserState>((set) => ({
  activeTab : "dashboard",
  onlineUsers : [],
  currentUser : {
    id: 'user-' + Math.floor(Math.random() * 10000),
    name: 'Medical Student',
    role: 'Volunteer',
    isAvailable: true,
  },
  setActiveTab : (tab : string) => set({activeTab : tab}),
  setOnlineUsers : (users ) => set({onlineUsers : users}),
  setCurrentUser : (user : User) => set({currentUser : user}),
}));

const useUserStore = createSelectors(useUserStoreBase);

export default useUserStore;
