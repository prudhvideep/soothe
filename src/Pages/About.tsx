import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { JSX, useEffect, useState } from "react";

export default function About(): JSX.Element {
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
        About SOOTHE
      </h2>

      {/* What We Do Card */}
      <Card 
        className={`bg-gray-900 border border-gray-700 shadow-lg transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <CardHeader className="border-b border-gray-700">
          <h3 className="text-xl font-semibold text-blue-300 pb-2">What We Do</h3>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-gray-200 mb-4 leading-relaxed">
            SOOTHE (Students Offering Optimism To Help) is a program where Hopkins
            students provide comfort, distraction, and support for patients in
            physical or emotional distress through engaging conversation or guided
            activities.
          </p>
          <p className="text-gray-200 leading-relaxed">
            SOOTHE serves to foster connection between empathetic and enthusiastic
            students with patients to alleviate their suffering. The Johns Hopkins
            Hospital is an asylum for those seeking respite from their pain.
            These experiences can be healing, but simultaneously isolating.
            Through this organization, students can gain skills while supporting
            patients with companionship and solace.
          </p>
        </CardContent>
      </Card>

      {/* Mission Statement Card */}
      <Card 
        className={`bg-gray-900 border border-gray-700 shadow-lg transition-all duration-700 delay-200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <CardHeader className="border-b border-gray-700">
          <h3 className="text-xl font-semibold text-blue-300 pb-2">Mission Statement</h3>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-gray-200 mb-4 leading-relaxed group">
            <span className="font-medium text-green-500 inline-block mr-2">Purpose:</span> 
            To engage patients and distract them from their pain so they may feel short-term relief and
            long-term improvement in their pain perception and/or condition.
          </p>
          <p className="text-gray-200 mb-4 leading-relaxed group">
            <span className="font-medium text-green-500 inline-block mr-2">Vision:</span> 
            A multi-disciplinary volunteer organization that provides patients with relief,
            companionship, and joy while enabling physicians-in-training to
            improve competency and comfort in interacting with patients in
            distress.
          </p>
          <p className="text-gray-200 leading-relaxed group">
            <span className="font-medium text-green-500 inline-block mr-2">Values:</span> 
            As student doctors, we do not aim to cure, treat, or manage these patients. Patients should
            choose to participate with full knowledge of the benefits and risks.
            Students attend shifts as volunteers and learners with a warm presence,
            driven by the purpose of providing solace.
          </p>
        </CardContent>
      </Card>

      {/* Executive Board Card */}
      <Card 
        className={`bg-gray-900 border border-gray-700 shadow-lg transition-all duration-700 delay-400 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <CardHeader className="border-b border-gray-700">
          <h3 className="text-xl font-semibold text-blue-300 pb-2">
            Executive Board (2024-2025)
          </h3>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="hover:bg-gray-800 p-3 rounded-md transition-colors duration-300">
              <p className="font-medium text-blue-400 mb-1">Faculty Champions:</p>
              <p className="text-gray-200">
                Dr. C. Patrick Carroll & Dr. Christine G. Gourin
              </p>
            </div>
            <div className="hover:bg-gray-800 p-3 rounded-md transition-colors duration-300">
              <p className="font-medium text-blue-400 mb-1">President:</p>
              <p className="text-gray-200">Shreya Sriram</p>
            </div>
            <div className="hover:bg-gray-800 p-3 rounded-md transition-colors duration-300">
              <p className="font-medium text-blue-400 mb-1">Vice Presidents:</p>
              <p className="text-gray-200">
                Keon Niknejad & Lauren Russell
              </p>
            </div>
            <div className="hover:bg-gray-800 p-3 rounded-md transition-colors duration-300">
              <p className="font-medium text-blue-400 mb-1">Director:</p>
              <p className="text-gray-200">Will ElNemer</p>
            </div>
            <div className="hover:bg-gray-800 p-3 rounded-md transition-colors duration-300">
              <p className="font-medium text-blue-400 mb-1">
                Secretary and Research Head:
              </p>
              <p className="text-gray-200">Jack Christian</p>
            </div>
            <div className="hover:bg-gray-800 p-3 rounded-md transition-colors duration-300">
              <p className="font-medium text-blue-400 mb-1">Training Leaders:</p>
              <p className="text-gray-200">
                Allison Chen, Joon Soo Kim, Kenny Peng
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}