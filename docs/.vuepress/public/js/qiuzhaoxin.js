


setTimeout(dianji, 3000);  // 延迟 3000 毫秒后执行 dianji 函数
/**
 * 页面加载后自动点击播放按钮
 */
function dianji(){
    const btn=document.getElementsByClassName("plyr__controls__item plyr__control")[0];
    btn.click(); // 自动触发按钮的点击事件
}

