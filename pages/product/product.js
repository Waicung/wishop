// pages/product/product.js
import { getGetResponse } from "../../apis/apis";
import ICONS from "../../apis/icons";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    navbarItems: [
      { extraClass: "first-child", text: "商品" },
      { extraClass: "", text: "评价" },
      { extraClass: "last-child", text: "详情" },
      /*       { extraClass: "last-child", text: "推荐" }, */
    ],
    bottomNavbarItems: [
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
    bottomNavbarBtns: [
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
    navSelected: 0,
    displayOption: false,
    topComments: [],
  },

  open: function () {
    this.setData({
      displayOption: true,
    });
  },

  scrollTo: function () {
    wx.pageScrollTo({
      selector: ".comment-item",
      duration: 0,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options.productId = 1;
    /* Load product info */
    getGetResponse("product", { id: options.productId }).then((res) => {
      this.setData({
        product: res.data[0],
      });
    });
    /* Load comment info */
    getGetResponse("comments", {
      _limit: 3,
    }).then((res) => {
      this.setData({
        topComments: res.data,
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
