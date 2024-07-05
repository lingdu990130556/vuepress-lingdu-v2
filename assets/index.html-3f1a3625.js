import{_ as d,r as l,o as t,c as r,f as n,h as a,a as s,d as i}from"./app-ac465cee.js";const c="/vuepress-lingdu-v2/img/1.jpg",o={},p=i(`<h1 id="markdown基本语法" tabindex="-1"><a class="header-anchor" href="#markdown基本语法" aria-hidden="true">#</a> Markdown基本语法</h1><p>Markdown是一种纯文本格式的标记语言。通过简单的标记语法，它可以使普通文本内容具有一定的格式。</p><p>相比WYSIWYG编辑器</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点：</h3><ol><li>因为是纯文本，所以只要支持Markdown的地方都能获得一样的编辑效果，可以让作者摆脱排版的困扰，专心写作。</li><li>操作简单。比如:WYSIWYG编辑时标记个标题，先选中内容，再点击导航栏的标题按钮，选择几级标题。要三个步骤。而Markdown只需要在标题内容前加#即可</li></ol><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点：</h3><ol><li>需要记一些语法（当然，是很简单。五分钟学会）。</li><li>有些平台不支持Markdown编辑模式。</li></ol><h2 id="一、标题" tabindex="-1"><a class="header-anchor" href="#一、标题" aria-hidden="true">#</a> 一、标题</h2><p>在想要设置为标题的文字前面加#来表示<br> 一个#是一级标题，二个#是二级标题，以此类推。支持六级标题。</p><p>注：标准语法一般在#后跟个空格再写文字，貌似简书不加空格也行。</p><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 这是一级标题</span>
<span class="token title important"><span class="token punctuation">##</span> 这是二级标题</span>
<span class="token title important"><span class="token punctuation">###</span> 这是三级标题</span>
<span class="token title important"><span class="token punctuation">####</span> 这是四级标题</span>
<span class="token title important"><span class="token punctuation">#####</span> 这是五级标题</span>
<span class="token title important"><span class="token punctuation">######</span> 这是六级标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><h1 id="这是一级标题" tabindex="-1"><a class="header-anchor" href="#这是一级标题" aria-hidden="true">#</a> 这是一级标题</h1><h2 id="这是二级标题" tabindex="-1"><a class="header-anchor" href="#这是二级标题" aria-hidden="true">#</a> 这是二级标题</h2><h3 id="这是三级标题" tabindex="-1"><a class="header-anchor" href="#这是三级标题" aria-hidden="true">#</a> 这是三级标题</h3><h4 id="这是四级标题" tabindex="-1"><a class="header-anchor" href="#这是四级标题" aria-hidden="true">#</a> 这是四级标题</h4><h5 id="这是五级标题" tabindex="-1"><a class="header-anchor" href="#这是五级标题" aria-hidden="true">#</a> 这是五级标题</h5><h6 id="这是六级标题" tabindex="-1"><a class="header-anchor" href="#这是六级标题" aria-hidden="true">#</a> 这是六级标题</h6><h2 id="二、字体" tabindex="-1"><a class="header-anchor" href="#二、字体" aria-hidden="true">#</a> 二、字体</h2><ul><li><p><strong>加粗</strong><br> 要加粗的文字左右分别用两个*号包起来</p></li><li><p><strong>斜体</strong><br> 要倾斜的文字左右分别用一个*号包起来</p></li><li><p><strong>斜体加粗</strong><br> 要倾斜和加粗的文字左右分别用三个*号包起来</p></li><li><p><strong>删除线</strong><br> 要加删除线的文字左右分别用两个~~号包起来</p></li></ul><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">这是加粗的文字</span><span class="token punctuation">**</span></span>
<span class="token italic"><span class="token punctuation">*</span><span class="token content">这是倾斜的文字</span><span class="token punctuation">*</span></span>\`
<span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">*</span><span class="token content">这是斜体加粗的文字</span><span class="token punctuation">*</span></span></span><span class="token punctuation">**</span></span>
<span class="token strike"><span class="token punctuation">~~</span><span class="token content">这是加删除线的文字</span><span class="token punctuation">~~</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：<br><strong>这是加粗的文字</strong><br><em>这是倾斜的文字</em>\`<br><em><strong>这是斜体加粗的文字</strong></em><br><s>这是加删除线的文字</s></p><h2 id="三、引用" tabindex="-1"><a class="header-anchor" href="#三、引用" aria-hidden="true">#</a> 三、引用</h2><p>在引用的文字前加&gt;即可。引用也可以嵌套，如加两个&gt;&gt;三个&gt;&gt;&gt;<br> n个...<br> 貌似可以一直加下去</p><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token blockquote punctuation">&gt;</span>这是引用的内容
<span class="token blockquote punctuation">&gt;&gt;</span>这是引用的内容
<span class="token blockquote punctuation">&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;</span>这是引用的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><blockquote><p>这是引用的内容</p><blockquote><p>这是引用的内容</p><blockquote><blockquote><blockquote><blockquote><p>这是引用的内容</p></blockquote></blockquote></blockquote></blockquote></blockquote></blockquote><h3 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h3><h4 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入</h4><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h4><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是一个提示</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这是一个警告</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>这是一个危险警告</p></div><details class="hint-container details"><summary>详情</summary><p>这是一个详情块，在 IE / Edge 中不生效</p></details><h2 id="四、分割线" tabindex="-1"><a class="header-anchor" href="#四、分割线" aria-hidden="true">#</a> 四、分割线</h2><p>三个或者三个以上的 - 或者 * 都可以。</p><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token hr punctuation">---</span>

内容

<span class="token hr punctuation">----</span>
内容
<span class="token hr punctuation">***</span>
内容
<span class="token hr punctuation">*****</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：<br> 可以看到，显示效果是一样的。</p><hr><p>内容</p><hr><p>内容</p><hr><p>内容</p><hr><h2 id="五、图片" tabindex="-1"><a class="header-anchor" href="#五、图片" aria-hidden="true">#</a> 五、图片</h2><p>语法：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>![图片alt](图片地址 &#39;&#39;图片title&#39;&#39;)

图片alt就是显示在图片下面的文字，相当于对图片内容的解释。
图片title是图片的标题，当鼠标移到图片上时显示的内容。title可加可不加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url"><span class="token operator">!</span>[<span class="token content">lingdu</span>](<span class="token url">/img/1.jpg</span> <span class="token string">&quot;示例图&quot;</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>效果如下：<br><img src="`+c+`" alt="lingdu" title="示例图" loading="lazy"></p><p>markdown格式追求的是简单、多平台统一。那么图片的存储就是一个问题，需要用图床，提供统一的外链，这样就不用在不同的平台去处理图片的问题了。才能做到书写一次，各处使用。 关于图床的选择，对网上存在的各种方法做了总结，需要的朋友可以看看。markdown图床</p><h2 id="六、超链接" tabindex="-1"><a class="header-anchor" href="#六、超链接" aria-hidden="true">#</a> 六、超链接</h2><p>语法：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">超链接名</span>](<span class="token url">超链接地址</span> <span class="token string">&quot;超链接title&quot;</span>)</span>
title可加可不加
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token url">[<span class="token content">简书</span>](<span class="token url">http://jianshu.com</span>)</span>
<span class="token url">[<span class="token content">百度</span>](<span class="token url">http://baidu.com</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>`,63),u={href:"http://jianshu.com",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m={href:"http://baidu.com",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="七、列表" tabindex="-1"><a class="header-anchor" href="#七、列表" aria-hidden="true">#</a> 七、列表</h2><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表" aria-hidden="true">#</a> 无序列表</h3><p>语法：<br> 无序列表用 - + * 任何一种都可以</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 列表内容
<span class="token list punctuation">+</span> 列表内容
<span class="token list punctuation">*</span> 列表内容

注意：- + * 跟内容之间都要有一个空格

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><ul><li>列表内容</li></ul><ul><li>列表内容</li></ul><ul><li>列表内容</li></ul><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表" aria-hidden="true">#</a> 有序列表</h3><p>语法：<br> 数字加点</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">1.</span> 列表内容
<span class="token list punctuation">2.</span> 列表内容
<span class="token list punctuation">3.</span> 列表内容

注意：序号跟内容之间要有空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><ol><li>列表内容</li><li>列表内容</li><li>列表内容</li></ol><h3 id="列表嵌套" tabindex="-1"><a class="header-anchor" href="#列表嵌套" aria-hidden="true">#</a> 列表嵌套</h3><h4 id="上一级和下一级之间敲三个空格即可" tabindex="-1"><a class="header-anchor" href="#上一级和下一级之间敲三个空格即可" aria-hidden="true">#</a> 上一级和下一级之间敲三个空格即可</h4><ul><li>一级无序列表内容 <ul><li>二级无序列表内容</li><li>二级无序列表内容</li><li>二级无序列表内容</li></ul></li><li>一级无序列表内容 <ol><li>二级有序列表内容</li><li>二级有序列表内容</li><li>二级有序列表内容</li></ol></li></ul><ol><li>一级有序列表内容 <ul><li>二级无序列表内容</li><li>二级无序列表内容</li><li>二级无序列表内容</li></ul></li><li>一级有序列表内容 <ol><li>二级有序列表内容</li><li>二级有序列表内容</li><li>二级有序列表内容</li></ol></li></ol><h2 id="八、表格" tabindex="-1"><a class="header-anchor" href="#八、表格" aria-hidden="true">#</a> 八、表格</h2><p>语法：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
<span class="token list punctuation">-</span> 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>姓名|技能|排行
--|:--:|--:
刘备|哭|大哥
关羽|打|二哥
张飞|骂|三弟
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>姓名</th><th style="text-align:center;">技能</th><th style="text-align:right;">排行</th></tr></thead><tbody><tr><td>刘备</td><td style="text-align:center;">哭</td><td style="text-align:right;">大哥</td></tr><tr><td>关羽</td><td style="text-align:center;">打</td><td style="text-align:right;">二哥</td></tr><tr><td>张飞</td><td style="text-align:center;">骂</td><td style="text-align:right;">三弟</td></tr></tbody></table><h2 id="九、代码" tabindex="-1"><a class="header-anchor" href="#九、代码" aria-hidden="true">#</a> 九、代码</h2><p>语法：<br> 单行代码：代码之间分别用一个反引号包起来</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>    <span class="token code-snippet code keyword">\`代码内容\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码块：代码之间分别用三个反引号包起来，且两边的反引号单独占一行</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>(\`\`\`)
  代码...
  代码...
  代码...
(\`\`\`)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：为了防止转译，前后三个反引号处加了小括号，实际是没有的。这里只是用来演示，实际中去掉两边小括号即可。</p></blockquote><p>示例：</p><p>单行代码</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token code-snippet code keyword">\`create database hero;\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>代码块：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>(\`\`\`)
    function fun(){
         echo &quot;你好！&quot;;
    }
    fun();
(\`\`\`)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p>单行代码</p><p><code>create database hero;</code></p><p>代码块：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fun(){
    echo &quot;你好！&quot;;
}
fun();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、流程图" tabindex="-1"><a class="header-anchor" href="#十、流程图" aria-hidden="true">#</a> 十、流程图</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>\`\`\`flow
st=&gt;start: 开始
op=&gt;operation: My Operation
cond=&gt;condition: Yes or No?
e=&gt;end
st-&gt;op-&gt;cond
cond(yes)-&gt;e
cond(no)-&gt;op
&amp;\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><div class="language-flow line-numbers-mode" data-ext="flow"><pre class="language-flow"><code>st<span class="token operator">=&gt;</span>start<span class="token operator">:</span> 开始
op<span class="token operator">=&gt;</span>operation<span class="token operator">:</span> My Operation
cond<span class="token operator">=&gt;</span>condition<span class="token operator">:</span> Yes or No<span class="token operator">?</span>
e<span class="token operator">=&gt;</span>end
st<span class="token operator">-</span><span class="token operator">&gt;</span>op<span class="token operator">-</span><span class="token operator">&gt;</span>cond
<span class="token function">cond</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>e
<span class="token function">cond</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">&gt;</span>op
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),b={href:"https://zhuanlan.zhihu.com/p/340853710",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"其他",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#"),a(" 其他")],-1),k=n("ul",null,[n("li",null,"换行用两个空格"),n("li",null,"转义用\\ ,如 \\|")],-1);function x(f,w){const e=l("ExternalLinkIcon");return t(),r("div",null,[p,n("p",null,[n("a",u,[a("简书"),s(e)]),v,n("a",m,[a("百度"),s(e)])]),h,n("p",null,[n("a",b,[a("关于流程图"),s(e)])]),g,k])}const q=d(o,[["render",x],["__file","index.html.vue"]]);export{q as default};
