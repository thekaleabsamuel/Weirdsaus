import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white text-center">
      <motion.h1 
        className="fw-bold"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Weird <motion.span 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >Sauce</motion.span>
      </motion.h1>
      
      <motion.input
        type="email"
        className="form-control mt-3 w-50 text-center"
        placeholder="Enter your email for updates"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }} // Adding a slight delay for input
      />
      
      <motion.button
        className="btn btn-dark mt-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.75 }} // Adding a delay for the button
      >
        Submit
      </motion.button>
    </div>
  );
};

export default Landing;