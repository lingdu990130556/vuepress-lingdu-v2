import{_ as s,o as n,c as a,f as e}from"./app-48a6e080.js";const t={},p=e(`<h1 id="seata" tabindex="-1"><a class="header-anchor" href="#seata" aria-hidden="true">#</a> seata</h1><h2 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> 1.下载</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 官网地址</span>
http://seata.io/zh-cn/docs/user/configurations.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-解压" tabindex="-1"><a class="header-anchor" href="#_2-解压" aria-hidden="true">#</a> 2.解压</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压</span>
<span class="token function">unzip</span> seata-server-1.4.0.zip
<span class="token comment"># 进入seata目录</span>
<span class="token builtin class-name">cd</span> seata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-在seata目录下新建config-txt文件-第一次使用需要此文件初始化配置到nacos中" tabindex="-1"><a class="header-anchor" href="#_3-在seata目录下新建config-txt文件-第一次使用需要此文件初始化配置到nacos中" aria-hidden="true">#</a> 3.在seata目录下新建config.txt文件(第一次使用需要此文件初始化配置到nacos中)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@sizx153 seata<span class="token punctuation">]</span><span class="token comment"># vim config.txt</span>
<span class="token punctuation">[</span>root@sjzx153 seata<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="config-txt" tabindex="-1"><a class="header-anchor" href="#config-txt" aria-hidden="true">#</a> config.txt</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ervice.vgroupMapping.jsxy-system-group<span class="token operator">=</span>default
service.vgroupMapping.sjzx-dimensiondoor-group<span class="token operator">=</span>default
<span class="token assign-left variable">store.mode</span><span class="token operator">=</span>db
<span class="token assign-left variable">store.db.datasource</span><span class="token operator">=</span>druid
<span class="token assign-left variable">store.db.dbType</span><span class="token operator">=</span>mysql
<span class="token assign-left variable">store.db.driverClassName</span><span class="token operator">=</span>com.mysql.jdbc.Driver
<span class="token assign-left variable">store.db.url</span><span class="token operator">=</span>jdbc:mysql://192.168.0.151:3306/seata?useUnicode<span class="token operator">=</span>true
<span class="token assign-left variable">store.db.user</span><span class="token operator">=</span>root
<span class="token assign-left variable">store.db.password</span><span class="token operator">=</span>root
<span class="token assign-left variable">store.db.minConn</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">store.db.maxConn</span><span class="token operator">=</span><span class="token number">30</span>
<span class="token assign-left variable">store.db.globalTable</span><span class="token operator">=</span>global_table
<span class="token assign-left variable">store.db.branchTable</span><span class="token operator">=</span>branch_table
<span class="token assign-left variable">store.db.queryLimit</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable">store.db.lockTable</span><span class="token operator">=</span>lock_table
<span class="token assign-left variable">store.db.maxWait</span><span class="token operator">=</span><span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-到conf目录下修改registry-conf文件" tabindex="-1"><a class="header-anchor" href="#_4-到conf目录下修改registry-conf文件" aria-hidden="true">#</a> 4.到conf目录下修改registry.conf文件</h2><h3 id="注意-在这之前先在nacos中新建一个命名空间-seata" tabindex="-1"><a class="header-anchor" href="#注意-在这之前先在nacos中新建一个命名空间-seata" aria-hidden="true">#</a> 注意，在这之前先在nacos中新建一个命名空间 SEATA</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>registry <span class="token punctuation">{</span>
  <span class="token comment"># file 、nacos 、eureka、redis、zk、consul、etcd3、sofa</span>
  <span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;nacos&quot;</span>
  loadBalance <span class="token operator">=</span> <span class="token string">&quot;RandomLoadBalance&quot;</span>
  loadBalanceVirtualNodes <span class="token operator">=</span> <span class="token number">10</span>

  nacos <span class="token punctuation">{</span>
    application <span class="token operator">=</span> <span class="token string">&quot;seata-server&quot;</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;192.168.0.153:8848,192.168.0.152:8848,192.168.0.151:8848&quot;</span>
    group <span class="token operator">=</span> <span class="token string">&quot;SEATA_GROUP&quot;</span>
    namespace <span class="token operator">=</span> <span class="token string">&quot;SEATA&quot;</span>
    cluster <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>
    username <span class="token operator">=</span> <span class="token string">&quot;nacos&quot;</span>
    password <span class="token operator">=</span> <span class="token string">&quot;nacos&quot;</span>
  <span class="token punctuation">}</span>
  eureka <span class="token punctuation">{</span>
    serviceUrl <span class="token operator">=</span> <span class="token string">&quot;http://localhost:8761/eureka&quot;</span>
    application <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>
    weight <span class="token operator">=</span> <span class="token string">&quot;1&quot;</span>
  <span class="token punctuation">}</span>
  redis <span class="token punctuation">{</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;localhost:6379&quot;</span>
    db <span class="token operator">=</span> <span class="token number">0</span>
    password <span class="token operator">=</span> <span class="token string">&quot;redis&quot;</span>
    cluster <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>
    <span class="token function">timeout</span> <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
  zk <span class="token punctuation">{</span>
    cluster <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:2181&quot;</span>
    sessionTimeout <span class="token operator">=</span> <span class="token number">6000</span>
    connectTimeout <span class="token operator">=</span> <span class="token number">2000</span>
    username <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    password <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span>
  consul <span class="token punctuation">{</span>
    cluster <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:8500&quot;</span>
  <span class="token punctuation">}</span>
  etcd3 <span class="token punctuation">{</span>
    cluster <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;http://localhost:2379&quot;</span>
  <span class="token punctuation">}</span>
  sofa <span class="token punctuation">{</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:9603&quot;</span>
    application <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>
    region <span class="token operator">=</span> <span class="token string">&quot;DEFAULT_ZONE&quot;</span>
    datacenter <span class="token operator">=</span> <span class="token string">&quot;DefaultDataCenter&quot;</span>
    cluster <span class="token operator">=</span> <span class="token string">&quot;default&quot;</span>
    group <span class="token operator">=</span> <span class="token string">&quot;SEATA_GROUP&quot;</span>
    addressWaitTime <span class="token operator">=</span> <span class="token string">&quot;3000&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token function">file</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;file.conf&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

config <span class="token punctuation">{</span>
  <span class="token comment"># file、nacos 、apollo、zk、consul、etcd3</span>
  <span class="token builtin class-name">type</span> <span class="token operator">=</span> <span class="token string">&quot;nacos&quot;</span>

  nacos <span class="token punctuation">{</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;192.168.0.153:8848,192.168.0.152:8848,192.168.0.151:8848&quot;</span>
    namespace <span class="token operator">=</span> <span class="token string">&quot;SEATA&quot;</span>
    group <span class="token operator">=</span> <span class="token string">&quot;SEATA_GROUP&quot;</span>
    username <span class="token operator">=</span> <span class="token string">&quot;nacos&quot;</span>
    password <span class="token operator">=</span> <span class="token string">&quot;nacos&quot;</span>
  <span class="token punctuation">}</span>
  consul <span class="token punctuation">{</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:8500&quot;</span>
  <span class="token punctuation">}</span>
  apollo <span class="token punctuation">{</span>
    appId <span class="token operator">=</span> <span class="token string">&quot;seata-server&quot;</span>
    apolloMeta <span class="token operator">=</span> <span class="token string">&quot;http://192.168.1.204:8801&quot;</span>
    namespace <span class="token operator">=</span> <span class="token string">&quot;application&quot;</span>
    apolloAccesskeySecret <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span>
  zk <span class="token punctuation">{</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;127.0.0.1:2181&quot;</span>
    sessionTimeout <span class="token operator">=</span> <span class="token number">6000</span>
    connectTimeout <span class="token operator">=</span> <span class="token number">2000</span>
    username <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    password <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span>
  etcd3 <span class="token punctuation">{</span>
    serverAddr <span class="token operator">=</span> <span class="token string">&quot;http://localhost:2379&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token function">file</span> <span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token string">&quot;file.conf&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-在conf文件夹下新建nacos-config-sh文件" tabindex="-1"><a class="header-anchor" href="#_5-在conf文件夹下新建nacos-config-sh文件" aria-hidden="true">#</a> 5.在conf文件夹下新建nacos-config.sh文件</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env bash</span>
<span class="token comment"># Copyright 1999-2019 Seata.io Group.</span>
<span class="token comment">#</span>
<span class="token comment"># Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span>
<span class="token comment"># you may not use this file except in compliance with the License.</span>
<span class="token comment"># You may obtain a copy of the License at、</span>
<span class="token comment">#</span>
<span class="token comment">#      http://www.apache.org/licenses/LICENSE-2.0</span>
<span class="token comment">#</span>
<span class="token comment"># Unless required by applicable law or agreed to in writing, software</span>
<span class="token comment"># distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span>
<span class="token comment"># WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span>
<span class="token comment"># See the License for the specific language governing permissions and</span>
<span class="token comment"># limitations under the License.</span>

<span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> <span class="token string">&quot;:h:p:g:t:u:w:&quot;</span> opt
<span class="token keyword">do</span>
  <span class="token keyword">case</span> <span class="token variable">$opt</span> <span class="token keyword">in</span>
  h<span class="token punctuation">)</span>
    <span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  p<span class="token punctuation">)</span>
    <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  g<span class="token punctuation">)</span>
    <span class="token assign-left variable">group</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  t<span class="token punctuation">)</span>
    <span class="token assign-left variable">tenant</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  u<span class="token punctuation">)</span>
    <span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  w<span class="token punctuation">)</span>
    <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token variable">$OPTARG</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  ?<span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot; USAGE OPTION: <span class="token variable">$0</span> [-h host] [-p port] [-g group] [-t tenant] [-u username] [-w password] &quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
<span class="token keyword">done</span>

<span class="token function-name function">urlencode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> \${#<span class="token number">1</span>}<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">))</span></span>
  <span class="token keyword">do</span>
    <span class="token assign-left variable">char</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${1<span class="token operator">:</span>$i<span class="token operator">:</span>1}</span>&quot;</span>
    <span class="token keyword">case</span> <span class="token variable">$char</span> <span class="token keyword">in</span>
    <span class="token punctuation">[</span>a-zA-Z0-9.~_-<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token builtin class-name">printf</span> <span class="token variable">$char</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span> <span class="token builtin class-name">printf</span> <span class="token string">&#39;%%%02X&#39;</span> <span class="token string">&quot;&#39;<span class="token variable">$char</span>&quot;</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
  <span class="token keyword">done</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${host}</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">host</span><span class="token operator">=</span>localhost
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${port}</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">8848</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${group}</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">group</span><span class="token operator">=</span><span class="token string">&quot;SEATA_GROUP&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${tenant}</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">tenant</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${username}</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">\${password}</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">nacosAddr</span><span class="token operator">=</span><span class="token variable">$host</span><span class="token builtin class-name">:</span><span class="token variable">$port</span>
<span class="token assign-left variable">contentType</span><span class="token operator">=</span><span class="token string">&quot;content-type:application/json;charset=UTF-8&quot;</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;set nacosAddr=<span class="token variable">$nacosAddr</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;set group=<span class="token variable">$group</span>&quot;</span>

<span class="token assign-left variable">failCount</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">tempLog</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp <span class="token parameter variable">-u</span><span class="token variable">)</span></span>
<span class="token keyword">function</span> <span class="token function-name function">addConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-H</span> <span class="token string">&quot;<span class="token variable">\${contentType}</span>&quot;</span> <span class="token string">&quot;http://<span class="token variable">$nacosAddr</span>/nacos/v1/cs/configs?dataId=<span class="token variable"><span class="token variable">$(</span>urlencode $1<span class="token variable">)</span></span>&amp;group=<span class="token variable">$group</span>&amp;content=<span class="token variable"><span class="token variable">$(</span>urlencode $2<span class="token variable">)</span></span>&amp;tenant=<span class="token variable">$tenant</span>&amp;username=<span class="token variable">$username</span>&amp;password=<span class="token variable">$password</span>&quot;</span> <span class="token operator">&gt;</span><span class="token string">&quot;<span class="token variable">\${tempLog}</span>&quot;</span> <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> <span class="token string">&quot;<span class="token variable">\${tempLog}</span>&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot; Please check the cluster status. &quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> <span class="token string">&quot;<span class="token variable">\${tempLog}</span>&quot;</span><span class="token variable">)</span></span> <span class="token operator">=~</span> <span class="token string">&quot;true&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Set <span class="token variable">$1</span>=<span class="token variable">$2</span> successfully &quot;</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Set <span class="token variable">$1</span>=<span class="token variable">$2</span> failure &quot;</span>
    <span class="token variable"><span class="token punctuation">((</span> failCount<span class="token operator">++</span> <span class="token punctuation">))</span></span>
  <span class="token keyword">fi</span>
<span class="token punctuation">}</span>

<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">line</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> <span class="token punctuation">$(</span>dirname <span class="token string">&quot;<span class="token environment constant">$PWD</span>&quot;</span><span class="token punctuation">)</span>/config.txt <span class="token operator">|</span> <span class="token function">sed</span> s/<span class="token punctuation">[</span><span class="token punctuation">[</span>:space:<span class="token punctuation">]</span><span class="token punctuation">]</span>//g<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token variable"><span class="token punctuation">((</span> count<span class="token operator">++</span> <span class="token punctuation">))</span></span>
	<span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token variable">\${line<span class="token operator">%%</span>=*}</span>
    <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable">\${line<span class="token operator">#</span>*=}</span>
	addConfig <span class="token string">&quot;<span class="token variable">\${key}</span>&quot;</span> <span class="token string">&quot;<span class="token variable">\${value}</span>&quot;</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;=========================================================================&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot; Complete initialization parameters,  total-count:<span class="token variable">$count</span> ,  failure-count:<span class="token variable">$failCount</span> &quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;=========================================================================&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">\${failCount}</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot; Init nacos config finished, please start seata-server. &quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot; init nacos config fail. &quot;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-执行nacos-config-sh脚本将配置写到nacos" tabindex="-1"><a class="header-anchor" href="#_6-执行nacos-config-sh脚本将配置写到nacos" aria-hidden="true">#</a> 6.执行nacos-config.sh脚本将配置写到nacos</h2><h4 id="先使用chmod-x-nacos-config-sh-命令使其可执行" tabindex="-1"><a class="header-anchor" href="#先使用chmod-x-nacos-config-sh-命令使其可执行" aria-hidden="true">#</a> 先使用chmod +x nacos-config.sh 命令使其可执行</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nacos-config.sh <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.0.153 <span class="token parameter variable">-p</span> <span class="token number">8848</span> <span class="token parameter variable">-g</span> SEATA_GROUP <span class="token parameter variable">-t</span> SEATA <span class="token parameter variable">-u</span> nacos <span class="token parameter variable">-w</span> nacos

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="注-命令解析-h-p-指定nacos的端口地址-g-指定配置的分组-注意-是配置的分组-t-指定命名空间id-u-w指定nacos的用户名和密码-同样-这里开启了nacos注册和配置认证的才需要指定。" tabindex="-1"><a class="header-anchor" href="#注-命令解析-h-p-指定nacos的端口地址-g-指定配置的分组-注意-是配置的分组-t-指定命名空间id-u-w指定nacos的用户名和密码-同样-这里开启了nacos注册和配置认证的才需要指定。" aria-hidden="true">#</a> 注：命令解析：-h -p 指定nacos的端口地址；-g 指定配置的分组，注意，是配置的分组；-t 指定命名空间id； -u -w指定nacos的用户名和密码，同样，这里开启了nacos注册和配置认证的才需要指定。</h5><h2 id="_7-到bin目录下启动seata服务" tabindex="-1"><a class="header-anchor" href="#_7-到bin目录下启动seata服务" aria-hidden="true">#</a> 7.到bin目录下启动seata服务</h2><p>后台启动命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">nohup</span> <span class="token function">sh</span> seata-server.sh <span class="token parameter variable">-h</span> <span class="token number">11.141</span>.230.153 <span class="token parameter variable">-p</span> <span class="token number">8091</span> <span class="token operator">&gt;</span> ./seata.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注：-h为服务器ip,不设置可能会默认使用局域网ip导致其他应用访问不到。-p为端口</p><h2 id="_8-客户端应用程序中seata配置" tabindex="-1"><a class="header-anchor" href="#_8-客户端应用程序中seata配置" aria-hidden="true">#</a> 8.客户端应用程序中seata配置</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># seata配置</span>
<span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token comment"># 默认关闭，如需启用spring.datasource.dynami.seata需要同时开启</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># Seata 应用编号，默认为 \${spring.application.name}</span>
  <span class="token key atrule">application-id</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span>
  <span class="token comment"># Seata 事务组编号，用于 TC 集群名</span>
  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span><span class="token punctuation">-</span>group
  <span class="token comment"># 关闭自动代理</span>
  <span class="token key atrule">enable-auto-data-source-proxy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># 服务配置项</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token comment"># 虚拟组和分组的映射</span>
    <span class="token key atrule">vgroup-mapping</span><span class="token punctuation">:</span>
      <span class="token key atrule">jsxy-system-group</span><span class="token punctuation">:</span> default
    <span class="token comment"># 分组和 Seata 服务的映射</span>
    <span class="token comment"># grouplist:</span>
    <span class="token comment">#   default: 11.141.230.153:8091</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> nacos
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">serverAddr</span><span class="token punctuation">:</span> 192.168.0.151<span class="token punctuation">:</span><span class="token number">8848</span><span class="token punctuation">,</span>192.168.0.152<span class="token punctuation">:</span><span class="token number">8848</span><span class="token punctuation">,</span>192.168.0.153<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">group</span><span class="token punctuation">:</span> SEATA_GROUP
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> SEATA
      <span class="token key atrule">username</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">password</span><span class="token punctuation">:</span> nacos
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> nacos
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">application</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 192.168.0.151<span class="token punctuation">:</span><span class="token number">8848</span><span class="token punctuation">,</span>192.168.0.152<span class="token punctuation">:</span><span class="token number">8848</span><span class="token punctuation">,</span>192.168.0.153<span class="token punctuation">:</span><span class="token number">8848</span>
      <span class="token key atrule">group</span><span class="token punctuation">:</span> SEATA_GROUP
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> SEATA
      <span class="token key atrule">username</span><span class="token punctuation">:</span> nacos
      <span class="token key atrule">password</span><span class="token punctuation">:</span> nacos
      <span class="token comment"># 可选  默认</span>
      <span class="token key atrule">cluster</span><span class="token punctuation">:</span> default 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[p];function l(i,c){return n(),a("div",null,o)}const u=s(t,[["render",l],["__file","index.html.vue"]]);export{u as default};
