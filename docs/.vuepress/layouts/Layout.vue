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
        <br>
        <a ref="fqElement" id="fq"></a>
      </div>
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import {onUnmounted, onMounted, ref} from "vue";
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

const isDarkMode = ref(false);
const fqElement = ref<HTMLElement | null>(null);

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

  lingdu();

});

// 引用全局js
import resize from "../public/js/gonggao.js";


function lingdu(){
  const iYear = parseInt('2024');
  const iMonth = parseInt('10');
  const iDay = parseInt('5');
  const iHour = parseInt('10');
  const iMinute = parseInt('7');
  const iSecond = parseInt('39');
  //设计一个计时器，1秒钟运行一次
  const timer = setInterval(function () {
    const now = new Date();//现在时间，获取时间戳
    //以前的时间（以前的时间戳）
    const ago = new Date(iYear, iMonth - 1, iDay, iHour, iMinute, iSecond);
    //计算时差
    const ms = now - ago;
    //计算天数
    var day = parseInt(String(ms / (24 * 60 * 60 * 1000)));
    //计算小时
    var hours = parseInt(String(ms % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)));
    //计算分钟
    var min = parseInt(String(ms % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) / (60 * 1000)));
    //计算秒
    var s = parseInt(String(ms % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) % (60 * 1000) / 1000));
    // 计算毫秒
    const milliseconds = parseInt(ms % 1000);
    //把结果反到<h1></h1>里
    // h1.innerHTML = '我们认识已经有' + day + '天' + hours + '小时' + min + '分' + s + '秒了';
    // 把结果反到 <a id="fq"></a> 里
    if (fqElement.value) {
      fqElement.value.innerHTML = '❤️' + day + '天' + hours + '小时' + min + '分' + s + '.' + milliseconds + '秒💕';
    }
  }, 98);
}

</script>

<style scoped>
#fq {
  color: rgba(140, 23, 246, 0.58);
}
</style>