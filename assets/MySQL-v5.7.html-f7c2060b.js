import{_ as s,o as n,c as a,d as e}from"./app-ac465cee.js";const l={},i=e(`<h1 id="mysql-v5-7" tabindex="-1"><a class="header-anchor" href="#mysql-v5-7" aria-hidden="true">#</a> mysql-v5.7</h1><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重启</span>
<span class="token function">service</span> mysqld restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 卸载</span>
<span class="token comment"># 查看系统是否带mariadb数据库</span>
yum list installed <span class="token operator">|</span><span class="token function">grep</span> mariadb

<span class="token comment"># 移除mariadb程序文件</span>
yum remove <span class="token parameter variable">-y</span> mariadb*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置时区-重要" tabindex="-1"><a class="header-anchor" href="#设置时区-重要" aria-hidden="true">#</a> 设置时区***重要</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> TIMEDIFF<span class="token punctuation">(</span><span class="token function">NOW</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> UTC_TIMESTAMP<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment"># 查看时区</span>
<span class="token comment"># 如果是中国标准时间, 会输出 08:00:00</span>

<span class="token keyword">set</span> <span class="token keyword">global</span> time_zone <span class="token operator">=</span> <span class="token string">&#39;+8:00&#39;</span><span class="token punctuation">;</span>  <span class="token comment"># 修改MySQL全局时区为北京时间，即我们所在的东8区</span>
<span class="token keyword">set</span> time_zone <span class="token operator">=</span> <span class="token string">&#39;+8:00&#39;</span><span class="token punctuation">;</span>  <span class="token comment"># 修改当前会话时区</span>
flush <span class="token keyword">privileges</span><span class="token punctuation">;</span>  <span class="token comment"># 立即生效</span>

<span class="token comment"># 如果项目已经启动则重启mysql或者重启项目生效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>

<span class="token comment"># 设置端口</span>
<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">10106</span>

log-bin<span class="token operator">=</span>resp_mysql
server-id<span class="token operator">=</span><span class="token number">1</span>
binlog-do-db<span class="token operator">=</span>sjzx-cloud
<span class="token comment">#</span>
<span class="token comment"># Remove leading # and set to the amount of RAM for the most important data</span>
<span class="token comment"># cache in MySQL. Start at 70% of total RAM for dedicated server, else 10%.</span>
<span class="token comment"># innodb_buffer_pool_size = 128M</span>
<span class="token comment">#</span>
<span class="token comment"># Remove leading # to turn on a very important data integrity option: logging</span>
<span class="token comment"># changes to the binary log between backups.</span>
<span class="token comment"># log_bin</span>
<span class="token comment">#</span>
<span class="token comment"># Remove leading # to set options mainly useful for reporting servers.</span>
<span class="token comment"># The server defaults are faster for transactions and fast SELECTs.</span>
<span class="token comment"># Adjust sizes as needed, experiment to find the optimal values.</span>
<span class="token comment"># join_buffer_size = 128M</span>
<span class="token comment"># sort_buffer_size = 2M</span>
<span class="token comment"># read_rnd_buffer_size = 2M</span>
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/var/lib/mysql
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/var/lib/mysql/mysql.sock

<span class="token comment"># Disabling symbolic-links is recommended to prevent assorted security risks</span>
symbolic-links<span class="token operator">=</span><span class="token number">0</span>

log-error<span class="token operator">=</span>/var/log/mysqld.log
pid-file<span class="token operator">=</span>/var/run/mysqld/mysqld.pid

<span class="token assign-left variable">character_set_server</span><span class="token operator">=</span>utf8

<span class="token assign-left variable">init_connect</span><span class="token operator">=</span><span class="token string">&#39;SET NAMES utf8&#39;</span>


<span class="token comment">#说明 0：区分大小写，1：不区分大小写</span>
<span class="token assign-left variable">lower_case_table_names</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment">#单次执行sql最大数据</span>
<span class="token assign-left variable">max_allowed_packet</span><span class="token operator">=</span>20M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>主要为第一个错误。导入数据包大于系统设置的 max_allowed_packet 大小。

还原的实例版本为 ：mysql <span class="token number">5.7</span>.13-log

默认 max_allowed_packet  大小为：4M

在 mysql 中，1个 sql 语句发送到 MySQL 服务器，1行数据发送到客户端，或者二进制日志从 master 发送到 slave ，这些都作为一个包，（mysql <span class="token number">5.7</span> 最大包为 1GB）。而我的备份脚本中，有的表字段类型为 longtext，其插入的值比较长，才导致了错误。

解决方法：

4M 既然不够，那就设置 <span class="token number">20</span> MB 吧。

查看当前 max_allowed_packet 大小：

show variables like <span class="token string">&#39;max_allowed_packet&#39;</span><span class="token punctuation">;</span>  
show variables where Variable_name <span class="token operator">=</span> <span class="token string">&#39;max_allowed_packet&#39;</span><span class="token punctuation">;</span>

在命令行设置全局变量，新的连接立即生效：（windows 中写字节大小）
<span class="token builtin class-name">set</span> global max_allowed_packet <span class="token operator">=</span> <span class="token number">20</span>*1024*1024<span class="token punctuation">;</span>

同时在配置文件中添加以下参数：
max_allowed_packet <span class="token operator">=</span> 20M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="备份还原" tabindex="-1"><a class="header-anchor" href="#备份还原" aria-hidden="true">#</a> 备份还原</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 备份</span>
mysqldump <span class="token parameter variable">-uroot</span> -psjzx@152 sjzx-cloud <span class="token operator">&gt;</span> sjzx_cloud_dump.SQL

<span class="token comment"># 为了更快的速度</span>
<span class="token parameter variable">-e</span> 使用包括几个VALUES列表的多行INSERT语法<span class="token punctuation">;</span>
<span class="token parameter variable">--max_allowed_packet</span><span class="token operator">=</span>XXX 客户端/服务器之间通信的缓存区的最大大小<span class="token punctuation">;</span>
<span class="token parameter variable">--net_buffer_length</span><span class="token operator">=</span>XXX  TCP/IP和套接字通信缓冲区大小,创建长度达net_buffer_length的行
注意：max_allowed_packet和net_buffer_length不能比目标数据库的配置数值大，否则可能出错。
首先确定目标库的参数值
mysql<span class="token operator">&gt;</span>show variables like <span class="token string">&#39;max_allowed_packet&#39;</span><span class="token punctuation">;</span>//67108864
mysql<span class="token operator">&gt;</span>show variables like <span class="token string">&#39;net_buffer_length&#39;</span><span class="token punctuation">;</span>//16384

使用mysqldump导出，默认导出的语句是批量插入语句。
使用mysqlpump导出，默认批量插入的条数是250条，可使用--extended-insert<span class="token operator">=</span><span class="token number">10000</span>指定批量插入时的数据。
mysqldump 的 --extended-insert 表示长INSERT，多row在一起批量INSERT，提高导入效率，和没有开启 <span class="token parameter variable">-e</span> 的备份导入耗时至少相差3、4倍，默认开启；用--extended-insert<span class="token operator">=</span>false关闭。强烈建议开启，

mysqldump <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p</span> 数据库名  <span class="token parameter variable">-e</span> <span class="token parameter variable">--max_allowed_packet</span><span class="token operator">=</span><span class="token number">1048576</span> <span class="token parameter variable">--net_buffer_length</span><span class="token operator">=</span><span class="token number">16384</span> <span class="token operator">&gt;</span> SQL文件
mysqldump <span class="token parameter variable">-uroot</span> -psjzx@152 sjzx-cloud <span class="token parameter variable">-e</span> <span class="token parameter variable">--max_allowed_packet</span><span class="token operator">=</span><span class="token number">1048576</span> <span class="token parameter variable">--net_buffer_length</span><span class="token operator">=</span><span class="token number">16384</span> <span class="token operator">&gt;</span> sjzx_cloud_dump.sql

<span class="token comment">#18:20开始的18:28 结束的 15G的SQL文件</span>
<span class="token comment">#8:35:12开始还原 9:14:03结束</span>
<span class="token comment">#9:17开始备份9:17:43结束 1.6G的SQL文件</span>

<span class="token comment"># 还原 （这里还原到另一个库了）</span>
mysql <span class="token parameter variable">-uroot</span> -psjzx@152 new_sjzx_cloud <span class="token operator">&lt;</span> sjzx_cloud_dump.SQL

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mysqldump <span class="token parameter variable">-uroot</span> -psjzx@231 sjzx_cloud <span class="token parameter variable">-e</span> <span class="token parameter variable">--max_allowed_packet</span><span class="token operator">=</span><span class="token number">1048576</span> <span class="token parameter variable">--net_buffer_length</span><span class="token operator">=</span><span class="token number">16384</span> <span class="token operator">|</span><span class="token function">gzip</span> <span class="token operator">&gt;</span> /data/zhfxx/jar/mysqlbackup/sjzx_cloud_dump<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y-%m-%d_%H%M%S<span class="token variable">\`</span></span>.sql.gz<span class="token punctuation">;</span>
mysqldump <span class="token parameter variable">-uroot</span> -psjzx@231 sjzx_cloud_dc <span class="token parameter variable">-e</span> <span class="token parameter variable">--max_allowed_packet</span><span class="token operator">=</span><span class="token number">1048576</span> <span class="token parameter variable">--net_buffer_length</span><span class="token operator">=</span><span class="token number">16384</span> <span class="token operator">|</span><span class="token function">gzip</span> <span class="token operator">&gt;</span> /data/zhfxx/jar/mysqlbackup/sjzx_cloud_dc_dump<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +%Y-%m-%d_%H%M%S<span class="token variable">\`</span></span>.sql.gz<span class="token punctuation">;</span>
<span class="token function">find</span> /data/zhfxx/jar/mysqlbackup <span class="token parameter variable">-type</span> f <span class="token parameter variable">-mtime</span> +10 <span class="token parameter variable">-name</span> <span class="token string">&quot;*.sql.gz*&quot;</span> <span class="token parameter variable">-exec</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span> <span class="token comment">#删除10天前的备份文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),t=[i];function p(r,o){return n(),a("div",null,t)}const d=s(l,[["render",p],["__file","MySQL-v5.7.html.vue"]]);export{d as default};
