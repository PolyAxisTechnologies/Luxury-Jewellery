import { motion } from "framer-motion";
import "../styles/collections.css";
import HeroMacro from "../assets/collections/hero-macro.png";
import Heritage from "../assets/collections/heritage.png";
import Minimal from "../assets/collections/minimal.png";
import Signature from "../assets/collections/signature.png";
import Modern from "../assets/collections/modern.png";
import Bridal from "../assets/collections/bridal.png";
import { useNavigate } from "react-router-dom";

export default function Collections() {
    const collections = [
  {
    title: "Heritage",
    subtitle: "Rooted in tradition",
    image: Heritage,
    size: "small",
  },
  {
    title: "Minimal",
    subtitle: "Quiet refinement",
    image: Minimal,
    size: "small",
  },
  {
    title: "Signature",
    subtitle: "The essence of our craft",
    image: Signature,
    size: "large",
  },
  {
    title: "Modern",
    subtitle: "Contemporary expressions",
    image: Modern,
    size: "small",
  },
  {
    title: "Bridal",
    subtitle: "Moments made eternal",
    image: Bridal,
    size: "small",
  },
];
  const navigate = useNavigate();


  return (
    <main className="collections-page">

      {/* ===== COLLECTIONS HERO ===== */}
      <section className="collections-hero">
        <img
          src={HeroMacro}
          alt="Jewellery macro detail"
          className="collections-hero-bg"
        />

        <div className="collections-hero-overlay" />

        <motion.div
          className="collections-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="collections-kicker">COLLECTIONS</span>
          <h1>Each piece belongs to a story.</h1>
        </motion.div>
      </section>

      {/* ===== COLLECTIONS GRID ===== */}
<section className="collections-grid-section">
  <div className="collections-grid">
    {collections.map((item, index) => (
      <motion.div
        key={index}
        className={`collection-tile ${item.size}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: index * 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        onClick={() => navigate(`/collections/${item.title.toLowerCase()}`)}
      >
        <img src={item.image} alt={item.title} />

        <div className="collection-overlay">
          <h3>{item.title}</h3>
          <span>{item.subtitle}</span>
        </div>
      </motion.div>
    ))}
  </div>
</section>
{/* ===== COLLECTIONS CLOSING ===== */}
<section className="collections-closing">
  <img
    src={HeroMacro}
    alt="Jewellery macro detail"
    className="collections-closing-bg"
  />

  <div className="collections-hero-overlay" />

  <motion.div
    className="collections-closing-content"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <p>
      Each collection is a chapter.<br />
      Some are yet to be written.
    </p>
  </motion.div>
</section>


    </main>
  );
}
