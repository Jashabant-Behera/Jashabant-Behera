import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
  SiMongodb,
} from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";
import { Code, BrainCircuit } from "lucide-react";
import skillsData from "@/data/skills";

const skills = skillsData.skills;

const skillIcons = {
  JavaScript: <DiJavascript className="text-yellow-400" size={18} />,
  HTML5: <DiHtml5 className="text-orange-500" size={18} />,
  CSS3: <DiCss3 className="text-blue-500" size={18} />,
  "React.js": <FaReact className="text-blue-500" size={18} />,
  "Next.js": <SiNextdotjs className="text-gray-500" size={18} />,
  "Node.js": <FaNodeJs className="text-green-500" size={18} />,
  MongoDB: <SiMongodb className="text-green-600" size={18} />,
  "Express.js": <FaServer className="text-gray-700" size={18} />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" size={18} />,
  "OpenAI API": <SiOpenai className="text-purple-500" size={18} />,
  "Gemini API": <BrainCircuit className="text-blue-400" size={18} />,
  "Git & GitHub": <FaGitAlt className="text-orange-600" size={18} />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Skills
        </h2>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills?.technical?.length > 0 ? (
              skills.technical.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-center mb-2">
                    {skillIcons[skill.name] || (
                      <Code className="text-gray-500" />
                    )}
                    <span className="ml-2 font-medium">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        skill.level === "Advanced"
                          ? "bg-green-500 w-4/5"
                          : skill.level === "Intermediate"
                          ? "bg-blue-400 w-3/5"
                          : skill.level === "Learning"
                          ? "bg-yellow-400 w-2/5"
                          : "bg-gray-300 w-1/5"
                      }`}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {skill.level}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    {skill.description}
                  </p>
                </div>
              ))
            ) : (
              <p>No technical skills available.</p>
            )}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
            Professional Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills?.soft?.length > 0 ? (
              skills.soft.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium hover:bg-indigo-50 hover:border-indigo-100 transition-colors"
                >
                  {skill.name}
                </span>
              ))
            ) : (
              <p>No soft skills available.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}