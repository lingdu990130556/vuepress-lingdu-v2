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
    '/HowToCook/':[
        {
            text: '程序员做饭指南', children: [
                {text: "HowToCook", children: getChildren("/HowToCook/")},
                {text: "做菜之前", children: getChildren("/HowToCook/tips/")},
                {text: "熟记", children: getChildren("/HowToCook/tips/learn/")},
                {text: "菜谱", children: [
                        {text: "素菜", children: getChildren("/HowToCook/dishes/vegetable_dish/")},
                        {text: "荤菜", children: getChildren("/HowToCook/dishes/meat_dish/")},
                        {text: "水产", children: getChildren("/HowToCook/dishes/aquatic/")},
                        {text: "早餐", children: getChildren("/HowToCook/dishes/breakfast/")},
                        {text: "主食", children: getChildren("/HowToCook/dishes/staple/")},
                        {text: "半成品加工", children: getChildren("/HowToCook/dishes/semi-finished/")},
                        {text: "汤与粥", children: getChildren("/HowToCook/dishes/soup/")},
                        {text: "饮料", children: getChildren("/HowToCook/dishes/drink/")},
                        {text: "酱料和其他材料", children: getChildren("/HowToCook/dishes/condiment/")},
                        {text: "甜品", children: getChildren("/HowToCook/dishes/dessert/")},
                    ]
                },
                {text: "进阶知识学习", children: getChildren("/HowToCook/tips/advanced/")},
            ],
        }
    ],
    // 开发相关
    '/Java周边/': [
        {
            text: '基础', children: [
                {text: "Java", children: getChildren("/Java周边/基础/java/")},
                {text: "IDEA", children: getChildren("/Java周边/基础/idea/")},
                {text: "数据库", children: getChildren("/Java周边/基础/db/")},
                {text: "Mybatis", children: getChildren("/Java周边/基础/Mybatis/")},
                {text: "maven", children: getChildren("/Java周边/基础/maven/")},
                {text: "node", children: getChildren("/Java周边/基础/node/")},
                {text: "TypeScript", children: getChildren("/Java周边/基础/TypeScript/")},
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
                {text: "操作系统", children: getChildren("/Java周边/系统/操作系统/")},
                {text: "Docker", children: getChildren("/Java周边/系统/docker/")},
                {text: "linux", children: getChildren("/Java周边/系统/linux/")},
                {text: "Windows", children: getChildren("/Java周边/系统/windows/")},
            ]
        },
        {
            text: '开源应用', children: [
                {text: "若依", children: getChildren("/Java周边/若依/")},
                {text: "若依微服务", children: getChildren("/Java周边/若依/微服务/")},
            ]
        },

    ],
    '/友链/': [{text: '友情链接', children: getChildren('/友链/')}],
    '/关于/我/空间/': [
        {
            text: '青春日记', children: [
                {text: '空间', children: getChildren('/关于/我/空间/')},
                {text: '便签', children: getChildren('/关于/我/空间/便签/')},
                {text: 'QQ空间', children: getChildren('/关于/我/空间/QQ空间/')}
            ]
        }],
    /*职业生涯*/
    '/关于/我/职业生涯/': [
        {text: '职业生涯', children: [
                {text: '项目经历', children: getChildren('/关于/我/职业生涯/臻峰信息/')},
            ],},
    ],
    '/关于/我/keep/': [
        {text: 'keep', children: [
                {text: 'keep', children: getChildren('/关于/我/keep/')},
            ],},
    ],
    '/娱乐/主播/安妮/': [
        {
            text: '安妮', children: [
                {text: '平台账号', children: getChildren('/娱乐/主播/安妮/')},
                {text: '直播回放', children: getChildren('/娱乐/主播/安妮/直播回放/')},
            ],
        },
    ],
    '/娱乐/主播/恩甜/': [
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


