import React, { useEffect, useState } from "react";
import { FaUsers, FaProjectDiagram, FaAward, FaUserTie } from "react-icons/fa";

const statsData = [
  { icon: <FaUsers />, value: 23000, label: "Happy Clients" },
  { icon: <FaProjectDiagram />, value: 112000, label: "Completed Projects" },
  { icon: <FaAward />, value: 112, label: "Years Experience" },
  { icon: <FaUserTie />, value: 112, label: "Team Members" },
];

const StatsCounter = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const increment = stat.value / 100;
      const timer = setInterval(() => {
        start += increment;
        setCounts((prev) =>
          prev.map((val, i) => (i === index ? Math.min(Math.floor(start), stat.value) : val))
        );
        if (start >= stat.value) clearInterval(timer);
      }, 20);
    });
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-white to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Center Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#0057A8] mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            "Precision and quality define our journey. Here’s what we’ve accomplished so far."
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Left Info */}
          <div className="text-center lg:text-left max-w-sm">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-2">25+</h2>
            <p className="text-gray-700 font-medium">Total Clients</p>
            <p className="mt-3 text-gray-500 text-sm">
              Our dedication to quality and precision ensures lasting trust with every client.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white/60 rounded-xl shadow-md backdrop-blur-lg border border-gray-200 p-6 flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className="text-3xl text-[#0057A8] mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-900">
                  {counts[index].toLocaleString()}+
                </div>
                <p className="text-sm text-gray-700 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
