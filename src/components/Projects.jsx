import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Gullak – Smart Expense Tracking Platform',
      description: 'A full-stack expense tracking system with AI-powered financial recommendations and real-time transaction tracking.',
      image: '/images/Gullak.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Zustand', 'LangGraph'],
      features: [
        'Real-time transaction tracking with secure authentication',
        'Optimized backend APIs handling concurrent transactions',
        'AI chatbot using LLMs and LangGraph for financial recommendations',
        'Scalable database design with MongoDB'
      ],
      github: 'https://github.com/Pseudocoder000/Gullak.git',
      live: 'https://gullak-three.vercel.app/'
    },
    {
      title: 'Alertra – Emergency Safety System',
      description: 'IoT-based emergency alert system with real-time GPS tracking and automated SOS triggering.',
      image: '/images/Alertra.png',
      tech: ['Node.js', 'React.js', 'MongoDB', 'Raspberry Pi', 'Gemini API', 'Twilio API'],
      features: [
        'Real-time GPS tracking achieving 90–96% accuracy',
        'Automated SOS triggering using speech and emotion detection',
        'Reduced emergency response latency by 80%',
        'Scalable backend for continuous sensor data streams'
      ],
      github: 'https://github.com/Pseudocoder000/Alertra-HackByte.git',
      live: 'https://alertra-hack-byte.vercel.app'
    },
    {
      title: 'Talk-Hub – Real-time Chat Application',
      description: 'Responsive real-time messaging platform with JWT authentication and optimized performance.',
      image: '/images/Talk-Hub.png',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Zustand'],
      features: [
        'Secure bi-directional real-time communication',
        'JWT-based authentication with Zustand state management',
        '92% platform performance improvement',
        '95% enhanced security via token encryption'
      ],
      github: 'https://github.com/Pseudocoder000/talk-hub.git',
      live: '#'
    },
    {
      title: 'AI Content Processing System (RAG)',
      description: 'GenAI-based RAG system for processing multiple document formats with unified data understanding.',
      image: '/images/Rag.png',
      tech: ['Python', 'Flask', 'LangChain', 'Gemini API', 'RAG'],
      features: [
        'Support for 4+ document formats (DOC, XLSX, CSV, JPG)',
        '85% processing efficiency improvement',
        'Modular LangChain retrieval pipelines',
        'Context-aware AI responses'
      ],
      github: 'https://github.com/Pseudocoder000/AI-Content-Processing-System.git',
      live: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Showcasing my best work and technical expertise</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group dark:bg-dark bg-white rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-accent transition-all duration-300 glow-effect"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-semibold">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="text-sm space-y-1 dark:text-gray-300 text-gray-700">
                  {project.features.slice(0, 2).map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-accent flex-shrink-0">✓</span>
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className={`flex gap-3 pt-4 ${!project.live || project.live === '#' ? 'w-1/2' : ''}`}>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-2 dark:bg-dark-light bg-gray-100 rounded-lg hover:bg-accent hover:text-white dark:hover:bg-accent transition-colors font-semibold text-sm ${!project.live || project.live === '#' ? 'w-full' : 'flex-1'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    Code
                  </motion.a>
                  {project.live && project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors font-semibold text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 dark:bg-dark bg-white rounded-xl border border-gray-200 dark:border-gray-700 glow-effect"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Notable Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ x: 10 }}
              className="flex gap-4"
            >
              <div className="text-3xl">🏆</div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">2nd Runner-Up, HackByte 3.0</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Top 3 among 120+ teams at IIITDM Jabalpur. Presented to 300+ attendees.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex gap-4"
            >
              <div className="text-3xl">🎁</div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">MongoDB Track Prize</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Winner for effective database design, integration, and deployment.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex gap-4"
            >
              <div className="text-3xl">📄</div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Published Research Paper</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Alertra research published on Microsoft CMT Platform.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="flex gap-4"
            >
              <div className="text-3xl">🚀</div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">PwC India Launchpad</p>
                <p className="text-sm dark:text-gray-400 text-gray-600">Selected based on analytical and problem-solving assessment.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}