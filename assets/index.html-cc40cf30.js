import{_ as e,r as t,o as i,c as o,f as s,h as n,a as l,d as c}from"./app-ac465cee.js";const r="/vuepress-lingdu-v2/assets/img_1-c36de6e6.png",p="/vuepress-lingdu-v2/assets/img_2-21bbcb3a.png",d="/vuepress-lingdu-v2/assets/img-48d59511.png",u={},m=s("h1",{id:"docker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),n(" Docker")],-1),v=s("h2",{id:"基本介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#基本介绍","aria-hidden":"true"},"#"),n(" 基本介绍")],-1),k={href:"http://doc.ruoyi.vip/ruoyi-cloud/cloud/dokcer.html",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="docker-开启远程访问" tabindex="-1"><a class="header-anchor" href="#docker-开启远程访问" aria-hidden="true">#</a> Docker 开启远程访问</h2><h3 id="_1、配置docker远程连接端口" tabindex="-1"><a class="header-anchor" href="#_1、配置docker远程连接端口" aria-hidden="true">#</a> 1、配置docker远程连接端口</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、找到-execstart-在最后面添加-h-tcp-0-0-0-0-2375" tabindex="-1"><a class="header-anchor" href="#_2、找到-execstart-在最后面添加-h-tcp-0-0-0-0-2375" aria-hidden="true">#</a> 2、找到 ExecStart，在最后面添加 -H tcp://0.0.0.0:2375</h3><div class="language-service line-numbers-mode" data-ext="service"><pre class="language-service"><code>[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target docker.socket firewalld.service containerd.service time-set.target
Wants=network-online.target containerd.service
Requires=docker.socket

[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375 # 这里添加
ExecReload=/bin/kill -s HUP $MAINPID
TimeoutStartSec=0
RestartSec=2
Restart=always

# Note that StartLimit* options were moved from &quot;Service&quot; to &quot;Unit&quot; in systemd 229.
# Both the old, and new location are accepted by systemd 229 and up, so using the old location
# to make them work for either version of systemd.
StartLimitBurst=3

# Note that StartLimitInterval was renamed to StartLimitIntervalSec in systemd 230.
# Both the old, and new name are accepted by systemd 230 and up, so using the old name to make
# this option work for either version of systemd.
StartLimitInterval=60s

# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity

# Comment TasksMax if your systemd version does not support it.
# Only systemd 226 and above support this option.
TasksMax=infinity

# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes

# kill only the docker process, not all processes in the cgroup
KillMode=process
OOMScoreAdjust=-500

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、重启docker" tabindex="-1"><a class="header-anchor" href="#_3、重启docker" aria-hidden="true">#</a> 3、重启docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span>

systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、开放端口和防火墙" tabindex="-1"><a class="header-anchor" href="#_4、开放端口和防火墙" aria-hidden="true">#</a> 4、开放端口和防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">2375</span>/tcp <span class="token parameter variable">--permanent</span>
iptables <span class="token parameter variable">-I</span> INPUT <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">2375</span> <span class="token parameter variable">-j</span> ACCEPT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、验证" tabindex="-1"><a class="header-anchor" href="#_5、验证" aria-hidden="true">#</a> 5、验证</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">curl</span> http://192.168.0.205:2375/version

<span class="token comment"># 返回结果</span>
<span class="token punctuation">{</span><span class="token string">&quot;Platform&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Docker Engine - Community&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;Components&quot;</span>:<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Engine&quot;</span>,<span class="token string">&quot;Version&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;24.0.5&quot;</span>,<span class="token string">&quot;Details&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;ApiVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;1.43&quot;</span>,<span class="token string">&quot;Arch&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;amd64&quot;</span>,<span class="token string">&quot;BuildTime&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2023-07-21T20:38:05.000000000+00:00&quot;</span>,<span class="token string">&quot;Experimental&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;false&quot;</span>,<span class="token string">&quot;GitCommit&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;a61e2b4&quot;</span>,<span class="token string">&quot;GoVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;go1.20.6&quot;</span>,<span class="token string">&quot;KernelVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;3.10.0-957.21.3.el7.x86_64&quot;</span>,<span class="token string">&quot;MinAPIVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;1.12&quot;</span>,<span class="token string">&quot;Os&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;linux&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;containerd&quot;</span>,<span class="token string">&quot;Version&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;1.6.22&quot;</span>,<span class="token string">&quot;Details&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;GitCommit&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;8165feabfdfe38c65b599c4993d227328c231fca&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;runc&quot;</span>,<span class="token string">&quot;Version&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;1.1.8&quot;</span>,<span class="token string">&quot;Details&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;GitCommit&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;v1.1.8-0-g82f18fe&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;docker-init&quot;</span>,<span class="token string">&quot;Version&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;0.19.0&quot;</span>,<span class="token string">&quot;Details&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;GitCommit&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;de40ad0&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span>,<span class="token string">&quot;Version&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;24.0.5&quot;</span>,<span class="token string">&quot;ApiVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;1.43&quot;</span>,<span class="token string">&quot;MinAPIVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;1.12&quot;</span>,<span class="token string">&quot;GitCommit&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;a61e2b4&quot;</span>,<span class="token string">&quot;GoVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;go1.20.6&quot;</span>,<span class="token string">&quot;Os&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;linux&quot;</span>,<span class="token string">&quot;Arch&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;amd64&quot;</span>,<span class="token string">&quot;KernelVersion&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;3.10.0-957.21.3.el7.x86_64&quot;</span>,<span class="token string">&quot;BuildTime&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2023-07-21T20:38:05.000000000+00:00&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="idea远程访问" tabindex="-1"><a class="header-anchor" href="#idea远程访问" aria-hidden="true">#</a> IDEA远程访问</h2><h3 id="_1、安装docker插件并重启" tabindex="-1"><a class="header-anchor" href="#_1、安装docker插件并重启" aria-hidden="true">#</a> 1、安装docker插件并重启</h3><p>File-&gt;Settings-&gt;Plugins-&gt;Marketplace-&gt;搜索docker-&gt;Docker安装 <img src="`+r+'" alt="" loading="lazy"></p><h3 id="_2、配置连接远程docker" tabindex="-1"><a class="header-anchor" href="#_2、配置连接远程docker" aria-hidden="true">#</a> 2、配置连接远程docker</h3><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> DockerFile</h2><p><strong>示例</strong></p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 基础镜像 指明构建的新镜像是来自于哪个基础镜像，如果没有选择tag，那么默认值为latest</span>
<span class="token instruction"><span class="token keyword">FROM</span>  openjdk:8-jre</span>
<span class="token comment"># author 指明镜像维护者及其联系方式（一般是邮箱地址）。官方说明已过时，推荐使用LABEL</span>
<span class="token comment">#MAINTAINER sjzx</span>
<span class="token comment"># 功能是为镜像指定标签。也可以使用LABEL来指定镜像作者</span>
<span class="token instruction"><span class="token keyword">LABEL</span> 作者=<span class="token string">&quot;〇°&quot;</span></span>

<span class="token comment"># 设置局部变量 定义参数（build构建时使用）</span>
<span class="token instruction"><span class="token keyword">ARG</span> JAR_NAME=sjzx-cloud-dimensiondoor.jar</span>

<span class="token comment">#设置容器环境变量（程序运行时使用）</span>
<span class="token instruction"><span class="token keyword">ENV</span> RUN_JAR_NAME=<span class="token variable">$JAR_NAME</span></span>

<span class="token comment"># 挂载目录 指定容器挂载点到宿主机自动生成的目录或其他容器。一般的使用场景为需要持久化存储数据时</span>
<span class="token instruction"><span class="token keyword">VOLUME</span> /home/sjzx</span>

<span class="token comment"># 创建目录 构建镜像时运行的Shell命令，比如构建的新镜像中我们想在/usr/local目录下创建一个java目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /home/sjzx</span>

<span class="token comment"># 拷贝文件或目录到镜像中。src 可以是一个本地文件，还可以是一个url。然后自动下载和解压</span>
<span class="token comment">#ADD ./jar/$JAR_NAME /home/sjzx/$JAR_NAME</span>

<span class="token comment"># 指定路径 为 RUN、CMD、ENTRYPOINT 以及 COPY 和 AND 设置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /home/sjzx</span>

<span class="token comment"># 暴露容器运行时的监听端口给外部，可以指定端口是监听 TCP 还是 UDP，如果未指定协议，则默认为 TCP</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 6212</span>

<span class="token comment"># 运行选项添加</span>
<span class="token comment"># 当 docker 容器使用 host 连接方式的时候，容器与宿主共用网络，这样就能从容器中访问宿主网络了</span>
<span class="token comment"># 容器中的 localhost 就等于宿主的 localhost 了.</span>
<span class="token comment"># 在 docker 命令中使用 --network host 来为容器配置host网络</span>
<span class="token comment"># --network=host</span>
<span class="token comment"># --restart=always --network=host --env GO_APP_PORT=6212 --expose 6212 -d --security-opt=seccomp:unconfined</span>

<span class="token comment"># 复制jar文件到路径 拷贝文件或目录到镜像中。用法同 ADD，只是不支持自动下载和解压</span>
<span class="token instruction"><span class="token keyword">COPY</span> ./jar/<span class="token variable">$JAR_NAME</span> /home/sjzx/<span class="token variable">$JAR_NAME</span></span>

<span class="token comment"># 启动容器时执行的Shell命令。在Dockerfile中只能有一条CMD指令。如果设置了多条CMD，只有最后一条会生效</span>
<span class="token comment">#CMD []</span>

<span class="token comment"># 启动网关服务 启动容器时执行的 Shell 命令，同 CMD 类似，不会被 docker run 命令行指定的参数所覆盖，如果设置了多条ENTRYPOINT，只有最后一条会生效</span>
<span class="token comment">#ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;sjzx-cloud-dimensiondoor.jar&quot;]</span>
<span class="token comment"># 若想使用变量则使用下面的方式</span>
<span class="token comment"># 报错：ORA-01882: timezone region not found 则添加启动参数 -Duser.timezone=GMT+08</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> java -Duser.timezone=GMT+08 -Xms100m -Xmx100m -jar <span class="token variable">$RUN_JAR_NAME</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>idea中运行配置示例</strong></p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',21);function g(q,h){const a=t("ExternalLinkIcon");return i(),o("div",null,[m,v,s("p",null,[s("strong",null,[s("a",k,[n("http://doc.ruoyi.vip/ruoyi-cloud/cloud/dokcer.html"),l(a)])])]),b])}const _=e(u,[["render",g],["__file","index.html.vue"]]);export{_ as default};
