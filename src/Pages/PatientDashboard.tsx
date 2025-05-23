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
      <section className="w-full py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-4 gap-8">
          {/* Text Block */}
          <div className="md:w-1/2 space-y-6">
            <h2
              className={`${
                theme === "dark" ? "text-blue-300" : "text-blue-700"
              } text-2xl md:text-4xl font-bold`}
            >
              Consult SOOTHE today!
            </h2>
            <p
              className={`${
                theme === "dark" ? "text-neutral-300" : "text-gray-700"
              } text-sm md:text-lg leading-relaxed`}
            >
              Does your unit have an acute need for SOOTHE? No problem! Email us
              at <span className="italic text-blue-700">SOOTHEOrg@jh.edu</span>{" "}
              to set up a visit today. Our volunteers are more than willing to
              come to any part of Johns Hopkins Hospital to visit a patient. We
              have filled 100% of all consults within 48 business hours.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://soothe.jhmi.edu/wp-content/uploads/sites/10/11126SootheProgram_workscreen-ad-copy.png"
              alt="Soothe Consult"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <footer className="w-full">
        <ContactPage />
        {/* Social Media Icons */}
        
      </footer>
    </div>
  );
}
