import type {SidebarConfig} from '@vuepress/theme-default';

import {getChildren} from '../../util';


// 我的侧边栏配置
export const sidebarMy: SidebarConfig = {
    '/docs/basics/': [{text: '基础', children: getChildren('/docs/basics/'),}],
    '/bookmark/': [{text: '书签', children: getChildren('/bookmark/'),}],
    '/docs/boke/':[
        {text: '博客',collapsible: true, children: getChildren('/docs/boke/')},
        {text: 'markdown',collapsible: true, children: getChildren('/docs/boke/markdown/')},
    ],
    // 开发相关
    '/docs/kaifa/':[
        {text: '工作流activiti',collapsible: true, children: getChildren('/docs/kaifa/activiti/')},
        {text: '操作系统',collapsible: true, children: getChildren('/docs/kaifa/basics/')},
        {text: 'canal',collapsible: true, children: getChildren('/docs/kaifa/canal/')},
        {text: '数据库',collapsible: true, children: getChildren('/docs/kaifa/db/')},
        {text: 'docker',collapsible: true, children: getChildren('/docs/kaifa/docker/')},
        {text: 'http',collapsible: true, children: getChildren('/docs/kaifa/http/')},
        {text: 'idea',collapsible: true, children: getChildren('/docs/kaifa/idea/')},
        {text: 'java',collapsible: true, children: getChildren('/docs/kaifa/java/')},
        // {text: 'kaika',collapsible: true, children: getChildren('/docs/kaifa/kaika/')},
        {text: '消息中间件kafka',collapsible: true, children: getChildren('/docs/kaifa/kafka/')},
        {text: 'linux',collapsible: true, children: getChildren('/docs/kaifa/linux/')},
        {text: 'maven',collapsible: true, children: getChildren('/docs/kaifa/maven/')},
        {text: '注册、配置中心nacos',collapsible: true, children: getChildren('/docs/kaifa/nacos/')},
        {text: 'nginx',collapsible: true, children: getChildren('/docs/kaifa/nginx/')},
        {text: 'nifi',collapsible: true, children: getChildren('/docs/kaifa/nifi/')},
        {text: 'node',collapsible: true, children: getChildren('/docs/kaifa/node/')},
        {text: 'ogg',collapsible: true, children: getChildren('/docs/kaifa/ogg/')},
        {text: 'redis',collapsible: true, children: getChildren('/docs/kaifa/redis/')},
        {text: 'seata',collapsible: true, children: getChildren('/docs/kaifa/seata/')},
        {text: '熔断降级sentinel',collapsible: true, children: getChildren('/docs/kaifa/sentinel/')},
        {text: '链路追踪skywalking',collapsible: true, children: getChildren('/docs/kaifa/skywalking/')},
        {text: 'vue',collapsible: true, children: getChildren('/docs/kaifa/vue/')},
        {text: 'webservice',collapsible: true, children: getChildren('/docs/kaifa/webservice/')},
        {text: 'window',collapsible: true, children: getChildren('/docs/kaifa/window/')},
        {text: 'zookeeper',collapsible: true, children: getChildren('/docs/kaifa/zookeeper/')},
    ],
    '/docs/me/':[{text:'关于我',children:['/docs/me/README.md']}],


    //********************************************************************************************************************
    // '/zh/guide/': [
    //     {
    //         text: '指南',
    //         children: [
    //             '/zh/guide/README.md',
    //             '/zh/guide/getting-started.md',
    //             '/zh/guide/configuration.md',
    //             '/zh/guide/page.md',
    //             '/zh/guide/markdown.md',
    //             '/zh/guide/assets.md',
    //             '/zh/guide/i18n.md',
    //             '/zh/guide/deployment.md',
    //             '/zh/guide/theme.md',
    //             '/zh/guide/plugin.md',
    //             '/zh/guide/bundler.md',
    //             '/zh/guide/migration.md',
    //         ],
    //     },
    // ],
    // '/zh/advanced/': [
    //     {
    //         text: '深入',
    //         children: [
    //             '/zh/advanced/architecture.md',
    //             '/zh/advanced/plugin.md',
    //             '/zh/advanced/theme.md',
    //         ],
    //     },
    //     {
    //         text: 'Cookbook',
    //         children: [
    //             '/zh/advanced/cookbook/README.md',
    //             '/zh/advanced/cookbook/usage-of-client-config.md',
    //             '/zh/advanced/cookbook/adding-extra-pages.md',
    //             '/zh/advanced/cookbook/making-a-theme-extendable.md',
    //             '/zh/advanced/cookbook/passing-data-to-client-code.md',
    //             '/zh/advanced/cookbook/markdown-and-vue-sfc.md',
    //         ],
    //     },
    // ],
    // '/zh/reference/': [
    //     {
    //         text: 'VuePress 参考',
    //         collapsible: true,
    //         children: [
    //             '/zh/reference/cli.md',
    //             '/zh/reference/config.md',
    //             '/zh/reference/frontmatter.md',
    //             '/zh/reference/components.md',
    //             '/zh/reference/plugin-api.md',
    //             '/zh/reference/theme-api.md',
    //             '/zh/reference/client-api.md',
    //             '/zh/reference/node-api.md',
    //         ],
    //     },
    //     {
    //         text: '打包工具参考',
    //         collapsible: true,
    //         children: [
    //             '/zh/reference/bundler/vite.md',
    //             '/zh/reference/bundler/webpack.md',
    //         ],
    //     },
    //     {
    //         text: '默认主题参考',
    //         collapsible: true,
    //         children: [
    //             '/zh/reference/default-theme/config.md',
    //             '/zh/reference/default-theme/frontmatter.md',
    //             '/zh/reference/default-theme/components.md',
    //             '/zh/reference/default-theme/markdown.md',
    //             '/zh/reference/default-theme/styles.md',
    //             '/zh/reference/default-theme/extending.md',
    //         ],
    //     },
    //     {
    //         text: '官方插件参考',
    //         collapsible: true,
    //         children: [
    //             {
    //                 text: '常用功能',
    //                 children: [
    //                     '/zh/reference/plugin/back-to-top.md',
    //                     '/zh/reference/plugin/container.md',
    //                     '/zh/reference/plugin/external-link-icon.md',
    //                     '/zh/reference/plugin/google-analytics.md',
    //                     '/zh/reference/plugin/medium-zoom.md',
    //                     '/zh/reference/plugin/nprogress.md',
    //                     '/zh/reference/plugin/register-components.md',
    //                 ],
    //             },
    //             {
    //                 text: '内容搜索',
    //                 children: [
    //                     '/zh/reference/plugin/docsearch.md',
    //                     '/zh/reference/plugin/search.md',
    //                 ],
    //             },
    //             {
    //                 text: 'PWA',
    //                 children: [
    //                     '/zh/reference/plugin/pwa.md',
    //                     '/zh/reference/plugin/pwa-popup.md',
    //                 ],
    //             },
    //             {
    //                 text: '语法高亮',
    //                 children: [
    //                     '/zh/reference/plugin/prismjs.md',
    //                     '/zh/reference/plugin/shiki.md',
    //                 ],
    //             },
    //             {
    //                 text: '主题开发',
    //                 children: [
    //                     '/zh/reference/plugin/active-header-links.md',
    //                     '/zh/reference/plugin/git.md',
    //                     '/zh/reference/plugin/palette.md',
    //                     '/zh/reference/plugin/theme-data.md',
    //                     '/zh/reference/plugin/toc.md',
    //                 ],
    //             },
    //         ],
    //     },
    // ],
}
