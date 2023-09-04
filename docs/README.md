---
pageClass: 首页
home: true
heroImage: /img/logo.png
bgImage: /img/1.jpg
heroText: 〇°
tagline: 今天快乐
title: 〇°
head:
- ['script', { src: '/vuepress-lingdu-v2/js/utils/实时访客2.js' }]
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
        text: '访问者地域分布图',
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
const height = 700;// 设置高度
```

:::

<!-- #endregion demo -->


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
const cumulativeData = [visitData[0]];
for (let i = 1; i < visitData.length; i++) {
    cumulativeData.push(cumulativeData[i - 1] + visitData[i]);
}
// cumulativeData.reverse();// 反转

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
const cumulativeDurationData = [durationData[0]];
for (let i = 1; i < durationData.length; i++) {
    cumulativeDurationData.push(cumulativeDurationData[i - 1] + durationData[i]);
}
// cumulativeDurationData.reverse();// 反转


const option = {
    // title: {
    //     text: '访问量趋势图',
    //     x: 'center',
    //     textStyle: {
    //         color: '#666'
    //     }
    // },
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
        selected: {
            '访问量': false,  // 将需要隐藏的图例名称设置为 false
            '页面停留时长': false  // 将需要隐藏的图例名称设置为 false
        },
        data: ['访问量','累计访问量','页面停留时长','累计页面停留时长'],
        // left: '15%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dateList.reverse(), // 反转
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
            name: '累计访问量'
        },
        {
            type: 'value',
            name: '页面停留时长/s',
            min: 0,
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            name: '累计页面停留时长/s',
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
            data: visitData.reverse(), // 反转
            // itemStyle: {
            //     color: 'red'  // 设置该系列对应图例的颜色
            // }
        },
        {
            name: '累计访问量',
            type: 'line',
            smooth: true,
            data: cumulativeData
        },
        {
            name: '页面停留时长',
            type: 'bar',
            yAxisIndex: 2,
            smooth: true,
            data: durationData.reverse(), // 反转
        },
        {
            name: '累计页面停留时长',
            type: 'bar',
            yAxisIndex: 2,
            smooth: true,
            data: cumulativeDurationData
        }
    ]
};

```

:::

<!-- #endregion demo -->





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










