import { Spotlight } from '@/components/ui/Spotlight';
import React from 'react';
import { Button } from './ui/moving-border';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden max-w-7xl mx-auto">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 relative z-10 w-full md:pt-0 text-center">
          {' '}
          {/* Added text-center class */}
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Master the Art of Music
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Dive into our comprehensive music courses and transform your musical
            journey today. Whether you&apos;re a beginner or looking to refine
            your skills, join us to unlock your true potential.
          </p>
          <div className="flex justify-center mt-4">
            {' '}
            {/* Added flex and justify-center classes */}
            <Link href="/courses">
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default HeroSection;
