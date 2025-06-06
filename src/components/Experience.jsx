import experience from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-5xl">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 text-gray-900 relative inline-block">
            <span className="relative z-10">Work Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey through innovative companies and challenging roles
          </p>
        </div>

        <div className="space-y-10">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/80"
            >
              <div className="md:flex">

                <div className="md:w-1/3 bg-gray-100 overflow-hidden">
                  <img
                    src="/exp/SWM.jpg"
                    alt="swm"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                <div className="md:w-2/3 p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl font-semibold text-purple-600 flex items-center mt-1">
                        <span className="w-4 h-4 mr-2"></span>
                        {exp.company}
                      </h4>
                    </div>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium shadow-sm">
                      {exp.period}
                    </span>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <ul className="space-y-4">
                      {exp.achievements.map((item, i) => (
                        <li
                          key={i}
                          className="relative pl-8 before:absolute before:left-2 before:top-3 before:w-3 before:h-3 before:bg-purple-500 before:rounded-full"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.technologies && (
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h5 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        Technologies Used
                      </h5>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-800 text-sm font-medium hover:bg-pink-200 hover:text-pink-900 transition-all shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-24 bg-gradient-to-r from-pink-50 to-yellow-50 rounded-2xl p-10 shadow-inner border border-pink-100/50">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-3 text-gray-900">Professional Growth</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-700">
                  Though my early career was in a non-IT field, this experience gave me
                  <span className="font-medium text-purple-600"> valuable leadership skills</span> -
                  managing teams, coordinating projects, and solving problems under pressure.
                </p>
              </div>
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-700">
                  I never stopped learning tech independently, completing certifications in
                  <span className="font-medium text-purple-600"> full-stack development</span> and
                  building projects with React, Node.js, and MongoDB.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-700">
                  My internship at <span className="font-medium text-purple-600">TULIP</span> proved
                  my ability to transition into tech, where I contributed to real-time applications
                  and AI-driven solutions.
                </p>
              </div>
              <div className="p-5 bg-yellow-50 rounded-lg border border-yellow-100">
                <p className="text-yellow-800 font-medium">
                  What some might see as a career gap was actually my
                  <span className="font-semibold"> self-driven tech immersion</span> - building,
                  breaking, and rebuilding with purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
