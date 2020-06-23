/* Product List */
const DEFAULT_THUMBNAIL = "http://via.placeholder.com/200x200";
const DEFAULT_IMAGE = "http://via.placeholder.com/650X650";

module.exports = () => {
  const data = { products: [], product: [] };
  // Create products
  for (let i = 0; i < 50; i++) {
    data.products.push({
      id: i + 1,
      name: `product${i}`,
      src: DEFAULT_THUMBNAIL,
    });
  }

  // Create product
  let GALLERY_IMAGES = [];
  for (let i = 0; i < 7; i++) {
    GALLERY_IMAGES.push(DEFAULT_IMAGE);
  }

  for (let i = 0; i < 50; i++) {
    data.product.push({
      id: i + 1,
      name: `product${i}`,
      description: "Hello World",
      gallery: GALLERY_IMAGES,
      price: 99.99,
    });
  }
  return data;
};

/* /products?_page=1&&_limit=10 */
