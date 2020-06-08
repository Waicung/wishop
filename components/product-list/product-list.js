// components/product-list/product-list.js
import ENV from "../../env";
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    loadMorePending: false,
    isAllLoaded: true,
    products: [
      { id: 1, src: ENV.PLACE_HOLDERS.THUMBNAIL },
      { id: 2, src: ENV.PLACE_HOLDERS.THUMBNAIL },
      { id: 3, src: ENV.PLACE_HOLDERS.THUMBNAIL },
      { id: 4, src: ENV.PLACE_HOLDERS.THUMBNAIL },
      { id: 5, src: ENV.PLACE_HOLDERS.THUMBNAIL },
      { id: 6, src: ENV.PLACE_HOLDERS.THUMBNAIL },
      { id: 7, src: ENV.PLACE_HOLDERS.THUMBNAIL },
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
