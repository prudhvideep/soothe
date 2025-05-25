import useThemeStore from "@/store/themeStore";

export default function ContactPage() {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <div className="p-10 container mx-auto py-12 max-w-[90%] md:max-w-[84%]">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">SOOTHE</h2>
            <p className="mb-2">Johns Hopkins School of Medicine</p>
            <p className="mb-2">733 North Broadway</p>
            <p className="mb-2">Baltimore, MD 21205</p>
            <p className="mt-4">
              Email:{" "}
              <a
                href="mailto:sootheorg@jh.edu"
                className="text-blue-600 dark:text-[#3b518a] underline"
              >
                sootheorg@jh.edu
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="p-2 rounded-md border bg-transparent"
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="p-2 rounded-md border bg-transparent"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full p-2 rounded-md border bg-transparent"
              required
            />
            <input
              type="text"
              placeholder="Subject*"
              maxLength={100}
              className="w-full p-2 rounded-md border bg-transparent"
              required
            />
            <textarea
              placeholder="Message*"
              maxLength={750}
              rows={5}
              className="w-full p-2 rounded-md border bg-transparent"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-[#3b518a] text-white hover:bg-[#889fdb] hover:cursor-pointer transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
