/* Update Tab item */
export function tabUpdate(index) {
  if (typeof this.getTabBar === "function" && this.getTabBar()) {
    this.getTabBar().setData({
      selected: index,
    });
  }
}

