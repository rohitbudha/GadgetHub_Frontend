import React from "react";


const AboutUs = () => {
  return (
    <div className="p-6 md:p-12 bg-white text-gray-800 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-blue-600">
        About GadgetHub
      </h1>

      <p className="mb-6 text-lg leading-relaxed text-justify">
        GadgetHub is a one-stop online marketplace designed for tech enthusiasts
        and everyday users to explore, purchase, and learn about the latest
        electronic gadgets. From smartphones and smartwatches to gaming consoles
        and home automation tools, we bring innovation to your fingertips.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Our Mission</h2>
      <p className="mb-6 text-justify">
        At GadgetHub, our mission is to deliver high-quality, affordable, and
        cutting-edge technology to customers across Nepal and beyond. We aim to
        make gadgets more accessible through an intuitive shopping experience,
        trusted partnerships, and reliable customer service.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Why Choose Us?</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>✅ Wide range of tech products from top brands</li>
        <li>✅ Fast and secure checkout system</li>
        <li>✅ Verified customer reviews and ratings</li>
        <li>✅ Competitive pricing and exclusive offers</li>
        <li>✅ Reliable delivery and support team</li>
      </ul>

      <div className="mt-10 text-center">
        <p className="text-lg font-medium">
          Join thousands of happy customers and start your smart shopping
          journey with <span className="text-blue-600 font-bold">GadgetHub</span> today!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
