import{_ as e,r as a,o as t,c as i,a as c,w as l,h as o,d as n}from"./app-ac465cee.js";const p={},r=n(`<h1 id="时间同步" tabindex="-1"><a class="header-anchor" href="#时间同步" aria-hidden="true">#</a> 时间同步</h1><h2 id="一、环境" tabindex="-1"><a class="header-anchor" href="#一、环境" aria-hidden="true">#</a> 一、环境</h2><p>系统：Centos 6.5</p><p>ntp_client IP：192.168.0.117</p><p>ntp_server IP：192.168.0.124</p><h2 id="二、安装ntp服务" tabindex="-1"><a class="header-anchor" href="#二、安装ntp服务" aria-hidden="true">#</a> 二、安装ntp服务</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@fenfa ~]# yum install ntp -y
[root@fenfa ~]# chkconfig --add ntpd
[root@fenfa ~]# chkconfig ntpd on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、配置-etc-ntp-conf文件" tabindex="-1"><a class="header-anchor" href="#三、配置-etc-ntp-conf文件" aria-hidden="true">#</a> 三、配置/etc/ntp.conf文件：</h2><p>server:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@fenfa ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/ntp.conf </span>

  1 <span class="token comment"># For more information about this file, see the man pages</span>
  2 <span class="token comment"># ntp.conf(5), ntp_acc(5), ntp_auth(5), ntp_clock(5), ntp_misc(5), ntp_mon(5).</span>
  3 
  4 driftfile /var/lib/ntp/drift
  5 
  6 <span class="token comment"># Permit time synchronization with our time source, but do not</span>
  7 <span class="token comment"># permit the source to query or modify the service on this system.</span>
  8 restrict default kod nomodify notrap nopeer noquery <span class="token comment">#默认的client拒绝所有的操作</span>
  9 restrict <span class="token punctuation">-</span>6 default kod nomodify notrap nopeer noquery
 10 
 11 <span class="token comment"># Permit all access over the loopback interface.  This could</span>
 12 <span class="token comment"># be tightened as well, but to do so would effect some of</span>
 13 <span class="token comment"># the administrative functions.</span>
 14 restrict 127.0.0.1 <span class="token comment">#允许本机地址一切的操作</span>
 15 restrict <span class="token punctuation">-</span>6 <span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">1</span>
 16 
 17 <span class="token comment"># Hosts on local network are less restricted.</span>
 18 restrict 192.168.0.0 mask 255.255.255.0 nomodify notrap  <span class="token comment">#允许集群192.1680.0网段连接同步时间，拒绝client修改服务器时间19 </span>
 20 <span class="token comment"># Use public servers from the pool.ntp.org project.</span>
 21 <span class="token comment"># Please consider joining the pool (http://www.pool.ntp.org/join.html).</span>
 22 <span class="token comment">#server 0.centos.pool.ntp.org iburst #默认配置，同步网络时间</span>
 23 <span class="token comment">#server 1.centos.pool.ntp.org iburst</span>
 24 <span class="token comment">#server 2.centos.pool.ntp.org iburst</span>
 25 <span class="token comment">#server 3.centos.pool.ntp.org iburst</span>
 26 
 27 server 127.127.1.0  <span class="token comment">#本地时间</span>
 28 fudge 127.127.1.0 stratum 1 <span class="token comment">#时间服务器的层次。设为0则为顶级</span>
 29 
 30 <span class="token comment">#broadcast 192.168.1.255 autokey        # broadcast server</span>
 31 <span class="token comment">#broadcastclient                        # broadcast client</span>
 32 <span class="token comment">#broadcast 224.0.1.1 autokey            # multicast server</span>
 33 <span class="token comment">#multicastclient 224.0.1.1              # multicast client</span>
 34 <span class="token comment">#manycastserver 239.255.254.254         # manycast server</span>
 35 <span class="token comment">#manycastclient 239.255.254.254 autokey # manycast client</span>
 36 
 37 <span class="token comment"># Enable public key cryptography.</span>
 38 <span class="token comment">#crypto</span>
 39 
 40 includefile /etc/ntp/crypto/pw
 41 
 42 <span class="token comment"># Key file containing the keys and key identifiers used when operating</span>
 43 <span class="token comment"># with symmetric key cryptography. </span>
 44 keys /etc/ntp/keys
 45 
 46 <span class="token comment"># Specify the key identifiers which are trusted.</span>
 47 <span class="token comment">#trustedkey 4 8 42</span>
 48 
 49 <span class="token comment"># Specify the key identifier to use with the ntpdc utility.</span>
 50 <span class="token comment">#requestkey 8</span>
 51 
 52 <span class="token comment"># Specify the key identifier to use with the ntpq utility.</span>
 53 <span class="token comment">#controlkey 8</span>
 54 
 55 <span class="token comment"># Enable writing of statistics records.</span>
 56 <span class="token comment">#statistics clockstats cryptostats loopstats peerstats</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：红色字体的地方为新增或修改的部分 client：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/ntp.conf </span>

<span class="token comment"># For more information about this file, see the man pages</span>
<span class="token comment"># ntp.conf(5), ntp_acc(5), ntp_auth(5), ntp_clock(5), ntp_misc(5), ntp_mon(5).</span>
  3 
  4 driftfile /var/lib/ntp/drift
  5 
  6 <span class="token comment"># Permit time synchronization with our time source, but do not</span>
  7 <span class="token comment"># permit the source to query or modify the service on this system.</span>
  8 restrict default kod nomodify notrap nopeer noquery
  9 restrict <span class="token punctuation">-</span>6 default kod nomodify notrap nopeer noquery
 10 
 11 <span class="token comment"># Permit all access over the loopback interface.  This could</span>
 12 <span class="token comment"># be tightened as well, but to do so would effect some of</span>
 13 <span class="token comment"># the administrative functions.</span>
 14 restrict 127.0.0.1
 15 restrict <span class="token punctuation">-</span>6 <span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">1</span>
 16 
 17 <span class="token comment"># Hosts on local network are less restricted.</span>
 18 restrict 192.168.0.0 mask 255.255.255.0 nomodify notrap
 19 
 20 <span class="token comment"># Use public servers from the pool.ntp.org project.</span>
 21 <span class="token comment"># Please consider joining the pool (http://www.pool.ntp.org/join.html).</span>
 22 <span class="token comment">#server 0.centos.pool.ntp.org iburst</span>
 23 <span class="token comment">#server 1.centos.pool.ntp.org iburst</span>
 24 <span class="token comment">#server 2.centos.pool.ntp.org iburst</span>
 25 <span class="token comment">#server 3.centos.pool.ntp.org iburst</span>
 26 
 27 server 192.168.0.124 profer <span class="token comment">#时间服务器地址28 </span>
 29 <span class="token comment">#broadcast 192.168.1.255 autokey        # broadcast server</span>
 30 <span class="token comment">#broadcastclient                        # broadcast client</span>
 31 <span class="token comment">#broadcast 224.0.1.1 autokey            # multicast server</span>
 32 <span class="token comment">#multicastclient 224.0.1.1              # multicast client</span>
 33 <span class="token comment">#manycastserver 239.255.254.254         # manycast server</span>
 34 <span class="token comment">#manycastclient 239.255.254.254 autokey # manycast client</span>
 35 
 36 <span class="token comment"># Enable public key cryptography.</span>
 37 <span class="token comment">#crypto</span>
 38 
 39 includefile /etc/ntp/crypto/pw
 40 
 41 <span class="token comment"># Key file containing the keys and key identifiers used when operating</span>
 42 <span class="token comment"># with symmetric key cryptography. </span>
 43 keys /etc/ntp/keys
 44 
 45 <span class="token comment"># Specify the key identifiers which are trusted.</span>
 46 <span class="token comment">#trustedkey 4 8 42</span>
 47 
 48 <span class="token comment"># Specify the key identifier to use with the ntpdc utility.</span>
 49 <span class="token comment">#requestkey 8</span>
 50 
 51 <span class="token comment"># Specify the key identifier to use with the ntpq utility.</span>
 52 <span class="token comment">#controlkey 8</span>
 53 
 54 <span class="token comment"># Enable writing of statistics records.</span>
 55 <span class="token comment">#statistics clockstats cryptostats loopstats peerstat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、设置client主机与时间服务器时间的同步" tabindex="-1"><a class="header-anchor" href="#四、设置client主机与时间服务器时间的同步" aria-hidden="true">#</a> 四、设置client主机与时间服务器时间的同步</h2><p>serverd端从启ntp服务<br> client端更改系统时间<br> 执行同步命令：ntpdate -u 192.168.0.124<br></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fenfa x86_64<span class="token punctuation">]</span><span class="token comment"># service ntpd restart</span>
关闭 ntpd：                                                <span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
正在启动 ntpd：                                            <span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># date</span>
<span class="token number">2019</span>年 08月 <span class="token number">19</span>日 星期一 <span class="token number">21</span>:52:25 CST
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># date -s 2018-08-19</span>
<span class="token number">2018</span>年 08月 <span class="token number">19</span>日 星期日 00:00:00 CST
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># date</span>
<span class="token number">2018</span>年 08月 <span class="token number">19</span>日 星期日 00:00:05 CST
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># ntpdate -u 192.168.0.124</span>
<span class="token number">19</span> Aug <span class="token number">21</span>:54:22 ntpdate<span class="token punctuation">[</span><span class="token number">1861</span><span class="token punctuation">]</span>: step <span class="token function">time</span> server <span class="token number">192.168</span>.0.124 offset <span class="token number">31614767.907398</span> sec
<span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># date</span>
<span class="token number">2019</span>年 08月 <span class="token number">19</span>日 星期一 <span class="token number">21</span>:54:28 CST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),d=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># crontab -l</span>
<span class="token comment">####ntpd  Synchronize every 1 minute</span>
00-59/60 * * * * /usr/sbin/ntpdate <span class="token parameter variable">-u</span> <span class="token number">192.168</span>.0.124 <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改/etc/ntp/stpe-tickers文件，内容如下（当ntpd服务启动时，会自动与该文件中记录的上层NTP服务进行时间校对</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nfs ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/ntp/step-tickers </span>
<span class="token comment"># List of servers used for initial synchronization.</span>
server <span class="token number">192.168</span>.0.124 prefer 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ntp服务，默认只会同步系统时间。如果想要让ntp同时同步硬件时间，可以设置/etc/sysconfig/ntpd文件，在/etc/sysconfig/ntpd文件中，添加 SYNC_HWCLOCK=yes 这样，就可以让硬件时间与系统时间一起同步。</p>`,4);function m(u,v){const s=a("B");return t(),i("div",null,[r,c(s,null,{default:l(()=>[o("可以在client机器上编写一个定时脚本：")]),_:1}),d])}const k=e(p,[["render",m],["__file","linux内网时间同步配置.html.vue"]]);export{k as default};
