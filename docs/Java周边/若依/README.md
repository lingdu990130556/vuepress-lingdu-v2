# 前端vue设置子路径
![](./imgs/img_4.png)

:::tip 本文档中以前后端分离版为例，版本为:3.8.6
:::

## 一、 设置变量

在`.env.development`和`.env.production` 中定义一个变量如`VUE_APP_PROJECT_IDENTIFIER`

:::warning
这个变量是为了统一设置子路径，方便统一修改。也可以不设置，直接写子路径。
:::


```env
# 项目标识字符
VUE_APP_PROJECT_IDENTIFIER = 'admin'
```

## 二、 引用路径变量

```js
${process.env.VUE_APP_PROJECT_IDENTIFIER}
```

### 1. ruoyi-ui/vue.config.js

![](./imgs/img.png)

### 2. ruoyi-ui/src/router/index.js

![](./imgs/img_1.png)

### 3. ruoyi-ui/src/utils/request.js

![](./imgs/img_2.png)

### 4. ruoyi-ui/src/layout/components/Navbar.vue

![](./imgs/img_3.png)
