Page({
  onLoad() {
    // 显式开启分享到「好友」「朋友圈」按钮
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  // 好友转发：open-type="share" 按钮会自动调用下面这个钩子
  onShareAppMessage() {
    return {
      title: '给你推荐一个好用的小程序！',
      path: '/pages/index/index?ref=share',  // 分享后打开的页面路径
      imageUrl: '/assets/share-banner.jpg'   // 自定义转发图
    };
  },

  // 朋友圈转发：手动调用
  onShareTimeline() {
    return {
      title: '给你推荐一个好用的小程序！',
      path: '/pages/index/index?ref=timeline',
      imageUrl: '/assets/share-banner.jpg'
    };
  }
});
