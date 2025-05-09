import React from 'react';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Hero = ({ darkMode }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>

  <div className={`text-center p-5 hero-section`}>
    <h1>Sell Your Unused Software Licenses</h1>
    <p>Turn idle assets into instant cash – it's fast and hassle-free!</p>
    <Button variant="primary">Sell My Licenses</Button>
  </div>
</motion.div>
);

export default Hero;