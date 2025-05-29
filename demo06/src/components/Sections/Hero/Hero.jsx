"use client";

import { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Gender Healthcare Service",
      description:
        "Professional healthcare services for sexual and reproductive health. Get expert consultation, testing, and support in a confidential and comfortable environment.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "Expert Care For You",
      description:
        "Our team of specialists is dedicated to providing personalized care for all your healthcare needs.",
      image: "/placeholder.svg?height=600&width=1200",
    },
    {
      title: "Modern Facilities",
      description:
        "State-of-the-art equipment and comfortable facilities to ensure the best care possible.",
      image: "/placeholder.svg?height=600&width=1200",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="container">
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <button className="btn btn-hero">Get Started</button>
              </div>
            </div>
          </div>
        ))}

        <button
          className="slider-nav prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className="slider-nav next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
