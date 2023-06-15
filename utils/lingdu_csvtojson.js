



const fs = require('fs');
const iconv = require('iconv-lite');
const Papa = require('papaparse');

const csvFilePath = '实时访客2.csv';
const jsonFilePath = '实时访客2.json';

// 读取 CSV 文件并转换编码
const csvData = iconv.decode(fs.readFileSync(csvFilePath), 'GB2312');

// 使用 papaparse 库将 CSV 文件解析为 JSON
const jsonData = Papa.parse(csvData, { header: true });

// 将 JSON 数据写入文件中，指定编码为 UTF-8
fs.writeFile(jsonFilePath, JSON.stringify(jsonData.data), 'utf8', (err) => {
    if (err) throw err;
    console.log('CSV file has been successfully converted to JSON and saved!');
});













// const fs = require('fs');
// const { detect } = require('jschardet');
// const Papa = require('papaparse');
//
// const csvFilePath = '实时访客.csv';
// const jsonFilePath = '实时访客.json';
//
// // 读取 CSV 文件的前几个字节，并判断文件编码方式
// const bufferSize = 256;
// const buffer = Buffer.alloc(bufferSize);
// const fd = fs.openSync(csvFilePath, 'r');
// fs.readSync(fd, buffer, 0, bufferSize, 0);
// fs.closeSync(fd);
//
// const result = detect(buffer);
// console.log(`The CSV file is encoded with ${result.encoding}!`);
//
// // 使用 papaparse 库将 CSV 文件解析为 JSON
// const csvData = fs.readFileSync(csvFilePath, { encoding: result.encoding }); // 指定编码方式
// const jsonData = Papa.parse(csvData, {
//     header: true, // 是否包含表头，默认为 true
//     skipEmptyLines: true, // 是否忽略空行，默认为 true
//     trimHeaders: true, // 是否去除表头两侧的空格，默认为 true
//     trimFields: true // 是否去除字段两侧的空格，默认为 true
// });
//
// // 将 JSON 数据写入文件中，指定编码为 UTF-8
// fs.writeFile(jsonFilePath, JSON.stringify(jsonData.data), 'utf8', (err) => {
//     if (err) throw err;
//     console.log('CSV file has been successfully converted to JSON and saved!');
// });
















//
//
// const fs = require('fs');
// // const fileType = require('file-type');
// const { default: fileType } = await import('file-type');
// const { detect } = require('jschardet');
// const csv = require('csvtojson');
//
// const csvFilePath = '实时访客.csv';
// const jsonFilePath = '实时访客.json';
//
// // 读取 CSV 文件的前几个字节，并判断文件类型和编码方式
// const bufferSize = 256;
// const buffer = Buffer.alloc(bufferSize);
// const fd = fs.openSync(csvFilePath, 'r');
// fs.readSync(fd, buffer, 0, bufferSize, 0);
// fs.closeSync(fd);
//
// const fileInfo = fileType(buffer);
// if (fileInfo && fileInfo.mime === 'text/csv') {
//     const result = detect(buffer);
//     console.log(`The CSV file is encoded with ${result.encoding}!`);
//
//     // 使用 csvtojson 库将 CSV 文件解析为 JSON
//     csv({
//         noheader: false, // 是否包含表头，默认为 true
//         headers: [], // 表头，如果 noheader 为 false，则此项必填
//         ignoreEmpty: true, // 是否忽略空行，默认为 true
//         trim: true, // 是否去除字段两侧的空格，默认为 true
//         checkType: true, // 是否自动检查数据类型，默认为 true
//         delimiter: ',', // CSV 文件分隔符
//         quote: '"', // CSV 文件中的引号
//         encoding: result.encoding // CSV 文件编码方式
//     })
//         .fromFile(csvFilePath)
//         .then((jsonObj) => {
//             // 将 JSON 数据写入到文件中，指定编码为 UTF-8
//             fs.writeFile(jsonFilePath, JSON.stringify(jsonObj), 'utf8', (err) => {
//                 if (err) throw err;
//                 console.log('CSV file has been successfully converted to JSON and saved!');
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// } else {
//     console.log('The file is not a CSV file!');
// }





















//
//
//
//
//
//
//
// const csvFilePath = '实时访客.csv';
// const jsonFilePath = '实时访客.json';
//
// const csv = require('csvtojson');
// const fs = require('fs');
//
// // 指定 CSV 文件编码为 GBK
// csv({
//     encoding: 'ISO8859-1'
// })
//     .fromFile(csvFilePath)
//     .then((jsonObj) => {
//         // 将 JSON 数据写入到文件中，指定编码为 UTF-8
//         fs.writeFile(jsonFilePath, JSON.stringify(jsonObj), 'utf8', (err) => {
//             if (err) throw err;
//             // console.log('CSV file has been successfully converted to JSON and saved!');
//             console.log('csv文件已成功转换为JSoN并保存!');
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });
//
//
//
// //检查编码，引用了 jschardet
// function checkEncoding(base64Str) {
//     //这种方式得到的是一种二进制串
//     var str = atob(base64Str.split(";base64,")[1]);
//     //        console.log(str);
//     //要用二进制格式
//     var encoding = jschardet.detect(str);
//     encoding = encoding.encoding;
//     console.log( encoding );
//     if (encoding === "windows-1252") { //有时会识别错误（如UTF8的中文二字）
//         encoding = "ANSI";
//     }
//     return encoding;
// }
//
//
//
//
//
//
// var inputFile = document.querySelector("input[type='file']");
// inputFile.onchange = (event) => {
//     // console.log(event);
//     var file = inputFile.files[0];
//     csv2arr(function(res){
//         console.log(res)
//     }, file);
// }
// function csv2arr(callback, file) {
//     var fReader = new FileReader();
//     fReader.readAsDataURL(file);
//
//     // 显示进度
//     var progress = document.querySelector("progress");
//     progress.max = file.size;
//     progress.value = 0;
//     fReader.onprogress = (event) => {
//         progress.value = event.loaded;
//     }
//
//     fReader.onload = function (evt) {
//         var data = evt.target.result;
//
//         //        console.log( data );
//
//         var encoding = checkEncoding(data);
//
//         //        console.log(encoding);
//
//         //转换成二维数组，需要引入Papaparse.js
//
//         Papa.parse(file, {
//             encoding: encoding,
//             complete: function (results) { // UTF8 \r\n与\n混用时有可能会出问题
//                 var res = results.data;
//                 if (res[res.length - 1] == "") { //去除最后的空行
//                     res.pop();
//                 }
//                 callback && callback(res);
//             }
//
//         });
//     }
//     fReader.onerror = function (evt) {
//         //        console.log(evt);
//         alert("文件已修改，请重新选择(Firefox)\nThe file has changed,please select again.(Firefox)");
//     }
//
//     //检查编码，引用了 jschardet
//     function checkEncoding(base64Str) {
//         //这种方式得到的是一种二进制串
//         var str = atob(base64Str.split(";base64,")[1]);
//         //        console.log(str);
//         //要用二进制格式
//         var encoding = jschardet.detect(str);
//         encoding = encoding.encoding;
//         console.log( encoding );
//         if (encoding === "windows-1252") { //有时会识别错误（如UTF8的中文二字）
//             encoding = "ANSI";
//         }
//         return encoding;
//     }
// }









