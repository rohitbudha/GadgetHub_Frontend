
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentFailure = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/CheckoutForm'); 
  };

  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1 style={{ color: 'red' }}>Payment Failed ❌</h1>
      <p>Something went wrong with your transaction.</p>
      <button className="btn btn-success"onClick={handleRetry} style={{ marginTop: '1rem' }}>
        Try Again
      </button>
    </div>
  );
};


export default PaymentFailure;

