---
pageClass: 站点统计
---

# 站点统计

## 网站浏览数据


<!-- #region demo -->

::: echarts 网站流量统计

```json
{
  "title": {
    "text": "网站流量统计",
    "subtext": "数据截至：2023/6/13"
  },
  "tooltip": {
    "trigger": "axis"
  },
  "legend": {
    "data":["浏览量(PV)", "访客数(UV)", "IP数", "跳出率"]
  },
  "toolbox": {
    "show": true,
    "feature": {
      "dataView": { "readOnly": false },
      "magicType": { "type": ["line", "bar"] },
      "restore": {},
      "saveAsImage": {}
    }
  },
  "calculable": true,
  "xAxis": [
    {
      "type": "category",
      "data": ["2023/6/13","2023/6/12","2023/6/11","2023/6/10","2023/6/9","2023/6/8","2023/6/7","2023/6/6","2023/6/5","2023/6/4","2023/6/3","2023/6/2","2023/6/1","2023/5/31","2023/5/30","2023/5/29","2023/5/28","2023/5/27","2023/5/26","2023/5/25","2023/5/24","2023/5/23","2023/5/22","2023/5/21","2023/5/20","2023/5/19","2023/5/18","2023/5/17","2023/5/16","2023/5/15"]
    }
  ],
  "yAxis": [
    {
      "type": "value",
      "name": "浏览量(PV)"
    },
    {
      "type": "value",
      "name": "跳出率",
      "max": 100,
      "axisLabel": {
        "formatter": "{value}%"
      }
    }
  ],
  "series": [
    {
      "name":"浏览量(PV)",
      "type":"bar",
      "data":[2,23,1,4,20,34,70,19,50,null,null,73,50,25,12,27,null,null,null,null,null,null,null,null,null,null,null,null,null],
      "itemStyle": {
        "normal": {
          "color": "#4CBDFC"
        }
      }
    },
    {
      "name":"访客数(UV)",
      "type":"bar",
      "data":[1,4,1,1,4,3,6,5,5,null,null,3,7,7,5,5,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "itemStyle": {
        "normal": {
          "color": "#FEB64D"
        }
      }
    },
    {
      "name":"IP数",
      "type":"bar",
      "data":[1,4,1,1,4,4,6,5,4,null,null,3,4,7,5,4,0,0,0,0,0,0,0,0,0,0,0,0,0],
      "itemStyle": {
        "normal": {
          "color": "#FF6666"
        }
      }
    },
    {
      "name":"跳出率",
      "type":"line",
      "yAxisIndex": 1,
      "data":[null,63.64,100,66.67,40,null,37.93,30,56.52,null,null,46.15,58.33,78.57,80,41.67,null,null,null,null,null,null,null,null,null,null,null,null,null],
      "itemStyle": {
        "normal": {
          "color": "#A58AFF"
        }
      }
    },
    {
      "name":"平均访问时长",
      "type":"line",
      "data":[null,"00:08:17","00:02:00","00:13:29","00:08:38","00:04:26","00:05:44","00:07:09","00:07:34",null,null,"00:03:58","00:05:23","00:06:01","00:05:17","00:05:25",null,null,null,null,null,null,null,null,null,null,null,null,null],
      "itemStyle": {
        "normal": {
          "color": "#68D8FE"
        }
      }
    }
  ]
}


```



:::

<!-- #endregion demo -->







<!-- #region demo -->

::: echarts 地域分布

```js
// 将提供的数据转换为适合进行可视化的数据格式
const data = [
    { region: "安徽", PV: 369, UV: 53, IP: 48, bounceRate: 50.30, avgVisitTime: "00:05:43" },
    { region: "北京", PV: 31, UV: 9, IP: 9, bounceRate: 50, avgVisitTime: "00:11:13" },
    { region: "广东", PV: 3, UV: 1, IP: 1, bounceRate: 50, avgVisitTime: "00:01:56" },
    { region: "四川", PV: 1, UV: 1, IP: 1, bounceRate: 100, avgVisitTime: "00:00:05" },
];

// 根据数据类型和要求获取 Echarts 图表配置
const option = {
    title: [
        getTitle("浏览量(PV)","PV","10%"),
        getTitle("访客数(UV)","UV","35%"),
        getTitle("IP数","IP","60%"),
        getTitle("跳出率","","85%"),
        getTitle("平均访问时长","avgVisitTime","110%"),
    ],
    tooltip: {"trigger": "item", "formatter": "{b}: {c} ({d}%)"},
    series: [
        bing("浏览量(PV)",["10%", "50%"], 'PV', 'region'),
        bing("访客数(UV)",["35%", "50%"], 'UV', 'region'),
        bing("IP数",["60%", "50%"], 'IP', 'region'),
        bing("跳出率",["85%", "50%"], 'bounceRate', 'region'),
        bing("平均访问时长",["110%", "50%"], 'avgVisitTime', 'region'),
    ],
};

function getTitle(text,valuePropName,left){
    let count=0;
    for (let i = 0; i < data.length; i++) {
        if(valuePropName==="avgVisitTime"){
            count+=zhuan(data[i][valuePropName])+"秒";
        }else {
            count += data[i][valuePropName];
        }
    }
    return {
        "text": text,
        "subtext": "总计："+count, 
        "left": left, 
        "top": "center", 
        "textAlign": "center"
    }
}

function zhuan(time){
    // 将时间转换为秒
    const [hour, minute, second] = time.split(":").map(Number);
    return  hour * 3600 + minute * 60 + second;
}

function bing(name,center,valuePropName, namePropName){
    return  {
        name: name,
        type: "pie",
        radius: ["40%", "60%"],
        center: center,
        label: {"show": true},
        data: transformData(valuePropName, namePropName)
    };
}

function transformData(valuePropName, namePropName) {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
        let obj = {};
        if(valuePropName==="avgVisitTime"){
            obj.value =zhuan(data[i][valuePropName]);
        }else {
            obj.value = data[i][valuePropName];
        }
        obj.name = data[i][namePropName];
        newData.push(obj);
    }
    return newData;
}



```

:::

<!-- #endregion demo -->

