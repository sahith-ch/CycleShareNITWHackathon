// src/pages/Register.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const states = [
  { "state_name": "Andaman and Nicobar Islands", "abbreviation": "AN" },
  { "state_name": "Andhra Pradesh", "abbreviation": "AP" },
  { "state_name": "Arunachal Pradesh", "abbreviation": "AR" },
  { "state_name": "Assam", "abbreviation": "AS" },
  { "state_name": "Bihar", "abbreviation": "BR" },
  { "state_name": "Chandigarh", "abbreviation": "CH" },
  { "state_name": "Chhattisgarh", "abbreviation": "CG" },
  { "state_name": "Dadra and Nagar Haveli", "abbreviation": "DN" },
  { "state_name": "Daman and Diu", "abbreviation": "DD" },
  { "state_name": "Delhi", "abbreviation": "DL" },
  { "state_name": "Goa", "abbreviation": "GA" },
  { "state_name": "Gujarat", "abbreviation": "GJ" },
  { "state_name": "Haryana", "abbreviation": "HR" },
  { "state_name": "Himachal Pradesh", "abbreviation": "HP" },
  { "state_name": "Jammu and Kashmir", "abbreviation": "JK" },
  { "state_name": "Jharkhand", "abbreviation": "JH" },
  { "state_name": "Karnataka", "abbreviation": "KA" },
  { "state_name": "Kerala", "abbreviation": "KL" },
  { "state_name": "Madhya Pradesh", "abbreviation": "MP" },
  { "state_name": "Maharashtra", "abbreviation": "MH" },
  { "state_name": "Manipur", "abbreviation": "MN" },
  { "state_name": "Meghalaya", "abbreviation": "ML" },
  { "state_name": "Mizoram", "abbreviation": "MZ" },
  { "state_name": "Nagaland", "abbreviation": "NL" },
  { "state_name": "Odisha", "abbreviation": "OR" },
  { "state_name": "Puducherry", "abbreviation": "PY" },
  { "state_name": "Punjab", "abbreviation": "WB" }
];

const colleges = [
  { college_name: "Indian Institute of Technology, Delhi", abbreviation: "IITD" },
  { college_name: "Indian Institute of Technology, Bombay", abbreviation: "IITB" },
  { college_name: "University of Delhi", abbreviation: "UD" },
  { college_name: "Banaras Hindu University", abbreviation: "BHU" },
  { college_name: "Jawaharlal Nehru University", abbreviation: "JNU" },
];

function Register() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');
  const navigate = useNavigate();

  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleCollegeChange = (e) => setSelectedCollege(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add any form submission logic, e.g., send data to the server
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="w-full max-w-md p-8 space-y-6 bg-white shadow-2xl rounded-lg"
      >
        <motion.h2
          className="text-4xl font-bold text-indigo-800 text-center mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Register
        </motion.h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-4 focus:ring-emerald-400 focus:outline-none transition-all duration-300"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            required
          />
          <motion.input
            type="email"
            placeholder="Institutional Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-4 focus:ring-emerald-400 focus:outline-none transition-all duration-300"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            required
          />
          <motion.input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-4 focus:ring-emerald-400 focus:outline-none transition-all duration-300"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            required
          />
          <motion.select
            value={selectedState}
            onChange={handleStateChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-4 focus:ring-emerald-400 focus:outline-none transition-all duration-300"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.0 }}
            required
          >
            <option value="" disabled>Select State</option>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.state_name}
              </option>
            ))}
          </motion.select>
          <motion.select
            value={selectedCollege}
            onChange={handleCollegeChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-4 focus:ring-emerald-400 focus:outline-none transition-all duration-300"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
            required
          >
            <option value="" disabled>Select College</option>
            {colleges.map((college) => (
              <option key={college.abbreviation} value={college.abbreviation}>
                {college.college_name}
              </option>
            ))}
          </motion.select>
          <motion.button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.4 }}
          >
            Register
          </motion.button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:text-indigo-500 underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default Register;