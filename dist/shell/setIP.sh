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
