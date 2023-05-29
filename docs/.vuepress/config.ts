// 默认主题
import {defaultTheme} from '@vuepress/theme-default';
// 复制
import {copyCodePlugin} from 'vuepress-plugin-copy-code2';
// 本地搜索
// import {searchPlugin} from '@vuepress/plugin-search';
// 配置
import {head, navbarMy, sidebarMy} from './configs';
// markdown 增强
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";



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


export default ({

    head,
    description: 'vuepress-lingdu-v2',
    // 目的地
    dest: './dist',
    base: '/vuepress-lingdu-v2/',

    plugins: [


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
        }),

        // 代码块复制
        copyCodePlugin({
            fancy: true,
            showInMobile: true,
            locales: {
                '/': {
                    copy: '复制',
                    copied: '复制成功',
                    hint: '<b>复&nbsp制&nbsp成&nbsp功<b><BR>@⭕°  '+currentTime()
                }
            }
        }),

        // 本地搜索
        // searchPlugin({
        //     locales: {
        //         '/': {
        //             placeholder: '搜索',
        //         },
        //         '/zh/': {
        //             placeholder: '搜索',
        //         },
        //         '/en/': {
        //             placeholder: 'Search',
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
        repo: 'https://gitee.com/lingdu_dou/vuepress-lingdu-v2',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 导航栏
        navbar: navbarMy,
        // 侧边栏
        sidebar: sidebarMy,
        sidebarDepth: 3, // 嵌套的标题链接（这里设置为3层）[全局设置]
        /// 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://gitee.com/lingdu_dou/vuepress-lingdu-v2',
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







/**
 * 获取当前时间
 */
function currentTime() {
    var date = new Date();
    var year = date.getFullYear(); //月份从0~11，所以加一
    let month = date.getMonth();
    console.log("month",month);
    var dateArr = [
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
    ];
    //如果格式是MM则需要此步骤，如果是M格式则此循环注释掉
    for (var i = 0; i < dateArr.length; i++) {
        if (dateArr[i] >= 1 && dateArr[i] <= 9) {
            dateArr[i] = Number("0" + dateArr[i]);
        }
    }
    var strDate =
        year +
        "-" +
        dateArr[0] +
        "-" +
        dateArr[1] +
        " " +
        dateArr[2] +
        ":" +
        dateArr[3] +
        ":" +
        dateArr[4];
    //此处可以拿外部的变量接收  strDate:2022-05-01 13:25:30
    //this.date = strDate;
    console.log("strDate",strDate);
    return strDate;
}
