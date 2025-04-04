import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container text-center text-md-start">
        <div className="row mt-3">

         
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">GadgetHub</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <p>
              Providing quality services and products to customers with dedication and excellence.
            </p>
          </div>

         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Links</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <p><a href="#!" className="text-white text-decoration-none">Home</a></p>
            <p><a href="#!" className="text-white text-decoration-none">About</a></p>
            <p><a href="#!" className="text-white text-decoration-none">Services</a></p>
            <p><a href="#!" className="text-white text-decoration-none">Contact</a></p>
          </div>

          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-2 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
            <p><i className="fas fa-home me-2"></i> Kathmandu, Nepal</p>
            <p><i className="fas fa-envelope me-2"></i> info@gadgethub.com</p>
            <p><i className="fas fa-phone me-2"></i> +977 9800000000</p>
          </div>
        </div>

        
        <div className="text-center mt-4">
          <h6 className="fw-bold">Follow us on</h6>
          <div className="mt-2">
       <a href="#!" className="text-white mx-2 fs-5"><i className="fab fa-facebook-f"></i></a>
      <a href="#!" className="text-white mx-2 fs-5"><i className="fab fa-twitter"></i></a>
      <a href="#!" className="text-white mx-2 fs-5"><i className="fab fa-instagram"></i></a>
      <a href="#!" className="text-white mx-2 fs-5"><i className="fab fa-tiktok"></i></a>
     <a href="#!" className="text-white mx-2 fs-5"><i className="fab fa-linkedin-in"></i></a>
    <a href="#!" className="text-white mx-2 fs-5"><i className="fab fa-github"></i></a>
      </div>

        </div>
      </div>

    
      <div className="text-center p-3 mt-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        © {new Date().getFullYear()} GadgetHub. All rights reserved.
      </div>
    </footer>
  );
}
