// components/option-dialog/option-dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "产品",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    buttons: [
      {
        type: "primary",
        className: "",
        text: "加入购物车",
        value: 0,
      },
      /*       {
        type: "primary",
        className: "",
        text: "立即购买",
        value: 1,
      }, */
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    buttontap(e) {
      this.triggerEvent("optiontab", e.detail);
      console.log("Option Tab" + e.detail);
    },
  },
});
