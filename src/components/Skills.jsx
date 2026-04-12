import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'Java', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 75 }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Framer Motion', level: 85 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 90 },
        { name: 'Flask', level: 80 }
      ]
    },
    {
      category: 'AI/ML & Tools',
      skills: [
        { name: 'RAG & LangChain', level: 85 },
        { name: 'Prompt Engineering', level: 88 },
        { name: 'GitHub & Git', level: 90 },
        { name: 'REST APIs & Postman', level: 92 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const barVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Expertise across modern tech stack and tools</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold gradient-text mb-6">{category.category}</h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-accent font-bold">{skill.level}%</span>
                    </div>

                    {/* Skill Bar */}
                    <div className="h-2 dark:bg-dark-light bg-gray-100 rounded-full overflow-hidden relative">
                      <motion.div
                        custom={skill.level}
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full"
                      />

                      {/* Animated Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ['0%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Concepts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 dark:bg-dark-light bg-gray-50 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Data Structures & Algorithms',
              'Object-Oriented Programming',
              'Full-Stack Web Development',
              'Scalable System Design',
              'RESTful APIs & WebSockets',
              'Database Design & Optimization',
              'Real-time Applications',
              'AI/ML Integration',
              'JWT Authentication',
              'CI/CD Workflows',
              'Agile Methodologies',
              'Problem Solving & DSA'
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10, backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                className="p-4 dark:bg-dark bg-white rounded-lg border border-gray-200 dark:border-gray-700 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-accent text-xl">✨</span>
                  <span className="font-semibold dark:text-gray-200 text-gray-800">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-8 dark:bg-dark-light bg-gray-50 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6 gradient-text">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Programming Fundamentals', issuer: 'PwC India' },
              { name: 'Prompt Engineering', issuer: 'PwC India' },
              { name: 'Cyber Security Fundamentals', issuer: 'PwC India' }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-4 dark:bg-dark bg-white rounded-lg border border-gray-200 dark:border-gray-700 text-center glow-effect"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-2">🎓</div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">{cert.name}</p>
                <p className="text-xs text-accent">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}