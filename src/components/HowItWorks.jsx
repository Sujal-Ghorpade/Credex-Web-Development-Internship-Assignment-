import { Upload, DollarSign, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Upload className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Upload License",
    description: "Submit your license details securely through our platform.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    title: "Get Valuation",
    description: "We analyze the value and give you a fair market price.",
  },
  {
    icon: (
      <CheckCircle className="w-10 h-10 text-blue-600 dark:text-blue-400" />
    ),
    title: "Get Paid",
    description: "Once accepted, you receive fast and secure payment.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
