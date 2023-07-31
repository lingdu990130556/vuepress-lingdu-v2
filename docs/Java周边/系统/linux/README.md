# linux

## traceroute

在Shell中，你可以使用`traceroute`命令来跟踪网络路径并查看数据包从源主机到目标主机的传输情况。`traceroute`命令会显示网络路由经过的每个节点（跳数），以及每个节点的响应时间。

下面是使用`traceroute`命令的示例：

```
traceroute <目标主机或IP地址>
```

例如，要追踪到目标主机www.example.com的网络路径，你可以执行以下命令：

```
traceroute www.example.com
```

命令执行后，会显示从源主机到目标主机的网络路径，并输出每个路由节点的 IP 地址和响应时间。注意，具体的命令参数可能因操作系统的不同而有所差异，请根据你的操作系统使用相应的命令行工具。

请注意，在某些情况下，网络管理员会限制或禁用Shell中的`traceroute`命令，因此你可能需要获取管理员权限或与网络管理员进行沟通，以了解是否允许在公司网络环境中执行该命令。


## 修改固定ip
脚本 [下载](docs/.vuepress/public/shell/setIP.sh)
```shell
#!/bin/bash
IPconf_path=/etc/sysconfig/network-scripts/ifcfg-ens33
echo -e "请输入ip："
read IP;
echo -e "请输入网关："
read GATEWAY;
#清空原参数
sed -i '/BOOTPROTO\|ONBOOT\|IPADDR\|NETMASK\|GATEWAY\|DNS1\|DNS2/d' $IPconf_path
#赋值新参数
echo "BOOTPROTO=static">>$IPconf_path
echo "ONBOOT=yes">>$IPconf_path
echo "IPADDR=$IP">>$IPconf_path
echo "NETMASK=255.255.255.0">>$IPconf_path
echo "GATEWAY=$GATEWAY">>$IPconf_path
echo "DNS1=114.114.114.114">>$IPconf_path
echo "DNS2=8.8.8.8">>$IPconf_path
service network restart
```

## 安装jdk
- 卸载  
:::tip
  部分版本会默认安装jdk,最好删掉重新安装

查看安装的java
rpm -qa | grep java

删除格式:
rpm -e --nodeps 名称

例如:
rpm -e --nodeps java-1.7.0-openjdk-1.7.0.191-2.6.15.5.el7.x86_64  
rpm -e --nodeps java-1.7.0-openjdk-headless-1.7.0.191-2.6.15.5.el7.x86_64  
rpm -e --nodeps java-1.8.0-openjdk-headless-1.8.0.181-7.b13.el7.x86_64  
rpm -e --nodeps java-1.8.0-openjdk-1.8.0.181-7.b13.el7.x86_64  

rpm -e --nodeps java-1.8.0-openjdk-headless-1.8.0.222.b03-1.el7.x86_64  
rpm -e --nodeps java-1.8.0-openjdk-1.8.0.222.b03-1.el7.x86_64  
rpm -e --nodeps java-1.7.0-openjdk-1.7.0.221-2.6.18.1.el7.x86_64  
rpm -e --nodeps java-1.7.0-openjdk-headless-1.7.0.221-2.6.18.1.el7.x86_64  
:::

- 安装脚本

:::tip
因为脚本中涉及环境变量的刷新，需要使用source命令或者. 启动脚本
source 脚本
. 脚本（注意.后面有空格）
:::
```shell
#!bin/bash
#jdk安装脚本
echo "请确保脚本和jdk压缩包在同一目录";
#判断是否已经安装了jdk
if type -p java; then
	echo "检测到已经安装了jdk环境，jdk版本为\n$(java -version)";
	exit 0;
else
 	echo "检测到未安装jdk环境，开始安装！";
	echo - n "请输入jdk安装包的名称:";
	read name;	
	echo "开始解压文件";
	tar -zxvf $name;
	#遍历目录，查找解压后的文件
	for file in $(ls -d jdk*)
	do
		if [ -d $file ] && [ $name != $file ];then
			echo 进入目录 $file
			cd $file
			break
		fi
	done

	#取出当前路径
	url=$(pwd);
	#配置系统环境变量
	echo "配置系统环境变量"
	echo "export JAVA_HOME=${url}" >> /etc/profile 
	echo "export JRE_HOME=${url}/jre" >> /etc/profile
	echo "export CLASSPATH=$:CLASSPATH:\$JAVA_HOME/lib/" >> /etc/profile
	echo "export PATH=\$PATH:\$JAVA_HOME/bin" >> /etc/profile
	#刷新系统环境变量
	source /etc/profile
fi

```
