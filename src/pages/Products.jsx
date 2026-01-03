import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COLLECTIONS } from "../data/products";
import "../styles/products.css";
import ProdHero from "../assets/prod.png";

export default function Products() {
  // Helper to determine initial count based on screen width
  const getInitialCount = () => (window.innerWidth >= 1024 ? 8 : 6);

  const [search, setSearch] = useState("");
  const [activeCollections, setActiveCollections] = useState([]);
  const [visibleCount, setVisibleCount] = useState(getInitialCount);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Flatten products
  const allProducts = useMemo(() => {
    return Object.entries(COLLECTIONS).flatMap(([slug, collection]) =>
      collection.products.map((product) => ({
        ...product,
        collection: collection.title,
        collectionSlug: slug,
      }))
    );
  }, []);

  // Derived lists for carousels
  const trendingProducts = useMemo(() => allProducts.slice(0, 4), [allProducts]);
  const newArrivals = useMemo(() => allProducts.slice(4, 8), [allProducts]);

  // Filter logic
  const filteredProducts = useMemo(() => {
    const searchLower = search.toLowerCase();
    return allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchLower) ||
        product.detail.toLowerCase().includes(searchLower) ||
        product.collection.toLowerCase().includes(searchLower);

      const matchesCollection =
        activeCollections.length === 0 ||
        activeCollections.includes(product.collectionSlug);

      return matchesSearch && matchesCollection;
    });
  }, [search, activeCollections, allProducts]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(getInitialCount());
  }, [search, activeCollections]);

  const toggleCollection = (slug) => {
    setActiveCollections((prev) =>
      prev.includes(slug)
        ? prev.filter((c) => c !== slug)
        : [...prev, slug]
    );
  };

  return (
    <main className="products-page">

      {/* ===== HERO ===== */}
      <section className="products-hero">
        <img src={ProdHero} alt="Products" className="products-hero-bg" />
        <div className="products-hero-overlay" />
        <motion.div
          className="products-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="products-kicker">PRODUCTS</span>
          <h1>Explore every piece, at your own pace.</h1>
        </motion.div>
      </section>

      {/* ===== TRENDING ===== */}
      {trendingProducts.length > 0 && (
        <ProductCarousel title="Trending" products={trendingProducts} onProductClick={setSelectedProduct} />
      )}

      {/* ===== SEARCH & FILTER ===== */}
      <section className="products-search">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name, collection, or feeling…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>

        <div className="products-filters">
          {Object.entries(COLLECTIONS).map(([slug, collection]) => (
            <button
              key={slug}
              className={`filter-pill ${
                activeCollections.includes(slug) ? "active" : ""
              }`}
              onClick={() => toggleCollection(slug)}
            >
              {collection.title}
            </button>
          ))}
        </div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section className="products-grid-section">
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, visibleCount).map((product) => (
              <motion.div
                key={product.id}
                className="product-card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProduct(product)}
              >
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.collection}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="no-results">
              <p>No products found matching your search.</p>
            </div>
          )}
        </div>

        {filteredProducts.length > visibleCount && (
          <div className="view-more-container">
            <button className="view-more-btn" onClick={() => setVisibleCount((prev) => prev + 6)}>
              View More
            </button>
          </div>
        )}
      </section>

      

{/* ===== NEW ARRIVALS ===== */}
      {newArrivals.length > 0 && (
        <ProductCarousel title="New Arrivals" products={newArrivals} onProductClick={setSelectedProduct} />
      )}

      {/* ===== PRODUCT MODAL ===== */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="product-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="product-modal-content"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="product-modal-close" onClick={() => setSelectedProduct(null)}>
                &times;
              </button>
              <div className="product-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="product-modal-info">
                <h3>{selectedProduct.name}</h3>
                <p className="modal-detail">{selectedProduct.detail}</p>
                <p className="modal-description">
                  This piece exemplifies the {selectedProduct.collection} collection's commitment to{" "}
                  {COLLECTIONS[selectedProduct.collectionSlug]?.subtitle.toLowerCase() || "timeless elegance"}.
                  Meticulously crafted to capture light and movement, it stands as a testament to our heritage.
                </p>
                <button className="modal-enquire-btn">Enquire Now</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}

function ProductCarousel({ title, products, onProductClick }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for "infinite" feel
  const displayProducts = [...products, ...products, ...products, ...products];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 332; // card width (300) + gap (32)
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="products-carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <h2>{title}</h2>
      <div className="carousel-wrapper">
        <button className="carousel-btn left" onClick={() => scroll("left")}>&larr;</button>
        <div className="carousel-track" ref={scrollRef}>
          {displayProducts.map((product, index) => (
            <motion.div
              key={`${product.id}-${index}`}
              className="carousel-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              onClick={() => onProductClick && onProductClick(product)}
            >
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.collection}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="carousel-btn right" onClick={() => scroll("right")}>&rarr;</button>
      </div>
    </section>
  );
}
