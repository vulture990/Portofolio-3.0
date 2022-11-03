import Mail from './mail.svg'
import Github from './github.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import { motion } from 'framer-motion'


const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

// @ts-ignore
const SocialIcon = ({ kind, href }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null
// @ts-ignore
  const SocialSvg = components[kind]

  return (
    <motion.a
      key={kind}
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 ,duration:2}}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        style={{ height: '1.5rem', width: '1.5rem' }}
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400`}
      />
    </motion.a>
  )
}

export default SocialIcon
