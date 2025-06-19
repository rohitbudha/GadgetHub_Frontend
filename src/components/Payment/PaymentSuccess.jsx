
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1 style={{ color: 'green' }}>Payment Successful 🎉</h1>
      <p>Your order has been placed successfully.</p>
      <button onClick={handleGoHome} style={{ marginTop: '1rem' }}>
        Go to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
