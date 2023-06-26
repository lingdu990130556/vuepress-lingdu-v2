/**
 * 延迟 4000 毫秒后执行 showMessage 函数 【这里用一个对象接收就会只执行一次，否则跳转页面会执行多次】
 */
const constResize=setTimeout(resize, 1800);

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



}



