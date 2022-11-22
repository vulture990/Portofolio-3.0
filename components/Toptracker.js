/* eslint-disable prettier/prettier */
import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import Track from './Track';
import { useState } from 'react';

export default function Tracks() {
  const { data } = useSWR('/api/t', fetcher);
  console.log("this is tracks",data)
  const expand=useState(false);
  if (!data) {
    return null;
  }
  return (
    <>
    {/* make a button that reduces or expands the map or list display */}
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        My Top Hits
      </h2>
      <div className="flex flex-col items-center justify-center w-full max-w-3xl mt-8 space-y-5 md:space-y-8">
        {data?.items.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
        
      ))}
      </div>
    </div>
    
     
    </>
  );
}

