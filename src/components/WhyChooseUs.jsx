import React from 'react';
import { Row, Col } from 'react-bootstrap';

const reasons = [
  { icon: '⚡', title: 'Fast Payouts', desc:'Lightning-fast performance with 99.9% uptime and responsive customer support.'},
  { icon: '🔒', title: 'Secure Process', desc:'Your data and transactions are protected with industry-standard encryption.' },
  { icon: '💸', title: 'Best Market Prices', desc:'Get top-tier service without breaking the bank — plans that fit every budget' },
];

const WhyChooseUs = () => (
  <div className="text-center mt-5">
    <h2>Why Choose Us</h2>
    <Row>
      {reasons.map((reason, idx) => (
        <Col key={idx} className="p-4">
          <div style={{ fontSize: '2rem' }}>{reason.icon}</div>
          <h6>{reason.title}</h6>
          <p>{reason.desc}.</p>
        </Col>
      ))}
    </Row>
  </div>
);

export default WhyChooseUs;