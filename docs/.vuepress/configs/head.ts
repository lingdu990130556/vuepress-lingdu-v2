import type {HeadConfig} from '@vuepress/core'

const name = '/vuepress-lingdu-v2'

export const head: HeadConfig[] = [
    // 添加浏览器图标
    // ["link", {rel: "icon",href: '/img/logo.png', type: 'image/jpg'}],
    // 站点访问统计 百度
    // http://lingdu990130556.gitee.io/lingdu/
    [
        'script', {}, `
          var _hmt = _hmt || [];
          (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?4a9891b3899967e538a88e44298b05d6";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
          })();
        `
    ],
    // http://lingdu990130556.gitee.io/vuepress-lingdu-v2/
    [
        'script', {}, `
          var _hmt = _hmt || [];
          (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?9222123671a98ea25bca43b8fdf06169";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
          })();
        `
    ],
    // https://lingdu990130556.github.io/vuepress-lingdu-v2/
    [
        'script', {}, `
          var _hmt = _hmt || [];
          (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?cd090cc8a46bfe4d084c0460dad876fc";
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
