import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { JSX, useEffect, useState } from "react";
import useUserStore from "@/store/userStore";

export default function Team(): JSX.Element {
  const { onlineUsers } = useUserStore();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const connectWithUser = (userId: string) => {
    console.log(`Connecting with user: ${userId}`);
    alert(`Initiating connection with user ID: ${userId}`);
  };

  return (
    <div className="p-6 text-gray-200 space-y-6">
      <h2
        className={`text-3xl font-bold mb-6 text-blue-400 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        Team Members
      </h2>

      <Card
        className={`bg-gray-900 border border-gray-700 shadow-lg transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <CardHeader className="border-b border-gray-700">
          <h3 className="text-xl font-semibold text-blue-300 pb-2">
            SOOTHE Team
          </h3>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onlineUsers.map((user) => (
              <div 
                key={user.id} 
                className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex items-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-blue-400 mr-3">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-blue-400">{user.name}</p>
                    <p className="text-xs text-gray-400">
                      {user.role} • {user.unit}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex justify-between">
                  <span
                    className={`text-xs py-1 px-2 rounded ${
                      user.isAvailable
                        ? "bg-green-900 text-green-300"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {user.isAvailable ? "Online" : "Offline"}
                  </span>
                  <button
                    onClick={() => connectWithUser(user.id)}
                    className={`text-xs py-1 px-2 rounded ${
                      user.isAvailable
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-700 text-gray-400 cursor-not-allowed"
                    } transition-colors duration-300`}
                    disabled={!user.isAvailable}
                  >
                    Connect
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}