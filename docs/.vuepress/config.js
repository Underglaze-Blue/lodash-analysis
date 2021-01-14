module.exports = {
  base: '/lodash-analysis/',
  dest: 'dist',
  title: 'Lodash 源码分析',
  description: 'Analysis lodash.js deeply',
  themeConfig: {
    smoothScroll: true,
    repo: 'Underglaze-Blue/lodash-analysis',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: ' 在 GitHub 上编辑此页',
    lastUpdated: ' 上次更新',
    docsBranch: 'main',
    searchMaxSuggestions: 10,
    nav: [
      {
        text: 'Lodash',
        items: [
          { text: 'Lodash文档', link: 'https://www.lodashjs.com/' },
          { text: 'Lodash github', link: 'https://github.com/lodash/lodash' }
        ]
      },
    ],
    sidebar: [
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Internal',   // 必要的
        path: '/internal/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/internal/getTag'
        ].sort()
      },
      {
        title: 'Export',
        collapsable: false,
        path: '/export/',
        sidebarDepth: 0,
        children: [
          '/export/isError',
          '/export/attempt'
        ].sort(),
      }
    ]

  }
}
