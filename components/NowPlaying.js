/* eslint-disable prettier/prettier */
import useSWR from 'swr';
import { useEffect } from 'react';
import { animate } from 'motion';

import fetcher from 'lib/fetcher';

function AnimatedBars() {
  useEffect(() => {
    animate(
      '#bar1',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(1.5) translateY(-0.082rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar2',
      {
        transform: [
          'scaleY(1.0) translateY(0rem)',
          'scaleY(3) translateY(-0.083rem)',
          'scaleY(1.0) translateY(0rem)'
        ]
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
    animate(
      '#bar3',
      {
        transform: [
          'scaleY(1.0)  translateY(0rem)',
          'scaleY(0.5) translateY(0.37rem)',
          'scaleY(1.0)  translateY(0rem)'
        ]
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ['ease-in-out']
      }
    );
  }, []);

  return (
    <div className="flex items-end w-auto overflow-hidden">
      <span
        id="bar1"
        className="w-1 mr-[3px] h-2 bg-gray-300 dark:bg-gray-500 opacity-75"
      />
      <span
        id="bar2"
        className="w-1 mr-[3px] h-1 bg-gray-300 dark:bg-gray-500"
      />
      <span
        id="bar3"
        className="w-1 h-3 bg-gray-300 dark:bg-gray-500 opacity-80"
      />
    </div>
  );
}

export default function NowPlaying() {
  const { data } = useSWR('/api/s', fetcher);

  return (
    <div className="flex flex-row-reverse items-center w-full mb-8 space-x-0 sm:flex-row sm:space-x-2">
      {data?.songUrl ? (
        <AnimatedBars />
      ) : (
      <></>
      )}
      <div className="inline-flex flex-col w-full max-w-full truncate sm:flex-row">
        {data?.songUrl ? (
          <a
            className="font-medium text-gray-800 truncate capsize dark:text-gray-200 max-w-max"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="font-medium text-gray-800 capsize dark:text-gray-200">
            Not Playing
          </p>
        )}
        <span className="hidden mx-2 text-gray-500 capsize dark:text-gray-300 sm:block">
          {' – '}
        </span>
        <p className="text-gray-500 truncate capsize dark:text-gray-300 max-w-max">
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  );
}
