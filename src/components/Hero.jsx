import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-center py-24 px-6"
      id="hero"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
        >
          Resell Your Software Licenses Easily
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Fast. Secure. Profitable.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
        >
          Sell My Licenses
        </motion.button>
      </div>
    </section>
  );
}
