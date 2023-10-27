---
pageClass: 首页
home: true
heroImage: /img/logo.png
bgImage: /img/1.jpg
heroText: 〇°
tagline: 10月27日电 中国共产党第十七届、十八届、十九届中央政治局常委，国务院原总理李克强同志，近日在上海休息，2023年10月26日因突发心脏病，经全力抢救无效，于10月27日0时10分在上海逝世，享年68岁。（讣告后发）
title: 〇°
head:
- ['script', { src: '/vuepress-lingdu-v2/js/utils/实时访客2.js' }]
- ['meta', {name: 'baidu-site-verification', content: 'codeva-qKsrq7nPXz'}]
---

[统计](/本站建设/站点统计/README.md)

[//]: # (访问者地域分布图)
<!-- #region demo -->

::: echarts

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
var keys = Object.keys(areaData);
var halfLength = Math.ceil(keys.length / 2);
// 指定图表的配置项和数据
const option = {
    title: {
        text: '',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: [
        {
            orient: 'vertical',
            left: '10%',
            data: keys.slice(0, halfLength+1)
        },
        {
            orient: 'vertical',
            right: '10%',
            data: keys.slice(halfLength+1)
        }
    ],
    series: [
        {
            name: '地域分布',
            type: 'pie',
            radius: ['10%', '15%'], // 调整内外圆的大小
            center: ['50%', '50%'],
            data: chartData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                show: true,
                // position: 'inside', // 将标签放置在饼图内部
                formatter: '{b}: {c}',
                alignTo: 'none',
                bleedMargin: 5,
                edgeDistance: '30%',
                emphasis: {
                    textStyle: {
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                show: true,
                length: 30, // 调整连线的长度，可以根据具体情况进行调整
                length2: 30, // 调整连线的长度，可以根据具体情况进行调整
                smooth: true
            }
        }
    ]
};
// const height = 700;// 设置高度

```

:::

<!-- #endregion demo -->


[//]: # (访问量趋势图)
<!-- #region demo -->






<div id="shizhong">
    <iframe src="https://lingdu990130556.gitee.io/vuepress-lingdu-v2/html/shizhong/shizhong.html"></iframe>
</div>









<br><br>

<!--   备案标注   -->
<div style="width:300px;margin:0 auto; padding:20px 0; position: relative;text-align: center; color: #8b949e; font-size: 12px" data-v-99bcade8="" class="copyright">
<a target="_blank"  data-v-99bcade8="" href="https://beian.miit.gov.cn/#/Integrated/index">
  <p style="height:20px;line-height:20px;margin: 0 0 0 5px; color:#939393;">
    皖ICP备2023014487号-1
  </p>
</a>
<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34010402704001" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
  <img src="/img/备案图标.png" style="float:left;" alt=""/>
  <p style="float:left;height:20px;line-height:20px;margin: 0 0 0 5px; color:#939393;">
    皖公网安备 34010402704001号
  </p>
</a><br>
Copyright © 2023-2033 <a href="http://lingdu.love">〇°</a>
</div>

<br>










