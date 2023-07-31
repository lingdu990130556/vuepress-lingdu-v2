# 时间同步

## 一、环境
系统：Centos 6.5

ntp_client IP：192.168.0.117

ntp_server IP：192.168.0.124
## 二、安装ntp服务
```
[root@fenfa ~]# yum install ntp -y
[root@fenfa ~]# chkconfig --add ntpd
[root@fenfa ~]# chkconfig ntpd on
```
## 三、配置/etc/ntp.conf文件：
server:
```yaml
[root@fenfa ~]# vim /etc/ntp.conf 

  1 # For more information about this file, see the man pages
  2 # ntp.conf(5), ntp_acc(5), ntp_auth(5), ntp_clock(5), ntp_misc(5), ntp_mon(5).
  3 
  4 driftfile /var/lib/ntp/drift
  5 
  6 # Permit time synchronization with our time source, but do not
  7 # permit the source to query or modify the service on this system.
  8 restrict default kod nomodify notrap nopeer noquery #默认的client拒绝所有的操作
  9 restrict -6 default kod nomodify notrap nopeer noquery
 10 
 11 # Permit all access over the loopback interface.  This could
 12 # be tightened as well, but to do so would effect some of
 13 # the administrative functions.
 14 restrict 127.0.0.1 #允许本机地址一切的操作
 15 restrict -6 ::1
 16 
 17 # Hosts on local network are less restricted.
 18 restrict 192.168.0.0 mask 255.255.255.0 nomodify notrap  #允许集群192.1680.0网段连接同步时间，拒绝client修改服务器时间19 
 20 # Use public servers from the pool.ntp.org project.
 21 # Please consider joining the pool (http://www.pool.ntp.org/join.html).
 22 #server 0.centos.pool.ntp.org iburst #默认配置，同步网络时间
 23 #server 1.centos.pool.ntp.org iburst
 24 #server 2.centos.pool.ntp.org iburst
 25 #server 3.centos.pool.ntp.org iburst
 26 
 27 server 127.127.1.0  #本地时间
 28 fudge 127.127.1.0 stratum 1 #时间服务器的层次。设为0则为顶级
 29 
 30 #broadcast 192.168.1.255 autokey        # broadcast server
 31 #broadcastclient                        # broadcast client
 32 #broadcast 224.0.1.1 autokey            # multicast server
 33 #multicastclient 224.0.1.1              # multicast client
 34 #manycastserver 239.255.254.254         # manycast server
 35 #manycastclient 239.255.254.254 autokey # manycast client
 36 
 37 # Enable public key cryptography.
 38 #crypto
 39 
 40 includefile /etc/ntp/crypto/pw
 41 
 42 # Key file containing the keys and key identifiers used when operating
 43 # with symmetric key cryptography. 
 44 keys /etc/ntp/keys
 45 
 46 # Specify the key identifiers which are trusted.
 47 #trustedkey 4 8 42
 48 
 49 # Specify the key identifier to use with the ntpdc utility.
 50 #requestkey 8
 51 
 52 # Specify the key identifier to use with the ntpq utility.
 53 #controlkey 8
 54 
 55 # Enable writing of statistics records.
 56 #statistics clockstats cryptostats loopstats peerstats
```
注：红色字体的地方为新增或修改的部分
client：
```yaml
[root@nfs ~]# vim /etc/ntp.conf 

# For more information about this file, see the man pages
# ntp.conf(5), ntp_acc(5), ntp_auth(5), ntp_clock(5), ntp_misc(5), ntp_mon(5).
  3 
  4 driftfile /var/lib/ntp/drift
  5 
  6 # Permit time synchronization with our time source, but do not
  7 # permit the source to query or modify the service on this system.
  8 restrict default kod nomodify notrap nopeer noquery
  9 restrict -6 default kod nomodify notrap nopeer noquery
 10 
 11 # Permit all access over the loopback interface.  This could
 12 # be tightened as well, but to do so would effect some of
 13 # the administrative functions.
 14 restrict 127.0.0.1
 15 restrict -6 ::1
 16 
 17 # Hosts on local network are less restricted.
 18 restrict 192.168.0.0 mask 255.255.255.0 nomodify notrap
 19 
 20 # Use public servers from the pool.ntp.org project.
 21 # Please consider joining the pool (http://www.pool.ntp.org/join.html).
 22 #server 0.centos.pool.ntp.org iburst
 23 #server 1.centos.pool.ntp.org iburst
 24 #server 2.centos.pool.ntp.org iburst
 25 #server 3.centos.pool.ntp.org iburst
 26 
 27 server 192.168.0.124 profer #时间服务器地址28 
 29 #broadcast 192.168.1.255 autokey        # broadcast server
 30 #broadcastclient                        # broadcast client
 31 #broadcast 224.0.1.1 autokey            # multicast server
 32 #multicastclient 224.0.1.1              # multicast client
 33 #manycastserver 239.255.254.254         # manycast server
 34 #manycastclient 239.255.254.254 autokey # manycast client
 35 
 36 # Enable public key cryptography.
 37 #crypto
 38 
 39 includefile /etc/ntp/crypto/pw
 40 
 41 # Key file containing the keys and key identifiers used when operating
 42 # with symmetric key cryptography. 
 43 keys /etc/ntp/keys
 44 
 45 # Specify the key identifiers which are trusted.
 46 #trustedkey 4 8 42
 47 
 48 # Specify the key identifier to use with the ntpdc utility.
 49 #requestkey 8
 50 
 51 # Specify the key identifier to use with the ntpq utility.
 52 #controlkey 8
 53 
 54 # Enable writing of statistics records.
 55 #statistics clockstats cryptostats loopstats peerstat
```
## 四、设置client主机与时间服务器时间的同步
serverd端从启ntp服务<br>
client端更改系统时间<br>
执行同步命令：ntpdate -u 192.168.0.124<br>
```shell script
[root@fenfa x86_64]# service ntpd restart
关闭 ntpd：                                                [确定]
正在启动 ntpd：                                            [确定]
```
```shell script
[root@nfs ~]# date
2019年 08月 19日 星期一 21:52:25 CST
[root@nfs ~]# date -s 2018-08-19
2018年 08月 19日 星期日 00:00:00 CST
[root@nfs ~]# date
2018年 08月 19日 星期日 00:00:05 CST
[root@nfs ~]# ntpdate -u 192.168.0.124
19 Aug 21:54:22 ntpdate[1861]: step time server 192.168.0.124 offset 31614767.907398 sec
[root@nfs ~]# date
2019年 08月 19日 星期一 21:54:28 CST
```
<B>可以在client机器上编写一个定时脚本：</B>
```shell script
[root@nfs ~]# crontab -l
####ntpd  Synchronize every 1 minute
00-59/60 * * * * /usr/sbin/ntpdate -u 192.168.0.124 >/dev/null 2>&1
```
修改/etc/ntp/stpe-tickers文件，内容如下（当ntpd服务启动时，会自动与该文件中记录的上层NTP服务进行时间校对
```shell script
[root@nfs ~]# cat /etc/ntp/step-tickers 
# List of servers used for initial synchronization.
server 192.168.0.124 prefer 
```
ntp服务，默认只会同步系统时间。如果想要让ntp同时同步硬件时间，可以设置/etc/sysconfig/ntpd文件，在/etc/sysconfig/ntpd文件中，添加 SYNC_HWCLOCK=yes 这样，就可以让硬件时间与系统时间一起同步。





