import React from "react";
import { motion } from "framer-motion";
import { BiMap, BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

export default function LocationMap() {
  return (
    <section className="bg-gradient-to-br from-white via-lime-50 to-blue-100 py-20 px-6 md:px-20 font-sans">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
          Find Us on the Map
        </h2>
        <p className="text-gray-600 text-lg">
          You're welcome to visit our facility at any time — we’re located in the heart of New Delhi.
        </p>
      </motion.div>

      {/* Equal Height Grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Info Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-10 flex-1 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MdLocationOn className="text-3xl text-blue-700" />
              <div>
                <h4 className="text-xl font-semibold text-[#1A1A1A]">Head Office</h4>
                <p className="text-gray-600">
                  Metro Pillar No. 742, A-83, Gulab Bagh, Nawada, Uttam Nagar, <br />
                  New Delhi, Delhi 110059
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BiSolidPhoneCall className="text-2xl text-blue-700 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-[#1A1A1A]">Contact Numbers</h4>
                <p className="text-gray-600">
                  +91 78382 77868 <br />
                  +91 99585 60708
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BiMap className="text-2xl text-blue-700 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-[#1A1A1A]">Serving Since</h4>
                <p className="text-gray-600">
                  Matric Hydraulic Fittings has been providing quality hydraulic solutions since 2014.
                  Backed by a trusted brand <strong>MHF</strong>, we are committed to precision and durability.
                </p>
              </div>
            </div>
          </div>

          <a
    href="tel:+917838277868"
    className="inline-flex w-[120px] md:w-[150px] items-center gap-3 bg-blue-700 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 transition-all duration-300 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300"
  >
    <FaPhone className="text-xl" />
    <span>Call Now</span>
  </a>
        </motion.div>

        {/* Right Map Block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl shadow-2xl overflow-hidden flex-1"
        >
          <div className="w-full h-full min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112074.71321824692!2d76.96005259246542!3d28.619726585532028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390d051ea0d1029f%3A0x245118ba8838ad!2sMetro%20Pillar%20No.%20742%2C%20A-83%2C%20Gulab%20Bagh%2C%20Nawada%2C%20Uttam%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110059!3m2!1d28.6197515!2d77.04245399999999!5e0!3m2!1sen!2sin!4v1753442383969!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Matric Hydraulic Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
