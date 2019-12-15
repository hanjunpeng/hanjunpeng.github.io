module.exports = {
  title: '博客 接口文档',
  description: '博客',
  base: '/blog/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: '/' },
      { text: 'Language', ariaLabel: 'Language Menu',
        items: [
          { text: 'chinese', link: '/language/chinese/' },
          { text: 'Japanse', link: '/language/japanse/' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Group 1',
        path: '/foo/',      // 可选的, 应该是一个绝对路径
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      }
    ]
  }
}