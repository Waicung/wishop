// components/banner/banner.js
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
    background: ["demo-text-1", "demo-text-2", "demo-text-3"],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    default: ENV.PLACE_HOLDERS.BANNER,
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
