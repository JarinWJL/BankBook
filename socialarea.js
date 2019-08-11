const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    clientWidth: 0,
    clientHeight: 0,
    // tab切换 
    currentTab: 0,
// 好友下拉切换 
    content: [],
    px: [],
    pxopen: false,
    pxshow: false,
    active: true,
    imgUrl: "../../images/+.png"


    
  },
  
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    
    // 好友下拉切换 
    this.setData({
      px: ['>默认排序', '>离我最近']
    });


    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  // 好友下拉切换 
  listpx: function (e) {
    console.log(e)
    if (this.data.pxopen) {
      this.setData({
        pxopen: false,
        pxshow: false,
        active: true,
        imgUrl: "../../images/+.png"
      })
    } else {
      this.setData({
        content: this.data.px,
        pxopen: true,
        pxshow: false,
        active: false,
        imgUrl: "../../images/+2.png"
      })
    }
    console.log(e.target)
  },


  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },

  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },



/*pinglun*/ 
formSubmit: function (e) {
    console.log(0);
    wx.showToast({
      title: '评论成功',
      icon: 'success',
      duration: 3000
    })
    var that = this;
    var liuyantext = e.detail.value.liuyantext; //获取表单所有name=liuyantext的值 
    console.log('视频id' + that.data.id);
    console.log('留言number:' + that.data.number);
    wx.request({
      url: 'https://xxxx/comment',
      data: {
        content: liuyantext,
        number: that.data.number,
        id: that.data.id
      },

      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // console.log(res.data)
        that.setData({
          showOrHidden: true,
          re: res.data,
          keyValue: '',
          photo2: res.data.result.comment.photo,
          nickname2: res.data.result.comment.nickname,
          date2: res.data.result.comment.date,
          comment2: res.data.result.comment.comment
        })
        wx.hideToast();
        console.log(res);

      }

    })
  },

  
})