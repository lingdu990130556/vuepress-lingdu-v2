# nginx 命令
- - -
## 1.启动
```shell script
#进入sbin目录 执行命令./nginx
```
## 2.查看nginx是否启动

```shell script
[root@admin sbin]# ps -aux | grep nginx

# ps命令用于报告当前系统的进程状态。
# -a：显示所有终端机下执行的程序，除了阶段作业领导者之外。
# a：显示现行终端机下的所有程序，包括其他用户的程序。
# u：以用户为主的格式来显示程序状况。
# x：显示所有程序，不以终端机来区分。
```

## 3.关闭nginx
```shell script
[root@admin sbin]# ./nginx -s stop
或者
[root@admin sbin]# ./nginx -s quit
```

## 4.重启nginx
```shell script
先关闭，然后启动
```

## 5.刷新配置文件
```shell script
[root@admin sbin]# ./nginx -s reload
```
