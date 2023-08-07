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

## 案例

::: details HTTP案例
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<template encoding-version="1.3">
    <description>HTTP案例</description>
    <groupId>41bc95a0-017e-1000-dbb5-bf9bbac6beb3</groupId>
    <name>HTTP案例</name>
    <snippet>
        <processGroups>
            <id>079b534c-59e8-3a04-0000-000000000000</id>
            <parentGroupId>2cce9e7c-6136-3264-0000-000000000000</parentGroupId>
            <position>
                <x>0.0</x>
                <y>0.0</y>
            </position>
            <comments></comments>
            <contents>
                <connections>
                    <id>032f994b-081b-3020-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>f6394d0f-0940-33a3-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>cd6b6616-404c-3bca-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>0dc2b0e6-9438-34c8-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>0bf6a616-582f-39ad-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>3c4fc6c2-0016-397d-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>26c70ca0-b39e-3c49-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>3aff28d7-484a-319c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>79f4d81a-b007-3893-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>3071bd06-ee0b-30e5-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>f6394d0f-0940-33a3-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>7c5d012d-64e8-39cd-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>3c24a3d7-e802-34d7-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>3 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>0bf6a616-582f-39ad-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>85d753c2-8f93-3d11-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>3d7b9b71-9b84-3ba6-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>3 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>f6394d0f-0940-33a3-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>4c20d6da-211c-33d6-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>45eef0dd-87b7-3124-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>3aff28d7-484a-319c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>f32ace62-ebb4-3822-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>4fbe81c2-9eed-3955-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>3aff28d7-484a-319c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>59b55574-28cd-3da8-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>5a238629-e9ca-333e-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>0bf6a616-582f-39ad-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>5c1d613f-65f7-3de0-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>5ecf16fb-d9e5-3aad-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>0bf6a616-582f-39ad-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>48cf21ca-ae8b-3fcd-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>6c8266fb-fd01-33be-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>f6394d0f-0940-33a3-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>bfc017d4-5f87-3908-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>75324ec4-5fd6-3ab3-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>0bf6a616-582f-39ad-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>09eb80f5-3a31-3c8d-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>83f4b1a8-1300-334a-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>f6394d0f-0940-33a3-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>e74878c0-3b98-3078-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>8b291fc7-1f06-3518-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>3aff28d7-484a-319c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>cb493635-c379-3c2d-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>f3994c0d-f4d4-3916-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>3 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>3aff28d7-484a-319c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>999b383e-357b-399c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>f8ed6355-205a-321a-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>10 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>100000000</backPressureObjectThreshold>
                    <destination>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>f6394d0f-0940-33a3-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>Failure</selectedRelationships>
                    <selectedRelationships>No Retry</selectedRelationships>
                    <selectedRelationships>Original</selectedRelationships>
                    <selectedRelationships>Response</selectedRelationships>
                    <selectedRelationships>Retry</selectedRelationships>
                    <source>
                        <groupId>079b534c-59e8-3a04-0000-000000000000</groupId>
                        <id>eb9e3701-b37a-358c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <processors>
                    <id>09eb80f5-3a31-3c8d-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>592.0</x>
                        <y>2304.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/dimensiondoor/peiguan/sqlDoor/invoke/getS-PROJECT-MANAGE</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(sql门)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>0bf6a616-582f-39ad-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>1048.0</x>
                        <y>1496.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Regular Expression</key>
<value>
    <name>Regular Expression</name>
</value>
                            </entry>
                            <entry>
<key>Replacement Value</key>
<value>
    <name>Replacement Value</name>
</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>
    <name>Character Set</name>
</value>
                            </entry>
                            <entry>
<key>Maximum Buffer Size</key>
<value>
    <name>Maximum Buffer Size</name>
</value>
                            </entry>
                            <entry>
<key>Replacement Strategy</key>
<value>
    <name>Replacement Strategy</name>
</value>
                            </entry>
                            <entry>
<key>Evaluation Mode</key>
<value>
    <name>Evaluation Mode</name>
</value>
                            </entry>
                            <entry>
<key>Line-by-Line Evaluation Mode</key>
<value>
    <name>Line-by-Line Evaluation Mode</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Regular Expression</key>
<value>(?s)(^.*$)</value>
                            </entry>
                            <entry>
<key>Replacement Value</key>
<value>$1</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>Maximum Buffer Size</key>
<value>1 MB</value>
                            </entry>
                            <entry>
<key>Replacement Strategy</key>
<value>Regex Replace</value>
                            </entry>
                            <entry>
<key>Evaluation Mode</key>
<value>Line-by-Line</value>
                            </entry>
                            <entry>
<key>Line-by-Line Evaluation Mode</key>
<value>All</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>ReplaceText</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.ReplaceText</type>
                </processors>
                <processors>
                    <id>3aff28d7-484a-319c-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>-213.44564659092237</x>
                        <y>1381.5366668562824</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Regular Expression</key>
<value>
    <name>Regular Expression</name>
</value>
                            </entry>
                            <entry>
<key>Replacement Value</key>
<value>
    <name>Replacement Value</name>
</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>
    <name>Character Set</name>
</value>
                            </entry>
                            <entry>
<key>Maximum Buffer Size</key>
<value>
    <name>Maximum Buffer Size</name>
</value>
                            </entry>
                            <entry>
<key>Replacement Strategy</key>
<value>
    <name>Replacement Strategy</name>
</value>
                            </entry>
                            <entry>
<key>Evaluation Mode</key>
<value>
    <name>Evaluation Mode</name>
</value>
                            </entry>
                            <entry>
<key>Line-by-Line Evaluation Mode</key>
<value>
    <name>Line-by-Line Evaluation Mode</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Regular Expression</key>
<value>(?s)(^.*$)</value>
                            </entry>
                            <entry>
<key>Replacement Value</key>
<value>$1</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>Maximum Buffer Size</key>
<value>1 MB</value>
                            </entry>
                            <entry>
<key>Replacement Strategy</key>
<value>Regex Replace</value>
                            </entry>
                            <entry>
<key>Evaluation Mode</key>
<value>Line-by-Line</value>
                            </entry>
                            <entry>
<key>Line-by-Line Evaluation Mode</key>
<value>All</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>ReplaceText</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.ReplaceText</type>
                </processors>
                <processors>
                    <id>3c4fc6c2-0016-397d-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>1392.0</x>
                        <y>2128.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/code/gen/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(gen)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>48cf21ca-ae8b-3fcd-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>976.0</x>
                        <y>2304.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/activiti/workflow/leave/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(工作流)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>4c20d6da-211c-33d6-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>1824.0</x>
                        <y>512.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/system/user/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(system)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>59b55574-28cd-3da8-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>-669.4456465909224</x>
                        <y>2189.5366668562824</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/dimensiondoor/peiguan/sqlDoor/invoke/getS-PROJECT-MANAGE</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(sql门)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>5c1d613f-65f7-3de0-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>968.0</x>
                        <y>2152.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/schedule/job/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(job)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>6e756819-2b8d-37cf-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>392.0</x>
                        <y>-8.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-update-attribute-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Delete Attributes Expression</key>
<value>
    <name>Delete Attributes Expression</name>
</value>
                            </entry>
                            <entry>
<key>Store State</key>
<value>
    <name>Store State</name>
</value>
                            </entry>
                            <entry>
<key>Stateful Variables Initial Value</key>
<value>
    <name>Stateful Variables Initial Value</name>
</value>
                            </entry>
                            <entry>
<key>canonical-value-lookup-cache-size</key>
<value>
    <name>canonical-value-lookup-cache-size</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Delete Attributes Expression</key>
                            </entry>
                            <entry>
<key>Store State</key>
<value>Do not store state</value>
                            </entry>
                            <entry>
<key>Stateful Variables Initial Value</key>
                            </entry>
                            <entry>
<key>canonical-value-lookup-cache-size</key>
<value>100</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>UpdateAttribute</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.attributes.UpdateAttribute</type>
                </processors>
                <processors>
                    <id>79f4d81a-b007-3893-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>-293.44564659092237</x>
                        <y>2037.5366668562824</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/schedule/job/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(job)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>7c5d012d-64e8-39cd-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>1408.0</x>
                        <y>704.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/schedule/job/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(job)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>85d753c2-8f93-3d11-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>1384.0</x>
                        <y>1960.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/system/user/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(system)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>999b383e-357b-399c-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>122.55435340907763</x>
                        <y>1845.5366668562824</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/system/user/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(system)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>bfc017d4-5f87-3908-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>1832.0</x>
                        <y>680.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/code/gen/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(gen)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>cb493635-c379-3c2d-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>-285.44564659092237</x>
                        <y>2189.5366668562824</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/activiti/workflow/leave/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(工作流)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>cd6b6616-404c-3bca-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>1416.0</x>
                        <y>856.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/activiti/workflow/leave/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(工作流)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>e74878c0-3b98-3078-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>1032.0</x>
                        <y>856.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/dimensiondoor/peiguan/sqlDoor/invoke/getS-PROJECT-MANAGE</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(sql门)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>eb9e3701-b37a-358c-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>808.0</x>
                        <y>72.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>100000000</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/dimensiondoor/peiguan/sqlDoor/invoke/getS-PROJECT-MANAGE</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>f32ace62-ebb4-3822-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>130.55435340907763</x>
                        <y>2013.5366668562824</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>HTTP Method</key>
<value>
    <name>HTTP Method</name>
</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>
    <name>Remote URL</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>
    <name>Connection Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>
    <name>Read Timeout</name>
</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>
    <name>idle-timeout</name>
</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>
    <name>max-idle-connections</name>
</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>
    <name>Include Date Header</name>
</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>
    <name>Follow Redirects</name>
</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>
    <name>disable-http2</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
<value>
    <name>Attributes to Send</name>
</value>
                            </entry>
                            <entry>
<key>Useragent</key>
<value>
    <name>Useragent</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
<value>
    <name>Basic Authentication Username</name>
</value>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
<value>
    <name>Basic Authentication Password</name>
</value>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.proxy.ProxyConfigurationService</identifiesControllerService>
    <name>proxy-configuration-service</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Host</key>
<value>
    <name>Proxy Host</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Port</key>
<value>
    <name>Proxy Port</name>
</value>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>
    <name>Proxy Type</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
<value>
    <name>invokehttp-proxy-user</name>
</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
<value>
    <name>invokehttp-proxy-password</name>
</value>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
<value>
    <name>Put Response Body In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>
    <name>Max Length To Put In Attribute</name>
</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>
    <name>Digest Authentication</name>
</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>
    <name>Always Output Response</name>
</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>
    <name>Add Response Headers to Request</name>
</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>
    <name>Content-Type</name>
</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>
    <name>send-message-body</name>
</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>
    <name>Use Chunked Encoding</name>
</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>
    <name>Penalize on "No Retry"</name>
</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>
    <name>use-etag</name>
</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>
    <name>etag-max-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>
    <name>ignore-response-content</name>
</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
<value>
    <name>form-body-form-name</name>
</value>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>
    <name>set-form-filename</name>
</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>
    <name>DC-User-Key</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>HTTP Method</key>
<value>GET</value>
                            </entry>
                            <entry>
<key>Remote URL</key>
<value>http://11.141.230.153/api/code/gen/list</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                            <entry>
<key>Connection Timeout</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>Read Timeout</key>
<value>15 secs</value>
                            </entry>
                            <entry>
<key>idle-timeout</key>
<value>5 mins</value>
                            </entry>
                            <entry>
<key>max-idle-connections</key>
<value>5</value>
                            </entry>
                            <entry>
<key>Include Date Header</key>
<value>True</value>
                            </entry>
                            <entry>
<key>Follow Redirects</key>
<value>True</value>
                            </entry>
                            <entry>
<key>disable-http2</key>
<value>False</value>
                            </entry>
                            <entry>
<key>Attributes to Send</key>
                            </entry>
                            <entry>
<key>Useragent</key>
                            </entry>
                            <entry>
<key>Basic Authentication Username</key>
                            </entry>
                            <entry>
<key>Basic Authentication Password</key>
                            </entry>
                            <entry>
<key>proxy-configuration-service</key>
                            </entry>
                            <entry>
<key>Proxy Host</key>
                            </entry>
                            <entry>
<key>Proxy Port</key>
                            </entry>
                            <entry>
<key>Proxy Type</key>
<value>http</value>
                            </entry>
                            <entry>
<key>invokehttp-proxy-user</key>
                            </entry>
                            <entry>
<key>invokehttp-proxy-password</key>
                            </entry>
                            <entry>
<key>Put Response Body In Attribute</key>
                            </entry>
                            <entry>
<key>Max Length To Put In Attribute</key>
<value>256</value>
                            </entry>
                            <entry>
<key>Digest Authentication</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Always Output Response</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Add Response Headers to Request</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Content-Type</key>
<value>${mime.type}</value>
                            </entry>
                            <entry>
<key>send-message-body</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Use Chunked Encoding</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Penalize on "No Retry"</key>
<value>false</value>
                            </entry>
                            <entry>
<key>use-etag</key>
<value>false</value>
                            </entry>
                            <entry>
<key>etag-max-cache-size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>ignore-response-content</key>
<value>false</value>
                            </entry>
                            <entry>
<key>form-body-form-name</key>
                            </entry>
                            <entry>
<key>set-form-filename</key>
<value>true</value>
                            </entry>
                            <entry>
<key>DC-User-Key</key>
<value>90bbbc8d-e854-4f54-8a11-e4f559b47ddc</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(gen)InvokeHTTP</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>No Retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Response</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>Retry</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.InvokeHTTP</type>
                </processors>
                <processors>
                    <id>f6394d0f-0940-33a3-0000-000000000000</id>
                    <parentGroupId>079b534c-59e8-3a04-0000-000000000000</parentGroupId>
                    <position>
                        <x>1488.0</x>
                        <y>48.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Regular Expression</key>
<value>
    <name>Regular Expression</name>
</value>
                            </entry>
                            <entry>
<key>Replacement Value</key>
<value>
    <name>Replacement Value</name>
</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>
    <name>Character Set</name>
</value>
                            </entry>
                            <entry>
<key>Maximum Buffer Size</key>
<value>
    <name>Maximum Buffer Size</name>
</value>
                            </entry>
                            <entry>
<key>Replacement Strategy</key>
<value>
    <name>Replacement Strategy</name>
</value>
                            </entry>
                            <entry>
<key>Evaluation Mode</key>
<value>
    <name>Evaluation Mode</name>
</value>
                            </entry>
                            <entry>
<key>Line-by-Line Evaluation Mode</key>
<value>
    <name>Line-by-Line Evaluation Mode</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Regular Expression</key>
<value>(?s)(^.*$)</value>
                            </entry>
                            <entry>
<key>Replacement Value</key>
<value>$1</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>Maximum Buffer Size</key>
<value>1 MB</value>
                            </entry>
                            <entry>
<key>Replacement Strategy</key>
<value>Regex Replace</value>
                            </entry>
                            <entry>
<key>Evaluation Mode</key>
<value>Line-by-Line</value>
                            </entry>
                            <entry>
<key>Line-by-Line Evaluation Mode</key>
<value>All</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>ReplaceText</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.ReplaceText</type>
                </processors>
            </contents>
            <defaultBackPressureDataSizeThreshold>1 GB</defaultBackPressureDataSizeThreshold>
            <defaultBackPressureObjectThreshold>10000</defaultBackPressureObjectThreshold>
            <defaultFlowFileExpiration>0 sec</defaultFlowFileExpiration>
            <flowfileConcurrency>UNBOUNDED</flowfileConcurrency>
            <flowfileOutboundPolicy>STREAM_WHEN_AVAILABLE</flowfileOutboundPolicy>
            <name>HTTP</name>
            <variables/>
        </processGroups>
    </snippet>
    <timestamp>07/21/2022 18:04:06 CST</timestamp>
</template>

```
:::

::: details MySQL日志案例

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<template encoding-version="1.3">
    <description>MySQL日志案例</description>
    <groupId>41bc95a0-017e-1000-dbb5-bf9bbac6beb3</groupId>
    <name>mysql日志案例</name>
    <snippet>
        <processGroups>
            <id>9279d5b4-93d8-3a19-0000-000000000000</id>
            <parentGroupId>2cce9e7c-6136-3264-0000-000000000000</parentGroupId>
            <position>
                <x>0.0</x>
                <y>0.0</y>
            </position>
            <comments></comments>
            <contents>
                <connections>
                    <id>13237ced-f1f1-37e9-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>48cf8fca-c91f-3d18-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>original</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>cc4b13d2-744c-32db-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>23e1cb27-6b13-3b59-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>f507464a-92fb-3172-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>ef695a16-cad9-3c8f-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>32a78dfe-4970-3824-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>48cf8fca-c91f-3d18-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>f507464a-92fb-3172-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>432d3743-b6e1-34a3-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>1b0bfc45-e384-3054-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>begin</selectedRelationships>
                    <selectedRelationships>commit</selectedRelationships>
                    <selectedRelationships>ddl</selectedRelationships>
                    <selectedRelationships>unmatched</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>4ea1cd44-9354-3ce0-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>4416482b-bd73-3ff1-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>fa73c19c-c1ce-3b94-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>delete</selectedRelationships>
                    <selectedRelationships>insert</selectedRelationships>
                    <selectedRelationships>update</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>0ab7c3ef-9561-358a-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>499d1315-ced8-3cc0-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <bends>
                        <x>1169.66650390625</x>
                        <y>751.4613037109375</y>
                    </bends>
                    <bends>
                        <x>1169.66650390625</x>
                        <y>801.4613037109375</y>
                    </bends>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>f507464a-92fb-3172-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>retry</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>f507464a-92fb-3172-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>55b26dff-c797-3437-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>6a9eadf8-8a52-3238-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>begin</selectedRelationships>
                    <selectedRelationships>commit</selectedRelationships>
                    <selectedRelationships>ddl</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>0ab7c3ef-9561-358a-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>63d83bf3-ba81-31da-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>cc4b13d2-744c-32db-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>insert</selectedRelationships>
                    <selectedRelationships>update</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>4ea1cd44-9354-3ce0-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>74050515-0d77-3bec-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>48cf8fca-c91f-3d18-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>unmatched</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>478f7c35-a840-3122-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>7824be06-0978-3663-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>788dd163-d4b1-3010-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>skipped</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>6a9eadf8-8a52-3238-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>7bb2bcaf-4d85-3172-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>4ea1cd44-9354-3ce0-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>6a9eadf8-8a52-3238-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>8b5eca35-33d3-38e3-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>20102245-3c99-3a2c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>f507464a-92fb-3172-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>96e3762e-812f-34ac-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>478f7c35-a840-3122-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>delete</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>4ea1cd44-9354-3ce0-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>aac7da25-dbd3-3eb3-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>ef695a16-cad9-3c8f-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>sql</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>cc4b13d2-744c-32db-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>bdd1b1a0-0a24-3ab1-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>3 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000000</backPressureObjectThreshold>
                    <bends>
                        <x>1474.140380859375</x>
                        <y>-81.30709838867188</y>
                    </bends>
                    <bends>
                        <x>1474.140380859375</x>
                        <y>-31.307098388671875</y>
                    </bends>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>6a9eadf8-8a52-3238-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>wait</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>6a9eadf8-8a52-3238-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>efc22925-c5b4-37c5-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>0ab7c3ef-9561-358a-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>77abff35-717a-34d1-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>fb36e296-5d90-33dd-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>6a9eadf8-8a52-3238-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>fa73c19c-c1ce-3b94-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>fcef4344-240a-3c1c-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>cc4b13d2-744c-32db-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>matched</selectedRelationships>
                    <source>
                        <groupId>9279d5b4-93d8-3a19-0000-000000000000</groupId>
                        <id>478f7c35-a840-3122-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <controllerServices>
                    <id>6987a6bb-31a0-33ef-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <bundle>
                        <artifact>nifi-dbcp-service-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <comments></comments>
                    <descriptors>
                        <entry>
                            <key>Database Connection URL</key>
                            <value>
<name>Database Connection URL</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Database Driver Class Name</key>
                            <value>
<name>Database Driver Class Name</name>
                            </value>
                        </entry>
                        <entry>
                            <key>database-driver-locations</key>
                            <value>
<name>database-driver-locations</name>
                            </value>
                        </entry>
                        <entry>
                            <key>kerberos-user-service</key>
                            <value>
<identifiesControllerService>org.apache.nifi.kerberos.KerberosUserService</identifiesControllerService>
<name>kerberos-user-service</name>
                            </value>
                        </entry>
                        <entry>
                            <key>kerberos-credentials-service</key>
                            <value>
<identifiesControllerService>org.apache.nifi.kerberos.KerberosCredentialsService</identifiesControllerService>
<name>kerberos-credentials-service</name>
                            </value>
                        </entry>
                        <entry>
                            <key>kerberos-principal</key>
                            <value>
<name>kerberos-principal</name>
                            </value>
                        </entry>
                        <entry>
                            <key>kerberos-password</key>
                            <value>
<name>kerberos-password</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Database User</key>
                            <value>
<name>Database User</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Password</key>
                            <value>
<name>Password</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Max Wait Time</key>
                            <value>
<name>Max Wait Time</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Max Total Connections</key>
                            <value>
<name>Max Total Connections</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Validation-query</key>
                            <value>
<name>Validation-query</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-min-idle-conns</key>
                            <value>
<name>dbcp-min-idle-conns</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-max-idle-conns</key>
                            <value>
<name>dbcp-max-idle-conns</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-max-conn-lifetime</key>
                            <value>
<name>dbcp-max-conn-lifetime</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-time-between-eviction-runs</key>
                            <value>
<name>dbcp-time-between-eviction-runs</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-min-evictable-idle-time</key>
                            <value>
<name>dbcp-min-evictable-idle-time</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-soft-min-evictable-idle-time</key>
                            <value>
<name>dbcp-soft-min-evictable-idle-time</name>
                            </value>
                        </entry>
                    </descriptors>
                    <name>(153MySQL)DBCPConnectionPool</name>
                    <persistsState>false</persistsState>
                    <properties>
                        <entry>
                            <key>Database Connection URL</key>
                            <value>jdbc:mysql://11.141.230.153:10106/sjzx-cloud?useUnicode=true&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8</value>
                        </entry>
                        <entry>
                            <key>Database Driver Class Name</key>
                            <value>com.mysql.jdbc.Driver</value>
                        </entry>
                        <entry>
                            <key>database-driver-locations</key>
                        </entry>
                        <entry>
                            <key>kerberos-user-service</key>
                        </entry>
                        <entry>
                            <key>kerberos-credentials-service</key>
                        </entry>
                        <entry>
                            <key>kerberos-principal</key>
                        </entry>
                        <entry>
                            <key>kerberos-password</key>
                        </entry>
                        <entry>
                            <key>Database User</key>
                            <value>root</value>
                        </entry>
                        <entry>
                            <key>Password</key>
                        </entry>
                        <entry>
                            <key>Max Wait Time</key>
                            <value>500 millis</value>
                        </entry>
                        <entry>
                            <key>Max Total Connections</key>
                            <value>8</value>
                        </entry>
                        <entry>
                            <key>Validation-query</key>
                        </entry>
                        <entry>
                            <key>dbcp-min-idle-conns</key>
                            <value>0</value>
                        </entry>
                        <entry>
                            <key>dbcp-max-idle-conns</key>
                            <value>8</value>
                        </entry>
                        <entry>
                            <key>dbcp-max-conn-lifetime</key>
                            <value>-1</value>
                        </entry>
                        <entry>
                            <key>dbcp-time-between-eviction-runs</key>
                            <value>-1</value>
                        </entry>
                        <entry>
                            <key>dbcp-min-evictable-idle-time</key>
                            <value>30 mins</value>
                        </entry>
                        <entry>
                            <key>dbcp-soft-min-evictable-idle-time</key>
                            <value>-1</value>
                        </entry>
                    </properties>
                    <state>ENABLED</state>
                    <type>org.apache.nifi.dbcp.DBCPConnectionPool</type>
                </controllerServices>
                <controllerServices>
                    <id>b9b173ed-7580-3cae-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <bundle>
                        <artifact>nifi-redis-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <comments></comments>
                    <descriptors>
                        <entry>
                            <key>Redis Mode</key>
                            <value>
<name>Redis Mode</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Connection String</key>
                            <value>
<name>Connection String</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Database Index</key>
                            <value>
<name>Database Index</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Communication Timeout</key>
                            <value>
<name>Communication Timeout</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Cluster Max Redirects</key>
                            <value>
<name>Cluster Max Redirects</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Sentinel Master</key>
                            <value>
<name>Sentinel Master</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Password</key>
                            <value>
<name>Password</name>
                            </value>
                        </entry>
                        <entry>
                            <key>SSL Context Service</key>
                            <value>
<identifiesControllerService>org.apache.nifi.ssl.RestrictedSSLContextService</identifiesControllerService>
<name>SSL Context Service</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Max Total</key>
                            <value>
<name>Pool - Max Total</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Max Idle</key>
                            <value>
<name>Pool - Max Idle</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Min Idle</key>
                            <value>
<name>Pool - Min Idle</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Block When Exhausted</key>
                            <value>
<name>Pool - Block When Exhausted</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Max Wait Time</key>
                            <value>
<name>Pool - Max Wait Time</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Min Evictable Idle Time</key>
                            <value>
<name>Pool - Min Evictable Idle Time</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Time Between Eviction Runs</key>
                            <value>
<name>Pool - Time Between Eviction Runs</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Num Tests Per Eviction Run</key>
                            <value>
<name>Pool - Num Tests Per Eviction Run</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Test On Create</key>
                            <value>
<name>Pool - Test On Create</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Test On Borrow</key>
                            <value>
<name>Pool - Test On Borrow</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Test On Return</key>
                            <value>
<name>Pool - Test On Return</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Pool - Test While Idle</key>
                            <value>
<name>Pool - Test While Idle</name>
                            </value>
                        </entry>
                    </descriptors>
                    <name>RedisConnectionPoolService</name>
                    <persistsState>false</persistsState>
                    <properties>
                        <entry>
                            <key>Redis Mode</key>
                            <value>Standalone</value>
                        </entry>
                        <entry>
                            <key>Connection String</key>
                            <value>11.141.230.153:6379</value>
                        </entry>
                        <entry>
                            <key>Database Index</key>
                            <value>0</value>
                        </entry>
                        <entry>
                            <key>Communication Timeout</key>
                            <value>10 seconds</value>
                        </entry>
                        <entry>
                            <key>Cluster Max Redirects</key>
                            <value>5</value>
                        </entry>
                        <entry>
                            <key>Sentinel Master</key>
                        </entry>
                        <entry>
                            <key>Password</key>
                        </entry>
                        <entry>
                            <key>SSL Context Service</key>
                        </entry>
                        <entry>
                            <key>Pool - Max Total</key>
                            <value>8</value>
                        </entry>
                        <entry>
                            <key>Pool - Max Idle</key>
                            <value>8</value>
                        </entry>
                        <entry>
                            <key>Pool - Min Idle</key>
                            <value>0</value>
                        </entry>
                        <entry>
                            <key>Pool - Block When Exhausted</key>
                            <value>true</value>
                        </entry>
                        <entry>
                            <key>Pool - Max Wait Time</key>
                            <value>10 seconds</value>
                        </entry>
                        <entry>
                            <key>Pool - Min Evictable Idle Time</key>
                            <value>60 seconds</value>
                        </entry>
                        <entry>
                            <key>Pool - Time Between Eviction Runs</key>
                            <value>30 seconds</value>
                        </entry>
                        <entry>
                            <key>Pool - Num Tests Per Eviction Run</key>
                            <value>-1</value>
                        </entry>
                        <entry>
                            <key>Pool - Test On Create</key>
                            <value>false</value>
                        </entry>
                        <entry>
                            <key>Pool - Test On Borrow</key>
                            <value>false</value>
                        </entry>
                        <entry>
                            <key>Pool - Test On Return</key>
                            <value>false</value>
                        </entry>
                        <entry>
                            <key>Pool - Test While Idle</key>
                            <value>true</value>
                        </entry>
                    </properties>
                    <state>ENABLED</state>
                    <type>org.apache.nifi.redis.service.RedisConnectionPoolService</type>
                </controllerServices>
                <controllerServices>
                    <id>f826fa10-9916-3db3-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <bundle>
                        <artifact>nifi-redis-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <comments></comments>
                    <descriptors>
                        <entry>
                            <key>redis-connection-pool</key>
                            <value>
<identifiesControllerService>org.apache.nifi.redis.RedisConnectionPool</identifiesControllerService>
<name>redis-connection-pool</name>
                            </value>
                        </entry>
                        <entry>
                            <key>redis-cache-ttl</key>
                            <value>
<name>redis-cache-ttl</name>
                            </value>
                        </entry>
                    </descriptors>
                    <name>RedisDistributedMapCacheClientService</name>
                    <persistsState>false</persistsState>
                    <properties>
                        <entry>
                            <key>redis-connection-pool</key>
                            <value>b9b173ed-7580-3cae-0000-000000000000</value>
                        </entry>
                        <entry>
                            <key>redis-cache-ttl</key>
                            <value>0 secs</value>
                        </entry>
                    </properties>
                    <state>ENABLED</state>
                    <type>org.apache.nifi.redis.service.RedisDistributedMapCacheClientService</type>
                </controllerServices>
                <processors>
                    <id>0ab7c3ef-9561-358a-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>392.0</x>
                        <y>-64.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Routing Strategy</key>
<value>
    <name>Routing Strategy</name>
</value>
                            </entry>
                            <entry>
<key>begin</key>
<value>
    <name>begin</name>
</value>
                            </entry>
                            <entry>
<key>commit</key>
<value>
    <name>commit</name>
</value>
                            </entry>
                            <entry>
<key>ddl</key>
<value>
    <name>ddl</name>
</value>
                            </entry>
                            <entry>
<key>delete</key>
<value>
    <name>delete</name>
</value>
                            </entry>
                            <entry>
<key>insert</key>
<value>
    <name>insert</name>
</value>
                            </entry>
                            <entry>
<key>update</key>
<value>
    <name>update</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Routing Strategy</key>
<value>Route to Property name</value>
                            </entry>
                            <entry>
<key>begin</key>
<value>${cdc.event.type:equals('begin')}</value>
                            </entry>
                            <entry>
<key>commit</key>
<value>${cdc.event.type:equals('commit')}</value>
                            </entry>
                            <entry>
<key>ddl</key>
<value>${cdc.event.type:equals('ddl')}</value>
                            </entry>
                            <entry>
<key>delete</key>
<value>${cdc.event.type:equals('delete')}</value>
                            </entry>
                            <entry>
<key>insert</key>
<value>${cdc.event.type:equals('insert')}</value>
                            </entry>
                            <entry>
<key>update</key>
<value>${cdc.event.type:equals('update')}</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(分支路由处理)RouteOnAttribute</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>begin</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>commit</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>ddl</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>delete</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>insert</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>true</autoTerminate>
                        <name>unmatched</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>update</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.RouteOnAttribute</type>
                </processors>
                <processors>
                    <id>1b0bfc45-e384-3054-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>-200.0</x>
                        <y>264.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Destination</key>
<value>
    <name>Destination</name>
</value>
                            </entry>
                            <entry>
<key>Return Type</key>
<value>
    <name>Return Type</name>
</value>
                            </entry>
                            <entry>
<key>Path Not Found Behavior</key>
<value>
    <name>Path Not Found Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>
    <name>Null Value Representation</name>
</value>
                            </entry>
                            <entry>
<key>rowkey</key>
<value>
    <name>rowkey</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Destination</key>
<value>flowfile-content</value>
                            </entry>
                            <entry>
<key>Return Type</key>
<value>auto-detect</value>
                            </entry>
                            <entry>
<key>Path Not Found Behavior</key>
<value>ignore</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>empty string</value>
                            </entry>
                            <entry>
<key>rowkey</key>
<value>$.id</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(其他操作分支)EvaluateJsonPath</name>
                    <relationships>
                        <autoTerminate>true</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>true</autoTerminate>
                        <name>matched</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>true</autoTerminate>
                        <name>unmatched</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.EvaluateJsonPath</type>
                </processors>
                <processors>
                    <id>20102245-3c99-3a2c-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>712.0</x>
                        <y>928.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Log Level</key>
<value>
    <name>Log Level</name>
</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>
    <name>Log Payload</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
<value>
    <name>Attributes to Log</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>
    <name>attributes-to-log-regex</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
<value>
    <name>Attributes to Ignore</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
<value>
    <name>attributes-to-ignore-regex</name>
</value>
                            </entry>
                            <entry>
<key>Log prefix</key>
<value>
    <name>Log prefix</name>
</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>
    <name>character-set</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Log Level</key>
<value>info</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>.*</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
                            </entry>
                            <entry>
<key>Log prefix</key>
                            </entry>
                            <entry>
<key>character-set</key>
<value>UTF-8</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(成功日志)LogAttribute2</name>
                    <relationships>
                        <autoTerminate>true</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.LogAttribute</type>
                </processors>
                <processors>
                    <id>478f7c35-a840-3122-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>1608.0</x>
                        <y>-8.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Destination</key>
<value>
    <name>Destination</name>
</value>
                            </entry>
                            <entry>
<key>Return Type</key>
<value>
    <name>Return Type</name>
</value>
                            </entry>
                            <entry>
<key>Path Not Found Behavior</key>
<value>
    <name>Path Not Found Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>
    <name>Null Value Representation</name>
</value>
                            </entry>
                            <entry>
<key>rowkey</key>
<value>
    <name>rowkey</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Destination</key>
<value>flowfile-content</value>
                            </entry>
                            <entry>
<key>Return Type</key>
<value>auto-detect</value>
                            </entry>
                            <entry>
<key>Path Not Found Behavior</key>
<value>ignore</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>empty string</value>
                            </entry>
                            <entry>
<key>rowkey</key>
<value>$.id</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(删除操作分支)EvaluateJsonPath</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>matched</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>unmatched</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.EvaluateJsonPath</type>
                </processors>
                <processors>
                    <id>48cf8fca-c91f-3d18-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>1616.0</x>
                        <y>288.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Log Level</key>
<value>
    <name>Log Level</name>
</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>
    <name>Log Payload</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
<value>
    <name>Attributes to Log</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>
    <name>attributes-to-log-regex</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
<value>
    <name>Attributes to Ignore</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
<value>
    <name>attributes-to-ignore-regex</name>
</value>
                            </entry>
                            <entry>
<key>Log prefix</key>
<value>
    <name>Log prefix</name>
</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>
    <name>character-set</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Log Level</key>
<value>info</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>.*</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
                            </entry>
                            <entry>
<key>Log prefix</key>
                            </entry>
                            <entry>
<key>character-set</key>
<value>UTF-8</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(异常日志2)LogAttribute2</name>
                    <relationships>
                        <autoTerminate>true</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.LogAttribute</type>
                </processors>
                <processors>
                    <id>4ea1cd44-9354-3ce0-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>392.0</x>
                        <y>296.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Routing Strategy</key>
<value>
    <name>Routing Strategy</name>
</value>
                            </entry>
                            <entry>
<key>begin</key>
<value>
    <name>begin</name>
</value>
                            </entry>
                            <entry>
<key>commit</key>
<value>
    <name>commit</name>
</value>
                            </entry>
                            <entry>
<key>ddl</key>
<value>
    <name>ddl</name>
</value>
                            </entry>
                            <entry>
<key>delete</key>
<value>
    <name>delete</name>
</value>
                            </entry>
                            <entry>
<key>insert</key>
<value>
    <name>insert</name>
</value>
                            </entry>
                            <entry>
<key>update</key>
<value>
    <name>update</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Routing Strategy</key>
<value>Route to Property name</value>
                            </entry>
                            <entry>
<key>begin</key>
<value>${cdc.event.type:equals('begin')}</value>
                            </entry>
                            <entry>
<key>commit</key>
<value>${cdc.event.type:equals('commit')}</value>
                            </entry>
                            <entry>
<key>ddl</key>
<value>${cdc.event.type:equals('ddl')}</value>
                            </entry>
                            <entry>
<key>delete</key>
<value>${cdc.event.type:equals('delete')}</value>
                            </entry>
                            <entry>
<key>insert</key>
<value>${cdc.event.type:equals('insert')}</value>
                            </entry>
                            <entry>
<key>update</key>
<value>${cdc.event.type:equals('update')}</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(分支路由处理)RouteOnAttribute2</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>begin</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>commit</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>ddl</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>delete</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>insert</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>unmatched</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>update</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.RouteOnAttribute</type>
                </processors>
                <processors>
                    <id>547dfce5-997b-37a4-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>336.0</x>
                        <y>712.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JDBC Connection Pool</key>
<value>
    <identifiesControllerService>org.apache.nifi.dbcp.DBCPService</identifiesControllerService>
    <name>JDBC Connection Pool</name>
</value>
                            </entry>
                            <entry>
<key>putsql-sql-statement</key>
<value>
    <name>putsql-sql-statement</name>
</value>
                            </entry>
                            <entry>
<key>Support Fragmented Transactions</key>
<value>
    <name>Support Fragmented Transactions</name>
</value>
                            </entry>
                            <entry>
<key>database-session-autocommit</key>
<value>
    <name>database-session-autocommit</name>
</value>
                            </entry>
                            <entry>
<key>Transaction Timeout</key>
<value>
    <name>Transaction Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>
    <name>Batch Size</name>
</value>
                            </entry>
                            <entry>
<key>Obtain Generated Keys</key>
<value>
    <name>Obtain Generated Keys</name>
</value>
                            </entry>
                            <entry>
<key>rollback-on-failure</key>
<value>
    <name>rollback-on-failure</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JDBC Connection Pool</key>
<value>6987a6bb-31a0-33ef-0000-000000000000</value>
                            </entry>
                            <entry>
<key>putsql-sql-statement</key>
                            </entry>
                            <entry>
<key>Support Fragmented Transactions</key>
<value>true</value>
                            </entry>
                            <entry>
<key>database-session-autocommit</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Transaction Timeout</key>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>100</value>
                            </entry>
                            <entry>
<key>Obtain Generated Keys</key>
<value>false</value>
                            </entry>
                            <entry>
<key>rollback-on-failure</key>
<value>false</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(执行SQL)PutSQL</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.PutSQL</type>
                </processors>
                <processors>
                    <id>6a9eadf8-8a52-3238-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>1000.0</x>
                        <y>-128.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>group-id</key>
<value>
    <name>group-id</name>
</value>
                            </entry>
                            <entry>
<key>order-attribute</key>
<value>
    <name>order-attribute</name>
</value>
                            </entry>
                            <entry>
<key>initial-order</key>
<value>
    <name>initial-order</name>
</value>
                            </entry>
                            <entry>
<key>maximum-order</key>
<value>
    <name>maximum-order</name>
</value>
                            </entry>
                            <entry>
<key>batch-count</key>
<value>
    <name>batch-count</name>
</value>
                            </entry>
                            <entry>
<key>wait-timeout</key>
<value>
    <name>wait-timeout</name>
</value>
                            </entry>
                            <entry>
<key>inactive-timeout</key>
<value>
    <name>inactive-timeout</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>group-id</key>
<value>1</value>
                            </entry>
                            <entry>
<key>order-attribute</key>
<value>cdc.sequence.id</value>
                            </entry>
                            <entry>
<key>initial-order</key>
<value>0</value>
                            </entry>
                            <entry>
<key>maximum-order</key>
                            </entry>
                            <entry>
<key>batch-count</key>
<value>1000</value>
                            </entry>
                            <entry>
<key>wait-timeout</key>
<value>10 min</value>
                            </entry>
                            <entry>
<key>inactive-timeout</key>
<value>30 min</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(保证执行顺序)EnforceOrder</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>true</autoTerminate>
                        <name>overtook</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>skipped</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>wait</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.EnforceOrder</type>
                </processors>
                <processors>
                    <id>77abff35-717a-34d1-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>392.0</x>
                        <y>-256.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-cdc-mysql-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments>读取mysql日志</comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>capture-change-mysql-hosts</key>
<value>
    <name>capture-change-mysql-hosts</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-driver-class</key>
<value>
    <name>capture-change-mysql-driver-class</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-driver-locations</key>
<value>
    <name>capture-change-mysql-driver-locations</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-username</key>
<value>
    <name>capture-change-mysql-username</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-password</key>
<value>
    <name>capture-change-mysql-password</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-server-id</key>
<value>
    <name>capture-change-mysql-server-id</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-db-name-pattern</key>
<value>
    <name>capture-change-mysql-db-name-pattern</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-name-pattern</key>
<value>
    <name>capture-change-mysql-name-pattern</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-max-wait-time</key>
<value>
    <name>capture-change-mysql-max-wait-time</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-dist-map-cache-client</key>
<value>
    <identifiesControllerService>org.apache.nifi.distributed.cache.client.DistributedMapCacheClient</identifiesControllerService>
    <name>capture-change-mysql-dist-map-cache-client</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-retrieve-all-records</key>
<value>
    <name>capture-change-mysql-retrieve-all-records</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-include-begin-commit</key>
<value>
    <name>capture-change-mysql-include-begin-commit</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-include-ddl-events</key>
<value>
    <name>capture-change-mysql-include-ddl-events</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-state-update-interval</key>
<value>
    <name>capture-change-mysql-state-update-interval</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-init-seq-id</key>
<value>
    <name>capture-change-mysql-init-seq-id</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-init-binlog-filename</key>
<value>
    <name>capture-change-mysql-init-binlog-filename</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-init-binlog-position</key>
<value>
    <name>capture-change-mysql-init-binlog-position</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-use-gtid</key>
<value>
    <name>capture-change-mysql-use-gtid</name>
</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-init-gtid</key>
<value>
    <name>capture-change-mysql-init-gtid</name>
</value>
                            </entry>
                            <entry>
<key>SSL Mode</key>
<value>
    <name>SSL Mode</name>
</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
<value>
    <dependencies>
        <dependentValues>PREFERRED</dependentValues>
        <dependentValues>VERIFY_IDENTITY</dependentValues>
        <dependentValues>REQUIRED</dependentValues>
        <propertyName>SSL Mode</propertyName>
    </dependencies>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>SSL Context Service</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>PRIMARY</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>capture-change-mysql-hosts</key>
<value>11.141.230.152:10106</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-driver-class</key>
<value>com.mysql.jdbc.Driver</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-driver-locations</key>
<value>/data/zhfxx/utils/nifi/nifi-1.15.2/lib/mysql-connector-java-8.0.27.jar</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-username</key>
<value>root</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-password</key>
                            </entry>
                            <entry>
<key>capture-change-mysql-server-id</key>
<value>2</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-db-name-pattern</key>
<value>sjzx-cloud</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-name-pattern</key>
<value>sys_oper_log</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-max-wait-time</key>
<value>30 seconds</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-dist-map-cache-client</key>
<value>f826fa10-9916-3db3-0000-000000000000</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-retrieve-all-records</key>
<value>true</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-include-begin-commit</key>
<value>false</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-include-ddl-events</key>
<value>false</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-state-update-interval</key>
<value>0 seconds</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-init-seq-id</key>
                            </entry>
                            <entry>
<key>capture-change-mysql-init-binlog-filename</key>
                            </entry>
                            <entry>
<key>capture-change-mysql-init-binlog-position</key>
                            </entry>
                            <entry>
<key>capture-change-mysql-use-gtid</key>
<value>false</value>
                            </entry>
                            <entry>
<key>capture-change-mysql-init-gtid</key>
<value>1660088</value>
                            </entry>
                            <entry>
<key>SSL Mode</key>
<value>DISABLED</value>
                            </entry>
                            <entry>
<key>SSL Context Service</key>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>true</executionNodeRestricted>
                    <name>读取mysql日志CaptureChangeMySQL</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style>
                        <entry>
                            <key>background-color</key>
                            <value>#18ed09</value>
                        </entry>
                    </style>
                    <type>org.apache.nifi.cdc.mysql.processors.CaptureChangeMySQL</type>
                </processors>
                <processors>
                    <id>788dd163-d4b1-3010-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>1600.0</x>
                        <y>-208.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Log Level</key>
<value>
    <name>Log Level</name>
</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>
    <name>Log Payload</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
<value>
    <name>Attributes to Log</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>
    <name>attributes-to-log-regex</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
<value>
    <name>Attributes to Ignore</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
<value>
    <name>attributes-to-ignore-regex</name>
</value>
                            </entry>
                            <entry>
<key>Log prefix</key>
<value>
    <name>Log prefix</name>
</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>
    <name>character-set</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Log Level</key>
<value>info</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>.*</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
                            </entry>
                            <entry>
<key>Log prefix</key>
                            </entry>
                            <entry>
<key>character-set</key>
<value>UTF-8</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(异常日志)LogAttribute</name>
                    <relationships>
                        <autoTerminate>true</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.LogAttribute</type>
                </processors>
                <processors>
                    <id>b0c8a0c3-c54d-391e-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>-24.0</x>
                        <y>712.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JDBC Connection Pool</key>
<value>
    <identifiesControllerService>org.apache.nifi.dbcp.DBCPService</identifiesControllerService>
    <name>JDBC Connection Pool</name>
</value>
                            </entry>
                            <entry>
<key>putsql-sql-statement</key>
<value>
    <name>putsql-sql-statement</name>
</value>
                            </entry>
                            <entry>
<key>Support Fragmented Transactions</key>
<value>
    <name>Support Fragmented Transactions</name>
</value>
                            </entry>
                            <entry>
<key>database-session-autocommit</key>
<value>
    <name>database-session-autocommit</name>
</value>
                            </entry>
                            <entry>
<key>Transaction Timeout</key>
<value>
    <name>Transaction Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>
    <name>Batch Size</name>
</value>
                            </entry>
                            <entry>
<key>Obtain Generated Keys</key>
<value>
    <name>Obtain Generated Keys</name>
</value>
                            </entry>
                            <entry>
<key>rollback-on-failure</key>
<value>
    <name>rollback-on-failure</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JDBC Connection Pool</key>
<value>6987a6bb-31a0-33ef-0000-000000000000</value>
                            </entry>
                            <entry>
<key>putsql-sql-statement</key>
                            </entry>
                            <entry>
<key>Support Fragmented Transactions</key>
<value>true</value>
                            </entry>
                            <entry>
<key>database-session-autocommit</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Transaction Timeout</key>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>100</value>
                            </entry>
                            <entry>
<key>Obtain Generated Keys</key>
<value>false</value>
                            </entry>
                            <entry>
<key>rollback-on-failure</key>
<value>false</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(执行SQL)PutSQL</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.PutSQL</type>
                </processors>
                <processors>
                    <id>cc4b13d2-744c-32db-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>1024.0</x>
                        <y>336.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JDBC Connection Pool</key>
<value>
    <identifiesControllerService>org.apache.nifi.dbcp.DBCPService</identifiesControllerService>
    <name>JDBC Connection Pool</name>
</value>
                            </entry>
                            <entry>
<key>Statement Type</key>
<value>
    <name>Statement Type</name>
</value>
                            </entry>
                            <entry>
<key>Table Name</key>
<value>
    <name>Table Name</name>
</value>
                            </entry>
                            <entry>
<key>Catalog Name</key>
<value>
    <name>Catalog Name</name>
</value>
                            </entry>
                            <entry>
<key>Schema Name</key>
<value>
    <name>Schema Name</name>
</value>
                            </entry>
                            <entry>
<key>Translate Field Names</key>
<value>
    <name>Translate Field Names</name>
</value>
                            </entry>
                            <entry>
<key>Unmatched Field Behavior</key>
<value>
    <name>Unmatched Field Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Unmatched Column Behavior</key>
<value>
    <name>Unmatched Column Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Update Keys</key>
<value>
    <name>Update Keys</name>
</value>
                            </entry>
                            <entry>
<key>jts-quoted-identifiers</key>
<value>
    <name>jts-quoted-identifiers</name>
</value>
                            </entry>
                            <entry>
<key>jts-quoted-table-identifiers</key>
<value>
    <name>jts-quoted-table-identifiers</name>
</value>
                            </entry>
                            <entry>
<key>jts-sql-param-attr-prefix</key>
<value>
    <name>jts-sql-param-attr-prefix</name>
</value>
                            </entry>
                            <entry>
<key>table-schema-cache-size</key>
<value>
    <name>table-schema-cache-size</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JDBC Connection Pool</key>
<value>6987a6bb-31a0-33ef-0000-000000000000</value>
                            </entry>
                            <entry>
<key>Statement Type</key>
<value>INSERT</value>
                            </entry>
                            <entry>
<key>Table Name</key>
<value>sys_oper_log</value>
                            </entry>
                            <entry>
<key>Catalog Name</key>
                            </entry>
                            <entry>
<key>Schema Name</key>
                            </entry>
                            <entry>
<key>Translate Field Names</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Unmatched Field Behavior</key>
<value>Ignore Unmatched Fields</value>
                            </entry>
                            <entry>
<key>Unmatched Column Behavior</key>
<value>Fail on Unmatched Columns</value>
                            </entry>
                            <entry>
<key>Update Keys</key>
                            </entry>
                            <entry>
<key>jts-quoted-identifiers</key>
<value>false</value>
                            </entry>
                            <entry>
<key>jts-quoted-table-identifiers</key>
<value>false</value>
                            </entry>
                            <entry>
<key>jts-sql-param-attr-prefix</key>
<value>sql</value>
                            </entry>
                            <entry>
<key>table-schema-cache-size</key>
<value>100</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(json转sql)ConvertJSONToSQL</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>original</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>sql</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.ConvertJSONToSQL</type>
                </processors>
                <processors>
                    <id>ef695a16-cad9-3c8f-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>392.0</x>
                        <y>456.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-update-attribute-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Delete Attributes Expression</key>
<value>
    <name>Delete Attributes Expression</name>
</value>
                            </entry>
                            <entry>
<key>Store State</key>
<value>
    <name>Store State</name>
</value>
                            </entry>
                            <entry>
<key>Stateful Variables Initial Value</key>
<value>
    <name>Stateful Variables Initial Value</name>
</value>
                            </entry>
                            <entry>
<key>canonical-value-lookup-cache-size</key>
<value>
    <name>canonical-value-lookup-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>sql.args.16.value</key>
<value>
    <name>sql.args.16.value</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Delete Attributes Expression</key>
                            </entry>
                            <entry>
<key>Store State</key>
<value>Do not store state</value>
                            </entry>
                            <entry>
<key>Stateful Variables Initial Value</key>
                            </entry>
                            <entry>
<key>canonical-value-lookup-cache-size</key>
<value>100</value>
                            </entry>
                            <entry>
<key>sql.args.16.value</key>
<value>${sql.args.16.value:format("yyyy-MM-dd HH:mm:ss.SSS")}</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(修改日期字段属性)UpdateAttribute</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style>
                        <entry>
                            <key>background-color</key>
                            <value>#15d9eb</value>
                        </entry>
                    </style>
                    <type>org.apache.nifi.processors.attributes.UpdateAttribute</type>
                </processors>
                <processors>
                    <id>f507464a-92fb-3172-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>696.0</x>
                        <y>712.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JDBC Connection Pool</key>
<value>
    <identifiesControllerService>org.apache.nifi.dbcp.DBCPService</identifiesControllerService>
    <name>JDBC Connection Pool</name>
</value>
                            </entry>
                            <entry>
<key>putsql-sql-statement</key>
<value>
    <name>putsql-sql-statement</name>
</value>
                            </entry>
                            <entry>
<key>Support Fragmented Transactions</key>
<value>
    <name>Support Fragmented Transactions</name>
</value>
                            </entry>
                            <entry>
<key>database-session-autocommit</key>
<value>
    <name>database-session-autocommit</name>
</value>
                            </entry>
                            <entry>
<key>Transaction Timeout</key>
<value>
    <name>Transaction Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>
    <name>Batch Size</name>
</value>
                            </entry>
                            <entry>
<key>Obtain Generated Keys</key>
<value>
    <name>Obtain Generated Keys</name>
</value>
                            </entry>
                            <entry>
<key>rollback-on-failure</key>
<value>
    <name>rollback-on-failure</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JDBC Connection Pool</key>
<value>6987a6bb-31a0-33ef-0000-000000000000</value>
                            </entry>
                            <entry>
<key>putsql-sql-statement</key>
                            </entry>
                            <entry>
<key>Support Fragmented Transactions</key>
<value>true</value>
                            </entry>
                            <entry>
<key>database-session-autocommit</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Transaction Timeout</key>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>100</value>
                            </entry>
                            <entry>
<key>Obtain Generated Keys</key>
<value>false</value>
                            </entry>
                            <entry>
<key>rollback-on-failure</key>
<value>false</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(执行SQL)PutSQL</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>retry</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.PutSQL</type>
                </processors>
                <processors>
                    <id>fa73c19c-c1ce-3b94-0000-000000000000</id>
                    <parentGroupId>9279d5b4-93d8-3a19-0000-000000000000</parentGroupId>
                    <position>
                        <x>392.0</x>
                        <y>128.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.15.2</version>
                    </bundle>
                    <config>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>jolt-transform</key>
<value>
    <name>jolt-transform</name>
</value>
                            </entry>
                            <entry>
<key>jolt-custom-class</key>
<value>
    <name>jolt-custom-class</name>
</value>
                            </entry>
                            <entry>
<key>jolt-custom-modules</key>
<value>
    <name>jolt-custom-modules</name>
</value>
                            </entry>
                            <entry>
<key>jolt-spec</key>
<value>
    <name>jolt-spec</name>
</value>
                            </entry>
                            <entry>
<key>Transform Cache Size</key>
<value>
    <name>Transform Cache Size</name>
</value>
                            </entry>
                            <entry>
<key>pretty_print</key>
<value>
    <name>pretty_print</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>jolt-transform</key>
<value>jolt-transform-chain</value>
                            </entry>
                            <entry>
<key>jolt-custom-class</key>
                            </entry>
                            <entry>
<key>jolt-custom-modules</key>
                            </entry>
                            <entry>
<key>jolt-spec</key>
<value>[{
	"operation": "shift",
	"spec": {
		"columns": {
			"*": {
				"@(value)": "@(1,name)"
			}
		}
	}
}]</value>
                            </entry>
                            <entry>
<key>Transform Cache Size</key>
<value>1</value>
                            </entry>
                            <entry>
<key>pretty_print</key>
<value>false</value>
                            </entry>
                        </properties>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(转换json格式)JoltTransformJSON</name>
                    <relationships>
                        <autoTerminate>true</autoTerminate>
                        <name>failure</name>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.JoltTransformJSON</type>
                </processors>
            </contents>
            <defaultBackPressureDataSizeThreshold>1 GB</defaultBackPressureDataSizeThreshold>
            <defaultBackPressureObjectThreshold>10000</defaultBackPressureObjectThreshold>
            <defaultFlowFileExpiration>0 sec</defaultFlowFileExpiration>
            <flowfileConcurrency>UNBOUNDED</flowfileConcurrency>
            <flowfileOutboundPolicy>STREAM_WHEN_AVAILABLE</flowfileOutboundPolicy>
            <name>mysql日志案例</name>
            <variables/>
        </processGroups>
    </snippet>
    <timestamp>07/21/2022 18:01:25 CST</timestamp>
</template>

```

:::

::: details Kafka案例

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<template encoding-version="1.3">
    <description>Kafka测试</description>
    <groupId>251245c4-0182-1000-ebff-3e470fb4bedb</groupId>
    <name>Kafka</name>
    <snippet>
        <processGroups>
            <id>493b032b-5fed-3bd7-0000-000000000000</id>
            <parentGroupId>986c9a49-575b-327d-0000-000000000000</parentGroupId>
            <position>
                <x>0.0</x>
                <y>0.0</y>
            </position>
            <comments></comments>
            <contents>
                <connections>
                    <id>05e72fe2-0bb9-3c43-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <bends>
                        <x>1096.0</x>
                        <y>272.0</y>
                    </bends>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>0f5d26e6-9d61-3d1c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>0c2694ec-a1ba-3509-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>a84d621b-759d-3bcd-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>table-sys_oper_log</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>0c8e8360-1c48-3b45-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>0383476e-9524-3674-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>934fb87d-c58e-3917-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>12ea10c9-9d7d-3796-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>0f5d26e6-9d61-3d1c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>12fa2da6-8dbb-3010-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>95b23b08-4baf-32c2-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>22c2de96-b1ac-3d08-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>1f7a2c38-16fa-355f-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>1</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>a30fd93b-9617-35d5-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>2091c943-7b80-3ec3-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>split</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>ec16f179-ef47-38f4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>38e54edb-7339-3f03-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>ec16f179-ef47-38f4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>unmatched</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>ff73dbd7-b552-3266-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>47812a12-4a15-3ea3-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>da23ab90-7170-32ff-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>retry</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>934fb87d-c58e-3917-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>4afa7274-6a2e-31ea-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>7be4e19b-41a4-3b6f-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>sjzx-cloud-config库</selectedRelationships>
                    <selectedRelationships>sjzx-cloud库</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>da7efb30-f1aa-3d2a-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>5278006c-4c9b-32ca-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>934fb87d-c58e-3917-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>de749650-aaa6-36bc-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>54de35c2-7c12-3570-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>8de097d9-f31f-313c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>unmatched</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>bb301790-a334-375b-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>5530c55f-30b6-3787-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>de749650-aaa6-36bc-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>sql</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>73280985-0a02-31cc-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>59e77dd1-b5a8-3b9c-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <bends>
                        <x>1536.0</x>
                        <y>-568.0</y>
                    </bends>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>8de097d9-f31f-313c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>测试</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>bb301790-a334-375b-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>64fe8d30-fddc-3c4d-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>0f5d26e6-9d61-3d1c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>537c2178-4e43-39af-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>6970730a-3525-3ea8-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>ec16f179-ef47-38f4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>537c2178-4e43-39af-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>78020e9e-7045-3c27-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <bends>
                        <x>408.0</x>
                        <y>648.0</y>
                    </bends>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>247707c1-9008-3eb4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>update</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>7f3edd2e-d6c6-3940-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>matched</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>ff73dbd7-b552-3266-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>811958e4-fbc3-3f18-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>fb85db46-9047-360c-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>95b23b08-4baf-32c2-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>84492974-0882-32c1-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <bends>
                        <x>656.0</x>
                        <y>616.0</y>
                    </bends>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>a84d621b-759d-3bcd-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>测试</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>873e46d0-8215-3572-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>73280985-0a02-31cc-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>split</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>7be4e19b-41a4-3b6f-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>8b365c8e-e0b1-3195-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>05e5cae0-e5e6-313a-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>unmatched</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>da7efb30-f1aa-3d2a-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>925e3050-e592-3dcb-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>247707c1-9008-3eb4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>original</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>a84d621b-759d-3bcd-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>a08f574a-0169-3a0f-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>247707c1-9008-3eb4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>original</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>ec16f179-ef47-38f4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>ab2f3199-13cd-392a-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>130c3f00-41c9-3587-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>split</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>a84d621b-759d-3bcd-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>af1a1b0d-df03-3445-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>0383476e-9524-3674-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>original</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>7be4e19b-41a4-3b6f-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>b380e691-77c8-35b5-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>ff73dbd7-b552-3266-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>537c2178-4e43-39af-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>c1fd0549-571e-3a38-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>da7efb30-f1aa-3d2a-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>e443197e-b247-3308-0000-000000000000</id>
                        <type>FUNNEL</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>c65e6118-0973-3451-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>e443197e-b247-3308-0000-000000000000</id>
                        <type>FUNNEL</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name>判断数据库</name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>fa682451-66e1-389e-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>cef5f7a6-6abc-3f7f-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <bends>
                        <x>376.0</x>
                        <y>496.0</y>
                    </bends>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>247707c1-9008-3eb4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>ddl</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>d7e1cf73-7e00-3969-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>0383476e-9524-3674-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>failure</selectedRelationships>
                    <selectedRelationships>original</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>73280985-0a02-31cc-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>d87b8379-f1b3-3962-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <bends>
                        <x>368.0</x>
                        <y>392.0</y>
                    </bends>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>247707c1-9008-3eb4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>delete</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>defc6a84-03ad-3c20-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>bb301790-a334-375b-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>success</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>537c2178-4e43-39af-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>df89018e-06e3-3618-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <bends>
                        <x>368.0</x>
                        <y>315.0</y>
                    </bends>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>247707c1-9008-3eb4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>unmatched</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <connections>
                    <id>eb9d66c0-e5da-3945-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>
                    <backPressureObjectThreshold>10000</backPressureObjectThreshold>
                    <bends>
                        <x>360.0</x>
                        <y>576.0</y>
                    </bends>
                    <destination>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>247707c1-9008-3eb4-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </destination>
                    <flowFileExpiration>0 sec</flowFileExpiration>
                    <labelIndex>1</labelIndex>
                    <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>
                    <loadBalancePartitionAttribute></loadBalancePartitionAttribute>
                    <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>
                    <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>
                    <name></name>
                    <selectedRelationships>insert</selectedRelationships>
                    <source>
                        <groupId>493b032b-5fed-3bd7-0000-000000000000</groupId>
                        <id>871b676f-94d7-3602-0000-000000000000</id>
                        <type>PROCESSOR</type>
                    </source>
                    <zIndex>0</zIndex>
                </connections>
                <controllerServices>
                    <id>451fa3ce-078f-392c-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <bundle>
                        <artifact>nifi-dbcp-service-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <comments></comments>
                    <descriptors>
                        <entry>
                            <key>Database Connection URL</key>
                            <value>
<name>Database Connection URL</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Database Driver Class Name</key>
                            <value>
<name>Database Driver Class Name</name>
                            </value>
                        </entry>
                        <entry>
                            <key>database-driver-locations</key>
                            <value>
<name>database-driver-locations</name>
                            </value>
                        </entry>
                        <entry>
                            <key>kerberos-user-service</key>
                            <value>
<identifiesControllerService>org.apache.nifi.kerberos.KerberosUserService</identifiesControllerService>
<name>kerberos-user-service</name>
                            </value>
                        </entry>
                        <entry>
                            <key>kerberos-credentials-service</key>
                            <value>
<identifiesControllerService>org.apache.nifi.kerberos.KerberosCredentialsService</identifiesControllerService>
<name>kerberos-credentials-service</name>
                            </value>
                        </entry>
                        <entry>
                            <key>kerberos-principal</key>
                            <value>
<name>kerberos-principal</name>
                            </value>
                        </entry>
                        <entry>
                            <key>kerberos-password</key>
                            <value>
<name>kerberos-password</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Database User</key>
                            <value>
<name>Database User</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Password</key>
                            <value>
<name>Password</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Max Wait Time</key>
                            <value>
<name>Max Wait Time</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Max Total Connections</key>
                            <value>
<name>Max Total Connections</name>
                            </value>
                        </entry>
                        <entry>
                            <key>Validation-query</key>
                            <value>
<name>Validation-query</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-min-idle-conns</key>
                            <value>
<name>dbcp-min-idle-conns</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-max-idle-conns</key>
                            <value>
<name>dbcp-max-idle-conns</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-max-conn-lifetime</key>
                            <value>
<name>dbcp-max-conn-lifetime</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-time-between-eviction-runs</key>
                            <value>
<name>dbcp-time-between-eviction-runs</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-min-evictable-idle-time</key>
                            <value>
<name>dbcp-min-evictable-idle-time</name>
                            </value>
                        </entry>
                        <entry>
                            <key>dbcp-soft-min-evictable-idle-time</key>
                            <value>
<name>dbcp-soft-min-evictable-idle-time</name>
                            </value>
                        </entry>
                    </descriptors>
                    <name>DBCPConnectionPool</name>
                    <persistsState>false</persistsState>
                    <properties>
                        <entry>
                            <key>Database Connection URL</key>
                            <value>jdbc:mysql://192.168.0.209:3306/sjzx-cloud?useUnicode=true&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8</value>
                        </entry>
                        <entry>
                            <key>Database Driver Class Name</key>
                            <value>com.mysql.cj.jdbc.Driver</value>
                        </entry>
                        <entry>
                            <key>database-driver-locations</key>
                            <value>/data/zhfxx/nifi/nifi-1.16.3/myLib/mysql-connector-java-8.0.29.jar</value>
                        </entry>
                        <entry>
                            <key>kerberos-user-service</key>
                        </entry>
                        <entry>
                            <key>kerberos-credentials-service</key>
                        </entry>
                        <entry>
                            <key>kerberos-principal</key>
                        </entry>
                        <entry>
                            <key>kerberos-password</key>
                        </entry>
                        <entry>
                            <key>Database User</key>
                            <value>root</value>
                        </entry>
                        <entry>
                            <key>Password</key>
                        </entry>
                        <entry>
                            <key>Max Wait Time</key>
                            <value>500 millis</value>
                        </entry>
                        <entry>
                            <key>Max Total Connections</key>
                            <value>8</value>
                        </entry>
                        <entry>
                            <key>Validation-query</key>
                        </entry>
                        <entry>
                            <key>dbcp-min-idle-conns</key>
                            <value>0</value>
                        </entry>
                        <entry>
                            <key>dbcp-max-idle-conns</key>
                            <value>8</value>
                        </entry>
                        <entry>
                            <key>dbcp-max-conn-lifetime</key>
                            <value>-1</value>
                        </entry>
                        <entry>
                            <key>dbcp-time-between-eviction-runs</key>
                            <value>-1</value>
                        </entry>
                        <entry>
                            <key>dbcp-min-evictable-idle-time</key>
                            <value>30 mins</value>
                        </entry>
                        <entry>
                            <key>dbcp-soft-min-evictable-idle-time</key>
                            <value>-1</value>
                        </entry>
                    </properties>
                    <state>ENABLED</state>
                    <type>org.apache.nifi.dbcp.DBCPConnectionPool</type>
                </controllerServices>
                <funnels>
                    <id>e443197e-b247-3308-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>2888.0</x>
                        <y>128.0</y>
                    </position>
                </funnels>
                <processors>
                    <id>0383476e-9524-3674-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>4112.0</x>
                        <y>664.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Log Level</key>
<value>
    <name>Log Level</name>
</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>
    <name>Log Payload</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
<value>
    <name>Attributes to Log</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>
    <name>attributes-to-log-regex</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
<value>
    <name>Attributes to Ignore</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
<value>
    <name>attributes-to-ignore-regex</name>
</value>
                            </entry>
                            <entry>
<key>Log FlowFile Properties</key>
<value>
    <name>Log FlowFile Properties</name>
</value>
                            </entry>
                            <entry>
<key>Output Format</key>
<value>
    <name>Output Format</name>
</value>
                            </entry>
                            <entry>
<key>Log prefix</key>
<value>
    <name>Log prefix</name>
</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>
    <name>character-set</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Log Level</key>
<value>info</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>.*</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
                            </entry>
                            <entry>
<key>Log FlowFile Properties</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Output Format</key>
<value>Line per Attribute</value>
                            </entry>
                            <entry>
<key>Log prefix</key>
                            </entry>
                            <entry>
<key>character-set</key>
<value>UTF-8</value>
                            </entry>
                        </properties>
                        <retryCount>0</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>LogAttribute</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>DISABLED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.LogAttribute</type>
                </processors>
                <processors>
                    <id>05e5cae0-e5e6-313a-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>2048.0</x>
                        <y>584.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments>拆分json,只支持元素是数组类型的拆分。</comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JsonPath Expression</key>
<value>
    <name>JsonPath Expression</name>
</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>
    <name>Null Value Representation</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JsonPath Expression</key>
<value>$.data</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>empty string</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>SplitJson</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>original</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>split</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.SplitJson</type>
                </processors>
                <processors>
                    <id>0f5d26e6-9d61-3d1c-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>888.0</x>
                        <y>8.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>flatten-json-separator</key>
<value>
    <name>flatten-json-separator</name>
</value>
                            </entry>
                            <entry>
<key>flatten-mode</key>
<value>
    <name>flatten-mode</name>
</value>
                            </entry>
                            <entry>
<key>ignore-reserved-characters</key>
<value>
    <name>ignore-reserved-characters</name>
</value>
                            </entry>
                            <entry>
<key>flatten-json-return-type</key>
<value>
    <name>flatten-json-return-type</name>
</value>
                            </entry>
                            <entry>
<key>flatten-json-character-set</key>
<value>
    <name>flatten-json-character-set</name>
</value>
                            </entry>
                            <entry>
<key>flatten-json-pretty-print-json</key>
<value>
    <name>flatten-json-pretty-print-json</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>flatten-json-separator</key>
<value>.</value>
                            </entry>
                            <entry>
<key>flatten-mode</key>
<value>normal</value>
                            </entry>
                            <entry>
<key>ignore-reserved-characters</key>
<value>false</value>
                            </entry>
                            <entry>
<key>flatten-json-return-type</key>
<value>flatten</value>
                            </entry>
                            <entry>
<key>flatten-json-character-set</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>flatten-json-pretty-print-json</key>
<value>true</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>FlattenJson</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.FlattenJson</type>
                </processors>
                <processors>
                    <id>130c3f00-41c9-3587-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>448.0</x>
                        <y>944.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JDBC Connection Pool</key>
<value>
    <identifiesControllerService>org.apache.nifi.dbcp.DBCPService</identifiesControllerService>
    <name>JDBC Connection Pool</name>
</value>
                            </entry>
                            <entry>
<key>Statement Type</key>
<value>
    <name>Statement Type</name>
</value>
                            </entry>
                            <entry>
<key>Table Name</key>
<value>
    <name>Table Name</name>
</value>
                            </entry>
                            <entry>
<key>Catalog Name</key>
<value>
    <name>Catalog Name</name>
</value>
                            </entry>
                            <entry>
<key>Schema Name</key>
<value>
    <name>Schema Name</name>
</value>
                            </entry>
                            <entry>
<key>Translate Field Names</key>
<value>
    <name>Translate Field Names</name>
</value>
                            </entry>
                            <entry>
<key>Unmatched Field Behavior</key>
<value>
    <name>Unmatched Field Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Unmatched Column Behavior</key>
<value>
    <name>Unmatched Column Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Update Keys</key>
<value>
    <name>Update Keys</name>
</value>
                            </entry>
                            <entry>
<key>jts-quoted-identifiers</key>
<value>
    <name>jts-quoted-identifiers</name>
</value>
                            </entry>
                            <entry>
<key>jts-quoted-table-identifiers</key>
<value>
    <name>jts-quoted-table-identifiers</name>
</value>
                            </entry>
                            <entry>
<key>jts-sql-param-attr-prefix</key>
<value>
    <name>jts-sql-param-attr-prefix</name>
</value>
                            </entry>
                            <entry>
<key>table-schema-cache-size</key>
<value>
    <name>table-schema-cache-size</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JDBC Connection Pool</key>
<value>451fa3ce-078f-392c-0000-000000000000</value>
                            </entry>
                            <entry>
<key>Statement Type</key>
<value>INSERT</value>
                            </entry>
                            <entry>
<key>Table Name</key>
<value>sys_oper_log_copy1</value>
                            </entry>
                            <entry>
<key>Catalog Name</key>
                            </entry>
                            <entry>
<key>Schema Name</key>
                            </entry>
                            <entry>
<key>Translate Field Names</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Unmatched Field Behavior</key>
<value>Ignore Unmatched Fields</value>
                            </entry>
                            <entry>
<key>Unmatched Column Behavior</key>
<value>Fail on Unmatched Columns</value>
                            </entry>
                            <entry>
<key>Update Keys</key>
                            </entry>
                            <entry>
<key>jts-quoted-identifiers</key>
<value>false</value>
                            </entry>
                            <entry>
<key>jts-quoted-table-identifiers</key>
<value>false</value>
                            </entry>
                            <entry>
<key>jts-sql-param-attr-prefix</key>
<value>sql</value>
                            </entry>
                            <entry>
<key>table-schema-cache-size</key>
<value>100</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>ConvertJSONToSQL</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>original</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>sql</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.ConvertJSONToSQL</type>
                </processors>
                <processors>
                    <id>22c2de96-b1ac-3d08-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>1520.0</x>
                        <y>56.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>File Size</key>
<value>
    <name>File Size</name>
</value>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>
    <name>Batch Size</name>
</value>
                            </entry>
                            <entry>
<key>Data Format</key>
<value>
    <name>Data Format</name>
</value>
                            </entry>
                            <entry>
<key>Unique FlowFiles</key>
<value>
    <name>Unique FlowFiles</name>
</value>
                            </entry>
                            <entry>
<key>generate-ff-custom-text</key>
<value>
    <name>generate-ff-custom-text</name>
</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>
    <name>character-set</name>
</value>
                            </entry>
                            <entry>
<key>mime-type</key>
<value>
    <name>mime-type</name>
</value>
                            </entry>
                            <entry>
<key>data</key>
<value>
    <name>data</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>1 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>File Size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>1</value>
                            </entry>
                            <entry>
<key>Data Format</key>
<value>Text</value>
                            </entry>
                            <entry>
<key>Unique FlowFiles</key>
<value>false</value>
                            </entry>
                            <entry>
<key>generate-ff-custom-text</key>
<value>{"data":[{"oper_id":"959698","title":"sql门执行GET请求","business_type":"10","method":"com.jsxy.dimensiondoor.controller.SqlDoorController.invokeGet()","request_method":"GET","operator_type":"1","oper_name":"admin","dept_name":null,"oper_url":"/peiguan/sqlDoor/invoke/onlineCollege-getShortInfo","oper_ip":"192.168.0.102","oper_location":"","oper_param":"onlineCollege-getShortInfo","json_result":"{\"code\":200,\"data\":{\"code\":200,\"msg\":\"查询成功\",\"rows\":[{\"id\":\"8a0d66767f54fcfa017f550e300b0004\",\"trainProjectId\":\"202203010WTD\",\"trainName\":\"电力发展中心测试班级\",\"signStartTime\":\"2022-03-03 00:00:00\",\"signEndTime\":\"2022-03-30 00:00:00\",\"checkinStartTime\":\"2022-04-01 00:00:00\",\"checkinEndTime\":\"2022-04-04 00:00:00\",\"projectStartTime\":\"2022-04-04 00:00:00\",\"projectEndTime\":\"2022-04-15 00:00:00\",\"reportedLocation\":\"D001\",\"placeForTraining\":\"D001\",\"trainingContent\":\"培训内容\",\"costDescription\":\"培训费200元/人;食宿费100元/人。\",\"contactPersonForThisProject\":\"郭凯丽\",\"trainingCost\":\"400\",\"headTeacherId\":\"1558428429341\",\"currentNumber\":\"0\",\"theNumberOfPlan\":\"66\",\"theoryCourseNum\":\"0\",\"practiceCourseNum\":\"0\",\"certificateNum\":\"0\",\"trainingType\":\"1\",\"isAvailable\":\" \",\"trainClassType\":\"委托类\",\"fundFlow\":\"AC001\",\"idCard\":\"370784199106028627\",\"account\":\"sgtc_guokl\",\"bzrContact\":\"\",\"createIdcard\":\"372926199004073322\",\"createContact\":\"9082\",\"publishStatus\":\"1\",\"delFlag\":\"0\",\"createTime\":\"2022-03-04 22:39:21\",\"updateTime\":\"2022-03-04 22:39:21\"},{\"id\":\"8a0d66767f55de82017f631605356f15\",\"trainProjectId\":\"202203005GSJ\",\"trainName\":\"公司2022年技术标准制修订工作培训班\",\"signStartTime\":\"2022-03-03 00:00:00\",\"signEndTime\":\"2022-03-09 00:00:00\",\"check...","status":"0","error_msg":null,"oper_time":"2022-07-20 15:01:58"}],"database":"sjzx-cloud","es":1658300518000,"id":14095,"isDdl":false,"mysqlType":{"oper_id":"bigint(20)","title":"varchar(50)","business_type":"int(2)","method":"varchar(100)","request_method":"varchar(10)","operator_type":"int(1)","oper_name":"varchar(50)","dept_name":"varchar(50)","oper_url":"varchar(255)","oper_ip":"varchar(50)","oper_location":"varchar(255)","oper_param":"varchar(2000)","json_result":"varchar(2000)","status":"int(1)","error_msg":"varchar(2000)","oper_time":"datetime"},"old":null,"pkNames":["oper_id"],"sql":"","sqlType":{"oper_id":-5,"title":12,"business_type":4,"method":12,"request_method":12,"operator_type":4,"oper_name":12,"dept_name":12,"oper_url":12,"oper_ip":12,"oper_location":12,"oper_param":12,"json_result":12,"status":4,"error_msg":12,"oper_time":93},"table":"sys_oper_log","ts":1658475639248,"type":"INSERT"}</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>mime-type</key>
                            </entry>
                            <entry>
<key>data</key>
<value>零度</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>* * * * * ?</schedulingPeriod>
                        <schedulingStrategy>CRON_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>GenerateFlowFile</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.GenerateFlowFile</type>
                </processors>
                <processors>
                    <id>247707c1-9008-3eb4-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>-184.0</x>
                        <y>528.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JsonPath Expression</key>
<value>
    <name>JsonPath Expression</name>
</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>
    <name>Null Value Representation</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JsonPath Expression</key>
<value>$.data.*</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>empty string</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>SplitJson</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>original</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>split</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.SplitJson</type>
                </processors>
                <processors>
                    <id>537c2178-4e43-39af-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>896.0</x>
                        <y>-216.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-kafka-2-6-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>bootstrap.servers</key>
<value>
    <name>bootstrap.servers</name>
</value>
                            </entry>
                            <entry>
<key>topic</key>
<value>
    <name>topic</name>
</value>
                            </entry>
                            <entry>
<key>topic_type</key>
<value>
    <name>topic_type</name>
</value>
                            </entry>
                            <entry>
<key>group.id</key>
<value>
    <name>group.id</name>
</value>
                            </entry>
                            <entry>
<key>Commit Offsets</key>
<value>
    <name>Commit Offsets</name>
</value>
                            </entry>
                            <entry>
<key>max-uncommit-offset-wait</key>
<value>
    <dependencies>
        <dependentValues>true</dependentValues>
        <propertyName>Commit Offsets</propertyName>
    </dependencies>
    <name>max-uncommit-offset-wait</name>
</value>
                            </entry>
                            <entry>
<key>honor-transactions</key>
<value>
    <name>honor-transactions</name>
</value>
                            </entry>
                            <entry>
<key>message-demarcator</key>
<value>
    <name>message-demarcator</name>
</value>
                            </entry>
                            <entry>
<key>separate-by-key</key>
<value>
    <name>separate-by-key</name>
</value>
                            </entry>
                            <entry>
<key>security.protocol</key>
<value>
    <name>security.protocol</name>
</value>
                            </entry>
                            <entry>
<key>sasl.mechanism</key>
<value>
    <name>sasl.mechanism</name>
</value>
                            </entry>
                            <entry>
<key>kerberos-credentials-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.kerberos.KerberosCredentialsService</identifiesControllerService>
    <name>kerberos-credentials-service</name>
</value>
                            </entry>
                            <entry>
<key>kerberos-user-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.kerberos.SelfContainedKerberosUserService</identifiesControllerService>
    <name>kerberos-user-service</name>
</value>
                            </entry>
                            <entry>
<key>sasl.kerberos.service.name</key>
<value>
    <name>sasl.kerberos.service.name</name>
</value>
                            </entry>
                            <entry>
<key>sasl.kerberos.principal</key>
<value>
    <name>sasl.kerberos.principal</name>
</value>
                            </entry>
                            <entry>
<key>sasl.kerberos.keytab</key>
<value>
    <name>sasl.kerberos.keytab</name>
</value>
                            </entry>
                            <entry>
<key>sasl.username</key>
<value>
    <name>sasl.username</name>
</value>
                            </entry>
                            <entry>
<key>sasl.password</key>
<value>
    <name>sasl.password</name>
</value>
                            </entry>
                            <entry>
<key>sasl.token.auth</key>
<value>
    <name>sasl.token.auth</name>
</value>
                            </entry>
                            <entry>
<key>ssl.context.service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>ssl.context.service</name>
</value>
                            </entry>
                            <entry>
<key>key-attribute-encoding</key>
<value>
    <name>key-attribute-encoding</name>
</value>
                            </entry>
                            <entry>
<key>auto.offset.reset</key>
<value>
    <name>auto.offset.reset</name>
</value>
                            </entry>
                            <entry>
<key>message-header-encoding</key>
<value>
    <name>message-header-encoding</name>
</value>
                            </entry>
                            <entry>
<key>header-name-regex</key>
<value>
    <name>header-name-regex</name>
</value>
                            </entry>
                            <entry>
<key>max.poll.records</key>
<value>
    <name>max.poll.records</name>
</value>
                            </entry>
                            <entry>
<key>Communications Timeout</key>
<value>
    <name>Communications Timeout</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>1 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>bootstrap.servers</key>
<value>192.168.0.201:9092</value>
                            </entry>
                            <entry>
<key>topic</key>
<value>ceshi</value>
                            </entry>
                            <entry>
<key>topic_type</key>
<value>names</value>
                            </entry>
                            <entry>
<key>group.id</key>
<value>ceshi</value>
                            </entry>
                            <entry>
<key>Commit Offsets</key>
<value>true</value>
                            </entry>
                            <entry>
<key>max-uncommit-offset-wait</key>
<value>1 secs</value>
                            </entry>
                            <entry>
<key>honor-transactions</key>
<value>true</value>
                            </entry>
                            <entry>
<key>message-demarcator</key>
                            </entry>
                            <entry>
<key>separate-by-key</key>
<value>false</value>
                            </entry>
                            <entry>
<key>security.protocol</key>
<value>PLAINTEXT</value>
                            </entry>
                            <entry>
<key>sasl.mechanism</key>
<value>GSSAPI</value>
                            </entry>
                            <entry>
<key>kerberos-credentials-service</key>
                            </entry>
                            <entry>
<key>kerberos-user-service</key>
                            </entry>
                            <entry>
<key>sasl.kerberos.service.name</key>
                            </entry>
                            <entry>
<key>sasl.kerberos.principal</key>
                            </entry>
                            <entry>
<key>sasl.kerberos.keytab</key>
                            </entry>
                            <entry>
<key>sasl.username</key>
                            </entry>
                            <entry>
<key>sasl.password</key>
                            </entry>
                            <entry>
<key>sasl.token.auth</key>
<value>false</value>
                            </entry>
                            <entry>
<key>ssl.context.service</key>
                            </entry>
                            <entry>
<key>key-attribute-encoding</key>
<value>utf-8</value>
                            </entry>
                            <entry>
<key>auto.offset.reset</key>
<value>latest</value>
                            </entry>
                            <entry>
<key>message-header-encoding</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>header-name-regex</key>
                            </entry>
                            <entry>
<key>max.poll.records</key>
<value>10000</value>
                            </entry>
                            <entry>
<key>Communications Timeout</key>
<value>60 secs</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>[消费Kafka]ConsumeKafka_2_6</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_6</type>
                </processors>
                <processors>
                    <id>73280985-0a02-31cc-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>3312.0</x>
                        <y>720.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JDBC Connection Pool</key>
<value>
    <identifiesControllerService>org.apache.nifi.dbcp.DBCPService</identifiesControllerService>
    <name>JDBC Connection Pool</name>
</value>
                            </entry>
                            <entry>
<key>Statement Type</key>
<value>
    <name>Statement Type</name>
</value>
                            </entry>
                            <entry>
<key>Table Name</key>
<value>
    <name>Table Name</name>
</value>
                            </entry>
                            <entry>
<key>Catalog Name</key>
<value>
    <name>Catalog Name</name>
</value>
                            </entry>
                            <entry>
<key>Schema Name</key>
<value>
    <name>Schema Name</name>
</value>
                            </entry>
                            <entry>
<key>Translate Field Names</key>
<value>
    <name>Translate Field Names</name>
</value>
                            </entry>
                            <entry>
<key>Unmatched Field Behavior</key>
<value>
    <name>Unmatched Field Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Unmatched Column Behavior</key>
<value>
    <name>Unmatched Column Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Update Keys</key>
<value>
    <name>Update Keys</name>
</value>
                            </entry>
                            <entry>
<key>jts-quoted-identifiers</key>
<value>
    <name>jts-quoted-identifiers</name>
</value>
                            </entry>
                            <entry>
<key>jts-quoted-table-identifiers</key>
<value>
    <name>jts-quoted-table-identifiers</name>
</value>
                            </entry>
                            <entry>
<key>jts-sql-param-attr-prefix</key>
<value>
    <name>jts-sql-param-attr-prefix</name>
</value>
                            </entry>
                            <entry>
<key>table-schema-cache-size</key>
<value>
    <name>table-schema-cache-size</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JDBC Connection Pool</key>
<value>451fa3ce-078f-392c-0000-000000000000</value>
                            </entry>
                            <entry>
<key>Statement Type</key>
<value>INSERT</value>
                            </entry>
                            <entry>
<key>Table Name</key>
<value>sys_oper_log_copy1</value>
                            </entry>
                            <entry>
<key>Catalog Name</key>
                            </entry>
                            <entry>
<key>Schema Name</key>
                            </entry>
                            <entry>
<key>Translate Field Names</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Unmatched Field Behavior</key>
<value>Ignore Unmatched Fields</value>
                            </entry>
                            <entry>
<key>Unmatched Column Behavior</key>
<value>Fail on Unmatched Columns</value>
                            </entry>
                            <entry>
<key>Update Keys</key>
                            </entry>
                            <entry>
<key>jts-quoted-identifiers</key>
<value>false</value>
                            </entry>
                            <entry>
<key>jts-quoted-table-identifiers</key>
<value>false</value>
                            </entry>
                            <entry>
<key>jts-sql-param-attr-prefix</key>
<value>sql</value>
                            </entry>
                            <entry>
<key>table-schema-cache-size</key>
<value>100</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>ConvertJSONToSQL</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>original</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>sql</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.ConvertJSONToSQL</type>
                </processors>
                <processors>
                    <id>7be4e19b-41a4-3b6f-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>3296.0</x>
                        <y>336.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments>拆分json,只支持元素是数组类型的拆分。</comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JsonPath Expression</key>
<value>
    <name>JsonPath Expression</name>
</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>
    <name>Null Value Representation</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JsonPath Expression</key>
<value>$.data</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>empty string</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>SplitJson</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>original</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>split</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.SplitJson</type>
                </processors>
                <processors>
                    <id>871b676f-94d7-3602-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>504.0</x>
                        <y>280.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Routing Strategy</key>
<value>
    <name>Routing Strategy</name>
</value>
                            </entry>
                            <entry>
<key>ddl</key>
<value>
    <name>ddl</name>
</value>
                            </entry>
                            <entry>
<key>delete</key>
<value>
    <name>delete</name>
</value>
                            </entry>
                            <entry>
<key>insert</key>
<value>
    <name>insert</name>
</value>
                            </entry>
                            <entry>
<key>table-sys_oper_log</key>
<value>
    <name>table-sys_oper_log</name>
</value>
                            </entry>
                            <entry>
<key>update</key>
<value>
    <name>update</name>
</value>
                            </entry>
                            <entry>
<key>测试</key>
<value>
    <name>测试</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Routing Strategy</key>
<value>Route to Property name</value>
                            </entry>
                            <entry>
<key>ddl</key>
<value>${cdc.event.type:equals('ddl')}</value>
                            </entry>
                            <entry>
<key>delete</key>
<value>${cdc.event.type:equals('delete')}</value>
                            </entry>
                            <entry>
<key>insert</key>
<value>${type:equals('INSERT')}</value>
                            </entry>
                            <entry>
<key>table-sys_oper_log</key>
<value>${table:equals('sys_oper_log')}</value>
                            </entry>
                            <entry>
<key>update</key>
<value>${cdc.event.type:equals('update')}</value>
                            </entry>
                            <entry>
<key>测试</key>
<value>${data:equals('零度')}</value>
                            </entry>
                        </properties>
                        <retryCount>0</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(分支路由处理)RouteOnAttribute</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>ddl</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>delete</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>insert</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>table-sys_oper_log</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>unmatched</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>update</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>测试</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.RouteOnAttribute</type>
                </processors>
                <processors>
                    <id>8de097d9-f31f-313c-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>896.0</x>
                        <y>-776.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Log Level</key>
<value>
    <name>Log Level</name>
</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>
    <name>Log Payload</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
<value>
    <name>Attributes to Log</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>
    <name>attributes-to-log-regex</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
<value>
    <name>Attributes to Ignore</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
<value>
    <name>attributes-to-ignore-regex</name>
</value>
                            </entry>
                            <entry>
<key>Log FlowFile Properties</key>
<value>
    <name>Log FlowFile Properties</name>
</value>
                            </entry>
                            <entry>
<key>Output Format</key>
<value>
    <name>Output Format</name>
</value>
                            </entry>
                            <entry>
<key>Log prefix</key>
<value>
    <name>Log prefix</name>
</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>
    <name>character-set</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Log Level</key>
<value>info</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>.*</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
                            </entry>
                            <entry>
<key>Log FlowFile Properties</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Output Format</key>
<value>Line per Attribute</value>
                            </entry>
                            <entry>
<key>Log prefix</key>
                            </entry>
                            <entry>
<key>character-set</key>
<value>UTF-8</value>
                            </entry>
                        </properties>
                        <retryCount>0</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>LogAttribute</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>DISABLED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.LogAttribute</type>
                </processors>
                <processors>
                    <id>934fb87d-c58e-3917-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>3312.0</x>
                        <y>1168.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JDBC Connection Pool</key>
<value>
    <identifiesControllerService>org.apache.nifi.dbcp.DBCPService</identifiesControllerService>
    <name>JDBC Connection Pool</name>
</value>
                            </entry>
                            <entry>
<key>putsql-sql-statement</key>
<value>
    <name>putsql-sql-statement</name>
</value>
                            </entry>
                            <entry>
<key>Support Fragmented Transactions</key>
<value>
    <name>Support Fragmented Transactions</name>
</value>
                            </entry>
                            <entry>
<key>database-session-autocommit</key>
<value>
    <name>database-session-autocommit</name>
</value>
                            </entry>
                            <entry>
<key>Transaction Timeout</key>
<value>
    <name>Transaction Timeout</name>
</value>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>
    <name>Batch Size</name>
</value>
                            </entry>
                            <entry>
<key>Obtain Generated Keys</key>
<value>
    <name>Obtain Generated Keys</name>
</value>
                            </entry>
                            <entry>
<key>rollback-on-failure</key>
<value>
    <name>rollback-on-failure</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JDBC Connection Pool</key>
<value>451fa3ce-078f-392c-0000-000000000000</value>
                            </entry>
                            <entry>
<key>putsql-sql-statement</key>
                            </entry>
                            <entry>
<key>Support Fragmented Transactions</key>
<value>true</value>
                            </entry>
                            <entry>
<key>database-session-autocommit</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Transaction Timeout</key>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>100</value>
                            </entry>
                            <entry>
<key>Obtain Generated Keys</key>
<value>false</value>
                            </entry>
                            <entry>
<key>rollback-on-failure</key>
<value>false</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>PutSQL</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>retry</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.PutSQL</type>
                </processors>
                <processors>
                    <id>95b23b08-4baf-32c2-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>1544.0</x>
                        <y>288.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-kafka-2-6-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>bootstrap.servers</key>
<value>
    <name>bootstrap.servers</name>
</value>
                            </entry>
                            <entry>
<key>topic</key>
<value>
    <name>topic</name>
</value>
                            </entry>
                            <entry>
<key>use-transactions</key>
<value>
    <name>use-transactions</name>
</value>
                            </entry>
                            <entry>
<key>transactional-id-prefix</key>
<value>
    <dependencies>
        <dependentValues>true</dependentValues>
        <propertyName>use-transactions</propertyName>
    </dependencies>
    <name>transactional-id-prefix</name>
</value>
                            </entry>
                            <entry>
<key>message-demarcator</key>
<value>
    <name>message-demarcator</name>
</value>
                            </entry>
                            <entry>
<key>Failure Strategy</key>
<value>
    <name>Failure Strategy</name>
</value>
                            </entry>
                            <entry>
<key>acks</key>
<value>
    <name>acks</name>
</value>
                            </entry>
                            <entry>
<key>attribute-name-regex</key>
<value>
    <name>attribute-name-regex</name>
</value>
                            </entry>
                            <entry>
<key>message-header-encoding</key>
<value>
    <name>message-header-encoding</name>
</value>
                            </entry>
                            <entry>
<key>security.protocol</key>
<value>
    <name>security.protocol</name>
</value>
                            </entry>
                            <entry>
<key>sasl.mechanism</key>
<value>
    <name>sasl.mechanism</name>
</value>
                            </entry>
                            <entry>
<key>kerberos-credentials-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.kerberos.KerberosCredentialsService</identifiesControllerService>
    <name>kerberos-credentials-service</name>
</value>
                            </entry>
                            <entry>
<key>kerberos-user-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.kerberos.SelfContainedKerberosUserService</identifiesControllerService>
    <name>kerberos-user-service</name>
</value>
                            </entry>
                            <entry>
<key>sasl.kerberos.service.name</key>
<value>
    <name>sasl.kerberos.service.name</name>
</value>
                            </entry>
                            <entry>
<key>sasl.kerberos.principal</key>
<value>
    <name>sasl.kerberos.principal</name>
</value>
                            </entry>
                            <entry>
<key>sasl.kerberos.keytab</key>
<value>
    <name>sasl.kerberos.keytab</name>
</value>
                            </entry>
                            <entry>
<key>sasl.username</key>
<value>
    <name>sasl.username</name>
</value>
                            </entry>
                            <entry>
<key>sasl.password</key>
<value>
    <name>sasl.password</name>
</value>
                            </entry>
                            <entry>
<key>sasl.token.auth</key>
<value>
    <name>sasl.token.auth</name>
</value>
                            </entry>
                            <entry>
<key>ssl.context.service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>ssl.context.service</name>
</value>
                            </entry>
                            <entry>
<key>kafka-key</key>
<value>
    <name>kafka-key</name>
</value>
                            </entry>
                            <entry>
<key>key-attribute-encoding</key>
<value>
    <name>key-attribute-encoding</name>
</value>
                            </entry>
                            <entry>
<key>max.request.size</key>
<value>
    <name>max.request.size</name>
</value>
                            </entry>
                            <entry>
<key>ack.wait.time</key>
<value>
    <name>ack.wait.time</name>
</value>
                            </entry>
                            <entry>
<key>max.block.ms</key>
<value>
    <name>max.block.ms</name>
</value>
                            </entry>
                            <entry>
<key>partitioner.class</key>
<value>
    <name>partitioner.class</name>
</value>
                            </entry>
                            <entry>
<key>partition</key>
<value>
    <name>partition</name>
</value>
                            </entry>
                            <entry>
<key>compression.type</key>
<value>
    <name>compression.type</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>0 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>bootstrap.servers</key>
<value>192.168.0.201:9092</value>
                            </entry>
                            <entry>
<key>topic</key>
<value>ceshi</value>
                            </entry>
                            <entry>
<key>use-transactions</key>
<value>true</value>
                            </entry>
                            <entry>
<key>transactional-id-prefix</key>
                            </entry>
                            <entry>
<key>message-demarcator</key>
                            </entry>
                            <entry>
<key>Failure Strategy</key>
<value>Route to Failure</value>
                            </entry>
                            <entry>
<key>acks</key>
<value>all</value>
                            </entry>
                            <entry>
<key>attribute-name-regex</key>
                            </entry>
                            <entry>
<key>message-header-encoding</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>security.protocol</key>
<value>PLAINTEXT</value>
                            </entry>
                            <entry>
<key>sasl.mechanism</key>
<value>GSSAPI</value>
                            </entry>
                            <entry>
<key>kerberos-credentials-service</key>
                            </entry>
                            <entry>
<key>kerberos-user-service</key>
                            </entry>
                            <entry>
<key>sasl.kerberos.service.name</key>
                            </entry>
                            <entry>
<key>sasl.kerberos.principal</key>
                            </entry>
                            <entry>
<key>sasl.kerberos.keytab</key>
                            </entry>
                            <entry>
<key>sasl.username</key>
                            </entry>
                            <entry>
<key>sasl.password</key>
                            </entry>
                            <entry>
<key>sasl.token.auth</key>
<value>false</value>
                            </entry>
                            <entry>
<key>ssl.context.service</key>
                            </entry>
                            <entry>
<key>kafka-key</key>
                            </entry>
                            <entry>
<key>key-attribute-encoding</key>
<value>utf-8</value>
                            </entry>
                            <entry>
<key>max.request.size</key>
<value>1 MB</value>
                            </entry>
                            <entry>
<key>ack.wait.time</key>
<value>5 secs</value>
                            </entry>
                            <entry>
<key>max.block.ms</key>
<value>5 sec</value>
                            </entry>
                            <entry>
<key>partitioner.class</key>
<value>org.apache.kafka.clients.producer.internals.DefaultPartitioner</value>
                            </entry>
                            <entry>
<key>partition</key>
                            </entry>
                            <entry>
<key>compression.type</key>
<value>none</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>* * * * * ?</schedulingPeriod>
                        <schedulingStrategy>CRON_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>[发布消息到kafka]PublishKafka_2_6</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.kafka.pubsub.PublishKafka_2_6</type>
                </processors>
                <processors>
                    <id>a30fd93b-9617-35d5-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>1248.0</x>
                        <y>824.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>File Size</key>
<value>
    <name>File Size</name>
</value>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>
    <name>Batch Size</name>
</value>
                            </entry>
                            <entry>
<key>Data Format</key>
<value>
    <name>Data Format</name>
</value>
                            </entry>
                            <entry>
<key>Unique FlowFiles</key>
<value>
    <name>Unique FlowFiles</name>
</value>
                            </entry>
                            <entry>
<key>generate-ff-custom-text</key>
<value>
    <name>generate-ff-custom-text</name>
</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>
    <name>character-set</name>
</value>
                            </entry>
                            <entry>
<key>mime-type</key>
<value>
    <name>mime-type</name>
</value>
                            </entry>
                            <entry>
<key>data</key>
<value>
    <name>data</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>1 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>File Size</key>
<value>10MB</value>
                            </entry>
                            <entry>
<key>Batch Size</key>
<value>1</value>
                            </entry>
                            <entry>
<key>Data Format</key>
<value>Text</value>
                            </entry>
                            <entry>
<key>Unique FlowFiles</key>
<value>false</value>
                            </entry>
                            <entry>
<key>generate-ff-custom-text</key>
<value>aaa</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>mime-type</key>
                            </entry>
                            <entry>
<key>data</key>
<value>零度</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>* * * * * ?</schedulingPeriod>
                        <schedulingStrategy>CRON_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>GenerateFlowFile</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.GenerateFlowFile</type>
                </processors>
                <processors>
                    <id>a84d621b-759d-3bcd-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>736.0</x>
                        <y>712.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JsonPath Expression</key>
<value>
    <name>JsonPath Expression</name>
</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>
    <name>Null Value Representation</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JsonPath Expression</key>
<value>$.data.*</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>empty string</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>SplitJson</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>original</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>split</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.SplitJson</type>
                </processors>
                <processors>
                    <id>bb301790-a334-375b-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>1264.0</x>
                        <y>-488.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Match Requirement</key>
<value>
    <name>Match Requirement</name>
</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>
    <name>Character Set</name>
</value>
                            </entry>
                            <entry>
<key>Content Buffer Size</key>
<value>
    <name>Content Buffer Size</name>
</value>
                            </entry>
                            <entry>
<key>测试</key>
<value>
    <name>测试</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Match Requirement</key>
<value>content must match exactly</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>Content Buffer Size</key>
<value>1 MB</value>
                            </entry>
                            <entry>
<key>测试</key>
<value>.*"database":"sjzx-cloud",.*</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>RouteOnContent</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>unmatched</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>测试</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.RouteOnContent</type>
                </processors>
                <processors>
                    <id>da23ab90-7170-32ff-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>4080.0</x>
                        <y>1136.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Log Level</key>
<value>
    <name>Log Level</name>
</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>
    <name>Log Payload</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
<value>
    <name>Attributes to Log</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>
    <name>attributes-to-log-regex</name>
</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
<value>
    <name>Attributes to Ignore</name>
</value>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
<value>
    <name>attributes-to-ignore-regex</name>
</value>
                            </entry>
                            <entry>
<key>Log FlowFile Properties</key>
<value>
    <name>Log FlowFile Properties</name>
</value>
                            </entry>
                            <entry>
<key>Output Format</key>
<value>
    <name>Output Format</name>
</value>
                            </entry>
                            <entry>
<key>Log prefix</key>
<value>
    <name>Log prefix</name>
</value>
                            </entry>
                            <entry>
<key>character-set</key>
<value>
    <name>character-set</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Log Level</key>
<value>info</value>
                            </entry>
                            <entry>
<key>Log Payload</key>
<value>false</value>
                            </entry>
                            <entry>
<key>Attributes to Log</key>
                            </entry>
                            <entry>
<key>attributes-to-log-regex</key>
<value>.*</value>
                            </entry>
                            <entry>
<key>Attributes to Ignore</key>
                            </entry>
                            <entry>
<key>attributes-to-ignore-regex</key>
                            </entry>
                            <entry>
<key>Log FlowFile Properties</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Output Format</key>
<value>Line per Attribute</value>
                            </entry>
                            <entry>
<key>Log prefix</key>
                            </entry>
                            <entry>
<key>character-set</key>
<value>UTF-8</value>
                            </entry>
                        </properties>
                        <retryCount>0</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>LogAttribute</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>DISABLED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.LogAttribute</type>
                </processors>
                <processors>
                    <id>da7efb30-f1aa-3d2a-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>2432.0</x>
                        <y>320.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments>该处理器使用正则表达式去匹配流文件的内容，并将流文件路由到正则表达式所匹配的relation。在用户自定义的属性上添加正则表达式，其中属性的名称是关系的名称，值是一个正则表达式，用于匹配流文件内容。用户定义的属性支持属性表达式语言，但是表达式计算的结果被解释为文字值，而不是正则表达式。</comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Match Requirement</key>
<value>
    <name>Match Requirement</name>
</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>
    <name>Character Set</name>
</value>
                            </entry>
                            <entry>
<key>Content Buffer Size</key>
<value>
    <name>Content Buffer Size</name>
</value>
                            </entry>
                            <entry>
<key>sjzx-cloud-config库</key>
<value>
    <name>sjzx-cloud-config库</name>
</value>
                            </entry>
                            <entry>
<key>sjzx-cloud库</key>
<value>
    <name>sjzx-cloud库</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Match Requirement</key>
<value>content must match exactly</value>
                            </entry>
                            <entry>
<key>Character Set</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>Content Buffer Size</key>
<value>1 MB</value>
                            </entry>
                            <entry>
<key>sjzx-cloud-config库</key>
<value>.*"database":"sjzx-cloud-config",.*</value>
                            </entry>
                            <entry>
<key>sjzx-cloud库</key>
<value>.*"database":"sjzx-cloud",.*</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>RouteOnContent</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>sjzx-cloud-config库</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>sjzx-cloud库</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>unmatched</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.RouteOnContent</type>
                </processors>
                <processors>
                    <id>de749650-aaa6-36bc-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>2736.0</x>
                        <y>912.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-update-attribute-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>10</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Delete Attributes Expression</key>
<value>
    <name>Delete Attributes Expression</name>
</value>
                            </entry>
                            <entry>
<key>Store State</key>
<value>
    <name>Store State</name>
</value>
                            </entry>
                            <entry>
<key>Stateful Variables Initial Value</key>
<value>
    <name>Stateful Variables Initial Value</name>
</value>
                            </entry>
                            <entry>
<key>canonical-value-lookup-cache-size</key>
<value>
    <name>canonical-value-lookup-cache-size</name>
</value>
                            </entry>
                            <entry>
<key>sql.args.15.value</key>
<value>
    <name>sql.args.15.value</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Delete Attributes Expression</key>
                            </entry>
                            <entry>
<key>Store State</key>
<value>Do not store state</value>
                            </entry>
                            <entry>
<key>Stateful Variables Initial Value</key>
                            </entry>
                            <entry>
<key>canonical-value-lookup-cache-size</key>
<value>100</value>
                            </entry>
                            <entry>
<key>sql.args.15.value</key>
<value>${sql.args.15.value:format("yyyy-MM-dd HH:mm:ss.SSS")}</value>
                            </entry>
                        </properties>
                        <retryCount>0</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>(修改日期字段属性)UpdateAttribute</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style>
                        <entry>
                            <key>background-color</key>
                            <value>#15d9eb</value>
                        </entry>
                    </style>
                    <type>org.apache.nifi.processors.attributes.UpdateAttribute</type>
                </processors>
                <processors>
                    <id>ec16f179-ef47-38f4-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>120.0</x>
                        <y>-192.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments>拆分json,只支持元素是数组类型的拆分。</comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JsonPath Expression</key>
<value>
    <name>JsonPath Expression</name>
</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>
    <name>Null Value Representation</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JsonPath Expression</key>
<value>$.data</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>empty string</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>SplitJson</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>original</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>split</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.SplitJson</type>
                </processors>
                <processors>
                    <id>fa682451-66e1-389e-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>2216.0</x>
                        <y>-16.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-kafka-2-6-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>bootstrap.servers</key>
<value>
    <name>bootstrap.servers</name>
</value>
                            </entry>
                            <entry>
<key>topic</key>
<value>
    <name>topic</name>
</value>
                            </entry>
                            <entry>
<key>topic_type</key>
<value>
    <name>topic_type</name>
</value>
                            </entry>
                            <entry>
<key>group.id</key>
<value>
    <name>group.id</name>
</value>
                            </entry>
                            <entry>
<key>Commit Offsets</key>
<value>
    <name>Commit Offsets</name>
</value>
                            </entry>
                            <entry>
<key>max-uncommit-offset-wait</key>
<value>
    <dependencies>
        <dependentValues>true</dependentValues>
        <propertyName>Commit Offsets</propertyName>
    </dependencies>
    <name>max-uncommit-offset-wait</name>
</value>
                            </entry>
                            <entry>
<key>honor-transactions</key>
<value>
    <name>honor-transactions</name>
</value>
                            </entry>
                            <entry>
<key>message-demarcator</key>
<value>
    <name>message-demarcator</name>
</value>
                            </entry>
                            <entry>
<key>separate-by-key</key>
<value>
    <name>separate-by-key</name>
</value>
                            </entry>
                            <entry>
<key>security.protocol</key>
<value>
    <name>security.protocol</name>
</value>
                            </entry>
                            <entry>
<key>sasl.mechanism</key>
<value>
    <name>sasl.mechanism</name>
</value>
                            </entry>
                            <entry>
<key>kerberos-credentials-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.kerberos.KerberosCredentialsService</identifiesControllerService>
    <name>kerberos-credentials-service</name>
</value>
                            </entry>
                            <entry>
<key>kerberos-user-service</key>
<value>
    <identifiesControllerService>org.apache.nifi.kerberos.SelfContainedKerberosUserService</identifiesControllerService>
    <name>kerberos-user-service</name>
</value>
                            </entry>
                            <entry>
<key>sasl.kerberos.service.name</key>
<value>
    <name>sasl.kerberos.service.name</name>
</value>
                            </entry>
                            <entry>
<key>sasl.kerberos.principal</key>
<value>
    <name>sasl.kerberos.principal</name>
</value>
                            </entry>
                            <entry>
<key>sasl.kerberos.keytab</key>
<value>
    <name>sasl.kerberos.keytab</name>
</value>
                            </entry>
                            <entry>
<key>sasl.username</key>
<value>
    <name>sasl.username</name>
</value>
                            </entry>
                            <entry>
<key>sasl.password</key>
<value>
    <name>sasl.password</name>
</value>
                            </entry>
                            <entry>
<key>sasl.token.auth</key>
<value>
    <name>sasl.token.auth</name>
</value>
                            </entry>
                            <entry>
<key>ssl.context.service</key>
<value>
    <identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService>
    <name>ssl.context.service</name>
</value>
                            </entry>
                            <entry>
<key>key-attribute-encoding</key>
<value>
    <name>key-attribute-encoding</name>
</value>
                            </entry>
                            <entry>
<key>auto.offset.reset</key>
<value>
    <name>auto.offset.reset</name>
</value>
                            </entry>
                            <entry>
<key>message-header-encoding</key>
<value>
    <name>message-header-encoding</name>
</value>
                            </entry>
                            <entry>
<key>header-name-regex</key>
<value>
    <name>header-name-regex</name>
</value>
                            </entry>
                            <entry>
<key>max.poll.records</key>
<value>
    <name>max.poll.records</name>
</value>
                            </entry>
                            <entry>
<key>Communications Timeout</key>
<value>
    <name>Communications Timeout</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>1 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>bootstrap.servers</key>
<value>192.168.0.201:9092</value>
                            </entry>
                            <entry>
<key>topic</key>
<value>ceshi</value>
                            </entry>
                            <entry>
<key>topic_type</key>
<value>names</value>
                            </entry>
                            <entry>
<key>group.id</key>
<value>ceshi</value>
                            </entry>
                            <entry>
<key>Commit Offsets</key>
<value>true</value>
                            </entry>
                            <entry>
<key>max-uncommit-offset-wait</key>
<value>1 secs</value>
                            </entry>
                            <entry>
<key>honor-transactions</key>
<value>true</value>
                            </entry>
                            <entry>
<key>message-demarcator</key>
                            </entry>
                            <entry>
<key>separate-by-key</key>
<value>false</value>
                            </entry>
                            <entry>
<key>security.protocol</key>
<value>PLAINTEXT</value>
                            </entry>
                            <entry>
<key>sasl.mechanism</key>
<value>GSSAPI</value>
                            </entry>
                            <entry>
<key>kerberos-credentials-service</key>
                            </entry>
                            <entry>
<key>kerberos-user-service</key>
                            </entry>
                            <entry>
<key>sasl.kerberos.service.name</key>
                            </entry>
                            <entry>
<key>sasl.kerberos.principal</key>
                            </entry>
                            <entry>
<key>sasl.kerberos.keytab</key>
                            </entry>
                            <entry>
<key>sasl.username</key>
                            </entry>
                            <entry>
<key>sasl.password</key>
                            </entry>
                            <entry>
<key>sasl.token.auth</key>
<value>false</value>
                            </entry>
                            <entry>
<key>ssl.context.service</key>
                            </entry>
                            <entry>
<key>key-attribute-encoding</key>
<value>utf-8</value>
                            </entry>
                            <entry>
<key>auto.offset.reset</key>
<value>latest</value>
                            </entry>
                            <entry>
<key>message-header-encoding</key>
<value>UTF-8</value>
                            </entry>
                            <entry>
<key>header-name-regex</key>
                            </entry>
                            <entry>
<key>max.poll.records</key>
<value>10000</value>
                            </entry>
                            <entry>
<key>Communications Timeout</key>
<value>60 secs</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>[消费Kafka]ConsumeKafka_2_6</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>success</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_6</type>
                </processors>
                <processors>
                    <id>fb85db46-9047-360c-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>1568.0</x>
                        <y>528.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments></comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>JDBC Connection Pool</key>
<value>
    <identifiesControllerService>org.apache.nifi.dbcp.DBCPService</identifiesControllerService>
    <name>JDBC Connection Pool</name>
</value>
                            </entry>
                            <entry>
<key>Statement Type</key>
<value>
    <name>Statement Type</name>
</value>
                            </entry>
                            <entry>
<key>Table Name</key>
<value>
    <name>Table Name</name>
</value>
                            </entry>
                            <entry>
<key>Catalog Name</key>
<value>
    <name>Catalog Name</name>
</value>
                            </entry>
                            <entry>
<key>Schema Name</key>
<value>
    <name>Schema Name</name>
</value>
                            </entry>
                            <entry>
<key>Translate Field Names</key>
<value>
    <name>Translate Field Names</name>
</value>
                            </entry>
                            <entry>
<key>Unmatched Field Behavior</key>
<value>
    <name>Unmatched Field Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Unmatched Column Behavior</key>
<value>
    <name>Unmatched Column Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Update Keys</key>
<value>
    <name>Update Keys</name>
</value>
                            </entry>
                            <entry>
<key>jts-quoted-identifiers</key>
<value>
    <name>jts-quoted-identifiers</name>
</value>
                            </entry>
                            <entry>
<key>jts-quoted-table-identifiers</key>
<value>
    <name>jts-quoted-table-identifiers</name>
</value>
                            </entry>
                            <entry>
<key>jts-sql-param-attr-prefix</key>
<value>
    <name>jts-sql-param-attr-prefix</name>
</value>
                            </entry>
                            <entry>
<key>table-schema-cache-size</key>
<value>
    <name>table-schema-cache-size</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>JDBC Connection Pool</key>
                            </entry>
                            <entry>
<key>Statement Type</key>
                            </entry>
                            <entry>
<key>Table Name</key>
                            </entry>
                            <entry>
<key>Catalog Name</key>
                            </entry>
                            <entry>
<key>Schema Name</key>
                            </entry>
                            <entry>
<key>Translate Field Names</key>
<value>true</value>
                            </entry>
                            <entry>
<key>Unmatched Field Behavior</key>
<value>Ignore Unmatched Fields</value>
                            </entry>
                            <entry>
<key>Unmatched Column Behavior</key>
<value>Fail on Unmatched Columns</value>
                            </entry>
                            <entry>
<key>Update Keys</key>
                            </entry>
                            <entry>
<key>jts-quoted-identifiers</key>
<value>false</value>
                            </entry>
                            <entry>
<key>jts-quoted-table-identifiers</key>
<value>false</value>
                            </entry>
                            <entry>
<key>jts-sql-param-attr-prefix</key>
<value>sql</value>
                            </entry>
                            <entry>
<key>table-schema-cache-size</key>
<value>100</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>ConvertJSONToSQL</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>original</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>sql</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.ConvertJSONToSQL</type>
                </processors>
                <processors>
                    <id>ff73dbd7-b552-3266-0000-000000000000</id>
                    <parentGroupId>493b032b-5fed-3bd7-0000-000000000000</parentGroupId>
                    <position>
                        <x>440.0</x>
                        <y>-448.0</y>
                    </position>
                    <bundle>
                        <artifact>nifi-standard-nar</artifact>
                        <group>org.apache.nifi</group>
                        <version>1.16.3</version>
                    </bundle>
                    <config>
                        <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>
                        <bulletinLevel>WARN</bulletinLevel>
                        <comments>只能获取json中的一个匹配的值</comments>
                        <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>
                        <descriptors>
                            <entry>
<key>Destination</key>
<value>
    <name>Destination</name>
</value>
                            </entry>
                            <entry>
<key>Return Type</key>
<value>
    <name>Return Type</name>
</value>
                            </entry>
                            <entry>
<key>Path Not Found Behavior</key>
<value>
    <name>Path Not Found Behavior</name>
</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>
    <name>Null Value Representation</name>
</value>
                            </entry>
                            <entry>
<key>table</key>
<value>
    <name>table</name>
</value>
                            </entry>
                        </descriptors>
                        <executionNode>ALL</executionNode>
                        <lossTolerant>false</lossTolerant>
                        <maxBackoffPeriod>10 mins</maxBackoffPeriod>
                        <penaltyDuration>30 sec</penaltyDuration>
                        <properties>
                            <entry>
<key>Destination</key>
<value>flowfile-content</value>
                            </entry>
                            <entry>
<key>Return Type</key>
<value>auto-detect</value>
                            </entry>
                            <entry>
<key>Path Not Found Behavior</key>
<value>ignore</value>
                            </entry>
                            <entry>
<key>Null Value Representation</key>
<value>empty string</value>
                            </entry>
                            <entry>
<key>table</key>
<value>$.table</value>
                            </entry>
                        </properties>
                        <retryCount>10</retryCount>
                        <runDurationMillis>0</runDurationMillis>
                        <schedulingPeriod>0 sec</schedulingPeriod>
                        <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>
                        <yieldDuration>1 sec</yieldDuration>
                    </config>
                    <executionNodeRestricted>false</executionNodeRestricted>
                    <name>【获取到json中的table值】EvaluateJsonPath</name>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>failure</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>matched</name>
                        <retry>false</retry>
                    </relationships>
                    <relationships>
                        <autoTerminate>false</autoTerminate>
                        <name>unmatched</name>
                        <retry>false</retry>
                    </relationships>
                    <state>STOPPED</state>
                    <style/>
                    <type>org.apache.nifi.processors.standard.EvaluateJsonPath</type>
                </processors>
            </contents>
            <defaultBackPressureDataSizeThreshold>1 GB</defaultBackPressureDataSizeThreshold>
            <defaultBackPressureObjectThreshold>10000</defaultBackPressureObjectThreshold>
            <defaultFlowFileExpiration>0 sec</defaultFlowFileExpiration>
            <flowfileConcurrency>UNBOUNDED</flowfileConcurrency>
            <flowfileOutboundPolicy>STREAM_WHEN_AVAILABLE</flowfileOutboundPolicy>
            <name>Kafka</name>
            <variables/>
        </processGroups>
    </snippet>
    <timestamp>07/28/2022 11:42:22 CST</timestamp>
</template>

```

:::
