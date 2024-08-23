<!--全局评论-->
<template>
  <ParentLayout>
    <template #page-bottom>
<!--      <Valine></Valine>-->
      <CommentService :darkmode="isDarkMode" />
      <!--   备案标注   -->
      <div style="width:300px;margin:0 auto; padding:20px 0; position: relative;text-align: center; color: #8b949e; font-size: 12px" data-v-99bcade8="" class="copyright">
        <a target="_blank"  data-v-99bcade8="" href="https://beian.miit.gov.cn/#/Integrated/index">
          <p style="height:20px;line-height:20px;margin: 0 0 0 5px; color:#939393;">
            皖ICP备2023014487号-1
          </p>
        </a>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34010402704001" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img src="/img/备案图标.png" style="float:left;" alt=""/>
          <p style="float:left;height:20px;line-height:20px;margin: 0 0 0 5px; color:#939393;">
            皖公网安备 34010402704001号
          </p>
        </a><br>
        Copyright © 2023-2033 <a href="http://lingdu.love">〇°</a>
      </div>
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
  setTimeout(resize, 0);
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
import resize from "../public/js/gonggao.js";

</script>
