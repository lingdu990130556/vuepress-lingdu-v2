import{_ as e,o as a,c as s,d as n}from"./app-ac465cee.js";const i={},d=n(`<h1 id="zookeeper安装配置" tabindex="-1"><a class="header-anchor" href="#zookeeper安装配置" aria-hidden="true">#</a> zookeeper安装配置</h1><hr><h2 id="_1-分配目录" tabindex="-1"><a class="header-anchor" href="#_1-分配目录" aria-hidden="true">#</a> 1.分配目录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建安装目录</span>
<span class="token function">mkdir</span> /data/install/zk
<span class="token function">mkdir</span> /data/install/zk/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-下载或者上传包文件" tabindex="-1"><a class="header-anchor" href="#_2-下载或者上传包文件" aria-hidden="true">#</a> 2.下载或者上传包文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#方式一：直接下载</span>
<span class="token function">wget</span> https://dlcdn.apache.org/zookeeper/zookeeper-3.6.3/apache-zookeeper-3.6.3-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#方式二：上传压缩包</span>
<span class="token function">scp</span> <span class="token parameter variable">-P</span> <span class="token number">10022</span> apache-zookeeper-3.6.3-bin.tar.gz  root@11.141.230.153:/data/install/zk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-解压文件" tabindex="-1"><a class="header-anchor" href="#_3-解压文件" aria-hidden="true">#</a> 3.解压文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#解压文件</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apache-zookeeper-3.6.3-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-配置zookeeper主文件" tabindex="-1"><a class="header-anchor" href="#_4-配置zookeeper主文件" aria-hidden="true">#</a> 4.配置zookeeper主文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#复制配置文件</span>
<span class="token function">cp</span> zoo_sample.cfg zoo.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>配置详见 zoo.cfg</p></blockquote><h2 id="_5-启动关闭脚本" tabindex="-1"><a class="header-anchor" href="#_5-启动关闭脚本" aria-hidden="true">#</a> 5.启动关闭脚本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#启动</span>
zkServer.sh start
<span class="token comment">#查看状态</span>
zkServer.sh status
<span class="token comment">#停止</span>
zkServer.sh stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),r=[d];function l(c,o){return a(),s("div",null,r)}const p=e(i,[["render",l],["__file","zookeeper.html.vue"]]);export{p as default};
