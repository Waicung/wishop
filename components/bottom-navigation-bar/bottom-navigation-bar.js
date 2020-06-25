// components/bottom-navigation-bar/bottom-navigation-bar.js
import ICONS from "../../apis/icons";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bottomNavbarItems: {
      type: Array,
      default: [
        {
          type: "icon",
          icon: ICONS("chat"),
          text: "客服",
          value: 0,
        },
        {
          type: "icon",
          icon: ICONS("cart"),
          text: "购物车",
          value: 1,
        },
      ],
    },
    bottomNavbarBtns: {
      type: Array,
      default: [
        {
          type: "default",
          text: "加入购物车",
          value: 2,
        },
        {
          type: "primary",
          text: "立即购买",
          value: 3,
        },
      ],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    tabNavItem: function (e) {
      if (e.target.dataset.button) {
        console.log("Tab on Bottom Nav Button:" + e.target.dataset.index);
      } else {
        console.log("Tab on Bottom Nav Item:" + e.currentTarget.dataset.index);
      }
      this.triggerEvent("tabNav", e.target.dataset);
    },
  },
});
