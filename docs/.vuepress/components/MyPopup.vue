<!--返回上次阅读位置自定义提示样式-->
<template>
  <LastReadingPopup v-slot="{ show, goto, message, buttonText }">
    <div v-if="show" class="my-sw-update-popup">
      {{ message }}<br>
      <button @click="goto">{{ buttonText }}</button>
    </div>
  </LastReadingPopup>
</template>

<script>
import LastReadingPopup from 'vuepress-plugin-last-reading/src/LastReadingPopup.vue'

export default {
  components: { LastReadingPopup }
}
</script>

<style>
.my-sw-update-popup {
  text-align: right;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  font-size: 20px;
  padding: 80px;
  border: 5px solid rgba(189, 255, 0, 0.84);
}

.my-sw-update-popup button {
  bottom: 5px;
  border: 1px solid #0bbafa;
  background-color: #0bbafa;
  color: white;
}
</style>
