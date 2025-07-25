import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaFlagCheckered } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const data = [
  {
    title: "Vision",
    text: "To be the most trusted name in hydraulic fittings worldwide.",
    icon: <FaEye size={30} className="text-blue-700 glow" />,
  },
  {
    title: "Mission",
    text: "Deliver precision metal components with unmatched reliability and quality.",
    icon: <FaBullseye size={30} className="text-blue-700 glow" />,
  },
  {
    title: "Goal",
    text: "Empower industries through sustainable and innovative solutions.",
    icon: <FaFlagCheckered size={30} className="text-blue-700 glow" />,
  },
];

const VisionMissionGoal = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-[#fdfae6] relative overflow-hidden">
      {/* Floating Background Glows */}
      <div
        className="absolute -top-24 -left-24 w-[300px] h-[300px] rounded-full blur-3xl z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0,6,215,0.1), rgba(230,194,0,0.1))",
          animation: "spinSlow 20s linear infinite",
        }}
      />
      <div
        className="absolute bottom-0 -right-24 w-[200px] h-[200px] rounded-full blur-2xl z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0,87,168,0.2), rgba(0,174,239,0.1))",
          animation: "bounceSlow 6s ease-in-out infinite",
        }}
      />

      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#0057A8] mb-16 relative z-10">
        Our Vision, Mission & Goal
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 relative z-10">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
              <div className="relative group p-[3px] rounded-3xl bg-gradient-to-br from-black via-[#3d3d3d] to-[#616161] hover:shadow-xl transition-all duration-500">
                <div className="bg-white rounded-3xl p-8 h-full flex flex-col justify-center items-center text-center backdrop-blur-md group-hover:shadow-2xl transition-all duration-500">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-[#0057A8] mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Decorative Animation Section */}
      <div className="relative mt-2 h-8 overflow-hidden z-0">
        {/* Floating particles */}
        <div className="absolute inset-0 animate-slowMove opacity-20 pointer-events-none">
          <svg width="100%" height="100%">
            {Array.from({ length: 20 }).map((_, i) => {
              const cx = Math.random() * 100;
              const cy = Math.random() * 100;
              const r = 2 + Math.random() * 2;
              return (
                <circle
                  key={i}
                  cx={`${cx}%`}
                  cy={`${cy}%`}
                  r={r}
                  fill={i % 2 === 0 ? "#FFD700" : "#0057A8"}
                  opacity="0.6"
                />
              );
            })}
          </svg>
        </div>

        {/* Animated horizontal line */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-[#0057A8] via-transparent to-[#000000] animate-lineFlow opacity-40" />
      </div>

      {/* Inline CSS Animations */}
      <style>{`
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .glow {
          animation: glowPulse 2s infinite alternate;
        }
        @keyframes glowPulse {
          from {
            filter: drop-shadow(0 0 4px rgba(255,215,0,0.5));
          }
          to {
            filter: drop-shadow(0 0 12px rgba(255,215,0,0.9));
          }
        }
        @keyframes slowMove {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-slowMove {
          animation: slowMove 8s ease-in-out infinite;
        }
        @keyframes lineFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-lineFlow {
          animation: lineFlow 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default VisionMissionGoal;
