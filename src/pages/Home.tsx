import { ArrowRight, Code, Smartphone, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const services = [
    { icon: <Globe className="w-8 h-8 text-blue-500" />, title: 'Web Development', description: 'Custom websites and web applications built with cutting-edge technologies.' },
    { icon: <Smartphone className="w-8 h-8 text-purple-500" />, title: 'Mobile Development', description: 'Native iOS and Android applications that deliver exceptional user experiences.' },
    { icon: <Code className="w-8 h-8 text-green-500" />, title: 'Custom Solutions', description: 'Tailored software solutions to meet your specific business needs.' },
  ];

  return (
    <div>
      {/* Animated Hero Section with Tech Animation */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=100"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="z-10"
        >
          <h1 className="text-5xl font-bold">Digital Excellence <span className="text-blue-400">Through Innovation</span></h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">We transform ideas into powerful digital solutions that drive growth and success.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center">
              View Our Work <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We offer comprehensive digital solutions tailored to your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Learn More <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}