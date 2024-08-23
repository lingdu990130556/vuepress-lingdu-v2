---
pageClass: 站点统计
head:

- ['script', { src: '/vuepress-lingdu-v2/js/utils/实时访客2.js' }]

---

# 站点统计

*由百度统计提供数据监控支撑*

:::tip 说明
基于百度统计得到基础数据，下载得到csv数据，然后分析，得到下面的一系列图表信息。
:::

[//]: # (访问量趋势图)
<!-- #region demo -->

::: echarts 访问量趋势图

```js
const dateList = [];
const visitData = [];// 访问量数据

const dateList2 = [];
const durationData = [];// 页面停留时长数据

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
// 累计访问量
const cumulativeData = [visitData[0]];
for (let i = 1; i < visitData.length; i++) {
    cumulativeData.push(cumulativeData[i - 1] + visitData[i]);
}
// cumulativeData.reverse();// 反转


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
            '累计访问量': false,  // 将需要隐藏的图例名称设置为 false
            '累计页面停留时长': false  // 将需要隐藏的图例名称设置为 false
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
    // 开启缩放
    dataZoom: [
        {
            type: "inside",
            start: 80,
            end: 100,
        },
        {
            show: true,
            type: "slider",
            top: "90%",
            start: 80,
            end: 100,
        },
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


[//]: # (网站访问详细信息)
<!-- #region demo -->

::: echarts 网站访问详细信息

```js
// 解析数据集
const columns = dataset.columns.slice(1);
const data = [];
const xAxisData = [];
const timeRange = getTimeRange(); // 获取时间范围
// console.log('timeRange')
// console.log(timeRange)
// for (let time = timeRange.start; time <= timeRange.end; time += 60 * 1000) {
//     xAxisData.push(formatTime(time)); // 格式化时间
// }
for (let j = 0; j < dataset.rows.length; j++) {
    const t = dataset.rows[j][1];
    if (t != undefined && t != "") {
        xAxisData.push(formatTime(new Date(t).getTime()));
    }
}

for (let i = 0; i < columns.length; i++) {
    const columnData = [];
    for (let j = 1; j < dataset.rows.length; j++) {
        const row = dataset.rows[j];
        const t = row[1];
        if (t == undefined || t == "") {
            continue;
        }
        if (i === 0) {
            // 将访问时间转换为时间戳格式
            columnData.push(new Date(row[i+1]).getTime());
        } else {
            let value = row[i + 1];
            value = decodeURIComponent(value); // 使用 decodeURIComponent 函数进行URL中文解码
            columnData.push(value);
        }
    }
    data.push({
        name: columns[i],
        type: 'line',
        data: columnData.reverse() // 反转
    });
}

// 绘制折线图
const option = {
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
            type: 'shadow'
        }
    },
    legend: {
        data: columns.slice(1)
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData.reverse(), // 反转
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    // 开启缩放
    dataZoom: [
        {
            type: "inside",
            start: 80,
            end: 100,
        },
        {
            show: true,
            type: "slider",
            top: "90%",
            start: 80,
            end: 100,
        },
    ],
    series: data.reverse(), // 反转
};

function getTimeRange() {
    const rows = dataset.rows;
    let t = rows[rows.length - 1][1];
    let i = 2;
    while (t == undefined || t == "") {
        t = rows[rows.length - i][1];
        i++;
    }
    const start = new Date(t).getTime(); // 获取起始时间
    const end = new Date().getTime(); // 获取当前时间
    return {
        start,
        end
    };
}

function formatTime(time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${year}-${padZero(month)}-${padZero(day)} ${padZero(hour)}:${padZero(minute)}`;
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

// const height = 450;

```

:::

<!-- #endregion demo -->

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

[//]: # (访问时间分布图)
<!-- #region demo -->

::: echarts

```js
const timeData = [];
for (var i = 1; i < dataset.rows.length; i++) {
    var time = new Date(dataset.rows[i][1]);
    if (time == undefined) {
        continue;
    }
    timeData.push(time.getHours());
}

const option = {
    title: {
        text: '访问时间分布图',
        x: 'center',
        textStyle: {
            color: '#666'
        }
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
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['0点', '1点', '2点', '3点', '4点', '5点', '6点',
            '7点', '8点', '9点', '10点', '11点', '12点',
            '13点', '14点', '15点', '16点', '17点', '18点',
            '19点', '20点', '21点', '22点', '23点'],
        axisLabel: {
            interval: 0,
            rotate: 45
        }
    },
    yAxis: {
        type: 'value',
        name: '访问次数'
    },
    series: [{
        name: '访问次数',
        type: 'bar',
        data: [timeData.filter(x => x == 0).length, timeData.filter(x => x == 1).length,
            timeData.filter(x => x == 2).length, timeData.filter(x => x == 3).length,
            timeData.filter(x => x == 4).length, timeData.filter(x => x == 5).length,
            timeData.filter(x => x == 6).length, timeData.filter(x => x == 7).length,
            timeData.filter(x => x == 8).length, timeData.filter(x => x == 9).length,
            timeData.filter(x => x == 10).length, timeData.filter(x => x == 11).length,
            timeData.filter(x => x == 12).length, timeData.filter(x => x == 13).length,
            timeData.filter(x => x == 14).length, timeData.filter(x => x == 15).length,
            timeData.filter(x => x == 16).length, timeData.filter(x => x == 17).length,
            timeData.filter(x => x == 18).length, timeData.filter(x => x == 19).length,
            timeData.filter(x => x == 20).length, timeData.filter(x => x == 21).length,
            timeData.filter(x => x == 22).length, timeData.filter(x => x == 23).length]
    }]
};

```

:::

<!-- #endregion demo -->


[//]: # (访问入口页面图)
<!-- #region demo -->

::: echarts

```js
const pageData = {};
for (var i = 1; i < dataset.rows.length; i++) {
    var page = dataset.rows[i][4];
    if (page == "") {
        continue;
    }
    page = decodeURIComponent(page); // 使用 decodeURIComponent 函数进行解码
    if (!pageData[page]) {
        pageData[page] = 1;
    } else {
        pageData[page]++;
    }
}

const option = {
    title: {
        text: '访问入口页面图',
        x: 'center',
        textStyle: {
            color: '#666'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        type: 'scroll', // 设置为 scroll 类型
        orient: 'vertical',
        left: 'left',
        top: 'center',
        data: Object.keys(pageData),
        formatter: function (name) {
            var maxLength = 45;
            if (name.length > maxLength) {
                // return name.substr(45, maxLength) + '...';
                return 'http...'+name.substr(45);
            }
            else {
                return name;
            }
        },
    },
    series: [{
        name: '页面',
        type: 'pie',
        // radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            // normal: {
            //     show: false,
            //     position: 'center'
            // },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            }
        },
        // labelLine: {
        //     normal: {
        //         show: false
        //     }
        // },
        radius: '70%',
        data: Object.keys(pageData).map(function (key) {
            return {value: pageData[key], name: key};
        })
    }]
};

const height = 500;

```

:::

<!-- #endregion demo -->


[//]: # (访问页面平均停留时长图)
<!-- #region demo -->

::: echarts

```js
const stayData = [];
for (var i = 1; i < dataset.rows.length; i++) {
    let time = dataset.rows[i][24]
    if (time != undefined) {
        time = time.split('s')[0]
        var stay = parseInt(time);
        if (!isNaN(stay)) {
            stayData.push(stay);
        }
    }
}

const option = {
    title: {
        text: '访问页面平均停留时长图',
        x: 'center',
        textStyle: {
            color: '#666'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['0~10s', '10~30s', '30~60s', '60~120s', '120s以上']
    },
    yAxis: {
        type: 'value',
        name: '访问次数'
    },
    series: [{
        name: '访问次数',
        type: 'bar',
        data: [stayData.filter(x => x <= 10).length, stayData.filter(x => x > 10 && x <= 30).length,
            stayData.filter(x => x > 30 && x <= 60).length, stayData.filter(x => x > 60 && x <= 120).length,
            stayData.filter(x => x > 120).length]
    }]
};

```

:::

<!-- #endregion demo -->


[//]: # (页面停留时长与访问次数的关系图)
<!-- #region demo -->

::: echarts

```js
const stayCountData = {};
for (var i = 1; i < dataset.rows.length; i++) {
    let time = dataset.rows[i][24]
    // if (time != undefined) {
        time = time.split('s')[0]
        var stay = parseInt(time);
        if (!isNaN(stay) && stay > 0) {
            var count = stayCountData[stay];
            if (count) {
                stayCountData[stay]++;
            } else {
                stayCountData[stay] = 1;
            }
        }
    // }
}

const option = {
    title: {
        text: '页面停留时长与访问次数的关系图',
        x: 'center',
        textStyle: {
            color: '#666'
        }
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
            type: 'shadow'
        },
        formatter: '{b}s<br/>访问次数：{c}'
    },
    xAxis: {
        type: 'category',
        scale: true,
        boundaryGap: false,
        data: Object.keys(stayCountData).map(Number),
        axisLabel: {
            interval: 0,
            rotate: 45
        }
    },
    yAxis: {
        type: 'value',
        name: '访问次数'
    },
    // 开启缩放
    dataZoom: [
        {
            type: "inside",
            start: 0,
            end: 100,
        },
        {
            show: true,
            type: "slider",
            top: "90%",
            start: 0,
            end: 100,
        },
    ],
    series: [{
        name: '访问次数',
        type: 'line',
        barWidth: 1,
        data: Object.values(stayCountData)
    }]
};

```

:::

<!-- #endregion demo -->


[//]: # (访问设备类型分布图)
<!-- #region demo -->

::: echarts

```js
const deviceData = {
    "PC": 0,
    "移动端": 0,
    "平板电脑": 0
};
for (var i = 1; i < dataset.rows.length; i++) {
    var os = dataset.rows[i][14];
    if (os == undefined) {
        continue;
    }
    if (os.includes("Win") || os.includes("Mac")) {
        deviceData["PC"]++;
    } else if (os.includes("iOS") || os.includes("Android")) {
        if (os.includes("iPad")) {
            deviceData["平板电脑"]++;
        } else {
            deviceData["移动端"]++;
        }
    }
}

const option = {
    title: {
        text: '访问设备类型分布图',
        x: 'center',
        textStyle: {
            color: '#666'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['PC', '移动端', '平板电脑']
    },
    series: [{
        name: '设备类型',
        type: 'pie',
        // radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        // label: {
        //     normal: {
        //         show: false,
        //         position: 'center'
        //     },
        //     emphasis: {
        //         show: true,
        //         textStyle: {
        //             fontSize: '12',
        //             fontWeight: 'bold'
        //         }
        //     }
        // },
        // labelLine: {
        //     normal: {
        //         show: false
        //     }
        // },
        data: [
            {value: deviceData["PC"], name: 'PC'},
            {value: deviceData["移动端"], name: '移动端'},
            {value: deviceData["平板电脑"], name: '平板电脑'}
        ]
    }]
};

```

:::

<!-- #endregion demo -->


[//]: # (访问来源分布图)
<!-- #region demo -->

::: echarts

```js

const sourceData = {
    "直接访问": 0,
    "搜索引擎": 0,
    "外部链接": 0
}
for (var i = 1; i < dataset.rows.length; i++) {
    var source = dataset.rows[i][3];
    if (source == undefined) {
        continue;
    }
    if (source == "直接访问") {
        sourceData["直接访问"]++;
    } else if (source.includes("baidu") || source.includes("sogou") || source.includes("google")) {
        sourceData["搜索引擎"]++;
    } else {
        sourceData["外部链接"]++;
    }
}

const option = {
    title: {
        text: '访问来源分布图',
        x: 'center',
        textStyle: {
            color: '#666'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '搜索引擎', '外部链接']
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        // radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        // label: {
        //     normal: {
        //         show: false,
        //         position: 'center'
        //     },
        //     emphasis: {
        //         show: true,
        //         textStyle: {
        //             fontSize: '30',
        //             fontWeight: 'bold'
        //         }
        //     }
        // },
        // labelLine: {
        //     normal: {
        //         show: false
        //     }
        // },
        data: [
            {value: sourceData["直接访问"], name: '直接访问'},
            {value: sourceData["搜索引擎"], name: '搜索引擎'},
            {value: sourceData["外部链接"], name: '外部链接'}
        ]
    }]
};

```

:::

<!-- #endregion demo -->













