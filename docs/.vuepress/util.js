import path from 'path'
import glob from 'glob'  // "glob": "^7.2.3"
// const glob = require('glob');

/**
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



export {getChildren}
