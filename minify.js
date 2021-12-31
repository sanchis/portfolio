const minify = require('html-minifier').minify;
const fs = require('fs')

const files = fs.readdirSync('./dist')
files.filter(file => file.split('.')[1] === 'html').forEach(file => {
  const content = fs.readFileSync(`./dist/${file}`, 'utf8')
  const result = minify(content, {
    removeAttributeQuotes: true,
    removeComments: true,
    collapseWhitespace: true
  });
  fs.writeFileSync(`./dist/${file}`,result)
})

