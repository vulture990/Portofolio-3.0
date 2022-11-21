/* eslint-disable @next/next/no-img-element */
import Image from "@/components/Image";
import Link from "@/components/Link";

const Hero = () => {
  return (
    <section className="grid items-center justify-between py-8 lg:grid-rows-1 lg:grid-cols-2 min-w-screen">
      <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 xl:mb-0">
        <div className="flex flex-col items-center justify-start mb-4 md:flex-row">
          <Image
            src="/static/images/me.jpg"
            alt="Momo"
            className="w-32 h-32 border-2 border-gray-200 rounded-full shadow-md"
            width={80}
            height={80}
            layout="fixed"
            quality={80}
            priority
            loading="eager"
          />
          <h2 className="ml-2 text-3xl font-extrabold leading-tight font-display sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-5xl">
            Salbi Mohamed
          </h2>
        </div>
        <p className="text-sm text-gray-400 mt- dark:text-gray-400">
          I'm a software engineer based in Rabat, Currently looking for an
          internship .
        </p>
        <p className="mt-2 text-sm text-gray-400 dark:text-gray-400">
          I go by Vulture as my Nickname. My intrests are philosophy,
          psychology, music and technology.
        </p>
        <p className="mt-2 text-sm text-gray-400 dark:text-gray-400">
          Fun Fact about me , Dark Side of the Moon is my favorite album of all
          time :)
        </p>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
        <div className="grid items-start gap-8 my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-amber-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href="/">
              <a className="relative flex items-center py-4 leading-none bg-white divide-x divide-gray-600 rounded-lg px-7 dark:bg-black">
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-green-600 -rotate-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <span className="pr-6 text-gray-900 dark:text-gray-100">
                    Building apps & Freelacing Experiences.
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid items-start gap-8 my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href="/">
              <a className="relative flex items-center py-4 leading-none bg-white divide-x divide-gray-600 rounded-lg px-7 dark:bg-black">
                <span className="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-pink-600 -rotate-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span className="pr-6 text-gray-900 dark:text-gray-100">
                    Educating about Philosophy and psychology.
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid items-start gap-8 my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-fuchsia-600 to-primary-600  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href="/">
              <a className="relative flex items-center py-4 leading-none bg-white divide-x divide-gray-600 rounded-lg px-7 dark:bg-black">
                <span className="flex items-center space-x-5">
                  <img
                    src="1.svg"
                    alt="1"
                    className="w-6 h-6 text-fuchsia-600 -rotate-6"
                  />
                  <span className="pr-6 text-gray-900 dark:text-gray-100">
                    Bloging about music as a guitarist.
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
