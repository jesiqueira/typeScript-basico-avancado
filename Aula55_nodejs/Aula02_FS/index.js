const fs = require('fs').promises
const { stat } = require('fs')
const path = require('path')

// fs.readdir(path.resolve(__dirname))
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e))

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir(rootDir)
  // console.log(files)
  walk(files, rootDir)
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)

    if (/\.git/g.test(fileFullPath)) continue

    if (stats.isDirectory()) {
      readdir(fileFullPath)
    }

    if (!/\.html$/g.test(fileFullPath)) continue
    // console.log(file, stats.isDirectory())
    console.log(fileFullPath);
  }
}

readdir('/home/edmar/Desenvolvimento/typeScript-basico-avancado')
