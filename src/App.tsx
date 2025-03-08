import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router";
import Login from "./Pages/Login";
import PatientDashboard from "./Pages/PatientDashboard";
import NurseDashboard from "./Pages/NurseDashbaord";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nurse" element={<NurseDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
