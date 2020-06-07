// components/event-list/event-list.js
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
    default: ENV.PLACE_HOLDERS.ICON,
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },

  /**
   * 组件的方法列表
   */
  methods: {},
});
