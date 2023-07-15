import React from 'react'
import { motion } from 'framer-motion';

export const DropdownMenu = ({subcategories, topPosition}) => {
  return (
    <motion.div
      // initial={{ opacity: 1, x: "100%" }}
      // animate={{ opacity: 1, x: 100 }}
      // transition={{ duration: 0.3 }}
      style={{backgroundColor: "yellowgreen", position: "absolute", top: topPosition - 137, left: "100%", padding: "20px"}}
    >
      {subcategories.map((subcategory, index) => (
        <div key={index}>{subcategory}</div>
      ))}
    </motion.div>
  );
}
