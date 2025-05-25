import { useState } from "react";
import useThemeStore from "@/store/themeStore";
import SootheLogo from "../assets/SootheLogo.png";
import { LogOut, Menu, X, ChevronDown } from "lucide-react";
import { To, useNavigate } from "react-router";
import useUserStore from "@/store/userStore";
import { PatientTabState } from "@/types/types";

export default function Header() {
  const navigate = useNavigate();
  const { patientTab, setPatientTab, setChapterTab } = useUserStore();
  const { theme } = useThemeStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const navigateTo = (path: To, tab: PatientTabState) => {
    navigate(path);
    setPatientTab(tab);
    setMobileMenuOpen(false);
  };

  const handleDropdownItemClick = (path: To, chapterTab: string) => {
    setChapterTab(chapterTab);
    navigate(path);
    setPatientTab("Get Involved" as PatientTabState);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  return (
    <header className="p-6 flex justify-between items-center relative">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <img
          src={SootheLogo}
          alt="Logo"
          className="pl-12 md:pl-8 md:ml-8 h-40 md:w-140 md:h-80"
        />
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-around items-center space-x-4">
          <button
            onClick={() => navigateTo("/", "Home")}
            className={`${
              theme === "dark"
                ? "hover:bg-neutral-900"
                : " hover:bg-neutral-200"
            } ${
              patientTab === "Home" ? "border-b border- shadow-lg" : ""
            } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("/about", "About")}
            className={`${
              theme === "dark"
                ? "hover:bg-neutral-900"
                : " hover:bg-neutral-200"
            } ${
              patientTab === "About"
                ? "border-b border-[#3b518a] shadow-lg"
                : ""
            } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
          >
            About
          </button>
          <button
            onClick={() => navigateTo("/media", "Media")}
            className={`${
              theme === "dark"
                ? "hover:bg-neutral-900"
                : " hover:bg-neutral-200"
            } ${
              patientTab === "Media"
                ? "border-b border-[#3b518a]  shadow-lg"
                : ""
            } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
          >
            Media
          </button>
          <button
            onClick={() => navigateTo("/team", "Team")}
            className={`${
              theme === "dark" ? "hover:bg-neutral-900" : "hover:bg-neutral-200"
            } ${
              patientTab === "Team"
                ? "border-b border-[#3b518a] shadow-lg "
                : ""
            } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer`}
          >
            Team
          </button>

          {/* Get Involved Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button
              className={`${
                theme === "dark"
                  ? "hover:bg-neutral-900"
                  : "hover:bg-neutral-200"
              } ${
                patientTab === "Get Involved"
                  ? "border-b border-[#3b518a] shadow-lg "
                  : ""
              } p-2 pl-4 pr-4 rounded-md font-semibold hover:cursor-pointer text-[#3b518a] hover:animate-pulse flex items-center gap-1`}
            >
              Get Involved
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                className={`absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg z-50 ${
                  theme === "dark"
                    ? "bg-neutral-800 border border-neutral-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="py-1">
                  <button
                    onClick={() =>
                      handleDropdownItemClick(
                        "/newvolunteers",
                        "New Volunteers"
                      )
                    }
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      theme === "dark"
                        ? "hover:bg-neutral-700 text-white"
                        : "hover:bg-gray-100 text-gray-900"
                    }`}
                  >
                    New Volunteers
                  </button>
                  <button
                    onClick={() =>
                      handleDropdownItemClick(
                        "/newdepartments",
                        "New Departments"
                      )
                    }
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      theme === "dark"
                        ? "hover:bg-neutral-700 text-white"
                        : "hover:bg-gray-100 text-gray-900"
                    }`}
                  >
                    New Departments
                  </button>
                  <button
                    onClick={() =>
                      handleDropdownItemClick("/newchapters", "New Chapters")
                    }
                    className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      theme === "dark"
                        ? "hover:bg-neutral-700 text-white"
                        : "hover:bg-gray-100 text-gray-900"
                    }`}
                  >
                    New Chapters
                  </button>
                </div>
              </div>
            )}
          </div>
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
                    patientTab === "Home"
                      ? "border-l-4 border-[#3b518a] pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  Home
                </button>
                <button
                  onClick={() => navigateTo("/about", "About")}
                  className={`${
                    theme === "dark"
                      ? "hover:bg-neutral-700"
                      : "hover:bg-neutral-200"
                  } ${
                    patientTab === "About"
                      ? "border-l-4 border-[#3b518a] pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  About
                </button>
                <button
                  onClick={() => navigateTo("/team", "Team")}
                  className={`${
                    theme === "dark"
                      ? "hover:bg-neutral-700"
                      : "hover:bg-neutral-200"
                  } ${
                    patientTab === "Team"
                      ? "border-l-4 border-[#3b518a] pl-3"
                      : "pl-4"
                  } p-2 rounded-md font-semibold hover:cursor-pointer text-left`}
                >
                  Team
                </button>

                {/* Mobile Get Involved Section */}
                <div className="space-y-2">
                  <div className={`p-2 pl-4 font-semibold text-[#3b518a]`}>
                    Get Involved
                  </div>
                  <button
                    onClick={() =>
                      handleDropdownItemClick(
                        "/newvolunteers",
                        "New Volunteers"
                      )
                    }
                    className={`${
                      theme === "dark"
                        ? "hover:bg-neutral-700"
                        : "hover:bg-neutral-200"
                    } pl-8 p-2 rounded-md font-medium hover:cursor-pointer text-left text-sm`}
                  >
                    New Volunteers
                  </button>
                  <button
                    onClick={() =>
                      handleDropdownItemClick(
                        "/newdepartments",
                        "New Departments"
                      )
                    }
                    className={`${
                      theme === "dark"
                        ? "hover:bg-neutral-700"
                        : "hover:bg-neutral-200"
                    } pl-8 p-2 rounded-md font-medium hover:cursor-pointer text-left text-sm`}
                  >
                    New Departments
                  </button>
                  <button
                    onClick={() =>
                      handleDropdownItemClick("/newchapters", "New Chapters")
                    }
                    className={`${
                      theme === "dark"
                        ? "hover:bg-neutral-700"
                        : "hover:bg-neutral-200"
                    } pl-8 p-2 rounded-md font-medium hover:cursor-pointer text-left text-sm`}
                  >
                    New Chapters
                  </button>
                </div>

                <div className="border-t my-4 border-gray-300 dark:border-gray-700"></div>

                <button
                  className={`${
                    theme === "dark"
                      ? "hover:bg-neutral-700"
                      : "hover:bg-neutral-200"
                  } p-2 pl-4 rounded-md font-semibold hover:cursor-pointer text-left flex items-center`}
                >
                  <LogOut size={18} className="mr-2" /> Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
