import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Warehouse = () => {
  return (
    <div className="bg-[#f1f8fd] text-gray-800">
      {/* Logo & Back Button */}
      <div className="flex items-center justify-between px-4 sm:px-10 py-6 max-w-7xl mx-auto">
        <Link to="/">
          <img
            src="/nicobar.png"
            alt="Company Logo"
            className="h-22 w-auto cursor-pointer"
          />
        </Link>
        <Link
          to="/"
          className="text-white bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-100 transition"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/Freightimg-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-black text-4xl sm:text-5xl font-bold text-center"
          >
            Warehouse & Storage Solutions
          </motion.h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">
            Safe, Scalable Warehousing
          </h2>
          <p className="text-blue-800 text-lg mb-4">
            We provide secure, efficient storage for goods of all sizes and types. Whether you require short-term holding or long-term warehousing, we tailor our services to match your needs.
          </p>
          <p className="text-blue-700">
            Our facilities are equipped with climate control, round-the-clock surveillance, and real-time tracking systems to keep your cargo safe and accessible.
          </p>
        </motion.div>

        
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-900 mb-3">
            Our Warehouse Benefits
          </h3>
          <p className="text-blue-700">
            Engineered for performance, built for peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "24/7 Security",
              desc: "Fully monitored facilities with live alerts, CCTV, and restricted access.",
            },
            {
              title: "Smart Inventory",
              desc: "Real-time tracking and inventory systems for total visibility.",
            },
            {
              title: "Custom Plans",
              desc: "Short- or long-term warehousing, tailored to your supply chain.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-[#e8f3fb] p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h4>
              <p className="text-blue-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-20 mb-20 px-4"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-4">
          Need Secure Storage for Your Goods?
        </h2>
        <p className="text-blue-700 mb-6">
          Connect with our team today and find a storage plan that fits your business.
        </p>
        <Link
          to="/contact"
          className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-6 py-3 rounded-xl transition"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  );
};

export default Warehouse;

