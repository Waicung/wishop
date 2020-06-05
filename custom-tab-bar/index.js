// custom-tab-bar/index.js

Component({
  data: {
    selected: 0,
    list: [
      {
        text: "主页",
        iconPath: "",
        selectedIconPath: "",
        pagePath: "/pages/index/index",
        dot: true,
      },
      {
        text: "Log",
        iconPath: "",
        selectedIconPath: "",
        pagePath: "/pages/logs/logs",
        badge: "New",
      },
    ],
  },
  methods: {
    tabChange(e) {
      console.log("tab change", e);
      const data = e.detail.item;
      const url = data.pagePath;
      wx.switchTab({
        url,
      });
      this.setData({
        selected: e.detail.index,
      });
    },
  },
  attached: function () {
    console.log("tabbar attached");
    console.log("current:", this.data.selected);
  },
});
