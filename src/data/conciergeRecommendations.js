import { COLLECTIONS } from "./products";

export function getRecommendations(tag) {
  const allProducts = Object.values(COLLECTIONS).flatMap(
    (collection) => collection.products
  );

  return allProducts
    .filter((product) => product.tags?.includes(tag))
    .slice(0, 3); // curated, not excessive
}
