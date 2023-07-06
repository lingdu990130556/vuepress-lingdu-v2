<!--全局评论-->
<template>
  <ParentLayout>
    <template #page-bottom>
<!--      <Valine></Valine>-->
      <CommentService :darkmode="isDarkMode" />
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
