import {
  FaCheckCircle,
  FaBolt,
  FaWrench,
  FaShieldAlt,
  FaCogs,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: FaCheckCircle,
    title: "ISO Certified Materials",
    subtitle: "Quality Guaranteed",
    description: "We use globally recognized ISO-certified components to ensure lasting reliability and safety.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: FaBolt,
    title: "High Pressure Rated",
    subtitle: "Engineered for Tough Jobs",
    description: "Built to handle extreme hydraulic pressure in industrial environments without failure.",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: FaWrench,
    title: "Easy Maintenance",
    subtitle: "Simplified Upkeep",
    description: "Quick to install, easy to clean, and designed for long-term use with minimum intervention.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: FaShieldAlt,
    title: "Corrosion Resistant",
    subtitle: "Endures All Conditions",
    description: "Rust-free coatings and materials make our products ideal for any harsh environment.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: FaCogs,
    title: "Custom Engineering",
    subtitle: "Tailored for You",
    description: "We provide custom hydraulic solutions to fit your exact industry specifications.",
    color: "from-red-400 to-red-600",
  },
];

const WhyUs = () => {
  return (
    <section className="relative bg-white px-6 md:px-20 py-20 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#0057A8] to-[#FFD700] opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#4400ff] to-[#00ffee] opacity-30 blur-2xl animate-pulse-slow"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#1A1A1A]">
          Why Choose <span className="text-[#0057A8]">Matric Hydraulic?</span>
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Precision-built, performance-proven. Our hydraulic systems and fittings are crafted for professionals who demand more.
        </p>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, rotate: [0, 1, -1, 0] }}
              transition={{ type: "spring", stiffness: 180, damping: 15 }}
              className={`relative p-6 rounded-2xl shadow-xl bg-white border overflow-hidden group`}
            >
              {/* Animated Glow Border */}
              <div
                className={`absolute inset-0 z-0 rounded-2xl bg-gradient-to-br ${feature.color} blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500`}
              ></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <feature.icon className="text-4xl mb-4 text-[#0057A8]" />
                <h4 className="text-xl font-bold text-[#1A1A1A]">{feature.title}</h4>
                <span className="text-sm text-gray-500 mb-2">{feature.subtitle}</span>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <motion.a
            href="tel:+918888888888"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#0057A8] text-white text-lg font-semibold rounded-full shadow hover:bg-[#004499] transition-all duration-300"
          >
            <FaPhoneAlt className="text-xl" /> Call Now: +91 88888 88888
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyUs;
