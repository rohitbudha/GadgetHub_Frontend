import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './components/Cart/CartContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <GoogleOAuthProvider clientId="464942419348-lq79h48j69qr3bau8n4vvnmqnqf0rh7v.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
    </CartProvider>
  </React.StrictMode>
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
