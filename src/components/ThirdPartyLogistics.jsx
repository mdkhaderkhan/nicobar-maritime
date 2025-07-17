import React from "react";
import { motion } from "framer-motion";
import { FaWarehouse, FaTruckMoving, FaChartLine } from "react-icons/fa";

const ThirdPartyLogistics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-slate-50 to-white py-12 px-4 sm:px-8 lg:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-14"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
          Third-Party Logistics (3PL) Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          End-to-end warehousing, transportation, and distribution support for scalable and efficient supply chains.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16 flex justify-center"
      >
        <img
          src="https://images.unsplash.com/photo-1591375277756-81e186127c9b"
          alt="3PL logistics"
          className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-cover"
        />
      </motion.div>

      {/* Feature Steps */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-10">
        <StepFeature
          icon={<FaWarehouse size={28} />}
          title="Warehousing & Fulfillment"
          desc="Scalable warehouse solutions with order picking, packing, and inventory tracking."
        />
        <StepFeature
          icon={<FaTruckMoving size={28} />}
          title="Transport & Last-Mile"
          desc="Seamless transportation and timely last-mile delivery using trusted carriers."
        />
        <StepFeature
          icon={<FaChartLine size={28} />}
          title="Analytics & Optimization"
          desc="Supply chain visibility, real-time performance metrics, and process improvement."
        />
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-slate-700 mb-3">
          Let's Optimize Your Supply Chain
        </h2>
        <p className="text-gray-600 mb-6">
          From inventory management to final delivery, we’ve got your logistics covered.
        </p>
        <a
          href="/contact"
          className="inline-block bg-slate-800 text-white px-6 py-3 rounded-xl text-lg hover:bg-slate-700 transition"
        >
          Schedule a Consultation
        </a>
      </motion.div>
    </div>
  );
};

const StepFeature = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="flex items-start gap-4 border-l-4 border-slate-600 pl-6 py-4 bg-white rounded-xl shadow-sm"
  >
    <div className="text-slate-700 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-1">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  </motion.div>
);

export default ThirdPartyLogistics;
