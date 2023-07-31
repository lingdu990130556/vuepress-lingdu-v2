<template>
  <div id="valine">
    <!-- id 将作为查询条件 -->
    <span :id="spanId" class="leancloud_visitors" data-flag-title="Your Article Title">
      <em class="post-meta-item-text">阅读量 </em>
      <i class="leancloud-visitors-count"></i>
    </span>
    <div class="valine-comment" ref="valineContainer"></div>
  </div>
</template>

<script>
// import Valine from 'valine';
export default {
  name: 'Valine',
  data() {
    return {
      spanId: null,
    }
  },
  async mounted() {
    // 动态导入
    const Valine = () => import('valine');
    this.spanId=window.location.pathname
    // 初始化Valine
    const valineConfig = {
      el: this.$refs.valineContainer,
      // el: '#vcomments',
      appId: 'tUXryf9lKAB5i7qHhQ3aUsf7-gzGzoHsz',// your appId
      appKey: 'S32hNw0vE6Vy1d8s9JIbs9Nt', // your appKey
      notify: true,// 通知
      verify: false,
      path: this.spanId,
      visitor: true,// 文章访问量统计。
      avatar: 'mm',
      placeholder: 'write here',
      recordIP: true, // 评论者IP
      enableQQ: true, // 是否启用昵称框自动获取QQ昵称和QQ头像, 默认关闭，需博/网站主主动启用
      length: 70, // 设置链接文本的最大长度为50个字符
      clazzName: "Comment",
    };

    const ValineInstance = await Valine();
    new ValineInstance.default(valineConfig);
    // new Valine(valineConfig);

  },
  // 在Vue渲染完成后，更新Valine评论模板中的头像显示
  updated() {
    const valineAvatarContainers = document.querySelectorAll('.vavatar');
    valineAvatarContainers.forEach(container => {
      const img = container.querySelector('img');
      if (img) {
        img.classList.add('valine-avatar'); // 添加自定义样式类名
      }
    });
  }
};


</script>
<style>
.valine-avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
}

</style>
