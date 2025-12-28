import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const baseStyles = 'bg-background-secondary border border-border rounded-lg p-6 transition-all duration-200';
  const hoverStyles = hover ? 'hover:shadow-lg hover:border-accent' : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

