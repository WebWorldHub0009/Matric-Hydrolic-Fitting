import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import LocationMap from "../components/LocationMap";

export default function ContactUs() {
  return (
    <>
      <section className="w-full bg-gradient-to-b from-white via-lime-50 to-green-100 font-serif py-1">
        {/* Hero Header */}
        <div className="w-full bg-blue-800 text-white text-center px-6 py-20 relative overflow-hidden">
          <h1 className="text-5xl md:text-6xl font-[Great_Vibes] mb-4">
            We’d Love To Hear From You
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Whether you have a question about our hydraulic fittings, manufacturing capabilities, or want to explore partnership — we’re here to help.
          </p>
          <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full bottom-[-80px] right-[-80px] z-0"></div>
        </div>

        {/* Contact Container */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-[-60px] z-10 relative flex flex-col md:flex-row overflow-hidden px-6 md:px-12 py-12 md:py-16">
          {/* Left Info */}
          <div className="bg-blue-700 text-white px-8 py-12 relative md:w-1/2 w-full rounded-2xl md:rounded-r-none">
            <h3 className="text-2xl font-bold mb-4">Matric Hydraulic Fittings</h3>
            <p className="text-white/90 text-base mb-6">
              Established in 2014, we are a trusted manufacturer and supplier of hydraulic components including PVC Clamps, O Ring Nipples, Bulkhead Fittings, Metal Flanges, Elbow Fittings, Dowty Seals, Copper Washers, Needle Valves, Socket Weld Unions, Banjo Bolts, Steel Tees, and more.
              <br />
              <br />
              Backed by a robust infrastructure in New Delhi and led by our Director <strong>Naveen Gola</strong>, we proudly serve clients under the brand name <strong>MHF</strong>.
            </p>

            {/* Phone */}
            <div className="flex items-start gap-4 text-base mb-4">
              <HiOutlinePhone className="mt-1 text-white text-2xl" />
              <div>
                +91 78382 77868 <br /> +91 99585 60708
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 text-base mb-4">
              <AiOutlineMail className="mt-1 text-white text-2xl" />
              <div>
                info@matrichydraulicfittings.com <br /> matrichydraulicfittings@gmail.com
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 text-base mb-4">
              <BiMap className="mt-1 text-white text-2xl" />
              <div>
                Metro Pillar No. 742, A-83, Gulab Bagh, Nawada, Uttam Nagar, <br />
                New Delhi, Delhi 110059
              </div>
            </div>

            {/* Certifications */}
            <p className="text-white/80 text-sm mt-4 leading-6">
              GSTIN: 07BBCPK1736M1ZK <br />
              UDYAM: UDYAM-DL-11-0040359
            </p>

            <div className="absolute w-80 h-80 bg-white opacity-10 rounded-full bottom-[-100px] right-[-100px] z-0"></div>
          </div>

          {/* Right Form */}
          <div className="px-8 py-12 md:w-1/2 w-full">
            <form
              className="w-full"
              action="https://formsubmit.co/matrichydraulicfittings@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://excelpest.in/thank-you"
              />

              {/* Name & Email */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full border-b-2 border-gray-300 focus:border-blue-700 outline-none py-3 text-base"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-lg text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full border-b-2 border-gray-300 focus:border-blue-700 outline-none py-3 text-base"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Enquiry about fittings, pricing, or bulk orders"
                  className="w-full border-b-2 border-gray-300 focus:border-blue-700 outline-none py-3 text-base"
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-lg text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message here"
                  className="w-full border-b-2 border-gray-300 focus:border-blue-700 outline-none py-3 text-base resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-900 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <LocationMap/>
    </>
  );
}
