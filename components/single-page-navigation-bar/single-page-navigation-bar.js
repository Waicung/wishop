// components/single-page-navigation-bar/single-page-navigation-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    navbarItems: {
      type: Array,
      default: [
        {
          extraClass: "first-child",
          text: "项目1",
        },
        {
          extraClass: "",
          text: "项目2",
        },
        {
          extraClass: "",
          text: "项目3",
        },
        {
          extraClass: "last-child",
          text: "项目4",
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
    tabNav: function (e) {
      console.log("tab nav item index:" + e.target.dataset.index);
      this.triggerEvent("tabitem", e.target.dataset.index);
    },
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      let width = 100 / this.data.navbarItems.length;
      this.setData({
        width: "width:" + width + "%",
      });
    },
  },
});
