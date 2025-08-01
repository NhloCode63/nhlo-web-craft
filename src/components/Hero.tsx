
import { useState, useEffect } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Web Developer', 'UI/UX Designer', 'Full Stack Engineer', 'Creative Coder'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, words]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8">
          {/* Elegant Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              {/* Code brackets with gradient */}
              <div className="text-6xl md:text-8xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 flex items-center">
                <span className="text-purple-400">&lt;</span>
                <span className="mx-2 font-sans tracking-tight">NHLO</span>
                <span className="text-blue-400">.</span>
                <span className="text-indigo-400">CODE</span>
                <span className="text-purple-400">/&gt;</span>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 text-6xl md:text-8xl font-mono font-bold text-purple-400/20 blur-sm flex items-center">
                <span>&lt;</span>
                <span className="mx-2 font-sans tracking-tight">NHLO</span>
                <span>.</span>
                <span>CODE</span>
                <span>/&gt;</span>
              </div>
            </div>
          </div>
          
          <div className="text-2xl md:text-4xl text-gray-300 mb-6 h-12">
            <span className="font-light">I'm a </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">
              {displayText}
            </span>
            <span className="animate-blink">|</span>
          </div>
        </div>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences through innovative web development, 
          stunning design, and cutting-edge programming solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            View My Work
          </button>
          <button 
            onClick={scrollToContact}
            className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center gap-12 text-gray-400">
          <div className="flex flex-col items-center group cursor-pointer">
            <Code className="w-8 h-8 mb-2 group-hover:text-purple-400 transition-colors duration-300" />
            <span className="text-sm group-hover:text-white transition-colors duration-300">Clean Code</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <Palette className="w-8 h-8 mb-2 group-hover:text-blue-400 transition-colors duration-300" />
            <span className="text-sm group-hover:text-white transition-colors duration-300">Creative Design</span>
          </div>
          <div className="flex flex-col items-center group cursor-pointer">
            <Zap className="w-8 h-8 mb-2 group-hover:text-indigo-400 transition-colors duration-300" />
            <span className="text-sm group-hover:text-white transition-colors duration-300">Fast Performance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
