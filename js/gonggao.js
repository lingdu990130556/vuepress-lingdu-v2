/**
 * 调整大小
 */
function resize() {
    let myDiv;
    let r= '-292px',h='37.67px';
    myDiv = document.getElementsByClassName("vp-notice-wrapper")[0];
    // 默认最小化
    myDiv.style.right = r;
    myDiv.style.height = h;
    const btnMove = document.getElementById("btnMove");
    btnMove.addEventListener('click', function() {
        if (myDiv.style.right === r) {   // 如果隐藏，则显示出来
            myDiv.style.right = '0';
            myDiv.style.height = '532.67px';
        } else {   // 如果音乐列表显示中，则隐藏起来
            myDiv.style.right = r;
            myDiv.style.height = h;
        }
    });

    document.addEventListener('click', function(event) {
        if (!myDiv.contains(event.target)) {
            // 鼠标点击了<div>之外的位置
            myDiv.style.right = r;
            myDiv.style.height = h;
        }
    });
}
export default resize;

