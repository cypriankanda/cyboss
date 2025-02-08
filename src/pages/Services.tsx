import { Code, Smartphone, Globe, Layers, Database, Cloud, Lock, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-12 h-12 text-blue-500" />, 
    title: 'Web Development',
    description: 'Custom, responsive websites and web applications that deliver exceptional user experiences.',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps (PWA)',
      'Content Management Systems',
      'API Integration',
      'Performance Optimization'
    ]
  },
  {
    icon: <Smartphone className="w-12 h-12 text-purple-500" />, 
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-platform Solutions',
      'App Store Optimization',
      'Mobile UI/UX Design',
      'App Maintenance & Support'
    ]
  },
  {
    icon: <Code className="w-12 h-12 text-green-500" />, 
    title: 'Custom Software',
    description: 'Tailored software solutions to meet your specific business needs.',
    features: [
      'Enterprise Software',
      'Cloud Solutions',
      'System Integration',
      'Legacy System Modernization',
      'Automation Tools',
      'Technical Consulting'
    ]
  }
];

const technologies = [
  { icon: <Layers className="w-8 h-8 text-red-500" />, name: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'Next.js'] },
  { icon: <Database className="w-8 h-8 text-yellow-500" />, name: 'Backend', items: ['Node.js', 'Python', 'Java', 'Go'] },
  { icon: <Cloud className="w-8 h-8 text-blue-500" />, name: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] },
  { icon: <Lock className="w-8 h-8 text-gray-500" />, name: 'Security', items: ['OAuth', 'JWT', 'SSL/TLS'] },
  { icon: <Palette className="w-8 h-8 text-pink-500" />, name: 'Design', items: ['Figma', 'Adobe XD', 'Sketch'] },
  { icon: <Zap className="w-8 h-8 text-green-500" />, name: 'Tools', items: ['Git', 'Docker', 'Kubernetes'] }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative pt-32 flex min-h-screen items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">Our Services</h1>
            <p className="text-xl text-center max-w-3xl mx-auto text-gray-200">
              We deliver cutting-edge digital solutions that help businesses thrive in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-blue-500">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-700 dark:text-blue-400">Our Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-4 border-t-4 border-blue-500"> 
                  {tech.icon}
                </div>
                <h3 className="font-semibold mb-2 text-blue-700 dark:text-blue-400">{tech.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.items.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}