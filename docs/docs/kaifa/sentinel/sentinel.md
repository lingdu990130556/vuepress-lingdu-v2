## sentinel 启动命令
- - -
```shell
# jar文件所在目录
pwd /data/zhfxx/utils
# 执行命令启动
nohup java -Dserver.port=8718 -Dcsp.sentinel.dashboard.server=localhost:8718 -Dproject.name=sentinel-dashboard -Dsentinel.dashboard.auth.username=sentinel -Dsentinel.dashboard.auth.password=123456 -jar sentinel-dashboard-1.8.0.jar >temp.log 2>&1 &


#说明:
-Dserver.port=8718 # 指定控制台的端口为8718
-Dcsp.sentinel.dashboard.server=localhost:8718 # 指定要被哪个控制台监控（这里指定的是自己监控自己）
-Dproject.name=sentinel-dashboard # 指定实例名称（名称会在控制台左侧以菜单显示）
-Dsentinel.dashboard.auth.username=sentinel # 设置登录的帐号为：sentinel
-Dsentinel.dashboard.auth.password=123456 # 设置登录的密码为：123456
```


