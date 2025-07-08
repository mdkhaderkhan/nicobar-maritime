import React from "react";
import { motion } from "framer-motion";

const About1 = () => {
  return (
    <section
      id="Aboutus"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-[#e0f2fe] via-[#c7d2fe] to-[#fef9c3] dark:from-[#1e293b] dark:via-[#0f172a] dark:to-[#1e293b] py-20 px-4 sm:px-6 lg:px-10"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-300 rounded-full blur-[120px] opacity-30 dark:bg-blue-800"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full blur-[120px] opacity-30 dark:bg-purple-800"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-12 sm:mb-16 drop-shadow-xl"
        >
          About Us
        </motion.h1>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-14">
          {/* Images */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <motion.img
                src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-1.jpg"
                alt="about-1"
                className="rounded-2xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
              <motion.img
                src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-2.jpg"
                alt="about-2"
                className="rounded-2xl shadow-lg w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
              <motion.img
                src="https://cdn.tailgrids.com/assets/images/marketing/about/about-01/image-3.jpg"
                alt="about-3"
                className="rounded-2xl shadow-lg w-full col-span-2 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 bg-white/30 dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl px-6 py-8 sm:px-8 sm:py-10 text-gray-800 dark:text-gray-100">
            <p className="text-base sm:text-lg leading-relaxed font-medium mb-4">
              <span className="text-[#36809f] text-4xl font-semibold">N</span>
              icobar Maritime Private Limited is a Hyderabad-based global freight forwarding company founded to simplify and optimize cargo movement across borders.
            </p>
            <p className="text-sm sm:text-base mb-3">
              We offer <strong>end-to-end sea freight solutions</strong>, from documentation to customs clearance and container tracking, using a tech-driven, customer-first approach.
            </p>

            <div className="mt-4 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold"> Mission</h2>
              <p className="text-sm sm:text-base">
                Deliver seamless, efficient, and reliable global freight solutions through industry expertise and innovative technologies — ensuring precision, transparency, and trust.
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold"> Vision</h2>
              <p className="text-sm sm:text-base">
                To become a globally recognized freight forwarding brand known for excellence in operations, innovation, and customer-focused logistics.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#35708a] mb-3">
                Why Choose Us
              </h3>
              <ul className="space-y-4 text-sm sm:text-base">
                <li>
                  <strong>🚢 Sea Freight Expertise:</strong> Reliable, precise, and compliant international cargo handling.
                </li>
                <li>
                  <strong>🌍 Global Network:</strong> Trusted partnerships ensuring cross-border efficiency.
                </li>
                <li>
                  <strong>📋 End-to-End Services:</strong> One-stop solutions from documentation to container tracking.
                </li>
                <li>
                  <strong>💼 Skilled Team:</strong> A blend of logistics, IT, and business professionals driving results.
                </li>
              </ul>
            </div>

            <div className="mt-6 text-center sm:text-left">
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold shadow-md transition duration-300"
              >
                🚀 Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;



