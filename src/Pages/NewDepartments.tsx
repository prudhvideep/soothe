import ChaptersHeader from "@/components/ChaptersHeader";
import ContactPage from "@/components/Forms/ContactsForm";
import useThemeStore from "@/store/themeStore";

export default function NewDepartments() {
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
                theme === "dark" ? "text-blue-300" : "text-[#3b518a]"
              } text-2xl md:text-4xl font-bold`}
            >
              New Departments
            </h2>
            <p
              className={`${
                theme === "dark" ? "text-neutral-300" : "text-gray-700"
              } text-sm md:text-lg leading-relaxed`}
            >
              We’re always excited to talk to more patients! If your
              department/floor is interested in working with SOOTHE volunteers,
              please reach us via email 
              {" "}<span className="italic font-medium text-[#3b518a] hover:cursor-pointer hover:underline">SOOTHEOrg@jh.edu</span> to
              coordinate!
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="http://soothe.jhmi.edu/wp-content/uploads/sites/10/jhh-int_0105.jpg"
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
