import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    floating: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl dark:bg-accent/10" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl dark:bg-blue-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.p
                className="text-accent font-semibold text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Welcome to my portfolio
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl font-bold font-playfair leading-tight"
                variants={itemVariants}
              >
                Hi, I'm{' '}
                <span className="gradient-text">Jaya Ganguly</span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl dark:text-gray-300 text-gray-600 leading-relaxed"
            >
              Full Stack Developer (MERN) with strong foundations in Data Structures & Algorithms and hands-on experience building scalable, AI-powered web applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 text-lg dark:text-gray-300 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span>📍 Sector-V, Kolkata</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span>📧 jayaganguly969@gmail.com</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-accent text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-accent-light transition-colors glow-effect"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-accent dark:text-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="https://github.com/Pseudocoder000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 dark:bg-dark-light bg-gray-100 rounded-lg hover:bg-accent hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jaya-ganguly"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 dark:bg-dark-light bg-gray-100 rounded-lg hover:bg-accent hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.252-.129.604-.129.957v5.412h-3.554s.047-8.733 0-9.646h3.554v1.364c.43-.664 1.199-1.607 2.918-1.607 2.135 0 3.735 1.394 3.735 4.392v5.497zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.953.771-1.71 1.958-1.71 1.187 0 1.914.757 1.941 1.71 0 .951-.754 1.71-1.984 1.71zm1.581 11.019H3.656V8.786h3.262v11.666zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={floatingVariants}
            animate="floating"
            className="relative hidden md:block"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full aspect-square rounded-2xl overflow-hidden glow-effect"
            >
              <img
                src="/images/jaya.jpg"
                alt="Jaya Ganguly - Profile Photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
            </motion.div>


          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm dark:text-gray-400 text-gray-600"> </p>
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}