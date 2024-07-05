import{_ as s,o as n,c as e,d as a}from"./app-ac465cee.js";const i={},d=a(`<h1 id="安装-启动" tabindex="-1"><a class="header-anchor" href="#安装-启动" aria-hidden="true">#</a> 安装&amp;启动</h1><h2 id="安装gcc" tabindex="-1"><a class="header-anchor" href="#安装gcc" aria-hidden="true">#</a> 安装GCC</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span>  gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="编译安装-进入redis目录下执行" tabindex="-1"><a class="header-anchor" href="#编译安装-进入redis目录下执行" aria-hidden="true">#</a> 编译安装，进入redis目录下执行</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 编译</span>
<span class="token function">make</span>
<span class="token comment"># 安装</span>
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将redis文件夹中的redis.conf文件复制一份到/usr/local/bin下，方便运行redis服务端 进入/usr/local/bin，</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>.将myredis.conf中的daemonize设置为yes（默认为no），redis就将会在后台运行  
<span class="token number">2</span>.将bind <span class="token number">127.0</span>.0.1 或是 <span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1 -::1 注释掉。此处 表示允许连接该Redis实例的地址。默认是只允许本地连接，注释后表示允许外网访问。
<span class="token number">3</span>.requirepass foobared 此处表示登录该Redis示例所需要的密码
<span class="token number">4</span>.protected-mode  此处表示是否开启保护模式，（默认为yes<span class="token punctuation">[</span>开启<span class="token punctuation">]</span>）设置成no，表示关闭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
./redis-server redis.conf
<span class="token comment"># 后台启动</span>
./redis-server redis.conf <span class="token operator">&amp;</span>
<span class="token comment"># 进入客户端</span>
./redis-cli <span class="token parameter variable">-p</span> <span class="token number">6379</span>
<span class="token comment"># 进入客户端后验证身份</span>
auth 密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[d];function r(l,t){return n(),e("div",null,c)}const p=s(i,[["render",r],["__file","redis.html.vue"]]);export{p as default};
