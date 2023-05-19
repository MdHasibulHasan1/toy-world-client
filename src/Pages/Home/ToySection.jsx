import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ToySection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
      once: true, // Animation will only occur once
    });
  }, []);

  return (
    <section className="toy-section">
      <div className="container">
        <div
          className="toy-item"
          data-aos="fade-up" // Specify the animation type
          data-aos-offset="200" // Offset (in pixels) from the original position
        >
          <h2>Featured Toy</h2>
          <img
            src="https://i.ibb.co/Sn3M9Vb/hipkids-white-ride-on-walking-toy-horse-unicorn-large-28420887380102-1000x-2x.jpg"
            alt="Featured Toy"
          />
          <p>Check out our amazing featured toy!</p>
        </div>
      </div>
    </section>
  );
};

export default ToySection;
