import React from 'react';
import { motion } from 'framer-motion';

const Warehouse = () => {
  return (
    <div className="bg-[#f4f7fa] text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('/warehouse-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white text-center"
          >
            Warehouse & Storage Solutions
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
          <h2 className="text-3xl font-semibold mb-4">Secure and Scalable Warehousing</h2>
          <p className="text-gray-700 text-lg mb-4">
            Our warehousing services offer flexible and secure storage solutions tailored to your logistics needs. Whether you need short-term or long-term storage, our facilities are designed to handle it all.
          </p>
          <p className="text-gray-700">
            With 24/7 monitoring, climate-controlled units, and real-time inventory tracking, we ensure your goods are always safe and accessible.
          </p>
        </motion.div>
        <motion.img
          src="/warehouse-inside.jpg"
          alt="Warehouse Facility"
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
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Why Choose Our Warehouse?</h3>
          <p className="text-gray-600">
            Our strategically located warehouses and advanced logistics systems ensure seamless distribution and storage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: '24/7 Security', desc: 'Monitored facilities with real-time alerts and CCTV surveillance.' },
            { title: 'Inventory Management', desc: 'Track your stock with integrated real-time systems.' },
            { title: 'Flexible Storage Plans', desc: 'Choose from scalable options to fit your business growth.' },
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

export default Warehouse;
