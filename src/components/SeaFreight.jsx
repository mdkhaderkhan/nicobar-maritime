import React from "react";
import { motion } from "framer-motion";
import { FaShip, FaGlobe, FaClock } from "react-icons/fa";

const SeaFreight = () => {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-100 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">
          Global Sea Freight Solutions
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Reliable, cost-effective, and secure ocean freight services connecting global trade routes with complete transparency and efficiency.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaShip size={38} />}
          title="Full Container Load (FCL)"
          desc="Ideal for large shipments requiring full container space with fixed schedules."
        />
        <FeatureCard
          icon={<FaGlobe size={38} />}
          title="Worldwide Coverage"
          desc="A strong network of global shipping lines for smooth international logistics."
        />
        <FeatureCard
          icon={<FaClock size={38} />}
          title="Timely Delivery"
          desc="Reliable ETAs with milestone-based tracking and proactive notifications."
        />
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-3">
          Ready to Ship by Sea?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact our freight specialists today to get a custom quote and sailing schedule.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-xl text-lg hover:bg-blue-800 transition"
        >
          Get a Quote
        </a>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg p-6 rounded-2xl text-center transition"
    >
      <div className="text-blue-600 mb-4 mx-auto">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
};

export default SeaFreight;
