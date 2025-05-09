import React from 'react';
import { CardGroup, Card } from 'react-bootstrap';

const testimonials = [
  {
    text: 'Absolutely thrilled with the service from start to finish. The team understood my requirements clearly and delivered even more than I expected. Communication was smooth, and the final output was nothing short of amazing. I will definitely be coming back again!',
    name: 'John Doe',
    role: 'IT Manager, TechCorp',
  },
  {
    text: 'Working with this team was a game-changer for our business. Their professionalism, creative insights, and timely delivery helped us launch a crucial product feature right on schedule. Highly recommended for anyone looking for quality and reliability.',
    name: 'Jane Smith',
    role: 'CTO, SoftSolutions',
  },
];

const Testimonials = () => (
  <div className="text-center mt-5">
    <h2>Customer Testimonials</h2>
    <CardGroup>
      {testimonials.map((t, i) => (
        <Card key={i} className="m-3">
          <Card.Body>
            <Card.Text>"{t.text}"</Card.Text>
            <Card.Subtitle>{t.name} – {t.role}</Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  </div>
);

export default Testimonials;