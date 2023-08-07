# HTTP

<div  class="gpt_html_div">
    <div id="scrollRef" class="h-full overflow-hidden overflow-y-auto">
        <div id="image-wrapper" class="w-full max-w-screen-xl m-auto dark:bg-[#101014] p-4">
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png" data-image-src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/7 16:55:08</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">简述http</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/7 16:55:28</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>HTTP（Hypertext Transfer Protocol）是一种用于在Web上进行数据传输的协议。它是基于客户端-服务器模型的，用于客户端和服务器之间的通信。</p>
<p>以下是对HTTP的简述：</p>
<ol>
<li>
<p><strong>请求-响应模型</strong>：HTTP使用请求-响应模型，客户端发送HTTP请求到服务器，服务器处理请求并返回响应给客户端。</p>
</li>
<li>
<p><strong>无状态协议</strong>：HTTP是无状态的，也就是说服务器不会保留与客户端之前的通信状态。每个请求都是独立的，服务器只关注当前请求，并不知道之前的请求和操作。</p>
</li>
<li>
<p><strong>URI（统一资源标识符）</strong>：URI是用来标识和定位资源的字符串，它包括URL（统一资源定位符）和URN（统一资源名称）。URL是URI的一种常见形式，用于指定资源的位置。</p>
</li>
<li>
<p><strong>请求方法</strong>：HTTP定义了一些常用的请求方法，如GET、POST、PUT、DELETE等。这些方法用于指定客户端希望服务器执行的操作类型。</p>
</li>
<li>
<p><strong>状态码</strong>：服务器在返回响应时会包含一个状态码，用于表示请求的处理结果。常见的状态码包括200（成功）、404（未找到资源）、500（服务器错误）等。</p>
</li>
<li>
<p><strong>报文格式</strong>：HTTP使用特定的格式来组织请求和响应报文。请求报文包括请求行、请求头和请求体，而响应报文包括状态行、响应头和响应体。</p>
</li>
<li>
<p><strong>持久连接</strong>：为了提高性能，HTTP支持持久连接，也就是在单个TCP连接上可以发送多个请求和响应。这样可以减少建立和关闭TCP连接的开销。</p>
</li>
<li>
<p><strong>安全性</strong>：HTTP本身是不安全的，数据传输是明文的，容易被窃听和篡改。为了保证通信安全，可以使用HTTPS协议，它在HTTP上加入了SSL/TLS协议来进行数据加密和身份认证。</p>
</li>
</ol>
<p>总结：HTTP是用于Web通信的协议，它采用请求-响应模型，通过定义请求方法、状态码和报文格式等实现客户端和服务器之间的数据传输。了解HTTP对于理解Web开发、网络通信和安全性非常重要。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png" data-image-src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/7 16:55:58</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">简述https</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/7 16:56:20</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>HTTPS（Hypertext Transfer Protocol Secure）是一种加密的、安全的通信协议，它是HTTP协议的安全版本。HTTPS在HTTP之上添加了 SSL/TLS 协议，用于对数据进行加密和身份认证，以保证通信的安全性。</p>
<p>以下是对HTTPS的简述：</p>
<ol>
<li>
<p><strong>加密通信</strong>：HTTPS使用SSL/TLS协议对通信数据进行加密，通过使用公钥和私钥加密和解密数据，确保传输过程中的数据机密性，防止第三方窃听和篡改。</p>
</li>
<li>
<p><strong>身份验证</strong>：HTTPS使用了数字证书来验证服务器和客户端的身份。服务器拥有一个数字证书，由可信任的证书颁发机构（Certificate Authority，CA）签发，客户端可以通过校验证书的有效性来确认服务器身份的真实性。</p>
</li>
<li>
<p><strong>数据完整性</strong>：HTTPS使用消息摘要算法和数字签名来验证数据的完整性。在传输过程中，数据被摘要算法计算生成摘要，然后使用私钥进行签名，接收方可以使用公钥对签名进行验证，确保数据在传输过程中没有被篡改。</p>
</li>
<li>
<p><strong>使用的端口</strong>：默认情况下，HTTP使用80端口进行通信，而HTTPS使用443端口。当浏览器访问一个网站时，如果URL以 "https://" 开头，就会通过443端口与服务器建立安全连接。</p>
</li>
<li>
<p><strong>影响性能</strong>：由于HTTPS在通信过程中进行了加密和解密的操作，相对于HTTP会增加一些计算和处理的开销，因此可能会对网络性能产生一定的影响。</p>
</li>
</ol>
<p>总结：HTTPS是HTTP协议的安全版本，通过使用SSL/TLS协议对通信数据进行加密和身份认证，保障数据的机密性、完整性和服务器身份的真实性。在进行敏感数据传输（如登录、支付等）时，使用HTTPS能够提供更高的安全性保障。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
        </div>
    </div>
</div>

##  HTTP Content-type

<div  class="gpt_html_div">
    <div id="scrollRef" class="h-full overflow-hidden overflow-y-auto">
        <div id="image-wrapper" class="w-full max-w-screen-xl m-auto dark:bg-[#101014] p-4">
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png" data-image-src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/7 16:58:14</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">HTTP Content-type</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/7 16:58:27</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>Content-Type是HTTP头部字段之一，用于指示请求或响应中携带的实体（如消息体）的媒体类型。</p>
<p>在HTTP请求中，Content-Type用于告知服务器发送的数据的类型。常见的Content-Type值包括：</p>
<ul>
<li>text/plain：纯文本格式</li>
<li>text/html：HTML文档</li>
<li>application/json：JSON数据</li>
<li>application/xml：XML数据</li>
<li>multipart/form-data：用于文件上传</li>
<li>application/x-www-form-urlencoded：用于普通表单数据提交</li>
</ul>
<p>在HTTP响应中，Content-Type用于指示发送回客户端的数据类型。常见的Content-Type值包括：</p>
<ul>
<li>text/plain：纯文本</li>
<li>text/html：HTML文档</li>
<li>application/json：JSON数据</li>
<li>application/xml：XML数据</li>
<li>image/jpeg：JPEG图像</li>
<li>application/octet-stream：二进制数据流</li>
</ul>
<p>Content-Type字段通常还可以包含字符集编码信息，比如"charset=utf-8"表示使用UTF-8字符集编码。</p>
<p>通过正确设置Content-Type，可以确保服务器和客户端之间能够正确解析和处理传输的数据。如果Content-Type不正确或缺失，接收方可能无法正确解析和处理数据，导致出现错误或乱码。因此，在HTTP通信中，正确使用和设置Content-Type非常重要。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
        </div>
    </div>
</div>

| 文件扩展名                          | Content-Type(Mime-Type)                 | 文件扩展名 |       Content-Type(Mime-Type)       |
| :---------------------------------- | :-------------------------------------- | :--------- | :---------------------------------: |
| .*（ 二进制流，不知道下载文件类型） | application/octet-stream                | .tif       |             image/tiff              |
| .001                                | application/x-001                       | .301       |          application/x-301          |
| .323                                | text/h323                               | .906       |          application/x-906          |
| .907                                | drawing/907                             | .a11       |          application/x-a11          |
| .acp                                | audio/x-mei-aac                         | .ai        |       application/postscript        |
| .aif                                | audio/aiff                              | .aifc      |             audio/aiff              |
| .aiff                               | audio/aiff                              | .anv       |          application/x-anv          |
| .asa                                | text/asa                                | .asf       |           video/x-ms-asf            |
| .asp                                | text/asp                                | .asx       |           video/x-ms-asf            |
| .au                                 | audio/basic                             | .avi       |              video/avi              |
| .awf                                | application/vnd.adobe.workflow          | .biz       |              text/xml               |
| .bmp                                | application/x-bmp                       | .bot       |          application/x-bot          |
| .c4t                                | application/x-c4t                       | .c90       |          application/x-c90          |
| .cal                                | application/x-cals                      | .cat       |    application/vnd.ms-pki.seccat    |
| .cdf                                | application/x-netcdf                    | .cdr       |          application/x-cdr          |
| .cel                                | application/x-cel                       | .cer       |     application/x-x509-ca-cert      |
| .cg4                                | application/x-g4                        | .cgm       |          application/x-cgm          |
| .cit                                | application/x-cit                       | .class     |               java/*                |
| .cml                                | text/xml                                | .cmp       |          application/x-cmp          |
| .cmx                                | application/x-cmx                       | .cot       |          application/x-cot          |
| .crl                                | application/pkix-crl                    | .crt       |     application/x-x509-ca-cert      |
| .csi                                | application/x-csi                       | .css       |              text/css               |
| .cut                                | application/x-cut                       | .dbf       |          application/x-dbf          |
| .dbm                                | application/x-dbm                       | .dbx       |          application/x-dbx          |
| .dcd                                | text/xml                                | .dcx       |          application/x-dcx          |
| .der                                | application/x-x509-ca-cert              | .dgn       |          application/x-dgn          |
| .dib                                | application/x-dib                       | .dll       |      application/x-msdownload       |
| .doc                                | application/msword                      | .dot       |         application/msword          |
| .drw                                | application/x-drw                       | .dtd       |              text/xml               |
| .dwf                                | Model/vnd.dwf                           | .dwf       |          application/x-dwf          |
| .dwg                                | application/x-dwg                       | .dxb       |          application/x-dxb          |
| .dxf                                | application/x-dxf                       | .edn       |      application/vnd.adobe.edn      |
| .emf                                | application/x-emf                       | .eml       |           message/rfc822            |
| .ent                                | text/xml                                | .epi       |          application/x-epi          |
| .eps                                | application/x-ps                        | .eps       |       application/postscript        |
| .etd                                | application/x-ebx                       | .exe       |      application/x-msdownload       |
| .fax                                | image/fax                               | .fdf       |         application/vnd.fdf         |
| .fif                                | application/fractals                    | .fo        |              text/xml               |
| .frm                                | application/x-frm                       | .g4        |          application/x-g4           |
| .gbr                                | application/x-gbr                       | .          |           application/x-            |
| .gif                                | image/gif                               | .gl2       |          application/x-gl2          |
| .gp4                                | application/x-gp4                       | .hgl       |          application/x-hgl          |
| .hmr                                | application/x-hmr                       | .hpg       |         application/x-hpgl          |
| .hpl                                | application/x-hpl                       | .hqx       |      application/mac-binhex40       |
| .hrf                                | application/x-hrf                       | .hta       |           application/hta           |
| .htc                                | text/x-component                        | .htm       |              text/html              |
| .html                               | text/html                               | .htt       |          text/webviewhtml           |
| .htx                                | text/html                               | .icb       |          application/x-icb          |
| .ico                                | image/x-icon                            | .ico       |          application/x-ico          |
| .iff                                | application/x-iff                       | .ig4       |          application/x-g4           |
| .igs                                | application/x-igs                       | .iii       |        application/x-iphone         |
| .img                                | application/x-img                       | .ins       |    application/x-internet-signup    |
| .isp                                | application/x-internet-signup           | .IVF       |             video/x-ivf             |
| .java                               | java/*                                  | .jfif      |             image/jpeg              |
| .jpe                                | image/jpeg                              | .jpe       |          application/x-jpe          |
| .jpeg                               | image/jpeg                              | .jpg       |             image/jpeg              |
| .jpg                                | application/x-jpg                       | .js        |      application/x-javascript       |
| .jsp                                | text/html                               | .la1       |         audio/x-liquid-file         |
| .lar                                | application/x-laplayer-reg              | .latex     |         application/x-latex         |
| .lavs                               | audio/x-liquid-secure                   | .lbm       |          application/x-lbm          |
| .lmsff                              | audio/x-la-lms                          | .ls        |      application/x-javascript       |
| .ltr                                | application/x-ltr                       | .m1v       |            video/x-mpeg             |
| .m2v                                | video/x-mpeg                            | .m3u       |            audio/mpegurl            |
| .m4e                                | video/mpeg4                             | .mac       |          application/x-mac          |
| .man                                | application/x-troff-man                 | .math      |              text/xml               |
| .mdb                                | application/msaccess                    | .mdb       |          application/x-mdb          |
| .mfp                                | application/x-shockwave-flash           | .mht       |           message/rfc822            |
| .mhtml                              | message/rfc822                          | .mi        |          application/x-mi           |
| .mid                                | audio/mid                               | .midi      |              audio/mid              |
| .mil                                | application/x-mil                       | .mml       |              text/xml               |
| .mnd                                | audio/x-musicnet-download               | .mns       |       audio/x-musicnet-stream       |
| .mocha                              | application/x-javascript                | .movie     |          video/x-sgi-movie          |
| .mp1                                | audio/mp1                               | .mp2       |              audio/mp2              |
| .mp2v                               | video/mpeg                              | .mp3       |              audio/mp3              |
| .mp4                                | video/mpeg4                             | .mpa       |             video/x-mpg             |
| .mpd                                | application/vnd.ms-project              | .mpe       |            video/x-mpeg             |
| .mpeg                               | video/mpg                               | .mpg       |              video/mpg              |
| .mpga                               | audio/rn-mpeg                           | .mpp       |     application/vnd.ms-project      |
| .mps                                | video/x-mpeg                            | .mpt       |     application/vnd.ms-project      |
| .mpv                                | video/mpg                               | .mpv2      |             video/mpeg              |
| .mpw                                | application/vnd.ms-project              | .mpx       |     application/vnd.ms-project      |
| .mtx                                | text/xml                                | .mxp       |         application/x-mmxp          |
| .net                                | image/pnetvue                           | .nrf       |          application/x-nrf          |
| .nws                                | message/rfc822                          | .odc       |            text/x-ms-odc            |
| .out                                | application/x-out                       | .p10       |         application/pkcs10          |
| .p12                                | application/x-pkcs12                    | .p7b       |  application/x-pkcs7-certificates   |
| .p7c                                | application/pkcs7-mime                  | .p7m       |       application/pkcs7-mime        |
| .p7r                                | application/x-pkcs7-certreqresp         | .p7s       |     application/pkcs7-signature     |
| .pc5                                | application/x-pc5                       | .pci       |          application/x-pci          |
| .pcl                                | application/x-pcl                       | .pcx       |          application/x-pcx          |
| .pdf                                | application/pdf                         | .pdf       |           application/pdf           |
| .pdx                                | application/vnd.adobe.pdx               | .pfx       |        application/x-pkcs12         |
| .pgl                                | application/x-pgl                       | .pic       |          application/x-pic          |
| .pko                                | application/vnd.ms-pki.pko              | .pl        |         application/x-perl          |
| .plg                                | text/html                               | .pls       |             audio/scpls             |
| .plt                                | application/x-plt                       | .png       |              image/png              |
| .png                                | application/x-png                       | .pot       |    application/vnd.ms-powerpoint    |
| .ppa                                | application/vnd.ms-powerpoint           | .ppm       |          application/x-ppm          |
| .pps                                | application/vnd.ms-powerpoint           | .ppt       |    application/vnd.ms-powerpoint    |
| .ppt                                | application/x-ppt                       | .pr        |          application/x-pr           |
| .prf                                | application/pics-rules                  | .prn       |          application/x-prn          |
| .prt                                | application/x-prt                       | .ps        |          application/x-ps           |
| .ps                                 | application/postscript                  | .ptn       |          application/x-ptn          |
| .pwz                                | application/vnd.ms-powerpoint           | .r3t       |       text/vnd.rn-realtext3d        |
| .ra                                 | audio/vnd.rn-realaudio                  | .ram       |        audio/x-pn-realaudio         |
| .ras                                | application/x-ras                       | .rat       |        application/rat-file         |
| .rdf                                | text/xml                                | .rec       |    application/vnd.rn-recording     |
| .red                                | application/x-red                       | .rgb       |          application/x-rgb          |
| .rjs                                | application/vnd.rn-realsystem-rjs       | .rjt       |  application/vnd.rn-realsystem-rjt  |
| .rlc                                | application/x-rlc                       | .rle       |          application/x-rle          |
| .rm                                 | application/vnd.rn-realmedia            | .rmf       |      application/vnd.adobe.rmf      |
| .rmi                                | audio/mid                               | .rmj       |  application/vnd.rn-realsystem-rmj  |
| .rmm                                | audio/x-pn-realaudio                    | .rmp       | application/vnd.rn-rn_music_package |
| .rms                                | application/vnd.rn-realmedia-secure     | .rmvb      |  application/vnd.rn-realmedia-vbr   |
| .rmx                                | application/vnd.rn-realsystem-rmx       | .rnx       |    application/vnd.rn-realplayer    |
| .rp                                 | image/vnd.rn-realpix                    | .rpm       |     audio/x-pn-realaudio-plugin     |
| .rsml                               | application/vnd.rn-rsml                 | .rt        |        text/vnd.rn-realtext         |
| .rtf                                | application/msword                      | .rtf       |          application/x-rtf          |
| .rv                                 | video/vnd.rn-realvideo                  | .sam       |          application/x-sam          |
| .sat                                | application/x-sat                       | .sdp       |           application/sdp           |
| .sdw                                | application/x-sdw                       | .sit       |        application/x-stuffit        |
| .slb                                | application/x-slb                       | .sld       |          application/x-sld          |
| .slk                                | drawing/x-slk                           | .smi       |          application/smil           |
| .smil                               | application/smil                        | .smk       |          application/x-smk          |
| .snd                                | audio/basic                             | .sol       |             text/plain              |
| .sor                                | text/plain                              | .spc       |  application/x-pkcs7-certificates   |
| .spl                                | application/futuresplash                | .spp       |              text/xml               |
| .ssm                                | application/streamingmedia              | .sst       |  application/vnd.ms-pki.certstore   |
| .stl                                | application/vnd.ms-pki.stl              | .stm       |              text/html              |
| .sty                                | application/x-sty                       | .svg       |              text/xml               |
| .swf                                | application/x-shockwave-flash           | .tdf       |          application/x-tdf          |
| .tg4                                | application/x-tg4                       | .tga       |          application/x-tga          |
| .tif                                | image/tiff                              | .tif       |          application/x-tif          |
| .tiff                               | image/tiff                              | .tld       |              text/xml               |
| .top                                | drawing/x-top                           | .torrent   |      application/x-bittorrent       |
| .tsd                                | text/xml                                | .txt       |             text/plain              |
| .uin                                | application/x-icq                       | .uls       |              text/iuls              |
| .vcf                                | text/x-vcard                            | .vda       |          application/x-vda          |
| .vdx                                | application/vnd.visio                   | .vml       |              text/xml               |
| .vpg                                | application/x-vpeg005                   | .vsd       |        application/vnd.visio        |
| .vsd                                | application/x-vsd                       | .vss       |        application/vnd.visio        |
| .vst                                | application/vnd.visio                   | .vst       |          application/x-vst          |
| .vsw                                | application/vnd.visio                   | .vsx       |        application/vnd.visio        |
| .vtx                                | application/vnd.visio                   | .vxml      |              text/xml               |
| .wav                                | audio/wav                               | .wax       |           audio/x-ms-wax            |
| .wb1                                | application/x-wb1                       | .wb2       |          application/x-wb2          |
| .wb3                                | application/x-wb3                       | .wbmp      |         image/vnd.wap.wbmp          |
| .wiz                                | application/msword                      | .wk3       |          application/x-wk3          |
| .wk4                                | application/x-wk4                       | .wkq       |          application/x-wkq          |
| .wks                                | application/x-wks                       | .wm        |            video/x-ms-wm            |
| .wma                                | audio/x-ms-wma                          | .wmd       |        application/x-ms-wmd         |
| .wmf                                | application/x-wmf                       | .wml       |          text/vnd.wap.wml           |
| .wmv                                | video/x-ms-wmv                          | .wmx       |           video/x-ms-wmx            |
| .wmz                                | application/x-ms-wmz                    | .wp6       |          application/x-wp6          |
| .wpd                                | application/x-wpd                       | .wpg       |          application/x-wpg          |
| .wpl                                | application/vnd.ms-wpl                  | .wq1       |          application/x-wq1          |
| .wr1                                | application/x-wr1                       | .wri       |          application/x-wri          |
| .wrk                                | application/x-wrk                       | .ws        |          application/x-ws           |
| .ws2                                | application/x-ws                        | .wsc       |           text/scriptlet            |
| .wsdl                               | text/xml                                | .wvx       |           video/x-ms-wvx            |
| .xdp                                | application/vnd.adobe.xdp               | .xdr       |              text/xml               |
| .xfd                                | application/vnd.adobe.xfd               | .xfdf      |     application/vnd.adobe.xfdf      |
| .xhtml                              | text/html                               | .xls       |      application/vnd.ms-excel       |
| .xls                                | application/x-xls                       | .xlw       |          application/x-xlw          |
| .xml                                | text/xml                                | .xpl       |             audio/scpls             |
| .xq                                 | text/xml                                | .xql       |              text/xml               |
| .xquery                             | text/xml                                | .xsd       |              text/xml               |
| .xsl                                | text/xml                                | .xslt      |              text/xml               |
| .xwd                                | application/x-xwd                       | .x_b       |          application/x-x_b          |
| .sis                                | application/vnd.symbian.install         | .sisx      |   application/vnd.symbian.install   |
| .x_t                                | application/x-x_t                       | .ipa       |       application/vnd.iphone        |
| .apk                                | application/vnd.android.package-archive | .xap       |    application/x-silverlight-app    |

##  HTML转义字符

<div  class="gpt_html_div">
    <div id="scrollRef" class="h-full overflow-hidden overflow-y-auto">
        <div id="image-wrapper" class="w-full max-w-screen-xl m-auto dark:bg-[#101014] p-4">
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png" data-image-src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/7 17:01:59</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">HTML转义字符</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/7 17:02:10</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>在HTML中，有一些特殊字符具有特殊含义，如果直接在HTML文档中使用这些字符，会导致解析错误或显示不正常。为了正确显示这些特殊字符，需要使用HTML转义字符（HTML entity）来表示它们。</p>
<p>以下是一些常用的HTML转义字符：</p>
<ul>
<li><code>&amp;lt;</code> ：小于号（&lt;）</li>
<li><code>&amp;gt;</code> ：大于号（&gt;）</li>
<li><code>&amp;amp;</code> ：与号（&amp;）</li>
<li><code>&amp;quot;</code> ：双引号（"）</li>
<li><code>&amp;apos;</code> ：单引号（'）</li>
<li><code>&amp;nbsp;</code> ：非断行空格（）</li>
<li><code>&amp;copy;</code> ：版权符号（©）</li>
<li><code>&amp;reg;</code> ：注册商标符号（®）</li>
<li><code>&amp;euro;</code> ：欧元符号（€）</li>
</ul>
<p>通过使用以上的转义字符，可以在HTML中正确地显示这些特殊字符，而不会被解析为HTML标签或其他特殊含义。</p>
<p>例如，如果要在HTML中显示一个小于号，可以使用&lt;表示：<code>&lt;span&gt;5 &amp;lt; 10&lt;/span&gt;</code>。</p>
<p>注意：虽然大多数现代浏览器会自动处理特殊字符的显示，但为了确保最大的兼容性和可读性，仍然建议在HTML中使用转义字符来表示特殊字符。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
        </div>
    </div>
</div>

| 字符                        | 十进制     | 转义字符    |
|---------------------------|---------|---------|
| \"                        | \&#34;  | \&quot; |
| \&                        | \&#38;  | \&amp;  |
| \<                        | \&#60;  | \&lt;   |
| \>                        | \&#62;  | \&gt;   |
| 不断开空格(non-breaking space) | \&#160; | \&nbsp; |



| 字符   | 十进制     | 转义字符      | 字符        | 十进制     | 转义字符      | 字符 | 十进制     | 转义字符     |
|:-----|:--------|:----------|:----------|:--------|:----------| :--- |:--------|:---------|
| ?    | \&#161; | \&iexcl;  | Á         | \&#193; | \&Aacute; | á    | \&#225; | \&aacute; |
| ￠    | \&#162; | \&cent;   | Â         | \&#194; | \&circ;   | â    | \&#226  | \&acirc; |
| ￡    | \&#163; | \&pound;  | Ã         | \&#195; | \&Atilde; | ã    | \&#227; | \&atilde; |
| ¤    | \&#164; | \&curren; | Ä         | \&#196; | \&Auml    | ä    | \&#228; | \&auml;  |
| ￥    | \&#165; | \&yen;    | Å         | \&#197; | \&ring;   | å    | \&#229; | \&aring; |
| \\   | \&#166;  | \&brvbar; | Æ       | \&#198; | \&AElig;  | æ    | \&#230; | \&aelig; |
| §    | \&#167; | \&sect;   | Ç         | \&#199; | \&Ccedil; | ç    | \&#231; | \&ccedil; |
| ¨    | \&#168; | \&uml;    | È         | \&#200; | \&Egrave; | è    | \&#232; | \&egrave; |
| ©    | \&#169; | \&copy;   | É         | \&#201; | \&Eacute; | é    | \&#233; | \&eacute; |
| a    | \&#170; | \&ordf;   | Ê         | \&#202; | \&Ecirc;  | ê    | \&#234; | \&ecirc; |
| ?    | \&#171; | \&laquo;  | Ë         | \&#203; | \&Euml;   | ë    | \&#235; | \&euml;  |
| ?    | \&#172; | \&not;    | Ì         | \&#204; | \&Igrave; | ì    | \&#236; | \&igrave; |
| /x7f | \&#173; | \&shy;    | Í         | \&#205; | \&Iacute; | í    | \&#237; | \&iacute; |
| ®    | \&#174; | \&reg;    | Î         | \&#206; | \&Icirc;  | î    | \&#238; | \&icirc; |
| ˉ    | \&#175; | \&macr;   | Ï         | \&#207; | \&Iuml;   | ï    | \&#239; | \&iuml;  |
| °    | \&#176; | \&deg;    | Ð         | \&#208; | \&ETH;    | ð    | \&#240; | \&ieth;  |
| ±    | \&#177; | \&plusmn; | Ñ         | \&#209; | \&Ntilde; | ñ    | \&#241; | \&ntilde; |
| 2    | \&#178; | \&sup2;   | Ò         | \&#210; | \&Ograve; | ò    | \&#242; | \&ograve; |
| 3    | \&#179; | \&sup3;   | Ó         | \&#211; | \&Oacute; | ó    | \&#243; | \&oacute; |
| ′    | \&#180; | \&acute;  | Ô         | \&#212; | \&Ocirc;  | ô    | \&#244; | \&ocirc; |
| μ    | \&#181; | \&micro;  | Õ         | \&#213; | \&Otilde; | õ    | \&#245; | \&otilde; |
| ?    | \&#182; | \&para;   | Ö         | \&#214; | \&Ouml;   | ö    | \&#246; | \&ouml;  |
| ·    | \&#183; | \&middot; | &times;   | \&#215; | \&times;  | ÷    | \&#247; | \&divide; |
| ?    | \&#184; | \&cedil;  | Ø         | \&#216; | \&Oslash; | ø    | \&#248; | \&oslash; |
| 1    | \&#185; | \&sup1;   | Ù         | \&#217; | \&Ugrave; | ù    | \&#249; | \&ugrave; |
| o    | \&#186; | \&ordm;   | Ú         | \&#218; | \&Uacute; | ú    | \&#250; | \&uacute; |
| ?    | \&#187; | \&raquo;  | Û         | \&#219; | \&Ucirc;  | û    | \&#251; | \&ucirc; |
| ?    | \&#188; | \&frac14; | Ü         | \&#220; | \&Uuml;   | ü    | \&#252; | \&uuml;  |
| ?    | \&#189; | \&frac12; | Ý         | \&#221; | \&Yacute; | ý    | \&#253; | \&yacute; |
| ?    | \&#190; | \&frac34; | Þ         | \&#222; | \&THORN;  | þ    | \&#254; | \&thorn; |
| ?    | \&#191; | \&iquest; | ß         | \&#223; | \&szlig;  | ÿ    | \&#255; | \&yuml;  |
| À    | \&#192; | \&Agrave; | à         | \&#224; | \&agrave; |      |         |          |



##  HTTP状态码详解

<div  class="gpt_html_div">
    <div id="scrollRef" class="h-full overflow-hidden overflow-y-auto">
        <div id="image-wrapper" class="w-full max-w-screen-xl m-auto dark:bg-[#101014] p-4">
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png" data-image-src="http://lingdu990130556.gitee.io/vuepress-lingdu-v2/img/logo.png"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/7 17:21:55</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">HTTP状态码详解</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/7 17:22:16</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>HTTP（Hypertext Transfer Protocol）状态码是在进行HTTP通信过程中，服务器返回给客户端的一个三位数的数字代码。它们用来指示请求的处理状态或结果。</p>
<p>以下是常见的HTTP状态码及其简要说明：</p>
<p>1xx（信息性状态码）：指示请求已被接收并且正在处理。</p>
<ul>
<li>100 Continue：服务器已收到请求的初始部分，客户端应继续发送剩余部分。</li>
<li>101 Switching Protocols：服务器要求客户端切换协议。</li>
</ul>
<p>2xx（成功状态码）：指示请求已成功被服务器接受、理解和处理。</p>
<ul>
<li>200 OK：请求已成功。常用于GET和POST请求。</li>
<li>201 Created：请求成功并且服务器创建了新的资源。</li>
<li>204 No Content：请求已成功处理，但没有返回任何内容。</li>
</ul>
<p>3xx（重定向状态码）：指示客户端需要执行额外的步骤来完成请求。</p>
<ul>
<li>301 Moved Permanently：请求的资源已永久移动到新位置。</li>
<li>302 Found：请求的资源暂时移动到不同的位置。</li>
<li>304 Not Modified：客户端可以使用缓存的版本。</li>
</ul>
<p>4xx（客户端错误状态码）：指示客户端发出了错误的请求。</p>
<ul>
<li>400 Bad Request：请求无效，服务器无法理解。</li>
<li>403 Forbidden：服务器拒绝请求访问。</li>
<li>404 Not Found：请求的资源不存在。</li>
</ul>
<p>5xx（服务器错误状态码）：指示服务器在处理请求时发生错误。</p>
<ul>
<li>500 Internal Server Error：服务器遇到了意外情况，无法完成请求。</li>
<li>502 Bad Gateway：作为网关或代理的服务器从上游服务器接收到无效响应。</li>
<li>503 Service Unavailable：服务器暂时不可用，通常由于过载或维护。</li>
</ul>
<p>以上是一些常见的HTTP状态码，每个状态码都有特定的含义。在进行Web开发、网络通信时，了解和正确处理这些状态码对于调试和排除问题非常重要。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
        </div>
    </div>
</div>

| 状态码 | 含义                                                         |
| :----- | :----------------------------------------------------------- |
| 100    | 客户端应当继续发送请求。这个临时响应是用来通知客户端它的部分请求已经被服务器接收，且仍未被拒绝。客户端应当继续发送请求的剩余部分，或者如果请求已经完成，忽略这个响应。服务器必须在请求完成后向客户端发送一个最终响应。 |
| 101    | 服务器已经理解了客户端的请求，并将通过Upgrade 消息头通知客户端采用不同的协议来完成这个请求。在发送完这个响应最后的空行后，服务器将会切换到在Upgrade 消息头中定义的那些协议。 　　只有在切换新的协议更有好处的时候才应该采取类似措施。例如，切换到新的HTTP 版本比旧版本更有优势，或者切换到一个实时且同步的协议以传送利用此类特性的资源。 |
| 102    | 由WebDAV（RFC 2518）扩展的状态码，代表处理将被继续执行。     |
| 200    | 请求已成功，请求所希望的响应头或数据体将随此响应返回。       |
| 201    | 请求已经被实现，而且有一个新的资源已经依据请求的需要而建立，且其 URI 已经随Location 头信息返回。假如需要的资源无法及时建立的话，应当返回 '202 Accepted'。 |
| 202    | 服务器已接受请求，但尚未处理。正如它可能被拒绝一样，最终该请求可能会也可能不会被执行。在异步操作的场合下，没有比发送这个状态码更方便的做法了。 　　返回202状态码的响应的目的是允许服务器接受其他过程的请求（例如某个每天只执行一次的基于批处理的操作），而不必让客户端一直保持与服务器的连接直到批处理操作全部完成。在接受请求处理并返回202状态码的响应应当在返回的实体中包含一些指示处理当前状态的信息，以及指向处理状态监视器或状态预测的指针，以便用户能够估计操作是否已经完成。 |
| 203    | 服务器已成功处理了请求，但返回的实体头部元信息不是在原始服务器上有效的确定集合，而是来自本地或者第三方的拷贝。当前的信息可能是原始版本的子集或者超集。例如，包含资源的元数据可能导致原始服务器知道元信息的超级。使用此状态码不是必须的，而且只有在响应不使用此状态码便会返回200 OK的情况下才是合适的。 |
| 204    | 服务器成功处理了请求，但不需要返回任何实体内容，并且希望返回更新了的元信息。响应可能通过实体头部的形式，返回新的或更新后的元信息。如果存在这些头部信息，则应当与所请求的变量相呼应。 　　如果客户端是浏览器的话，那么用户浏览器应保留发送了该请求的页面，而不产生任何文档视图上的变化，即使按照规范新的或更新后的元信息应当被应用到用户浏览器活动视图中的文档。 　　由于204响应被禁止包含任何消息体，因此它始终以消息头后的第一个空行结尾。 |
| 205    | 服务器成功处理了请求，且没有返回任何内容。但是与204响应不同，返回此状态码的响应要求请求者重置文档视图。该响应主要是被用于接受用户输入后，立即重置表单，以便用户能够轻松地开始另一次输入。 　　与204响应一样，该响应也被禁止包含任何消息体，且以消息头后的第一个空行结束。 |
| 206    | 服务器已经成功处理了部分 GET 请求。类似于 FlashGet 或者迅雷这类的 HTTP 下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。 　　该请求必须包含 Range 头信息来指示客户端希望得到的内容范围，并且可能包含 If-Range 来作为请求条件。 　　响应必须包含如下的头部域： 　　Content-Range 用以指示本次响应中返回的内容的范围；如果是 Content-Type 为 multipart/byteranges 的多段下载，则每一 multipart 段中都应包含 Content-Range 域用以指示本段的内容范围。假如响应中包含 Content-Length，那么它的数值必须匹配它返回的内容范围的真实字节数。 　　Date 　　ETag 和/或 Content-Location，假如同样的请求本应该返回200响应。 　　Expires, Cache-Control，和/或 Vary，假如其值可能与之前相同变量的其他响应对应的值不同的话。 　　假如本响应请求使用了 If-Range 强缓存验证，那么本次响应不应该包含其他实体头；假如本响应的请求使用了 If-Range 弱缓存验证，那么本次响应禁止包含其他实体头；这避免了缓存的实体内容和更新了的实体头信息之间的不一致。否则，本响应就应当包含所有本应该返回200响应中应当返回的所有实体头部域。 　　假如 ETag 或 Last-Modified 头部不能精确匹配的话，则客户端缓存应禁止将206响应返回的内容与之前任何缓存过的内容组合在一起。 　　任何不支持 Range 以及 Content-Range 头的缓存都禁止缓存206响应返回的内容。 |
| 207    | 由WebDAV(RFC 2518)扩展的状态码，代表之后的消息体将是一个XML消息，并且可能依照之前子请求数量的不同，包含一系列独立的响应代码。 |
| 300    | 被请求的资源有一系列可供选择的回馈信息，每个都有自己特定的地址和浏览器驱动的商议信息。用户或浏览器能够自行选择一个首选的地址进行重定向。 　　除非这是一个 HEAD 请求，否则该响应应当包括一个资源特性及地址的列表的实体，以便用户或浏览器从中选择最合适的重定向地址。这个实体的格式由 Content-Type 定义的格式所决定。浏览器可能根据响应的格式以及浏览器自身能力，自动作出最合适的选择。当然，RFC 2616规范并没有规定这样的自动选择该如何进行。 　　如果服务器本身已经有了首选的回馈选择，那么在 Location 中应当指明这个回馈的 URI；浏览器可能会将这个 Location 值作为自动重定向的地址。此外，除非额外指定，否则这个响应也是可缓存的。 |
| 301    | 被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URI 之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。除非额外指定，否则这个响应也是可缓存的。 　　新的永久性的 URI 应当在响应的 Location 域中返回。除非这是一个 HEAD 请求，否则响应的实体中应当包含指向新的 URI 的超链接及简短说明。 　　如果这不是一个 GET 或者 HEAD 请求，因此浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。 　　注意：对于某些使用 HTTP/1.0 协议的浏览器，当它们发送的 POST 请求得到了一个301响应的话，接下来的重定向请求将会变成 GET 方式。 |
| 302    | 请求的资源现在临时从不同的 URI 响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。 　　新的临时性的 URI 应当在响应的 Location 域中返回。除非这是一个 HEAD 请求，否则响应的实体中应当包含指向新的 URI 的超链接及简短说明。 　　如果这不是一个 GET 或者 HEAD 请求，那么浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。 　　注意：虽然RFC 1945和RFC 2068规范不允许客户端在重定向时改变请求的方法，但是很多现存的浏览器将302响应视作为303响应，并且使用 GET 方式访问在 Location 中规定的 URI，而无视原先请求的方法。状态码303和307被添加了进来，用以明确服务器期待客户端进行何种反应。 |
| 303    | 对应当前请求的响应可以在另一个 URI 上被找到，而且客户端应当采用 GET 的方式访问那个资源。这个方法的存在主要是为了允许由脚本激活的POST请求输出重定向到一个新的资源。这个新的 URI 不是原始资源的替代引用。同时，303响应禁止被缓存。当然，第二个请求（重定向）可能被缓存。 　　新的 URI 应当在响应的 Location 域中返回。除非这是一个 HEAD 请求，否则响应的实体中应当包含指向新的 URI 的超链接及简短说明。 　　注意：许多 HTTP/1.1 版以前的 浏览器不能正确理解303状态。如果需要考虑与这些浏览器之间的互动，302状态码应该可以胜任，因为大多数的浏览器处理302响应时的方式恰恰就是上述规范要求客户端处理303响应时应当做的。 |
| 304    | 如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。304响应禁止包含消息体，因此始终以消息头后的第一个空行结尾。 　　该响应必须包含以下的头信息： 　　Date，除非这个服务器没有时钟。假如没有时钟的服务器也遵守这些规则，那么代理服务器以及客户端可以自行将 Date 字段添加到接收到的响应头中去（正如RFC 2068中规定的一样），缓存机制将会正常工作。 　　ETag 和/或 Content-Location，假如同样的请求本应返回200响应。 　　Expires, Cache-Control，和/或Vary，假如其值可能与之前相同变量的其他响应对应的值不同的话。 　　假如本响应请求使用了强缓存验证，那么本次响应不应该包含其他实体头；否则（例如，某个带条件的 GET 请求使用了弱缓存验证），本次响应禁止包含其他实体头；这避免了缓存了的实体内容和更新了的实体头信息之间的不一致。 　　假如某个304响应指明了当前某个实体没有缓存，那么缓存系统必须忽视这个响应，并且重复发送不包含限制条件的请求。 　　假如接收到一个要求更新某个缓存条目的304响应，那么缓存系统必须更新整个条目以反映所有在响应中被更新的字段的值。 |
| 305    | 被请求的资源必须通过指定的代理才能被访问。Location 域中将给出指定的代理所在的 URI 信息，接收者需要重复发送一个单独的请求，通过这个代理才能访问相应资源。只有原始服务器才能建立305响应。 　　注意：RFC 2068中没有明确305响应是为了重定向一个单独的请求，而且只能被原始服务器建立。忽视这些限制可能导致严重的安全后果。 |
| 306    | 在最新版的规范中，306状态码已经不再被使用。                  |
| 307    | 请求的资源现在临时从不同的URI 响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。 　　新的临时性的URI 应当在响应的 Location 域中返回。除非这是一个HEAD 请求，否则响应的实体中应当包含指向新的URI 的超链接及简短说明。因为部分浏览器不能识别307响应，因此需要添加上述必要信息以便用户能够理解并向新的 URI 发出访问请求。 　　如果这不是一个GET 或者 HEAD 请求，那么浏览器禁止自动进行重定向，除非得到用户的确认，因为请求的条件可能因此发生变化。 |
| 400    | 1、语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求。 　　2、请求参数有误。 |
| 401    | 当前请求需要用户验证。该响应必须包含一个适用于被请求资源的 WWW-Authenticate 信息头用以询问用户信息。客户端可以重复提交一个包含恰当的 Authorization 头信息的请求。如果当前请求已经包含了 Authorization 证书，那么401响应代表着服务器验证已经拒绝了那些证书。如果401响应包含了与前一个响应相同的身份验证询问，且浏览器已经至少尝试了一次验证，那么浏览器应当向用户展示响应中包含的实体信息，因为这个实体信息中可能包含了相关诊断信息。参见RFC 2617。 |
| 402    | 该状态码是为了将来可能的需求而预留的。                       |
| 403    | 服务器已经理解请求，但是拒绝执行它。与401响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。如果这不是一个 HEAD 请求，而且服务器希望能够讲清楚为何请求不能被执行，那么就应该在实体内描述拒绝的原因。当然服务器也可以返回一个404响应，假如它不希望让客户端获得任何信息。 |
| 404    | 请求失败，请求所希望得到的资源未被在服务器上发现。没有信息能够告诉用户这个状况到底是暂时的还是永久的。假如服务器知道情况的话，应当使用410状态码来告知旧资源因为某些内部的配置机制问题，已经永久的不可用，而且没有任何可以跳转的地址。404这个状态码被广泛应用于当服务器不想揭示到底为何请求被拒绝或者没有其他适合的响应可用的情况下。 |
| 405    | 请求行中指定的请求方法不能被用于请求相应的资源。该响应必须返回一个Allow 头信息用以表示出当前资源能够接受的请求方法的列表。 　　鉴于 PUT，DELETE 方法会对服务器上的资源进行写操作，因而绝大部分的网页服务器都不支持或者在默认配置下不允许上述请求方法，对于此类请求均会返回405错误。 |
| 406    | 请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体。 　　除非这是一个 HEAD 请求，否则该响应就应当返回一个包含可以让用户或者浏览器从中选择最合适的实体特性以及地址列表的实体。实体的格式由 Content-Type 头中定义的媒体类型决定。浏览器可以根据格式及自身能力自行作出最佳选择。但是，规范中并没有定义任何作出此类自动选择的标准。 |
| 407    | 与401响应类似，只不过客户端必须在代理服务器上进行身份验证。代理服务器必须返回一个 Proxy-Authenticate 用以进行身份询问。客户端可以返回一个 Proxy-Authorization 信息头用以验证。参见RFC 2617。 |
| 408    | 请求超时。客户端没有在服务器预备等待的时间内完成一个请求的发送。客户端可以随时再次提交这一请求而无需进行任何更改。 |
| 409    | 由于和被请求的资源的当前状态之间存在冲突，请求无法完成。这个代码只允许用在这样的情况下才能被使用：用户被认为能够解决冲突，并且会重新提交新的请求。该响应应当包含足够的信息以便用户发现冲突的源头。 　　冲突通常发生于对 PUT 请求的处理中。例如，在采用版本检查的环境下，某次 PUT 提交的对特定资源的修改请求所附带的版本信息与之前的某个（第三方）请求向冲突，那么此时服务器就应该返回一个409错误，告知用户请求无法完成。此时，响应实体中很可能会包含两个冲突版本之间的差异比较，以便用户重新提交归并以后的新版本。 |
| 410    | 被请求的资源在服务器上已经不再可用，而且没有任何已知的转发地址。这样的状况应当被认为是永久性的。如果可能，拥有链接编辑功能的客户端应当在获得用户许可后删除所有指向这个地址的引用。如果服务器不知道或者无法确定这个状况是否是永久的，那么就应该使用404状态码。除非额外说明，否则这个响应是可缓存的。 　　410响应的目的主要是帮助网站管理员维护网站，通知用户该资源已经不再可用，并且服务器拥有者希望所有指向这个资源的远端连接也被删除。这类事件在限时、增值服务中很普遍。同样，410响应也被用于通知客户端在当前服务器站点上，原本属于某个个人的资源已经不再可用。当然，是否需要把所有永久不可用的资源标记为'410 Gone'，以及是否需要保持此标记多长时间，完全取决于服务器拥有者。 |
| 411    | 服务器拒绝在没有定义 Content-Length 头的情况下接受请求。在添加了表明请求消息体长度的有效 Content-Length 头之后，客户端可以再次提交该请求。 |
| 412    | 服务器在验证在请求的头字段中给出先决条件时，没能满足其中的一个或多个。这个状态码允许客户端在获取资源时在请求的元信息（请求头字段数据）中设置先决条件，以此避免该请求方法被应用到其希望的内容以外的资源上。 |
| 413    | 服务器拒绝处理当前请求，因为该请求提交的实体数据大小超过了服务器愿意或者能够处理的范围。此种情况下，服务器可以关闭连接以免客户端继续发送此请求。 　　如果这个状况是临时的，服务器应当返回一个 Retry-After 的响应头，以告知客户端可以在多少时间以后重新尝试。 |
| 414    | 请求的URI 长度超过了服务器能够解释的长度，因此服务器拒绝对该请求提供服务。这比较少见，通常的情况包括： 　　本应使用POST方法的表单提交变成了GET方法，导致查询字符串（Query String）过长。 　　重定向URI “黑洞”，例如每次重定向把旧的 URI 作为新的 URI 的一部分，导致在若干次重定向后 URI 超长。 　　客户端正在尝试利用某些服务器中存在的安全漏洞攻击服务器。这类服务器使用固定长度的缓冲读取或操作请求的 URI，当 GET 后的参数超过某个数值后，可能会产生缓冲区溢出，导致任意代码被执行[1]。没有此类漏洞的服务器，应当返回414状态码。 |
| 415    | 对于当前请求的方法和所请求的资源，请求中提交的实体并不是服务器中所支持的格式，因此请求被拒绝。 |
| 416    | 如果请求中包含了 Range 请求头，并且 Range 中指定的任何数据范围都与当前资源的可用范围不重合，同时请求中又没有定义 If-Range 请求头，那么服务器就应当返回416状态码。 　　假如 Range 使用的是字节范围，那么这种情况就是指请求指定的所有数据范围的首字节位置都超过了当前资源的长度。服务器也应当在返回416状态码的同时，包含一个 Content-Range 实体头，用以指明当前资源的长度。这个响应也被禁止使用 multipart/byteranges 作为其 Content-Type。 |
| 417    | 在请求头 Expect 中指定的预期内容无法被服务器满足，或者这个服务器是一个代理服务器，它有明显的证据证明在当前路由的下一个节点上，Expect 的内容无法被满足。 |
| 421    | 从当前客户端所在的IP地址到服务器的连接数超过了服务器许可的最大范围。通常，这里的IP地址指的是从服务器上看到的客户端地址（比如用户的网关或者代理服务器地址）。在这种情况下，连接数的计算可能涉及到不止一个终端用户。 |
| 422    | 从当前客户端所在的IP地址到服务器的连接数超过了服务器许可的最大范围。通常，这里的IP地址指的是从服务器上看到的客户端地址（比如用户的网关或者代理服务器地址）。在这种情况下，连接数的计算可能涉及到不止一个终端用户。 |
| 422    | 请求格式正确，但是由于含有语义错误，无法响应。（RFC 4918 WebDAV）423 Locked 　　当前资源被锁定。（RFC 4918 WebDAV） |
| 424    | 由于之前的某个请求发生的错误，导致当前请求失败，例如 PROPPATCH。（RFC 4918 WebDAV） |
| 425    | 在WebDav Advanced Collections 草案中定义，但是未出现在《WebDAV 顺序集协议》（RFC 3658）中。 |
| 426    | 客户端应当切换到TLS/1.0。（RFC 2817）                        |
| 449    | 由微软扩展，代表请求应当在执行完适当的操作后进行重试。       |
| 500    | 服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。一般来说，这个问题都会在服务器的程序码出错时出现。 |
| 501    | 服务器不支持当前请求所需要的某个功能。当服务器无法识别请求的方法，并且无法支持其对任何资源的请求。 |
| 502    | 作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。 |
| 503    | 由于临时的服务器维护或者过载，服务器当前无法处理请求。这个状况是临时的，并且将在一段时间以后恢复。如果能够预计延迟时间，那么响应中可以包含一个 Retry-After 头用以标明这个延迟时间。如果没有给出这个 Retry-After 信息，那么客户端应当以处理500响应的方式处理它。 　　注意：503状态码的存在并不意味着服务器在过载的时候必须使用它。某些服务器只不过是希望拒绝客户端的连接。 |
| 504    | 作为网关或者代理工作的服务器尝试执行请求时，未能及时从上游服务器（URI标识出的服务器，例如HTTP、FTP、LDAP）或者辅助服务器（例如DNS）收到响应。 　　注意：某些代理服务器在DNS查询超时时会返回400或者500错误 |
| 505    | 服务器不支持，或者拒绝支持在请求中使用的 HTTP 版本。这暗示着服务器不能或不愿使用与客户端相同的版本。响应中应当包含一个描述了为何版本不被支持以及服务器支持哪些协议的实体。 |
| 506    | 由《透明内容协商协议》（RFC 2295）扩展，代表服务器存在内部配置错误：被请求的协商变元资源被配置为在透明内容协商中使用自己，因此在一个协商处理中不是一个合适的重点。 |
| 507    | 服务器无法存储完成请求所必须的内容。这个状况被认为是临时的。WebDAV (RFC 4918) |
| 509    | 服务器达到带宽限制。这不是一个官方的状态码，但是仍被广泛使用。 |
| 510    | 获取资源所需要的策略并没有没满足。（RFC 2774）               |

