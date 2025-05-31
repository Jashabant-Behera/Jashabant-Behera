import experience from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
        
        {experience.map((exp) => (
          <div key={exp.company} className="mb-10">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-gray-500">{exp.period}</span>
            </div>
            <h4 className="text-lg text-indigo-600 mb-4">{exp.company}</h4>
            <ul className="list-disc pl-5 space-y-2">
              {exp.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}