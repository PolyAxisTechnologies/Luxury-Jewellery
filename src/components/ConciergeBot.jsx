import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { conciergeFlows } from "../data/conciergeFlows";
import { getRecommendations } from "../data/conciergeRecommendations";
import "../styles/concierge.css";
import ConciergeAvatar from "../assets/concierge-avatar.png";

export default function ConciergeBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("start");
  const [history, setHistory] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show after 2 seconds
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 2000);

    // Hide after 30 seconds of visibility (32 seconds total)
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 32000);

    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  const flow = conciergeFlows[step];

  const handleOption = (option) => {
    if (option.recommend) {
      const recs = getRecommendations(option.recommend);
      setRecommendations(recs);
      return;
    }

    if (option.redirect) {
      navigate(option.redirect);
      resetConcierge();
      return;
    }

    if (option.next) {
      setHistory((prev) => [...prev, step]);
      setRecommendations([]);
      setStep(option.next);
    }
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prevStep = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setStep(prevStep);
    setRecommendations([]);
  };

  const resetConcierge = () => {
    setOpen(false);
    setStep("start");
    setHistory([]);
    setRecommendations([]);
  };

  return (
    <>
      {/* Tooltip Greeting */}
      {showTooltip && !open && (
        <div className="concierge-tooltip">
          <button
            className="tooltip-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
          >
            ×
          </button>
          Hi, I am your personal jewellery concierge.
        </div>
      )}

      {/* Floating Button */}
      <button
        className="concierge-button"
        onClick={() => { setOpen(true); setShowTooltip(false); }}
      >
        <img src={ConciergeAvatar} alt="Concierge" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="concierge-window">
          <div className="concierge-header">
            <div className="header-left">
              {history.length > 0 && (
                <button className="back-btn" onClick={handleBack}>←</button>
              )}
              <span>Concierge</span>
            </div>
            <button onClick={resetConcierge}>✕</button>
          </div>

          <div className="concierge-body">
            <div className="bot-message">{flow.message}</div>

            {/* OPTIONS */}
            {flow.options && (
              <div className="quick-actions">
                {flow.options.map((opt, i) => (
                  <button key={i} onClick={() => handleOption(opt)}>
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* RECOMMENDATIONS */}
            {recommendations.length > 0 && (
              <div className="concierge-recommendations">
                {recommendations.map((product) => (
                  <div
                    key={product.id}
                    className="recommendation-card"
                    onClick={() => {
                      if (product.collectionSlug) {
                        navigate(`/collections/${product.collectionSlug}`);
                      } else {
                        navigate('/products');
                      }
                      resetConcierge();
                    }}
                  >
                    <img src={product.image} alt={product.name} />
                    <div>
                      <h4>{product.name}</h4>
                      <span>{product.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* END */}
            {flow.end && (
              <button
                className="concierge-reset"
                onClick={() => setStep("start")}
              >
                Start again
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
