import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import Connect from "../../Pages/Connect";
import About from "../../Pages/About";
import Schedule from "../../Pages/Schedule";
import Team from "../../Pages/Team";
import Training from "../../Pages/Training";
import Dashboard from "../../Pages/Dashboard";
import Sidebar from "../Sidebar/Sidebar";

const SootheMain = () => {
  const { activeTab, setOnlineUsers } = useUserStore();

  useEffect(() => {
    setOnlineUsers([
      { id: "nurse-1", name: "Sarah Johnson", role: "Nurse", unit: "Oncology", isAvailable: true },
      { id: "doctor-1", name: "Dr. Michael Chen", role: "Physician", unit: "Cardiology", isAvailable: false },
      { id: "volunteer-1", name: "Keon Niknejad", role: "Volunteer", unit: "Pediatrics", isAvailable: true },
      { id: "volunteer-2", name: "Lauren Russell", role: "Volunteer", unit: "Neurology", isAvailable: true },
    ]);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto p-6 bg-gray-800 text-gray-200">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "connect" && <Connect />}
        {activeTab === "about" && <About />}
        {activeTab === "schedule" && <Schedule />}
        {activeTab === "training" && <Training />}
        {activeTab === "team" && <Team />}
      </main>
    </div>
  );
};

export default SootheMain;