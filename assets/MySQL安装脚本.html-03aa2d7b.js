import{_ as i,r as t,o,c,f as s,h as n,a,d as p}from"./app-ac465cee.js";const r="/vuepress-lingdu-v2/assets/img-031926c8.png",u="/vuepress-lingdu-v2/assets/img_1-caea975e.png",k="/vuepress-lingdu-v2/assets/img_2-51169600.png",d="/vuepress-lingdu-v2/assets/img_3-092bbec6.png",v="/vuepress-lingdu-v2/assets/img_4-dac88e00.png",m="/vuepress-lingdu-v2/assets/img_5-74530e4c.png",b="/vuepress-lingdu-v2/assets/img_6-d2606186.png",g={},q=s("h1",{id:"mysql安装脚本",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mysql安装脚本","aria-hidden":"true"},"#"),n(" MySQL安装脚本")],-1),y=s("h2",{id:"说明",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#说明","aria-hidden":"true"},"#"),n(" 说明")],-1),h={href:"https://blog.csdn.net/WYA1993/article/details/88890883",target:"_blank",rel:"noopener noreferrer"},w=p(`<p>结合自己在网上搜索的一些资料整合的一套安装mysql并设置root密码和数据库远程连接密码的脚本</p><div class="hint-container tip"><p class="hint-container-title">由于时间久远，最近安装会出现异常可执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">--import</span> https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>部分脚本代码展示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#测试脚本</span>
<span class="token comment">#输出logo</span>
./lingdulogo0.sh<span class="token punctuation">;</span>
<span class="token comment">#检测是否已安装mysql</span>
<span class="token function">service</span> mysqld start
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;已安装mysql&quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;检测到系统已安装mysql!请先卸载！&quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;未安装mysql&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>
<span class="token comment">#./lingdulogo1.sh;</span>
<span class="token comment">#./lingdulogo2.sh;</span>
<span class="token comment">#./lingdulogo3.sh;</span>
<span class="token comment">#./lingdulogo4.sh;</span>
<span class="token comment">#./lingdulogo5.sh;</span>
<span class="token comment">#./lingdulogo6.sh;</span>

<span class="token comment">#安装wget</span>
<span class="token comment">#引入配置</span>
<span class="token builtin class-name">source</span> ./configuration.sh<span class="token punctuation">;</span>
<span class="token comment">#获取文件下载路径</span>
<span class="token assign-left variable">DownLoad</span><span class="token operator">=</span><span class="token variable">$download</span><span class="token punctuation">;</span>

<span class="token comment">#创建下载路径文件夹</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">\${DownLoad}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token keyword">while</span> <span class="token builtin class-name">:</span><span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token assign-left variable">delete</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;检测到文件夹<span class="token variable">\${DownLoad}</span>已存在！是否重新创建文件夹：[y/n]&quot;</span> delete
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${delete}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;y&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">rm</span> <span class="token parameter variable">-rf</span> $<span class="token punctuation">{</span>DownLoad<span class="token punctuation">}</span><span class="token variable">\`</span></span><span class="token punctuation">;</span>
	<span class="token builtin class-name">break</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${delete}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;n&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	    <span class="token builtin class-name">echo</span> <span class="token string">&quot;将使用已有的文件夹<span class="token variable">\${DownLoad}</span>存放下载文件&quot;</span><span class="token punctuation">;</span>
	    <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
	    <span class="token builtin class-name">echo</span> <span class="token string">&quot;指令错误！&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
 <span class="token keyword">done</span>
<span class="token keyword">fi</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${DownLoad}</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;创建文件夹<span class="token variable">\${DownLoad}</span>失败&quot;</span><span class="token punctuation">;</span>
 <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;创建文件夹<span class="token variable">\${DownLoad}</span>成功&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>

<span class="token comment">#下载mysql资源包</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;正在下载mysql资源包...&quot;</span><span class="token punctuation">;</span>
<span class="token function">wget</span> <span class="token parameter variable">-P</span> <span class="token variable">\${DownLoad}</span> https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;下载失败。正在尝试自动安装wget...&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">#安装wget</span>
    yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">wget</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装失败.请尝试手动安装 执行：yum -y install wget&quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">#非正常结束脚本</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装wget成功。正在进行下一步操作...&quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;正在下载mysql资源包...&quot;</span><span class="token punctuation">;</span>
	<span class="token function">wget</span> <span class="token parameter variable">-P</span> <span class="token variable">\${DownLoad}</span>  https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	 <span class="token builtin class-name">echo</span> <span class="token string">&quot;下载mysql资源包成功&quot;</span><span class="token punctuation">;</span>
	<span class="token keyword">else</span>
	 <span class="token builtin class-name">echo</span> <span class="token string">&quot;下载mysql资源包失败&quot;</span><span class="token punctuation">;</span>
	 <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">fi</span>
    <span class="token keyword">fi</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;下载mysql资源包成功&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;正在在线安装mysql安装源...&quot;</span><span class="token punctuation">;</span>
yum <span class="token parameter variable">-y</span> localinstall <span class="token variable">\${DownLoad}</span>/mysql57-community-release-el7-11.noarch.rpm<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装mysql安装源失败！&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;安装源安装成功&quot;</span><span class="token punctuation">;</span>
    <span class="token comment">#在线安装mysql</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;正在在线安装MySQL。。。&quot;</span><span class="token punctuation">;</span>
    yum <span class="token parameter variable">-y</span> <span class="token function">install</span> mysql-community-server<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;在线安装MySQL完成&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;在线安装MySQL失败&quot;</span><span class="token punctuation">;</span>
     <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;正在启动mysql...&quot;</span><span class="token punctuation">;</span>
systemctl start mysqld<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;启动成功！正在设置开机自启。。。&quot;</span><span class="token punctuation">;</span>
	systemctl <span class="token builtin class-name">enable</span> mysqld<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		systemctl daemon-reload<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
			<span class="token builtin class-name">echo</span> <span class="token string">&quot;设置成功！&quot;</span><span class="token punctuation">;</span>
			<span class="token builtin class-name">echo</span> <span class="token string">&quot;更改数据库密码和远程连接密码...&quot;</span><span class="token punctuation">;</span>
			./reset_mysql_root_password.sh<span class="token punctuation">;</span><span class="token comment">#更改数据库密码和远程连接密码</span>
			<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
				<span class="token builtin class-name">echo</span> <span class="token string">&quot;更改密码成功。&quot;</span><span class="token punctuation">;</span>
				<span class="token builtin class-name">echo</span> <span class="token string">&quot;正在开放3306端口。。。&quot;</span><span class="token punctuation">;</span>
				firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3306</span>/tcp --permanent<span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
					firewall-cmd --reload<span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
						<span class="token builtin class-name">echo</span> <span class="token string">&quot;开放成功！&quot;</span><span class="token punctuation">;</span>
						<span class="token builtin class-name">exit</span> <span class="token number">0</span><span class="token punctuation">;</span>
					<span class="token keyword">fi</span>
				<span class="token keyword">fi</span>
			<span class="token keyword">fi</span>
		<span class="token keyword">fi</span>
	<span class="token keyword">fi</span>
<span class="token keyword">fi</span>
<span class="token comment">#如果没从if判断里面结束则运行不完全</span>
<span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),f={href:"https://download.csdn.net/download/lingdu_dou/12595144",target:"_blank",rel:"noopener noreferrer"},_={href:"https://pan.baidu.com/s/1HkiG8EaM1ECAi9hZm3ug2A",target:"_blank",rel:"noopener noreferrer"},$=s("p",null,"提取码：ling",-1),D=s("figure",null,[s("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),L=s("h2",{id:"演示",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#演示","aria-hidden":"true"},"#"),n(" 演示")],-1),B=s("p",null,"一键执行很方便",-1),E=s("p",null,"视频演示",-1),x=p('<p>CentOS7一键安装mysql5.7脚本演示</p><p>./init.sh开始执行 <img src="'+d+'" alt="" loading="lazy"></p><p>设置mysql密码成功 <img src="'+v+'" alt="" loading="lazy"></p><p>再次执行会提示已安装 <img src="'+m+'" alt="" loading="lazy"></p><p>远程连接成功 <img src="'+b+`" alt="" loading="lazy"></p><h2 id="重置密码" tabindex="-1"><a class="header-anchor" href="#重置密码" aria-hidden="true">#</a> 重置密码</h2><p>可以复制下面的代码到.sh文件中执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token comment"># Check if user is root</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span> <span class="token operator">!=</span> <span class="token string">&quot;0&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;must root&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;+-------------------------------------------------------------------+&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;|                                                                   |&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;|                      重置 MySQL root 密码                         |&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;|                                                                   |&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;+-------------------------------------------------------------------+&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;正在尝试启动mysql...&quot;</span><span class="token punctuation">;</span>
<span class="token function">service</span> mysqld start<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">DB_Name</span><span class="token operator">=</span><span class="token string">&quot;mysql&quot;</span>
    <span class="token assign-left variable">DB_Version</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span>mysql <span class="token parameter variable">--help</span> <span class="token operator">|</span><span class="token function">grep</span> Distrib<span class="token variable">\`</span></span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;MySQL not found!&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
 
<span class="token keyword">while</span> <span class="token builtin class-name">:</span><span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token assign-left variable">DB_Root_Password</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;[请输入数据库新密码]Enter New <span class="token variable">\${DB_Name}</span> root password: &quot;</span> DB_Root_Password
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${DB_Root_Password}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;[密码不能为空！]Error: Password can&#39;t be NULL!!&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">break</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token keyword">while</span> <span class="token builtin class-name">:</span><span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token assign-left variable">DB_yuancheng_Password</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入新的远连接数据库密码: &quot;</span> DB_yuancheng_Password
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${DB_yuancheng_Password}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;[密码不能为空！]Error: Password can&#39;t be NULL!!&quot;</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">break</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">&quot;停止运行 <span class="token variable">\${DB_Name}</span>...&quot;</span>
<span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">service</span> mysqld stop<span class="token variable">\`</span></span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;启动 <span class="token variable">\${DB_Name}</span> with skip grant tables&quot;</span>
<span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>skip-grant-tables&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/my.cnf<span class="token variable">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">service</span> mysqld start<span class="token variable">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;正在更新 <span class="token variable">\${DB_Name}</span> root 的密码...&quot;</span>
<span class="token comment">#if echo &quot;\${DB_Version}&quot; | grep -Eqi &#39;^8.0.|^5.7.|^10.[234].&#39;; then</span>
<span class="token keyword">if</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    mysql <span class="token parameter variable">-u</span> root <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
FLUSH PRIVILEGES;
ALTER USER &#39;root&#39;@&#39;localhost&#39; IDENTIFIED BY &#39;<span class="token variable">\${DB_Root_Password}</span>&#39;;
GRANT ALL PRIVILEGES ON *.* TO &#39;root&#39;@&#39;%&#39; IDENTIFIED BY &#39;<span class="token variable">\${DB_yuancheng_Password}</span>&#39; WITH GRANT OPTION;
EOF</span>
<span class="token comment">#暂时用不上</span>
<span class="token keyword">else</span>
    mysql <span class="token parameter variable">-u</span> root <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
update mysql.user set password = Password(&#39;<span class="token variable">\${DB_Root_Password}</span>&#39;) where User = &#39;root&#39;;
EOF</span>
<span class="token keyword">fi</span>
 
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;密码更新成功。现在关闭mysql服务。。。&quot;</span><span class="token punctuation">;</span>
    <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;$d&#39;</span> /etc/my.cnf<span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token comment">#删除最后一行</span>
    <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;$d&#39;</span> /etc/my.cnf<span class="token variable">\`</span></span><span class="token punctuation">;</span>
    <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token string">&quot;character_set_server=utf8&quot;</span> /etc/my.cnf<span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token comment">#匹配查找</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
     <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>character_set_server=utf8&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/my.cnf<span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token comment">#最后一行追加</span>
    <span class="token keyword">fi</span>
    <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">grep</span> <span class="token string">&quot;init_connect=&#39;SET NAMES utf8&#39;&quot;</span> /etc/my.cnf<span class="token variable">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-ne</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
     <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>init_connect=&#39;SET NAMES utf8&#39;&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/my.cnf<span class="token variable">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">fi</span>
    <span class="token keyword">if</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> <span class="token function">killall</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token function">killall</span> mysqld
    <span class="token keyword">else</span>
        <span class="token function">kill</span> <span class="token variable"><span class="token variable">\`</span>pidof mysqld<span class="token variable">\`</span></span>
    <span class="token keyword">fi</span>
    <span class="token function">sleep</span> <span class="token number">5</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;正在启动<span class="token variable">\${DB_Name}</span>。。。&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">service</span> mysqld start<span class="token variable">\`</span></span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;密码成功修改为： &#39;<span class="token variable">\${DB_Root_Password}</span>&#39;&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;远程连接数据库密码为：‘<span class="token variable">\${DB_yuancheng_Password}</span>’&quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;==================================&quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;|                  *             | &quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;|          **     * *            | &quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;|        *    *    *             | &quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;|   零   *    *   度             | &quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;|        *    *                  | &quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;|        *    *                  | &quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;|          **                    | &quot;</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;==================================&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">else</span>
    <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;$d&#39;</span> /etc/my.cnf<span class="token variable">\`</span></span><span class="token punctuation">;</span>
    <span class="token assign-left variable">lingdu</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;$d&#39;</span> /etc/my.cnf<span class="token variable">\`</span></span><span class="token punctuation">;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Reset <span class="token variable">\${DB_Name}</span> root password failed!&quot;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function N(P,S){const e=t("ExternalLinkIcon"),l=t("BiliBili");return o(),c("div",null,[q,y,s("p",null,[n("参照原博文"),s("a",h,[n("Centos7 安装和配置MySQL5.7"),a(e)])]),w,s("p",null,[n("脚本文件"),s("a",f,[n("CentOS7一键安装mysql5.7脚本文件"),a(e)])]),s("p",null,[n("链接： "),s("a",_,[n("https://pan.baidu.com/s/1HkiG8EaM1ECAi9hZm3ug2A"),a(e)])]),$,D,L,B,E,a(l,{bvid:"BV1PA411L7iD"}),x])}const M=i(g,[["render",N],["__file","MySQL安装脚本.html.vue"]]);export{M as default};
