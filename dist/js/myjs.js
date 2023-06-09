



lingdu_catch();
/**
 * 卡片鼠标悬浮放大效果
 */
function lingdu_catch(){

    /**
     * 卡片鼠标悬浮放大效果
     * @type {Element}
     */
    const element = document.querySelector('.vp-card');

    element.addEventListener('mouseover', function() {
        element.classList.add('.vp-card');
    });

    element.addEventListener('mouseout', function() {
        element.classList.remove('.vp-card');
    });

}
