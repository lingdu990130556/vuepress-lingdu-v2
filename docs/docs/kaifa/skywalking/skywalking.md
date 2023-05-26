# 链路追踪
- - - 
## 1.解压
```shell
tar -zxvf apache-skywalking-apm-8.3.0.tar.gz
```
## 2.修改端口
```shell
cd apache-skywalking-apm-bin/webapp/
vim webapp.yml
```
如下
```yaml
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

server:
  port: 8090 # 默认8080 修改为8090

collector:
  path: /graphql
  ribbon:
    ReadTimeout: 10000
    # Point to all backend's restHost:restPort, split by ,
    listOfServers: 127.0.0.1:12800
```
## 3.启动
```shell
cd apache-skywalking-apm-bin/bin/
./startup.sh
```
## 4.停止
新建脚本文件

shutdown.sh
```shell
# !/bin/bash
# cription: kill process by port
# Usage:       killport port
# example:     killport 8080
pid=`netstat -tlnp | grep 8090 | awk '{print $7}' | awk -F '/' '{print $1}'`
kill -9 $pid

pid=`netstat -tlnp | grep 11800 | awk '{print $7}' | awk -F '/' '{print $1}'`
kill -9 $pid
```
赋可执行权限
```shell
chmod +x shutdown.sh
```
执行脚本 停止服务
```shell
./shutdown.sh
```

## 5.复制探针文件夹到项目运行目录下
```shell
cp -r /data/zhfxx/utils/apache-skywalking-apm-bin/agent/ /data/zhfxx/jar/
```
## 6.启动项目

修改项目启动脚本为探针方式启动

```shell
# 重启当前文件夹下所有jar服务

# 判断是不是目录
function getDir() {
  # shellcheck disable=SC2045
  for item in $(ls "$1"); do
    fileName=$1"/"$item
    if [ -d "$fileName" ]; then
      echo "$fileName""是目录"
    else
      echo "$fileName""不是目录"
      echoFile "$fileName" "$2"
    fi
  done
}

# 判断是不是jar文件
function echoFile() {
  fileName=$1
  echo "${fileName##*.}"
  if [ ! "${fileName##*.}" = jar ]; then
    echo "$1""不是jar包 跳过 "
  else
    echo $1"是jar包 开始启动。。。"
    name=${fileName##*/}
    echo "正则后的："$name
    # 先停止
    stopJar "$name"

    if [ $2 = start ]; then
      # 再启动
      startJar "$name"
    fi

  fi
}

# 停止
function stopJar() {
  name=$1
  # shellcheck disable=SC2046
  # shellcheck disable=SC2009
  kill -9 $(ps -ef | grep "${name}" | grep -v grep | awk '{print $2}')
  echo "停止""$name"
}
# 启动
function startJar() {
  name=$1
  # nohup java -Xms2048m -Xmx4096m -jar "${name}" >temp.log 2>&1 &

  # 链路追踪探针方式启动
  nohup java -javaagent:agent/skywalking-agent.jar=agent.service_name=管理中心-${name},collector.backend_service=11.141.230.153:11800 -Xms4096m -Xmx4096m -jar "${name}" >temp.log 2>&1 &

  echo "启动""$name"
}

#在当前目录下查找sh脚本

#for name in `find . -name *.sh`
#do
#    echo ">>>>>>>>>>>>>>>$name"
#    if [ "${name##*.}"x = "sh"x ]
#    then
#    echo "是脚本"
#    fi
#done

# 当前文件夹
dir=./
getDir $dir "$1"
```


