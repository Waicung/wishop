// components/product-list/product-list.js
import ENV from "../../env";
import { getGetResponse } from "../../apis/apis";
const DEFAULT_IMAGE = ENV.PLACE_HOLDERS.THUMBNAIL;

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loading: {
      type: Boolean,
      default: false,
    },
  },

  observers: {
    loading: function (loading) {
      // timestamp 被设置时，将它展示为可读时间字符串
      if (loading) {
        this.getProducts();
      }
    },
  },
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
          products: this.appendProducts(res.data),
        });
        this.data.page++;
        this.triggerEvent("loaded");
      });
    },
    appendProducts(newProducts) {
      const PlaceHolder = { name: "" };
      //this.data.products.pop();
      return this.data.products.concat(newProducts);
    },
    toProduct: function () {
      wx.navigateTo({
        url: "/pages/product/product",
        events: {
          // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
          acceptDataFromOpenedPage: function (data) {
            console.log(data);
          },
          someEvent: function (data) {
            console.log(data);
          },
        },
        success: function (res) {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit("acceptDataFromOpenerPage", { data: "test" });
        },
      });
    },
  },
});
