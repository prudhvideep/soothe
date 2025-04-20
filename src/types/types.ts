type User = {
  email : string,
  type : "patient" | "volunteer" | "nurse",
  isActive : boolean
};

export type Theme =  "light" | "dark";
export type PatientTabState = "Home" | "About" | "Team" | "Learn" | "Media" | "Get Involved" | "New Volunteers";
export type ChapterState = "Home" | "New Volunteers" | "New Departments" | "New Chapters"

export default User;