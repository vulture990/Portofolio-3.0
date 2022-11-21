/* eslint-disable prettier/prettier */
import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import Track from './Track';

export default function Tracks() {
  const { data } = useSWR('/api/t', fetcher);
  console.log("this is tracks",data)

  if (!data) {
    return null;
  }

  return (
    <>
      {data?.items.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
