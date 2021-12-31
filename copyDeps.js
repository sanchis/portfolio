const fs = require('fs-extra')
const paths = [
  ['node_modules/devicon/devicon.min.css', 'src/scss/devicon/devicon.min.css'],
  ['node_modules/devicon/fonts', 'public/fonts']
]
paths.forEach(path =>
  fs.copySync(path[0], path[1], { overwrite: true, recursive: true })
)
