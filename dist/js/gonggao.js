console.log("加载了。。。");


const a=setTimeout(showMessage, 5000);  // 延迟 1000 毫秒（即 1 秒钟）后执行 showMessage 函数
let myDiv;
let initialLeft;
let ok=false;
function showMessage() {
    console.log("Hello, world!");
    myDiv = document.getElementsByClassName("notice-wrapper")[0];
    initialLeft = parseInt(myDiv.getBoundingClientRect().left); // 获取 myDiv 元素的初始水平位置
    const initialTop = parseInt(myDiv.getBoundingClientRect().top); // 获取 myDiv 元素的初始垂直位置
    const initialH = parseInt(myDiv.getBoundingClientRect().height); // 获取 myDiv 元素的初始高
    x = initialLeft
    y = initialTop; // 初始位置
    h = initialH; // 初始高度
    btnMove = document.getElementById("btnMove");
    btnMove.onclick = delayedMove;
    ok=true;
}


let btnMove = document.getElementById("btnMove");

let x = 100, y = 100, h; // 初始位置


let timer;

let status = 1;// 状态默认1为最大化，0为最小化
/**
 * 最小化
 */
function moveDiv() {
    x += 10; // 每次向右移动 10 个像素
    myDiv.style.left = x + "px"; // 设置水平位置

    y += 5; // 每次向下移动 5 个像素
    myDiv.style.top = y + "px"; // 设置垂直位置

    h += -20;
    myDiv.style.height = h + "px";

    if (x - initialLeft >= 230) { // 如果达到执行次数上限，停止定时器
        clearInterval(timer);
    }
}

/**
 * 还原
 */
function moveDiv2() {
    x += -10; // 每次向右移动 10 个像素
    myDiv.style.left = x + "px"; // 设置水平位置

    y += -5; // 每次向下移动 5 个像素
    myDiv.style.top = y + "px"; // 设置垂直位置

    h += 20;
    myDiv.style.height = h + "px";

    if (x - initialLeft <= 0) { // 如果达到执行次数上限，停止定时器
        clearInterval(timer);
    }
}

/**
 * 监测点击按钮事件
 */
// btnMove.onclick = function () {
//     console.log("点击了。。。")
//     if(!ok){
//         return;
//     }
//     if (status === 1) {
//         timer = setInterval(moveDiv, 15); // 点击按钮后，每隔 50 毫秒执行一次移动操作
//         status = 0
//     } else {
//         timer = setInterval(moveDiv2, 15); // 点击按钮后，每隔 50 毫秒执行一次移动操作
//         status = 1
//
//     }
// };

function delayedMove() {
    setTimeout(function () {
        console.log("点击了。。。")
        if(!ok){
            return;
        }
        if (status === 1) {
            timer = setInterval(moveDiv, 15); // 点击按钮后，每隔 50 毫秒执行一次移动操作
            status = 0
        } else {
            timer = setInterval(moveDiv2, 15); // 点击按钮后，每隔 50 毫秒执行一次移动操作
            status = 1

        }
    }, 0); // 延迟 2000 毫秒后执行
}

// btnMove.onclick = delayedMove;
