import type {SidebarConfig} from '@vuepress/theme-default';

import {getChildren} from '../../util';


const sidebar = {
    '/本站建设/': [
        {
            text: '文档网站建设', children: [
                {text: '站点统计', children: getChildren('/本站建设/站点统计/')},
                {text: "vuepresss", children: getChildren("/本站建设/")},
                {text: "markdown", children: getChildren("/本站建设/markdown/")},
                {text: "插件", children: getChildren("/本站建设/插件/")},
                {text: "工具", children: getChildren("/本站建设/工具/LRC滚动歌词编辑器/")},
            ]
        }
    ],
    // 开发相关
    '/Java周边/': [
        {
            text: '基础', children: [
                {text: "Java", children: getChildren("/Java周边/基础/java/")},
                {text: "IDEA", children: getChildren("/Java周边/基础/idea/")},
                {text: "数据库", children: getChildren("/Java周边/基础/db/")},
                {text: "maven", children: getChildren("/Java周边/基础/maven/")},
                {text: "node", children: getChildren("/Java周边/基础/node/")},
                {text: "vue", children: getChildren("/Java周边/基础/vue/")},
                {text: "Echarts", children: getChildren("/Java周边/基础/echarts/")},
                {text: "http", children: getChildren("/Java周边/基础/http/")},
                {text: "webservice", children: getChildren("/Java周边/基础/webservice/")},
                {text: "activiti", children: getChildren("/Java周边/基础/activiti/")},
            ]
        },
        {
            text: '第三方插件', children: [
                {text: "nginx", children: getChildren("/Java周边/第三方插件/nginx/")},
                {text: "nacos", children: getChildren("/Java周边/第三方插件/nacos/")},
                {text: "redis", children: getChildren("/Java周边/第三方插件/redis/")},
                {text: "seata", children: getChildren("/Java周边/第三方插件/seata/")},
                {text: "sentinel", children: getChildren("/Java周边/第三方插件/sentinel/")},
                {text: "skywalking", children: getChildren("/Java周边/第三方插件/skywalking/")},
                {text: "Kafka", children: getChildren("/Java周边/第三方插件/kafka/")},
                {text: "NiFi", children: getChildren("/Java周边/第三方插件/nifi/")},
                {text: "OGG", children: getChildren("/Java周边/第三方插件/ogg/")},
                {text: "Canal", children: getChildren("/Java周边/第三方插件/canal/")},
                {text: "zookeeper", children: getChildren("/Java周边/第三方插件/zookeeper/")},
            ]
        },
        {
            text: '系统', children: [
                {text: "操作系统", children: getChildren("/Java周边/系统/操作系统/操作系统.md")},
                {text: "Docker", children: getChildren("/Java周边/系统/docker/")},
                {text: "linux", children: getChildren("/Java周边/系统/linux/")},
                {text: "Windows", children: getChildren("/Java周边/系统/windows/")},
            ]
        },
        {
            text: '开源应用', children: [
                {text: "若依", children: getChildren("/Java周边/若依/")},
            ]
        },

    ],
    '/友链/': [{text: '友情链接', children: getChildren('/友链/')}],
    '/关于/我/空间': [
        {
            text: '青春日记', children: [
                {text: '空间', children: getChildren('/关于/我/空间/')},
                {text: '便签', children: getChildren('/关于/我/空间/便签/')},
                {text: 'QQ空间', children: getChildren('/关于/我/空间/QQ空间/')}
            ]
        }],
    '/娱乐/主播/安妮': [
        {
            text: '安妮', children: [
                {text: '平台账号', children: getChildren('/娱乐/主播/安妮/')},
                {text: '直播回放', children: getChildren('/娱乐/主播/安妮/直播回放/')},
            ],
        },
    ],
    '/娱乐/主播/恩甜': [
        {text: '恩甜', children: getChildren('/娱乐/主播/恩甜/')},
    ],

}

/**
 * 递归设置可折叠
 * @param obj 递归对象
 */
function addCollapsible(obj) {
    for (const key in obj) {
        const item = obj[key];
        if (typeof item === 'object') {
            item.collapsible = true;
            addCollapsible(item);
        }
    }
}

// 使所有对象可折叠
addCollapsible(sidebar);
// 解决中文文件夹问题
const encodedObj = {};
// 只对中文进行URI编码
for (const key in sidebar) {
    let encodedKey = encodeURIComponent(key);
    if (key.includes("/")) {
        encodedKey = encodedKey.replace(/%2F/g, '/');
    }
    encodedObj[encodedKey] = sidebar[key];
}
// console.log(encodedObj);
// 我的侧边栏配置
export const sidebarMy: SidebarConfig = encodedObj;


