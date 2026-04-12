import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'jayaganguly969@gmail.com',
      href: 'mailto:jayaganguly969@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7551048609',
      href: 'tel:+917551048609'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Sector-V, Kolkata, India',
      href: '#'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl dark:bg-accent/10" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl dark:bg-blue-500/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                href={method.href}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="p-6 dark:bg-dark bg-white rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-accent transition-colors glow-effect"
              >
                <motion.div
                  className="inline-block p-4 bg-accent/10 rounded-lg mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="text-accent" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{method.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 hover:text-accent transition-colors">
                  {method.value}
                </p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto dark:bg-dark bg-white p-8 md:p-10 rounded-xl border border-gray-200 dark:border-gray-700 glow-effect"
        >
          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg dark:bg-dark-light bg-gray-50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-accent transition-colors dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 rounded-lg dark:bg-dark-light bg-gray-50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-accent transition-colors dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg dark:bg-dark-light bg-gray-50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-accent transition-colors dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg dark:bg-dark-light bg-gray-50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-accent transition-colors dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                required
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light transition-colors glow-effect"
            >
              Send Message
            </motion.button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-sm dark:text-gray-400 text-gray-600 mt-4"
          >
            I'll get back to you as soon as possible!
          </motion.p>
        </motion.div>

        {/* Social Links CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">Or connect with me on social media</p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/Pseudocoder000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 dark:bg-dark bg-white rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:bg-accent hover:text-white transition-colors"
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
              className="p-4 dark:bg-dark bg-white rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:bg-accent hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.252-.129.604-.129.957v5.412h-3.554s.047-8.733 0-9.646h3.554v1.364c.43-.664 1.199-1.607 2.918-1.607 2.135 0 3.735 1.394 3.735 4.392v5.497zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.953.771-1.71 1.958-1.71 1.187 0 1.914.757 1.941 1.71 0 .951-.754 1.71-1.984 1.71zm1.581 11.019H3.656V8.786h3.262v11.666zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </motion.a>

            <motion.a
              href="mailto:jayaganguly969@gmail.com"
              className="p-4 dark:bg-dark bg-white rounded-lg border border-gray-200 dark:border-gray-700 hover:border-accent hover:bg-accent hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}