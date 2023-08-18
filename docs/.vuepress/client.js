import { defineClientConfig } from "@vuepress/client";
import { defineGiscusConfig } from "vuepress-plugin-comment2/client";

import Layout from "./layouts/Layout.vue";
// import Valine from "./components/Valine.vue";

defineGiscusConfig({
    repo: 'lingdu990130556/vuepress-lingdu-v2',
    repoId: 'R_kgDOJpnrJw',
    category: 'Announcements',
    categoryId: 'DIC_kwDOJpnrJ84CXcpe',
});

export default defineClientConfig({
    // 百度站点统计 辅助代码 数据统计页面地址：https://tongji.baidu.com/main/overview/10000521075/overview/index?siteId=18688698
    async enhance({ router ,app}) {
        router.beforeEach((to, from, next) => {
            if (typeof _hmt !== "undefined") {
                if (to.path) {
                    _hmt.push(["_trackPageview", to.fullPath]);
                }
            }
            next();
        })
        // app.component('Valine',Valine)
    },
    layouts: {
        // we override the default layout to provide comment service 我们覆盖默认布局来提供评论服务
        Layout,
    },
    // 全局组件
    // rootComponents: [Valine]
});

