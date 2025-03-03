import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Calendar,
  Home,
  Info,
  LogOut,
  Users,
  Video,
  Menu,
} from "lucide-react";
import useUserStore from "@/store/userStore";
import { cn } from "@/lib/utils"; // Utility for conditional class names
import { FC } from "react";

// Define TypeScript interfaces for props
interface SidebarContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: { name: string; role: string; isAvailable: boolean };
  toggleAvailability: () => void;
}

// Navigation item type
interface NavItem {
  label: string;
  icon: React.ElementType;
  tab: string;
}

const Sidebar: FC = () => {
  const { activeTab, currentUser, setActiveTab, setCurrentUser } =
    useUserStore();

  const toggleAvailability = () => {
    setCurrentUser({ ...currentUser, isAvailable: !currentUser.isAvailable });
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger className="md:hidden p-2 fixed top-4 left-4 z-50 bg-gray-800 rounded-md">
          <Menu className="w-6 h-6 text-gray-200" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-gray-900 text-gray-200 w-64 border-r border-gray-700">
          <SidebarContent
            activeTab={activeTab || ""}
            setActiveTab={setActiveTab}
            currentUser={currentUser}
            toggleAvailability={toggleAvailability}
          />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-gray-900 text-gray-200 p-4 border-r border-gray-700">
        <SidebarContent
          activeTab={activeTab || ""}
          setActiveTab={setActiveTab}
          currentUser={currentUser}
          toggleAvailability={toggleAvailability}
        />
      </aside>
    </>
  );
};

const SidebarContent: FC<SidebarContentProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  toggleAvailability,
}) => {
  const navItems: NavItem[] = [
    { label: "About SOOTHE", icon: Info, tab: "about" },
    { label: "Dashboard", icon: Home, tab: "dashboard" },
    { label: "Connect Now", icon: Video, tab: "connect" },
    { label: "Schedule Shift", icon: Calendar, tab: "schedule" },
    { label: "Training", icon: BookOpen, tab: "training" },
    { label: "Team", icon: Users, tab: "team" },
  ];

  return (
    <>
      {/* Logo Section */}
      <div className="mt-6 mb-6">
        <h1 className="pl-2 text-2xl font-bold text-blue-400">SOOTHE</h1>
        <p className="pl-2 text-xs text-gray-400">
          Students Offering Optimism To Help
        </p>
      </div>

      {/* User Profile Section */}
      <div className="pl-2 flex items-center space-x-3 p-2">
        <Avatar className="bg-gray-700 text-gray-200">
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium text-gray-200">{currentUser.name}</p>
          <p className="text-xs text-gray-400">{currentUser.role}</p>
        </div>
      </div>

      {/* Availability Toggle */}
      <button
        onClick={toggleAvailability}
        className={cn(
          "pl-4 mt-3 text-xs py-1 ml-2 px-2 rounded w-9/12 transition",
          currentUser.isAvailable
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-700 hover:bg-gray-600 text-gray-200"
        )}
      >
        {currentUser.isAvailable ? "Available" : "Unavailable"}
      </button>

      <Separator className="my-4 bg-gray-700" />

      {/* Navigation Items */}
      <nav className="space-y-2">
        {navItems.map(({ label, icon: Icon, tab }) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex items-center w-full text-left py-2 px-3 rounded-md transition",
              activeTab === tab
                ? "bg-gray-800 text-white border-l-2 border-blue-500"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            )}
          >
            <Icon className={cn(
              "w-5 h-5 mr-2",
              activeTab === tab ? "text-blue-400" : "text-gray-400"
            )} />
            {label}
          </button>
        ))}
      </nav>

      <Separator className="my-4 bg-gray-700" />

      {/* Logout Button */}
      <button className="flex items-center text-gray-300 hover:bg-gray-800 hover:text-red-400 w-full px-3 py-2 rounded-md transition">
        <LogOut className="w-5 h-5 mr-2" />
        Logout
      </button>
    </>
  );
};

export default Sidebar;