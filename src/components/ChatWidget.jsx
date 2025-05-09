import React, { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

const mockResponses = {
  'How do I sell my license?': 'To sell your license, upload your details and we’ll provide a valuation instantly.',
  'What types of licenses are accepted?': 'We accept Microsoft, Adobe, and many more popular software licenses.',
};

const ChatWidget = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => setChatOpen(!chatOpen);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    const responseText = mockResponses[input] || 'Sorry, I didn’t understand that. Please try a different question.';
    const botMessage = { sender: 'bot', text: responseText };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 9999 }}>
      {chatOpen && (
        <Card style={{ width: '300px', padding: '1rem' }}>
          <Card.Body>
            <Card.Title>Ask SoftSell AI</Card.Title>
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '5px 0' }}>
                  <span><strong>{msg.sender === 'user' ? 'You' : 'AI'}:</strong> {msg.text}</span>
                </div>
              ))}
            </div>
            <Form.Control
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button className="mt-2" onClick={sendMessage}>Send</Button>
          </Card.Body>
        </Card>
      )}
      <Button onClick={toggleChat}>{chatOpen ? 'Close Chat' : 'Chat with AI'}</Button>
    </div>
  );
};

export default ChatWidget;