import useThemeStore from "@/store/themeStore";
import Header from "@/components/Header";
import ContactPage from "@/components/Forms/ContactsForm";

export default function PatientDashboard() {
  const { theme } = useThemeStore();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen overflow-auto`}
    >
      <Header />
      
      {/* Main Content */}
      <main className="w-full">
        {/* About SOOTHE Section */}
        <section className="w-full py-16 lg:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:items-start gap-12 lg:gap-16">
              {/* Text Block */}
              <div className="lg:w-1/2 space-y-6">
                <h2
                  className={`${
                    theme === "dark" ? "text-blue-300" : "text-[#3b518a]"
                  } text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight`}
                >
                  About SOOTHE
                </h2>
                <p
                  className={`${
                    theme === "dark" ? "text-neutral-300" : "text-gray-700"
                  } text-base sm:text-lg lg:text-xl leading-relaxed`}
                >
                  SOOTHE (Students Offering Optimism To Help) is a program where
                  Johns Hopkins Medical Students provide comfort, distraction, and
                  support for patients in physical or emotional distress through
                  engaging conversation or guided activities. SOOTHE serves to
                  foster connection between empathetic and enthusiastic students
                  with patients to alleviate their suffering. Feel free to learn
                  more by navigating to our "About" page, or by reading the new
                  article posted below about our work!
                </p>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <img
                    src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/orange-dome-gun-violence.jpg"
                    alt="SOOTHE program in action"
                    className="w-full max-w-lg rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Optional overlay for better accessibility */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consult SOOTHE Section */}
        <section className={`w-full py-16 lg:py-20 ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
              {/* Text Block */}
              <div className="lg:w-1/2 space-y-6">
                <h2
                  className={`${
                    theme === "dark" ? "text-blue-300" : "text-[#3b518a]"
                  } text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight`}
                >
                  Consult SOOTHE Today!
                </h2>
                <div className="space-y-4">
                  <p
                    className={`${
                      theme === "dark" ? "text-neutral-300" : "text-gray-700"
                    } text-base sm:text-lg lg:text-xl leading-relaxed`}
                  >
                    Does your unit have an acute need for SOOTHE? No problem! Email us
                    to set up a visit today. Our volunteers are more than willing to
                    come to any part of Johns Hopkins Hospital to visit a patient.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <span
                      className={`${
                        theme === "dark" ? "text-neutral-300" : "text-gray-700"
                      } text-base sm:text-lg lg:text-xl`}
                    >
                      Contact us at:
                    </span>
                    <a
                      href="mailto:SOOTHEOrg@jh.edu"
                      className={`${
                        theme === "dark" 
                          ? "text-blue-400 hover:text-blue-300" 
                          : "text-[#3b518a] hover:text-blue-700"
                      } text-lg sm:text-xl font-semibold hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1`}
                    >
                      SOOTHEOrg@jh.edu
                    </a>
                  </div>
                  {/* <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    theme === "dark" 
                      ? "bg-green-900 text-green-300" 
                      : "bg-green-100 text-green-800"
                  }`}>
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    100% of consults filled within 48 business hours
                  </div> */}
                </div>
              </div>

              {/* Image */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative">
                  <img
                    src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/11126SootheProgram_workscreen-ad-copy.png"
                    alt="SOOTHE consult interface"
                    className="w-full max-w-lg rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Optional overlay for better accessibility */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <ContactPage />
      </footer>
    </div>
  );
}