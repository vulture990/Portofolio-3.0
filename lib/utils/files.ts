import fs from 'fs'
import path from 'path'
// @ts-ignore

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x)
// @ts-ignore

const flattenArray = (input) =>
// @ts-ignore

  input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])
// @ts-ignore
const map = (fn) => (input) => input.map(fn)
// @ts-ignore

const walkDir = (fullPath: string) => {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath)
}
// @ts-ignore

const pathJoinPrefix = (prefix: string) => (extraPath: string) => path.join(prefix, extraPath)
// @ts-ignore

const getAllFilesRecursively = (folder: string): string[] =>
  pipe(fs.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder)

export default getAllFilesRecursively
