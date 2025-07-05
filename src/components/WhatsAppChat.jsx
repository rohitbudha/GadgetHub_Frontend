import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChat = () => {
  return (
    <a
      href="https://wa.me/9779876543210" 
      className="fixed bottom-5 right-5 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <FaWhatsapp size={28} color="white" />
      </div>
    </a>
  );
};

export default WhatsAppChat;
