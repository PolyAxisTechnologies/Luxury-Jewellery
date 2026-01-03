"use client";

import { motion } from "framer-motion";
import "../styles/about.css";

import goldTexture from "../assets/about/gold-texture.png";
import craftHands from "../assets/about/craft-hands.png";
import inspiration from "../assets/inspire.png";

export default function About() {
  return (
    <main className="about-page">

      {/* ===== ABOUT HERO ===== */}
      <section className="about-hero">
        <img
          src={goldTexture}
          alt="Abstract gold texture"
          className="about-hero-bg"
        />

        <div className="about-hero-overlay" />

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="about-kicker">ABOUT US</span>

          <h1>
            Jewellery shaped by time, hands and intention.
          </h1>
        </motion.div>
      </section>

      {/* NEXT SECTIONS WILL FOLLOW HERE */}
      {/* ===== THE BEGINNING ===== */}
        <section className="about-beginning">
        <motion.div
            className="about-beginning-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Image Side */}
            <div className="about-beginning-image">
              <div className="image-frame-gold">
                <img src={inspiration} alt="Sketching jewellery designs" />
              </div>
            </div>

            {/* Text Side */}
            <div className="about-beginning-text">
              <h2 className="section-title-gold">The Genesis</h2>
              <p className="drop-cap">
                Every creation begins long before it becomes jewellery.
                It begins with patience. With hands trained by time, not trends.
                With a belief that true beauty is never rushed.
              </p>

              <p>
                What we create is not meant for moments alone,
                but for lifetimes. It is a silent promise between the maker
                and the wearer—a bond forged in gold.
              </p>
            </div>
        </motion.div>
        </section>

        {/* ===== THE HANDS BEHIND THE CRAFT ===== */}
        <section className="about-craft">
        <div className="about-craft-inner">

            <motion.div
            className="about-craft-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <h2 className="section-title-gold">The Artisan's Touch</h2>
            <p className="drop-cap">Behind every piece lies a pair of hands.</p>

            <p>
                Hands that understand balance.<br />
                That know when to shape, when to wait.<br />
                When to stop.
            </p>

            <p>
                Each movement is deliberate.<br />
                Each detail, a quiet decision.
            </p>

            <p>This is where jewellery becomes personal.</p>
            </motion.div>

            <motion.div
            className="about-craft-image"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <div className="image-frame-gold">
                <img
                    src={craftHands}
                    alt="Artisan hands crafting jewellery"
                />
            </div>
            </motion.div>

        </div>
        </section>

        {/* ===== MATERIALS WITH MEANING ===== */}
        <section className="about-materials">
        <motion.h2 
          className="section-title-gold" 
          style={{ textAlign: "center", marginBottom: "4rem" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Materials with Meaning
        </motion.h2>

        <div className="about-materials-inner">

            <motion.div
            className="material-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <div className="material-number">01</div>
            <div className="about-decor">✦</div>
            <h3>Gold</h3>
            <p>
                Chosen not for its shine alone,<br />
                but for its permanence.
            </p>
            <div className="about-decor">✦</div>
            </motion.div>

            <motion.div
            className="material-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <div className="material-number">02</div>
            <div className="about-decor">✦</div>
            <h3>Design</h3>
            <p>
                Refined through restraint.<br />
                Nothing added without reason.
            </p>
            <div className="about-decor">✦</div>
            </motion.div>

            <motion.div
            className="material-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            >
            <div className="material-number">03</div>
            <div className="about-decor">✦</div>
            <h3>Time</h3>
            <p>
                Never rushed.<br />
                Because meaning cannot be hurried.
            </p>
            <div className="about-decor">✦</div>
            </motion.div>

        </div>
        </section>

        {/* ===== CLOSING FRAME ===== */}
<section className="about-closing">
  <img
    src={goldTexture}
    alt="Abstract gold texture"
    className="about-closing-bg"
  />
  <div className="about-hero-overlay" />

  <motion.div
    className="about-closing-inner"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <span className="closing-divider" />

    <h2>
      Crafted to be held close.<br />
      And never forgotten.
    </h2>

    <p className="closing-signature">— Ivory &amp; Gold</p>
  </motion.div>
</section>



    </main>
  );
}
