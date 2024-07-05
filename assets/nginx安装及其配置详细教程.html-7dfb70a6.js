import{_ as d,r as l,o as t,c as r,f as i,h as n,a,d as s}from"./app-ac465cee.js";const c={},g={id:"一、nginx安装及其配置详细教程",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#一、nginx安装及其配置详细教程","aria-hidden":"true"},"#",-1),v={href:"https://www.cnblogs.com/lywJ/p/10710361.html",target:"_blank",rel:"noopener noreferrer"},u=s(`<h1 id="_1-nginx-介绍" tabindex="-1"><a class="header-anchor" href="#_1-nginx-介绍" aria-hidden="true">#</a> 1 nginx 介绍</h1><h2 id="_1-什么是nginx" tabindex="-1"><a class="header-anchor" href="#_1-什么是nginx" aria-hidden="true">#</a> 1 什么是nginx</h2><p>Nginx是一款高性能的http 服务器/反向代理服务器及电子邮件（IMAP/POP3）代理服务器。</p><p>由俄罗斯的程序设计师Igor Sysoev所开发，官方测试nginx能够支支撑5万并发链接，</p><p>并且cpu、内存等资源消耗却非常低，运行非常稳定。</p><h2 id="_2-应用场景" tabindex="-1"><a class="header-anchor" href="#_2-应用场景" aria-hidden="true">#</a> 2 应用场景</h2><p>1、http服务器。Nginx是一个http服务可以独立提供http服务。可以做网页静态服务器。</p><p>2、虚拟主机。可以实现在一台服务器虚拟出多个网站。例如个人网站使用的虚拟主机。</p><p>3、反向代理，负载均衡。当网站的访问量达到一定程度后，单台服务器不能满足用户的请求时，</p><p>需要用多台服务器集群可以使用nginx做反向代理。并且多台服务器可以平均分担负载，</p><p>不会因为某台服务器负载高宕机而某台服务器闲置的情况。</p><h1 id="_2-nginx安装" tabindex="-1"><a class="header-anchor" href="#_2-nginx安装" aria-hidden="true">#</a> 2 nginx安装</h1><h2 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> 1 下载</h2><p>官方网址：http://nginx.org/en/download.html</p><p>官网提供三种版本：</p><p>Nginx官网提供了三个类型的版本 Mainline version：Mainline 是 Nginx 目前主力在做的版本，可以说是开发版 Stable version：最新稳定版，生产环境上建议使用的版本 Legacy versions：遗留的老版本的稳定版</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528200317474-243156008.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>我们这里下载的是Stable version下面的</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528200502469-1278177452.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>使用的版本是1.14.0.tar.gz.</p><h2 id="_2-安装要求的环境" tabindex="-1"><a class="header-anchor" href="#_2-安装要求的环境" aria-hidden="true">#</a> 2 安装要求的环境</h2><p>下面的环境需要视自己的系统情况而定，没有的环境安装以下就好。</p><p><strong>1.需要安装gcc环境</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># yum install gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.第三方的开发包</strong></p><p><strong>1 PERE</strong></p><p>PCRE(Perl Compatible Regular Expressions)是一个Perl库，包括 perl 兼容的正则表达式库。</p><p>nginx的http模块使用pcre来解析正则表达式，所以需要在linux上安装pcre库。</p><p><strong>注：pcre-devel是使用pcre开发的一个二次开发库。nginx****也需要此库</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># yum install -y pcre pcre-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2 zlib</strong></p><p>zlib库提供了很多种压缩和解压缩的方式，nginx使用zlib对http包的内容进行gzip，所以需要在linux上安装zlib库。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># yum install -y zlib zlib-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3 openssl</strong></p><p>OpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及SSL协议，</p><p>并提供丰富的应用程序供测试或其它目的使用。</p><p>nginx不仅支持http协议，还支持https（即在ssl协议上传输http），所以需要在linux安装openssl库。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># yum -y install pcre  pcre-devel zlib  zlib-devel openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-nginx安装过程" tabindex="-1"><a class="header-anchor" href="#_3-nginx安装过程" aria-hidden="true">#</a> 3 nginx安装过程</h2><p><strong>1 把nginx源码包上传到linux系统上</strong></p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528213653887-1061022351.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>2 解压到/usr/local下面</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># tar -xvf nginx-1.14.0.tar.gz -C /usr/local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3 使用cofigure命令创建一个makeFile文件</strong></p><p><strong>执行下面的命令的时候，一定要进入到nginx-1.14.0目录里面去。</strong></p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180603221011496-2060500005.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure \\
--prefix=/usr/local/nginx \\
--pid-path=/var/run/nginx/nginx.pid \\
--lock-path=/var/lock/nginx.lock \\
--error-log-path=/var/log/nginx/error.log \\
--http-log-path=/var/log/nginx/access.log \\
--with-http_gzip_static_module \\
--http-client-body-temp-path=/var/temp/nginx/client \\
--http-proxy-temp-path=/var/temp/nginx/proxy \\
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\
--http-scgi-temp-path=/var/temp/nginx/scgi \\--with-http_stub_status_module \\--with-http_ssl_module \\--with-file-aio \\--with-http_realip_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><p>如果没有makeFile文件，编译的时候会报错</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528214718704-1940031525.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>\\ 表示命令还没有输入完，换行的意思。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--prefix=/usr/local/nginx  表示软件安装到/usr/local/nginx下面。这个make install 的时候就不用在指定安装路径。执行完成后查看目录里面已经多了一个Makefile文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528214847419-87432766.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>注意：启动nginx之前，上边将临时文件目录指定为/var/temp/nginx，</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>需要在/var下创建temp及nginx目
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4 创建目录/var/temp/nginx/</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mkdir /var/temp/nginx -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-p 表示级联创建的意思</p><p><strong>5 进入nginx-1.14.0里面执行make命令进行编译</strong></p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528215034813-1051731312.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>6 进入nginx-1.14.0里面执行make install 命令进行安装</strong></p><p>这里不需要再次执行安装路径，创建makefile文件的时候已经指定了。</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528215201682-241819080.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>7 进入安装位置/usr/local/nginx查看目录结构</strong></p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528215317140-1292141060.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>其中html是里面首页html文件。conf里面是配置文件。sbin里面只执行文件。</p><h2 id="离线安装" tabindex="-1"><a class="header-anchor" href="#离线安装" aria-hidden="true">#</a> 离线安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>3.1 下载gcc安装环境包
百度网盘:https://pan.baidu.com/s/1Rh9MUiDSVYsN3XI7M1rinQ 
提取码:fv91
3.2 通过ftp传到linux下  
/usr/gcc
3.3 如果没有创建改目录
mkdir /usr/gcc
3.4 解压下载的文件
 tar -zxvf gcc_rpm.tar.gz
3.5 进入解压目录
cd  gcc_rpm
3.6 执行.sh批处理文件
sh ./install_gcc.sh 
3.7 查看版本
gcc -v
3.8 显示如下则安装成功
Using built-in specs.
Target: x86_64-redhat-linux
Configured with: ../configure --prefix=/usr --mandir=/usr/share/man --infodir=/usr/share/info --with-bugurl=http://bugzilla.redhat.com/bugzilla --enable-bootstrap --enable-shared --enable-threads=posix --enable-checking=release --with-system-zlib --enable-__cxa_atexit --disable-libunwind-exceptions --enable-gnu-unique-object --enable-languages=c,c++,objc,obj-c++,java,fortran,ada --enable-java-awt=gtk --disable-dssi --with-java-home=/usr/lib/jvm/java-1.5.0-gcj-1.5.0.0/jre --enable-libgcj-multifile --enable-java-maintainer-mode --with-ecj-jar=/usr/share/java/eclipse-ecj.jar --disable-libjava-multilib --with-ppl --with-cloog --with-tune=generic --with-arch_32=i686 --build=x86_64-redhat-linux
Thread model: posix
gcc version 4.4.7 20120313 (Red Hat 4.4.7-4) (GCC)



linux离线下nginx安装
1 下载nginx及相关包
百度网盘:
https://pan.baidu.com/s/1YDt-IGopyLWB1a_1pp8M6Q
提取码:
qkqa

2 安装前提,有gcc 及 c++
参考https://blog.csdn.net/weixin_43231352/article/details/88849961

3 压缩包文件列表
nginx-1.14.0.tar.gz
openssl-1.1.0h.tar.gz
pcre-8.42.tar.gz
zlib-1.2.11.tar.gz
4 文件上传到linux ,我这里是 /usr/nginx
5 跟着命令做
进入目录: cd /usr/nginx/
1 安装pcre
tar -zxvf pcre-8.42.tar.gz
cd pcre-8.42/
./configure
make
make install
2 安装zlib
tar -zxvf zlib-1.2.11.tar.gz
cd zlib-1.2.11/
./configure
make
make install
3 安装openssl
tar -zxvf openssl-1.1.0h.tar.gz
cd openssl-1.1.0h/
./config
make
make install
4 安装 nginx
tar -zxvf nginx-1.14.0.tar.gz
cd nginx-1.14.0/
./configure --prefix=/usr/local/nginx --with-http_ssl_module --with-pcre=../pcre-8.42 --with-zlib=../zlib-1.2.11 --with-openssl=../openssl-1.1.0h
(温馨提示,上面的这条命令最好自己敲)
make
make install
cd /usr/local/nginx/sbin
./nginx
http://ip/ 进行访问,出现nginx首页



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-启动nginx" tabindex="-1"><a class="header-anchor" href="#_3-启动nginx" aria-hidden="true">#</a> 3 启动nginx</h1><p>进入sbin目录，执行命令./nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin sbin]# ./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可能遇到的错误解决:</p><p>未找到文件夹,则创建文件夹↓</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /var/temp/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-查看nginx是否启动" tabindex="-1"><a class="header-anchor" href="#_4-查看nginx是否启动" aria-hidden="true">#</a> 4 查看nginx是否启动</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin sbin]# ps -aux | grep nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528215659486-386960152.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>ps命令</strong>用于报告当前系统的进程状态。</p><p>-a：显示所有终端机下执行的程序，除了阶段作业领导者之外。</p><p>a：显示现行终端机下的所有程序，包括其他用户的程序。</p><p>u：以用户为主的格式来显示程序状况。</p><p>x：显示所有程序，不以终端机来区分。</p><h1 id="_5-关闭nginx" tabindex="-1"><a class="header-anchor" href="#_5-关闭nginx" aria-hidden="true">#</a> 5 关闭nginx</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin sbin]#  ./nginx -s stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin sbin]# ./nginx -s quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_6-重启nginx" tabindex="-1"><a class="header-anchor" href="#_6-重启nginx" aria-hidden="true">#</a> 6 重启nginx</h1><p>先关闭，然后启动</p><h1 id="_7-刷新配置文件" tabindex="-1"><a class="header-anchor" href="#_7-刷新配置文件" aria-hidden="true">#</a> 7 刷新配置文件</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin sbin]# ./nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_8-关闭防火墙-开启远程访问" tabindex="-1"><a class="header-anchor" href="#_8-关闭防火墙-开启远程访问" aria-hidden="true">#</a> 8 关闭防火墙，开启远程访问</h1><p>首先需要关闭防火墙：默认端口是80</p><p><strong>方法一：永久开放80端口</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT
/etc/rc.d/init.d/iptables save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法二：临时关闭系统防火墙</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># service iptables stop  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>方法三：永久关闭修改配置开机不启动防火墙</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># chkconfig iptables off 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>特殊：针对阿里云</strong></p><p>需要添加安全组规则</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528220957160-1215262173.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="_9-访问nginx" tabindex="-1"><a class="header-anchor" href="#_9-访问nginx" aria-hidden="true">#</a> 9 访问nginx</h1><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528221109414-1467990812.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="_10-配置虚拟主机" tabindex="-1"><a class="header-anchor" href="#_10-配置虚拟主机" aria-hidden="true">#</a> 10 配置虚拟主机</h1><p>就是在一台服务器启动多个网站。</p><p>如何区分不同的网站：主要有以下两种方式</p><p>方式一：端口不同</p><p>方式二：域名不同</p><h1 id="_11-通过端口区分不同的主机" tabindex="-1"><a class="header-anchor" href="#_11-通过端口区分不同的主机" aria-hidden="true">#</a> 11 通过端口区分不同的主机</h1><p>nginx配置文件的位置：/usr/local/nginx/conf/nginx.conf</p><p>原始配置文件的内容如下：</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528231052645-411882308.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>我们可以通过配置多个server,从而配置多个虚拟机</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528231338064-1303784911.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>下面测试以下：复制原来的html目录，改名为html-81</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528225829702-501478470.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>修改以下里面的index.html文件，方便区分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin nginx]# vim html-81/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528230030494-1928427070.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>修改完成之后刷新以下配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin sbin]# ./nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后分别访问192.168.204.131:80 和192.168.204.131:81</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528231556841-1742041295.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528231650473-1839844366.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="_12-多个域名区分虚拟主机" tabindex="-1"><a class="header-anchor" href="#_12-多个域名区分虚拟主机" aria-hidden="true">#</a> 12 多个域名区分虚拟主机</h1><h2 id="_1-什么是域名" tabindex="-1"><a class="header-anchor" href="#_1-什么是域名" aria-hidden="true">#</a> 1 什么是域名</h2><p>域名就是网站：www.baidu.com就是域名</p><p>DNS域名解析服务器，把域名解析为ip地址。保存的就是域名和ip地址的映射关系。</p><p>一级域名：baidu.com</p><p>二级域名：www.baidu.com</p><p>三级域名：image.baidu.com</p><p>一个域名对应与一个ip地址，一个ip地址可以被多个域名绑定。</p><p>只需要买一个一级域名，后面的二级，三级域名你自己可以随便定义。</p><p>本地测试我们可以通过修改hosts配置文件来完成：</p><p>hosts文件的位置：C:\\Windows\\System32\\drivers\\etc</p><p>可以自己手动配置域名和ip的映射关系，如果hosts文件中配置了域名和ip的对应关系，不需要走DNS域名解析服务器。</p><p>因为拿到一个域名，首先是到hosts文件里面查找，没有才有去DNS域名解析器查找。</p><h2 id="_2-nginx配置" tabindex="-1"><a class="header-anchor" href="#_2-nginx配置" aria-hidden="true">#</a> 2 nginx配置</h2><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528232837172-772759927.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_3-测试" tabindex="-1"><a class="header-anchor" href="#_3-测试" aria-hidden="true">#</a> 3 测试</h2><p>1 修改本地hosts配置文件</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528233243735-537226043.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>2 复制html目录，分别改名为html-taobao和html-baidu</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528233425639-1929848567.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>3 分别修改html-baidu和html-taobao里面的index.html文件，方便区分</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528233638275-1668361848.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180528233727028-1216322786.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>4 刷新配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@admin sbin]# ./nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5 然后使用浏览器分别访问：www.taobao.com 和 www.baidu.com</p><h1 id="_13-正向代理" tabindex="-1"><a class="header-anchor" href="#_13-正向代理" aria-hidden="true">#</a> 13 正向代理</h1><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180529000121513-942126145.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="_14-反向代理" tabindex="-1"><a class="header-anchor" href="#_14-反向代理" aria-hidden="true">#</a> 14 反向代理</h1><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180529000622924-995860976.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>反向代理服务器决定那台服务器提供服务</p><h1 id="_15-nginx实现反向代理" tabindex="-1"><a class="header-anchor" href="#_15-nginx实现反向代理" aria-hidden="true">#</a> 15 nginx实现反向代理</h1><p>两个域名指向同一台nginx服务器，用户访问不同的域名显示不同的网页内容。</p><p>两个域名是www.baidu.com和www.taobao.com</p><p>nginx代理服务器使用虚拟机192.168.204.131</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180529001151869-999884385.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>第一步：安装两个tomcat，分别运行在8080和8081端口。</p><p>第二步：启动两个tomcat。</p><p>第三步：反向代理服务器的配置</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180529001600606-1806158722.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>第四步：nginx重新加载配置文件</p><p>第五步：配置域名</p><p>在hosts文件中添加域名和ip的映射关系</p><p>192.168.204.131 www.baidu.com</p><p>192.168.204.131 www.taobao.com</p><h1 id="_16-负载均衡" tabindex="-1"><a class="header-anchor" href="#_16-负载均衡" aria-hidden="true">#</a> 16 负载均衡</h1><p>如果一个服务由多个服务器提供，需要把负载分配到不同的服务器处理，需要负载均衡。</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180529002643025-1569805563.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可以根据服务器的实际情况调整服务器权重。权重越高分配的请求越多，权重越低，请求越少。默认是都是1</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201805/1320077-20180529002741304-1542056839.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="_17-设置nginx开机自启动-centos6-5" tabindex="-1"><a class="header-anchor" href="#_17-设置nginx开机自启动-centos6-5" aria-hidden="true">#</a> 17 设置nginx开机自启动（centos6.5）</h1><p>每次启动nginx服务都需要到安装目录下的/sbin下面，感觉挺麻烦的。</p><p>下面介绍一下如何在Linux(CentOS)系统上，设置nginx开机自启动。</p><h2 id="_1-用脚本管理nginx服务" tabindex="-1"><a class="header-anchor" href="#_1-用脚本管理nginx服务" aria-hidden="true">#</a> 1 用脚本管理nginx服务</h2><p><strong>第一步：在/etc/init.d/目录下创建nginx文件，命令如下：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># touch /etc/init.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二步：在创建的nginx文件中加入下面的内容</strong></p><p>首先执行命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vim /etc/init.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后加下面的内容复制到nginx配置文件中</p><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
#
# nginx - this script starts and stops the nginx daemon
#
# chkconfig:   - 85 15
# description:  NGINX is an HTTP(S) server, HTTP(S) reverse \\
#               proxy and IMAP/POP3 proxy server
# processname: nginx
# config:      /etc/nginx/nginx.conf
# config:      /etc/sysconfig/nginx
# pidfile:     /var/run/nginx.pid
# Source function library.
. /etc/rc.d/init.d/functions
# Source networking configuration.
. /etc/sysconfig/network
# Check that networking is up.
[ &quot;$NETWORKING&quot; = &quot;no&quot; ] &amp;&amp; exit 0
nginx=&quot;/usr/sbin/nginx&quot;
prog=$(basename $nginx)
NGINX_CONF_FILE=&quot;/etc/nginx/nginx.conf&quot;
[ -f /etc/sysconfig/nginx ] &amp;&amp; . /etc/sysconfig/nginx
lockfile=/var/lock/subsys/nginx
make_dirs() {
   # make required directories
   user=\`$nginx -V 2&gt;&amp;1 | grep &quot;configure arguments:&quot; | sed &#39;s/[^*]*--user=\\([^ ]*\\).*/\\1/g&#39; -\`
   if [ -z &quot;\`grep $user /etc/passwd\`&quot; ]; then
       useradd -M -s /bin/nologin $user
   fi
   options=\`$nginx -V 2&gt;&amp;1 | grep &#39;configure arguments:&#39;\`
   for opt in $options; do
       if [ \`echo $opt | grep &#39;.*-temp-path&#39;\` ]; then
           value=\`echo $opt | cut -d &quot;=&quot; -f 2\`
           if [ ! -d &quot;$value&quot; ]; then
               # echo &quot;creating&quot; $value
               mkdir -p $value &amp;&amp; chown -R $user $value
           fi
       fi
   done
}
start() {
    [ -x $nginx ] || exit 5
    [ -f $NGINX_CONF_FILE ] || exit 6
    make_dirs
    echo -n $&quot;Starting $prog: &quot;
    daemon $nginx -c $NGINX_CONF_FILE
    retval=$?
    echo
    [ $retval -eq 0 ] &amp;&amp; touch $lockfile
    return $retval
}
stop() {
    echo -n $&quot;Stopping $prog: &quot;
    killproc $prog -QUIT
    retval=$?
    echo
    [ $retval -eq 0 ] &amp;&amp; rm -f $lockfile
    return $retval
}
restart() {
    configtest || return $?
    stop
    sleep 1
    start
}
reload() {
    configtest || return $?
    echo -n $&quot;Reloading $prog: &quot;
    killproc $nginx -HUP
    RETVAL=$?
    echo
}
force_reload() {
    restart
}
configtest() {
  $nginx -t -c $NGINX_CONF_FILE
}
rh_status() {
    status $prog
}
rh_status_q() {
    rh_status &gt;/dev/null 2&gt;&amp;1
}
case &quot;$1&quot; in
    start)
        rh_status_q &amp;&amp; exit 0
        $1
        ;;
    stop)
        rh_status_q || exit 0
        $1
        ;;
    restart|configtest)
        $1
        ;;
    reload)
        rh_status_q || exit 7
        $1
        ;;
    force-reload)
        force_reload
        ;;
    status)
        rh_status
        ;;
    condrestart|try-restart)
        rh_status_q || exit 0
            ;;
    *)
        echo $&quot;Usage: $0 {start|stop|status|restart|condrestart|try-restart|reload|force-reload|configtest}&quot;
        exit 2
esac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><p>上面的脚本文件并不是自己写的，是nginx官方提供的。</p><p>地址：http://wiki.nginx.org/RedHatNginxInitScript</p><p>注意：如果是自定义安装的nginx,修改根据实际情况修改安装路和配置文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx=&quot;/usr/sbin/nginx&quot; 修改成你的nginx执行程序的路径。比如我的是nginx=&quot;/usr/local/nginx/sbin/nginx&quot;
NGINX_CONF_FILE=&quot;/etc/nginx/nginx.conf&quot; 修改成你的配置文件的路径例如：NGINX_CONF_FILE=&quot;/usr/local/nginx/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完成后保存脚本文件，wq 保存并退出</p><p><strong>第三步：设置nginx文件的权限</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># chmod a+x /etc/init.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解释：a+x==&gt;all user can execute 所有用户可执行）的意思</p><p><strong>第四步：管理脚本</strong></p><p>到这里，我们就可以使用nginx脚本对服务进行管理了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /etc/init.d/nginx start      启动服务
# /etc/init.d/nginx stop       停止服务  # /etc/init.d/nginx restart    重启服务
# /etc/init.d/nginx status     查看服务的状态# /etc/init.d/nginx reload     刷新配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用chkconfig管理" tabindex="-1"><a class="header-anchor" href="#_2-使用chkconfig管理" aria-hidden="true">#</a> 2 使用chkconfig管理</h2><p>上面的方法完成了用脚本管理nginx服务的功能，但是还是不太方便，比如要设置nginx开机启动等。</p><p>这个时候我们可以使用chkconfig来进行管理。</p><p><strong>第一步：将nginx服务加入chkconfig管理列表</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># chkconfig --add /etc/init.d/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二步：使用service管理服务</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># service nginx start    启动服务
# service nginx stop     停止服务# service nginx restart  重启服务# service nginx status   查询服务的状态# service nginx relaod   刷新配置文
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第三步：设置终端模式开机启动</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># chkconfig nginx on
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_17-设置nginx开机自启动-centos7-4" tabindex="-1"><a class="header-anchor" href="#_17-设置nginx开机自启动-centos7-4" aria-hidden="true">#</a> 17 设置nginx开机自启动（centos7.4）</h1><p><strong>第一步：进入到/lib/systemd/system/目录</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@iz2z init.d]# cd /lib/systemd/system/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第二步：创建nginx.service文件，并编辑</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># vim nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>内如如下：</p><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=nginx service
After=network.target 
   
[Service] 
Type=forking 
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true 
   
[Install] 
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><p>Description:描述服务 After:描述服务类别 [Service]服务运行参数的设置 Type=forking是后台运行的形式 ExecStart为服务的具体运行命令 ExecReload为重启命令 ExecStop为停止命令 PrivateTmp=True表示给服务分配独立的临时空间 注意：[Service]的启动、重启、停止命令全部要求使用绝对路径 [Install]运行级别下服务安装的相关设置，可设置为多用户，即系统运行级别为3</p><p>保存退出。</p><p><strong>第三步：加入开机自启动</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># systemctl enable nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不想开机自启动了，可以使用下面的命令取消开机自启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># systemctl disable nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第四步：服务的启动/停止/刷新配置文件/查看状态</strong></p><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># systemctl start nginx.service　         启动nginx服务
# systemctl stop nginx.service　          停止服务
# systemctl restart nginx.service　       重新启动服务
# systemctl list-units --type=service     查看所有已启动的服务
# systemctl status nginx.service          查看服务当前状态
# systemctl enable nginx.service          设置开机自启动
# systemctl disable nginx.service         停止开机自启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><h2 id="一个常见的错误" tabindex="-1"><a class="header-anchor" href="#一个常见的错误" aria-hidden="true">#</a> <strong>一个常见的错误</strong></h2><h3 id="warning-nginx-service-changed-on-disk-run-systemctl-daemon-reload-to-reload-units" tabindex="-1"><a class="header-anchor" href="#warning-nginx-service-changed-on-disk-run-systemctl-daemon-reload-to-reload-units" aria-hidden="true">#</a> Warning: nginx.service changed on disk. Run &#39;systemctl daemon-reload&#39; to reload units.</h3><p>直接按照提示执行命令systemctl daemon-reload 即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_18-重启系统-再次启动nginx报错" tabindex="-1"><a class="header-anchor" href="#_18-重启系统-再次启动nginx报错" aria-hidden="true">#</a> 18 重启系统，再次启动nginx报错</h1><h2 id="_1-故障现场" tabindex="-1"><a class="header-anchor" href="#_1-故障现场" aria-hidden="true">#</a> 1 故障现场</h2><p>之前在虚拟机centos6.5上面设置自启动之后，重新启动系统可以正常启动，也不会出错。</p><p>centos6.5的自启动设置见16部分知识点。</p><p>但是在centos7.4(阿里云上面），参照第17部分配置好了自启动。重启系统发现nginx并没有自启动</p><p>使用命名systemctl status nginx查看了一下状态，内容如下：</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180603235731837-1149240490.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>然后我直接进入/usr/local/nginx/sbin目录下面，执行./nginx，出现了下面的错误提示：</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180603235854971-2001750680.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>从这两个提示信息，可以大概看出告诉我们的就是找不到/var/run/nginx/目录下面的nginx.pid文件。</p><h2 id="_2-故障解决" tabindex="-1"><a class="header-anchor" href="#_2-故障解决" aria-hidden="true">#</a> 2 故障解决</h2><p><strong>第一步：进入 cd /usr/local/nginx/conf/ 目录，编辑配置文件nginx.conf ；</strong></p><p>在配置文件中找到：#pid logs/nginx.pid;</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604000215412-935975488.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>将其修改为：去掉注释，修改成自己的路径</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604000522605-1193262105.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>修改完成保存退出</p><p><strong>第二步：创建目录/var/run/nginx/</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mkdir /var/run/nginx -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第三步：启动nginx服务</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /usr/local/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以查看一下是否成功启动了</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604001021288-75578496.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_3-故障重现" tabindex="-1"><a class="header-anchor" href="#_3-故障重现" aria-hidden="true">#</a> 3 故障重现</h2><p><strong>[emerg] open() &quot;/var/run/nginx/nginx.pid&quot; failed (2: No such file or directory)处理</strong></p><p>测试发现，只要执行reboot命令重启，var/run/nginx，nginx这个文件夹都会被删除，</p><p>搞得每一次都要去建立nginx这个文件夹，简直麻烦到了极点，实在受不了。下面</p><p>继续来解决这个问题。</p><p><strong>第一步：进入 cd /usr/local/nginx/conf/ 目录，编辑配置文件nginx.conf ；</strong></p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604004515961-636067355.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>第二步：在/usr/local/nginx目录下建立logs文件夹</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mkdir /usr/local/nginx/logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604005704151-2060063432.png" alt="img" loading="lazy"></strong></p><p><strong>第三步：把/var/run/nginx/目录下的nginx.pid这个文件拷贝到第二步创建的logs文件夹里面。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cp nginx.pid /usr/local/nginx/logs/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604005724309-1632561610.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>第四步：把logs这个文件夹在conf下也拷贝一份</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># cp -r logs conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604005846851-1054721549.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>第五步：修改权限/usr/local/nginx/logs/目录下面的nginx.pid文件的权限。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@iz2logs]# chmod 755 nginx.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604010132048-1203053027.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>第六步：重启reboot</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># reboot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第六步：启动nginx</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /usr/local/nginx/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604010643083-893375042.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这次是终于成功解决了，一边安装一边解决问题，到这里nginx总是算是可以自启动了，并且也不会重启后找不到nginx.pid文件。真的太不容易了。</p><p><strong>解决的原理：就是让它去另外一个地方找nginx.pid文件，</strong></p><p><strong>因为/var/run/nginx/nginx.pid这个文件总是重启就删除了</strong>。</p><h2 id="简单解决方案" tabindex="-1"><a class="header-anchor" href="#简单解决方案" aria-hidden="true">#</a> 简单解决方案</h2><p>上面的过程有点繁琐了，实际可以直接按照下面的这个简单方法解决</p><p>修改nginx.conf文件如下：</p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604012457087-1758425381.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在/usr/local/nginx/目录下创建一个logs目录。</p><p>然后启动就可以了，并且重启也不会被删除。</p><p>这样下面的日志文件的配置也可以简化为去掉# error_log logs/error.log info; 前面的“#”就可以了</p><p>error_log logs/error.log info;</p><h1 id="_19-配置日志文件的位置" tabindex="-1"><a class="header-anchor" href="#_19-配置日志文件的位置" aria-hidden="true">#</a> 19 配置日志文件的位置</h1><p><strong>第一步：进入 cd /usr/local/nginx/conf/ 目录，编辑配置文件nginx.conf ；</strong></p><figure><img src="https://images2018.cnblogs.com/blog/1320077/201806/1320077-20180604001806779-1643312454.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>第二步：保证肯定有这个路径，可以直接创建一下这个配置的目录</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># mkdir -p /var/log/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第三步：刷新配置文件</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># /usr/local/nginx/sbin/nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="二、vue项目部署到nginx服务器" tabindex="-1"><a class="header-anchor" href="#二、vue项目部署到nginx服务器" aria-hidden="true">#</a> 二、vue项目部署到nginx服务器</h1><p>相信很多刚学习vue的朋友都可以进行到将vue项目进行npm run build这部，对于将build后的结果部署到nginx服务器上却一知半解，作者刚开始的时候也是很迷惑，看到网上很多朋友在问，今天作者就将自己的部署过程记录下来，供大家参考。</p><h2 id="首先将开发完成的vue项目打包" tabindex="-1"><a class="header-anchor" href="#首先将开发完成的vue项目打包" aria-hidden="true">#</a> 首先将开发完成的vue项目打包</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//  在终端中cd到项目目录下
cd  /usr/local/project
//  进行项目构建（可在本地构建）
npm run build
// build后会在目录下多了一个dist文件夹
dist中包含： index.html  和 static文件夹
// vue部分准备工作完成
1234567
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器安装nginx" tabindex="-1"><a class="header-anchor" href="#服务器安装nginx" aria-hidden="true">#</a> 服务器安装nginx</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 作者是Ubuntu的服务器
sudo apt-get nginx
// 等待nginx安装完成
123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接下来首先将vue-build后的dist下的两部分放到服务器上" tabindex="-1"><a class="header-anchor" href="#接下来首先将vue-build后的dist下的两部分放到服务器上" aria-hidden="true">#</a> 接下来首先将vue build后的dist下的两部分放到服务器上</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /var/www/html

mkdir project

// 将dist下的两部分（index.html和static）放到project下
12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接下来进入到nginx配置了" tabindex="-1"><a class="header-anchor" href="#接下来进入到nginx配置了" aria-hidden="true">#</a> 接下来进入到nginx配置了</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 找到nginx.conf文件
cd /etc/nginx
// 打开nginx.conf
vim nginx.conf
1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，作者在图中红色标出部分，提示大家nginx端口的真实配置其实在红色指出部分 <img src="https://img-blog.csdnimg.cn/20190523190527441.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzQ4NzI1Mg==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// cd至 sites-enabled
cd sites-enabled
// 查看下面是否有default
vim default
1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，该处确实是nginx的真实配置 <img src="https://img-blog.csdnimg.cn/20190523191013147.PNG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzQ4NzI1Mg==,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 将下面的代码添加到上面所示的后面
location /project {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                alias  /var/www/html/project;
                index index.html index.htm;

                try_files $uri $uri/ =404;
        }
// 退出重启nginx
service nginx reload
// ps查看是否重启了nginx
ps -ef |grep nginx
12345678910111213
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,310),m={href:"http://xxx.xxx.xx.xxx/",target:"_blank",rel:"noopener noreferrer"},p=s(`<h2 id="修改nginx配置文件" tabindex="-1"><a class="header-anchor" href="#修改nginx配置文件" aria-hidden="true">#</a> 修改nginx配置文件</h2><p>修改nginx配置文件，配置文件为conf下的nginx.conf,修改nginx.conf中的server配置片段</p><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> server {
        listen       8888;#默认端口是80，如果端口没被占用可以不用修改
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;
        root        E:/vue/my_project/dist;#vue项目的打包后的dist

        location / {
            try_files $uri $uri/ @router;#需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404
            index  index.html index.htm;
        }
        #对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件
        #因此需要rewrite到index.html中，然后交给路由在处理请求资源
        location @router {
            rewrite ^.*$ /index.html last;
        }
        #.......其他部分省略
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[<img src="https://common.cnblogs.com/images/copycode.gif" alt="复制代码" loading="lazy">](javascript:void(0)😉</p><p>完成nginx配置后重新加载配置文件，命令如下（ps:需要在安装的根路径下执行）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),b={href:"http://localhost:8888/",target:"_blank",rel:"noopener noreferrer"},x=i("p",null,"通常情况下ngxin是安装到单独的服务器上，因此一般是把vue打包后的dist仍到服务上的具体位置，然后修改nginx.conf的root路径来指向我们的dist。",-1);function h(f,_){const e=l("ExternalLinkIcon");return t(),r("div",null,[i("h1",g,[o,n(),i("a",v,[n("一、nginx安装及其配置详细教程"),a(e)])]),u,i("p",null,[n("接下来通过浏览器访问“"),i("a",m,[n("http://xxx.xxx.xx.xxx"),a(e)]),n("(该处为你的服务器ip)/project”就可以看到你的vue项目啦，作者的项目已经部署成功啦，github上的项目地址是https://github.com/guodonglw/vue_admin，希望能够帮助到大家 注：如果是阿里云或其他机构的服务器，需先在安全组中配置80端口对外开放")]),p,i("p",null,[n("浏览器中访问："),i("a",b,[n("http://localhost:8888"),a(e)])]),x])}const z=d(c,[["render",h],["__file","nginx安装及其配置详细教程.html.vue"]]);export{z as default};
