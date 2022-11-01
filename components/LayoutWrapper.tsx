import { useState, useEffect, useRef } from 'react'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import {Logo} from '@/components/Logo'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import { Whitelogo } from './Whitelogo'
import { useTheme } from 'next-themes'
import SocialIcon from './social-icons'



interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  const lightlinkBaseStyle =
  "mr-4 cursor-pointer border-b-4  hover:border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-1 font-bold text-gray-900 sm:p-4 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400"
  const darklinkBaseStyle =
  "mr-4 cursor-pointer border-b-4 border-gray-300  hover:border-gray-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-1 font-bold text-gray-100 sm:p-4 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400"
  const [stuck, setStuck] = useState(false)
  const ref = useRef()
  const { theme, setTheme, resolvedTheme } = useTheme()

  const stuckClasses =
    'py-2 sticky top-n-1 z-50 transition-all backdrop isSticky mx-auto border-b border-slate-900/10 dark:border-slate-300/10 mb-16 w-full'
  const unstuckClasses =
    'py-2 md:py-8 sticky top-n-1 z-50 transition-all backdrop mx-auto border-b border-b-0 border-slate-900/10 dark:border-slate-300/10 mb-16 w-full'

  const classes = stuck ? stuckClasses : unstuckClasses
  useEffect(() => {
    const cachedRef = ref.current
    const observer = new IntersectionObserver(
      ([e]) => {
        setStuck(e.intersectionRatio < 1)
      },
      { threshold: [1.0] }
    )
    observer.observe(cachedRef)
    return () => observer.unobserve(cachedRef)
  }, [ref])

  return (
    <>
      <header className={classes} ref={ref}>
        <div className="flex justify-between items-center max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
          <div>
            <Link href="/" aria-label="rooks blog">
              <div className="flex items-center justify-between">
                  <div className=" text-2xl font-semibold sm:block title mono-type hover:text-primary-600 dark:hover:text-primary-400">
                  <div className=" mr-3">
                    {
                    theme==='dark' || theme==undefined   ?
                     <Whitelogo/>
                    :
                    <Logo/>
                    }

                
                  </div>
                  </div>
                
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={theme==='dark' ? darklinkBaseStyle : lightlinkBaseStyle}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <MobileNav />
            <div className="flex items-center  mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind="github" href={siteMetadata.github} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} />
          
            <ThemeSwitch />
          </div>
        </div>
        </div>
      </header>
      <SectionContainer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
