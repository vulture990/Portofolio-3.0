import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata, { theme } from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { PostFrontMatter } from 'types/PostFrontMatter'
import NewsletterForm from '@/components/NewsletterForm'
import { data } from 'rehype-citation/node/src/citation-js/core/plugins/input'
import { transform } from 'esbuild'
import Tracks from '@/components/Toptracker'
import NowPlaying from '@/components/NowPlaying'

const MAX_DISPLAY = 5

export const getStaticProps: GetStaticProps<{ posts: PostFrontMatter[] }> = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  // retreive all the data from the api endpoint
  // const res=  await fetch('http://localhost:3000/api/top')
  // res to json
  // const data=await res.json()
  // transform data into a function


  return { props: { posts, } }
}

export default function Home({ posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="flex flex-row items-center justify-center md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24">
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
         Athlete
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
        <div className="flex flex-col items-center justify-center mt-16 space-y-5 md:space-y-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
            I believe that one's musical taste shows a lot about the kind of person one's is . Here is what i've been listening to ...
        </p>
          
            <div>
              <NowPlaying/>
           
        <Tracks />
            </div>
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
        <div className="flex flex-col  items-start justify-start  md:justify-center  md:items-center md:flex-row  md:space-x-6 md:mt-24 ">

          <div className='text-center xl'>
            <h2 className='font-extrabold   text-md md:text-3xl  '>
            Skills
            </h2>
            <div className='flex     space-y-2 md:space-y-5'>
            <div className='flex flex-col md:flex-row  md:space-x-5'>
            <div>

            <h1 className="mono-type text-center border-b-2 text-2xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
            Frontend 
          </h1>
          <h2 className='text-md mt-2 text-gray-500 md:text-xl'>
            - React
          </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Next.js
            </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - TailwindCSS
            </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Chakra UI
            </h2>

            </div>
            <div>
          <h1 className="mono-type text-center   border-b-2 text-2xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
            Backend
          </h1>

          <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Node.js
          </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Express.js
            </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - MongoDB
            </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - PostgreSQL
            </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - GraphQL
            </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Django
            </h2>
            </div>
            <div>
          <h1 className="mono-type text-center   border-b-2 text-2xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
             Blockchain development
          </h1>
          <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Solidity
          </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Truffle
            </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Web3.js
            </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Hardhat
            </h2>

            </div>
            <div>
            <h1 className="mono-type text-center   border-b-2 text-2xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
            Script and Automation
          </h1>
          <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Python
          </h2>
            <h2 className=' text-md mt-2 text-gray-500 md:text-xl'>
            - Selenuim
            </h2>
              </div>
              </div>
          </div>
            </div>
            </div>
              <h2 className='font-extrabold  text-center text-md md:text-3xl  '>
                Projects
              </h2>
              <h1 className='text-center text-xs'>
                        Coming Soon ...               
              </h1>
              <div className="flex flex-col items-center justify-center mt-16 space-y-5 md:space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Latest Posts
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {`I write about web development, tech, and life in general , Philosophy and psychology mostly . Here are my latest posts.`}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary } = frontMatter
            return (
              <div key={slug} className="flex flex-col justify-between p-6 transition duration-200 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </p>
                  <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</p>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{summary}</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <Link href={`/blog/${slug}`} className="text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
      
    </>
  )
}