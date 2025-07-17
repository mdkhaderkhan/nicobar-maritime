import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Cargohandling = () => {
  return (
    <div className="bg-[#f8fafc] text-gray-800">
      
      {/* 🔝 Logo + Back Button */}
      <div className="flex justify-between items-center px-4 sm:px-10 py-4">
        <Link to="/">
          <img
            src="/nicobar.png" // ✅ Make sure this image is inside your public folder
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

      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/project-cargo-bg.jpg')" }}
      >
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-black text-center"
          >
            Project Cargo Handling Solutions
          </motion.h1>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 sm:px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-4">Heavy & Oversized Cargo Expertise</h2>
          <p className="text-gray-700 text-lg mb-4">
            We specialize in the end-to-end management of complex, oversized, and heavy-lift cargo for industrial and infrastructure projects.
            Our experienced team ensures precision, safety, and compliance at every stage of your cargo movement.
          </p>
          <p className="text-gray-700">
            From route planning and permitting to multi-modal transportation and on-site coordination, we offer complete solutions for project cargo across land, sea, and air.
          </p>
        </motion.div>
        <motion.img
          src="/project-cargo-img.jpg"
          alt="Project Cargo Handling"
          className="rounded-lg shadow-xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">What We Offer</h3>
          <p className="text-gray-600">
            Specialized project cargo solutions tailored to meet unique logistics challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Route & Feasibility Analysis',
              desc: 'Pre-transport planning including site and route surveys.',
            },
            {
              title: 'Multi-modal Transport',
              desc: 'Integrated sea, road, rail, and air logistics solutions.',
            },
            {
              title: 'Lifting & Rigging Services',
              desc: 'Specialized cranes and equipment for heavy lift operations.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl shadow-md p-6 bg-[#f9fafb] hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cargohandling;
