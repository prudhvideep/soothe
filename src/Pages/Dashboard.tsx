import useUserStore from "@/store/userStore";
import { BookOpen, Calendar, Video } from "lucide-react";

export default function Dashboard() {
  const { onlineUsers } = useUserStore();
   
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-900 rounded-lg shadow border border-gray-700 p-4">
          <h3 className="font-medium text-gray-300">Today's Shifts</h3>
          <p className="text-3xl font-bold text-gray-200">3</p>
          <p className="text-sm text-gray-400">2 upcoming</p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow border border-gray-700 p-4">
          <h3 className="font-medium text-gray-300">Online Team Members</h3>
          <p className="text-3xl font-bold text-gray-200">
            {onlineUsers.filter((u) => u.isAvailable).length}
          </p>
          <p className="text-sm text-gray-400">across 3 departments</p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow border border-gray-700 p-4">
          <h3 className="font-medium text-gray-300">Patient Sessions</h3>
          <p className="text-3xl font-bold text-gray-200">12</p>
          <p className="text-sm text-gray-400">this week</p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg shadow border border-gray-700 p-6">
        <h3 className="font-medium text-gray-200 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 mr-3">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-200">New shift assigned</p>
              <p className="text-xs text-gray-400">
                Pediatrics Unit, March 3rd, 2:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center text-green-300 mr-3">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-200">Session completed</p>
              <p className="text-xs text-gray-400">
                30 min with Patient #1042, Oncology
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 mr-3">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-200">Training material updated</p>
              <p className="text-xs text-gray-400">
                New resources for pain management conversations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}