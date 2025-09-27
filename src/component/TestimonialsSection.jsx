import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



const Testimonials = () => {

   const testimonials = [
    { text: "The courses at IELTS Institute helped me achieve my dream career in tech.", author: "Jessica Brown" },
    { text: "Excellent faculty and practical learning experience. Highly recommended!", author: "Michael Lee" },
    { text: "I improved my IELTS score dramatically thanks to the expert guidance.", author: "Emma Wilson" },
    { text: "The learning environment and resources are top-notch.", author: "Daniel Smith" },
    { text: "Very supportive faculty who truly care about student success.", author: "Sophia Johnson" },
    { text: "Practical exercises and mock tests helped me feel confident.", author: "Liam Brown" },
    { text: "Flexible schedules and interactive sessions made learning enjoyable.", author: "Olivia Davis" },
    { text: "I highly recommend IELTS Institute to anyone serious about their career.", author: "Noah Miller" },
  ];

    const [currentIndex, setCurrentIndex] = useState(0);
  const visible = 3;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
   <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-slider">
        <div className="testimonial-track" style={{ transform: `translateX(-${(currentIndex * 100) / visible}%)` }}>
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p>"{t.text}"</p>
              <span>- {t.author}, Alumni</span>
            </div>
          ))}
        </div>
        <div className="testimonial-controls">
          <button onClick={prevSlide}><FaChevronLeft /></button>
          <button onClick={nextSlide}><FaChevronRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
