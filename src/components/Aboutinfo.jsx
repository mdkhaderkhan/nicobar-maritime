// src/components/Abc.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Aboutinfo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#dbeafe] via-[#e0f2fe] to-white text-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-5xl text-white px-3  rounded-lg shadow transition duration-200"
          >
            ← 
          </button>
        </motion.div>

        {/* Section Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#174f67]">About Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Bridging seas with trust, innovation, and excellence in maritime operations.
          </p>
        </motion.div>

        {/* Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img
              src="/nicobar.png"
              alt="About Nicobar Maritime"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold text-[#35708a] mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At Nicobar Maritime, we provide world-class shipping, logistics, and marine services.
              Our mission is to connect the globe with sustainable, reliable, and innovative maritime solutions.
            </p>

            <h3 className="text-3xl font-semibold text-[#35708a] mt-8 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a global maritime leader that delivers excellence while upholding integrity and care for the environment.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-center text-[#174f67] mb-10">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Integrity', 'Safety First', 'Innovation', 'Customer Focus', 'Teamwork', 'Sustainability'].map((value, idx) => (
              <motion.div
                key={value}
                className="bg-white rounded-lg shadow-md p-6 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-[#35708a] mb-2">{value}</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec velit vel dolor dictum.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Aboutinfo;




