# nginx 命令
- - -

<div  class="gpt_html_div">
    <div id="scrollRef" class="h-full overflow-hidden overflow-y-auto">
        <div id="image-wrapper" class="w-full max-w-screen-xl m-auto dark:bg-[#101014] p-4">
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="https://lingdu.love/favicon.ico" data-image-src="https://lingdu.love/favicon.ico"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/7 17:28:43</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">nginx</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/7 17:29:06</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>Nginx（发音为"engine-x"）是一个高性能的开源Web服务器和反向代理服务器。它具有轻量级、高并发处理能力和低内存消耗等特点，广泛用于构建高性能的Web应用和服务。</p>
<p>以下是Nginx的一些主要特点：</p>
<ol>
<li>高性能：Nginx采用事件驱动和非阻塞的工作模式，能够处理大量并发请求，高效利用系统资源，适合高负载环境。</li>
<li>反向代理：Nginx可以作为反向代理服务器，将客户端的请求转发给后端的多个服务器进行处理，实现负载均衡和高可用性。</li>
<li>静态文件服务：Nginx可以快速地处理和传输静态文件，通过静态文件缓存和压缩等技术提升网站性能。</li>
<li>动态内容处理：Nginx集成了FastCGI、uWSGI和SCGI等协议支持，可以与各种动态语言（如PHP、Python）和应用程序（如Django、Flask）进行结合，处理动态生成的内容。</li>
<li>SSL/TLS支持：Nginx支持SSL/TLS加密通信，保障网络传输的安全性。</li>
<li>URL重写和访问控制：Nginx提供了灵活的URL重写和访问控制配置，可以进行URL路由、重定向和访问权限控制等操作。</li>
<li>日志记录和统计：Nginx可以生成详细的日志信息，对请求和响应进行记录和统计，便于监控和分析应用性能。</li>
<li>可扩展性：Nginx提供了丰富的模块化扩展机制，可以通过编写自定义模块来满足特定需求。</li>
</ol>
<p>由于其高性能和灵活性，Nginx被广泛应用于互联网企业、大型网站和Web应用的部署中。它可以作为一个独立的Web服务器，也可以作为反向代理服务器配合其他后端服务器使用，以提供高可用、高并发的服务。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="https://lingdu.love/favicon.ico" data-image-src="https://lingdu.love/favicon.ico"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/10 14:46:26</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">linux安装nginx步骤</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/10 14:46:41</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>在Linux上安装Nginx的步骤如下：</p>
<ol>
<li>
<p>更新系统软件包：</p>

```shell
sudo apt update
```

</li>
<li>
<p>安装Nginx：</p>

```shell
sudo apt install nginx
```

</li>
<li>
<p>安装完成后，Nginx将自动启动。你可以使用以下命令检查Nginx的运行状态：</p>

```shell
sudo systemctl status nginx
```

</li>
<li>
<p>配置防火墙（如果需要）：</p>
<ul>
<li>如果使用了ufw防火墙管理工具，可以执行以下命令允许HTTP和HTTPS流量通过：

```shell
sudo ufw allow 'Nginx HTTP'
sudo ufw allow 'Nginx HTTPS'
```

</li>
<li>如果使用其他防火墙工具，你需要根据该工具的文档进行相应的配置。</li>
</ul>
</li>
<li>
<p>在Web浏览器中访问服务器的IP地址或域名，你应该能够看到Nginx的欢迎页面。默认情况下，Nginx的网页文件位于<code>/var/www/html</code>目录下。</p>
</li>
</ol>
<p>这些步骤适用于基于Debian或Ubuntu的Linux发行版。如果你使用其他Linux发行版，请参考该发行版的官方文档或社区资源进行安装。</p>
<p>安装完成后，你可以根据需要进行Nginx的进一步配置，例如修改网站根目录、添加虚拟主机等。可以编辑<code>/etc/nginx/nginx.conf</code>等文件来进行配置。</p>
<p>希望这些步骤能够帮助你成功安装Nginx。如有需要，请提供更多的信息，以便我们更准确地回答你的问题。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button></div></div></div></div>
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="https://lingdu.love/favicon.ico" data-image-src="https://lingdu.love/favicon.ico"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/10 14:58:29</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">sudo: apt: command not found</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/10 14:58:46</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>如果你的Linux系统中找不到<code>apt</code>命令，那很可能是你使用的是非基于Debian的Linux发行版（如CentOS、Fedora等），这些发行版使用不同的软件包管理工具。</p>
<p>在非Debian发行版中，常用的软件包管理工具是<code>yum</code>或<code>dnf</code>。你可以按照以下步骤在CentOS或Fedora系统上安装Nginx：</p>
<ol>
<li>
<p>更新系统软件包：</p>

```shell
sudo yum update   # 或者 sudo dnf upgrade
```

</li>
<li>
<p>安装Nginx：</p>

```shell
sudo yum install nginx   # 或者 sudo dnf install nginx
```

</li>
<li>
<p>安装完成后，Nginx将自动启动。你可以使用以下命令检查Nginx的运行状态：</p>

```shell
sudo systemctl status nginx
```

</li>
<li>
<p>配置防火墙（如果需要）：</p>
<ul>
<li>如果使用了Firewalld防火墙管理工具，可以执行以下命令允许HTTP和HTTPS流量通过：

```shell
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

</li>
<li>如果使用其他防火墙工具，你需要根据该工具的文档进行相应的配置。</li>
</ul>
</li>
<li>
<p>在Web浏览器中访问服务器的IP地址或域名，你应该能够看到Nginx的欢迎页面。默认情况下，Nginx的网页文件位于<code>/usr/share/nginx/html</code>目录下。</p>
</li>
</ol>
<p>如果你使用的是其他非Debian发行版，例如Arch Linux或openSUSE等，请参考该发行版的官方文档或社区资源进行Nginx的安装和配置。</p>
<p>希望以上信息对你有所帮助。如果你需要进一步指导，请提供你使用的Linux发行版的详细信息。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
        </div>
    </div>
</div>

## 安装
### 一、安装nginx依赖

```shell
#安装gcc
yum install gcc-c++
 
#安装PCRE pcre-devel
yum install -y pcre pcre-devel
 
#安装zlib
yum install -y zlib zlib-devel
 
#安装Open SSL
yum install -y openssl openssl-devel
```

### 二、下载并解压nginx安装包

**1.下载nginx安装包**

:::tip 你也可以到网站选择你所需要的版本
:::

```shell
wget http://nginx.org/download/nginx-1.23.0.tar.gz 
```

下载完成后将压缩包通过ssh命令使用winscp工具或其他工具上传至服务器

**2.解压nginx安装包**

```shell
#创建一个文件夹
cd /usr/local
mkdir nginx
cd nginx

#解压缩包，直接tar -xvf nginx安装包所在路径
tar -xvf nginx-1.16.1.tar.gz

```

### 三、安装nginx

```shell
#进入nginx目录
cd /usr/local/nginx
#进入目录
cd nginx-1.16.1
#编译 执行命令 考虑到后续安装ssl证书 添加两个模块  如不需要直接执行./configure即可
./configure --with-http_stub_status_module --with-http_ssl_module
#执行make命令(要是执行不成功请检查最开始安装的四个依赖有没有安装成功)
make
#执行make install命令
make install

```

<div class="gpt_html_div">
    <div id="scrollRef" class="h-full overflow-hidden overflow-y-auto">
        <div id="image-wrapper" class="w-full max-w-screen-xl m-auto dark:bg-[#101014] p-4">
            <!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="https://lingdu.love/favicon.ico" data-image-src="https://lingdu.love/favicon.ico"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/14 17:21:22</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">Configuration summary<br>
  + using system PCRE library<br>
  + using system OpenSSL library<br>
  + using system zlib library<br><br>
nginx path prefix: "/usr/local/nginx"<br>
nginx binary file: "/usr/local/nginx/sbin/nginx"<br>
nginx modules path: "/usr/local/nginx/modules"<br>
nginx configuration prefix: "/usr/local/nginx/conf"<br>
nginx configuration file: "/usr/local/nginx/conf/nginx.conf"<br>
nginx pid file: "/usr/local/nginx/logs/nginx.pid"<br>
nginx error log file: "/usr/local/nginx/logs/error.log"<br>
nginx http access log file: "/usr/local/nginx/logs/access.log"<br>
nginx http client request body temporary files: "client_body_temp"<br>
nginx http proxy temporary files: "proxy_temp"<br>
nginx http fastcgi temporary files: "fastcgi_temp"<br>
nginx http uwsgi temporary files: "uwsgi_temp"<br>
nginx http scgi temporary files: "scgi_temp"</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
            <!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/14 17:21:56</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>根据提供的信息，这是一个由源码编译安装的 Nginx 应用程序的配置摘要。</p>
<p>根据配置摘要的内容，可以得出以下信息：</p>
<ul>
<li>Nginx 的安装路径为 <code>/usr/local/nginx</code>。</li>
<li>Nginx 的二进制文件路径为 <code>/usr/local/nginx/sbin/nginx</code>。</li>
<li>Nginx 模块的路径为 <code>/usr/local/nginx/modules</code>。</li>
<li>Nginx 配置文件的前缀路径为 <code>/usr/local/nginx/conf</code>，配置文件名为 <code>nginx.conf</code>。</li>
<li>Nginx 的进程 ID 文件路径为 <code>/usr/local/nginx/logs/nginx.pid</code>。</li>
<li>Nginx 的错误日志文件路径为 <code>/usr/local/nginx/logs/error.log</code>。</li>
<li>Nginx 的 HTTP 访问日志文件路径为 <code>/usr/local/nginx/logs/access.log</code>。</li>
<li>Nginx 用于存储客户端请求主体临时文件的目录为 <code>client_body_temp</code>。</li>
<li>Nginx 用于存储代理临时文件的目录为 <code>proxy_temp</code>。</li>
<li>Nginx 用于存储 FastCGI 临时文件的目录为 <code>fastcgi_temp</code>。</li>
<li>Nginx 用于存储 uWSGI 临时文件的目录为 <code>uwsgi_temp</code>。</li>
<li>Nginx 用于存储 SCGI 临时文件的目录为 <code>scgi_temp</code>。</li>
</ul>
<p>请注意，这只是配置摘要，并不包含完整的 Nginx 配置。如果您需要进一步了解或更改 Nginx 的配置，请参考 <code>/usr/local/nginx/conf/nginx.conf</code> 文件。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
        </div>
    </div>
</div>


补充查看编译参数

```shell
# 查看编译参数
./configure --help | more 
```

### 四、启动nginx

```shell
cd /usr/local/nginx/sbin
# 默认配置文件启动
./nginx

# 指定配置文件启动
./nginx -c  /usr/local/nginx/conf/nginx.conf

```

在浏览器中输入服务器ip即可看见nginx启动成功
浏览器中输入localhost：80

### 五、停止重启nginx

```shell
cd /usr/local/nginx/sbin
# 停止指令
./nginx -s stop
# 或
./nginx -s quit

# 重启命令
./nginx -s reload

# 查看nginx进程
ps -ef|grep nginx
```

### 六、设置开机自启动nginx

```shell
#编辑
vim /etc/rc.local
 
#最底部增加这一行
/usr/local/nginx/sbin/nginx
```

### 七、补充

**1.配置nginx.conf**

若要修改监听端口，可打开nginx的配置文件进行修改。

```shell
# 打开配置文件
vi /usr/local/nginx/conf/nginx.conf
```

将端口号改成8089(随便挑个端口,你也可以修改为8848，等等)。

**2.防火墙设置**

若想使用外部主机访问nginx，上一步中若修改默认的80端口为8089，则需要关闭服务器防火墙或开放nginx服务端口。

centOS6及以前版本使用命令：

```shell
systemctl stop iptables.service
```

centOS7关闭防火墙命令：

```shell
systemctl stop firewalld.service

#不过，关闭防火墙会导致服务器有一定风险，所以建议是单独开放服务端口：
firewall-cmd --zone=public --add-port=8089/tcp --permanent

#查询端口号8089 是否开启：
firewall-cmd --query-port=8089/tcp

#重启防火墙：
firewall-cmd --reload
# 查看firewall防火墙状态
systemctl status firewalld
# 查看firewall防火墙开放端口
firewall-cmd --list-ports
#禁止firewall开机启动 
systemctl disable firewalld.service

```


- - -
## 1.启动
```shell script
#进入sbin目录 执行命令./nginx
```
## 2.查看nginx是否启动

```shell script
[root@admin sbin]# ps -aux | grep nginx

# ps命令用于报告当前系统的进程状态。
# -a：显示所有终端机下执行的程序，除了阶段作业领导者之外。
# a：显示现行终端机下的所有程序，包括其他用户的程序。
# u：以用户为主的格式来显示程序状况。
# x：显示所有程序，不以终端机来区分。
```

## 3.关闭nginx
```shell script
[root@admin sbin]# ./nginx -s stop
或者
[root@admin sbin]# ./nginx -s quit
```

## 4.重启nginx
```shell script
先关闭，然后启动
```

## 5.刷新配置文件
```shell script
[root@admin sbin]# ./nginx -s reload
```
