console.log("加载了。。。");


const a=setTimeout(showMessage, 4000);  // 延迟 1000 毫秒（即 1 秒钟）后执行 showMessage 函数
let myDiv;
// let initialLeft;
let ok=false;
let x = 100, y = 100, h; // 初始位置
let timer;
let status = 1;// 状态默认1为最大化，0为最小化

function showMessage() {
    myDiv = document.getElementsByClassName("notice-wrapper")[0];
    const initialLeft = parseInt(myDiv.getBoundingClientRect().left); // 获取 myDiv 元素的初始水平位置
    const initialTop = parseInt(myDiv.getBoundingClientRect().top); // 获取 myDiv 元素的初始垂直位置
    const initialH = parseInt(myDiv.getBoundingClientRect().height); // 获取 myDiv 元素的初始高
    x = initialLeft
    y = initialTop; // 初始位置
    h = initialH; // 初始高度

    const tishi = document.getElementById("lingdu-tishi");
    tishi.innerHTML +="<span style='color: #282c34'>👈点击按钮最小化</span>";

    const btnMove = document.getElementById("btnMove");

    // btnMove.onclick = delayedMove;
    /**
     * 监测点击按钮事件
     */
    btnMove.onclick = function () {
        console.log("点击了。。。")
        if(!ok){
            return;
        }
        if (status === 1) {
            timer = setInterval(moveDiv, 0); // 点击按钮后，每隔 50 毫秒执行一次移动操作
            status = 0
        } else {
            timer = setInterval(moveDiv2, 0); // 点击按钮后，每隔 50 毫秒执行一次移动操作
            status = 1

        }
    };
    ok=true;






    /**
     * 最小化
     */
    function moveDiv() {
        x += 2; // 每次向右移动 10 个像素
        myDiv.style.left = x + "px"; // 设置水平位置

        y += 4; // 每次向下移动 5 个像素
        myDiv.style.top = y + "px"; // 设置垂直位置

        h += -4;
        myDiv.style.height = h + "px";

        if (x - initialLeft >= 225) { // 如果达到执行次数上限，停止定时器
            clearInterval(timer);
        }
    }

    /**
     * 还原
     */
    function moveDiv2() {
        x += -2; // 每次向右移动 10 个像素
        myDiv.style.left = x + "px"; // 设置水平位置

        y += -4; // 每次向下移动 5 个像素
        myDiv.style.top = y + "px"; // 设置垂直位置

        h += 4;
        myDiv.style.height = h + "px";

        if (x - initialLeft <= 0) { // 如果达到执行次数上限，停止定时器
            clearInterval(timer);
        }
    }

}



