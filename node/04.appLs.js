import fs from 'node:fs/promises'
import path from 'node:path'
import pc from 'picocolors'

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files = []
  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.log('Error: ', error)
    process.exit(1)
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats

    try {
      stats = await fs.stat(filePath)
    } catch (error) {
      console.log('error: ', error)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'D' : 'F'
    const fileSize = stats.size
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.green(fileType)} ${pc.yellow(file.padEnd(20))}, ${pc.red(fileSize.toString().padStart(10))} ${pc.white(fileModified)}`
  })

  const filesInfo = await Promise.all(filesPromises)

  filesInfo.forEach(info => console.log(info))
};

ls(folder)
