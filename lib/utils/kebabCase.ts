// @ts-ignore
import { slug } from 'github-slugger'
// @ts-ignore
const kebabCase = (str: string) => slug(str)

export default kebabCase
