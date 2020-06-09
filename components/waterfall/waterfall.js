// components/waterfall.js
const POSITION_LEFT = "left";
const POSITION_RIGHT = "right";

Component({
  itemGap: 20,
  relations: {
    "./waterfall-item": {
      type: "child",
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {
    loading: {
      type: Boolean,
      default: false,
    },
    isAllLoaded: {
      type: Boolean,
      default: false,
    },
  },

  observers: {},

  /**
   * 组件的初始数据
   */
  data: {},

  lifetimes: {
    ready() {
      this.initParams();
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initParams() {
      this.leftHeights = 0;
      this.rightHeights = 0;
    },
    /**
     * 设置 waterfall-item 的高度值
     * @param {Object} node waterfall-item 组件位置尺寸数据
     */
    async getWaterfallItemPostionInfo(node) {
      let top = 0;
      let position = POSITION_LEFT;
      const { height } = node;
      const { itemGap } = { itemGap: 20 };
      if (this.leftHeights <= this.rightHeights) {
        top = this.leftHeights;
        if (this.leftHeights === 0) {
          this.leftHeights += height;
        } else {
          top += itemGap;
          this.leftHeights += height + itemGap;
        }
      } else {
        position = POSITION_RIGHT;
        top = this.rightHeights;
        if (this.rightHeights === 0) {
          this.rightHeights += height;
        } else {
          top += itemGap;
          this.rightHeights += height + itemGap;
        }
      }
      console.log("top:" + top + "position:" + position);
      return {
        top,
        position,
      };
    },
  },
});
