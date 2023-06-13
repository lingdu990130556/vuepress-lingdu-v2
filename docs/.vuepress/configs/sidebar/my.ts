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
        {text: 'Echarts',collapsible: true, children: getChildren('/docs/kaifa/Echarts/')},
    ],
    '/space/qzone/':[{text:'青春日记',children:getChildren('/space/qzone/')}],
    '/statstics/':[{text:'站点统计',children:getChildren('/statstics/')}],
    // '/docs/me/':[{text:'关于我',children:['/docs/me/README.md']}],



}
