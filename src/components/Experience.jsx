import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Trainee - Infosys Springboard Virtual Internship',
      company: 'Infosys',
      period: 'Apr 2025 – Present',
      duration: 'Ongoing',
      description: [
        'Completed 250+ hours of structured training in Java, DSA, DBMS, and NoSQL databases',
        'Solved 100+ coding problems to strengthen problem-solving and algorithmic thinking',
        'Gained hands-on exposure to Agile methodologies and SDLC practices'
      ],
      skills: ['Java', 'DSA', 'DBMS', 'MongoDB', 'Agile']
    },
    {
      title: 'React Developer Intern',
      company: 'Think To Share',
      period: 'Aug 2024 – Nov 2024',
      duration: '4 months',
      description: [
        'Developed and enhanced a production-level web application using React.js, Node.js, Express.js, MongoDB',
        'Integrated a payment gateway system handling secure transactions for user flows',
        'Designed scalable transaction models improving data consistency and reducing errors by 70%',
        'Improved UI responsiveness and engagement using Framer Motion, reducing perceived load time',
        'Built REST APIs for authentication, payment verification, and dashboard updates'
      ],
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway', 'Framer Motion']
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">My journey in tech and professional growth</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-accent to-transparent dark:from-accent dark:to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-blue-500 p-1 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full dark:bg-dark bg-white flex items-center justify-center">
                      <Briefcase className="text-accent" size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="flex-1 dark:bg-dark-light bg-white p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-accent transition-colors glow-effect"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm dark:text-gray-400 text-gray-600">{exp.period}</p>
                      <p className="text-xs dark:text-gray-500 text-gray-500">{exp.duration}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-accent font-bold flex-shrink-0">•</span>
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}