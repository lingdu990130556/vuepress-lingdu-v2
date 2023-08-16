<!--全局评论-->
<template>
  <ParentLayout>
    <template #page-bottom>
<!--      <Valine></Valine>-->
      <CommentService :darkmode="isDarkMode" />
      <!--   备案标注   -->
<!--      <div style="position: relative;margin-left: auto;margin-right: auto;text-align: center; color: #8b949e; font-size: 12px" data-v-99bcade8="" class="copyright">-->
<!--        <a data-v-99bcade8="" href="https://beian.miit.gov.cn/#/Integrated/index">皖ICP备1*******号-1·</a>&nbsp;&nbsp;-->
<!--        <a rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=123456789" target="_blank">公安备案号123456789</a>&nbsp;&nbsp;-->
<!--        Copyright © 2023-2033 〇°-->
<!--      </div>-->
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import { onUnmounted, onMounted, ref } from "vue";
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";

const isDarkMode = ref(false);

onMounted(() => {
  const html = document.documentElement;
  // 在这个方法中调用才能正常使用document
  setTimeout(resize, 4800);
  isDarkMode.value = html.classList.contains("dark");

  // watch theme change
  const observer = new MutationObserver(() => {
    isDarkMode.value = html.classList.contains("dark");
  });

  observer.observe(html, {
    attributeFilter: ["class"],
    attributes: true,
  });

  onUnmounted(() => {
    observer.disconnect();
  });
});

// 引用全局js
import resize from "../public/js/gonggao";

</script>
