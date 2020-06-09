// components/product-list/product-list.js
import ENV from "../../env";
import { getGetResponse } from "../../apis/apis";
const DEFAULT_IMAGE = ENV.PLACE_HOLDERS.THUMBNAIL;

Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    default: DEFAULT_IMAGE,
    loadMorePending: false,
    isAllLoaded: true,
    products: [],
    page: 1,
  },

  lifetimes: {
    ready() {
      this.getProducts();
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getProducts() {
      getGetResponse("products", {
        _page: this.data.page,
      }).then((res) => {
        this.setData({
          products: res.data,
        });
      });
    },
  },
});
