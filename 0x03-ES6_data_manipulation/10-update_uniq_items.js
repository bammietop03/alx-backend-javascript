export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of map) {
    // Update quantity to 100 for items with initial quantity of 1
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}
