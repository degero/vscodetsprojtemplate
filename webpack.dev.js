const path = require('path');
const rootPath = path.join(__dirname,'../');
const srcPath = path.join(rootPath,'src');

module.exports = {
    mode: 'development',
    entry: 'index.ts',
    context: srcPath
};