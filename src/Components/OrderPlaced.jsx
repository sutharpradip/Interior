import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const OrderPlaced = () => {
  const navigate = useNavigate();

  //   useEffect(() => {
  //     const timer = setTimeout(() => navigate("/shop"), 4000);
  //     return () => clearTimeout(timer);
  //   }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="bg-white p-8 rounded-2xl shadow-lg text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.1 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center justify-center mb-4"
        >
          <CheckCircle className="text-green-500 w-16 h-16" />
        </motion.div>

        <h2 className="text-2xl font-bold text-[rgb(59,93,80)]">
          Order Placed!
        </h2>
        <p className="text-gray-600 mt-2">Thank you for your purchase.</p>

        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/shop")}
            className="mt-6 bg-[rgb(59,93,80)] text-white py-2 px-6 rounded-lg"
          >
            Back to Shop
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/")}
            className="mt-6 border border-[rgb(59,93,80)] text-green-950 py-2 px-6 rounded-lg"
          >
            Back to Home
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderPlaced;
