import type {NavbarConfig} from '@vuepress/theme-default'
import {version} from '../meta.js'
// 我的导航栏配置
export const navbarMy: NavbarConfig = [
    {text: "首页", link: "/"},
    {text: "标签云", link: "/标签/标签.md"},
    {text: "虫〇°洞", link: "/友链/博客圈.md"},
    {
        text: '本站建设', children: [
            {
                text: '文档网站建设', children: [
                    {text: "本站服务器", link: "https://www.aliyun.com/minisite/goods?userCode=s5ttgz3u"},
                    {text: "VuePresss", link: "/本站建设/"},
                    {text: "Markdown", link: "/本站建设/markdown/"},
                    {text: "音乐播放器", link: "/本站建设/插件/音乐播放器.md"},
                ]
            },
            {
                text: 'HowToCook', children: [
                    {text: "HowToCook", link: "/HowToCook/README.md"},
                ]
            },
        ]
    },
    {
        text: '云服务器', children: [
            {
                text: '特惠推广', children: [
                    {text: "特惠推广", link: "/友链/特惠推广.md"},
                ]
            },
            {
                text: '阿里云特惠', children: [
                    {text: "云小站特惠", link: "https://www.aliyun.com/minisite/goods?userCode=s5ttgz3u"},
                    {text: "免费试用", link: "https://free.aliyun.com?userCode=s5ttgz3u"},
                    {text: "服务器省钱攻略", link: "https://www.aliyun.com/daily-act/ecs/ecs_trial_benefits?userCode=s5ttgz3u"},
                    {text: "新人特惠专享", link: "https://www.aliyun.com/activity/new/index?userCode=s5ttgz3u"},
                    {text: "云服务器|精选特惠", link: "https://www.aliyun.com/daily-act/ecs/activity_selection?userCode=s5ttgz3u"},
                    {text: "最新活动页", link: "https://www.aliyun.com/activity?userCode=s5ttgz3u"},
                ]
            },
            {
                text: '腾讯云特惠', children: [
                    {text: "云产品特惠", link: "https://curl.qcloud.com/2OpSOLD6"},
                    {text: "金秋上云季", link: "https://curl.qcloud.com/ZydWDT9F"},
                    {text: "轻量应用服务器", link: "https://curl.qcloud.com/3e3UcSPZ"},
                    {text: "音视频低代码", link: "https://curl.qcloud.com/W9bmVW8F"},
                    {text: "即时通讯IM", link: "https://curl.qcloud.com/xdFDPqC6"},
                    {text: "网络产品专场特惠", link: "https://curl.qcloud.com/FRXgTPym"},
                    {text: "新客专属福利", link: "https://curl.qcloud.com/zss38JSa"},
                    {text: "ES（Elasticsearch）", link: "https://curl.qcloud.com/qRhpCxJV"},
                    {text: "腾讯云图", link: "https://curl.qcloud.com/pLA2xTVq"},
                    {text: "视频通信爆款特惠", link: "https://curl.qcloud.com/ijCkxJgd"},
                    {text: "9.9元畅享2万分钟TRTC通话", link: "https://curl.qcloud.com/bQrUo12b"},
                ]
            },
        ]
    },
    // {
    //     text: 'Java周边', children: [
    //         {
    //             text: '基础', children: [
    //                 {text: "Java", link: "/Java周边/基础/java/1知识架构.md"},
    //                 {text: "IDEA", link: "/Java周边/基础/idea/"},
    //                 {text: "数据库", link: "/Java周边/基础/db/"},
    //                 {text: "maven", link: "/Java周边/基础/maven/"},
    //                 {text: "node", link: "/Java周边/基础/node/"},
    //                 {text: "vue", link: "/Java周边/基础/vue/"},
    //                 {text: "Echarts", link: "/Java周边/基础/echarts/"},
    //                 {text: "http", link: "/Java周边/基础/http/"},
    //                 {text: "webservice", link: "/Java周边/基础/webservice/"},
    //                 {text: "activiti", link: "/Java周边/基础/activiti/"},
    //             ]
    //         },
    //         {
    //             text: '第三方插件', children: [
    //                 {text: "nginx", link: "/Java周边/第三方插件/nginx/"},
    //                 {text: "nacos", link: "/Java周边/第三方插件/nacos/"},
    //                 {text: "redis", link: "/Java周边/第三方插件/redis/"},
    //                 {text: "seata", link: "/Java周边/第三方插件/seata/"},
    //                 {text: "sentinel", link: "/Java周边/第三方插件/sentinel/"},
    //                 {text: "skywalking", link: "/Java周边/第三方插件/skywalking/"},
    //                 {text: "Kafka", link: "/Java周边/第三方插件/kafka/"},
    //                 {text: "NiFi", link: "/Java周边/第三方插件/nifi/"},
    //                 {text: "OGG", link: "/Java周边/第三方插件/ogg/"},
    //                 {text: "Canal", link: "/Java周边/第三方插件/canal/"},
    //                 {text: "zookeeper", link: "/Java周边/第三方插件/zookeeper/"},
    //             ]
    //         },
    //         {
    //             text: '系统', children: [
    //                 {text: "操作系统", link: "/Java周边/系统/操作系统/操作系统.md"},
    //                 {text: "Docker", link: "/Java周边/系统/docker/"},
    //                 {text: "linux", link: "/Java周边/系统/linux/"},
    //                 {text: "Windows", link: "/Java周边/系统/windows/"},
    //             ]
    //         }
    //     ]
    // },
    {text: '友/关/留', children: [
            {text: '友链', link: '/友链/博客圈.md'},
            {text: "关于", link: "/关于/我/"},
            {text: "留言板", link: "/友链/留言板.md"},
        ]
    },
    {text: '版/源', children: [
            {
                text: '版本v2.x', children: [
                    {text: "版本v1.x", link: "http://lingdu990130556.gitee.io/lingdu/"},
                    {text: "版本v2.x Gitee", link: "http://lingdu990130556.gitee.io/vuepress-lingdu-v2/"},
                    {text: "版本v2.x GitHub", link: "https://lingdu990130556.github.io/vuepress-lingdu-v2/"},
                    {text: "版本v2.x 个人网站", link: "http://lingdu.love"},
                ]
            },
            {
                text: "源码", children: [
                    {text: "Gitee", link: "https://gitee.com/lingdu990130556/vuepress-lingdu-v2"},
                    {text: "GitHub", link: "https://github.com/lingdu990130556/vuepress-lingdu-v2/"},
                ]
            },
        ]
    },
    {text: "chatGPT", link: "https://chat18.aichatos8.com/"},


]
