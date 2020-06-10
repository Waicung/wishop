/* Product List */
const DEFAULT_IMAGE = "http://via.placeholder.com/200x200";

module.exports = () => {
  const data = { products: [] };
  // Create 1000 users
  for (let i = 0; i < 50; i++) {
    data.products.push({
      id: i + 1,
      name: `product${i}`,
      src: DEFAULT_IMAGE,
    });
  }
  return data;
};

/* /products?_page=1&&_limit=10 */
