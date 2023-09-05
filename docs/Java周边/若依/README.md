# 若依

## 前端vue设置子路径

:::tip 本文档中以前后端分离版为例，版本为:3.8.6
:::

### 一设置变量
在`.env.development`和`.env.production` 中定义一个变量如`VUE_APP_PROJECT_IDENTIFIER`
```env
# 项目标识字符
VUE_APP_PROJECT_IDENTIFIER = 'admin'
```

### 二引用路径变量
```js
${process.env.VUE_APP_PROJECT_IDENTIFIER}
```

1. ruoyi-ui/vue.config.js

![](./imgs/img.png)

2. ruoyi-ui/src/router/index.js

![](./imgs/img_1.png)

3. ruoyi-ui/src/utils/request.js

![](./imgs/img_2.png)

4. ruoyi-ui/src/layout/components/Navbar.vue

![](./imgs/img_3.png)
