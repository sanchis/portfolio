const fs = require('fs-extra')
const paths = [
  ['node_modules/devicon/devicon.min.css', 'src/scss/devicon/devicon.min.css'],
  ['node_modules/devicon/fonts', 'public/fonts']
]
paths.forEach(path =>
  fs.copySync(path[0], path[1], { overwrite: true, recursive: true })
)

const content = fs.readFileSync(paths[0][1],'utf-8')
const regex = new RegExp(/url\("([\w\/+\.\?\#]+)"\)/,'gm')

let m;
let newContent = content

while ((m = regex.exec(newContent)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    const group2 = m[1]

    const removePathStart = group2.indexOf('?')
    const removePathEnd = group2.indexOf('#') === -1 ? undefined: removePathStart + (group2.indexOf('#') - removePathStart)
    const partToReplace = group2.substring(removePathStart,removePathEnd) // group 2
    const contentFixed = `/${group2.replace(partToReplace,'')}`

    newContent = newContent.replace(group2, contentFixed)
    fs.writeFileSync(paths[0][1],newContent)
}
