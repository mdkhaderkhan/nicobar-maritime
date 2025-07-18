import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaWarehouse, FaTruckMoving, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

// Reusable dancing animation
const dancing = {
  animate: {
    y: [0, -6, 0],
    rotate: [0, 3, -3, 0],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

const ThirdPartyLogistics = () => {
  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Logo + Back Button */}
      <div className="flex justify-between items-center mb-12">
        <Link to="/">
          <img
            src="/nicobar.png"
            alt="Logo"
            className="h-20 sm:h-24 lg:h-28 w-auto hover:opacity-80 transition duration-300"
          />
        </Link>
        <Link
          to="/"
          className="bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition duration-300 shadow-md"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Animated Hero Text */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: -30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-800 mb-4 tracking-tight">
          Third-Party Logistics
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          End-to-end warehousing, transportation, and distribution support for scalable and efficient supply chains.
        </p>
      </motion.div>

      {/* Feature Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 z-10 relative">
        <StepFeature
          icon={<FaWarehouse size={32} />}
          title="Warehousing & Fulfillment"
          desc="Scalable warehouse solutions with order picking, packing, and inventory tracking."
          delay={0.1}
        />
        <StepFeature
          icon={<FaTruckMoving size={32} />}
          title="Transport & Last-Mile"
          desc="Seamless transportation and timely last-mile delivery using trusted carriers."
          delay={0.3}
        />
        <StepFeature
          icon={<FaChartLine size={32} />}
          title="Analytics & Optimization"
          desc="Supply chain visibility, real-time performance metrics, and process improvement."
          delay={0.5}
        />
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-3">
          Let's Optimize Your Supply Chain
        </h2>
        <p className="text-gray-600 mb-6">
          From inventory management to final delivery, we’ve got your logistics covered.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-lg"
        >
          Schedule a Consultation
        </Link>
      </motion.div>
    </div>
  );
};

// Feature block with animation
const StepFeature = ({ icon, title, desc, delay = 0 }) => (
  <motion.div
    variants={fadeUp(delay)}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    className="flex items-start gap-5 bg-white border border-gray-200 shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300"
  >
    <motion.div
      variants={dancing}
      animate="animate"
      className="text-blue-600 mt-1"
    >
      {icon}
    </motion.div>
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </motion.div>
);

export default ThirdPartyLogistics;

