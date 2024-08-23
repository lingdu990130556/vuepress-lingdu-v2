---
pageClass: 上宽下窄
---

# sentinel

<div  class="gpt_html_div">
    <div id="scrollRef" class="h-full overflow-hidden overflow-y-auto">
        <div id="image-wrapper" class="w-full max-w-screen-xl m-auto dark:bg-[#101014] p-4">
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="https://lingdu.love/favicon.ico" data-image-src="https://lingdu.love/favicon.ico"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/7 17:40:34</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">sentinel</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/7 17:41:01</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>Sentinel是一个开源的分布式系统的流量防控组件，由阿里巴巴集团开发和维护。它主要用于实时监控应用程序在生产环境中的稳定性，并提供实时的流量控制、熔断降级和系统自适应保护等功能。</p>
<p>Sentinel的主要特点和功能包括：</p>
<ol>
<li>流量控制：Sentinel可以通过设置规则和策略，对应用程序的流量进行实时监控和限制，防止流量暴增导致系统崩溃和资源耗尽。</li>
<li>熔断降级：Sentinel可以根据预设的异常情况，自动触发熔断降级机制，快速切断故障服务的访问，并提供降级后的备用响应或错误页面，以保护核心系统的稳定性和可用性。</li>
<li>资源统计：Sentinel可以实时统计和监控系统的负载情况，包括请求量、成功率、响应时间等指标，并提供可视化的监控界面和报警功能。</li>
<li>系统自适应保护：Sentinel可以根据系统负载和资源情况，自动调整流量控制和熔断降级的策略，实现系统的自动保护和优化。</li>
<li>规则配置灵活：Sentinel支持基于QPS（每秒查询率）、线程数、并发数等多种维度的流量控制和熔断降级规则，可以根据实际需求进行灵活配置。</li>
<li>高性能：Sentinel采用异步非阻塞的设计模式，具有较低的性能开销，并且支持水平扩展，适合在高负载场景下使用。</li>
<li>与微服务框架集成：Sentinel可以与Spring Cloud、Dubbo、gRPC等主流微服务框架无缝集成，为分布式系统提供流量防控和稳定性保护。</li>
</ol>
<p>通过使用Sentinel，开发者可以更好地保护和管理自己的应用程序，以应对突发的高流量、异常情况和系统故障。它在阿里巴巴内部得到了广泛的应用，并且已经在社区中得到了广泛的认可和采用。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
        </div>
    </div>
</div>
