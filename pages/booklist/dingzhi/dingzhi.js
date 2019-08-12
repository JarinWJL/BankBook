// pages/booklist/dingzhi/dingzhi.js
var status = true;
Page({
  data: {
    status: status　　　　　　　　　　　　//data里面的属性可以传递到视图
  },
  toastShow: function (event) {
    console.log("触发了点击事件，弹出toast")
    status = false
    this.setData({ status: status })　　　　//setData方法可以建立新的data属性，从而起到跟视图实时同步的效果
  },
  toastHide: function (event) {
    console.log("触发bindchange，隐藏toast")
    status = true
    this.setData({ status: status })
  },

})