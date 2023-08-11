import type {NavbarConfig} from '@vuepress/theme-default'
import {version} from '../meta.js'
// 我的导航栏配置
export const navbarMy: NavbarConfig = [
    {text: "首页\n〇°", link: "/"},
    {text: "chatGPT", link: "https://c.binjie.fun/"},
    {
        text: '本站建设', children: [
            {
                text: '文档网站建设', children: [
                    {text: "vuepresss", link: "/本站建设/"},
                    {text: "markdown", link: "/本站建设/markdown/"},
                    {text: "音乐播放器", link: "https://lingdu990130556.gitee.io/yinyue/"},
                ]
            }
        ]
    },
    {
        text: 'Java周边', children: [
            {
                text: '基础', children: [
                    {text: "Java", link: "/Java周边/基础/java/1知识架构.md"},
                    {text: "IDEA", link: "/Java周边/基础/idea/"},
                    {text: "数据库", link: "/Java周边/基础/db/"},
                    {text: "maven", link: "/Java周边/基础/maven/"},
                    {text: "node", link: "/Java周边/基础/node/"},
                    {text: "vue", link: "/Java周边/基础/vue/"},
                    {text: "Echarts", link: "/Java周边/基础/echarts/"},
                    {text: "http", link: "/Java周边/基础/http/"},
                    {text: "webservice", link: "/Java周边/基础/webservice/"},
                    {text: "activiti", link: "/Java周边/基础/activiti/"},
                ]
            },
            {
                text: '第三方插件', children: [
                    {text: "nginx", link: "/Java周边/第三方插件/nginx/"},
                    {text: "nacos", link: "/Java周边/第三方插件/nacos/"},
                    {text: "redis", link: "/Java周边/第三方插件/redis/"},
                    {text: "seata", link: "/Java周边/第三方插件/seata/"},
                    {text: "sentinel", link: "/Java周边/第三方插件/sentinel/"},
                    {text: "skywalking", link: "/Java周边/第三方插件/skywalking/"},
                    {text: "Kafka", link: "/Java周边/第三方插件/kafka/"},
                    {text: "NiFi", link: "/Java周边/第三方插件/nifi/"},
                    {text: "OGG", link: "/Java周边/第三方插件/ogg/"},
                    {text: "Canal", link: "/Java周边/第三方插件/canal/"},
                    {text: "zookeeper", link: "/Java周边/第三方插件/zookeeper/"},
                ]
            },
            {
                text: '系统', children: [
                    {text: "操作系统", link: "/Java周边/系统/操作系统/操作系统.md"},
                    {text: "Docker", link: "/Java周边/系统/docker/"},
                    {text: "linux", link: "/Java周边/系统/linux/"},
                    {text: "Windows", link: "/Java周边/系统/windows/"},
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
    {text: '友链', link: '/友链/博客圈.md'},
    {text: "留言板", link: "/友链/留言板.md"},
    {text: "关于", link: "/关于/我/"},
    {
        text: "源码", children: [
            {text: "Gitee", link: "https://gitee.com/lingdu990130556/vuepress-lingdu-v2"},
            {text: "GitHub", link: "https://github.com/lingdu990130556/vuepress-lingdu-v2/"},
        ]
    },

]
