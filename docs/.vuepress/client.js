
// 百度站点统计 辅助代码 数据统计页面地址：https://tongji.baidu.com/main/overview/10000521075/overview/index?siteId=18688698
export default ({ router }) => {
    router.beforeEach((to, from, next) => {
        if (typeof _hmt !== "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
            }
        }

        next();
    });
};
