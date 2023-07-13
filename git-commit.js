// 更新代码到远程仓库

const {spawn} = require("child_process");
const fs = require('fs-extra');
// 提交代码描述说明
const commitMessage = '更新';
// 远程仓库名称
const repoName = 'origin';
// 远程仓库地址
const repo = 'https://github.com/lingdu990130556/vuepress-lingdu-v2.git'
// 分支名称 放在GitHub上的话可以与主分支区别开就能开启静态页面功能了
const branch = 'main';
// 启动方法
const c=cmd();
/**
 * 执行cmd命令
 */
function cmd(opts) {
    opts = { stdio: `inherit`}
    opts.shell = opts.shell || process.platform === 'win32'


    const path = require('path');

    console.log("正在复制替换 dist 文件夹到 distmain 文件夹...");
    fs.copySync('./dist', './distmain', { overwrite: true });

    console.log("正在切换到 distmain 文件夹...");
    process.chdir(path.join(__dirname, 'distmain'));
    // 检查是否已初始化Git仓库
    const isGitInitialized = fs.existsSync('./.git');
    if (!isGitInitialized) {
        console.log("正在初始化 Git 仓库...");
        let s = spawn('git', ['init'],opts);
        s.on('close', (code) => {
            console.log("Git 仓库初始化完成");
            addAndCommit();
        });
    } else {
        addAndCommit();
    }
    function addAndCommit() {
        console.log("正在将文件添加到暂存区...");
        let s = spawn('git', ['add . '], opts);
        s.on('close', (code) => {
            console.log("文件添加到暂存区完成");
            commitChanges();
        });
    }
    function commitChanges() {
        console.log("正在提交代码并添加提交信息...");
        let s = spawn('git', ['commit', '-m', commitMessage],opts);
        s.on('close', (code) => {
            console.log("代码提交完成");
            createBranch();
        });
    }

    function createBranch() {
        console.log("正在创建一个新分支：" + branch);
        let s = spawn('git', ['branch', '-M', branch],opts);
        s.on('close', (code) => {
            console.log("分支创建完成");
            addRemoteRepository();
        });
    }

    function addRemoteRepository() {
        console.log("正在添加远程仓库地址：" + repo);
        let s = spawn('git', ['remote', 'add', repoName, repo],opts);
        s.on('close', (code) => {
            console.log("远程仓库地址添加完成");
            pushChanges();
        });
    }

    function pushChanges() {
        console.log("正在推送代码到远程仓库...");
        let p = myspawn('git', ['push', '-f', repoName, branch], opts, (stdout, stderr) => {
            console.log("正在推送代码到远程仓库...");
            console.log("stdout:", stdout);
            console.log("stderr:", stderr);
        });
        p.then(r => {
            console.log("代码推送完成");
            console.log("执行结束");
        });
    }

    return '〇°';
}
/**
 * 以 Promise 方式运行 spawn
 * @param {*} cmd 主程序
 * @param {*} args 程序参数数组
 * @param {*} opts spawn 选项
 * @param {*} progressCallback 进度回调函数
 */
function myspawn(cmd, args, opts, progressCallback) {
    return new Promise((resolve, reject) => {
        const child = spawn(cmd, args, opts);
        let stdout = '';
        let stderr = '';
        child.stdout && child.stdout.on('data', data => {
            stdout += data;
            progressCallback(stdout, stderr);
        });
        child.stderr && child.stderr.on('data', data => {
            stderr += data;
            progressCallback(stdout, stderr);
        });
        child.on('error', reject);
        child.on('close', code => {
            resolve({ code, stdout, stderr });
        });
    });
}
