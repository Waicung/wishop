/* Path for Pages */
const path = "../../images/icons/";
const brand = "Shopicons";
const format = ".svg";
const icons = {
  cart: "_Cart4",
  chat: "_Chat",
};

export default function (icon, style = "_Regular") {
  return path + brand + style + icons[icon] + format;
}
