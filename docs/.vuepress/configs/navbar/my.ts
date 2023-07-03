import type {NavbarConfig} from '@vuepress/theme-default'
import {version} from '../meta.js'
// 我的导航栏配置
export const navbarMy: NavbarConfig = [
    {text: "首页", link: "/"},
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
                    {text: "Echarts", link: "/docs/kaifa/echarts/"},
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
        text: '版本v2.x', children: [
            {text: "版本v1.x", link: "http://lingdu990130556.gitee.io/lingdu/"},
            {text: "版本v2.x Gitee", link: "http://lingdu990130556.gitee.io/vuepress-lingdu-v2/"},
            {text: "版本v2.x GitHub", link: "https://lingdu990130556.github.io/vuepress-lingdu-v2/"},
        ]
    },
    {text: '统计', link: '/statstics/'},
    {text: '友链', link: '/plugin/yl/youlian.md'},
    {text: "留言板", link: "/plugin/留言板.md"},
    {text: "关于", link: "/docs/me/"},
    {text: "源码", children:[
            {text: "Gitee", link: "https://gitee.com/lingdu990130556/vuepress-lingdu-v2"},
            {text: "GitHub", link: "https://github.com/lingdu990130556/vuepress-lingdu-v2/"},
        ]},

]
