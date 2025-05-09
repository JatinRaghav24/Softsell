import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const steps = [
  { icon: '⬆️', label: 'Upload License' },
  { icon: '📈', label: 'Get Valuation' },
  { icon: '💰', label: 'Get Paid' },
];

const HowItWorks = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
  

  <div className="text-center mt-5">
    <h2>How It Works</h2>
    <Row>
      {steps.map((step, index) => (
        <Col key={index} className="p-4">
          <div style={{ fontSize: '2rem' }}>{step.icon}</div>
          <h5>{step.label}</h5>
        </Col>
      ))}
    </Row>
  </div>
</motion.div>
);

export default HowItWorks;