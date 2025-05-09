import { ShieldCheck, Zap, Users, BadgeDollarSign } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Fast Payouts",
    icon: <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    description: "Get your money quickly once your license is sold.",
  },
  {
    title: "Trusted by Thousands",
    icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    description: "Thousands of clients across the globe trust SoftSell.",
  },
  {
    title: "Secure Transactions",
    icon: <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    description: "End-to-end encryption ensures your data stays safe.",
  },
  {
    title: "No Hidden Fees",
    icon: (
      <BadgeDollarSign className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    ),
    description: "Transparent pricing with no extra charges.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 bg-white dark:bg-gray-900 text-center px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Why Choose Us
        </h3>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-blue-50 dark:bg-blue-950 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
