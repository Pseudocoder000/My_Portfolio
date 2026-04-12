import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Learn more about my journey and expertise</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6 text-center mb-12">
            <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              I'm a Full Stack Developer (MERN) with strong foundations in Data Structures and Algorithms, specializing in building scalable, AI-powered web applications. With hands-on experience from internships and award-winning projects, I've developed a passion for creating solutions that make a real impact.
            </p>

            <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science and Information Technology at the University of Engineering and Management, Kolkata, with a CGPA of 8.4/10. I'm committed to continuous learning and staying at the forefront of modern web technologies.
            </p>

            <div className="space-y-3 flex flex-col items-center">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <span className="text-gray-700 dark:text-gray-300">Infosys Springboard Trainee (250+ hours)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <span className="text-gray-700 dark:text-gray-300">React Developer Intern at Think To Share</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <span className="text-gray-700 dark:text-gray-300">HackByte 3.0 - 2nd Runner-Up</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <span className="text-gray-700 dark:text-gray-300">MongoDB Track Prize Winner</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid - Centered Below */}
         
          </motion.div>
      </div>
    </section>
  )
}