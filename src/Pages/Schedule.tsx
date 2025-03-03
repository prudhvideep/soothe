import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { JSX, useEffect, useState } from "react";

export default function Schedule(): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="p-6 text-gray-200 space-y-6">
      <h2
        className={`text-3xl font-bold mb-6 text-blue-400 transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        Schedule a Shift
      </h2>

      <Card
        className={`bg-gray-900 border border-gray-700 shadow-lg transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <CardHeader className="border-b border-gray-700">
          <h3 className="text-xl font-semibold text-blue-300 pb-2">
            Available Shifts
          </h3>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="space-y-4">
            <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-blue-400">Oncology Unit</p>
                  <p className="text-sm text-gray-300">
                    March 4, 2025 • 2:00 PM - 4:00 PM
                  </p>
                </div>
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition-colors duration-300">
                  Sign Up
                </button>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-blue-400">Neurology Unit</p>
                  <p className="text-sm text-gray-300">
                    March 5, 2025 • 10:00 AM - 12:00 PM
                  </p>
                </div>
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition-colors duration-300">
                  Sign Up
                </button>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-blue-400">Pediatrics Unit</p>
                  <p className="text-sm text-gray-300">
                    March 6, 2025 • 3:00 PM - 5:00 PM
                  </p>
                </div>
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition-colors duration-300">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}