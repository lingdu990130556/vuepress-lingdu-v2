import{_ as a,r as i,o,c as l,d as n,e as s,b as c,f as t}from"./app-1617154c.js";const d="/vuepress-lingdu-v2/assets/img-48d59511.png",r={},m=n("h1",{id:"docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),s(" Docker")],-1),p=n("h2",{id:"基本介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基本介绍","aria-hidden":"true"},"#"),s(" 基本介绍")],-1),v={href:"http://doc.ruoyi.vip/ruoyi-cloud/cloud/dokcer.html",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> DockerFile</h2><p><strong>示例</strong></p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 基础镜像 指明构建的新镜像是来自于哪个基础镜像，如果没有选择tag，那么默认值为latest</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>idea中运行配置示例</strong></p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',5);function k(b,h){const e=i("ExternalLinkIcon");return o(),l("div",null,[m,p,n("p",null,[n("strong",null,[n("a",v,[s("http://doc.ruoyi.vip/ruoyi-cloud/cloud/dokcer.html"),c(e)])])]),u])}const N=a(r,[["render",k],["__file","index.html.vue"]]);export{N as default};
