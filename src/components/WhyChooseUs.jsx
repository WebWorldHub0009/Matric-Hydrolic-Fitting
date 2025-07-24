import React from "react";
import { FaDollarSign, FaChartLine, FaCogs, FaLock, FaBoxes, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaDollarSign className="text-3xl text-[#FFD700]" />,
      title: "Instant Savings",
      desc: "Get immediate savings on every purchase, powered by precision engineering and reliability."
    },
    {
      icon: <FaChartLine className="text-3xl text-[#FFD700]" />,
      title: "Real-Time Insights",
      desc: "Make smarter decisions with detailed performance data and actionable insights."
    },
    {
      icon: <FaBoxes className="text-3xl text-[#FFD700]" />,
      title: "Flexible Solutions",
      desc: "Choose custom solutions tailored to your needs, offering scalability and cost-effectiveness."
    },
    {
      icon: <FaLock className="text-3xl text-[#FFD700]" />,
      title: "Secure & Durable",
      desc: "Prioritize safety and long-lasting performance with our high-quality hydraulic fittings."
    },
    {
      icon: <FaCogs className="text-3xl text-[#FFD700]" />,
      title: "Adaptive Engineering",
      desc: "We evolve our designs with cutting-edge technology to ensure maximum efficiency."
    },
    {
      icon: <FaHeadset className="text-3xl text-[#FFD700]" />,
      title: "Dedicated Support",
      desc: "Access expert assistance 24/7 to ensure your operations never face downtime."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white text-center text-sm">Matric Fitting</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0057A8]">
          Why Choose Us?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          Innovative hydraulic solutions designed with precision and durability to elevate your industry.
        </p>

        {/* Grid Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] border border-[#FFD700]/20 p-6 rounded-2xl shadow-md hover:shadow-lg hover:shadow-[#FFD700]/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center mx-auto w-14 h-14 mb-4 rounded-full bg-[#FFD700]/10 group-hover:bg-[#FFD700]/20 transition">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
