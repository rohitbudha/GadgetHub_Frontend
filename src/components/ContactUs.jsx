import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-10 pb-20">
      <div className="container mx-auto px-4 max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Us</h1>

        <p className="text-center text-gray-600 mb-8">
          Got a question, feedback, or business inquiry? We'd love to hear from you.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Subject"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600">
          Or reach us at: <span className="font-medium text-blue-600">support@gadgethub.com</span>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto mt-12 px-4 max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h2>
        <div className="rounded-lg overflow-hidden shadow-md h-64">
          <iframe
            title="GadgetHub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.013218709957!2d85.316066!3d27.717245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197c3eb9e65d%3A0x98fa69f70b4701d6!2sNew%20Road%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1719652940000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
