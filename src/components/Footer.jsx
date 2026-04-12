import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'GitHub', href: 'https://github.com/Pseudocoder000' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/jaya-ganguly' },
    { name: 'Email', href: 'mailto:jayaganguly969@gmail.com' }
  ]

  return (
    <footer className="dark:bg-dark bg-white border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text font-playfair">JG</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Full Stack Developer | MERN Stack | AI/ML Enthusiast
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-600 dark:text-gray-400 hover:text-accent transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white">Connect</h4>
            <div className="flex gap-4">
              {footerLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-6" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400"
        >
          <p>
            &copy; {currentYear} Jaya Ganguly. All rights reserved.
          </p>
          <p>
            Designed & Built with <span className="text-accent">❤️</span> using React & Framer Motion
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 p-3 dark:bg-dark-light bg-white rounded-full border border-gray-200 dark:border-gray-700 hover:border-accent hover:text-accent transition-colors glow-effect z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  )
}