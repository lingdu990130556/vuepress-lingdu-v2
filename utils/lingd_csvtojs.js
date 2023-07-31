const fs = require('fs');
const iconv = require('iconv-lite');
const csv = require('csv-parser');

// const csvFilePath = '实时访客1.csv';
// const jsFilePath = '../docs/.vuepress/public/js/utils/实时访客1.js';
const csvFilePath2 = '实时访客2.csv';
const jsFilePath2 = '../docs/.vuepress/public/js/utils/实时访客2.js';



// const dataset = convertCsvToDataset(csvFilePath,jsFilePath,{
//     delimiter: ',',
//     isFirstRowHeader: true
// });
const dataset2 = convertCsvToDataset(csvFilePath2,jsFilePath2,{
    delimiter: ',',
    isFirstRowHeader: true
});


/**
 * 将本地 GB2312 编码的 CSV 文件转换为 dataset 对象并写入 JS 文件中
 * @param {string} csvFilePath - CSV 文件路径
 * @param {string} jsFilePath - JS 文件路径
 * @param {object} options - 配置选项
 * @param {string} options.delimiter - 列分隔符，默认为 ','
 * @param {boolean} options.isFirstRowHeader - 第一行是否为表头，默认为 true
 * @returns {Promise<void>}
 */
async function convertCsvToDataset(csvFilePath, jsFilePath, options = {}) {
    // 解析配置选项
    const delimiter = options.delimiter ?? ",";
    const isFirstRowHeader = options.isFirstRowHeader ?? true;
    const encoding = options.encoding ?? "gb2312";

    // 创建可写流
    const outputStream = fs.createWriteStream(jsFilePath, {
        flags: 'w',
        encoding: 'utf8'
    });

    // 写入 dataset 对象转换相关代码
    // outputStream.write(`const dataset = {\n`);
    outputStream.write(`dataset = {\n`);
    outputStream.write(`\tcolumns: [],\n`);
    outputStream.write(`\trows: []\n`);
    outputStream.write(`};\n`);

    // 读取 CSV 文件并解析数据
    return new Promise((resolve, reject) => {
        fs.createReadStream(csvFilePath).pipe(iconv.decodeStream(encoding))
            .pipe(csv({ separator: delimiter }))
            .on('headers', (headers) => {
                if (isFirstRowHeader) {
                    headers.forEach((header) => {
                        outputStream.write(`dataset.columns.push("${header}");\n`);
                    });
                } else {
                    headers.forEach((header, index) => {
                        outputStream.write(`dataset.columns.push("Column ${index + 1}");\n`);
                    });
                }
            })
            .on('data', (row) => {
                const values = Object.values(row);
                outputStream.write(`dataset.rows.push(${JSON.stringify(values)});\n`);
            })
            .on('end', () => {
                // outputStream.write(`dataset.rows.reverse();// 反转\n`);
                outputStream.end();
                resolve();
            })
            .on('error', (err) => {
                reject(err);
            });
    });
};
console.log("执行结束。");
