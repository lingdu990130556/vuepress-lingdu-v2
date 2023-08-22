import type {HeadConfig} from '@vuepress/core'

const name = '/vuepress-lingdu-v2'

export const head: HeadConfig[] = [
    // 添加浏览器图标
    // ["link", {rel: "icon",href: '/img/logo.png', type: 'image/jpg'}],
    // 站点访问统计 百度
    // https://www.lingdu.love
    [
        'script', {}, `
          var _hmt = _hmt || [];
          (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?800a9c4e9d5ae1edf2054b2bc45b89dc";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
          })();
        `
    ],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: `/vuepress-lingdu-v2/img/logo.png`,},],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: `/vuepress-lingdu-v2/img/logo.png`,},],
    ['meta', {name: 'application-name', content: 'VuePress'}],
    ['meta', {name: 'apple-mobile-web-app-title', content: 'VuePress'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png`},],
    ['link', {rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg', color: '#3eaf7c',},],
    ['meta', {name: 'msapplication-TileColor', content: '#3eaf7c'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
]
