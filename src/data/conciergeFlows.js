export const conciergeFlows = {
  start: {
    message: "Welcome. How may I assist you today?",
    options: [
      { label: "Find a piece", next: "find_piece" },
      { label: "Explore collections", next: "explore_collections" },
      { label: "Styling advice", next: "styling" },
      { label: "Care & craftsmanship", next: "care" },
    ],
  },

  find_piece: {
    message: "What is the occasion?",
    options: [
      { label: "Everyday wear", recommend: "everyday" },
      { label: "Wedding / Bridal", recommend: "wedding" },
      { label: "Gifting", recommend: "gift" },
    ],
  },

  explore_collections: {
    message: "Which collection would you like to explore?",
    options: [
      { label: "Heritage", redirect: "/collections/heritage" },
      { label: "Minimal", redirect: "/collections/minimal" },
      { label: "Signature", redirect: "/collections/signature" },
      { label: "Modern", redirect: "/collections/modern" },
      { label: "Bridal", redirect: "/collections/bridal" },
    ],
  },

  styling: {
    message: "Which style feels closest to you?",
    options: [
      { label: "Minimal & understated", recommend: "minimal" },
      { label: "Bold & expressive", recommend: "bold" },
      { label: "Timeless & classic", recommend: "classic" },
    ],
  },

  care: {
    message:
      "Our jewellery is crafted to endure. We recommend gentle cleaning with a soft cloth and careful storage to preserve its beauty.",
    end: true,
  },
};
