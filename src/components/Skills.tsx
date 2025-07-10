
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'from-yellow-400 to-orange-500' },
    { name: 'React/Next.js', level: 92, color: 'from-blue-400 to-cyan-500' },
    { name: 'Python', level: 88, color: 'from-green-400 to-blue-500' },
    { name: 'Node.js', level: 85, color: 'from-green-500 to-green-600' },
    { name: 'Database Design', level: 90, color: 'from-purple-400 to-pink-500' },
    { name: 'UI/UX Design', level: 87, color: 'from-pink-400 to-red-500' },
    { name: 'DevOps/Cloud', level: 82, color: 'from-indigo-400 to-purple-500' },
    { name: 'Mobile Development', level: 78, color: 'from-teal-400 to-blue-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proficiency across the full development stack with years of hands-on experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-purple-400 font-medium">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="h-full w-full bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-gray-400 group-hover:text-white transition-colors duration-300">Projects Completed</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              5+
            </div>
            <div className="text-gray-400 group-hover:text-white transition-colors duration-300">Years Experience</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              30+
            </div>
            <div className="text-gray-400 group-hover:text-white transition-colors duration-300">Happy Clients</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-gray-400 group-hover:text-white transition-colors duration-300">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
