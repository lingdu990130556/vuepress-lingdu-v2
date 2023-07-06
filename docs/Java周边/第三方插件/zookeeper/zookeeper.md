# zookeeper安装配置
- - -

## 1.分配目录
```shell
#创建安装目录
mkdir /data/install/zk
mkdir /data/install/zk/data
```

## 2.下载或者上传包文件
```shell
#方式一：直接下载
wget https://dlcdn.apache.org/zookeeper/zookeeper-3.6.3/apache-zookeeper-3.6.3-bin.tar.gz
```

```shell
#方式二：上传压缩包
scp -P 10022 apache-zookeeper-3.6.3-bin.tar.gz  root@11.141.230.153:/data/install/zk
```

## 3.解压文件
```shell
#解压文件
tar -zxvf apache-zookeeper-3.6.3-bin.tar.gz
```

## 4.配置zookeeper主文件
```shell
#复制配置文件
cp zoo_sample.cfg zoo.cfg
```
>配置详见 zoo.cfg

## 5.启动关闭脚本
```shell
#启动
zkServer.sh start
#查看状态
zkServer.sh status
#停止
zkServer.sh stop
```


