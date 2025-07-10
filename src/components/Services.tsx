
import { Code2, Smartphone, Database, Palette, Globe, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Modern, responsive websites built with React, TypeScript, and cutting-edge frameworks.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions with APIs, databases, and cloud integration.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance and beautiful UI.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Full-stack web applications with modern architecture and scalable solutions.',
      technologies: ['MERN Stack', 'GraphQL', 'Docker', 'AWS']
    },
    {
      icon: Cpu,
      title: 'System Integration',
      description: 'Complex system integrations, APIs, and enterprise-level solutions.',
      technologies: ['Microservices', 'REST APIs', 'DevOps', 'CI/CD']
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive development and design services to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-purple-400 group-hover:text-blue-400 transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
