import React from "react";
import { motion } from "framer-motion";
import { FaFileInvoice, FaShieldAlt, FaWarehouse } from "react-icons/fa";

const Customclearance = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-8 lg:px-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-16 text-left"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Hassle-Free Customs Clearance
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          We simplify complex customs procedures with expert documentation,
          compliance handling, and end-to-end support for both imports and
          exports.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaFileInvoice size={30} />}
          title="Accurate Documentation"
          desc="Expert handling of invoices, packing lists, and country-specific declarations."
        />
        <FeatureCard
          icon={<FaShieldAlt size={30} />}
          title="Regulatory Compliance"
          desc="Ensure compliance with international trade regulations and local customs rules."
        />
        <FeatureCard
          icon={<FaWarehouse size={30} />}
          title="Port Clearance"
          desc="Speedy clearance process at major sea and air ports through our trusted agents."
        />
      </div>

      {/* FAQ/CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Need Assistance With Import/Export Customs?
        </h2>
        <p className="text-gray-600 mb-6">
          Our clearance experts will guide you through every step and ensure
          zero delays. Get in touch today.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-800 transition"
        >
          Talk to Our Experts
        </a>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="border border-gray-200 shadow-sm hover:shadow-md rounded-xl p-6 transition text-center"
    >
      <div className="text-gray-700 mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
};

export default Customclearance;
