import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CTO",
    company: "TechCorp",
    review: "SoftSell helped us recover value from unused licenses quickly!",
  },
  {
    name: "Bob Smith",
    role: "IT Manager",
    company: "InnovateX",
    review: "A seamless experience — highly recommend their platform.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          What Our Customers Say
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl text-left transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                “{t.review}”
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                — {t.name}, {t.role}, {t.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
