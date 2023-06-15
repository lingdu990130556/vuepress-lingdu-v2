---
pageClass: 站点统计
head:
- ['script', { src: '/vuepress-lingdu-v2/js/utils/实时访客2.js' }]

---

# 站点统计

**由百度统计提供数据监控支撑** *数据更新时间：2023年6月15日17点12分*

:::tip 说明
基于百度统计得到基础数据，下载得到csv数据，然后分析，得到下面的一系列图表信息。
:::

[//]: # (访问量趋势图)
<!-- #region demo -->

::: echarts 

```js
const dateList = [];
const visitData = [];
for (var i = 1; i < dataset.rows.length; i++) {
    var date = new Date(dataset.rows[i][1]);
    if (date == undefined || date == 'Invalid Date') {
        continue;
    }
    var dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    if (!dateList.includes(dateString)) {
        dateList.push(dateString);
        visitData.push(1);
    } else {
        var index = dateList.indexOf(dateString);
        visitData[index]++;
    }
}

const option = {
    title: {
        text: '访问量趋势图',
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
            type: 'cross'
        }
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
    yAxis: {
        type: 'value',
        name: '访问次数'
    },
    series: [{
        name: '访问量',
        type: 'line',
        smooth: true,
        data: visitData
    }]
};

```

:::

<!-- #endregion demo -->


[//]: # (网站访问详细信息)
<!-- #region demo -->

::: echarts 网站访问详细信息

```js
// 解析数据集
const columns = dataset.columns.slice(1, -3);
const data = [];
const xAxisData = [];
const timeRange = getTimeRange(); // 获取时间范围
console.log('timeRange')
console.log(timeRange)
// for (let time = timeRange.start; time <= timeRange.end; time += 60 * 1000) {
//     xAxisData.push(formatTime(time)); // 格式化时间
// }
for (let j = 0; j < dataset.rows.length; j++) {
    const t = dataset.rows[j][1];
    if(t!=undefined&&t!=""){
        xAxisData.push(formatTime(new Date(t).getTime()));
    }
}

for (let i = 0; i < columns.length; i++) {
    const columnData = [];
    for (let j = 1; j < dataset.rows.length; j++) {
        const row = dataset.rows[j];
        if (i === 0) {
            // 将访问时间转换为时间戳格式
            columnData.push(new Date(row[i+1]).getTime());
        } else {
            const value = row[i+1];
            columnData.push(value); 
        }
    }
    data.push({
        name: columns[i],
        type: 'line',
        data: columnData
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
        data: xAxisData
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
            start: 0,
            end: 20,
        },
        {
            show: true,
            type: "slider",
            top: "90%",
            start: 0,
            end: 20,
        },
    ],
    series: data
};

function getTimeRange () {
    const rows = dataset.rows;
    let t = rows[rows.length-1][1];
    let i=2;
    while (t==undefined||t==""){
        t=rows[rows.length-i][1];
        i++;
    }
    const start = new Date(t).getTime(); // 获取起始时间
    const end = new Date().getTime(); // 获取当前时间
    return {
        start,
        end
    };
}

function formatTime (time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${year}-${padZero(month)}-${padZero(day)} ${padZero(hour)}:${padZero(minute)}`;
}

function padZero (num) {
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
    legend: {
        orient: 'vertical',
        left: 'left',
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
        orient: 'vertical',
        left: 'left',
        data: Object.keys(pageData)
    },
    series: [{
        name: '页面',
        type: 'pie',
        // radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: Object.keys(pageData).map(function (key) {
            return {value: pageData[key], name: key};
        })
    }]
};

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
    if (time != undefined) {
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
    }
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
            start: 50,
            end: 100,
        },
        {
            show: true,
            type: "slider",
            top: "90%",
            start: 50,
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
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
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
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
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








下面是基于转成json格式数据的分析逻辑,暂停维护
<!-- #region demo -->

::: echarts 访问统计

```js

const dateFormatter = new Intl.DateTimeFormat('ja-JP', {year: 'numeric', month: 'numeric', day: 'numeric'});

// 将提供的数据转换为适合进行可视化的数据格式
/**
 "": "您在使用百度统计服务过程中看到搜索词或者关键词，仅能用于站长的SEO或SEM优化，不得用于其他商业用途或者不正当用途。",
 "访问时间": "",
 "地域": "",
 "来源": "",
 "入口页面": "",
 "搜索词": "",
 "访问IP": "",
 "访客标识码": "",
 "访问时长": "",
 "访问页数": "",
 "最后停留在": "",
 "上一次访问时间": "",
 "访问类型": "",
 "访问频次": "",
 "操作系统": "",
 "网络服务商": "",
 "浏览器": "",
 "语言环境": "",
 "屏幕分辨率": "",
 "屏幕颜色": "",
 "Flash版本": "",
 "是否支持Cookie": "",
 "是否支持JAVA": "",
 "打开时间": "",
 "停留时长": "",
 "页面地址": ""
 */
let data = {};

// 发送GET请求获取json数据
await fetch(`/json/实时访客.json`)
    .then(response => response.json())
    .then(jsondata => {
        // 处理json数据...
        data = jsondata;
    })
    .catch(error => console.error(error));

let x_riqi = [];
let 历史浏览量 = 0;
let 日访问量 = [];
let 累计浏览量 = [];

a();

function a() {
    const newData = [];
    let 日期;
    let 当天总浏览量 = 0;
    for (let i = 1; i < data.length - 1; i++) {
        const 访问时间 = data[i]["访问时间"];
        if (访问时间 === undefined) {
            continue;
        }
        // console.log("访问时间: ");
        // console.log(访问时间);
        if (访问时间 != "") {
            let 日期2 = 访问时间.split(" ")[0]
            if (日期 == null) {
                日期 = 日期2;
                当天总浏览量++
                历史浏览量++
            } else if (日期2 == 日期) {
                当天总浏览量++
                历史浏览量++
            } else if (日期2 != 日期) {
                let obj = {};
                obj.日期 = 日期;
                obj.浏览量 = 当天总浏览量;
                obj.历史浏览量 = 历史浏览量;
                newData.push(obj);
                当天总浏览量 = 0;
                日期 = 日期2;
            }
        } else {
            当天总浏览量++
            历史浏览量++
        }
    }
    let obj = {};
    obj.日期 = 日期;
    obj.浏览量 = 当天总浏览量;
    obj.历史浏览量 = 历史浏览量;
    newData.push(obj);


    console.log("newData: ");
    console.log(newData);

    x_riqi = riqi(newData[newData.length - 1]['日期']);
    var j = newData.length - 1;
    var lei = 0;
    for (var i = 0; i < x_riqi.length; i++) {
        if (j != 0 && riqibijiao(x_riqi[i], newData[j]["日期"])) {
            日访问量.push(newData[j]["浏览量"]);
            j--;
        } else {
            日访问量.push(0);
        }
        lei = lei + 日访问量[i];
        累计浏览量.push(lei)
    }
    console.log(日访问量);
}

/**日期比较*/
function riqibijiao(a, b) {
    return dateFormatter.format(new Date(a)) == dateFormatter.format(new Date(b));
}

/**获取自有记录以来到当前的日期*/
function riqi(startDateStr) {

    function listDates(startDateStr) {
        const startDate = new Date(startDateStr); // 转换为 Date 对象
        const endDate = new Date();
        const dates = []; // 存储所有日期
        let currentDate = startDate;
        while (currentDate <= endDate) {
            dates.push(dateFormatter.format(currentDate)); // 日期格式化
            currentDate.setDate(currentDate.getDate() + 1); // 将当前日期加一天
        }
        return dates;
    }

    return listDates(startDateStr);
}

// 根据数据类型和要求获取 Echarts 图表配置
const option = {
    title: [
        {
            text: '日浏览/累计浏览',
            subtext: "历史浏览量：" + 历史浏览量,
        },
    ],
    legend: { // 图例组件
        data: [
            "日访问量",
            "累计浏览量",
        ]
    },
    // x轴
    xAxis: {
        type: 'category',
        data: x_riqi
    },
    // y轴
    yAxis: {
        type: 'value'
    },
    // grid: {top: "55%"},
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
    tooltip: { // 配置 tooltip 组件
        trigger: 'axis', // 触发类型为坐标轴触发
        axisPointer: { // 配置坐标指示器
            type: 'cross' // 指示器类型为十字准星
        }
    },
    // 开启缩放
    dataZoom: [
        {
            type: "inside",
            start: 50,
            end: 100,
        },
        {
            show: true,
            type: "slider",
            top: "90%",
            start: 50,
            end: 100,
        },
    ],
    // 设置数据
    series: [
        {
            name: "日访问量",
            data: 日访问量,
            type: 'line',
            smooth: true
        },
        {
            name: "累计浏览量",
            data: 累计浏览量,
            type: 'line',
            smooth: true
        },
    ],
};
```

:::

<!-- #endregion demo -->










































