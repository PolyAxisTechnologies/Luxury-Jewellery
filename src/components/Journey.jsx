import { useEffect, useRef } from "react";
import "../styles/journey.css";

import inspiration from "../assets/inspire.png";
import craftsmanship from "../assets/craft.png";
import perfection from "../assets/perfect.png";

export default function Journey() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const elements = sectionRef.current.querySelectorAll(".reveal-left, .reveal-right");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey" ref={sectionRef}>
      <div className="journey-inner">

        {/* Section title */}
        <p className="journey-eyebrow">A Journey of Happiness</p>
        <h2 className="journey-title" style={{ fontSize: "1rem" }}>
          From Our Heart to Yours
        </h2>

        {/* Top Ornament */}
        <div className="journey-ornament">
          <div className="journey-ornament-line"></div>
          <div className="journey-ornament-icon">❖</div>
          <div className="journey-ornament-line"></div>
        </div>

        {/* Step 1 */}
        <div className="journey-row">
          <div className="journey-image reveal-left">
            <div className="ornate-frame">
              <img src={inspiration} alt="Jewellery inspiration" />
            </div>
          </div>

          <div className="journey-content reveal-right">
            <div className="journey-decor">✦</div>
            <h2 className="journey-gold-title">Inspired by Moments</h2>
            <p>
              Every creation begins with an emotion — a celebration,
              a promise, or a memory waiting to take form in gold.
            </p>
            <div className="journey-decor">✦</div>

          </div>
        </div>

        {/* Middle Ornament */}
        <div className="journey-ornament">
          <div className="journey-ornament-line"></div>
          <div className="journey-ornament-icon">❖</div>
          <div className="journey-ornament-line"></div>
        </div>

        {/* Step 2 */}
        <div className="journey-row reverse">
          <div className="journey-content reveal-left">
            <div className="journey-decor">✦</div>
            <h2 className="journey-gold-title">Crafted with Devotion</h2>
            <p>
              Shaped with care and reverence, each piece reflects
              trust, purity, and the values passed through generations.
            </p>
            <div className="journey-decor">✦</div>
          </div>

          <div className="journey-image reveal-right">
            <div className="ornate-frame">
              <img src={craftsmanship} alt="Jewellery craftsmanship" />
            </div>
          </div>
        </div>

        {/* Middle Ornament */}
        <div className="journey-ornament">
          <div className="journey-ornament-line"></div>
          <div className="journey-ornament-icon">❖</div>
          <div className="journey-ornament-line"></div>
        </div>

        {/* Step 3 */}
        <div className="journey-row">
          <div className="journey-image reveal-left">
            <div className="ornate-frame">
              <img src={perfection} alt="Finished jewellery" />
            </div>
          </div>

          <div className="journey-content reveal-right">
            <div className="journey-decor">✦</div>
            <h2 className="journey-gold-title">Becomes a Part of You</h2>
            <p>
              More than jewellery, it becomes a part of your story —
              worn with pride, cherished with love, and remembered forever.
            </p>
            <div className="journey-decor">✦</div>

          </div>
        </div>

        {/* Bottom Ornament */}
        <div className="journey-ornament">
          <div className="journey-ornament-line"></div>
          <div className="journey-ornament-icon">❖</div>
          <div className="journey-ornament-line"></div>
        </div>

      </div>
    </section>
  );
}
