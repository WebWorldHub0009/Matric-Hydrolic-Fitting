import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCarSide,
  FaUserShield,
  FaMapMarkedAlt,
  FaWallet,
  FaHeadset,
} from "react-icons/fa";
import bgImage from "../assets/images/bg6.jpg";

const faqData = [
  {
    category: "Services",
    icon: <FaCarSide size={20} className="text-yellow-400" />,
    questions: [
      {
        q: "What services does Pramod Travels offer?",
        a: "We provide local & outstation cab rentals, airport transfers, and customized tour packages.",
      },
      {
        q: "Do you offer intercity rides?",
        a: "Yes, we cover all major intercity routes across North India with reliable drivers.",
      },
      {
        q: "Can I book a round-trip or multi-city journey?",
        a: "Absolutely! You can plan round-trips, multi-city routes, or customized travel itineraries.",
      },
      {
        q: "Do you provide outstation packages with accommodation?",
        a: "We offer combo packages including transport and accommodation on request—just reach out to us.",
      },
    ],
  },
  {
    category: "Safety",
    icon: <FaUserShield size={20} className="text-yellow-400" />,
    questions: [
      {
        q: "Are your drivers verified?",
        a: "Yes, all drivers undergo strict background checks and training before onboarding.",
      },
      {
        q: "How do you ensure safety during late-night rides?",
        a: "We have 24/7 GPS tracking, SOS support, and trained drivers for safe travel anytime.",
      },
      {
        q: "Are the vehicles sanitized regularly?",
        a: "Yes, our fleet is sanitized before and after each trip to maintain hygiene standards.",
      },
      {
        q: "Do you have insurance coverage for all rides?",
        a: "All our trips are insured to provide comprehensive coverage and passenger safety.",
      },
    ],
  },
  {
    category: "Destinations",
    icon: <FaMapMarkedAlt size={20} className="text-yellow-400" />,
    questions: [
      {
        q: "Which destinations are covered?",
        a: "We operate in Delhi, Agra, Jaipur, Lucknow, Haridwar, and more tourist & business hubs.",
      },
      {
        q: "Do you support custom route planning?",
        a: "Yes, our support team can plan and customize routes as per your convenience.",
      },
      {
        q: "Are out-of-state trips available?",
        a: "Of course! We handle long-distance bookings across more than 10+ Indian states.",
      },
      {
        q: "Can I add sightseeing stops during my ride?",
        a: "Yes, you can include sightseeing or rest stops in your itinerary on request.",
      },
    ],
  },
  {
    category: "Payments",
    icon: <FaWallet size={20} className="text-yellow-400" />,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept UPI, cash, bank transfers, Paytm, Google Pay, and cards.",
      },
      {
        q: "Is there any refund on cancellations?",
        a: "Full refunds are offered if canceled 24 hours in advance. Minimal fee applies after that.",
      },
      {
        q: "Do you provide digital receipts/invoices?",
        a: "Yes, you will receive a digital receipt via SMS or email post-trip completion.",
      },
      {
        q: "Can I pay in installments for long tours?",
        a: "Please contact our team—installment options are available for select tour packages.",
      },
    ],
  },
  {
    category: "Support",
    icon: <FaHeadset size={20} className="text-yellow-400" />,
    questions: [
      {
        q: "How can I contact customer support?",
        a: "Call us at +91 9368436928 or use our WhatsApp/chat for quick help.",
      },
      {
        q: "Can I update my booking later?",
        a: "Yes, just reach out with your new travel details and we’ll update your booking seamlessly.",
      },
      {
        q: "What languages does support speak?",
        a: "Our support team communicates in English, Hindi, and local regional languages.",
      },
      {
        q: "Do you offer roadside assistance?",
        a: "Yes, we provide quick roadside support if there are any vehicle-related issues during your trip.",
      },
    ],
  },
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpen = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="w-full py-20 px-4 md:px-10 text-white relative bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 leading-snug">
          Got Questions?{" "}
          <span className="text-yellow-400">We’ve Got Clear Answers</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="lg:w-1/4 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-2 lg:pb-0">
            {faqData.map((cat, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setOpenIndex(null);
                }}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 md:py-4 rounded-full lg:rounded-lg text-sm font-medium transition-all ${
                  activeCategory === index
                    ? "bg-yellow-900 text-black shadow-lg"
                    : "bg-[#1e1e1e] text-gray-300 hover:text-white hover:bg-yellow-500/10"
                }`}
              >
                {cat.icon}
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {faqData[activeCategory].questions.map((item, index) => (
                  <motion.div
                    key={index}
                    layout
                    className="bg-black/30 border border-yellow-500/10 rounded-xl p-5 transition-all"
                    whileHover={{ scale: 1.01 }}
                  >
                    <button
                      className="w-full flex justify-between items-center text-left font-semibold text-base sm:text-lg"
                      onClick={() => handleOpen(index)}
                    >
                      {item.q}
                      <span className="text-yellow-400 text-xl font-bold">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-200 mt-3 text-sm sm:text-base leading-relaxed overflow-hidden"
                        >
                          {item.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
