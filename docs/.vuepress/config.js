const fs = require('fs');
const path = require('path');
const internal_filePath = path.resolve('./docs/internal/');
const export_filePath = path.resolve('./docs/export/');

function handleChildren(basePath, arr){
  return arr.map(item => {
    return `/${basePath}/${item}`
  })
}

const internal_path = fs.readdirSync(internal_filePath).filter(item => item !== 'README.md')
const export_path = fs.readdirSync(export_filePath).filter(item => item !== 'README.md')


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
        children: handleChildren('internal', internal_path)
      },
      {
        title: 'Export',
        collapsable: false,
        path: '/export/',
        sidebarDepth: 0,
        children: handleChildren('export', export_path),
      }
    ]

  }
}
