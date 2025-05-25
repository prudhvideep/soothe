import { useState } from "react";
import Header from "@/components/Header";
import { motion, AnimatePresence } from "framer-motion";
import useThemeStore from "@/store/themeStore";
import Mayan from "../../src/assets/Mayan.jpg";
import Ernesto from "../../src/assets/ernesto.jpeg";
import Josh from "../../src/assets/Josh.jpg";
import David from "../../src/assets/David.png";
import Jessica from "../../src/assets/Jessica.jpeg";
import Julia from "../../src/assets/Julia.png";
import Joon from "../../src/assets/Joon.jpeg";
import Olivia from "../../src/assets/Olivia.png";
import Jiwon from "../../src/assets/Jiwon.jpeg";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "shreya",
    name: "Shreya Sriram",
    role: "President & Founder",
    image:
      "https://soothe.jhmi.edu/wp-content/uploads/sites/10/thumbnail_Headshot_ShreyaSriram.jpg",
    bio: " [TODO: Add actual bio content here]",
  },
  {
    id: "mayan",
    name: "Mayan Teles",
    role: "Operations Lead",
    image: Mayan,
    bio: "Mayan is a first-year medical student at Johns Hopkins School of Medicine who is passionate about patient-centered care. Originally from Baltimore, MD, she is a graduate of the University of Maryland. In her free time, she enjoys rock climbing, traveling, and baking.",
  },
  {
    id: "ernesto",
    name: "Ernesto Marin",
    role: "Volunteer Coordinator",
    image: Ernesto,
    bio: "Ernesto is a first-year medical student at Johns Hopkins University School of Medicine, born and raised in Miami, Florida. He is passionate about improving patients’ experiences through meaningful connection and compassionate care. In his free time, he enjoys playing basketball, taking long outdoor walks, and reading!",
  },
  {
    id: "josh",
    name: "Joshua Rich",
    role: "Technology Lead",
    image: Josh,
    bio: "Josh Rich is a first-year medical student from Bethesda, MD. He is excited to support the growth and development of SOOTHE to help more medical students make a difference for patients. In his free time, he enjoys staying active, learning languages, and brewing tea and coffee.",
  },
  {
    id: "david",
    name: "David Lee",
    role: "Outreach Specialist",
    image: David,
    bio: "David Lee is a first-year medical student from Ann Arbor, Michigan and earned his undergraduate degree at Stanford University. His interests include reading and writing.",
  },
  {
    id: "jessica",
    name: "Jessica Jung",
    role: "Education Coordinator",
    image: Jessica,
    bio: "Jessica is a first-year medical student at the Johns Hopkins School of Medicine. She is originally from Mechanicsburg, Pennsylvania and graduated from Hopkins in 2023. Her interests outside of medicine include running, reading, and figure skating!",
  },
  {
    id: "joon",
    name: "Joon Soo Kim",
    role: "Research Lead",
    image: Joon,
    bio: "My name is Joon Soo and I'm a second/third (depending on when this is published) year medical student at Johns Hopkins. I was born in Seoul but spent most of my childhood in Iowa City, IA. I graduated from UCLA in 2021. Some of my fondest memories from SOOTHE are from volunteering with patients who have speaking difficulties, but who still want to be heard. My current interests include olfaction and balance disorders, teaching ice skating, and laying down.",
  },
  {
    id: "julia",
    name: "Julia Myers",
    role: "Event Manager",
    image: Julia,
    bio: "Julia Myers is a first-year medical student at Johns Hopkins School of Medicine. She is from Pittsburgh, PA and graduated from Ohio State in 2023. Her interests include oncology, physical medicine and rehabilitation, reading, and having coffee.",
  },
  {
    id: "olivia",
    name: "Olivia",
    role: "Fundraising Chair",
    image: Olivia,
    bio: "Olivia is a first -year medical student at the Johns Hopkins SOM and a co-Vice President of SOOTHE. She is hoping to pursue psychiatry, and loves comforting patients in difficult circumstances. As a native New-Yorker and CUNY Hunter college grad, she loves meeting different types of people and being a part of their walk through their health care. Her interests outside of medicine include being active at her Coptic Orthodox Church, going on spontaneous adventures with friends and family, and laying on the couch when time permits.",
  },
  {
    id: "jiwon",
    name: "Jiwon Moon",
    role: "Marketing Lead",
    image: Jiwon,
    bio: "Jiwon is a first-year medical student at the Johns Hopkins School of Medicine. She is originally from Blue Bell, PA, and graduated from Cornell University. In her free time, she enjoys baking, playing the violin, and running.",
  },
];

export default function Team() {
  const { theme } = useThemeStore();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      boxShadow:
        theme === "dark"
          ? "0 20px 25px -5px rgba(255, 255, 255, 0.1)"
          : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen`}
    >
      <Header />
      <section className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover="hover"
              className={`${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } rounded-xl shadow-lg overflow-hidden transition-colors`}
            >
              <div className="p-6">
                <motion.div className="w-full aspect-square mb-4 overflow-hidden rounded-2xl">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                </motion.div>
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  } mb-1`}
                >
                  {member.name}
                </h3>
                {/* <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-4`}>
                  {member.role}
                </p> */}
                <button
                  onClick={() => setSelectedMember(member)}
                  className={`${
                    theme === "dark"
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-700"
                  } font-medium text-sm hover:cursor-pointer`}
                >
                  View Bio →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className={`${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                    <div className="md:col-span-1">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h2
                        className={`text-2xl font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        } mb-2`}
                      >
                        {selectedMember.name}
                      </h2>
                      {/* <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-4`}>
                        {selectedMember.role}
                      </p> */}
                      <p
                        className={`${
                          theme === "dark" ? "text-gray-200" : "text-gray-700"
                        } leading-relaxed`}
                      >
                        {selectedMember.bio}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`p-4 border-t ${
                    theme === "dark" ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setSelectedMember(null)}
                    className={`w-full py-2 px-4 rounded-lg font-medium ${
                      theme === "dark"
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-800 hover:cursor-pointer"
                    }`}
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
