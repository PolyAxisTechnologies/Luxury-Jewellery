import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Ivory & Gold</h2>
          <p>
            Jewellery shaped by time, craft,
            <br />
            and quiet intention.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/collections">Collections</a>
            <a href="/products">Products</a>
          </div>

          <div>
            <h4>Collections</h4>
            <a href="/collections/heritage">Heritage</a>
            <a href="/collections/minimal">Minimal</a>
            <a href="/collections/signature">Signature</a>
            <a href="/collections/modern">Modern</a>
            <a href="/collections/bridal">Bridal</a>
          </div>

          <div>
            <h4>Connect</h4>
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Email</a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()}{" "}
          <a
            href="https://www.polyaxistechnologies.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            PolyAxis Technologies
          </a>
        </span>
        <span>Crafted with restraint</span>
      </div>

    </footer>
  );
}
