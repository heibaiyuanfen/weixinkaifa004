// pages/index/index.js
Page({
  data: {
    // 轮播图数据（保持不变）
    banners: [
      { id: 1, url: 'assets/1.png' },
      { id: 2, url: 'assets/1.png' }
    ],

    // 原始“岩板专区”数据，用于恢复与筛选
    originItems: [
      {
        id: 'a',
        img: 'assets/1.png',
        size: '800X2600*9mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'b',
        img: 'assets/1.png',
        size: '800X2600*15mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'c',
        img: 'assets/1.png',
        size: '1600X2700*6mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'd',
        img: 'assets/1.png',
        size: '1600X2700*12mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'e',
        img: 'assets/1.png',
        size: '1600X3200*12mm',
        finish: '亮光 / 哑光'
      },
      {
        id: 'f',
        img: 'assets/1.png',
        size: '1580X3200*15mm',
        finish: '亮光 / 哑光'
      }
    ],
    // 页面实际渲染的“岩板专区”
    items: [],

    // 原始“人造石专区”数据
    originManmadeItems: [
      {
        id: '1',
        title: '高端人造大理石',
        subtitle: 'Man-made Stone',
        path: '/pages/artificial/highMarble/index'
      },
      {
        id: '2',
        title: '高仿石英石',
        subtitle: 'Quartz Stone',
        path: '/pages/artificial/fakeQuartz/index'
      },
      {
        id: '3',
        title: '正宗石英石',
        subtitle: 'Quartz Stone',
        path: '/pages/artificial/authQuartz/index'
      },
      {
        id: '4',
        title: '人造石',
        subtitle: 'Man-made Stone',
        path: '/pages/artificial/artificialStone/index'
      }
    ],
    // 页面实际渲染的“人造石专区”
    manmadeItems: [],

    // 当前搜索关键字
    keyword: ''
  },

  /**
   * 生命周期函数：页面加载时，初始化渲染数组
   */

  onLoad() {
    // 初始化：两个区块都展示原始数据
    this.setData({
      items: this.data.originItems,
      manmadeItems: this.data.originManmadeItems
    });
  },

  /**
   * 只搜索“岩板专区”，“人造石专区”不受影响
   */
  onSearchInput(e) {
    const kw = e.detail.value.trim();
    this.setData({ keyword: kw });

    if (!kw) {
      // 关键字为空，则恢复岩板列表
      this.setData({
        items: this.data.originItems
      });
      return;
    }

    // 过滤“岩板专区”
    const filtered = this.data.originItems.filter(item =>
      item.size.includes(kw) ||
      item.finish.includes(kw)
    );

    this.setData({
      items: filtered
      // manmadeItems 保持不变
    });
  },

  onItemTap(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` });
  },

  onManmadeTap(e) {
    const url = e.currentTarget.dataset.path;
    wx.navigateTo({ url });
  }
});
