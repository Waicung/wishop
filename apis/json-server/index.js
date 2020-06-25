/* Product List */
const DEFAULT_THUMBNAIL = "http://via.placeholder.com/200x200";
const DEFAULT_IMAGE = "http://via.placeholder.com/650X650";
const DEFAULT_ICON = "http://via.placeholder.com/50x50";

module.exports = () => {
  const data = { products: [], product: [], comments: [] };
  /* products */
  for (let i = 0; i < 50; i++) {
    data.products.push({
      id: i + 1,
      name: `product${i}`,
      src: DEFAULT_THUMBNAIL,
    });
  }

  /* product */
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

  /* comments */
  for (let i = 0; i < 50; i++) {
    data.comments.push({
      id: i + 1,
      avatar: DEFAULT_ICON,
      name: "username",
      stars: 5,
      date: "2020-01-12",
      content: "Hello Good Product",
      gallery: GALLERY_IMAGES,
    });
  }
  return data;
};

/* /products?_page=1&&_limit=10 */
