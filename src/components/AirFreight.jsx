import React from "react";
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaShippingFast, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const bounceVariant = {
  initial: { y: -10 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function AirFreight() {
  return (
    <div className="relative bg-gradient-to-r from-sky-50 via-blue-100 to-white min-h-screen py-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      
      {/* ✈️ Floating Plane Icon Background */}
      <motion.div
        className="absolute -top-10 -right-10 opacity-10 text-blue-300 text-[200px] pointer-events-none"
        variants={bounceVariant}
        initial="initial"
        animate="animate"
      >
        <FaPlaneDeparture />
      </motion.div>

      {/* 🔝 Top Logo + Back Button */}
      <div className="mb-10 flex items-center justify-between relative z-10">
        <Link to="/">
          <img
            src="/nicobar.png"
            alt="Logo"
            className="h-20 sm:h-24 lg:h-28 w-auto hover:opacity-80 transition duration-300"
          />
        </Link>
        <Link
          to="/"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300 shadow-md"
        >
          ← Back to Home
        </Link>
      </div>

      {/* 🏁 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-4">
          International Air Freight
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Fast, secure, and globally connected air cargo services for your
          urgent and high-value shipments.
        </p>
      </motion.div>

      {/* 🚀 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            icon: <FaPlaneDeparture size={40} />,
            title: "Global Reach",
            desc: "We provide comprehensive global coverage with top-tier airline partners.",
          },
          {
            icon: <FaShippingFast size={40} />,
            title: "Express Delivery",
            desc: "Time-sensitive shipments delivered swiftly and securely.",
          },
          {
            icon: <FaMapMarkedAlt size={40} />,
            title: "Real-Time Tracking",
            desc: "Stay updated with real-time tracking and streamlined customs clearance.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index + 1}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg p-6 rounded-2xl text-center transition hover:shadow-2xl"
          >
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 📞 CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
        className="mt-20 text-center relative z-10"
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
