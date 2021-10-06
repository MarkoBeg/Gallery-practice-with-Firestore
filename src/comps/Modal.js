import React from "react";
import { motion } from "framer-motion";

export default function Modal({ selectedImg, setSelectedImg }) {
  const handleClose = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="large picture"
        initial={{ y: "-50vh" }}
        animate={{ y: 0 }}
      ></motion.img>
      ;
    </motion.div>
  );
}
