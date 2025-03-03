import useUserStore from "@/store/userStore";

export default function Connect() {
  const {
    onlineUsers,
  } = useUserStore();

  const connectWithUser = (userId: string) => {
    console.log(`Connecting with user: ${userId}`);
    alert(`Initiating connection with user ID: ${userId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Connect Now</h2>
      
      <div className="bg-gray-900 rounded-lg shadow border border-gray-700 p-6">
        <h3 className="font-medium text-gray-200 mb-4">
          Available Team Members
        </h3>

        <div className="space-y-4">
          {onlineUsers
            .filter((user) => user.isAvailable)
            .map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between border-b border-gray-700 pb-3"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 mr-3">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">{user.name}</p>
                    <p className="text-xs text-gray-400">
                      {user.role} • {user.unit}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => connectWithUser(user.id)}
                  className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition"
                >
                  Connect
                </button>
              </div>
            ))}

          {onlineUsers.filter((user) => user.isAvailable).length === 0 && (
            <p className="text-gray-400 italic">
              No team members are currently available.
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 bg-gray-900 rounded-lg shadow border border-gray-700 p-6">
        <h3 className="font-medium text-gray-200 mb-4">Patient Connections</h3>
        <p className="text-gray-300 mb-4">
          Patient assignments will appear here when you have an upcoming shift.
          You'll be able to connect with patients via secure WebRTC video.
        </p>

        <div className="bg-gray-800 border border-dashed border-gray-600 rounded-lg p-6 text-center">
          <p className="text-gray-400">No patient assignments for today</p>
          <button className="mt-3 bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition">
            View Schedule
          </button>
        </div>
      </div>
    </div>
  );
}