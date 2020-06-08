// components/waterfall-item/waterfall-item.js
import { querySelector } from "./query-node";

Component({
  relations: {
    "./waterfall": {
      type: "parent",
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},

  lifetimes: {
    ready() {
      const [waterfall] = this.getRelationNodes("./waterfall");
      this.parent = waterfall;
      this.setWaterfallItemPosition();
    },
  },

  methods: {
    async setWaterfallItemPosition() {
      querySelector(".waterfall-item", this).then(async (node) => {
        const { top, position } = await this.parent.getWaterfallItemPostionInfo(
          node
        );
        this.setData({
          top,
          position,
        });
      });
    },
  },
});
