// pages/share/share.js
Page({

  data: {},

  onLoad(options) {
    // 打开分享菜单，支持“转发给好友”和“分享到朋友圈”
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  // 好友转发——只给出 title 和 path，即分享小程序卡片
  onShareAppMessage() {
    return {
      title: '给你推荐一个好用的小程序！',        // 分享标题
      path: '/pages/index/index?ref=share',         // 要打开的页面路径，可携带参数
      // 去掉 imageUrl，使用默认小程序卡片预览
      // 如需指定小程序类型，可解开下面一行：
      // miniprogramType: 'release'  // 可选: 'develop' | 'trial' | 'release'
    };
  },

  // 朋友圈转发——只给出 title 和 query，也会展示小程序卡片
  onShareTimeline() {
    return {
      title: '给你推荐一个好用的小程序！',  // 朋友圈标题
      query: 'ref=timeline'               // 当前页面 query，可在 onLoad 拿到
      // 同样不指定 imageUrl，就会展示小程序卡片
    };
  },

  // 以下钩子保留，供日后扩展
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onPullDownRefresh() {
    // 刷新操作完成后记得：
    // wx.stopPullDownRefresh();
  },
  onReachBottom() {}
});
