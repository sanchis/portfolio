const fs = require('fs-extra')
const paths = [
  ['node_modules/devicon/devicon.min.css', 'themes/default2021/source/css/devicon.min.css'],
  ['node_modules/devicon/fonts', 'themes/default2021/source/css/fonts']
]
paths.forEach(path =>
  fs.copySync(path[0], path[1], { overwrite: true, recursive: true })
)
