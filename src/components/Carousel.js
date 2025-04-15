import React, { useState, useEffect } from "react";

const images = [
  { src: "../../imgs/img0.webp", alt: "Earbuds", title: "Premium Earbuds", description: "Experience high-quality sound with our latest wireless earbuds. Perfect for music lovers on the go." },
  { src: "../../imgs/img2.webp", alt: "Headphones", title: "Noise-Canceling Headphones", description: "Immerse yourself in pure sound with our advanced noise-canceling headphones. Ideal for travel and work." },
  { src: "../../imgs/img3.png", alt: "Smartwatch", title: "Smartwatch Series X", description: "Stay connected and track your fitness with our latest smartwatch. A perfect blend of style and technology." }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex]);
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="relative flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img src={image.src} alt={image.alt} className="w-full h-96 object-cover" />
            {currentIndex === index && (
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white p-4 rounded-lg w-3/4 text-center">
                <h5 className="text-lg font-semibold">{image.title}</h5>
                <p className="text-sm">{image.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
        ❯
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}
