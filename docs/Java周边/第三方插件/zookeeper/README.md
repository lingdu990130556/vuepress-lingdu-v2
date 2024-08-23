---
pageClass: 上宽下窄
---

# zookeeper

<div  class="gpt_html_div">
    <div id="scrollRef" class="h-full overflow-hidden overflow-y-auto">
        <div id="image-wrapper" class="w-full max-w-screen-xl m-auto dark:bg-[#101014] p-4">
<!--问-->
<div class="flex w-full mb-6 overflow-hidden flex-row-reverse"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 ml-2"><span class="n-avatar" style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var(--n-avatar-size-override, 34px);"><img loading="eager" src="https://lingdu.love/favicon.ico" data-image-src="https://lingdu.love/favicon.ico"><!----></span></div><div class="overflow-hidden text-sm items-end"><p class="text-xs text-[#b4bbc4] text-right">2023/8/7 18:07:44</p><div class="flex items-end gap-1 mt-2 flex-row-reverse"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#d2f9d1] dark:bg-[#a1dc95]"><div class="leading-relaxed break-words"><div class="whitespace-pre-wrap">zookeeper</div></div></div><div class="flex flex-col"><!----><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
<!--答-->
<div class="flex w-full mb-6 overflow-hidden"><div class="flex items-center justify-center flex-shrink-0 h-8 overflow-hidden rounded-full basis-8 mr-2"><span class="text-[28px] dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" width="1em" height="1em"><path d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1,0,.08L13,26.6A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,0-.09L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.08V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z" fill="currentColor"></path></svg></span></div><div class="overflow-hidden text-sm items-start"><p class="text-xs text-[#b4bbc4] text-left">2023/8/7 18:08:09</p><div class="flex items-end gap-1 mt-2 flex-row"><div class="text-black text-wrap min-w-[20px] rounded-md px-3 py-2 bg-[#f4f6f8] dark:bg-[#1e1e20]"><div class="leading-relaxed break-words"><div class="markdown-body"><p>ZooKeeper（动物管理者）是一个开源的分布式协调服务，由Apache软件基金会维护。它为分布式应用程序提供了可靠的协调和同步服务，使得分布式系统可以高效地进行通信、协作和管理。</p>
<p>ZooKeeper的主要特点和功能包括：</p>
<ol>
<li>分布式协调：ZooKeeper提供了一个分布式的命名空间，可以用于存储和管理分布式应用程序的配置信息、状态信息等。通过ZooKeeper，应用程序可以在不同节点之间进行协调和通信，实现一致性和顺序性操作。</li>
<li>数据发布/订阅：ZooKeeper支持数据发布和订阅的模式，应用程序可以监听特定节点的变化，并接收相关的通知。这为分布式应用程序的事件通知和数据更新提供了便利。</li>
<li>分布式锁：ZooKeeper提供了分布式锁的机制，可以确保分布式系统中的互斥访问和资源竞争问题。应用程序可以基于ZooKeeper实现一些分布式锁算法，保证关键资源的独占性。</li>
<li>顺序访问：ZooKeeper支持顺序访问节点的能力，可以为每个节点分配一个唯一的递增数字作为节点名称的后缀，实现有序的访问和操作。</li>
<li>高可用性：ZooKeeper使用主从架构，可以在多个服务器之间进行数据复制和故障转移，保证服务的高可用性和容错性。当其中一个节点发生故障时，系统可以自动选举新的主节点来继续提供服务。</li>
<li>轻量级和高性能：ZooKeeper的设计目标是轻量级和高性能，它使用基于内存的数据存储和高效的通信协议，能够处理大规模的并发请求和数据访问操作。</li>
<li>安全性：ZooKeeper支持访问控制列表（ACL）机制，可以对节点进行安全认证和权限控制，实现对数据的保护和访问控制。</li>
</ol>
<p>ZooKeeper在分布式系统中发挥着重要的角色，被广泛应用于分布式事务、命名服务、任务协调、配置管理等场景。它提供了一种可靠的分布式协调服务，为分布式应用程序的开发和部署提供了便利和支持。</p>
</div></div></div><div class="flex flex-col"><button class="mb-2 transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-300"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.537 19.567A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 2.136-.67 4.116-1.81 5.74L17 12h3a8 8 0 1 0-2.46 5.772l.997 1.795Z"></path></svg></button><!----><button class="transition text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class=" iconify iconify--ri" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"></path></svg></button><!----></div></div></div></div>
        </div>
    </div>
</div>
