import React from "react";
import { motion } from "framer-motion";
import { FaRoad, FaTruck, FaMapSigns } from "react-icons/fa";
import { Link } from "react-router-dom";

const TransportationService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white py-12 px-4 sm:px-8 lg:px-20">
      {/* Header with Logo and Back Button */}
      <div className="flex items-center justify-between max-w-6xl mx-auto mb-10">
        <Link to="/">
          <img
            src="/nicobar.png"
            alt="Company Logo"
            className="h-20 w-auto cursor-pointer"
          />
        </Link>
        <Link
          to="/"
          className="text-blue-700 font-medium border border-blue-200 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">
          Reliable Transportation Services
        </h1>
        <p className="text-lg text-blue-700">
          Safe, flexible, and cost-effective transport solutions for businesses of all sizes — covering first mile to last mile.
        </p>
      </motion.div>

      {/* Hero Image */}
      

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={<FaTruck size={30} />}
          title="Domestic Freight"
          desc="Nationwide ground transportation with real-time tracking and assured timelines."
        />
        <FeatureCard
          icon={<FaRoad size={30} />}
          title="Last-Mile Delivery"
          desc="Efficient doorstep delivery across urban and rural zones with full visibility."
        />
        <FeatureCard
          icon={<FaMapSigns size={30} />}
          title="Route Optimization"
          desc="AI-powered route planning for faster delivery and lower fuel consumption."
        />
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-3">
          Let’s Move Your Cargo, Smoothly and On Time
        </h2>
        <p className="text-blue-700 mb-6">
          Contact us to schedule your next shipment with our transportation experts.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-800 transition"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-xl border border-blue-100 shadow-md text-center"
  >
    <div className="text-blue-700 mb-4 mx-auto">{icon}</div>
    <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
    <p className="text-blue-700">{desc}</p>
  </motion.div>
);

export default TransportationService;
