import jewelleryHero from "../assets/jewellery-hero.png";
import "../styles/hero.css";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
      style={{
        backgroundImage: `url(${jewelleryHero})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Left blend overlay */}
      <div className="absolute inset-0 hero-left-blend" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.85)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen justify-center px-6">
        <div className="hero-content hero-animate max-w-4xl">

          <p className="hero-eyebrow">Fine Handcrafted Jewellery</p>

          <div className="hero-text">
  <h1 className="hero-title">
    Where Luxury Meets
    <span>Timeless Craftsmanship</span>
  </h1>

  <p className="hero-subtext">
    Crafted with intention, Designed to endure beyond time.
  </p>
</div>


          <div className="hero-actions">
            <button className="hero-btn-primary">
              Explore Collection
            </button>
            <button className="hero-btn-secondary">
              Get in Touch
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
