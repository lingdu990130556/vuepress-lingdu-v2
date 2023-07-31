# window


## tracert

在Windows中，你可以使用`tracert`命令来执行网络跟踪（类似于Unix/Linux下的`traceroute`命令）。

以下是在Windows上使用`tracert`命令执行网络跟踪的示例：

```
tracert <目标主机或IP地址>
```

例如，要追踪到目标主机www.example.com的网络路径，你可以在命令提示符（Command Prompt）中执行以下命令：

```
tracert www.example.com
```

命令执行后，会显示从源主机到目标主机的网络路径，并输出每个路由节点的 IP 地址和往返时间（Round-Trip Time，RTT）。`tracert`命令还提供了一些可选参数，你可以通过`tracert /?`命令查看更多使用说明。

请注意，具体的命令参数和输出格式可能因Windows版本的不同而有所差异。如果`tracert`命令在你的系统中不可用或无法正常工作，可能需要检查系统设置或联系网络管理员以获取支持。

## Mysql 10055 错误原因及解决方案 (错误提示：Can't connect to MySQL


网站功能升级后，mysql 每隔几天就会出现10055无法连接的错误提示。 具体表现： 1、php运行正常 2、运行navicat客户端连接，有时会出现正常！大部分情况也是无法正常连接！ 3、重启mysql服务无效，增大mysql连接数max_connections 也不正常，而且根据记录来看，最大连接数并没有超过限制。  运行环境：Windows 2008 server r2 x64 Mysql:5.5 IIS7 错误分析： 产生该问题的罪魁祸首并非mysql本身，而是windows操作系统！Php程序在每次连接数据库的时候，都会产生一个tcp连接，每次连接windows都会分配一个动态端口，连接结束后该端口不会马上释放，而是变为TIME_WAIT状态，方便其他连接复用。当TIME_WAIT状态的端口过多，操作系统就无法为新的连接分配动态端口，从而出现10055错误！ 用命令netstat -an 可以查看当前所有的动态端口使用情况。   Windows2008操作系统默认的动态端口连接数是16384个。可通过命令netsh int ipv4 show dynamicport tcp 进行查看    处于TIME_WAIT状态的动态端口存活时间默认是30s，可通过注册表查看 [HKEY_LOCAL_MACHINE] [SYSTEM] [CurrentControlSet] [Services] [Tcpip] [Parameters] [TcpTimedWaitDelay]   TcpTimedWaitDelay描述：确定 TCP/IP 可释放已关闭连接并重用其资源前，必须经过的时间。关闭和释放之间的此时间间隔通称 TIME_WAIT 状态或两倍最大段生命周期（2MSL）状态。此时间期间，重新打开到客户机和服务器的连接的成本少于建立新连接。减少此条目的值允许 TCP/IP 更快地释放已关闭的连接，为新连接提供更多资源。如果运行的应用程序需要快速释放和创建新连接，而且由于 TIME_WAIT 中存在很多连接，导致低吞吐量.  解决方案： 1、减少TcpTimedWaitDelay 字段的值，网上的说法是30-60之间比较好。 2、增大动态端口的个数，命令如下：netsh int ipv4 set dynamicport tcp start=10000 num=50000 执行后，用查看命令确认一下：   参考资料： 1、mysql 10055错误说明：http://dev.mysql.com/doc/refman/5.6/en/can-not-connect-to-server.html 2、Windows更改动态端口说明：http://support.microsoft.com/kb/929851/zh-cn

作者：caikunhai
链接：https://www.jianshu.com/p/cbfeed138068
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
