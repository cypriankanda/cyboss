import { useState, useEffect } from 'react';
import { Users, PenTool, Code2, TestTube, Rocket, Shield, ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';


const processSteps = [
  {
    icon: <Users className="w-16 h-16" />,
    title: 'Discovery & Consultation',
    description: 'We begin by understanding your business goals, target audience, and project requirements through in-depth consultations.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    icon: <PenTool className="w-16 h-16" />,
    title: 'Design & Planning',
    description: 'Our team creates detailed wireframes and designs while planning the technical architecture.',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    icon: <Code2 className="w-16 h-16" />,
    title: 'Development',
    description: 'We follow agile methodologies to develop your solution with regular updates and iterations.',
    gradient: 'from-indigo-500 to-green-500'
  },
  {
    icon: <TestTube className="w-16 h-16" />,
    title: 'Testing & QA',
    description: 'Rigorous testing ensures your solution meets the highest quality standards.',
    gradient: 'from-green-500 to-yellow-500'
  },
  {
    icon: <Rocket className="w-16 h-16" />,
    title: 'Deployment',
    description: 'We handle the deployment process and ensure a smooth transition to production.',
    gradient: 'from-yellow-500 to-red-500'
  },
  {
    icon: <Shield className="w-16 h-16" />,
    title: 'Maintenance & Support',
    description: 'Ongoing support and maintenance to keep your solution running smoothly.',
    gradient: 'from-red-500 to-blue-500'
  }
];





const founder = {
  name: 'Cyprian Kanda',
  role: 'Founder & CEO',
  bio: 'With over a decade of experience in software development and digital innovation, Cyprian leads Cyboss Design & Code with a vision to transform businesses through technology.',
  image: '/cbk.JPG',
  social: {
    linkedin: 'https://www.linkedin.com/in/cyprian-kanda-boit/',
    twitter: 'https://twitter.com/cypriankanda',
    github: 'https://github.com/cypriankanda'
  }
};

const ProcessCard = ({ step, index, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
  >
    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.gradient}`} />
    <div className="mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110">
      <div className={`text-gradient bg-gradient-to-r ${step.gradient}`}>
        {step.icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
      {step.title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
  </motion.div>
);

export default function Process() {
  const [visibleElements, setVisibleElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-index]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=100")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative pt-32 flex min-h-screen items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center text-white tracking-tight">
              Our Process
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto text-gray-200 leading-relaxed">
              A systematic approach to delivering exceptional digital solutions
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <button className="group flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all">
                Explore Our Process
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} data-index={index}>
                <ProcessCard 
                  step={step} 
                  index={index} 
                  isVisible={visibleElements.includes(index.toString())}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-[600px] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={founder.image}
                  alt={founder.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-4xl font-bold mb-4">{founder.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 text-xl mb-6">{founder.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    {founder.bio}
                  </p>
                  <div className="flex gap-6">
                    <a href={founder.social.linkedin} className="text-gray-400 hover:text-blue-500 transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href={founder.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a href={founder.social.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}