/* eslint-disable prettier/prettier */
import Link from "@/components/Link";
import { PageSEO } from "@/components/SEO";
import Tag from "@/components/Tag";
import formatDate from "@/lib/utils/formatDate";
import siteMetadata from "@/data/siteMetadata";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import Tracks from "@/components/Toptracker";
import Image from "next/image";
import NowPlaying from "@/components/NowPlaying";
import useSWR from 'swr';
const MAX_DISPLAY = 8;


export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("content");

  return { props: { posts } };
}

export default function Home({ posts }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/s', fetcher);
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="max-w-6xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex flex-col items-center">
          <p className="mt-2 text-sm text-gray-400 dark:text-gray-400">
            I believe that the best way to know a person is by checking what he
            listens to
          </p>
          <Link href="https://open.spotify.com/user/eism94bqw2k3ctq7denh0bsu2?si=4b75ace0e24e47c7">
            <a
              className="flex flex-row items-center mx-2 my-3 space-x-2 text-sm font-bold leading-6 text-green-600 hover:text-gray-100"
              target="_blank"
              rel="noreferrer noopener"
            >
              {/* eslint-disable-next-line prettier/prettier */}
              <Image
                className="w-6 mr-2 rounded-full"
                width ={20}
                height={20}
                src="/spotify-2.svg"
                alt="Spotify"
              />
              <span>So Here is what i'm currently listening to</span>
            </a>
          </Link>
          <div>
            <NowPlaying/>
           
          </div>
          
        </div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="">
          {!posts.length && "No posts found."}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <Link
                href={`/${slug}`}
                key={slug}
                className="flex px-2 transition duration-200 bg-transparent group hover:bg-gray-100 dark:hover:bg-gray-800 bg-opacity-20 hover:rounded-xl"
              >
                <li className="px-4 py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-start md:justify-center md:items-center md:flex-row md:space-x-6 md:mt-24 ">

          <div className='text-center '>
            <h2 className='font-extrabold text-md md:text-3xl '>
            Skills
            </h2>
            <div className='flex space-y-2 md:space-y-5'>
            <div className='flex flex-col md:flex-row md:space-x-5'>
            <div className ='items-center justify-between '>

            <h1 className="text-2xl leading-9 tracking-tight text-center text-gray-900 border-b-2 mono-type dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
            Frontend 
          </h1>
          <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - React
          </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - Next.js
            </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - TailwindCSS
            </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - Chakra UI
            </h2>

            </div>
            <div>
          <h1 className="text-2xl leading-9 tracking-tight text-center text-gray-900 border-b-2 mono-type dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
            Backend
          </h1>

          <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - Node.js
          </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - Express.js
            </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - MongoDB
            </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - PostgreSQL
            </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - GraphQL
            </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - Django
            </h2>
            </div>
            <div>
          <h1 className="text-2xl leading-9 tracking-tight text-center text-gray-900 border-b-2 mono-type dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
             DevOps
          </h1>
          <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - Docker
          </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - Kubernetes
            </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - AWS
            </h2>

            </div>
            <div>
            <h1 className="text-2xl leading-9 tracking-tight text-center text-gray-900 border-b-2 mono-type dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-xl md:leading-14">
            Script and Automation
          </h1>
          <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - Python
          </h2>
            <h2 className='mt-2 text-gray-500 text-md md:text-xl'>
            - Selenuim
            </h2>
              </div>
              </div>
          </div>
            </div>
            </div>
            <div
          className="flex flex-col items-center justify-center mt-16 space-y-5 md:space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
           CV
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {`Feel free to check out my CV here`}
          </p>
          <div className="flex items-center justify-center mt-6">
            <Link href="/cv.pdf" className="text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300">
              Download
            </Link>
        </div>
            
        </div>
    </>
  );
}
