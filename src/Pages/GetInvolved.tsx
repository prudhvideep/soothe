import ChaptersHeader from "@/components/ChaptersHeader";
import useThemeStore from "@/store/themeStore";

export default function GetInvolved() {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <ChaptersHeader />
    </div>
  );
}