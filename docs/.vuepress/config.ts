// 默认主题
import {defaultTheme} from '@vuepress/theme-default';
// 复制
import {copyCodePlugin} from 'vuepress-plugin-copy-code2';
// 本地搜索
import {searchPlugin} from '@vuepress/plugin-search';
// 搜索
// import { docsearchPlugin } from '@vuepress/plugin-docsearch';
// 配置
import {head, navbarMy, sidebarMy} from './configs';
// markdown 增强
import {mdEnhancePlugin} from "vuepress-plugin-md-enhance";
// 根据组件文件或目录自动注册 Vue 组件
import {registerComponentsPlugin} from '@vuepress/plugin-register-components'
import {getDirname, path} from '@vuepress/utils'
// @ts-ignore
const __dirname = getDirname(import.meta.url)
// 组件库
import {componentsPlugin} from "vuepress-plugin-components";
// .vuepress/config.ts
import { commentPlugin } from "vuepress-plugin-comment2";

// 重新初始化
/*
    "@vuepress/client": "2.0.0-beta.62",
    "vue": "^3.3.4",
    "vuepress": "2.0.0-beta.62",

    "glob": "^7.2.3",
    "@vuepress/plugin-search": "^2.0.0-beta.62",
    "@vuepress/shared": "^2.0.0-beta.62",
    "@vuepress/theme-default": "^2.0.0-beta.62",
    "@vuepress/core": "^2.0.0-beta.62",
    "@vuepress/utils": "^2.0.0-beta.62",
    "vuepress-plugin-copy-code2": "^2.0.0-beta.62"
 */

let newHead=head;
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {// 打包配置
    console.log('打包')
}else {// 测试环境配置
    console.log('本地运行')
    // 测试环境排除百度统计配置
    // newHead=newHead.filter(item => item !== newHead[0]&&item !== newHead[1]&&item !== newHead[2]);// 删除
    newHead=newHead.filter(item => item !== newHead[0]);// 删除
}

export default ({
    port: 8089,// 设置端口
    lang: 'zh-CN',// 设置默认语言为中文
    head: newHead,
    description: 'vuepress-lingdu-v2',
    // 目的地
    dest: './dist',
    base: '/vuepress-lingdu-v2/',
    title: '⭕°',

    plugins: [

        commentPlugin({
            // 插件选项
            provider: "Giscus", // Artalk | Giscus | Waline | Twikoo
        }),
        componentsPlugin({
            // 插件选项
            components: ["BiliBili", "XiGua", "SiteInfo","VideoPlayer","AudioPlayer"],
            // 公告插件
            rootComponents: {
                notice: [
                    {
                        path: "/",
                        title: '<button id="btnMove" style="background-color: transparent;border: none;cursor: pointer;">〇°</button>',
                        // content: "Notice Content",// 内容
                        // content: "<iframe frameborder=\"no\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" width=100% height=500 src=\"https://lingdu.love/yinyue/\"></iframe>",
                        // content: "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width=100% height=500 src="+(process.env.NODE_ENV === 'production'?"https://lingdu.love/yinyue/":"/vuepress-lingdu-v2/html/yinyue/bofang.html")+"></iframe>",
                        content: "<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width=100% height=500 src="+(process.env.NODE_ENV === 'production'?"https://lingdu.love/yinyue/":"https://lingdu.love/yinyue/index2.html")+"></iframe>",
                        // content: `<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width=100% height=500 src="${process.env.YY}"></iframe>`,
                        // 全屏显示
                        fullscreen: false,
                        // 需要确认才关闭否则延时关闭
                        confirm: true,
                    },
                ],
            },
        }),

        registerComponentsPlugin({
            // componentsDir: path.resolve(__dirname, './layouts'),
            componentsDir: path.resolve(__dirname, './components'),
            // componentsPatterns: [path.resolve(__dirname, './layouts'),path.resolve(__dirname, './components')]
        }),

        // markdown 增强
        mdEnhancePlugin({
            // 开启卡片支持
            card: true,

            // 启用 figure
            figure: true,
            // 启用图片懒加载
            imgLazyload: true,
            // 启用图片标记
            imgMark: true,
            // 启用图片大小
            imgSize: true,
            // 启用自定义容器
            container: true,
            // 开启标记
            mark: true,
            // 启用 mermaid
            mermaid: true,
            // 启用自定义对齐
            align: true,
            // 启用 ECharts 图表
            echarts: true,
            // 启用下角标功能
            sub: true,
            // 启用上角标
            sup: true,
            // 启用属性支持
            attrs: true,
        }),

        // 代码块复制
        copyCodePlugin({
            fancy: false,
            showInMobile: true,
            locales: {
                '/': {
                    copy: '复制',
                    copied: '复制成功',
                    hint: '<b>复&nbsp制&nbsp成&nbsp功<b><BR>@⭕°  今天快乐'
                }
            }
        }),

        // 本地搜索
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                },
            },
        }),
        // 搜索
        // docsearchPlugin({
        //     appId: 'lingdu',
        //     apiKey: 'lingdu',
        //     indexName: 'lingdu',
        //     locales: {
        //         '/': {
        //             placeholder: 'Search Documentation',
        //             translations: {
        //                 button: {
        //                     buttonText: 'Search Documentation',
        //                 },
        //             },
        //         },
        //         '/zh/': {
        //             placeholder: '搜索文档',
        //             translations: {
        //                 button: {
        //                     buttonText: '搜索文档',
        //                 },
        //             },
        //         },
        //     },
        // }),

    ],

    theme: defaultTheme({

        // 是否启用切换颜色模式的功能。如果设置为 true ，将会在导航栏展示一个切换颜色模式的按钮。
        colorModeSwitch: true,
        colorMode: "auto",
        // 首页路径
        home: "/",
        // Public 文件路径
        logo: '/img/logo.png',
        // URL
        // logo: 'https://vuejs.org/images/logo.png',
        // 如果你想在夜间模式中使用不同的 Logo 图片，就可以使用该配置项。
        // logoDark: '/img/logo.png',
        // 如果你按照 `organization/repository` 的格式设置它
        // 我们会将它作为一个 GitHub 仓库 源码地址
        // repo: 'vuejs/vuepress',
        // 你也可以直接将它设置为一个 URL
        // repo: 'https://gitee.com/lingdu990130556/vuepress-lingdu-v2',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // repoLabel: 'Gitee',
        // 导航栏
        navbar: navbarMy,
        // 侧边栏
        sidebar: sidebarMy,
        sidebarDepth: 3, // 嵌套的标题链接（这里设置为3层）[全局设置]
        /// 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://gitee.com/lingdu990130556/vuepress-lingdu-v2',
        // 假如文档不是放在仓库的根目录下：
        docsDir: '../../tree/master/docs/',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLink: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        // 显示最后更新时间
        lastUpdatedText: '最后更新时间', // string | boolean
        // 显示贡献者列表
        contributorsText: '贡献者列表',

        // tip
        tip: '提示',
        // warning
        warning: '警告',
        // danger
        danger: '危险',
        // 当用户进入 404 页面时，会从数组中随机选取一条信息进行展示。
        notFound: ['未找到页面', '页面不存在', '页面丢失', '页面未找到', 'Not Found', '找不到页面了'],
        // 404 页面中 返回首页 链接的文字。
        backToHome: '回到首页',
        // 切换颜色模式按钮的标题文字。
        toggleColorMode: '切换颜色模式',

    }),
})


