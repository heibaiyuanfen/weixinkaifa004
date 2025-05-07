Page({
  data: {
    items: [
      {
        id: 1,
        title: '冰川白',
        srcs: [
          '/pages/index/assets/1.png',
          '/pages/index/assets/1.png',
          '/pages/index/assets/1.png'
        ]
      },
      {
        id: 2,
        title: '超级白玉兰',
        srcs: ['/assets/tiles/white_magnolia_1.jpg']
      },
      // … 其他条目 …
    ]
  },

  onLoad() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage','shareTimeline']
    });
  },

  /**
   * 预览当前卡片对应的图片数组
   */
  onPreview(e) {
    // 一定要取 data-idx
    const idx = e.currentTarget.dataset.idx;
    const srcs = this.data.items[idx]?.srcs;

    if (!srcs) {
      console.error('预览图片失败：找不到 items[%s].srcs', idx);
      return;
    }

    wx.previewImage({
      current: srcs[0],  // 也可以传 e.currentTarget.dataset.currentSrc
      urls: srcs
    });
  },

  goHome() {
    wx.switchTab({ url: '/pages/index/index' });
  },

  onShareAppMessage() {
    return {
      title: '来看这些高端人造大理石瓷砖！',
      path: '/pages/artificial/highMarble/index'
    };
  },

  onShareTimeline() {
    return { title: '高端人造大理石 — 精选瓷砖', query: '' };
  }
});
