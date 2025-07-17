import React from "react";
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaShippingFast, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function AirFreight() {
  return (
    <div className="bg-gradient-to-r from-sky-50 via-blue-100 to-white min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">
          International Air Freight
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Fast, secure, and globally connected air cargo services for your
          urgent and high-value shipments.
        </p>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaPlaneDeparture size={40} />}
          title="Global Reach"
          desc="We provide comprehensive global coverage with top-tier airline partners."
        />
        <FeatureCard
          icon={<FaShippingFast size={40} />}
          title="Express Delivery"
          desc="Time-sensitive shipments delivered swiftly and securely."
        />
        <FeatureCard
          icon={<FaMapMarkedAlt size={40} />}
          title="Real-Time Tracking"
          desc="Stay updated with real-time tracking and streamlined customs clearance."
        />
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Need a Custom Air Freight Solution?
        </h2>
        <p className="text-gray-600 mb-6">
          Get in touch with our logistics experts for tailored shipping options.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-800 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          Contact Us
        </Link>
      </motion.div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg p-6 rounded-2xl text-center transition"
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}
