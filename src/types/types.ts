type User = {
  email : string,
  type : "patient" | "volunteer" | "nurse",
  isActive : boolean
};

export type Theme =  "light" | "dark";
export type PatientTabState = "Home" | "About" | "Team" | "Learn";

export default User;