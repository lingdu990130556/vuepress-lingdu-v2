import type {NavbarConfig} from '@vuepress/theme-default'
import {version} from '../meta.js'
// 我的导航栏配置
export const navbarMy: NavbarConfig = [
    {text: "首页", link: "/"},
    // {
    //     text: "文档", children: [
    //         {
    //             text: "书签", children: [
    //                 '/bookmark/index.html',
    //             ]
    //         },
    //     ]
    // },
    {
        text: '本站建设', children: [
            {
                text: '文档网站建设', children: [
                    {text: "vuepresss", link: "/docs/boke/"},
                    {text: "markdown", link: "/docs/boke/markdown/"},
                    {text: "Markdown 增强", link: "https://plugin-md-enhance.vuejs.press/zh/"},
                ]
            }
        ]
    },
    {
        text: 'Java周边', children: [
            {
                text: '基础', children: [
                    {text: "开发", link: "/docs/kaifa/工具教程.md"},
                    {text: "Java", link: "/docs/kaifa/java/"},
                    {text: "IDEA", link: "/docs/kaifa/idea/"},
                    {text: "数据库", link: "/docs/kaifa/db/"},
                    {text: "maven", link: "/docs/kaifa/maven/"},
                    {text: "node", link: "/docs/kaifa/node/"},
                    {text: "vue", link: "/docs/kaifa/vue/"},
                    {text: "http", link: "/docs/kaifa/http/"},
                    {text: "webservice", link: "/docs/kaifa/webservice/"},
                    {text: "activiti", link: "/docs/kaifa/activiti/"},
                ]
            },
            {
                text: '第三方插件', children: [
                    {text: "nginx", link: "/docs/kaifa/nginx/"},
                    {text: "nacos", link: "/docs/kaifa/nacos/"},
                    {text: "redis", link: "/docs/kaifa/redis/"},
                    {text: "seata", link: "/docs/kaifa/seata/"},
                    {text: "sentinel", link: "/docs/kaifa/sentinel/"},
                    {text: "skywalking", link: "/docs/kaifa/skywalking/"},
                    {text: "Kafka", link: "/docs/kaifa/kafka/"},
                    {text: "NiFi", link: "/docs/kaifa/nifi/"},
                    {text: "OGG", link: "/docs/kaifa/ogg/"},
                    {text: "Canal", link: "/docs/kaifa/canal/"},
                    {text: "zookeeper", link: "/docs/kaifa/zookeeper/"},
                ]
            },
            {
                text: '系统', children: [
                    {text: "操作系统", link: "/docs/kaifa/basics/操作系统.md"},
                    {text: "Docker", link: "/docs/kaifa/docker/"},
                    {text: "linux", link: "/docs/kaifa/linux/"},
                    {text: "Windows", link: "/docs/kaifa/window/"},
                ]
            }
        ]
    },
    {
        text: "相关官方文档",
        children: [
            {text: "默认主题配置", link: "https://v2.vuepress.vuejs.org/zh/"},
            {text: "评论插件", link: "https://vssue.js.org/zh/"},
            {text: "若依", link: "http://doc.ruoyi.vip/"},
            // {text: "评论无法使用相关说明", link: "https://www.zhihu.com/question/392358467"},
        ]
    },
    {
        text: "友情链接",
        children: [
            {text: "汉格瑞", link: "http://linchenggu.gitee.io/blog/"},
            {text: "Mr.理", link: "https://itwangxl.gitee.io/"},
            {text: "阿虚同学的储物间", link: "https://axutongxue.com/"},
            {text: "zhoukaishun", link: "https://zhoukaishun.gitee.io/"},
            {text: "TiAmo🚶", link: "https://www.yuque.com/tiamo-f7tfy/xr139y/id1u7g"},
            {text: "一枚前端程序媛的blog", link: "https://panjingyi.top/"},
            {text: "yyshino", link: "https://v-blog.yyshino.top/"},
            {text: " _鹅不食草_", link: "https://haveyuan.github.io/"},
            {text: "山月行", link: "https://shanyue.tech/"},
            {text: "程序员导航", link: "https://cxy521.com/index.html"},
            {text: "开源小分队", link: "https://sourceteam.gitee.io/blog/"},
            {text: "前端实验室", link: "https://frontlab.gitee.io/blog/"},
            {text: "Java技术指北", link: "https://www.javanorth.cn/"},
            {text: "python技术", link: "http://www.justdopython.com/"},
            {text: "技术博客联盟", link: "http://techblog.pub/"},
            {text: "spring boot中文导航", link: "http://springboot.fun/"},
            {text: "spring cloud中文导航", link: "http://springcloud.fun/"},
            {text: "NiFi中文文档", link: "https://nifichina.gitee.io/"},
        ]
    },
    {
        text: '版本v2.x', children: [
            {text: "版本v1.x", link: "http://lingdu_dou.gitee.io/lingdu/"},
            {text: "版本v2.x", link: "/"},
        ]
    },
    // {text: 'TimeLine', link: '/timeline/'},
    {text: "留言板", link: "/plugin/留言板.md"},
    {text: "我", link: "/docs/me/"},
    //******************************************************************************************************************
    // {
    //     text: '参考',
    //     children: [
    //         {
    //             text: 'VuePress',
    //             children: [
    //                 '/zh/reference/cli.md',
    //                 '/zh/reference/config.md',
    //                 '/zh/reference/frontmatter.md',
    //                 '/zh/reference/components.md',
    //                 '/zh/reference/plugin-api.md',
    //                 '/zh/reference/theme-api.md',
    //                 '/zh/reference/client-api.md',
    //                 '/zh/reference/node-api.md',
    //             ],
    //         },
    //         {
    //             text: '打包工具',
    //             children: [
    //                 '/zh/reference/bundler/vite.md',
    //                 '/zh/reference/bundler/webpack.md',
    //             ],
    //         },
    //         {
    //             text: '默认主题',
    //             children: [
    //                 '/zh/reference/default-theme/config.md',
    //                 '/zh/reference/default-theme/frontmatter.md',
    //                 '/zh/reference/default-theme/components.md',
    //                 '/zh/reference/default-theme/markdown.md',
    //                 '/zh/reference/default-theme/styles.md',
    //                 '/zh/reference/default-theme/extending.md',
    //             ],
    //         },
    //     ],
    // },
    // {
    //     text: '插件',
    //     children: [
    //         {
    //             text: '常用功能',
    //             children: [
    //                 '/zh/reference/plugin/back-to-top.md',
    //                 '/zh/reference/plugin/container.md',
    //                 '/zh/reference/plugin/external-link-icon.md',
    //                 '/zh/reference/plugin/google-analytics.md',
    //                 '/zh/reference/plugin/medium-zoom.md',
    //                 '/zh/reference/plugin/nprogress.md',
    //                 '/zh/reference/plugin/register-components.md',
    //             ],
    //         },
    //         {
    //             text: '内容搜索',
    //             children: [
    //                 '/zh/reference/plugin/docsearch.md',
    //                 '/zh/reference/plugin/search.md',
    //             ],
    //         },
    //         {
    //             text: 'PWA',
    //             children: [
    //                 '/zh/reference/plugin/pwa.md',
    //                 '/zh/reference/plugin/pwa-popup.md',
    //             ],
    //         },
    //         {
    //             text: '语法高亮',
    //             children: [
    //                 '/zh/reference/plugin/prismjs.md',
    //                 '/zh/reference/plugin/shiki.md',
    //             ],
    //         },
    //         {
    //             text: '主题开发',
    //             children: [
    //                 '/zh/reference/plugin/active-header-links.md',
    //                 '/zh/reference/plugin/git.md',
    //                 '/zh/reference/plugin/palette.md',
    //                 '/zh/reference/plugin/theme-data.md',
    //                 '/zh/reference/plugin/toc.md',
    //             ],
    //         },
    //     ],
    // },
    // {
    //     text: '了解更多',
    //     children: [
    //         {
    //             text: '深入',
    //             children: [
    //                 '/zh/advanced/architecture.md',
    //                 '/zh/advanced/plugin.md',
    //                 '/zh/advanced/theme.md',
    //                 {
    //                     text: 'Cookbook',
    //                     link: '/zh/advanced/cookbook/',
    //                 },
    //             ],
    //         },
    //         {
    //             text: '其他资源',
    //             children: [
    //                 '/zh/contributing.md',
    //                 {
    //                     text: 'Awesome VuePress',
    //                     link: 'https://github.com/vuepress/awesome-vuepress',
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     text: `v${version}`,
    //     children: [
    //         {
    //             text: '更新日志',
    //             link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
    //         },
    //         {
    //             text: 'v1.x',
    //             link: 'https://v1.vuepress.vuejs.org/zh/',
    //         },
    //         {
    //             text: 'v0.x',
    //             link: 'https://v0.vuepress.vuejs.org/zh/',
    //         },
    //     ],
    // },
]
