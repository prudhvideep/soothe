import ChaptersHeader from "@/components/ChaptersHeader";
import ContactPage from "@/components/Forms/ContactsForm";
import useThemeStore from "@/store/themeStore";

export default function NewVolunteers() {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <ChaptersHeader />
      <section className="w-full py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between px-4 gap-8">
          {/* Text Block */}
          <div className="md:w-1/2 space-y-6">
            <h2
              className={`${
                theme === "dark" ? "text-blue-300" : "text-blue-700"
              } text-2xl md:text-4xl font-bold`}
            >
              New Volunteers
            </h2>
            <p
              className={`${
                theme === "dark" ? "text-neutral-300" : "text-gray-700"
              } text-sm md:text-lg leading-relaxed`}
            >
              If you are an incoming or current Hopkins medical student
              interested in volunteer, please email us{" "}
              <span className="italic text-blue-700">SOOTHEOrg@jh.edu</span> or
              attend our open training sessions. If you are a non-medical
              student, please reach out – we are currently considering
              possibilities for expanding SOOTHE outside of the medical school.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="http://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_460646174b582bf25cc6550f86eedda38e65327_332205_crop.png"
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
