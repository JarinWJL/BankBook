// pages/socialarea/socialarea.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /** 
       * 页面配置 
       */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,  
    score: 89,
    currentIndex: 2,
    count: 0
  },
  /**
    * 加载页面时，渲染页面之前对页面对象进行初始化
    */
  onLoad: function (options) {
    var that = this;
    const db = wx.cloud.database()
    //API风格:回调风格
    db.collection("CommenList").get({
      //执行成功必须要有
      success: res => {
        console.log("获取共读书单列表：", res.data);
        that.setData({
          bookCommenlist: res.data,
        })
      },
    })
  },
  /** 
      * 滑动切换tab 
      */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换:dataset为页面自定义属性，通过tap实现数据的传递
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    }
     else if (e.target.dataset.current == null)
     {
       console.log("没有捕捉到目标值")
     }
     else {
      that.setData({
        currentTab: e.target.dataset.current
      })
      console.log("目标值是：" + e.target.dataset.current)
    }
  } 

  
})
