import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata, { theme } from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="flex flex-col items-start justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
          <h2 className='font-extrabold text-md md:text-3xl'>
            
              Hey, I'm{' '}

           </h2>        
        {/* black and white prism */}

        <svg
          className="w-32 h-32 md:w-48 md:h-48"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
         
          <path
            d="M 50 0 L 100 100 L 0 100 Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0"
            
          />
        </svg>
        <div className='h-16 flex flex-col'>
        <h1 className='  rotate-12 font-extrabold text-xl md:text-2xl text-red-400 '>
         Gym Rat
        </h1>
        <h1  className=' rotate-12 font-extrabold text-xl md:text-2xl text-yellow-400'>
          Guitarist
        </h1>
        <h1  className=' rotate-12 font-extrabold text-xl md:text-2xl text-blue-500 '>
        Software Engineer
        </h1>
        </div>
        </div>
        <div>
            
        </div>
        <div className=" pb-8  space-y-2 md:space-y-5">
          <h1 className="mono-type text-center  text-2xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
          “I'm you and what i see is me” - Pink Floyd 
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start  md:justify-center  md:items-center md:flex-row md:space-x-6 md:mt-24">
          <div className='border-r-2 '>

          <h2 className='font-extrabold  text-md md:text-3xl  '>
            
              My name is Mohamed Salbi 
            </h2>
          <h2 className='font-bold mt-2 text-gray-400 text-md md:text-2xl'>
            Currently ,Looking for an Internship.
          </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            I'm a software engineer based in Rabat, Morocco. I'm passionate about building software that helps people and I'm always looking for new opportunities to learn and grow.
            </h2>


          </div>
            <img
              className="w-32 h-32 md:w-48 md:h-48 rounded-3xl"
              src="p.jpg"
              alt="Mohamed Salbi"
            />

        </div>

      </div>
     
    </>
  )
}