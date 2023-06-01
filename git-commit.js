console.log('正在创建git对象。。')
const git = require('simple-git')
const path = './dist'
const commitMessage = '更新 ' + getTime();
const repo = 'https://github.com/lingdu990130556/vuepress-lingdu-v2.git'
console.log('正在init本地仓库。。')
const g = git(path).init()
console.log('正在添加' + path + '下所有文件到git记录。。')
g.add('./*')
console.log('正在提交到本地仓库。。')
g.commit(commitMessage)
console.log('正在创建main分支。。')
g.branch(['-M', 'main'])
// 未变更而重复提交时放开此段代码不会报错
// g.remote(['rm', 'origin'], (err) => {
//     if (err) {
//         console.error('Error occurred during deleting remote repository:', err);
//         // return;
//     }else {
//         console.log('Remote repository "origin" has been deleted successfully!');
//     }
// })
console.log('正在添加远程仓库地址：' + repo + '。。')
g.addRemote('origin', repo)
console.log('正在推送到远程仓库。。。')
g.push(['-f', 'origin', 'main'], () => {
    console.log("推送成功！");
})
    .then(() => {
        console.log('Code pushed to remote repository successfully!');
    })
    .catch((err) => {
        console.error('Error occurred during pushing code to remote repository:', err);
    })

function getTime() {
    const today = new Date();
    const year = today.getFullYear();
    const month = padNumber(today.getMonth() + 1);
    const date = padNumber(today.getDate());
    const hour = padNumber(today.getHours());
    const minute = padNumber(today.getMinutes());
    const second = padNumber(today.getSeconds());

    const formattedTime = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
    console.log(formattedTime);
    return formattedTime;

    function padNumber(num) {
        return num.toString().padStart(2, '0');
    }
}
