import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contactus = () => {
  const [info,Setinfo]=useState({
    name:"",
    mail:"",
    subject:"",
    message:""
  })
  const oninputchange=(evt)=>{
      const newinfo=
         { ...info, [evt.target.value]: evt.target.value }
      Setinfo(newinfo);
  }
const onsubmit=(e)=>{
 e.preventDefault();
console.log(info);

}
  return (
    <div className="bg-[#f8fafc] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you! Fill out the form and our team will get back to you soon.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
            onChange={oninputchange}
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
             onChange={oninputchange}
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
           onChange={oninputchange}
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
           onChange={oninputchange}
            rows="5"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <motion.button
          onClick={onsubmit}
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contactus;
