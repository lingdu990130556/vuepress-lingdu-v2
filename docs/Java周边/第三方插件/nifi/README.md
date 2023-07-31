# NIFI
>[官方文档](https://nifi.apache.org/docs.html) | [中文文档](https://nifichina.gitee.io/)
## 下载
::: tip
最新下载地址：[https://nifi.apache.org/download.html](https://nifi.apache.org/download.html)
:::
官网下载较慢，可尝试到国内各大镜像网站下载。如：
   [腾讯](https://mirrors.cloud.tencent.com/apache/nifi/)
## 解压
下载完成后直接解压即可
## 配置
默认配置了IP为127.0.0.1，只允许本地访问  
若想作为服务在其他终端访问则需修改`nifi-.../conf/nifi.properties`  
将  
`nifi.web.https.host=127.0.0.1`  
改为  
`nifi.web.https.host=服务器IP`

# NIFI相关命令

## 1.改用户名密码命令
- - - 
```shell script
[root@localhost bin]# ./nifi.sh set-single-user-credentials admin 123456
```

## 2.启动 停止 重启
```shell script
[root@localhost bin]# ./nifi.sh start
[root@localhost bin]# ./nifi.sh stop
[root@localhost bin]# ./nifi.sh restart
```

---
# 日期转换
```shell script
EEE MMM dd HH:mm:ss z yyyy
# 参数位置从0开始计算15就是第16位参数
${sql.args.15.value:format("yyyy-MM-dd HH:mm:ss.SSS")}

```
