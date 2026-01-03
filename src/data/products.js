import HeritageImg from "../assets/collections/heritage.png";
import MinimalImg from "../assets/collections/minimal.png";
import SignatureImg from "../assets/collections/signature.png";
import ModernImg from "../assets/collections/modern.png";
import BridalImg from "../assets/collections/bridal.png";

// Product Images
import HeritageHeirloomRing from "../assets/products/heirloom-ring.png";
import HeritageLegacyPendant from "../assets/products/legacy-pendant.png";
import HeritageTraditionBangle from "../assets/products/tradition-bangle.png";
import HeritageSignetRing from "../assets/products/signet-ring.png";
import HeritageChainNecklace from "../assets/products/chain-necklace.png";

import MinimalLineRing from "../assets/products/line-ring.png";
import MinimalArcPendant from "../assets/products/arc-pendant.png";
import MinimalBarEarrings from "../assets/products/bar-earrings.png";
import MinimalCircleBracelet from "../assets/products/circle-bracelet.png";
import MinimalStudEarrings from "../assets/products/stud-earrings.png";

import SignatureRing from "../assets/products/signature-ring.png";
import SignatureCuff from "../assets/products/signature-cuff.png";
import SignatureNecklace from "../assets/products/signature-necklace.png";
import SignatureDropEarrings from "../assets/products/drop-earrings.png";
import SignatureBangle from "../assets/products/signature-bangle.png";

import ModernEdgeRing from "../assets/products/edge-ring.png";
import ModernLayerNecklace from "../assets/products/layer-necklace.png";
import ModernCuffBracelet from "../assets/products/cuff-bracelet.png";
import ModernAngularEarrings from "../assets/products/angular-earrings.png";
import ModernBandRing from "../assets/products/band-ring.png";

import BridalSolitaireRing from "../assets/products/solitaire-ring.png";
import BridalHaloRing from "../assets/products/halo-ring.png";
import BridalEternityBand from "../assets/products/eternity-band.png";
import BridalPendant from "../assets/products/bridal-pendant.png";
import BridalEarrings from "../assets/products/bridal-earrings.png";

export const COLLECTIONS = {
  heritage: {
    slug: "heritage",
    title: "Heritage",
    subtitle: "Rooted in tradition",
    description:
      "Inspired by generations of craftsmanship, Heritage reflects a quiet reverence for form, balance, and permanence.",
    heroImage: HeritageImg,
    products: [
      {
        id: "heritage-heirloom-ring",
        name: "Heirloom Ring",
        detail: "18k gold, hand-finished",
        image: HeritageHeirloomRing,
        tags: ["everyday", "gift", "classic", "trending"],
      },
      {
        id: "heritage-legacy-pendant",
        name: "Legacy Pendant",
        detail: "Soft brushed gold",
        image: HeritageLegacyPendant,
        tags: ["gift", "classic"],
      },
      {
        id: "heritage-tradition-bangle",
        name: "Tradition Bangle",
        detail: "Sculpted ceremonial form",
        image: HeritageTraditionBangle,
        tags: ["bold", "classic"],
      },
      {
        id: "heritage-signet-ring",
        name: "Signet Ring",
        detail: "Classic silhouette",
        image: HeritageSignetRing,
        tags: ["everyday", "classic", "new"],
      },
      {
        id: "heritage-chain-necklace",
        name: "Chain Necklace",
        detail: "Timeless proportions",
        image: HeritageChainNecklace,
        tags: ["everyday", "gift"],
      },
    ],
  },

  minimal: {
    slug: "minimal",
    title: "Minimal",
    subtitle: "Quiet refinement",
    description:
      "Stripped of excess, defined by intention. Minimal explores purity of form and restrained elegance.",
    heroImage: MinimalImg,
    products: [
      {
        id: "minimal-line-ring",
        name: "Line Ring",
        detail: "Pure geometry",
        image: MinimalLineRing,
        tags: ["everyday", "minimal", "trending"],
      },
      {
        id: "minimal-arc-pendant",
        name: "Arc Pendant",
        detail: "Soft curvature",
        image: MinimalArcPendant,
        tags: ["gift", "minimal"],
      },
      {
        id: "minimal-bar-earrings",
        name: "Bar Earrings",
        detail: "Balanced vertical form",
        image: MinimalBarEarrings,
        tags: ["everyday", "minimal", "new"],
      },
      {
        id: "minimal-circle-bracelet",
        name: "Circle Bracelet",
        detail: "Continuous form",
        image: MinimalCircleBracelet,
        tags: ["everyday", "minimal"],
      },
      {
        id: "minimal-stud-earrings",
        name: "Stud Earrings",
        detail: "Essential expression",
        image: MinimalStudEarrings,
        tags: ["everyday", "minimal"],
      },
    ],
  },

  signature: {
    slug: "signature",
    title: "Signature",
    subtitle: "The essence of our craft",
    description:
      "Signature brings together our most defining ideas — balance, proportion, and timeless design.",
    heroImage: SignatureImg,
    products: [
      {
        id: "signature-ring",
        name: "Signature Ring",
        detail: "Our defining form",
        image: SignatureRing,
        tags: ["statement", "gift", "trending"],
      },
      {
        id: "signature-cuff",
        name: "Signature Cuff",
        detail: "Architectural balance",
        image: SignatureCuff,
        tags: ["bold", "statement"],
      },
      {
        id: "signature-necklace",
        name: "Signature Necklace",
        detail: "Refined statement",
        image: SignatureNecklace,
        tags: ["statement", "gift", "new"],
      },
      {
        id: "signature-drop-earrings",
        name: "Drop Earrings",
        detail: "Sculptural flow",
        image: SignatureDropEarrings,
        tags: ["bold", "statement"],
      },
      {
        id: "signature-bangle",
        name: "Signature Bangle",
        detail: "Timeless contour",
        image: SignatureBangle,
        tags: ["statement"],
      },
    ],
  },

  modern: {
    slug: "modern",
    title: "Modern",
    subtitle: "Contemporary expressions",
    description:
      "Modern explores progressive forms while staying grounded in craftsmanship.",
    heroImage: ModernImg,
    products: [
      {
        id: "modern-edge-ring",
        name: "Edge Ring",
        detail: "Bold geometry",
        image: ModernEdgeRing,
        tags: ["bold", "modern", "trending"],
      },
      {
        id: "modern-layer-necklace",
        name: "Layer Necklace",
        detail: "Dynamic composition",
        image: ModernLayerNecklace,
        tags: ["statement", "modern"],
      },
      {
        id: "modern-cuff-bracelet",
        name: "Cuff Bracelet",
        detail: "Strong silhouette",
        image: ModernCuffBracelet,
        tags: ["bold", "modern"],
      },
      {
        id: "modern-angular-earrings",
        name: "Angular Earrings",
        detail: "Faceted form",
        image: ModernAngularEarrings,
        tags: ["bold", "modern", "new"],
      },
      {
        id: "modern-band-ring",
        name: "Band Ring",
        detail: "Refined edge",
        image: ModernBandRing,
        tags: ["everyday", "modern"],
      },
    ],
  },

  bridal: {
    slug: "bridal",
    title: "Bridal",
    subtitle: "Moments made eternal",
    description:
      "Created to mark beginnings, Bridal celebrates union, promise, and continuity.",
    heroImage: BridalImg,
    products: [
      {
        id: "bridal-solitaire-ring",
        name: "Solitaire Ring",
        detail: "Enduring brilliance",
        image: BridalSolitaireRing,
        tags: ["wedding", "bride", "trending"],
      },
      {
        id: "bridal-halo-ring",
        name: "Halo Ring",
        detail: "Classic radiance",
        image: BridalHaloRing,
        tags: ["wedding", "bride"],
      },
      {
        id: "bridal-eternity-band",
        name: "Eternity Band",
        detail: "Continuous sparkle",
        image: BridalEternityBand,
        tags: ["wedding", "bride", "new"],
      },
      {
        id: "bridal-pendant",
        name: "Bridal Pendant",
        detail: "Graceful accent",
        image: BridalPendant,
        tags: ["wedding", "gift"],
      },
      {
        id: "bridal-earrings",
        name: "Bridal Earrings",
        detail: "Ceremonial elegance",
        image: BridalEarrings,
        tags: ["wedding", "bride"],
      },
    ],
  },
};
