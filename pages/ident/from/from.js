let app = getApp();
var status = true
Page({
  data: {
    isSubmit: false,
    warn: "",
    phone: "",
    pwd: "",
    isPub: false,
    sex: "男",
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

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let { phone, pwd, isPub, sex } = e.detail.value;
    if (!phone || !pwd) {
      this.setData({
        warn: "提交成功，等待测评信息通知",
        isSubmit: true
      })
      return;
    }
    this.setData({
      warn: "",
      isSubmit: true,
      phone,
      pwd,
      isPub,
      sex
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})
