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
            {text: "版本v2.x Gitee", link: "http://lingdu_dou.gitee.io/vuepress-lingdu-v2/"},
            {text: "版本v2.x GitHub", link: "https://lingdu990130556.github.io/vuepress-lingdu-v2/"},
        ]
    },
    {
        text: '站点统计', children: [
            {text: "版本v1.x", link: "/statstics/README1.md"},
            {text: "版本v2.x Gitee", link: "/statstics/README.md"},
            // {text: "版本v2.x GitHub", link: "/statstics/"},
        ]
    },
    {text: '空间', link: '/space/'},
    {text: '青春日记', link: '/space/qzone/日志.md'},
    {text: "留言板", link: "/plugin/留言板.md"},
    {text: "我", link: "/docs/me/"},
    {text: "GitHub源码", link: "https://github.com/lingdu990130556/vuepress-lingdu-v2/"},

]
