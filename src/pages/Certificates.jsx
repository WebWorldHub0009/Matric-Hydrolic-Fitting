import React from "react";
import { FaFilePdf, FaEye, FaDownload, FaCheckCircle } from "react-icons/fa";

import gstPDF from "../assets/certificates/gst.pdf";
import udyamPDF from "../assets/certificates/udyam.pdf";

const certificates = [
  {
    title: "GST Registration Certificate",
    company: "Matric Hydraulic Fittings",
    description:
      "Certified under Government of India’s GST framework. Ensuring legal compliance and transparency.",
    pdf: gstPDF,
    color: "text-[#0057A8]",
    border: "border-[#0057A8]",
  },
  {
    title: "Udyam MSME Certificate",
    company: "Matric Hydraulic Fittings",
    description:
      "Micro, Small & Medium Enterprise (MSME) registered under the Udyam scheme, Govt. of India.",
    pdf: udyamPDF,
    color: "text-[#1A1A1A]",
    border: "border-[#1A1A1A]",
  },
];

const Certificates = () => {
  return (
    <section className="w-full bg-[#F9FAFB] min-h-screen px-6 py-20 text-[#1A1A1A] font-sans">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0057A8] mb-4">
          Company Certifications
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Matric Hydraulic Fittings is a government-recognized entity. View or download our official registration documents.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden bg-white rounded-2xl border ${cert.border} shadow-md hover:shadow-xl transition-all duration-300 group p-6 flex flex-col justify-between`}
          >
            {/* Ribbon */}
            <span className="absolute top-4 right-4 bg-[#0057A8] text-white px-3 py-1 text-xs rounded-md shadow-md tracking-wide">
              Official
            </span>

            {/* Icon */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-[#F1F5F9] rounded-full shadow-inner">
                <FaFilePdf className={`text-4xl ${cert.color}`} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{cert.company}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed flex-grow">
              {cert.description}
            </p>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-6 gap-4">
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0057A8] text-white rounded-lg hover:bg-[#004070] transition-all duration-300 text-sm font-medium"
              >
                <FaEye />
                View Certificate
              </a>
              <a
                href={cert.pdf}
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#333] transition-all duration-300 text-sm font-medium"
              >
                <FaDownload />
                Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-16 text-center">
        <FaCheckCircle className="text-3xl mx-auto mb-3 text-[#0057A8]" />
        <p className="text-sm text-gray-500">
          These documents verify Matric Hydraulic Fittings as a trusted and officially registered manufacturer.
        </p>
      </div>
    </section>
  );
};

export default Certificates;
