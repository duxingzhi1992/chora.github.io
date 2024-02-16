import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "CHORA",
  description: "A NEW SPACE",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 顶部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '实例', link: '/markdown-examples' },
      { text: '测试', link: '/note/part1/note1' }
    ],


    outlineTitle: "文章目录",
    outline: [1, 6],
    logo: "logo.svg", // 配置logo位置，public目录

    navbar: true, //开启导航栏，我设置成false也没啥用不知道为啥
    // sidebar: false, // 关闭侧边栏
    lastUpdated: true, // 显示上次修改时间
    aside: "lift", // 设置右侧侧边栏在左侧显示

    // 侧边栏
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'note 1', link: '/note/part1/note1' }
        ],
      },
      {
        text: 'part1',
        items: [
          { text: 'note1', link: '/note/part1/note1' },
        ],
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://vlate.github.io' }
    ],



    // 底部配置
    footer: {
      copyright: "书写是为了遗忘之后再记得。",
    },

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  }
})
