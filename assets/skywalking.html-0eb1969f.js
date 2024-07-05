import{_ as n,o as s,c as a,d as e}from"./app-ac465cee.js";const i={},l=e(`<h1 id="链路追踪" tabindex="-1"><a class="header-anchor" href="#链路追踪" aria-hidden="true">#</a> 链路追踪</h1><hr><h2 id="_1-解压" tabindex="-1"><a class="header-anchor" href="#_1-解压" aria-hidden="true">#</a> 1.解压</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apache-skywalking-apm-8.3.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-修改端口" tabindex="-1"><a class="header-anchor" href="#_2-修改端口" aria-hidden="true">#</a> 2.修改端口</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> apache-skywalking-apm-bin/webapp/
<span class="token function">vim</span> webapp.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如下</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Licensed to the Apache Software Foundation (ASF) under one</span>
<span class="token comment"># or more contributor license agreements.  See the NOTICE file</span>
<span class="token comment"># distributed with this work for additional information</span>
<span class="token comment"># regarding copyright ownership.  The ASF licenses this file</span>
<span class="token comment"># to you under the Apache License, Version 2.0 (the</span>
<span class="token comment"># &quot;License&quot;); you may not use this file except in compliance</span>
<span class="token comment"># with the License.  You may obtain a copy of the License at</span>
<span class="token comment">#</span>
<span class="token comment">#     http://www.apache.org/licenses/LICENSE-2.0</span>
<span class="token comment">#</span>
<span class="token comment"># Unless required by applicable law or agreed to in writing, software</span>
<span class="token comment"># distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span>
<span class="token comment"># WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span>
<span class="token comment"># See the License for the specific language governing permissions and</span>
<span class="token comment"># limitations under the License.</span>

<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8090</span> <span class="token comment"># 默认8080 修改为8090</span>

<span class="token key atrule">collector</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> /graphql
  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
    <span class="token key atrule">ReadTimeout</span><span class="token punctuation">:</span> <span class="token number">10000</span>
    <span class="token comment"># Point to all backend&#39;s restHost:restPort, split by ,</span>
    <span class="token key atrule">listOfServers</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">12800</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-启动" tabindex="-1"><a class="header-anchor" href="#_3-启动" aria-hidden="true">#</a> 3.启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> apache-skywalking-apm-bin/bin/
./startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-停止" tabindex="-1"><a class="header-anchor" href="#_4-停止" aria-hidden="true">#</a> 4.停止</h2><p>新建脚本文件</p><p>shutdown.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># !/bin/bash</span>
<span class="token comment"># cription: kill process by port</span>
<span class="token comment"># Usage:       killport port</span>
<span class="token comment"># example:     killport 8080</span>
<span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">netstat</span> <span class="token parameter variable">-tlnp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">8090</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $7}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;/&#39;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>

<span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">netstat</span> <span class="token parameter variable">-tlnp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">11800</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $7}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;/&#39;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">\`</span></span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>赋可执行权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x shutdown.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行脚本 停止服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./shutdown.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-复制探针文件夹到项目运行目录下" tabindex="-1"><a class="header-anchor" href="#_5-复制探针文件夹到项目运行目录下" aria-hidden="true">#</a> 5.复制探针文件夹到项目运行目录下</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-r</span> /data/zhfxx/utils/apache-skywalking-apm-bin/agent/ /data/zhfxx/jar/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-启动项目" tabindex="-1"><a class="header-anchor" href="#_6-启动项目" aria-hidden="true">#</a> 6.启动项目</h2><p>修改项目启动脚本为探针方式启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重启当前文件夹下所有jar服务</span>

<span class="token comment"># 判断是不是目录</span>
<span class="token keyword">function</span> <span class="token function-name function">getDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment"># shellcheck disable=SC2045</span>
  <span class="token keyword">for</span> <span class="token for-or-select variable">item</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span><span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">fileName</span><span class="token operator">=</span><span class="token variable">$1</span><span class="token string">&quot;/&quot;</span><span class="token variable">$item</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;<span class="token variable">$fileName</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$fileName</span>&quot;</span>&quot;是目录<span class="token string">&quot;
    else
      echo &quot;</span><span class="token variable">$fileName</span><span class="token string">&quot;&quot;</span>不是目录<span class="token string">&quot;
      echoFile &quot;</span><span class="token variable">$fileName</span><span class="token string">&quot; &quot;</span><span class="token variable">$2</span><span class="token string">&quot;
    fi
  done
}

# 判断是不是jar文件
function echoFile() {
  fileName=<span class="token variable">$1</span>
  echo &quot;</span><span class="token variable">\${fileName<span class="token operator">##</span>*.}</span>&quot;
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token string">&quot;<span class="token variable">\${fileName<span class="token operator">##</span>*.}</span>&quot;</span> <span class="token operator">=</span> jar <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>&quot;不是jar包 跳过 <span class="token string">&quot;
  else
    echo <span class="token variable">$1</span>&quot;</span>是jar包 开始启动。。。<span class="token string">&quot;
    name=<span class="token variable">\${fileName<span class="token operator">##</span>*<span class="token operator">/</span>}</span>
    echo &quot;</span>正则后的：<span class="token string">&quot;<span class="token variable">$name</span>
    # 先停止
    stopJar &quot;</span><span class="token variable">$name</span><span class="token string">&quot;

    if [ <span class="token variable">$2</span> = start ]; then
      # 再启动
      startJar &quot;</span><span class="token variable">$name</span><span class="token string">&quot;
    fi

  fi
}

# 停止
function stopJar() {
  name=<span class="token variable">$1</span>
  # shellcheck disable=SC2046
  # shellcheck disable=SC2009
  kill -9 <span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token variable">\${name}</span>&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span><span class="token variable">)</span></span>
  echo &quot;</span>停止<span class="token string">&quot;&quot;</span><span class="token variable">$name</span><span class="token string">&quot;
}
# 启动
function startJar() {
  name=<span class="token variable">$1</span>
  # nohup java -Xms2048m -Xmx4096m -jar &quot;</span><span class="token variable">\${name}</span><span class="token string">&quot; &gt;temp.log 2&gt;&amp;1 &amp;

  # 链路追踪探针方式启动
  nohup java -javaagent:agent/skywalking-agent.jar=agent.service_name=管理中心-<span class="token variable">\${name}</span>,collector.backend_service=11.141.230.153:11800 -Xms4096m -Xmx4096m -jar &quot;</span><span class="token variable">\${name}</span><span class="token string">&quot; &gt;temp.log 2&gt;&amp;1 &amp;

  echo &quot;</span>启动<span class="token string">&quot;&quot;</span><span class="token variable">$name</span><span class="token string">&quot;
}

#在当前目录下查找sh脚本

#for name in <span class="token variable"><span class="token variable">\`</span><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> *.sh<span class="token variable">\`</span></span>
#do
#    echo &quot;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token variable">$name</span><span class="token string">&quot;
#    if [ &quot;</span><span class="token variable">\${name<span class="token operator">##</span>*.}</span>&quot;x <span class="token operator">=</span> <span class="token string">&quot;sh&quot;</span>x <span class="token punctuation">]</span>
<span class="token comment">#    then</span>
<span class="token comment">#    echo &quot;是脚本&quot;</span>
<span class="token comment">#    fi</span>
<span class="token comment">#done</span>

<span class="token comment"># 当前文件夹</span>
<span class="token assign-left variable">dir</span><span class="token operator">=</span>./
getDir <span class="token variable">$dir</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),t=[l];function p(o,c){return s(),a("div",null,t)}const d=n(i,[["render",p],["__file","skywalking.html.vue"]]);export{d as default};
