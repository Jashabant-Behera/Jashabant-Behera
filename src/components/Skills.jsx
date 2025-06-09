import { FaReact, FaNodeJs, FaGitAlt, FaServer } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiOpenai,
  SiMongodb,
} from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";
import { Code, BrainCircuit } from "lucide-react";
import skillsData from "@/data/skills";
import "../styles/Skills.css";

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
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-heading">MY SKILLS</h2>

        {/* Technical Skills */}
        <div className="tech-skills">
          <h3 className="skills-heading">Technical Skills</h3>
          <div className="skills-grid">
            {skills?.technical?.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-header">
                  {skillIcons[skill.name] || <Code className="text-gray-500" />}
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="progress-bar">
                  <div
                    className={`progress-fill ${
                      skill.level === "Advanced"
                        ? "progress-advanced"
                        : skill.level === "Intermediate"
                        ? "progress-intermediate"
                        : skill.level === "Learning"
                        ? "progress-learning"
                        : "progress-basic"
                    }`}
                  ></div>
                </div>
                <p className="skill-level">{skill.level}</p>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="professional-skills-heading">Professional Skills</h3>
          <div className="skills-container">
            {skills?.soft?.map((skill) => (
              <span key={skill.name} className="skill-tag">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
