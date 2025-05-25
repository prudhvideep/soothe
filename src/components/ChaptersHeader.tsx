import { useState } from "react";
import useThemeStore from "@/store/themeStore";
import SootheLogo from "../assets/SootheLogo.png";
import { Menu, X } from "lucide-react";
import { To, useNavigate } from "react-router";
import useUserStore from "@/store/userStore";
import { ChapterState } from "@/types/types";

export default function ChaptersHeader() {
  const navigate = useNavigate();
  const { chapterTab, setChapterTab } = useUserStore();
  const { theme } = useThemeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (path: To, tab: ChapterState) => {
    navigate(path);
    setChapterTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="p-6 flex justify-between items-center relative">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <img
          src={SootheLogo}
          alt="Logo"
          className="pl-12 md:pl-8 h-40 md:w-140 md:h-80"
        />
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-row justify-around items-center space-x-4">
          <button
            onClick={() => navigateTo("/", "Home")}
            className={`flex items-center gap-2 ${
              theme === "dark" ? "hover:bg-neutral-900" : "hover:bg-neutral-200"
            } ${
              chapterTab === "Home" ? "border-b border-blue-600 shadow-lg" : ""
            } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H3a2 2 0 01-2-2V10z"
              />
            </svg>
            Home
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center space-x-4">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`${
            theme === "dark" ? "hover:bg-neutral-700" : "hover:bg-neutral-200"
          } p-2 rounded-md hover:cursor-pointer`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-50 md:hidden ${
            theme === "dark" ? "bg-black/50" : "bg-gray-600/50"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`absolute right-0 top-0 h-screen w-64 shadow-lg ${
              theme === "dark" ? "bg-neutral-800" : "bg-white"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-4">
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-md hover:cursor-pointer ${
                    theme === "dark"
                      ? "hover:bg-neutral-700"
                      : "hover:bg-neutral-200"
                  }`}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-4 mt-8">
                <button
                  onClick={() => navigateTo("/", "Home")}
                  className={`${
                    theme === "dark"
                      ? "hover:bg-neutral-700"
                      : "hover:bg-neutral-200"
                  } ${
                    chapterTab === "Home"
                      ? "border-l-4 border-blue-600 pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  Home
                </button>
                <button
                  onClick={() => navigateTo("/newvolunteers", "New Volunteers")}
                  className={`${
                    theme === "dark"
                      ? "hover:bg-neutral-700"
                      : "hover:bg-neutral-200"
                  } ${
                    chapterTab === "New Volunteers"
                      ? "border-l-4 border-blue-600 pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  New Volunteers
                </button>
                <button
                  onClick={() =>
                    navigateTo("/newdepartments", "New Departments")
                  }
                  className={`${
                    theme === "dark"
                      ? "hover:bg-neutral-700"
                      : "hover:bg-neutral-200"
                  } ${
                    chapterTab === "New Departments"
                      ? "border-l-4 border-blue-600 pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  New Departments
                </button>
                <button
                  onClick={() => navigateTo("/newchapters", "New Chapters")}
                  className={`${
                    theme === "dark"
                      ? "hover:bg-neutral-700"
                      : "hover:bg-neutral-200"
                  } ${
                    chapterTab === "New Departments"
                      ? "border-l-4 border-blue-600 pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  New Chapters
                </button>

                <div className="border-t my-4 border-gray-300 dark:border-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
