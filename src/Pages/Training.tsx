import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { JSX, useEffect, useState } from "react";

export default function Training(): JSX.Element {
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
        Training Resources
      </h2>

      <Card
        className={`bg-gray-900 border border-gray-700 shadow-lg transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <CardHeader className="border-b border-gray-700">
          <h3 className="text-xl font-semibold text-blue-300 pb-2">
            Required Training
          </h3>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-gray-200 mb-4 leading-relaxed">
            All volunteers must complete the following training modules before
            their first shift.
          </p>

          <div className="space-y-4">
            <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-blue-400">SOOTHE Orientation</p>
                  <p className="text-sm text-gray-300">
                    Introduction to the program and guidelines
                  </p>
                </div>
                <span className="bg-green-900 text-green-300 text-xs py-1 px-2 rounded">
                  Completed
                </span>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-blue-400">Patient Communication</p>
                  <p className="text-sm text-gray-300">
                    Techniques for effective patient interaction
                  </p>
                </div>
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition-colors duration-300">
                  Start
                </button>
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-blue-400">Managing Emotional Distress</p>
                  <p className="text-sm text-gray-300">
                    Responding to patients in emotional pain
                  </p>
                </div>
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-700 transition-colors duration-300">
                  Start
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}