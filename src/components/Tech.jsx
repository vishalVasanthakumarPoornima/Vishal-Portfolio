import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    // Apply GSAP animation when the component mounts
    gsap.fromTo(
      ".tech-icon", 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1, // Stagger each element by 0.1 seconds
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", // The wrapper element that contains the images
          start: "top bottom", // Start when the top of the trigger hits the bottom of the viewport
          end: "bottom top", // End when the bottom of the trigger hits the top of the viewport
          scrub: true, // Adds scrub effect
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
