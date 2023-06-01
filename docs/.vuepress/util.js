import path from 'path'
import glob from 'glob'  // "glob": "^7.2.3"
// const glob = require('glob');





/**
 * 获取侧边栏数据结构
 * @returns {{}}
 */
function genSidebarConfig() {
    return genSidebarConfig2()
}


function genSidebarConfig2() {
    let sideBarData = {}
    let aaa = []

    getNavbar().forEach(item => {
        let link = item.link;// 路由
        let ch = item.children;// 子集

        let children = getChildren(link);

        if(ch!=null){
            // sideBarData[`${link}`]=aa(ch);
            aa(ch,sideBarData);
        }else {
            sideBarData[`${link}`] = [{text: '〇°', children}];
        }
        if(link!=null){
        }
    })
    console.log('**********************************************************************************')
    // sideBarData.forEach(item=>{
    //     console.log(item)
    //     console.log(item.children)
    //
    // })
    console.log(sideBarData)
    return sideBarData
}


function aa(t,sideBarData){
    t.forEach(item => {
        let a  = []
        let children = getChildren(item.link);
        a.push({
            text: item.text,
            collapsible : true,
            children: children
        })
        sideBarData[`${item.link}`] = a;
    })
    // console.log(a.at(1))
    // return a;
}


/**
 * 递归获取导航栏中的路由地址
 * @param nav
 * @param a
 */
function setNavKeys(nav, a) {
    nav.forEach(item => {
        if (item.link != null && item.link.indexOf('//') < 0 && item.link !== '/') {
            a.push(item.link);
        } else if (item.children != null) {
            setNavKeys(item.children, a)
        }
    })
}

/*
 * 获取文件夹下所有 md 文件名列表
 * input 目录名
 * return Arrary
 */
function getChildren(dirName) {
    const names = []
    let globPath = path.resolve(`./docs/${dirName}*.md`)
    // console.log('globPath:')
    // console.log(globPath)
    glob.sync(globPath).forEach(file => {
        const name = path.parse(file).base
        // console.log('name:')
        // console.log(name)
        if (name.indexOf('qiuzhaoxin') < 0) {
            let lingdu = '';
            // if (name.indexOf('README') < 0) {
            //     // lingdu = name.split('.md')[0];
            //     lingdu = name;
            // }
            lingdu = dirName+name;
            // console.log(lingdu)
            names.push(lingdu)
        }
    })
    // console.log('///////////////////////////////////////////////////////////////////////////')
    // console.log(dirName)
    // console.log(names)
    return names
}



export {genSidebarConfig,getChildren}
