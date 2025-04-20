import useThemeStore from "@/store/themeStore";
import Header from "@/components/Header";
import { useEffect, useRef } from "react";

const timelineData: [string, string, string][] = [
  [
    "June 2023 – Inception",
    "Landmark study finds direct relationship between the physical symptoms of illness and social isolation.",
    "https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461pexelsphoto6129685_33213942_crop.png",
  ],
  [
    "August 2023 – SOOTHE Founded",
    "Thirty second-year medical students at Johns Hopkins School of Medicine establish SOOTHE and form the first volunteer cohort.",
    "https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461image001_3321283_crop.png",
  ],
  [
    "November 2023 – First Patients Seen at JHH",
    "Student volunteers begin seeing patients at the Weinberg Head & Neck unit and Sickle Cell Disease infusion center at the Johns Hopkins Hospital.",
    "https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461untitled_34173227_crop.png",
  ],
  [
    "January 2024 -100 Patients Seen",
    "A total of 100 patients seen by SOOTHE volunteers. Second-year students welcome incoming first-year volunteers!",
    "https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_460646174b582bf25cc6550f86eedda38e65327_332205_crop.png",
  ],
  [
    "January 2024 – New Departments",
    "SOOTHE pilots expansion into other units in the Johns Hopkins Hospital: Nelson 5 (Medicine) and Meyer 6 (Psychiatry).",
    "https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461IMG_1293_3322839_crop.png",
  ],
  [
    "February 2024 - 150 Patients Seen",
    "A total of 150 patients seen by SOOTHE volunteers. Volunteers start regularly seeing patients in Nelson 5 and Meyers 6.",
    "https://soothe.jhmi.edu/wp-content/uploads/sites/10/web_upload_4606461thumbnail_image001_34173615_crop.png",
  ],
  [
    "March 2024 - SOOTHE Expansion",
    "SOOTHE pilots efforts to expand to other medical schools!\n First chapter: Harvard Medical School!",
    "https://soothe.jhmi.edu/wp-content/uploads/sites/10/Screenshot-2024-04-08-204348.png",
  ],
  [
    "October 2024 - SOOTHE Featured in Hopkins Medicine News Article",
    "Read the featured article from Katie Pierce!",
    " https://soothe.jhmi.edu/wp-content/uploads/sites/10/IMG_2632-1-scaled-e1731653112461.jpg",
  ],
  [
    "November 2024 - 300 Patients Seen",
    "A total of 300 patients seen by SOOTHE volunteers. Current students welcome incoming first-year volunteers!",
    "https://soothe.jhmi.edu/wp-content/uploads/sites/10/IMG_1815-scaled-e1731653142392.jpg",
  ],
  [
    "November 2025 - 500 Patients Seen",
    "A total of 500 patients seen by SOOTHE volunteers. Volunteers made stuffed animals at a December event!",
    "  https://soothe.jhmi.edu/wp-content/uploads/sites/10/thumbnail_image002-e1739166762562.jpg",
  ],
];

function TimelineItem({
  timeline,
  content,
  imageUrl,
  index,
}: {
  timeline: string;
  content: string;
  imageUrl: string;
  index: number;
}) {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  const isEven = index % 2 === 0;
  const itemRef = useRef<HTMLDivElement>(null);

  const [datePart, titlePart] = timeline
    .split(/–|-/)
    .map((part) => part?.trim() ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add(
              isEven ? "translate-x-0" : "-translate-x-0"
            );
            entry.target.classList.remove(
              isEven ? "translate-x-10" : "-translate-x-10"
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [isEven]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full mb-12 md:mb-8">

      {isEven ? (
        <>
          <div
            ref={itemRef}
            className={`w-full md:w-5/12 opacity-0 translate-x-10 transition-all duration-700 ease-out transform ${
              isDark ? "bg-gray-800" : "bg-white"
            } p-4 rounded-lg shadow-md mb-4 md:mb-0`}
          >
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mb-2 ${
                isDark
                  ? "bg-blue-900 text-blue-300"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {datePart}
            </span>
            <h3
              className={`text-lg font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              {titlePart}
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {content}
            </p>
            <img
              src={imageUrl}
              alt={`${timeline} visual`}
              className="w-full h-64 object-cover rounded-md"
            />
          </div>
          <div className="hidden md:flex w-1/12 justify-center">
            <div className="relative">
              <div
                className={`w-4 h-4 rounded-full ${
                  isDark ? "bg-blue-500" : "bg-blue-600"
                } z-10 relative`}
              ></div>
              <div
                className={`w-0.5 h-24 absolute top-0 left-1/2 -translate-x-1/2 ${
                  isDark ? "bg-gray-700" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>
          <div className="w-full md:w-5/12"></div>
        </>
      ) : (
        <>
          <div className="w-full md:w-5/12"></div>
          <div className="hidden md:flex w-1/12 justify-center">
            <div className="relative">
              <div
                className={`w-4 h-4 rounded-full ${
                  isDark ? "bg-blue-500" : "bg-blue-600"
                } z-10 relative`}
              ></div>
              <div
                className={`w-0.5 h-24 absolute top-0 left-1/2 -translate-x-1/2 ${
                  isDark ? "bg-gray-700" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>
          <div
            ref={itemRef}
            className={`w-full md:w-5/12 opacity-0 -translate-x-10 transition-all duration-700 ease-out transform ${
              isDark ? "bg-gray-800" : "bg-white"
            } p-4 rounded-lg shadow-md`}
          >
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mb-2 ${
                isDark
                  ? "bg-blue-900 text-blue-300"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {datePart}
            </span>
            <h3
              className={`text-lg font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              {titlePart}
            </h3>
            <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {content}
            </p>
            <img
              src={imageUrl}
              alt={`${timeline} visual`}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default function About() {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const centerLine = document.createElement("div");
    centerLine.className = `hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full ${
      isDark ? "bg-gray-700" : "bg-gray-300"
    }`;

    if (timelineRef.current) {
      timelineRef.current.style.position = "relative";
      timelineRef.current.appendChild(centerLine);
    }

    return () => {
      if (timelineRef.current && timelineRef.current.contains(centerLine)) {
        timelineRef.current.removeChild(centerLine);
      }
    };
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1
          className={`text-4xl font-bold text-center mb-16 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Our Journey
        </h1>
        <div ref={timelineRef} className="max-w-6xl mx-auto">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              timeline={item[0]}
              content={item[1]}
              imageUrl={item[2]}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
