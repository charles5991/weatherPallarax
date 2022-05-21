import Image from 'next/image';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { VscLocation } from 'react-icons/vsc';
import { Parallax } from 'react-scroll-parallax';
import Typical from 'react-typical';
import useSWR from 'swr';

import { fetcher } from '@/lib/fetcher';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const [location, setLocation] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      setLocation(`${p.coords.latitude},${p.coords.longitude}`);
    });
  }, []);

  const { data: weather, isValidating } = useSWR<any>(
    `/api/weather?location=${location}&top=true`,
    fetcher
  );

  const content = (child) => (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}
      <div className="relative h-screen w-full">
        <div
          className="fixed inset-0 scale-105 bg-cover bg-bottom bg-no-repeat blur-md brightness-[.85]"
          style={{ backgroundImage: 'url(/assets/images/background.svg)' }}
        ></div>
        <div className="container relative mx-auto flex h-full max-w-screen-md flex-col items-center justify-center px-5">
          <Parallax speed={10}>
            <h1 className="font-ubuntu text-6xl font-bold text-white drop-shadow-lg">
              jweath
            </h1>
          </Parallax>
          <div className="my-6 w-[80vw] bg-black bg-opacity-70 px-2 text-center sm:w-[34rem]">
            <Typical
              steps={['get updated weather from places around the world🌏']}
              loop={1}
            />
          </div>
          <Parallax speed={-2}>
            <div className="mb-7 w-[80vw] rounded-lg border px-5 py-2 shadow-2xl drop-shadow-2xl sm:w-[18rem]">
              {child}
            </div>
          </Parallax>
          {/* <Parallax speed={-5}>
            <Clock
              format={'HH:mm:ss'}
              ticking={true}
              className="text-white drop-shadow-lg "
            />
          </Parallax> */}
        </div>
        <div className="relative z-50 mx-auto max-w-[800px]">
          {props.children}
        </div>
      </div>
    </div>
  );

  if (isValidating && !weather && location) {
    return content(
      <div className="flex items-center justify-between text-white">
        <VscLocation className="mr-2 w-1/5 text-4xl" />
        Loading...
      </div>
    );
  }

  return content(
    weather && weather.data ? (
      <div className="flex items-center justify-around">
        <Image
          className="hover:scale-125"
          src={`/assets/weather/${weather?.data?.icon}`}
          width={55}
          height={55}
          alt={'weather icon'}
        />
        <div className="ml-2 flex w-3/4 flex-col text-white">
          <p className="text-white">Look outside! </p>
          <p className="whitespace-normal text-white sm:whitespace-nowrap">
            It&apos;s {weather?.data?.temperature}&#176;C and{' '}
            <i className="whitespace-pre-wrap">{weather?.data?.condition}</i>
          </p>
        </div>
      </div>
    ) : (
      <div className="flex items-center justify-between text-white">
        <VscLocation className="mr-2 w-1/5 text-4xl" />
        Allow location access for best experience!
      </div>
    )
  );
};

export { Main };
