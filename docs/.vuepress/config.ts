import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: 'KK社区文档',
    description: '开源、自由的KK社区文档',
    base: '/',
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/pwa',
            {
                skipWaiting: true
            }
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容可用',
                        buttonText: '刷新',
                    }
                }
            }
        ],
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-VRCH9VZR9D'
            }
        ],
        [
            '@vuepress/plugin-search',
            {
              isSearchable: (page) => page.path !== '/',
              getExtraFields: (page) => page.frontmatter.tags ?? [],
              locales: {
                '/': {
                  placeholder: 'Search',
                },
                '/zh/': {
                  placeholder: '搜索',
                },
              },
            },
        ],
        // [
        //     "@vuepress/plugin-docsearch",
        //     {
        //         apiKey: '4cfe0f33be16c346fed77effff922cf8',
        //         indexName: 'go-cqhttp',
        //         algoliaOptions: {
        //             facetFilters: ["lang:en-US"],
        //         },
        //     }
        // ]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        repo: 'ThrowPanic/MyKKDocument',
        docsRepo: 'ThrowPanic/MyKKDocument',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkText: "编辑此页",
        lastUpdated: true,
        lastUpdatedText: '上一次编辑',
        contributors: true,
        tip: "提示",
        warning: "注意",
        danger: "警告",
        backToHome: "返回首页",
        navbar: [
            {text:  '指南', link: '/guide/',} ,
            //{ text: '指南',children: ['/guide/','/guide/write_docs/','/guide/up_docs/']},
            { text: '插件', children: ['/plugin/','/plugin/use_plugin.md','/plugin/dev_plugin.md',"/plugin/use_sema"]},
            { text: '模组', children: ['/mode/','/mode/use_mode.md','/mode/dev_mode.md',]},
            { text: 'FAQ', link: '/faq/' }
        ],
        sidebar: "auto",
    },

})
