import useThemeStore from "@/store/themeStore";
import Header from "@/components/Header";

// Sample articles
const articles = [
  {
    title: "Keeping It Casual",
    excerpt:
      "On a recent visit to the Head and Neck Cancer In-Patient Unit at The Johns Hopkins Hospital, Vikas Vattipally ’26 chatted with a patient about a range of topics: horseback riding, real estate, tuxedo cats, religion.",
    url: "https://www.hopkinsmedicine.org/news/articles/2024/10/keeping-it-casual",
    image:
      "https://www.hopkinsmedicine.org/-/media/images/articles/2024/09/keepingitcasualherohorizontal11x85.jpg?h=765&iar=0&w=991&hash=F293A98E0869699FCB54A910DED5D146",
  },
  {
    title: "Johns Hopkins medical students provide comfort through company",
    excerpt:
      "Students Offering Optimism to Help, or SOOTHE, gives companionship to patients while teaching future doctors about the human side of medicine",
    url: "https://hub.jhu.edu/2025/02/04/comfort-through-company/",
    image:
      "https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_1600/public/2025-01/SOOTHE_IMG_1256%5B74%5D.jpg",
  },
  {
    title:
      "SOOTHE: How a Medical Student-Led Initiative is Benefitting Both Patients and Students",
    excerpt:
      "A student-run organization, SOOTHE provides comfort and companionship to patients through bedside visits where medical students have conversations with patients on topics unrelated to their health or treatments in the hospital.",
    url: "https://mcusercontent.com/0b7273d3409cbe1f6e1762bbf/files/7c294859-7049-9cc6-0df9-719d86994531/SOOTHE_Final.pdf",
    image:
      "https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_1030/public/2025-01/SOOTHE_IMG_4259%5B11%5D%5B62%5D.jpg",
  },
];

export default function Media() {
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Soothe in the Media
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg transition transform hover:scale-[1.02] ${
                isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
              }`}
            >
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-sm mb-4">{article.excerpt}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:underline dark:text-blue-400"
                >
                  Read full article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
