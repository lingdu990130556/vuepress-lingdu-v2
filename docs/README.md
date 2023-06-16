---
pageClass: 首页
home: true
heroImage: /img/logo.png
bgImage: /img/1.jpg
heroText: ⭕°
tagline: 今天快乐
head:
- ['script', { src: '/vuepress-lingdu-v2/js/three.js' }]
- ['script', { src: '/vuepress-lingdu-v2/js/xuanfuqiu.js' }]
- ['script', { src: '/vuepress-lingdu-v2/js/utils/实时访客2.js' }]
---


[//]: # (访问量趋势图)
<!-- #region demo -->

::: echarts 访问量趋势图

```js
const dateList = [];
const visitData = [];
var dateString;
for (var i = 1; i < dataset.rows.length; i++) {
    var date = new Date(dataset.rows[i][1]);
    if (date != undefined && date != 'Invalid Date') {
        // continue;
        dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
    if (!dateList.includes(dateString)) {
        dateList.push(dateString);
        visitData.push(1);
    } else {
        var index = dateList.indexOf(dateString);
        visitData[index]++;
    }
}

const dateList2 = [];
const durationData = [];

for (var i = 1; i < dataset.rows.length; i++) {
    var date = new Date(dataset.rows[i][1]);
    if (date != undefined && date != 'Invalid Date') {
        dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
    var duration = parseInt(dataset.rows[i][24]); // 获取停留时长并转化为整型
    if (!isNaN(duration) && duration > 0) { // 判断是否为数字且大于0
        if (!dateList2.includes(dateString)) {
            dateList2.push(dateString);
            durationData.push(duration);
        } else {
            var index = dateList2.indexOf(dateString);
            durationData[index] += duration;
        }
    }
}


const option = {
    title: {
        subtext: '站点统计',
        sublink: './statstics/',
        // text: '访问量趋势图',
        // x: 'center',
        // textStyle: {
        //     color: '#666'
        // }
    },
    // ECharts 中的 toolbox 是一个工具箱，提供了多种常用的工具，如数据区域缩放、导出图片、数据视图等，可以帮助用户更方便地查看和操作图表。
    toolbox: {
        show: true,
        feature: {
            dataView: {
                readOnly: false
            },
            magicType: {
                type: [
                    "line",
                    "bar"
                ]
            },
            restore: {},
            saveAsImage: {}
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['访问量','页面停留时长'],
        // left: '15%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dateList,
        axisLabel: {
            interval: 0,
            rotate: 45
        }
    },
    yAxis: [
        {
            type: 'value',
            name: '访问次数'
        },
        {
            type: 'value',
            name: '页面停留时长/s',
            min: 0,
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: '访问量',
            type: 'line',
            smooth: true,
            data: visitData
        },
        {
            name: '页面停留时长',
            type: 'bar',
            yAxisIndex: 1,
            smooth: true,
            data: durationData
        }
    ]
};

```

:::

<!-- #endregion demo -->


[//]: # (访问者地域分布图)
<!-- #region demo -->

::: echarts 访问者地域分布图

```js
// 统计地域信息
const areaData = {};
let total = 0;
dataset.rows.forEach(row => {
    const area = row[2];
    if (area == undefined || area === '') {
        return;
    }
    if (!areaData[area]) {
        areaData[area] = 0;
    }
    areaData[area]++;
    total++;
});

// 转化为 ECharts 数据格式
const chartData = [];
for (const area in areaData) {
    const count = areaData[area];
    chartData.push({
        value: count,
        name: area
    });
}

// 指定图表的配置项和数据
const option = {
    // title: {
    //     text: '访问者地域分布图',
    //     x: 'center'
    // },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // left: 'left',
        data: Object.keys(areaData)
    },
    series: [
        {
            name: '地域分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: chartData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
```

:::

<!-- #endregion demo -->


[//]: # (<div id="canvas-container"></div>)

```card
title: 书签
logo: http://lingdu_dou.gitee.io/lingdu/img/logo.png
link: /bookmark/
color: rgb(154 219 190 / 44%)
```
```card
title: 博弈AI
logo: http://lingdu_dou.gitee.io/lingdu/img/logo.png
link: https://chat.bo-e.com/
color: rgb(154 219 190 / 44%)
```
```card
title: Markdown 增强
desc: 为 VuePress2 提供更多 Markdown 增强功能
logo: https://plugin-md-enhance.vuejs.press/logo.svg
link: https://plugin-md-enhance.vuejs.press/zh/
color: rgb(154 219 190 / 44%)
```
```card
title: RuoYi
desc: 使用若依快速构建web应用程序
logo: http://doc.ruoyi.vip/images/logo.png
link: http://doc.ruoyi.vip/
color: rgb(154 219 190 / 44%)
```
```card
title: VuePress
desc: Vue 驱动的静态网站生成器
logo: https://v2.vuepress.vuejs.org/images/hero.png
link: https://v2.vuepress.vuejs.org/zh/
color: rgb(154 219 190 / 44%)
```
```card
title: 后来的我们
desc: 
logo: https://zyj_yida.gitee.io/source/img/ico/logo.png
link: https://zhangyujie.top/blog/
color: rgb(154 219 190 / 44%)
```
```card
title: Java技术指北
desc: 分享Java技术相关的东西，包括但不限于源码解析、面试宝典、日常问题排查、工作趣文等等。
logo: http://lingdu_dou.gitee.io/lingdu/img/logo.png
link: https://www.javanorth.cn/
color: rgb(154 219 190 / 44%)
```

<SiteInfo
name="Hungry's Blog"
desc="记录， 成为更好的自己。"
url="http://linchenggu.gitee.io/blog/"
logo="http://linchenggu.gitee.io/blog/avatar.jpg"
repo="https://gitee.com/linchenggu/blog"
preview="http://linchenggu.gitee.io/blog/avatar.jpg"
/>

```card
title: 汉格瑞
desc: Hungry's Blog 记录， 成为更好的自己。
logo: http://linchenggu.gitee.io/blog/avatar.jpg
link: http://linchenggu.gitee.io/blog/
color: rgb(154 219 190 / 44%)
```
```card:json
{
  "title": "一枚前端程序媛的blog",
  "desc": "小飞侠Pan",
  "logo": "https://panjingyi.top/img/logo.jpg",
  "link": "https://panjingyi.top/",
  "color": "rgb(154 219 190 / 44%)"
}
```
```card:json
{
  "title": "Mr.理",
  "logo": "http://lingdu_dou.gitee.io/lingdu/img/logo.png",
  "link": "https://itwangxl.gitee.io/",
  "color": "rgb(154 219 190 / 44%)"
}
```
```card:json
{
  "title": "静水深流",
  "desc": "为梦想而年轻，为年轻而坚定",
  "logo": "https://slbblog.oss-cn-beijing.aliyuncs.com/head.jpeg",
  "link": "https://slbyml.github.io/",
  "color": "rgb(154 219 190 / 44%)"
}
```
```card:json
{
  "title": "程序员导航",
  "desc": "程序员一站式导航",
  "logo": "http://cxy521.com/static/img/logo.png",
  "link": "http://cxy521.com/index.html",
  "color": "rgb(154 219 190 / 44%)"
}
```
```card:json
{
  "title": "Mr.Hope",
  "desc": "Where there is light, there is hope",
  "logo": "https://mrhope.site/logo.svg",
  "link": "https://mrhope.site",
  "color": "rgb(154 219 190 / 44%)"
}
```
```card:json
{
  "title": "Spring Cloud 中文索引",
  "desc": "Spring Cloud 中文索引",
  "logo": "http://favorites.ren/assets/images/keeppuresmile.jpg",
  "link": "http://springcloud.fun/",
  "color": "rgb(154 219 190 / 44%)"
}
```
```card:json
{
  "title": "原创技术博客大联盟",
  "desc": "欢迎同样写技术博客的你入群，加群请提供博客地址。QQ群:531982415，或者加微信puresmilea，备注“原创技术博客”。",
  "logo": "http://lingdu_dou.gitee.io/lingdu/img/logo.png",
  "link": "http://techblog.pub/",
  "color": "rgb(154 219 190 / 44%)"
}
```
```card:json
{
  "title": "阿虚同学",
  "desc": "阿虚同学的储物间",
  "logo": "https://pic.rmb.bdstatic.com/bjh/cf893a875aa0bbdf8add1dc58a9c1c4d.png",
  "link": "https://axutongxue.com/",
  "color": "rgb(154 219 190 / 44%)"
}
```



[//]: # (::: tip 网易云音乐)

[//]: # (<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1423366098&auto=0&height=66"></iframe>)

[//]: # (<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=450 src="//music.163.com/outchain/player?type=0&id=5163968960&auto=1&height=430"></iframe>)

[//]: # (:::)


|网站|网名|网址|
|:-:|:-:|:-:|
|CSDN|零〇°豆|[https://blog.csdn.net/lingdu_dou](https://blog.csdn.net/lingdu_dou)|
|Gitee|零〇°度|[https://gitee.com/lingdu_dou](https://gitee.com/lingdu_dou)|
|Gitee博客|〇°|[https://lingdu_dou.gitee.io/lingdu/](https://lingdu_dou.gitee.io/lingdu/)|
|GitHub|零度|[https://github.com/lingdu990130556](https://github.com/lingdu990130556)|
|博客园|了赢零的雾度|[https://www.cnblogs.com/990130556-lingdu/](https://www.cnblogs.com/990130556-lingdu/)|
|知乎|零度|[https://www.zhihu.com/people/ling-du-47-17-93](https://www.zhihu.com/people/ling-du-47-17-93)|
|[〇〇〇〇〇〇〇〇〇〇〇〇〇](/)|[〇〇〇〇〇〇〇〇〇〇〇〇〇](/)|[〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇](/)|




[//]: # (<BiliBili )

[//]: # (aid="313718550" )

[//]: # (cid="1131151039" )

[//]: # (ratio="16:9" )

[//]: # (time="60" )

[//]: # (autoplay )

[//]: # (page="1" />)


[//]: # (<XiGua)

[//]: # (id="7238728608691585569")

[//]: # (autoplay)

[//]: # (time="0" />)

