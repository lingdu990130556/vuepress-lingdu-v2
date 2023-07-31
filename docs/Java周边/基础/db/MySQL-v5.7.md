# mysql-v5.7

## 命令
```shell
# 重启
service mysqld restart
```
```shell
# 卸载
# 查看系统是否带mariadb数据库
yum list installed |grep mariadb

# 移除mariadb程序文件
yum remove -y mariadb*
```
## 设置时区***重要
```sql
SELECT TIMEDIFF(NOW(), UTC_TIMESTAMP);  # 查看时区
# 如果是中国标准时间, 会输出 08:00:00

set global time_zone = '+8:00';  # 修改MySQL全局时区为北京时间，即我们所在的东8区
set time_zone = '+8:00';  # 修改当前会话时区
flush privileges;  # 立即生效

# 如果项目已经启动则重启mysql或者重启项目生效
```

## 配置
```shell
[mysqld]

# 设置端口
port=10106

log-bin=resp_mysql
server-id=1
binlog-do-db=sjzx-cloud
#
# Remove leading # and set to the amount of RAM for the most important data
# cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.
# innodb_buffer_pool_size = 128M
#
# Remove leading # to turn on a very important data integrity option: logging
# changes to the binary log between backups.
# log_bin
#
# Remove leading # to set options mainly useful for reporting servers.
# The server defaults are faster for transactions and fast SELECTs.
# Adjust sizes as needed, experiment to find the optimal values.
# join_buffer_size = 128M
# sort_buffer_size = 2M
# read_rnd_buffer_size = 2M
datadir=/var/lib/mysql
socket=/var/lib/mysql/mysql.sock

# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

log-error=/var/log/mysqld.log
pid-file=/var/run/mysqld/mysqld.pid

character_set_server=utf8

init_connect='SET NAMES utf8'


#说明 0：区分大小写，1：不区分大小写
lower_case_table_names=1

#单次执行sql最大数据
max_allowed_packet=20M
```

## 说明
```shell
主要为第一个错误。导入数据包大于系统设置的 max_allowed_packet 大小。

还原的实例版本为 ：mysql 5.7.13-log

默认 max_allowed_packet  大小为：4M

在 mysql 中，1个 sql 语句发送到 MySQL 服务器，1行数据发送到客户端，或者二进制日志从 master 发送到 slave ，这些都作为一个包，（mysql 5.7 最大包为 1GB）。而我的备份脚本中，有的表字段类型为 longtext，其插入的值比较长，才导致了错误。

解决方法：

4M 既然不够，那就设置 20 MB 吧。

查看当前 max_allowed_packet 大小：

show variables like 'max_allowed_packet';  
show variables where Variable_name = 'max_allowed_packet';

在命令行设置全局变量，新的连接立即生效：（windows 中写字节大小）
set global max_allowed_packet = 20*1024*1024;

同时在配置文件中添加以下参数：
max_allowed_packet = 20M
```
## 备份还原
```shell
# 备份
mysqldump -uroot -psjzx@152 sjzx-cloud > sjzx_cloud_dump.SQL

# 为了更快的速度
-e 使用包括几个VALUES列表的多行INSERT语法;
--max_allowed_packet=XXX 客户端/服务器之间通信的缓存区的最大大小;
--net_buffer_length=XXX  TCP/IP和套接字通信缓冲区大小,创建长度达net_buffer_length的行
注意：max_allowed_packet和net_buffer_length不能比目标数据库的配置数值大，否则可能出错。
首先确定目标库的参数值
mysql>show variables like 'max_allowed_packet';//67108864
mysql>show variables like 'net_buffer_length';//16384

使用mysqldump导出，默认导出的语句是批量插入语句。
使用mysqlpump导出，默认批量插入的条数是250条，可使用--extended-insert=10000指定批量插入时的数据。
mysqldump 的 --extended-insert 表示长INSERT，多row在一起批量INSERT，提高导入效率，和没有开启 -e 的备份导入耗时至少相差3、4倍，默认开启；用--extended-insert=false关闭。强烈建议开启，

mysqldump -uroot -p 数据库名  -e --max_allowed_packet=1048576 --net_buffer_length=16384 > SQL文件
mysqldump -uroot -psjzx@152 sjzx-cloud -e --max_allowed_packet=1048576 --net_buffer_length=16384 > sjzx_cloud_dump.sql

#18:20开始的18:28 结束的 15G的SQL文件
#8:35:12开始还原 9:14:03结束
#9:17开始备份9:17:43结束 1.6G的SQL文件

# 还原 （这里还原到另一个库了）
mysql -uroot -psjzx@152 new_sjzx_cloud < sjzx_cloud_dump.SQL

```
## 脚本
```shell
mysqldump -uroot -psjzx@231 sjzx_cloud -e --max_allowed_packet=1048576 --net_buffer_length=16384 |gzip > /data/zhfxx/jar/mysqlbackup/sjzx_cloud_dump`date +%Y-%m-%d_%H%M%S`.sql.gz;
mysqldump -uroot -psjzx@231 sjzx_cloud_dc -e --max_allowed_packet=1048576 --net_buffer_length=16384 |gzip > /data/zhfxx/jar/mysqlbackup/sjzx_cloud_dc_dump`date +%Y-%m-%d_%H%M%S`.sql.gz;
find /data/zhfxx/jar/mysqlbackup -type f -mtime +10 -name "*.sql.gz*" -exec rm -rf {} \; #删除10天前的备份文件
```

