import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { COLLECTIONS } from "../data/products";
import "../styles/collections.css";

export default function CollectionDetail() {
  const { slug } = useParams();
  const collection = COLLECTIONS[slug];
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (!collection) return null;

  return (
    <main>

      {/* ===== HERO ===== */}
      <section className="collection-detail-hero">
        <img
          src={collection.heroImage}
          alt={collection.title}
          className="collection-detail-bg"
        />
        <div className="collection-detail-overlay" />

        <motion.div
          className="collection-detail-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="collection-detail-kicker">
            The {collection.title} Collection
          </span>
          <h1>{collection.title}</h1>
          <p className="collection-detail-subtitle">{collection.subtitle}</p>
          <p className="collection-detail-description">
            {collection.description}
          </p>
        </motion.div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="collection-products">
        <div className="collection-products-grid">
          {collection.products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
                  This piece exemplifies the {collection.title} collection's commitment to {collection.subtitle.toLowerCase()}. 
                  Meticulously crafted to capture light and movement, it stands as a testament to timeless elegance.
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
