/* eslint-disable prettier/prettier */
import siteMetadata from "@/data/siteMetadata";
import { PageSEO } from "@/components/SEO";
import usesData from "@/data/usesData";
import Link from "@/components/Link";

export default function Uses() {
  return (
    <>
      <PageSEO
        title={`Uses - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700 max-w-6xl mx-auto">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tools
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some of the tools that I use on a daily basis that helps me do my work and be more productive .
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-row flex-wrap">
            {usesData.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                className="w-full md:w-1/2 p-6 hover:bg-gray-100 hover:bg-opacity-40 hover:rounded-xl group dark:hover:bg-opacity-40 dark:hover:bg-gray-500 backdrop-filter transition duration-200 cursor-pointer mb-4"
              >
                <div className="flex items-center justify-start">
                  <div className="flex-shrink-0 p-3 font-sans text-gray-700 dark:text-gray-50 ">
                    <svg
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="leading-6 text-center text-gray-700 dark:text-gray-50 align-middle stroke-current w-12 h-12"
                    >
                      <path d="M4 17L10 11 4 5" />
                      <path d="M12 19L20 19" />
                    </svg>
                  </div>
                  <div className="flex flex-col p-3">
                    <h3 className="text-sm font-bold leading-5 text-gray-800 dark:text-white truncate sm:text-base lg:text-base">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 sm:text-base lg:text-sm xl:text-base">
                      {d.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
