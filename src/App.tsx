import { BrowserRouter as Router, Route, Routes } from "react-router";
import PatientDashboard from "./Pages/PatientDashboard";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Media from "./Pages/Media";
import GetInvolved from "./Pages/GetInvolved";
import NewChapters from "./Pages/NewChapters";
import NewVolunteers from "./Pages/NewVolunteers";
import NewDepartments from "./Pages/NewDepartments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
        <Route path="/team" element={<Team />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/newchapters" element={<NewChapters />} />
        <Route path="/newvolunteers" element={<NewVolunteers />} />
        <Route path="/newdepartments" element={<NewDepartments />} />
        <Route path="/" element={<PatientDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
