import React from 'react'
import { motion } from 'framer-motion';

export const DropdownMenu = ({subcategories}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {subcategories.map((subcategory, index) => (
        <div key={index}>{subcategory}</div>
      ))}
    </motion.div>
  );
}
